'use client'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, serverTimestamp, doc, getDoc } from 'firebase/firestore';
import { useCart } from '@/components/CartContext';
import Swal from 'sweetalert2';
import imageCompression from 'browser-image-compression';
import { useAppContext, secondaryColoring } from '@/components/Context';

export default function DirectTransferPage() {
  const router = useRouter();
  const { clearCart } = useCart();
  const [currentUser, setCurrentUser] = useState(null);
  const [transferData, setTransferData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [proofFile, setProofFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { seller_email } = useAppContext();

  const [sellerBank, setSellerBank] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stored = localStorage.getItem('pendingTransferOrder');
        if (stored) {
          setTransferData(JSON.parse(stored));
        } else {
          Swal.fire('No Order Found', 'Please start your payment process again.', 'warning');
          router.push('/');
          return;
        }

        const bankDocRef = doc(db, "settings", "bankAccount");
        const bankSnap = await getDoc(bankDocRef);
        if (bankSnap.exists()) {
          setSellerBank(bankSnap.data());
        }
      } catch (err) {
        console.error("Error loading direct transfer data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const handleCopy = (text, label) => {
    if (!text) return;
    navigator.clipboard.writeText(String(text));
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: `${label} copied to clipboard!`,
      showConfirmButton: false,
      timer: 2000
    });
  };

  const compressImage = async (file, maxSizeKB = 100) => {
    if (!file) throw new Error("No file provided");

    const options = {
      maxSizeMB: maxSizeKB / 1024,
      maxWidthOrHeight: 800,
      useWebWorker: true,
      fileType: "image/jpeg",
    };

    try {
      return await imageCompression(file, options);
    } catch (error) {
      console.error("Compression failed, using original file:", error);
      return file;
    }
  };

  const handleCompleteTransferOrder = async () => {
    if (!proofFile) {
      Swal.fire('Payment Proof Required', 'Please upload your payment receipt or screenshot before clicking I Have Paid.', 'warning');
      return;
    }

    setIsSubmitting(true);
    Swal.fire({
      title: 'Verifying & Completing Order...',
      text: 'Please wait...',
      allowOutsideClick: false,
      showConfirmButton: false
    });
    Swal.showLoading();

    try {
      let proofUrl = '';

      if (proofFile) {
        const compressedBlob = await compressImage(proofFile, 100);

        const data = new FormData();
        data.append("file", compressedBlob, "payment_proof.jpg");
        data.append("upload_preset", "bees_interior");
        data.append("folder", "payment_proof_pinkles_global");

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/aqxyleoh/image/upload",
          {
            method: "POST",
            body: data,
          }
        );

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.error?.message || "Image upload failed");
        }

        proofUrl = result.secure_url;
      }

      const uniqueOrderNumber = `ORDER-${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 900 + 100)}`;
      const buyerEmail = currentUser?.email || transferData.accountInfo?.email || '';
      const sellerEmail = seller_email;

      const subtotal = Number(transferData.subtotal || transferData.finalTotal || 0);
      const deliveryFee = Number(transferData.deliveryFee || 0);
      const discount = Number(transferData.discount || 0);
      const finalTotal = Number(transferData.finalTotal || subtotal + deliveryFee - discount);

      const orderPayload = {
        orderNumber: uniqueOrderNumber,
        userId: currentUser ? currentUser.uid : (transferData.userId || 'guest'),
        items: transferData.items || [],
        deliveryAddress: transferData.deliveryAddress || null,
        subtotal,
        deliveryFee,
        discount,
        finalTotal,
        promoCode: transferData.promoCode || null,
        orderNote: transferData.orderNote || '',
        currency: transferData.currency || 'NGN',
        accountInfo: transferData.accountInfo || {
          name: currentUser?.displayName || 'Valued Customer',
          email: buyerEmail,
          phone: 'Not provided'
        },
        paymentType: 'DIRECT BANK TRANSFER',
        paymentStatus: 'Pending Verification',
        orderStatus: 'Pending',
        paymentProofUrl: proofUrl,
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, "orders"), orderPayload);

      try {
        const emailPayload = {
          ...orderPayload,
          createdAt: new Date().toISOString()
        };

        await fetch('/api/send-order-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderId: docRef.id,
            payload: emailPayload,
            recipients: [buyerEmail, sellerEmail].filter(Boolean)
          })
        });
      } catch (emailErr) {
        console.error("Error triggering email notification:", emailErr);
      }

      if (typeof clearCart === 'function') clearCart();
      localStorage.removeItem('selectedAddress');
      localStorage.removeItem('pendingTransferOrder');
      localStorage.removeItem('appliedDiscount');
      localStorage.removeItem('appliedPromoName');

      await Swal.fire({
        title: 'Order Submitted Successfully!',
        text: 'Your payment proof has been uploaded. We will verify your transfer shortly.',
        icon: 'success',
        confirmButtonText: 'View My Orders'
      });

      router.push('/dashboard/myorders');

    } catch (error) {
      console.error("Error completing direct transfer order:", error);
      Swal.fire('Error', error.message || 'Failed to submit order. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
      Swal.close();
    }
  };

  if (loading || !transferData) {
    return <LoadingText>Loading Direct Transfer Details...</LoadingText>;
  }

  const finalAmount = Number(transferData.finalTotal || transferData.subtotal || 0);

  return (
    <Container>
      <PageTitle>Direct Bank Transfer Checkout</PageTitle>

      <InstructionCard>
        <h3>📋 Transfer Instructions</h3>
        <InstructionsList>
          <li>Transfer the exact amount of <strong>₦{finalAmount.toLocaleString()}</strong> to the bank account details shown below.</li>
          <li>You can switch to your banking mobile app to complete the transfer and return here.</li>
          <li>After successful transfer, upload your payment receipt or screenshot (Proof of Payment).</li>
          <li>Click the <strong>"I Have Paid"</strong> button to finalize your order.</li>
        </InstructionsList>
      </InstructionCard>

      <DetailsGrid>
        <BankCard>
          <h3>Seller Bank Details</h3>
          {sellerBank ? (
            <>
              <DetailRow>
                <span>Bank Name:</span>
                <strong>{sellerBank.bankName}</strong>
              </DetailRow>
              <DetailRow>
                <span>Account Name:</span>
                <strong>{sellerBank.accountName}</strong>
              </DetailRow>
              <DetailRow>
                <span>Account Number:</span>
                <CopyBox>
                  <strong>{sellerBank.accountNumber}</strong>
                  <CopyBtn onClick={() => handleCopy(sellerBank.accountNumber, 'Account Number')}>Copy</CopyBtn>
                </CopyBox>
              </DetailRow>
            </>
          ) : (
            <p style={{ color: '#dc2626', fontSize: '0.9rem', fontStyle: 'italic' }}>
              ⚠️ Seller has not configured a bank account yet. Please contact support.
            </p>
          )}
          <DetailRow highlight>
            <span>Amount to Pay:</span>
            <CopyBox>
              <strong>₦{finalAmount.toLocaleString()}</strong>
              <CopyBtn onClick={() => handleCopy(finalAmount, 'Amount')}>Copy</CopyBtn>
            </CopyBox>
          </DetailRow>
        </BankCard>

        <UploadCard>
          <h3>Upload Payment Proof</h3>
          <UploadGroup>
            <label>Select Receipt / Screenshot (Image):</label>
            <FileInput 
              type="file" 
              accept="image/*"
              onChange={(e) => setProofFile(e.target.files[0])}
            />
            {proofFile && <FileName>Selected: {proofFile.name}</FileName>}
          </UploadGroup>

          <PaidButton onClick={handleCompleteTransferOrder} disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'I HAVE PAID'}
          </PaidButton>
        </UploadCard>
      </DetailsGrid>
    </Container>
  );
}

// --- Styled Components ---

const PrimaryNavy = "#1E5A44";
const PrimaryCyan = "#00AEEF";
const Dark = "#0f172a";
const Border = "#cbd5e1";
const White = "#ffffff";
const TextMuted = "#475569";
const ThemeGradient = `linear-gradient(135deg, #1E5A44 0%, ${secondaryColoring} 100%)`;

const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
  padding: 0 20px;
  box-sizing: border-box;
  color: ${Dark};
`;

const PageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 20px;
  border-bottom: 2px solid ${PrimaryCyan};
  padding-bottom: 10px;
  color: ${PrimaryNavy};
`;

const InstructionCard = styled.div`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;

  h3 {
    margin-top: 0;
    color: #166534;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
`;

const InstructionsList = styled.ol`
  margin: 0;
  padding-left: 20px;
  color: ${TextMuted};
  font-size: 0.95rem;
  line-height: 1.6;

  li {
    margin-bottom: 6px;
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BankCard = styled.div`
  background: ${White};
  border: 1px solid ${Border};
  border-top: 4px solid ${PrimaryNavy};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(11, 27, 72, 0.04);

  h3 {
    margin-top: 0;
    color: ${PrimaryNavy};
    font-size: 1.1rem;
    margin-bottom: 16px;
    border-bottom: 1px solid ${Border};
    padding-bottom: 8px;
  }
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  font-size: 0.95rem;
  background: ${props => (props.highlight ? '#f8fafc' : 'transparent')};
  padding: ${props => (props.highlight ? '8px 10px' : '0')};
  border-radius: 6px;
  border: ${props => (props.highlight ? `1px dashed ${PrimaryCyan}` : 'none')};

  span {
    color: ${TextMuted};
  }
  strong {
    color: ${Dark};
  }
`;

const CopyBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CopyBtn = styled.button`
  background: ${PrimaryNavy};
  color: ${White};
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: ${PrimaryCyan};
  }
`;

const UploadCard = styled.div`
  background: ${White};
  border: 1px solid ${Border};
  border-top: 4px solid ${PrimaryCyan};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(11, 27, 72, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin-top: 0;
    color: ${PrimaryNavy};
    font-size: 1.1rem;
    margin-bottom: 16px;
    border-bottom: 1px solid ${Border};
    padding-bottom: 8px;
  }
`;

const UploadGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 0.85rem;
    color: ${TextMuted};
    margin-bottom: 8px;
    font-weight: 600;
  }
`;

const FileInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${Border};
  border-radius: 6px;
  font-size: 0.9rem;
  box-sizing: border-box;
`;

const FileName = styled.p`
  font-size: 0.85rem;
  color: #16a34a;
  margin-top: 6px;
  font-weight: 600;
  word-break: break-all;
`;

const PaidButton = styled.button`
  width: 100%;
  background: ${ThemeGradient};
  color: ${White};
  border: none;
  padding: 14px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.92;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const LoadingText = styled.p`
  text-align: center;
  padding: 60px;
  font-size: 1.1rem;
  color: ${PrimaryNavy};
  font-weight: 600;
`;