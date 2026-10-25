// "use client";

// import React, { useEffect, useState } from "react";
// import { db } from "@/firebaseConfig";
// import {
//   doc,
//   getDoc,
//   setDoc,
//   deleteDoc,
//   serverTimestamp,
// } from "firebase/firestore";
// import styled from "styled-components";
// import Swal from "sweetalert2";

// // 🎨 THEME COLORS & GRADIENTS (Navy & Cyan Theme)
// const PrimaryNavy = "#0B1B48";
// const PrimaryCyan = "#00AEEF";
// const Dark = "#0f172a";
// const Border = "#cbd5e1";
// const White = "#ffffff";
// const TextMuted = "#475569";
// const LightBg = "#f8fafc";
// const ThemeGradient = "linear-gradient(135deg, #0B1B48 0%, #00AEEF 100%)";
// const Danger = "#ef4444";
// const Success = "#10b981";

// // 🌟 Styled Components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   color: ${Dark};
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 10px;
//   box-sizing: border-box;
//   font-family: inherit;
// `;

// const HeaderBanner = styled.div`
//   background: ${ThemeGradient};
//   color: ${White};
//   padding: 24px;
//   border-radius: 12px;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   box-shadow: 0 6px 20px rgba(11, 27, 72, 0.15);
// `;

// const TopRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 12px;
// `;

// const ColorfulTitle = styled.h1`
//   font-size: 1.6rem;
//   font-weight: 800;
//   margin: 0;
//   color: ${White};
//   letter-spacing: -0.5px;
// `;

// const ColorfulSub = styled.p`
//   font-size: 0.95rem;
//   margin: 0;
//   color: rgba(255, 255, 255, 0.95);
// `;

// const PrimaryButton = styled.button`
//   background: ${White};
//   color: ${PrimaryNavy};
//   border: none;
//   border-radius: 8px;
//   padding: 10px 18px;
//   font-weight: 800;
//   font-size: 0.9rem;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//   transition: all 0.2s ease;

//   &:hover {
//     background: #f1f5f9;
//     transform: translateY(-2px);
//   }
// `;

// const AccountCard = styled.div`
//   background: ${White};
//   border-radius: 12px;
//   padding: 24px;
//   border: 1px solid ${Border};
//   border-top: 4px solid ${PrimaryCyan};
//   box-shadow: 0 4px 15px rgba(15, 23, 42, 0.03);
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   max-width: 500px;
// `;

// const AccountName = styled.h3`
//   margin: 0;
//   font-size: 1.2rem;
//   font-weight: 800;
//   color: ${PrimaryNavy};
// `;

// const AccountNumberBox = styled.div`
//   background: ${LightBg};
//   border: 1px solid ${Border};
//   border-radius: 6px;
//   padding: 12px 16px;
//   font-size: 1.2rem;
//   font-weight: 800;
//   color: ${Dark};
//   letter-spacing: 1px;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   gap: 10px;
//   justify-content: flex-end;
//   margin-top: 4px;
// `;

// const EditButton = styled.button`
//   background: rgba(0, 174, 239, 0.1);
//   color: ${PrimaryCyan};
//   border: 1px solid rgba(0, 174, 239, 0.2);
//   border-radius: 6px;
//   padding: 8px 14px;
//   font-size: 0.85rem;
//   font-weight: 800;
//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     background: rgba(0, 174, 239, 0.2);
//   }
// `;

// const DeleteButton = styled.button`
//   background: rgba(239, 68, 68, 0.1);
//   color: ${Danger};
//   border: 1px solid rgba(239, 68, 68, 0.2);
//   border-radius: 6px;
//   padding: 8px 14px;
//   font-size: 0.85rem;
//   font-weight: 800;
//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     background: rgba(239, 68, 68, 0.2);
//   }
// `;

// const LoadingContainer = styled.div`
//   padding: 60px;
//   text-align: center;
//   color: ${PrimaryNavy};
//   font-weight: 700;
//   font-size: 1.1rem;
//   background: ${White};
//   border-radius: 12px;
//   border: 1px solid ${Border};
// `;

// const EmptyContainer = styled.div`
//   padding: 40px;
//   text-align: center;
//   color: ${TextMuted};
//   font-weight: 600;
//   background: ${White};
//   border-radius: 12px;
//   border: 1px solid ${Border};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 16px;
//   max-width: 500px;
// `;

// // Modal Styles
// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(15, 23, 42, 0.6);
//   backdrop-filter: blur(4px);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
//   padding: 15px;
//   box-sizing: border-box;
// `;

// const ModalContainer = styled.div`
//   background: ${White};
//   border-radius: 12px;
//   padding: 24px;
//   width: 100%;
//   max-width: 420px;
//   border: 1px solid ${Border};
//   box-shadow: 0 15px 35px rgba(15, 23, 42, 0.15);
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
// `;

// const ModalTitle = styled.h3`
//   margin: 0;
//   font-size: 1.25rem;
//   font-weight: 900;
//   color: ${PrimaryNavy};
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
// `;

// const InputLabel = styled.label`
//   font-size: 0.85rem;
//   font-weight: 800;
//   color: ${Dark};
// `;

// const StyledInput = styled.input`
//   border: 1px solid ${Border};
//   border-radius: 6px;
//   padding: 10px 12px;
//   font-size: 0.95rem;
//   outline: none;
//   color: ${Dark};
//   width: 100%;
//   box-sizing: border-box;
//   font-weight: 600;

//   &:focus {
//     border-color: ${PrimaryCyan};
//     box-shadow: 0 0 0 3px rgba(0, 174, 239, 0.15);
//   }
// `;

// const ModalActions = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: 10px;
//   margin-top: 10px;
// `;

// const CancelButton = styled.button`
//   background: ${LightBg};
//   color: ${TextMuted};
//   border: 1px solid ${Border};
//   border-radius: 6px;
//   padding: 8px 14px;
//   font-size: 0.9rem;
//   font-weight: 800;
//   cursor: pointer;

//   &:hover {
//     background: #cbd5e1;
//     color: ${Dark};
//   }
// `;

// const SaveButton = styled.button`
//   background: ${ThemeGradient};
//   color: ${White};
//   border: none;
//   border-radius: 6px;
//   padding: 8px 16px;
//   font-size: 0.9rem;
//   font-weight: 800;
//   cursor: pointer;

//   &:hover {
//     opacity: 0.95;
//   }
// `;

// export default function SingleBankAccountPage() {
//   const [bankAccount, setBankAccount] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
  
//   // Form inputs
//   const [accountName, setAccountName] = useState("");
//   const [accountNumber, setAccountNumber] = useState("");
//   const [bankName, setBankName] = useState("");

//   // Fetch the single bank account document from Firestore
//   const fetchBankAccount = async () => {
//     try {
//       setLoading(true);
//       const docRef = doc(db, "settings", "bankAccount");
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         setBankAccount(docSnap.data());
//       } else {
//         setBankAccount(null);
//       }
//     } catch (error) {
//       console.error("Error fetching bank account:", error);
//       Swal.fire("Error", "Failed to load bank account details.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBankAccount();
//   }, []);

// // Open modal for Adding / Creating
//   const handleOpenAddModal = () => {
//     setIsEditing(false);
//     setBankName("");
//     setAccountName("");
//     setAccountNumber("");
//     setIsModalOpen(true);
//   };

//   // Open modal for Editing the existing account
//   const handleOpenEditModal = () => {
//     setIsEditing(true);
//     setBankName(bankAccount?.bankName || "");
//     setAccountName(bankAccount?.accountName || "");
//     setAccountNumber(bankAccount?.accountNumber || "");
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setIsEditing(false);
//     setBankName("");
//     setAccountName("");
//     setAccountNumber("");
//   };

//   // Handle Save (Creates or Overwrites the single document)
// const handleSaveAccount = async (e) => {
//     e.preventDefault();

//     if (!bankName.trim() || !accountName.trim() || !accountNumber.trim()) {
//       Swal.fire("Warning", "Please fill in all fields.", "warning");
//       return;
//     }

//     try {
//       Swal.fire({
//         text: isEditing ? "Updating bank account..." : "Saving bank account...",
//         allowOutsideClick: false,
//         didOpen: () => Swal.showLoading(),
//       });

//       const docRef = doc(db, "settings", "bankAccount");
//       const payload = {
//         bankName: bankName.trim(),
//         accountName: accountName.trim(),
//         accountNumber: accountNumber.trim(),
//         updatedAt: serverTimestamp(),
//       };

//       if (!isEditing) {
//         payload.createdAt = serverTimestamp();
//       }

//       await setDoc(docRef, payload, { merge: true });

//       Swal.close();
//       Swal.fire("Success!", `Bank account has been ${isEditing ? "updated" : "saved"}.`, "success");
      
//       handleCloseModal();
//       fetchBankAccount();
//     } catch (error) {
//       console.error("Error saving bank account:", error);
//       Swal.close();
//       Swal.fire("Error", "Failed to save bank account.", "error");
//     }
//   };

//   // Handle Delete
//   const handleDeleteAccount = async () => {
//     const result = await Swal.fire({
//       title: "Remove Bank Account?",
//       text: "This bank account will be permanently removed from customer checkout.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: Danger,
//       cancelButtonColor: TextMuted,
//       confirmButtonText: "Yes, Remove It",
//     });

//     if (!result.isConfirmed) return;

//     try {
//       Swal.fire({
//         text: "Removing account...",
//         allowOutsideClick: false,
//         didOpen: () => Swal.showLoading(),
//       });

//       const docRef = doc(db, "settings", "bankAccount");
//       await deleteDoc(docRef);

//       Swal.close();
//       Swal.fire("Removed!", "Bank account has been deleted.", "success");
//       setBankAccount(null);
//     } catch (error) {
//       console.error("Error deleting bank account:", error);
//       Swal.close();
//       Swal.fire("Error", "Failed to delete bank account.", "error");
//     }
//   };

//   if (loading) {
//     return <LoadingContainer>Loading bank account details...</LoadingContainer>;
//   }

//   return (
//     <Container>
//       <HeaderBanner>
//         <TopRow>
//           <div>
//             <ColorfulTitle>Direct Transfer Bank Account 💳</ColorfulTitle>
//             <ColorfulSub>Configure the single bank account displayed for customer direct transfers.</ColorfulSub>
//           </div>
//           {!bankAccount && (
//             <PrimaryButton onClick={handleOpenAddModal}>
//               + Add Bank Account
//             </PrimaryButton>
//           )}
//         </TopRow>
//       </HeaderBanner>

//          {!bankAccount ? (
//         <EmptyContainer>
//           <p style={{ margin: 0 }}>No active bank account configured yet.</p>
//           <PrimaryButton onClick={handleOpenAddModal}>
//             + Add Bank Account
//           </PrimaryButton>
//         </EmptyContainer>
//       ) : (
//         <AccountCard>
//           <div>
//             <span style={{ fontSize: "0.75rem", fontWeight: "700", color: TextMuted, textTransform: "uppercase" }}>Bank Name</span>
//             <AccountName>{bankAccount.bankName}</AccountName>
//           </div>
//           <div>
//             <span style={{ fontSize: "0.75rem", fontWeight: "700", color: TextMuted, textTransform: "uppercase" }}>Account Name</span>
//             <AccountName>{bankAccount.accountName}</AccountName>
//           </div>
//           <div>
//             <span style={{ fontSize: "0.75rem", fontWeight: "700", color: TextMuted, textTransform: "uppercase" }}>Account Number</span>
//             <AccountNumberBox>{bankAccount.accountNumber}</AccountNumberBox>
//           </div>
//           <ButtonGroup>
//             <EditButton onClick={handleOpenEditModal}>Edit Account</EditButton>
//             <DeleteButton onClick={handleDeleteAccount}>Remove</DeleteButton>
//           </ButtonGroup>
//         </AccountCard>
//       )}

//       {/* Modal for Create / Edit */}
//       {isModalOpen && (
//         <ModalOverlay onClick={handleCloseModal}>
//           <ModalContainer onClick={(e) => e.stopPropagation()}>
//             <ModalTitle>{isEditing ? "Edit Bank Account" : "Add Bank Account"}</ModalTitle>
//             <form onSubmit={handleSaveAccount} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
//               <InputGroup>
//               <InputGroup>
//                 <InputLabel>Bank Name</InputLabel>
//                 <StyledInput
//                   type="text"
//                   placeholder="e.g. Access Bank / Guaranty Trust Bank"
//                   value={bankName}
//                   onChange={(e) => setBankName(e.target.value)}
//                   required
//                 />
//               </InputGroup>

             
//                 <InputLabel>Account Name</InputLabel>
//                 <StyledInput
//                   type="text"
//                   placeholder="e.g. Enitz Global / John Doe"
//                   value={accountName}
//                   onChange={(e) => setAccountName(e.target.value)}
//                   required
//                 />
//               </InputGroup>

//               <InputGroup>
//                 <InputLabel>Account Number</InputLabel>
//                 <StyledInput
//                   type="text"
//                   placeholder="e.g. 0123456789"
//                   value={accountNumber}
//                   onChange={(e) => setAccountNumber(e.target.value)}
//                   required
//                 />
//               </InputGroup>

//               <ModalActions>
//                 <CancelButton type="button" onClick={handleCloseModal}>
//                   Cancel
//                 </CancelButton>
//                 <SaveButton type="submit">
//                   {isEditing ? "Save Changes" : "Save Account"}
//                 </SaveButton>
//               </ModalActions>
//             </form>
//           </ModalContainer>
//         </ModalOverlay>
//       )}
//     </Container>
//   );
// }



"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import styled from "styled-components";
import Swal from "sweetalert2";

// 🌿 THEME COLORS & GRADIENTS (Deep Green & Gold Theme)
const PrimaryGreen = "#1e3d2f";
const GoldAccent = "#c5a059";
const Dark = "#0f172a";
const Border = "#cbd5e1";
const White = "#ffffff";
const TextMuted = "#475569";
const LightBg = "#f8fafc";
const ThemeGradient = "linear-gradient(135deg, #1e3d2f 0%, #2e5a46 100%)";
const Danger = "#ef4444";
const Success = "#10b981";

// 🌟 Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${Dark};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  font-family: inherit;
`;

const HeaderBanner = styled.div`
  background: ${ThemeGradient};
  color: ${White};
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 6px 20px rgba(30, 61, 47, 0.15);
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const ColorfulTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0;
  color: ${White};
  letter-spacing: -0.5px;
`;

const ColorfulSub = styled.p`
  font-size: 0.95rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.95);
`;

const PrimaryButton = styled.button`
  background: ${GoldAccent};
  color: ${White};
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-weight: 800;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 15px rgba(197, 160, 89, 0.2);
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const AccountCard = styled.div`
  background: ${White};
  border-radius: 12px;
  padding: 24px;
  border: 1px solid ${Border};
  border-top: 4px solid ${GoldAccent};
  box-shadow: 0 4px 15px rgba(15, 23, 42, 0.03);
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
`;

const AccountName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 800;
  color: ${PrimaryGreen};
`;

const AccountNumberBox = styled.div`
  background: ${LightBg};
  border: 1px solid ${Border};
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 1.2rem;
  font-weight: 800;
  color: ${Dark};
  letter-spacing: 1px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 4px;
`;

const EditButton = styled.button`
  background: rgba(197, 160, 89, 0.1);
  color: ${GoldAccent};
  border: 1px solid rgba(197, 160, 89, 0.3);
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 0.85rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(197, 160, 89, 0.2);
  }
`;

const DeleteButton = styled.button`
  background: rgba(239, 68, 68, 0.1);
  color: ${Danger};
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 0.85rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
  }
`;

const LoadingContainer = styled.div`
  padding: 60px;
  text-align: center;
  color: ${PrimaryGreen};
  font-weight: 700;
  font-size: 1.1rem;
  background: ${White};
  border-radius: 12px;
  border: 1px solid ${Border};
`;

const EmptyContainer = styled.div`
  padding: 40px;
  text-align: center;
  color: ${TextMuted};
  font-weight: 600;
  background: ${White};
  border-radius: 12px;
  border: 1px solid ${Border};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 500px;
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 15px;
  box-sizing: border-box;
`;

const ModalContainer = styled.div`
  background: ${White};
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  max-width: 420px;
  border: 1px solid ${Border};
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.15);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 900;
  color: ${PrimaryGreen};
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const InputLabel = styled.label`
  font-size: 0.85rem;
  font-weight: 800;
  color: ${Dark};
`;

const StyledInput = styled.input`
  border: 1px solid ${Border};
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 0.95rem;
  outline: none;
  color: ${Dark};
  width: 100%;
  box-sizing: border-box;
  font-weight: 600;

  &:focus {
    border-color: ${GoldAccent};
    box-shadow: 0 0 0 3px rgba(197, 160, 89, 0.15);
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const CancelButton = styled.button`
  background: ${LightBg};
  color: ${TextMuted};
  border: 1px solid ${Border};
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 0.9rem;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background: #cbd5e1;
    color: ${Dark};
  }
`;

const SaveButton = styled.button`
  background: ${ThemeGradient};
  color: ${White};
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }
`;

export default function SingleBankAccountPage() {
  const [bankAccount, setBankAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // Form inputs
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");

  // Fetch the single bank account document from Firestore
  const fetchBankAccount = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, "settings", "bankAccount");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setBankAccount(docSnap.data());
      } else {
        setBankAccount(null);
      }
    } catch (error) {
      console.error("Error fetching bank account:", error);
      Swal.fire("Error", "Failed to load bank account details.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBankAccount();
  }, []);

  // Open modal for Adding / Creating
  const handleOpenAddModal = () => {
    setIsEditing(false);
    setBankName("");
    setAccountName("");
    setAccountNumber("");
    setIsModalOpen(true);
  };

  // Open modal for Editing the existing account
  const handleOpenEditModal = () => {
    setIsEditing(true);
    setBankName(bankAccount?.bankName || "");
    setAccountName(bankAccount?.accountName || "");
    setAccountNumber(bankAccount?.accountNumber || "");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setBankName("");
    setAccountName("");
    setAccountNumber("");
  };

  // Handle Save (Creates or Overwrites the single document)
  const handleSaveAccount = async (e) => {
    e.preventDefault();

    if (!bankName.trim() || !accountName.trim() || !accountNumber.trim()) {
      Swal.fire("Warning", "Please fill in all fields.", "warning");
      return;
    }

    try {
      Swal.fire({
        text: isEditing ? "Updating bank account..." : "Saving bank account...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const docRef = doc(db, "settings", "bankAccount");
      const payload = {
        bankName: bankName.trim(),
        accountName: accountName.trim(),
        accountNumber: accountNumber.trim(),
        updatedAt: serverTimestamp(),
      };

      if (!isEditing) {
        payload.createdAt = serverTimestamp();
      }

      await setDoc(docRef, payload, { merge: true });

      Swal.close();
      Swal.fire("Success!", `Bank account has been ${isEditing ? "updated" : "saved"}.`, "success");
      
      handleCloseModal();
      fetchBankAccount();
    } catch (error) {
      console.error("Error saving bank account:", error);
      Swal.close();
      Swal.fire("Error", "Failed to save bank account.", "error");
    }
  };

  // Handle Delete
  const handleDeleteAccount = async () => {
    const result = await Swal.fire({
      title: "Remove Bank Account?",
      text: "This bank account will be permanently removed from customer checkout.",
      icon: "warning",
      confirmButtonColor: PrimaryGreen,
      cancelButtonColor: TextMuted,
      showCancelButton: true,
      confirmButtonText: "Yes, Remove It",
    });

    if (!result.isConfirmed) return;

    try {
      Swal.fire({
        text: "Removing account...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const docRef = doc(db, "settings", "bankAccount");
      await deleteDoc(docRef);

      Swal.close();
      Swal.fire("Removed!", "Bank account has been deleted.", "success");
      setBankAccount(null);
    } catch (error) {
      console.error("Error deleting bank account:", error);
      Swal.close();
      Swal.fire("Error", "Failed to delete bank account.", "error");
    }
  };

  if (loading) {
    return <LoadingContainer>Loading bank account details...</LoadingContainer>;
  }

  return (
    <Container>
      <HeaderBanner>
        <TopRow>
          <div>
            <ColorfulTitle>Direct Transfer Bank Account 💳</ColorfulTitle>
            <ColorfulSub>Configure the single bank account displayed for customer direct transfers.</ColorfulSub>
          </div>
          {!bankAccount && (
            <PrimaryButton onClick={handleOpenAddModal}>
              + Add Bank Account
            </PrimaryButton>
          )}
        </TopRow>
      </HeaderBanner>

      {!bankAccount ? (
        <EmptyContainer>
          <p style={{ margin: 0 }}>No active bank account configured yet.</p>
          <PrimaryButton onClick={handleOpenAddModal}>
            + Add Bank Account
          </PrimaryButton>
        </EmptyContainer>
      ) : (
        <AccountCard>
          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: "700", color: TextMuted, textTransform: "uppercase" }}>Bank Name</span>
            <AccountName>{bankAccount.bankName}</AccountName>
          </div>
          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: "700", color: TextMuted, textTransform: "uppercase" }}>Account Name</span>
            <AccountName>{bankAccount.accountName}</AccountName>
          </div>
          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: "700", color: TextMuted, textTransform: "uppercase" }}>Account Number</span>
            <AccountNumberBox>{bankAccount.accountNumber}</AccountNumberBox>
          </div>
          <ButtonGroup>
            <EditButton onClick={handleOpenEditModal}>Edit Account</EditButton>
            <DeleteButton onClick={handleDeleteAccount}>Remove</DeleteButton>
          </ButtonGroup>
        </AccountCard>
      )}

      {/* Modal for Create / Edit */}
      {isModalOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>{isEditing ? "Edit Bank Account" : "Add Bank Account"}</ModalTitle>
            <form onSubmit={handleSaveAccount} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <InputGroup>
                <InputLabel>Bank Name</InputLabel>
                <StyledInput
                  type="text"
                  placeholder="e.g. Access Bank / Guaranty Trust Bank"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  required
                />
              </InputGroup>

              <InputGroup>
                <InputLabel>Account Name</InputLabel>
                <StyledInput
                  type="text"
                  placeholder="e.g. Enitz Global / John Doe"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  required
                />
              </InputGroup>

              <InputGroup>
                <InputLabel>Account Number</InputLabel>
                <StyledInput
                  type="text"
                  placeholder="e.g. 0123456789"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                />
              </InputGroup>

              <ModalActions>
                <CancelButton type="button" onClick={handleCloseModal}>
                  Cancel
                </CancelButton>
                <SaveButton type="submit">
                  {isEditing ? "Save Changes" : "Save Account"}
                </SaveButton>
              </ModalActions>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
}