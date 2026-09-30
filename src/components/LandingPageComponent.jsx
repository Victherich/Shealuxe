



// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import styled, { keyframes } from "styled-components";
// import { Sparkles, ArrowRight, ShieldCheck, Camera, Cpu, Lock, Bell, CheckCircle2 } from "lucide-react";

// /* ================= ANIMATIONS ================= */
// const floatSlow = keyframes`
//   0% { transform: translateY(0px) rotate(0deg); }
//   50% { transform: translateY(-10px) rotate(1deg); }
//   100% { transform: translateY(0px) rotate(0deg); }
// `;

// const pulseGlow = keyframes`
//   0% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4); }
//   70% { box-shadow: 0 0 0 22px rgba(139, 92, 246, 0); }
//   100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
// `;

// /* ================= THEME STYLES (MAJINFOTEK) ================= */
// const primaryBlue = '#1c3ba4';
// const richPurple = '#8b5cf6';
// const ThemeGradient = "linear-gradient(135deg, #1c3ba4 0%, #8b5cf6 100%)";
// const SoftGradientBg = "linear-gradient(135deg, rgba(28, 59, 164, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)";
// const LightBg = "#f8fafc";
// const CardBg = "#ffffff";
// const TextPrimary = "#0f172a";
// const TextMuted = "#475569";
// const BorderColor = "rgba(226, 232, 240, 0.9)";

// /* ================= COMPONENTS ================= */

// const PageWrapper = styled.div`
//   background-color: ${LightBg};
//   color: ${TextPrimary};
//   font-family: inherit;
//   overflow-x: hidden;
//   padding-top: 73px;
// `;

// const PrimaryButton = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.75rem;
//   padding: 1.15rem 2.6rem;
//   border-radius: 9999px;
//   background: ${ThemeGradient};
//   color: #ffffff;
//   font-weight: 700;
//   font-size: 1.05rem;
//   box-shadow: 0 14px 30px -5px rgba(139, 92, 246, 0.45);
//   transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
//   text-decoration: none;
//   animation: ${pulseGlow} 3s infinite;

//   &:hover {
//     transform: translateY(-3px) scale(1.02);
//     box-shadow: 0 20px 40px -5px rgba(139, 92, 246, 0.65);
//     animation: none;
//   }
// `;

// /* --- STUNNING HERO SECTION --- */
// const HeroSection = styled.section`
//   position: relative;
//   padding: 8rem 1.5rem 6rem 1.5rem;
//   background: radial-gradient(circle at top right, rgba(28, 59, 164, 0.08), transparent 40%),
//               radial-gradient(circle at bottom left, rgba(139, 92, 246, 0.08), transparent 40%),
//               ${LightBg};
//   overflow: hidden;
//   border-bottom: 1px solid ${BorderColor};
// `;

// const HeroGrid = styled.div`
//   max-width: 1280px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 4rem;
//   align-items: center;

//   @media (min-width: 968px) {
//     grid-template-columns: 1.1fr 0.9fr;
//   }
// `;

// const HeroContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;

//   .badge-pill {
//     display: inline-flex;
//     align-items: center;
//     gap: 0.5rem;
//     padding: 0.5rem 1.25rem;
//     background: linear-gradient(135deg, rgba(28, 59, 164, 0.1), rgba(139, 92, 246, 0.1));
//     border: 1px solid rgba(139, 92, 246, 0.25);
//     border-radius: 9999px;
//     color: ${primaryBlue};
//     font-weight: 700;
//     font-size: 0.85rem;
//     text-transform: uppercase;
//     letter-spacing: 0.08em;
//     width: fit-content;
//     box-shadow: 0 4px 15px rgba(28, 59, 164, 0.1);
//   }

//   h1 {
//     font-size: clamp(2.75rem, 5vw, 4.2rem);
//     font-weight: 900;
//     line-height: 1.1;
//     color: ${TextPrimary};
//     letter-spacing: -0.03em;

//     span {
//       background: ${ThemeGradient};
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//     }
//   }

//   p {
//     font-size: 1.15rem;
//     color: ${TextMuted};
//     line-height: 1.8;
//     max-width: 36rem;
//   }
// `;

// const HeroActions = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1.25rem;
//   align-items: center;
// `;

// const HeroVisual = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;

//   .main-hero-img {
//     width: 100%;
//     max-width: 520px;
//     height: 520px;
//     object-fit: cover;
//     border-radius: 2.5rem;
//     box-shadow: 0 35px 70px -15px rgba(15, 23, 42, 0.25);
//     border: 4px solid #ffffff;
//     animation: ${floatSlow} 6s ease-in-out infinite;
//   }

//   .floating-badge {
//     position: absolute;
//     bottom: 2rem;
//     left: -1rem;
//     background: rgba(255, 255, 255, 0.95);
//     backdrop-filter: blur(12px);
//     padding: 1rem 1.5rem;
//     border-radius: 1.25rem;
//     border: 1px solid ${BorderColor};
//     box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//     display: flex;
//     align-items: center;
//     gap: 1rem;

//     .icon-wrap {
//       width: 44px;
//       height: 44px;
//       border-radius: 1rem;
//       background: ${ThemeGradient};
//       color: #ffffff;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }

//     h4 {
//       font-size: 0.95rem;
//       font-weight: 800;
//       color: ${TextPrimary};
//       margin: 0;
//     }

//     p {
//       font-size: 0.8rem;
//       color: ${TextMuted};
//       margin: 0;
//     }

//     @media (max-width: 640px) {
//       left: 1rem;
//     }
//   }
// `;

// /* --- FEATURES / VALUES SECTION (BENTO GRID STYLE) --- */
// const FeaturesSection = styled.section`
//   padding: 7rem 1.5rem;
//   max-width: 1280px;
//   margin: 0 auto;
// `;

// const SectionHeader = styled.div`
//   text-align: center;
//   max-width: 52rem;
//   margin: 0 auto 5rem auto;

//   .badge-pill {
//     display: inline-flex;
//     align-items: center;
//     gap: 0.5rem;
//     padding: 0.5rem 1.25rem;
//     background: linear-gradient(135deg, rgba(28, 59, 164, 0.1), rgba(139, 92, 246, 0.1));
//     border: 1px solid rgba(139, 92, 246, 0.2);
//     border-radius: 9999px;
//     color: ${primaryBlue};
//     font-weight: 700;
//     font-size: 0.85rem;
//     text-transform: uppercase;
//     letter-spacing: 0.08em;
//     margin-bottom: 1.25rem;
//   }

//   h2 {
//     font-size: 2.25rem;
//     font-weight: 800;
//     margin-bottom: 1.25rem;
//     color: ${TextPrimary};
//     letter-spacing: -0.02em;
//     @media (min-width: 768px) { font-size: 3.25rem; }
//   }

//   p {
//     color: ${TextMuted};
//     font-size: 1.15rem;
//     line-height: 1.7;
//   }
// `;

// const BentoGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
//   gap: 2rem;

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
// `;

// const BentoCard = styled.div`
//   background: ${CardBg};
//   border: 1px solid ${BorderColor};
//   border-radius: 2rem;
//   padding: 3rem 2.25rem;
//   transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//   position: relative;
//   overflow: hidden;
//   box-shadow: 0 15px 40px rgba(15, 23, 42, 0.04);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   &:hover {
//     transform: translateY(-8px);
//     border-color: rgba(139, 92, 246, 0.4);
//     box-shadow: 0 30px 60px -15px rgba(139, 92, 246, 0.15);

//     .icon-box {
//       transform: scale(1.1) rotate(6deg);
//       background: ${ThemeGradient};
//       color: #ffffff;
//     }
//   }

//   .icon-box {
//     width: 72px;
//     height: 72px;
//     border-radius: 1.25rem;
//     background: ${SoftGradientBg};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-bottom: 2rem;
//     color: ${primaryBlue};
//     transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
//     border: 1px solid rgba(139, 92, 246, 0.15);
//   }

//   h3 {
//     font-size: 1.4rem;
//     font-weight: 800;
//     margin-bottom: 0.85rem;
//     color: ${TextPrimary};
//   }

//   p {
//     color: ${TextMuted};
//     font-size: 1.05rem;
//     line-height: 1.7;
//   }
// `;

// /* --- FEATURED PRODUCT SHOWCASE (SPLIT BANNER) --- */
// const ProductShowcaseSection = styled.section`
//   background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
//   padding: 2rem 1.5rem 7rem 1.5rem;
// `;

// const ProductContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   background: ${CardBg};
//   border: 1px solid ${BorderColor};
//   border-radius: 2.5rem;
//   padding: 1rem;
//   box-shadow: 0 30px 60px -20px rgba(15, 23, 42, 0.08);
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 3.5rem;
//   align-items: center;

//   @media (min-width: 900px) {
//     grid-template-columns: 1fr 1fr;
//     padding: 4rem;
//   }
// `;

// const ImageWrapper = styled.div`
//   position: relative;
//   border-radius: 2rem;
//   overflow: hidden;
//   box-shadow: 0 25px 50px -15px rgba(15, 23, 42, 0.18);
//   border: 2px solid #ffffff;

//   img {
//     width: 100%;
//     height: 480px;
//     object-fit: cover;
//     transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
//   }

//   &:hover img {
//     transform: scale(1.05);
//   }

//   .badge-tag {
//     position: absolute;
//     top: 1.5rem;
//     left: 1.5rem;
//     background: rgba(255, 255, 255, 0.95);
//     backdrop-filter: blur(12px);
//     padding: 0.6rem 1.25rem;
//     border-radius: 9999px;
//     font-size: 0.85rem;
//     font-weight: 700;
//     color: ${primaryBlue};
//     border: 1px solid rgba(28, 59, 164, 0.2);
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
//     display: flex;
//     align-items: center;
//     gap: 0.4rem;
//   }
// `;

// const ProductDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.75rem;

//   .category {
//     background: ${ThemeGradient};
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     font-weight: 800;
//     font-size: 0.95rem;
//     text-transform: uppercase;
//     letter-spacing: 0.15em;
//   }

//   h3 {
//     font-size: 2.5rem;
//     font-weight: 800;
//     color: ${TextPrimary};
//     line-height: 1.2;
//     letter-spacing: -0.02em;
//     @media (min-width: 768px) { font-size: 2.85rem; }
//   }

//   .price {
//     font-size: 2.2rem;
//     font-weight: 900;
//     background: ${ThemeGradient};
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }

//   p {
//     color: ${TextMuted};
//     line-height: 1.8;
//     font-size: 1.1rem;
//   }
// `;

// export default function LandingPage() {
//   return (
//     <PageWrapper>
//       {/* 1. STUNNING HERO SECTION */}
//       <HeroSection>
//         <HeroGrid>
//           <HeroContent>
//             <div className="badge-pill">
//               <Sparkles className="w-4 h-4 text-purple-600" /> Advanced Security & Tech
//             </div>
//             <h1>
//               Secure Your Space with <span>MAJINFOTEK</span>
//             </h1>
//             <p>
//               Explore cutting-edge CCTV surveillance systems, crystal-clear intercom solutions, and premium tech gadgets engineered to protect and optimize your premises.
//             </p>
//             <HeroActions>
//               <PrimaryButton href="/store">
//                 <Camera className="w-5 h-5" />
//                 Explore Security Systems
//               </PrimaryButton>
//             </HeroActions>
//           </HeroContent>

//           <HeroVisual>
//             <img 
//               className="main-hero-img"
//               src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000"
//               alt="Majinfotek Security Tech Experience" 
//             />
//             <div className="floating-badge">
//               <div className="icon-wrap">
//                 <CheckCircle2 className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h4>Pro Installation</h4>
//                 <p>Reliable Support</p>
//               </div>
//             </div>
//           </HeroVisual>
//         </HeroGrid>
//       </HeroSection>

//       {/* 2. WELCOME & INTRO SECTION (BENTO GRID) */}
//       <FeaturesSection>
//         <SectionHeader>
//           <div className="badge-pill">
//             <Sparkles className="w-4 h-4" /> Next-Gen Protection
//           </div>
//           <h2>Smart Security Solutions</h2>
//           <p>
//             Equip your residential and commercial properties with state-of-the-art surveillance and robust communication equipment built for ultimate peace of mind.
//           </p>
//         </SectionHeader>

//         <BentoGrid>
//           <BentoCard>
//             <div className="icon-box">
//               <Camera className="w-8 h-8" />
//             </div>
//             <div>
//               <h3>CCTV Surveillance</h3>
//               <p>High-definition security cameras with crystal-clear night vision, remote smartphone viewing, and reliable threat detection.</p>
//             </div>
//           </BentoCard>

//           <BentoCard>
//             <div className="icon-box">
//               <Bell className="w-8 h-8" />
//             </div>
//             <div>
//               <h3>Intercom Systems</h3>
//               <p>Seamless audio and video communication setups designed to control access and secure building entry points effortlessly.</p>
//             </div>
//           </BentoCard>

//           <BentoCard>
//             <div className="icon-box">
//               <ShieldCheck className="w-8 h-8" />
//             </div>
//             <div>
//               <h3>Smart Tech Gadgets</h3>
//               <p>Modern electronic accessories and smart hardware engineered to elevate your security infrastructure and automation.</p>
//             </div>
//           </BentoCard>
//         </BentoGrid>
//       </FeaturesSection>

//       {/* 3. FEATURED PRODUCT SHOWCASE */}
//       <ProductShowcaseSection>
//         <ProductContainer>
//           <ImageWrapper>
//             <div className="badge-tag">
//               <Sparkles className="w-4 h-4 text-purple-600" /> Featured Hardware
//             </div>
//             <img 
//               src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=80&w=1000"
//               alt="Featured Security Product" 
//             />
//           </ImageWrapper>

//           <ProductDetails>
//             <span className="category">Catalog Spotlight</span>
//             <h3>HD Surveillance & Intercom Kits</h3>
//             <div className="price">Top-Tier Protection</div>
//             <p>
//               Discover our handpicked collection of advanced surveillance cameras and automated security systems. Expertly curated to ensure robust defense for your homes and offices without compromise.
//             </p>
//             <div>
//               <PrimaryButton href="/store">
//                 <Lock className="w-5 h-5" />
//                 Browse Catalog
//               </PrimaryButton>
//             </div>
//           </ProductDetails>
//         </ProductContainer>
//       </ProductShowcaseSection>

//     </PageWrapper>
//   );
// }


"use client";

import React from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { Sparkles, ArrowRight, BookOpen, ShoppingBag, Leaf, Award, CheckCircle2 } from "lucide-react";
import { primaryColoring, secondaryColoring } from "./Context";

/* ================= THEME STYLES (SHEALUXE) ================= */
const primaryColor = primaryColoring; // #3D1B17 (Deep Brown)
const secondaryColor = secondaryColoring; // #E2B04A (Gold)
const ThemeGradient = `linear-gradient(135deg, ${primaryColoring} 0%, ${secondaryColoring} 100%)`;
const SoftGradientBg = "linear-gradient(135deg, rgba(61, 27, 23, 0.05) 0%, rgba(226, 176, 74, 0.08) 100%)";
const LightBg = "#fdfbf9";
const CardBg = "#ffffff";
const TextPrimary = "#0f172a";
const TextMuted = "#475569";
const BorderColor = "rgba(226, 232, 240, 0.9)";

/* ================= ANIMATIONS ================= */
const floatSlow = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(226, 176, 74, 0.4); }
  70% { box-shadow: 0 0 0 22px rgba(226, 176, 74, 0); }
  100% { box-shadow: 0 0 0 0 rgba(226, 176, 74, 0); }
`;

/* ================= COMPONENTS ================= */

const PageWrapper = styled.div`
  background-color: ${LightBg};
  color: ${TextPrimary};
  font-family: inherit;
  overflow-x: hidden;
  padding-top: 73px;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.15rem 2.6rem;
  border-radius: 9999px;
  background: ${ThemeGradient};
  color: #ffffff;
  font-weight: 700;
  font-size: 1.05rem;
  box-shadow: 0 14px 30px -5px rgba(226, 176, 74, 0.45);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  animation: ${pulseGlow} 3s infinite;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 20px 40px -5px rgba(226, 176, 74, 0.65);
    animation: none;
  }
`;

/* --- STUNNING HERO SECTION --- */
const HeroSection = styled.section`
  position: relative;
  padding: 8rem 1.5rem 6rem 1.5rem;
  background: radial-gradient(circle at top right, rgba(61, 27, 23, 0.08), transparent 40%),
              radial-gradient(circle at bottom left, rgba(226, 176, 74, 0.1), transparent 40%),
              ${LightBg};
  overflow: hidden;
  border-bottom: 1px solid ${BorderColor};
`;

const HeroGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  @media (min-width: 968px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.25rem;
    background: linear-gradient(135deg, rgba(61, 27, 23, 0.08), rgba(226, 176, 74, 0.15));
    border: 1px solid rgba(226, 176, 74, 0.3);
    border-radius: 9999px;
    color: ${primaryColor};
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    width: fit-content;
    box-shadow: 0 4px 15px rgba(61, 27, 23, 0.08);
  }

  h1 {
    font-size: clamp(2.75rem, 5vw, 4.2rem);
    font-weight: 900;
    line-height: 1.1;
    color: ${TextPrimary};
    letter-spacing: -0.03em;

    span {
      background: ${ThemeGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    font-size: 1.15rem;
    color: ${TextMuted};
    line-height: 1.8;
    max-width: 36rem;
  }
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  align-items: center;
`;

const HeroVisual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  .main-hero-img {
    width: 100%;
    max-width: 520px;
    height: 520px;
    object-fit: cover;
    border-radius: 2.5rem;
    box-shadow: 0 35px 70px -15px rgba(61, 27, 23, 0.25);
    border: 4px solid #ffffff;
    animation: ${floatSlow} 6s ease-in-out infinite;
  }

  .floating-badge {
    position: absolute;
    bottom: 2rem;
    left: -1rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    padding: 1rem 1.5rem;
    border-radius: 1.25rem;
    border: 1px solid ${BorderColor};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon-wrap {
      width: 44px;
      height: 44px;
      border-radius: 1rem;
      background: ${ThemeGradient};
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h4 {
      font-size: 0.95rem;
      font-weight: 800;
      color: ${TextPrimary};
      margin: 0;
    }

    p {
      font-size: 0.8rem;
      color: ${TextMuted};
      margin: 0;
    }

    @media (max-width: 640px) {
      left: 1rem;
    }
  }
`;

/* --- FEATURES / VALUES SECTION (BENTO GRID STYLE) --- */
const FeaturesSection = styled.section`
  padding: 7rem 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 52rem;
  margin: 0 auto 5rem auto;

  .badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.25rem;
    background: linear-gradient(135deg, rgba(61, 27, 23, 0.08), rgba(226, 176, 74, 0.15));
    border: 1px solid rgba(226, 176, 74, 0.3);
    border-radius: 9999px;
    color: ${primaryColor};
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 1.25rem;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 800;
    margin-bottom: 1.25rem;
    color: ${TextPrimary};
    letter-spacing: -0.02em;
    @media (min-width: 768px) { font-size: 3.25rem; }
  }

  p {
    color: ${TextMuted};
    font-size: 1.15rem;
    line-height: 1.7;
  }
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BentoCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 2rem;
  padding: 3rem 2.25rem;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(226, 176, 74, 0.5);
    box-shadow: 0 30px 60px -15px rgba(226, 176, 74, 0.18);

    .icon-box {
      transform: scale(1.1) rotate(6deg);
      background: ${ThemeGradient};
      color: #ffffff;
    }
  }

  .icon-box {
    width: 72px;
    height: 72px;
    border-radius: 1.25rem;
    background: ${SoftGradientBg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    color: ${primaryColor};
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    border: 1px solid rgba(226, 176, 74, 0.25);
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 0.85rem;
    color: ${TextPrimary};
  }

  p {
    color: ${TextMuted};
    font-size: 1.05rem;
    line-height: 1.7;
  }
`;

/* --- FEATURED PRODUCT SHOWCASE (SPLIT BANNER) --- */
const ProductShowcaseSection = styled.section`
  background: linear-gradient(180deg, #fdfbf9 0%, #f4eee9 100%);
  padding: 2rem 1.5rem 7rem 1.5rem;

  @media(max-width:720px){
  padding:2rem 0rem;
  }
`;

const ProductContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 2.5rem;
  padding: 1rem;
  box-shadow: 0 30px 60px -20px rgba(61, 27, 23, 0.08);
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    padding: 4rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -15px rgba(61, 27, 23, 0.18);
  border: 2px solid #ffffff;

  img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover img {
    transform: scale(1.05);
  }

  .badge-tag {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    padding: 0.6rem 1.25rem;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 700;
    color: ${primaryColor};
    border: 1px solid rgba(226, 176, 74, 0.3);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  .category {
    background: ${ThemeGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 800;
    color: ${TextPrimary};
    line-height: 1.2;
    letter-spacing: -0.02em;
    @media (min-width: 768px) { font-size: 2.85rem; }
  }

  .price {
    font-size: 2.2rem;
    font-weight: 900;
    background: ${ThemeGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: ${TextMuted};
    line-height: 1.8;
    font-size: 1.1rem;
  }
`;

export default function LandingPage() {
  return (
    <PageWrapper>
      {/* 1. STUNNING HERO SECTION */}
      <HeroSection>
        <HeroGrid>
          <HeroContent>
            <div className="badge-pill">
              <Sparkles className="w-4 h-4 text-amber-600" /> Pure African Botanicals
            </div>
            <h1>
              Experience Natural Luxury with <span>SHEALUXE</span>
            </h1>
            <p>
              Transform your skin and hair with premium wellness products crafted from Africa’s rich indigenous botanicals, combining tradition with modern scientific excellence.
            </p>
            <HeroActions>
              <PrimaryButton href="/store">
                <ShoppingBag className="w-5 h-5" />
                Shop Now
              </PrimaryButton>
            </HeroActions>
          </HeroContent>

          <HeroVisual>
            <img 
              className="main-hero-img"
              src="/h5.jpeg"
              alt="Shealuxe Natural Skincare Experience" 
            />
            <div className="floating-badge">
              <div className="icon-wrap">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4>Ethically Sourced</h4>
                <p>100% Organic Quality</p>
              </div>
            </div>
          </HeroVisual>
        </HeroGrid>
      </HeroSection>

      {/* 2. WELCOME & INTRO SECTION (BENTO GRID) */}
      <FeaturesSection>
        <SectionHeader>
          <div className="badge-pill">
            <Leaf className="w-4 h-4 text-amber-600" /> Holistic Wellness
          </div>
          <h2>Our Core Offerings</h2>
          <p>
            Discover results-driven body care, luxurious hair treatments, and expert-led formulation classes designed to inspire healthier living.
          </p>
        </SectionHeader>

        <BentoGrid>
          <BentoCard>
            <div className="icon-box">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h3>Body Collection</h3>
              <p>Indulge your skin with our nourishing body lotions and butters formulated for radiant, healthy skin care.</p>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="icon-box">
              <Leaf className="w-8 h-8" />
            </div>
            <div>
              <h3>Hair Collection</h3>
              <p>Revitalize your hair with our trusted organic hair creams and growth serums designed for ultimate strength and shine.</p>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="icon-box">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h3>Expert Classes</h3>
              <p>Master the art of natural formulation. Learn how to craft cleansers, serums, and masks from industry experts.</p>
            </div>
          </BentoCard>
        </BentoGrid>
      </FeaturesSection>

      {/* 3. FEATURED PRODUCT SHOWCASE */}
      <ProductShowcaseSection>
        <ProductContainer>
          <ImageWrapper>
            <div className="badge-tag">
              <Award className="w-4 h-4 text-amber-600" /> Signature Collection
            </div>
            <img 
              src="/h6.jpeg"
              alt="Shealuxe Featured Product" 
            />
          </ImageWrapper>

          <ProductDetails>
            <span className="category">Transformative Power of Nature</span>
            <h3>Luxurious Skin & Hair Care</h3>
            <div className="price">Premium Quality</div>
            <p>
              Whether you are looking to establish a new custom skincare routine or trying to address specific beauty goals, our ethically sourced botanical solutions deliver unmatched results for consumers worldwide.
            </p>
            <div>
              <PrimaryButton href="/store">
                <ShoppingBag className="w-5 h-5" />
                Explore Collection
              </PrimaryButton>
            </div>
          </ProductDetails>
        </ProductContainer>
      </ProductShowcaseSection>

    </PageWrapper>
  );
}