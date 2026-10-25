"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { useAppContext } from "@/components/Context";

const SectionPadding = styled.section`
  padding: 4.5rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const CenteredHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const SmallTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: ${(props) => props.$goldAccent || "#E2B04A"};
  text-transform: uppercase;
  margin-bottom: 0.8rem;

  &::before,
  &::after {
    content: "";
    width: 18px;
    height: 1px;
    background-color: ${(props) => props.$goldAccent || "#E2B04A"};
  }
`;

const MainTitle = styled.h1`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.6rem;
  font-weight: 400;
  color: ${(props) => props.$darkText || "#1A1A1A"};
  line-height: 1.25;
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const DescriptionText = styled.p`
  font-size: 0.88rem;
  color: ${(props) => props.$mutedText || "#66625b"};
  line-height: 1.6;
  margin: 0;
  font-weight: 300;
`;

const PaymentCard = styled.div`
  max-width: 440px;
  margin: 0 auto;
  background: ${(props) => props.$cardBg || "#FFFFFF"};
  border: 1px solid ${(props) => props.$borderColor || "#E2DDD5"};
  border-radius: 4px;
  padding: 1.8rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const AmountInputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid ${(props) => props.$borderColor || "#E2DDD5"};
    border-radius: 2px;
    font-size: 0.88rem;
    outline: none;
    background: #faf8f4;
  }

  select {
    width: 80px;
    padding: 0.75rem;
    border: 1px solid ${(props) => props.$borderColor || "#E2DDD5"};
    border-radius: 2px;
    font-size: 0.88rem;
    background: #faf8f4;
    outline: none;
  }
`;

const PayNowButton = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: #11382b;
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const DirectTransferButton = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: #faf8f4;
  color: ${(props) => props.$mutedText || "#66625b"};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: 1px solid ${(props) => props.$borderColor || "#E2DDD5"};
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => props.$goldAccent || "#E2B04A"};
    color: ${(props) => props.$darkText || "#1A1A1A"};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default function SecurePaymentSection({ themeColors }) {
  const router = useRouter();
  const { payWithPaystack } = useAppContext();

  const [paymentAmount, setPaymentAmount] = useState("");
  const [currency, setCurrency] = useState("₦");
  const [service, setService] = useState("Service");

  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const { GoldAccent, CardBg, DarkText, MutedText, BorderColor } = themeColors || {};

  // Track page path for service identity
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/interior-decor") {
        setService("Interior Decor");
      } else if (window.location.pathname === "/cleaning") {
        setService("Cleaning");
      } else if(window.location.pathname==='/properties'){
        setService("Properties");
      } else if(window.location.pathname==='/propety-management'){
        setService("Property Management")
      }else if(window.location.pathname==='/legal-mortgage'){
        setService("Legal and Mortgage")
      }else if (window.location.pathname==='/business-consulting'){
        setService("Business Consulting")
      }else {
        setService("Service")
      }
    }
  }, []);

  // Sync auth state & user details
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            setUserData(userSnap.data());
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      } else {
        setCurrentUser(null);
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const numAmount = Number(paymentAmount) || 0;

  // Helper function to check login state before payment
  const checkAuthAndRequireLogin = async () => {
    if (!currentUser) {
      const res = await Swal.fire({
        title: "Login Required",
        text: "You must be logged in to make a payment. Please click Login to continue.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#11382b",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
      });

      if (res.isConfirmed) {
        router.push("/login");
      }
      return false;
    }
    return true;
  };

  // Paystack Payment Handler
  const handlePayNow = async () => {
    // 1. Ensure user is logged in
    const isLoggedIn = await checkAuthAndRequireLogin();
    if (!isLoggedIn) return;

    if (!numAmount || numAmount <= 0) {
      Swal.fire("Invalid Amount", "Please enter a valid payment amount.", "warning");
      return;
    }

    try {
      // 2. Fetch payout subaccount from Firestore
      const querySnapshot = await getDocs(collection(db, "subaccounts"));

      if (querySnapshot.empty) {
        Swal.fire(
          "Payout Account Missing",
          "The payout account configuration is missing. Please try again later.",
          "warning"
        );
        return;
      }

      const subaccountData = querySnapshot.docs[0].data();
      const subaccountCode = subaccountData.subaccount_code;

      if (!subaccountCode) {
        Swal.fire("Invalid Payout Setup", "The seller payout account configuration is invalid.", "error");
        return;
      }

      const uniqueOrderNumber = `SVC-${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 900 + 100)}`;

      const orderPayload = {
        orderNumber: uniqueOrderNumber,
        userId: currentUser.uid,
        items: [
          {
            id: `service-${Date.now()}`,
            name: `${service} Payment`,
            title: `${service} Payment`,
            price: numAmount,
            quantity: 1,
            total: numAmount,
          },
        ],
        subtotal: numAmount,
        deliveryFee: 0,
        discount: 0,
        finalTotal: numAmount,
        currency: "NGN",
        accountInfo: {
          name: userData?.fullName || currentUser?.displayName || "Valued Customer",
          email: currentUser?.email || "",
          phone: userData?.phone || currentUser?.phoneNumber || "Not provided",
        },
        paymentType: "ONLINE PAYMENT",
        paymentStatus: "Paid",
        orderStatus: "Pending",
      };

      // Store in localStorage for verification redirect
      localStorage.setItem("pendingOrder", JSON.stringify(orderPayload));

      // 3. Trigger Paystack Checkout Modal
      payWithPaystack(numAmount, "NGN", subaccountCode);
    } catch (error) {
      console.error("Error initializing Paystack payment:", error);
      Swal.fire("Error", "Could not verify payment configuration. Please try again.", "error");
    }
  };

  // Direct Bank Transfer Handler
  const handleDirectTransfer = async () => {
    // 1. Ensure user is logged in
    const isLoggedIn = await checkAuthAndRequireLogin();
    if (!isLoggedIn) return;

    if (!numAmount || numAmount <= 0) {
      Swal.fire("Invalid Amount", "Please enter a valid payment amount.", "warning");
      return;
    }

    const pendingTransferPayload = {
      userId: currentUser.uid,
      items: [
        {
          id: `service-${Date.now()}`,
          name: `${service} Payment`,
          title: `${service} Payment`,
          price: numAmount,
          quantity: 1,
          total: numAmount,
        },
      ],
      subtotal: numAmount,
      deliveryFee: 0,
      discount: 0,
      finalTotal: numAmount,
      currency: "NGN",
      accountInfo: {
        name: userData?.fullName || currentUser?.displayName || "Valued Customer",
        email: currentUser?.email || "",
        phone: userData?.phone || currentUser?.phoneNumber || "Not provided",
      },
    };

    localStorage.setItem("pendingTransferOrder", JSON.stringify(pendingTransferPayload));
    router.push("/dashboard/direct-transfer");
  };

  return (
    <SectionPadding>
      <CenteredHeader style={{ marginBottom: "1.5rem" }}>
        <SmallTag $goldAccent={GoldAccent}>SECURE PAYMENT</SmallTag>
        <MainTitle $darkText={DarkText} style={{ fontSize: "1.8rem" }}>
          Make a Payment
        </MainTitle>
        <DescriptionText $mutedText={MutedText}>
          Pay for {service} securely online via Paystack or Direct Bank Transfer.
        </DescriptionText>
      </CenteredHeader>

      <PaymentCard $cardBg={CardBg} $borderColor={BorderColor}>
        <label
          style={{
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: MutedText || "#66625b",
            display: "block",
            textAlign: "left",
            marginBottom: "0.2rem",
          }}
        >
          AMOUNT
        </label>
        <AmountInputWrapper $borderColor={BorderColor}>
          <input
            type="number"
            placeholder="Enter amount"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
          />
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="₦">₦</option>
          </select>
        </AmountInputWrapper>

        <PayNowButton onClick={handlePayNow} disabled={!numAmount || numAmount <= 0}>
          PAY NOW WITH PAYSTACK (₦{numAmount.toLocaleString()})
        </PayNowButton>

        <DirectTransferButton
          $goldAccent={GoldAccent}
          $mutedText={MutedText}
          $darkText={DarkText}
          $borderColor={BorderColor}
          onClick={handleDirectTransfer}
          disabled={!numAmount || numAmount <= 0}
        >
          PAY BY DIRECT TRANSFER
        </DirectTransferButton>
      </PaymentCard>
    </SectionPadding>
  );
}