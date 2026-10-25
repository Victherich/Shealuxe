


// "use client";

// import { useEffect, useState } from "react";
// import { auth, db } from "@/firebaseConfig";

// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import styled from "styled-components";
// import { useRouter } from "next/navigation";
// import Swal from "sweetalert2";
// import { primaryColoring, secondaryColoring } from "@/components/Context";

// // 🎨 ENITZ BRAND THEME COLORS
// const PrimaryNavy = primaryColoring;
// const PrimaryCyan = secondaryColoring;
// const ThemeGradient = `linear-gradient(135deg, ${primaryColoring} 0%,  ${secondaryColoring} 100%)`;
// const Dark = "#0f172a";
// const Border = "#cbd5e1";
// const White = "#ffffff";
// const TextMuted = "#475569";
// const LightBg = "#f8fafc";

// const SoftGradientBg = "linear-gradient(135deg, rgba(11, 27, 72, 0.05) 0%, rgba(0, 174, 239, 0.05) 100%)";

// // 🌟 Styled Components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
//   color: ${Dark};
//   width: 100%;
//   font-family: inherit;
// `;

// const GreetingBanner = styled.div`
//   background: ${ThemeGradient};
//   color: ${White};
//   padding: 32px;
//   border-radius: 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   box-shadow: 0 20px 40px -10px rgba(11, 27, 72, 0.25);
//   position: relative;
//   overflow: hidden;

//   &::after {
//     content: '';
//     position: absolute;
//     top: -50px;
//     right: -50px;
//     width: 200px;
//     height: 200px;
//     background: rgba(255, 255, 255, 0.1);
//     border-radius: 50%;
//     pointer-events: none;
//   }
// `;

// const Greeting = styled.h1`
//   font-size: 2rem;
//   font-weight: 800;
//   letter-spacing: -0.5px;
//   margin: 0;
// `;

// const SubGreeting = styled.p`
//   font-size: 1.05rem;
//   opacity: 0.95;
//   margin: 0;
//   max-width: 42rem;
//   line-height: 1.6;
// `;

// const SectionTitle = styled.h2`
//   font-size: 1.25rem;
//   font-weight: 800;
//   color: ${PrimaryNavy};
//   margin: 16px 0 0 0;
//   letter-spacing: -0.5px;
// `;

// const MenuGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//   gap: 20px;
// `;

// const MenuCard = styled.div.withConfig({
//   shouldForwardProp: (prop) => prop !== "clickable",
// })`
//   background: ${White};
//   border-radius: 16px;
//   padding: 24px;
//   border: 1px solid ${Border};
//   border-left: 5px solid ${PrimaryCyan};
//   box-shadow: 0 10px 30px rgba(11, 27, 72, 0.03);
//   cursor: ${(props) => (props.clickable ? "pointer" : "default")};
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: ${(props) => (props.clickable ? "translateY(-3px)" : "none")};
//     border-color: ${PrimaryCyan};
//     box-shadow: 0 15px 35px rgba(11, 27, 72, 0.08);
//   }
// `;

// const MenuContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
// `;

// const MenuTitle = styled.h3`
//   margin: 0;
//   font-size: 1.05rem;
//   font-weight: 800;
//   color: ${PrimaryNavy};
// `;

// const MenuDesc = styled.p`
//   margin: 0;
//   font-size: 0.85rem;
//   color: ${TextMuted};
//   line-height: 1.4;
// `;

// const MenuIcon = styled.span`
//   font-size: 1.5rem;
//   background: ${SoftGradientBg};
//   width: 48px;
//   height: 48px;
//   border-radius: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid rgba(0, 174, 239, 0.15);
//   flex-shrink: 0;
// `;

// const ActionTextLink = styled.span`
//   font-size: 0.9rem;
//   font-weight: 700;
//   color: ${PrimaryCyan};
//   cursor: pointer;
//   transition: opacity 0.2s ease;

//   &:hover {
//     opacity: 0.8;
//     text-decoration: underline;
//   }
// `;

// const DetailsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 20px;
// `;

// const DetailCard = styled.div`
//   background: ${White};
//   border-radius: 16px;
//   padding: 24px;
//   border: 1px solid ${Border};
//   box-shadow: 0 10px 30px rgba(11, 27, 72, 0.03);
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   transition: all 0.3s ease;

//   &:hover {
//     border-color: rgba(0, 174, 239, 0.3);
//     box-shadow: 0 15px 35px rgba(11, 27, 72, 0.06);
//   }
// `;

// const DetailTitle = styled.h3`
//   margin: 0;
//   font-size: 0.85rem;
//   font-weight: 700;
//   color: ${TextMuted};
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
// `;

// const DetailValue = styled.p`
//   margin: 0;
//   font-size: 1.1rem;
//   font-weight: 700;
//   color: ${Dark};
//   word-break: break-all;
// `;

// const LoadingContainer = styled.div`
//   padding: 64px 32px;
//   text-align: center;
//   color: ${PrimaryNavy};
//   font-weight: 700;
//   font-size: 1.1rem;
//   background: ${White};
//   border-radius: 20px;
//   border: 1px solid ${Border};
//   box-shadow: 0 10px 30px rgba(11, 27, 72, 0.03);
//   max-width: 500px;
//   margin: 48px auto;
// `;

// const DashboardHome = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const user = auth.currentUser;
//       if (!user) return;
//       const docRef = doc(db, "users", user.uid);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setUserData(docSnap.data());
//       }
//       setLoading(false);
//     };

//     fetchUserData();
//   }, []);

//   // 📝 Function to handle editing the phone number
//   const handleEditPhone = async () => {
//     const user = auth.currentUser;
//     if (!user) return;

//     const { value: newPhone } = await Swal.fire({
//       title: "Edit Phone Number",
//       input: "text",
//       inputLabel: "Enter your new phone number",
//       inputValue: userData?.phone || "",
//       showCancelButton: true,
//       confirmButtonColor: PrimaryNavy,
//       cancelButtonColor: TextMuted,
//       inputValidator: (value) => {
//         if (!value) {
//           return "You need to write something!";
//         }
//       },
//     });

//     if (newPhone) {
//       try {
//         const docRef = doc(db, "users", user.uid);
//         await updateDoc(docRef, { phone: newPhone });
//         setUserData((prev) => ({ ...prev, phone: newPhone }));
//         Swal.fire("Updated!", "Your phone number has been updated.", "success");
//       } catch (error) {
//         Swal.fire("Error", "Failed to update phone number.", "error");
//       }
//     }
//   };

//   // 📝 Function to handle editing the full name
//   const handleEditName = async () => {
//     const user = auth.currentUser;
//     if (!user) return;

//     const { value: newName } = await Swal.fire({
//       title: "Edit Full Name",
//       input: "text",
//       inputLabel: "Enter your full name",
//       inputValue: userData?.name || "",
//       showCancelButton: true,
//       confirmButtonColor: PrimaryNavy,
//       cancelButtonColor: TextMuted,
//       inputValidator: (value) => {
//         if (!value) {
//           return "You need to write something!";
//         }
//       },
//     });

//     if (newName) {
//       try {
//         const docRef = doc(db, "users", user.uid);
//         await updateDoc(docRef, { name: newName });
//         setUserData((prev) => ({ ...prev, name: newName }));
//         Swal.fire("Updated!", "Your name has been updated.", "success");
//       } catch (error) {
//         Swal.fire("Error", "Failed to update name.", "error");
//       }
//     }
//   };

//   // 🚪 Function to handle signing out with Swal confirmation
//   const handleSignOut = async () => {
//     const confirmResult = await Swal.fire({
//       title: "Sign Out",
//       text: "Are you sure you want to sign out?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: PrimaryNavy,
//       cancelButtonColor: TextMuted,
//       confirmButtonText: "Yes, Sign Out"
//     });

//     if (confirmResult.isConfirmed) {
//       try {
//         await auth.signOut();
//         router.push("/login");
//       } catch (error) {
//         Swal.fire("Error", "Failed to sign out. Please try again.", "error");
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <LoadingContainer>
//         <h2>Loading dashboard...</h2>
//       </LoadingContainer>
//     );
//   }

//   if (!userData) {
//     return (
//       <LoadingContainer>
//         <h2>No user data found.</h2>
//       </LoadingContainer>
//     );
//   }

//   return (
//     <Container>
//       {/* Welcome Banner */}
//       <GreetingBanner>
//         <Greeting>
//           Welcome back, {userData.role === 'admin' ? "ADMIN: " : ""} {userData.name || userData.email} 👋
//         </Greeting>
//         <SubGreeting>
//           Manage your account services, track project workflows, and explore your client portal options.
//         </SubGreeting>
//       </GreetingBanner>

//       {/* ADMIN Actions / Navigation */}
//       {userData.role === 'admin' && (
//         <>
//           <SectionTitle>ADMIN Actions</SectionTitle>
//           <MenuGrid>
//             <MenuCard clickable onClick={() => router.push("/dashboard/manage-categories")}>
//               <MenuContent>
//                 <MenuTitle>Manage Product Categories</MenuTitle>
//                 <MenuDesc>Create, View, Update and Delete product categories</MenuDesc>
//               </MenuContent>
//               <MenuIcon>🛍️</MenuIcon>
//             </MenuCard>

//               {/* <MenuCard clickable onClick={() => router.push("/dashboard/manage-locations")}>
//               <MenuContent>
//                 <MenuTitle>Manage Product Locations</MenuTitle>
//                 <MenuDesc>Create, View, Update and Delete product locations</MenuDesc>
//               </MenuContent>
//               <MenuIcon>🛍️</MenuIcon>
//             </MenuCard> */}

//             <MenuCard clickable onClick={() => router.push("/dashboard/manage-products")}>
//               <MenuContent>
//                 <MenuTitle>Manage Products</MenuTitle>
//                 <MenuDesc>Create, View, Update and Delete products</MenuDesc>
//               </MenuContent>
//               <MenuIcon>🛍️</MenuIcon>
//             </MenuCard>

//               <MenuCard clickable onClick={() => router.push("/dashboard/productdetail-by-id")}>
//               <MenuContent>
//                 <MenuTitle>Product Detail by Id</MenuTitle>
//                 <MenuDesc>Search product by its Id</MenuDesc>
//               </MenuContent>
//               <MenuIcon>🛍️</MenuIcon>
//             </MenuCard>

//             <MenuCard clickable onClick={() => router.push("/dashboard/manage-orders")}>
//               <MenuContent>
//                 <MenuTitle>Manage Orders</MenuTitle>
//                 <MenuDesc>View and manage customer orders</MenuDesc>
//               </MenuContent>
//               <MenuIcon>📦</MenuIcon>
//             </MenuCard>

//             <MenuCard clickable onClick={() => router.push("/dashboard/manage-users")}>
//               <MenuContent>
//                 <MenuTitle>Manage Users</MenuTitle>
//                 <MenuDesc>View and manage customer information</MenuDesc>
//               </MenuContent>
//               <MenuIcon>👜</MenuIcon>
//             </MenuCard>

//             <MenuCard clickable onClick={() => router.push("/dashboard/promocodes")}>
//               <MenuContent>
//                 <MenuTitle>Manage Promo Codes</MenuTitle>
//                 <MenuDesc>View and manage promo codes</MenuDesc>
//               </MenuContent>
//               <MenuIcon>💥</MenuIcon>
//             </MenuCard>

//             <MenuCard clickable onClick={() => router.push("/dashboard/analytics")}>
//               <MenuContent>
//                 <MenuTitle>Analytics</MenuTitle>
//                 <MenuDesc>View store performance metrics</MenuDesc>
//               </MenuContent>
//               <MenuIcon>📈</MenuIcon>
//             </MenuCard>

//               <MenuCard clickable onClick={() => router.push("/dashboard/payout-details-management")}>
//               <MenuContent>
//                 <MenuTitle>Payout Account</MenuTitle>
//                 <MenuDesc>View and manage payout details</MenuDesc>
//               </MenuContent>
//               <MenuIcon>📈</MenuIcon>
//             </MenuCard>

//             <MenuCard clickable onClick={() => router.push("/dashboard/hostinglist")}>
//               <MenuContent>
//                 <MenuTitle>Manage Hosting</MenuTitle>
//                 <MenuDesc>View and manage hosting services</MenuDesc>
//               </MenuContent>
//               <MenuIcon>🌐</MenuIcon>
//             </MenuCard>
//           </MenuGrid>
//         </>
//       )}

//       {/* Customer / Standard User Actions */}
//       <SectionTitle>Quick Actions</SectionTitle>
//       <MenuGrid>
//         <MenuCard clickable onClick={() => router.push("/dashboard/myorders")}>
//           <MenuContent>
//             <MenuTitle>My Orders</MenuTitle>
//             <MenuDesc>Track shipping & delivery status</MenuDesc>
//           </MenuContent>
//           <MenuIcon>🛍️</MenuIcon>
//         </MenuCard>

//         <MenuCard clickable onClick={() => router.push("/dashboard/mywishlist")}>
//           <MenuContent>
//             <MenuTitle>My Wishlist</MenuTitle>
//             <MenuDesc>View saved items & special offers</MenuDesc>
//           </MenuContent>
//           <MenuIcon>📦</MenuIcon>
//         </MenuCard>
//       </MenuGrid>

//       {/* Primary User Details */}
//       <SectionTitle>Your Account Details</SectionTitle>
//       <DetailsGrid>
//         <DetailCard>
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <DetailTitle>Full Name</DetailTitle>
//             <ActionTextLink onClick={handleEditName}>Edit</ActionTextLink>
//           </div>
//           <DetailValue>{userData.name}</DetailValue>
//         </DetailCard>

//         <DetailCard>
//           <DetailTitle>Email Address</DetailTitle>
//           <DetailValue>{userData.email}</DetailValue>
//         </DetailCard>

//         <DetailCard>
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <DetailTitle>Phone Number</DetailTitle>
//             <ActionTextLink onClick={handleEditPhone}>Edit</ActionTextLink>
//           </div>
//           <DetailValue>{userData.phone || "Not provided"}</DetailValue>
//         </DetailCard>

//         <DetailCard 
//           onClick={handleSignOut}
//           style={{ 
//             cursor: "pointer", 
//             background: "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)", 
//             border: "1px solid #fca5a5",
//             transition: "all 0.2s ease"
//           }}
//         >
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <DetailTitle style={{ color: "#dc2626", fontWeight: "700" }}>Session</DetailTitle>
//             <span style={{ 
//               background: "#dc2626", 
//               color: "#ffffff", 
//               padding: "6px 14px", 
//               borderRadius: "6px", 
//               fontSize: "12px", 
//               fontWeight: "600",
//               boxShadow: "0 2px 4px rgba(220, 38, 38, 0.2)"
//             }}>
//               Sign Out
//             </span>
//           </div>
//           <DetailValue style={{ color: "#991b1b", fontSize: "13px", marginTop: "4px" }}>
//             Safely log out of your dashboard session
//           </DetailValue>
//         </DetailCard>
//       </DetailsGrid>
//     </Container>
//   );
// };

// export default DashboardHome;





"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import {
  ShoppingBag,
  Package,
  Users,
  BarChart3,
  Globe,
  LogOut,
  Edit3,
  Search,
  Sparkles,
  CreditCard,
  Heart,
  ChevronRight,
  Shield,
  UserCheck,
  Mail,
  Phone,
} from "lucide-react";
import { primaryColoring, secondaryColoring } from "@/components/Context";

/* ================= 🎨 ENITZ BRAND THEME COLORS ================= */
const PrimaryNavy = primaryColoring || "#0B1B48";
const PrimaryCyan = secondaryColoring || "#00AEEF";
const ThemeGradient = `linear-gradient(135deg, ${PrimaryNavy} 0%, ${PrimaryCyan} 100%)`;
const Dark = "#0f172a";
const Border = "#cbd5e1";
const White = "#ffffff";
const TextMuted = "#475569";
const LightBg = "#f8fafc";

/* ================= 🌟 STYLED COMPONENTS ================= */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: ${Dark};
  width: 100%;
  font-family: inherit;
  box-sizing: border-box;
  padding:10px;
`;

const GreetingBanner = styled.div`
  background: ${Dark};
  background-image: radial-gradient(
      circle at 85% 20%,
      rgba(0, 174, 239, 0.18) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 10% 80%,
      rgba(11, 27, 72, 0.4) 0%,
      transparent 50%
    );
  color: ${White};
  padding: 40px 36px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.3);
  position: relative;
  overflow: hidden;

  @media (max-width: 640px) {
    padding: 28px 20px;
  }
`;

const BannerBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: ${PrimaryCyan};
  text-transform: uppercase;

  .badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${PrimaryCyan};
  }
`;

const Greeting = styled.h1`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: -0.3px;
  margin: 0;
  color: ${White};

  @media (max-width: 640px) {
    font-size: 1.6rem;
  }
`;

const SubGreeting = styled.p`
  font-size: 0.92rem;
  color: #94a3b8;
  margin: 0;
  max-width: 42rem;
  line-height: 1.6;
  font-weight: 300;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

  .tag {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    color: ${PrimaryNavy};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
      content: "";
      width: 18px;
      height: 2px;
      background-color: ${PrimaryCyan};
    }
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const MenuCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "clickable",
})`
  background: ${White};
  border-radius: 8px;
  padding: 22px;
  border: 1px solid ${Border};
  box-shadow: 0 4px 15px rgba(15, 23, 42, 0.03);
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: transparent;
    transition: background 0.25s ease;
  }

  &:hover {
    transform: ${(props) => (props.clickable ? "translateY(-3px)" : "none")};
    border-color: ${PrimaryCyan};
    box-shadow: 0 12px 25px rgba(11, 27, 72, 0.08);

    &::before {
      background: ${PrimaryCyan};
    }

    .menu-icon {
      background: ${PrimaryNavy};
      color: ${White};
      border-color: ${PrimaryNavy};
    }

    .arrow-icon {
      transform: translateX(3px);
      color: ${PrimaryCyan};
    }
  }
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const MenuTitle = styled.h3`
  margin: 0;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${Dark};
`;

const MenuDesc = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${TextMuted};
  line-height: 1.5;
  font-weight: 300;
`;

const MenuIconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 6px;
  background: ${LightBg};
  border: 1px solid ${Border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${PrimaryNavy};
  flex-shrink: 0;
  transition: all 0.25s ease;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ArrowAction = styled.div`
  display: flex;
  align-items: center;
  color: ${Border};
  transition: all 0.25s ease;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const DetailCard = styled.div`
  background: ${White};
  border-radius: 8px;
  padding: 22px;
  border: 1px solid ${Border};
  box-shadow: 0 4px 15px rgba(15, 23, 42, 0.03);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${PrimaryCyan};
    box-shadow: 0 8px 20px rgba(11, 27, 72, 0.06);
  }
`;

const DetailHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailTitle = styled.h3`
  margin: 0;
  font-size: 0.65rem;
  font-weight: 700;
  color: ${TextMuted};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 14px;
    height: 14px;
    color: ${PrimaryCyan};
  }
`;

const DetailValue = styled.p`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${Dark};
  word-break: break-all;
`;

const ActionTextBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${PrimaryCyan};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

const SessionSignOutCard = styled.div`
  background: ${White};
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 22px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.25s ease;

  &:hover {
    background: #fef2f2;
    border-color: #f87171;
    box-shadow: 0 8px 20px rgba(220, 38, 38, 0.08);
  }
`;

const LoadingContainer = styled.div`
  padding: 64px 32px;
  text-align: center;
  color: ${PrimaryNavy};
  font-weight: 600;
  font-size: 1.05rem;
  background: ${White};
  border-radius: 12px;
  border: 1px solid ${Border};
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
  max-width: 480px;
  margin: 48px auto;
`;

/* ================= 🚀 COMPONENT ================= */
const DashboardHome = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (!user) return;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  // 📝 Function to handle editing phone number
  const handleEditPhone = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const { value: newPhone } = await Swal.fire({
      title: "Edit Phone Number",
      input: "text",
      inputLabel: "Enter your new phone number",
      inputValue: userData?.phone || "",
      showCancelButton: true,
      confirmButtonColor: PrimaryNavy,
      cancelButtonColor: TextMuted,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });

    if (newPhone) {
      try {
        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, { phone: newPhone });
        setUserData((prev) => ({ ...prev, phone: newPhone }));
        Swal.fire("Updated!", "Your phone number has been updated.", "success");
      } catch (error) {
        Swal.fire("Error", "Failed to update phone number.", "error");
      }
    }
  };

  // 📝 Function to handle editing full name
  const handleEditName = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const { value: newName } = await Swal.fire({
      title: "Edit Full Name",
      input: "text",
      inputLabel: "Enter your full name",
      inputValue: userData?.name || "",
      showCancelButton: true,
      confirmButtonColor: PrimaryNavy,
      cancelButtonColor: TextMuted,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });

    if (newName) {
      try {
        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, { name: newName });
        setUserData((prev) => ({ ...prev, name: newName }));
        Swal.fire("Updated!", "Your name has been updated.", "success");
      } catch (error) {
        Swal.fire("Error", "Failed to update name.", "error");
      }
    }
  };

  // 🚪 Function to handle signing out with Swal confirmation
  const handleSignOut = async () => {
    const confirmResult = await Swal.fire({
      title: "Sign Out",
      text: "Are you sure you want to sign out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: PrimaryNavy,
      cancelButtonColor: TextMuted,
      confirmButtonText: "Yes, Sign Out",
    });

    if (confirmResult.isConfirmed) {
      try {
        await auth.signOut();
        router.push("/login");
      } catch (error) {
        Swal.fire("Error", "Failed to sign out. Please try again.", "error");
      }
    }
  };

  if (loading) {
    return (
      <LoadingContainer>
        <h3>Loading your portal...</h3>
      </LoadingContainer>
    );
  }

  if (!userData) {
    return (
      <LoadingContainer>
        <h3>No user profile data found.</h3>
      </LoadingContainer>
    );
  }

  return (
    <Container>
      {/* Welcome Banner */}
      <GreetingBanner>
        <BannerBadge>
          <span className="badge-dot" />
          <span>{userData.role === "admin" ? "Administrator Portal" : "Client Portal"}</span>
        </BannerBadge>
        <Greeting>
          Welcome back, {userData.role === "admin" ? "ADMIN: " : ""}
          {userData.name || userData.email}
        </Greeting>
        <SubGreeting>
          Manage your account services, track project workflows, and explore your client portal options.
        </SubGreeting>
      </GreetingBanner>

      {/* ADMIN Actions / Navigation */}
      {userData.role === "admin" && (
        <>
          <SectionHeader>
            <span className="tag">ADMINISTRATOR CONTROLS</span>
          </SectionHeader>

          <MenuGrid>
            <MenuCard clickable onClick={() => router.push("/dashboard/manage-gallery")}>
              <MenuContent>
                <MenuTitle>Manage Gallery</MenuTitle>
                <MenuDesc>Create, view, update and delete Gallery images</MenuDesc>
              </MenuContent>
              <MenuIconWrapper className="menu-icon">
                <ShoppingBag />
              </MenuIconWrapper>
            </MenuCard>

            <MenuCard clickable onClick={() => router.push("/dashboard/manage-interior-decor-portolio")}>
              <MenuContent>
                <MenuTitle>Manage Interior Decor Portfolio</MenuTitle>
                <MenuDesc>Create, view, update and delete Interior Decor Portfolio</MenuDesc>
              </MenuContent>
              <MenuIconWrapper className="menu-icon">
                <ShoppingBag />
              </MenuIconWrapper>
            </MenuCard>


<MenuCard clickable onClick={() => router.push("/dashboard/manage-shortlets")}>
              <MenuContent>
                <MenuTitle>Manage Shortlets</MenuTitle>
                <MenuDesc>Create, view, update and delete Shortlets</MenuDesc>
              </MenuContent>
              <MenuIconWrapper className="menu-icon">
                <ShoppingBag />
              </MenuIconWrapper>
            </MenuCard>

             <MenuCard clickable onClick={() => router.push("/dashboard/manage-categories")}>
              <MenuContent>
                <MenuTitle>Manage ASHÉVON Categories</MenuTitle>
                <MenuDesc>Create, view, update and delete categories</MenuDesc>
              </MenuContent>
              <MenuIconWrapper className="menu-icon">
                <Package />
              </MenuIconWrapper>
            </MenuCard>
            

            <MenuCard clickable onClick={() => router.push("/dashboard/manage-products")}>
              <MenuContent>
                <MenuTitle>Manage ASHÉVON Products</MenuTitle>
                <MenuDesc>Create, view, update and delete products</MenuDesc>
              </MenuContent>
              <MenuIconWrapper className="menu-icon">
                <Package />
              </MenuIconWrapper>
            </MenuCard>

            <MenuCard clickable onClick={() => router.push("/dashboard/productdetail-by-id")}>
              <MenuContent>
                <MenuTitle>Product Lookup</MenuTitle>
                <MenuDesc>Search product detail by its unique ID</MenuDesc>
              </MenuContent>
              <MenuIconWrapper className="menu-icon">
                <Search />
              </MenuIconWrapper>
            </MenuCard>

            <MenuCard clickable onClick={() => router.push("/dashboard/manage-orders")}>
              <MenuContent>
                <MenuTitle>Manage Orders</MenuTitle>
                <MenuDesc>View and manage customer orders and deliveries</MenuDesc>
              </MenuContent>
              <MenuIconWrapper className="menu-icon">
                <ShoppingBag />
              </MenuIconWrapper>
            </MenuCard>

            <MenuCard clickable onClick={() => router.push("/dashboard/manage-users")}>
              <MenuContent>
                <MenuTitle>Manage Users</MenuTitle>
                <MenuDesc>View and manage registered client information</MenuDesc>
              </MenuContent>
              <MenuIconWrapper className="menu-icon">
                <Users />
              </MenuIconWrapper>
            </MenuCard>

            <MenuCard clickable onClick={() => router.push("/dashboard/promocodes")}>
              <MenuContent>
                <MenuTitle>Manage Promo Codes</MenuTitle>
                <MenuDesc>View and manage promotional discount codes</MenuDesc>
              </MenuContent>
              <MenuIconWrapper className="menu-icon">
                <Sparkles />
              </MenuIconWrapper>
            </MenuCard>

            <MenuCard clickable onClick={() => router.push("/dashboard/analytics")}>
              <MenuContent>
                <MenuTitle>Analytics</MenuTitle>
                <MenuDesc>View store and platform performance metrics</MenuDesc>
              </MenuContent>
              <MenuIconWrapper className="menu-icon">
                <BarChart3 />
              </MenuIconWrapper>
            </MenuCard>

            <MenuCard clickable onClick={() => router.push("/dashboard/payout-details-management")}>
              <MenuContent>
                <MenuTitle>Paystack Payout Account</MenuTitle>
                <MenuDesc>View and manage corporate payout details</MenuDesc>
              </MenuContent>
              <MenuIconWrapper className="menu-icon">
                <CreditCard />
              </MenuIconWrapper>
            </MenuCard>

              <MenuCard clickable onClick={() => router.push("/dashboard/manage-direct-transfer-account")}>
              <MenuContent>
                <MenuTitle>Direct transfer Payout Account</MenuTitle>
                <MenuDesc>View and manage corporate payout details</MenuDesc>
              </MenuContent>
              <MenuIconWrapper className="menu-icon">
                <CreditCard />
              </MenuIconWrapper>
            </MenuCard>

            <MenuCard clickable onClick={() => router.push("/dashboard/hostinglist")}>
              <MenuContent>
                <MenuTitle>Manage Hosting</MenuTitle>
                <MenuDesc>View and manage hosting infrastructure services</MenuDesc>
              </MenuContent>
              <MenuIconWrapper className="menu-icon">
                <Globe />
              </MenuIconWrapper>
            </MenuCard>
          </MenuGrid>
        </>
      )}

      {/* Customer / Standard User Actions */}
      <SectionHeader>
        <span className="tag">QUICK ACTIONS</span>
      </SectionHeader>

      <MenuGrid>
        <MenuCard clickable onClick={() => router.push("/dashboard/myorders")}>
          <MenuContent>
            <MenuTitle>My Orders</MenuTitle>
            <MenuDesc>Track shipping, order details & delivery status</MenuDesc>
          </MenuContent>
          <MenuIconWrapper className="menu-icon">
            <Package />
          </MenuIconWrapper>
        </MenuCard>

        <MenuCard clickable onClick={() => router.push("/dashboard/mywishlist")}>
          <MenuContent>
            <MenuTitle>My Wishlist</MenuTitle>
            <MenuDesc>View saved items & exclusive special offers</MenuDesc>
          </MenuContent>
          <MenuIconWrapper className="menu-icon">
            <Heart />
          </MenuIconWrapper>
        </MenuCard>
      </MenuGrid>

      {/* Primary User Details */}
      <SectionHeader>
        <span className="tag">ACCOUNT INFORMATION</span>
      </SectionHeader>

      <DetailsGrid>
        <DetailCard>
          <DetailHeaderRow>
            <DetailTitle>
              <UserCheck /> FULL NAME
            </DetailTitle>
            <ActionTextBtn onClick={handleEditName}>
              <Edit3 /> EDIT
            </ActionTextBtn>
          </DetailHeaderRow>
          <DetailValue>{userData.name || "Not provided"}</DetailValue>
        </DetailCard>

        <DetailCard>
          <DetailHeaderRow>
            <DetailTitle>
              <Mail /> EMAIL ADDRESS
            </DetailTitle>
          </DetailHeaderRow>
          <DetailValue>{userData.email}</DetailValue>
        </DetailCard>

        <DetailCard>
          <DetailHeaderRow>
            <DetailTitle>
              <Phone /> PHONE NUMBER
            </DetailTitle>
            <ActionTextBtn onClick={handleEditPhone}>
              <Edit3 /> EDIT
            </ActionTextBtn>
          </DetailHeaderRow>
          <DetailValue>{userData.phone || "Not provided"}</DetailValue>
        </DetailCard>

        <SessionSignOutCard onClick={handleSignOut}>
          <DetailHeaderRow>
            <DetailTitle style={{ color: "#dc2626" }}>
              <Shield /> SESSION SECURITY
            </DetailTitle>
            <span
              style={{
                background: "#dc2626",
                color: "#ffffff",
                padding: "5px 12px",
                borderRadius: "4px",
                fontSize: "10px",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              SIGN OUT
            </span>
          </DetailHeaderRow>
          <DetailValue style={{ color: "#991b1b", fontSize: "0.85rem", fontWeight: "400" }}>
            Safely disconnect and terminate your current portal session
          </DetailValue>
        </SessionSignOutCard>
      </DetailsGrid>
    </Container>
  );
};

export default DashboardHome;