// "use client";

// import React from "react";
// import styled, { keyframes } from "styled-components";
// import Link from "next/link";
// import { ShieldCheck, Truck, Headphones, Award, ArrowRight, CheckCircle2, Globe, HeartHandshake } from "lucide-react";
// import EnitzAboutSections from "@/components/EnitzAboutSections";
// import EnitzCategoriesSection from "@/components/EnitzCategoriesSection";

// /* ================= THEME STYLES (ENITZ) ================= */
// const ThemeGradient = "linear-gradient(135deg, #00aeef 0%, #0b1b48 100%)";
// const LightBg = "#ffffff";
// const CardBg = "#f8fafc";
// const TextPrimary = "#0f172a";
// const TextMuted = "#475569";
// const BorderColor = "rgba(226, 232, 240, 0.9)";
// const CyanPrimary = "#00aeef";

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(15px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const float = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-8px); }
//   100% { transform: translateY(0px); }
// `;

// /* ================= LAYOUT COMPONENTS ================= */

// const PageWrapper = styled.main`
//   background-color: ${LightBg};
//   color: ${TextPrimary};
//   overflow-x: hidden;
// `;

// const HeroSection = styled.section`
//   padding: 6rem 1.5rem 5rem 1.5rem;
//   background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%);
//   text-align: center;
//   border-bottom: 1px solid ${BorderColor};

//   .container {
//     max-width: 900px;
//     margin: 0 auto;
//     animation: ${fadeIn} 0.8s ease-out;
//   }

//   .badge {
//     display: inline-flex;
//     align-items: center;
//     gap: 0.5rem;
//     padding: 0.5rem 1.25rem;
//     background: rgba(0, 174, 239, 0.1);
//     border: 1px solid rgba(0, 174, 239, 0.25);
//     border-radius: 9999px;
//     color: ${CyanPrimary};
//     font-weight: 700;
//     font-size: 0.85rem;
//     text-transform: uppercase;
//     letter-spacing: 0.08em;
//     margin-bottom: 1.5rem;
//   }

//   h1 {
//     font-size: 2rem;
//     font-weight: 900;
//     line-height: 1.2;
//     margin-bottom: 1.5rem;
//     color: ${TextPrimary};
//     letter-spacing: -0.03em;

//     @media (min-width: 768px) {
//       font-size: 4rem;
//     }

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
//     max-width: 700px;
//     margin: 0 auto 2.5rem auto;
//   }
// `;

// const PrimaryButton = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.75rem;
//   padding: 1rem 2.5rem;
//   border-radius: 9999px;
//   background: ${ThemeGradient};
//   color: #ffffff;
//   font-weight: 700;
//   font-size: 1.05rem;
//   box-shadow: 0 10px 25px -5px rgba(0, 174, 239, 0.4);
//   transition: all 0.3s ease;
//   text-decoration: none;

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 15px 30px -5px rgba(0, 174, 239, 0.6);
//   }
// `;

// const StorySection = styled.section`
//   padding: 6rem 1.5rem;
//   max-width: 1200px;
//   margin: 0 auto;

//   .grid {
//     display: grid;
//     grid-template-columns: 1fr;
//     gap: 3.5rem;
//     align-items: center;

//     @media (min-width: 992px) {
//       grid-template-columns: 1fr 1fr;
//     }
//   }

//   .content {
//     h2 {
//       font-size: 2.25rem;
//       font-weight: 800;
//       color: ${TextPrimary};
//       margin-bottom: 1.25rem;
//       letter-spacing: -0.02em;
//     }

//     p {
//       color: ${TextMuted};
//       font-size: 1.05rem;
//       line-height: 1.8;
//       margin-bottom: 1.5rem;
//     }

//     .check-list {
//       display: flex;
//       flex-direction: column;
//       gap: 0.875rem;
//       margin-top: 1.5rem;

//       li {
//         display: flex;
//         align-items: center;
//         gap: 0.75rem;
//         font-weight: 600;
//         color: ${TextPrimary};

//         svg {
//           color: ${CyanPrimary};
//           flex-shrink: 0;
//         }
//       }
//     }
//   }

//   .image-wrapper {
//     position: relative;
    
//     img {
//       width: 100%;
//       height: 440px;
//       object-fit: cover;
//       border-radius: 2rem;
//       box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
//       animation: ${float} 6s ease-in-out infinite;
//     }
//   }
// `;

// const ValuesSection = styled.section`
//   padding: 6rem 1.5rem;
//   background-color: ${CardBg};
//   border-top: 1px solid ${BorderColor};
//   border-bottom: 1px solid ${BorderColor};

//   .container {
//     max-width: 1200px;
//     margin: 0 auto;
//   }

//   .section-header {
//     text-align: center;
//     max-width: 600px;
//     margin: 0 auto 4rem auto;

//     h2 {
//       font-size: 2.5rem;
//       font-weight: 800;
//       color: ${TextPrimary};
//       margin-bottom: 1rem;
//     }

//     p {
//       color: ${TextMuted};
//       font-size: 1.1rem;
//     }
//   }

//   .grid {
//     display: grid;
//     grid-template-columns: 1fr;
//     gap: 2rem;

//     @media (min-width: 768px) {
//       grid-template-columns: repeat(2, 1fr);
//     }

//     @media (min-width: 1024px) {
//       grid-template-columns: repeat(4, 1fr);
//     }
//   }
// `;

// const ValueCard = styled.div`
//   background: ${LightBg};
//   border: 1px solid ${BorderColor};
//   border-radius: 1.5rem;
//   padding: 2.5rem 2rem;
//   transition: all 0.3s ease;
//   box-shadow: 0 10px 30px rgba(15, 23, 42, 0.02);

//   &:hover {
//     transform: translateY(-5px);
//     border-color: rgba(0, 174, 239, 0.4);
//     box-shadow: 0 20px 40px -10px rgba(0, 174, 239, 0.1);
//   }

//   .icon-box {
//     width: 60px;
//     height: 60px;
//     border-radius: 1rem;
//     background: rgba(0, 174, 239, 0.1);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: ${CyanPrimary};
//     margin-bottom: 1.5rem;
//   }

//   h3 {
//     font-size: 1.25rem;
//     font-weight: 700;
//     color: ${TextPrimary};
//     margin-bottom: 0.75rem;
//   }

//   p {
//     color: ${TextMuted};
//     font-size: 0.95rem;
//     line-height: 1.6;
//   }
// `;

// const ShowcaseSection = styled.section`
//   padding: 6rem 1.5rem;
//   max-width: 1200px;
//   margin: 0 auto;

//   .grid {
//     display: grid;
//     grid-template-columns: 1fr;
//     gap: 3rem;
//     align-items: center;

//     @media (min-width: 992px) {
//       grid-template-columns: 1.2fr 1fr;
//     }
//   }

//   .image-grid {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     gap: 1rem;

//     img {
//       width: 100%;
//       height: 220px;
//       object-fit: cover;
//       border-radius: 1.25rem;
//       box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);

//       &:nth-child(2) {
//         transform: translateY(20px);
//       }
//     }
//   }

//   .content {
//     h2 {
//       font-size: 2.25rem;
//       font-weight: 800;
//       color: ${TextPrimary};
//       margin-bottom: 1.25rem;
//     }

//     p {
//       color: ${TextMuted};
//       font-size: 1.05rem;
//       line-height: 1.8;
//       margin-bottom: 2rem;
//     }
//   }
// `;

// export default function AboutPage() {
//   return (
//     <PageWrapper>
//       {/* --- HERO SECTION --- */}
//       <HeroSection>
//         <div className="container">
//           <div className="badge">
//             <Globe className="w-4 h-4" /> About Enitz
//           </div>
//           <h1>
//             QUALITY WITHIN REACH <span>Making quality everyday products easier to access.</span>
//           </h1>
//           <p>
//            At ENITZ, we believe customers should be able to access quality products at reasonable prices without compromising on convenience, trust or customer care.   </p>
//           <PrimaryButton href="/store">
//             Explore Our Store
//             <ArrowRight className="w-5 h-5" />
//           </PrimaryButton>
//         </div>
//       </HeroSection>

//       <EnitzAboutSections/>
//       <EnitzCategoriesSection/>

//       {/* --- OUR STORY SECTION --- */}
//       {/* <StorySection>
//         <div className="grid">
//           <div className="content">
//             <h2>Built on a Passion for Quality and Customer Satisfaction</h2>
//             <p>
//               Enitz was founded with a clear vision: to simplify access to premium everyday goods and lifestyle items without compromising on value or customer care. 
//             </p>
//             <p>
//               We pride ourselves on our meticulous selection of merchandise, transparent pricing, and robust fulfillment channels designed to meet the demands of today's fast-paced digital shoppers.
//             </p>
//             <ul className="check-list">
//               <li>
//                 <CheckCircle2 className="w-5 h-5" /> Verified High-Quality Products
//               </li>
//               <li>
//                 <CheckCircle2 className="w-5 h-5" /> Transparent Pricing & Secure Checkout
//               </li>
//               <li>
//                 <CheckCircle2 className="w-5 h-5" /> Prompt Customer-Centric Support & Delivery
//               </li>
//             </ul>
//           </div>
//           <div className="image-wrapper">
      
//             <img 
//               src="./h5.png" 
//               alt="Enitz retail merchandise experience" 
//             />
//           </div>
//         </div>
//       </StorySection> */}

//       {/* --- CORE VALUES SECTION --- */}
//       {/* <ValuesSection>
//         <div className="container">
//           <div className="section-header">
//             <h2>Our Core Pillars</h2>
//             <p>The principles that guide our day-to-day operations and commitment to every shopper.</p>
//           </div>
//           <div className="grid">
//             <ValueCard>
//               <div className="icon-box">
//                 <ShieldCheck className="w-7 h-7" />
//               </div>
//               <h3>Uncompromised Quality</h3>
//               <p>Every product in our catalog undergoes strict curation to ensure durability, utility, and absolute customer delight.</p>
//             </ValueCard>

//             <ValueCard>
//               <div className="icon-box">
//                 <Truck className="w-7 h-7" />
//               </div>
//               <h3>Fast & Reliable Delivery</h3>
//               <p>We work efficiently to process and ship your orders securely so they arrive right when you need them.</p>
//             </ValueCard>

//             <ValueCard>
//               <div className="icon-box">
//                 <Headphones className="w-7 h-7" />
//               </div>
//               <h3>Dedicated Support</h3>
//               <p>Our friendly support team is always ready to assist you with inquiries, orders, and post-purchase care.</p>
//             </ValueCard>

//             <ValueCard>
//               <div className="icon-box">
//                 <Award className="w-7 h-7" />
//               </div>
//               <h3>Customer Trust</h3>
//               <p>Building long-term relationships through honesty, transparent transactions, and dependable service quality.</p>
//             </ValueCard>
//           </div>
//         </div>
//       </ValuesSection> */}

//       {/* --- VISUAL SHOWCASE SECTION --- */}
//       <ShowcaseSection>
//         <div className="grid">
//           <div className="image-grid">
//             {/* Unsplash image set: lifestyle and shopping */}
//             <img 
//               src="./h6.png" 
//               alt="Modern shopping merchandise" 
//             />
//             <img 
//               src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80" 
//               alt="Satisfied retail customer experience" 
//             />
//           </div>
//           <div className="content">
//             <h2>Quality Within Reach. Every Day.</h2>
//             <p>
//             “Whether you're shopping for your home, family, personal needs or lifestyle, ENITZ is here to make quality products easier to find, order and enjoy.

// We are building a brand founded on quality, value and trust — one customer at a time.” </p>
//             <PrimaryButton href="/store">
//               Shop ENITZ
//               <ArrowRight className="w-5 h-5" />
//             </PrimaryButton>
//           </div>
//         </div>
//       </ShowcaseSection>
//     </PageWrapper>
//   );
// }





"use client";

import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Image from "next/image";

/* ================= COLORS & THEME (MAJINFOTEK) ================= */
const primaryBlue = "#1c3ba4";
const richPurple = "#8b5cf6";
const themeGradient = "linear-gradient(135deg, #1c3ba4 0%, #8b5cf6 100%)";
const darkBg = "#0f172a";
const cardBg = "#ffffff";
const borderColor = "rgba(226, 232, 240, 0.9)";
const textMain = "#0f172a";
const textMuted = "#475569";
const softBg = "#f8fafc";
const white = "#ffffff";

/* ================= ANIMATIONS ================= */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ================= STYLED COMPONENTS ================= */
const PageContainer = styled.div`
  font-family: inherit;
  color: ${textMain};
  background: ${cardBg};
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${darkBg};
  overflow: hidden;
  padding: 4rem 1.5rem;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(15, 23, 42, 0.85);
    z-index: 1;
  }
`;

const HeroBgImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

const Badge = styled.span`
  background: ${themeGradient};
  color: ${white};
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.25rem, 4vw, 3.5rem);
  font-weight: 800;
  color: ${white};
  line-height: 1.2;
  margin: 0;

  span {
    background: ${themeGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: #cbd5e1;
  line-height: 1.7;
  max-width: 750px;
  margin: 0;
`;

const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 3.5rem 1rem;
  }
`;

const GridTwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const StoryTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTag = styled.h4`
  font-size: 0.9rem;
  font-weight: 800;
  color: ${richPurple};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;
`;

const SectionHeading = styled.h2`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 800;
  color: ${textMain};
  line-height: 1.3;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  color: ${textMuted};
  line-height: 1.8;
  margin: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid ${borderColor};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.03);
    }
  }
`;

const ValuesSection = styled.section`
  background: ${softBg};
  border-top: 1px solid ${borderColor};
  border-bottom: 1px solid ${borderColor};
  padding: 5rem 1.5rem;
`;

const ValuesHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3.5rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ValuesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled.div`
  background: ${white};
  border: 1px solid ${borderColor};
  padding: 2.5rem 2rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(139, 92, 246, 0.12);
    border-color: ${richPurple};
  }
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${themeGradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white};
  font-size: 1.25rem;
  font-weight: 700;
  box-shadow: 0 6px 15px rgba(139, 92, 246, 0.3);
`;

const ValueTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${textMain};
  margin: 0;
`;

const ValueDesc = styled.p`
  font-size: 0.95rem;
  color: ${textMuted};
  line-height: 1.6;
  margin: 0;
`;

const StatsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const StatsGrid = styled.div`
  background: ${darkBg};
  border-radius: 24px;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StatNumber = styled.h3`
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 800;
  background: ${themeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

const StatLabel = styled.p`
  font-size: 0.95rem;
  color: #94a3b8;
  font-weight: 500;
  margin: 0;
`;

const CTASection = styled.section`
  background: ${softBg};
  border-top: 1px solid ${borderColor};
  padding: 5rem 1.5rem;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

const PrimaryButton = styled(Link)`
  background: ${themeGradient};
  color: ${white};
  padding: 0.9rem 2rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.35);
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.92;
  }
`;

/* ================= COMPONENT EXPORT ================= */

export default function AboutUsPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroBgImage
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920"
          alt="Majinfotek Technology Infrastructure"
        />
        <HeroContent>
          <Badge>About Majinfotek</Badge>
          <HeroTitle>
            Pioneering <span>Smart Security</span> & IT Solutions
          </HeroTitle>
          <HeroSubtitle>
            Majinfotek delivers elite surveillance, automated access control, smart home integration, and resilient enterprise IT infrastructure designed for the modern world.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* Our Story / Who We Are */}
      <SectionContainer>
        <GridTwoCol>
          <StoryTextContent>
            <SectionTag>Who We Are</SectionTag>
            <SectionHeading>Engineering Secure, Intelligent Environments</SectionHeading>
            <Paragraph>
              Founded with a relentless vision to transform how homes and businesses secure their assets, Majinfotek has grown into a premier authority in surveillance installations, smart automation, and enterprise networking solutions.
            </Paragraph>
            <Paragraph>
              Our team consists of certified engineers and technology specialists who combine deep industry expertise with cutting-edge hardware. We don't just install systems; we design comprehensive protection and connectivity ecosystems tailored precisely to your unique demands.
            </Paragraph>
          </StoryTextContent>
          <ImageWrapper>
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000"
              alt="Engineers working on technology infrastructure"
            />
          </ImageWrapper>
        </GridTwoCol>
      </SectionContainer>

      {/* Stats Section */}
      <StatsSection>
        <StatsGrid>
          <StatItem>
            <StatNumber>500+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>99.8%</StatNumber>
            <StatLabel>Client Satisfaction</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>10+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>24/7</StatNumber>
            <StatLabel>Support & Monitoring</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsSection>

      {/* Core Values */}
      <ValuesSection>
        <ValuesHeader>
          <SectionTag>Our Principles</SectionTag>
          <SectionHeading>What Drives Majinfotek Forward</SectionHeading>
          <Paragraph>
            Our core values shape every deployment, consultation, and client interaction, ensuring uncompromising quality and reliability.
          </Paragraph>
        </ValuesHeader>
        <ValuesGrid>
          <ValueCard>
            <IconBox>🛡️</IconBox>
            <ValueTitle>Uncompromising Security</ValueTitle>
            <ValueDesc>
              We prioritize robust, foolproof security measures that safeguard your property, data, and peace of mind against modern threats.
            </ValueDesc>
          </ValueCard>
          <ValueCard>
            <IconBox>💡</IconBox>
            <ValueTitle>Continuous Innovation</ValueTitle>
            <ValueDesc>
              We stay ahead of technological curves, integrating state-of-the-art smart devices and AI-driven analytics into our solutions.
            </ValueDesc>
          </ValueCard>
          <ValueCard>
            <IconBox>🤝</IconBox>
            <ValueTitle>Client-Centric Focus</ValueTitle>
            <ValueDesc>
              Every setup is customized. We listen to your specific operational or residential challenges to engineer the exact solution you need.
            </ValueDesc>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>

      {/* Mission & Vision */}
      <SectionContainer>
        <GridTwoCol>
          <ImageWrapper>
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000"
              alt="Team collaboration and future vision"
            />
          </ImageWrapper>
          <StoryTextContent>
            <SectionTag>Our Mission & Vision</SectionTag>
            <SectionHeading>Shaping a Connected, Secure Future</SectionHeading>
            <Paragraph>
              <strong>Our Mission:</strong> To empower residential and commercial clients with reliable, high-performance technology and security architecture that elevates safety and operational efficiency.
            </Paragraph>
            <Paragraph>
              <strong>Our Vision:</strong> To be recognized globally as the benchmark for smart integration and security engineering, renowned for technical excellence and unwavering customer dedication.
            </Paragraph>
          </StoryTextContent>
        </GridTwoCol>
      </SectionContainer>

      {/* Call To Action */}
      <CTASection>
        <CTAContent>
          <SectionTag>Get Started Today</SectionTag>
          <SectionHeading>Ready to Secure Your Space?</SectionHeading>
          <Paragraph>
            Whether you need advanced CCTV surveillance, smart home automation, or complete IT network restructuring, Majinfotek is ready to deliver.
          </Paragraph>
          <PrimaryButton href="/contact">Contact Our Experts</PrimaryButton>
        </CTAContent>
      </CTASection>
    </PageContainer>
  );
}