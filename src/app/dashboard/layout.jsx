

// "use client";

// import { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/firebaseConfig";
// import { useRouter } from "next/navigation";
// import styled from "styled-components";
// import Swal from "sweetalert2";
// import { usePathname } from "next/navigation";
// import { primaryColoring, secondaryColoring } from "@/components/Context";


// const PrimaryNavy = primaryColoring;
// const PrimaryCyan = secondaryColoring;
// const ThemeGradient = `linear-gradient(135deg, #11382b 0%, #11382b 100%)`;
// const Dark = "#0f172a";
// const Border = "#cbd5e1";
// const White = "#ffffff";
// const TextMuted = "#475569";
// const LightBg = "#f8fafc";


// /* ---------------- LAYOUT WRAPPER ---------------- */
// const LayoutWrapper = styled.div`
//   display: flex;
//   min-height: 100vh;
//   position: relative;
//   background: ${LightBg};
//   font-family: inherit;
// `;

// /* ---------------- SIDEBAR ---------------- */
// const Sidebar = styled.div`
//   width: 280px;
//   background: ${White};
//   border-right: 1px solid ${Border};
//   color: ${Dark};
//   padding: 24px 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
//   z-index: 200;
//   box-shadow: 10px 0 30px rgba(11, 27, 72, 0.03);

//   @media (max-width: 768px) {
//     position: fixed;
//     top: 0;
//     left: 0;
//     transform: translateX(${(props) => (props.$open ? "0" : "-100%")});
//     height: 100vh;
//     box-shadow: ${(props) => (props.$open ? "20px 0 50px rgba(11, 27, 72, 0.15)" : "none")};
//   }
// `;

// const SidebarTop = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
// `;

// const BrandLogo = styled.h2`
//   font-size: 1.25rem;
//   font-weight: 800;
//   letter-spacing: -0.5px;
//   color: ${PrimaryNavy};
//   padding-bottom: 16px;
//   border-bottom: 1px solid ${Border};
//   margin: 0;

//   span {
//     color: ${PrimaryCyan};
//   }
// `;

// const NavLinks = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
// `;

// const MenuItem = styled.div`
//   padding: 12px 16px;
//   cursor: pointer;
//   border-radius: 12px;
//   font-size: 0.95rem;
//   font-weight: 700;
//   color: ${(props) => (props.$active ? White : TextMuted)};
//   background: ${(props) => (props.$active ? ThemeGradient : "transparent")};
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   box-shadow: ${(props) => (props.$active ? "0 8px 20px rgba(0, 174, 239, 0.25)" : "none")};
//   transition: all 0.25s ease;

//   &:hover {
//     background: ${(props) => (props.$active ? ThemeGradient : "rgba(0, 174, 239, 0.06)")};
//     color: ${(props) => (props.$active ? White : PrimaryNavy)};
//     transform: translateX(3px);
//   }
// `;

// const LogoutButton = styled.div`
//   padding: 12px 16px;
//   cursor: pointer;
//   border-radius: 12px;
//   font-size: 0.95rem;
//   font-weight: 700;
//   color: #ef4444;
//   background: rgba(239, 68, 68, 0.05);
//   border: 1px solid rgba(239, 68, 68, 0.1);
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   transition: all 0.25s ease;

//   &:hover {
//     background: rgba(239, 68, 68, 0.12);
//     transform: translateY(-2px);
//   }
// `;

// /* ---------------- MAIN CONTENT AREA ---------------- */
// const MainContentArea = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   min-width: 0;
// `;

// const Topbar = styled.header`
//   // height: 70px;
//   background: rgba(255, 255, 255, 0.9);
//   backdrop-filter: blur(12px);
//   border-bottom: 1px solid ${Border};
//   padding: 0 24px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   position: sticky;
//   top: 0;
//   z-index: 100;
// `;

// const TopbarLeft = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 16px;
// `;

// const TopbarRight = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 16px;
// `;

// const Content = styled.main`
//   flex: 1;
//   padding: 32px;
//   background: ${LightBg};
//   overflow-y: auto;
//   display: flex;
//   flex-direction: column;
//   gap: 24px;

//   @media (max-width: 768px) {
//     padding: 20px;
//   }
// `;

// /* ---------------- OVERLAY (click-away) ---------------- */
// const Overlay = styled.div`
//   display: none;

//   @media (max-width: 768px) {
//     display: ${(props) => (props.$open ? "block" : "none")};
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     background: rgba(11, 27, 72, 0.4);
//     backdrop-filter: blur(4px);
//     z-index: 150;
//   }
// `;

// /* ---------------- HAMBURGER ---------------- */
// const Hamburger = styled.button`
//   width: 44px;
//   height: 44px;
//   background: ${White};
//   border: 1px solid ${Border};
//   border-radius: 10px;
//   color: ${PrimaryNavy};
//   font-size: 1.25rem;
//   display: none;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   box-shadow: 0 4px 12px rgba(11, 27, 72, 0.03);
//   transition: all 0.2s ease;

//   &:hover {
//     border-color: ${PrimaryCyan};
//     color: ${PrimaryCyan};
//   }

//   @media (max-width: 768px) {
//     display: flex;
//   }
// `;

// /* ---------------- HOME BUTTON ---------------- */
// const HomeButton = styled.button`
//   width: 44px;
//   height: 44px;
//   border-radius: 10px;
//   background: ${White};
//   color: ${PrimaryNavy};
//   border: 1px solid ${Border};
//   font-size: 1.15rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   box-shadow: 0 4px 12px rgba(11, 27, 72, 0.03);
//   transition: all 0.2s ease;

//   &:hover {
//     border-color: ${PrimaryCyan};
//     color: ${PrimaryCyan};
//     transform: translateY(-2px);
//   }
// `;

// /* ---------------- LOADING STATE ---------------- */
// const LoadingWrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: ${LightBg};
//   color: ${PrimaryNavy};
//   font-size: 1.1rem;
//   font-weight: 600;
//   padding: 24px;
//   box-sizing: border-box;
// `;

// export default function DashboardLayout({ children }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [loading, setLoading] = useState(true);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const showHomeButton = pathname !== "/dashboard";

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         router.replace("/login");
//       }
//       setLoading(false);
//     });

//     return () => unsub();
//   }, [router]);

//   if (loading) {
//     return (
//       <LoadingWrapper>
//         <p>Loading dashboard...</p>
//       </LoadingWrapper>
//     );
//   }

//   /* ---------------- SIGN OUT ---------------- */
//   const signOut = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You will be signed out of your account.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: PrimaryNavy,
//       cancelButtonColor: "#ef4444",
//       confirmButtonText: "Yes, Sign Out",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         auth.signOut();
//         Swal.fire("Signed Out", "You have been logged out successfully.", "success");
//         router.push("/login");
//       }
//     });
//   };

//   /* ---------------- CLOSE SIDEBAR ON MOBILE ---------------- */
//   const closeSidebar = () => {
//     if (window.innerWidth <= 768) {
//       setSidebarOpen(false);
//     }
//   };

//   return (
//     <LayoutWrapper>
//       {/* CLICK-AWAY OVERLAY */}
//       <Overlay $open={sidebarOpen} onClick={() => setSidebarOpen(false)} />

//       {/* SIDEBAR */}
//       <Sidebar $open={sidebarOpen}>
//         <SidebarTop>
//           <BrandLogo>
//             PINKLES
//             {/* <span>GLOBAL</span> */}
//           </BrandLogo>

//           <NavLinks>
//             <MenuItem
//               $active={pathname === "/dashboard"}
//               onClick={() => {
//                 router.push("/dashboard");
//                 closeSidebar();
//               }}
//             >
//               📊 My Dashboard
//             </MenuItem>
//           </NavLinks>
//         </SidebarTop>

//         <LogoutButton
//           onClick={() => {
//             signOut();
//             closeSidebar();
//           }}
//         >
//           🚪 Sign Out
//         </LogoutButton>
//       </Sidebar>

//       {/* MAIN CONTENT AREA */}
//       <MainContentArea>
//         {/* TOPBAR */}
//         <Topbar>
//           <TopbarLeft>
//             <Hamburger onClick={() => setSidebarOpen(!sidebarOpen)}>
//               ☰
//             </Hamburger>
//           </TopbarLeft>

//           <TopbarRight>
//             {showHomeButton && (
//               <HomeButton
//                 onClick={() => {
//                   router.push("/dashboard");
//                   closeSidebar();
//                 }}
//                 title="Return to Dashboard"
//               >
//                 🏠
//               </HomeButton>
//             )}
//           </TopbarRight>
//         </Topbar>

//         {/* CONTENT */}
//         <Content onClick={closeSidebar}>
//           {children}
//         </Content>
//       </MainContentArea>
//     </LayoutWrapper>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useRouter, usePathname } from "next/navigation";
import styled from "styled-components";
import Swal from "sweetalert2";
import {
  LayoutDashboard,
  Home,
  Menu,
  LogOut,
  ChevronRight,
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
const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
  background: ${LightBg};
  font-family: inherit;
`;

const Sidebar = styled.div`
  width: 280px;
  background: ${White};
  border-right: 1px solid ${Border};
  color: ${Dark};
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 200;
  box-shadow: 10px 0 30px rgba(15, 23, 42, 0.03);

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(${(props) => (props.$open ? "0" : "-100%")});
    height: 100vh;
    box-shadow: ${(props) =>
      props.$open ? "20px 0 50px rgba(15, 23, 42, 0.15)" : "none"};
  }
`;

const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const BrandLogo = styled.h2`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.3px;
  color: ${PrimaryNavy};
  padding-bottom: 20px;
  border-bottom: 1px solid ${Border};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${PrimaryCyan};
    font-weight: 700;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const MenuItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  color: ${(props) => (props.$active ? White : TextMuted)};
  background: ${(props) => (props.$active ? ThemeGradient : "transparent")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${(props) =>
    props.$active ? "0 4px 15px rgba(0, 174, 239, 0.25)" : "none"};
  transition: all 0.25s ease;

  .item-left {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  &:hover {
    background: ${(props) =>
      props.$active ? ThemeGradient : "rgba(0, 174, 239, 0.06)"};
    color: ${(props) => (props.$active ? White : PrimaryNavy)};
  }
`;

const LogoutButton = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  color: #dc2626;
  background: #fef2f2;
  border: 1px solid #fca5a5;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.25s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: #fee2e2;
    transform: translateY(-1px);
  }
`;

const MainContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const Topbar = styled.header`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${Border};
  padding: 0 28px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const TopbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TopbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Content = styled.main`
  flex: 1;
  // padding: 36px;
  background: ${LightBg};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    // padding: 20px;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$open ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(15, 23, 42, 0.5);
    backdrop-filter: blur(4px);
    z-index: 150;
  }
`;

const Hamburger = styled.button`
  width: 40px;
  height: 40px;
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 8px;
  color: ${PrimaryNavy};
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
  transition: all 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    border-color: ${PrimaryCyan};
    color: ${PrimaryCyan};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HomeButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${White};
  color: ${PrimaryNavy};
  border: 1px solid ${Border};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
  transition: all 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    border-color: ${PrimaryCyan};
    color: ${PrimaryCyan};
    transform: translateY(-1px);
  }
`;

const LoadingWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${LightBg};
  color: ${PrimaryNavy};
  font-size: 1.05rem;
  font-weight: 600;
  padding: 24px;
  box-sizing: border-box;
`;

/* ================= 🚀 COMPONENT ================= */
export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const showHomeButton = pathname !== "/dashboard";

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/login");
      }
      setLoading(false);
    });

    return () => unsub();
  }, [router]);

  if (loading) {
    return (
      <LoadingWrapper>
        <p>Loading your dashboard...</p>
      </LoadingWrapper>
    );
  }

  /* ---------------- SIGN OUT ---------------- */
  const signOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be signed out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: PrimaryNavy,
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Sign Out",
    }).then((result) => {
      if (result.isConfirmed) {
        auth.signOut();
        Swal.fire("Signed Out", "You have been logged out successfully.", "success");
        router.push("/login");
      }
    });
  };

  /* ---------------- CLOSE SIDEBAR ON MOBILE ---------------- */
  const closeSidebar = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <LayoutWrapper>
      {/* CLICK-AWAY OVERLAY */}
      <Overlay $open={sidebarOpen} onClick={() => setSidebarOpen(false)} />

      {/* SIDEBAR */}
      <Sidebar $open={sidebarOpen}>
        <SidebarTop>
          <BrandLogo>
            PINKLES <span>NIG LTD</span>
          </BrandLogo>

          <NavLinks>
            <MenuItem
              $active={pathname === "/dashboard"}
              onClick={() => {
                router.push("/dashboard");
                closeSidebar();
              }}
            >
              <div className="item-left">
                <LayoutDashboard />
                <span>My Dashboard</span>
              </div>
              <ChevronRight size={16} />
            </MenuItem>
          </NavLinks>
        </SidebarTop>

        <LogoutButton
          onClick={() => {
            signOut();
            closeSidebar();
          }}
        >
          <LogOut />
          <span>Sign Out</span>
        </LogoutButton>
      </Sidebar>

      {/* MAIN CONTENT AREA */}
      <MainContentArea>
        {/* TOPBAR */}
        <Topbar>
          <TopbarLeft>
            <Hamburger onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu />
            </Hamburger>
          </TopbarLeft>

          <TopbarRight>
            {showHomeButton && (
              <HomeButton
                onClick={() => {
                  router.push("/dashboard");
                  closeSidebar();
                }}
                title="Return to Dashboard"
              >
                <Home />
              </HomeButton>
            )}
          </TopbarRight>
        </Topbar>

        {/* CONTENT */}
        <Content onClick={closeSidebar}>{children}</Content>
      </MainContentArea>
    </LayoutWrapper>
  );
}