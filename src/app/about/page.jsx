

// "use client";

// import styled, { keyframes } from "styled-components";
// import Link from "next/link";
// import Image from "next/image";

// /* ================= COLORS & THEME (MAJINFOTEK) ================= */
// const primaryBlue = "#1c3ba4";
// const richPurple = "#8b5cf6";
// const themeGradient = "linear-gradient(135deg, #1c3ba4 0%, #8b5cf6 100%)";
// const darkBg = "#0f172a";
// const cardBg = "#ffffff";
// const borderColor = "rgba(226, 232, 240, 0.9)";
// const textMain = "#0f172a";
// const textMuted = "#475569";
// const softBg = "#f8fafc";
// const white = "#ffffff";

// /* ================= ANIMATIONS ================= */
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// /* ================= STYLED COMPONENTS ================= */
// const PageContainer = styled.div`
//   font-family: inherit;
//   color: ${textMain};
//   background: ${cardBg};
//   overflow-x: hidden;
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;

// const HeroSection = styled.section`
//   position: relative;
//   min-height: 60vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   background: ${darkBg};
//   overflow: hidden;
//   padding: 4rem 1.5rem;

//   &::after {
//     content: "";
//     position: absolute;
//     inset: 0;
//     background: rgba(15, 23, 42, 0.85);
//     z-index: 1;
//   }
// `;

// const HeroBgImage = styled.img`
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: 0;
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 2;
//   max-width: 900px;
//   display: flex;
//   flex-direction: column;
//   gap: 1.25rem;
//   align-items: center;
//   animation: ${fadeIn} 0.8s ease-out forwards;
// `;

// const Badge = styled.span`
//   background: ${themeGradient};
//   color: ${white};
//   font-size: 0.85rem;
//   font-weight: 700;
//   padding: 0.4rem 1rem;
//   border-radius: 50px;
//   text-transform: uppercase;
//   letter-spacing: 0.05em;
//   box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
// `;

// const HeroTitle = styled.h1`
//   font-size: clamp(2.25rem, 4vw, 3.5rem);
//   font-weight: 800;
//   color: ${white};
//   line-height: 1.2;
//   margin: 0;

//   span {
//     background: ${themeGradient};
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
// `;

// const HeroSubtitle = styled.p`
//   font-size: clamp(1rem, 1.8vw, 1.2rem);
//   color: #cbd5e1;
//   line-height: 1.7;
//   max-width: 750px;
//   margin: 0;
// `;

// const SectionContainer = styled.section`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 5rem 1.5rem;
//   width: 100%;
//   box-sizing: border-box;

//   @media (max-width: 768px) {
//     padding: 3.5rem 1rem;
//   }
// `;

// const GridTwoCol = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 4rem;
//   align-items: center;

//   @media (max-width: 968px) {
//     grid-template-columns: 1fr;
//     gap: 2.5rem;
//   }
// `;

// const StoryTextContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const SectionTag = styled.h4`
//   font-size: 0.9rem;
//   font-weight: 800;
//   color: ${richPurple};
//   text-transform: uppercase;
//   letter-spacing: 0.1em;
//   margin: 0;
// `;

// const SectionHeading = styled.h2`
//   font-size: clamp(1.8rem, 3vw, 2.5rem);
//   font-weight: 800;
//   color: ${textMain};
//   line-height: 1.3;
//   margin: 0;
// `;

// const Paragraph = styled.p`
//   font-size: 1.05rem;
//   color: ${textMuted};
//   line-height: 1.8;
//   margin: 0;
// `;

// const ImageWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   height: 420px;
//   border-radius: 20px;
//   overflow: hidden;
//   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//   border: 1px solid ${borderColor};

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.5s ease;

//     &:hover {
//       transform: scale(1.03);
//     }
//   }
// `;

// const ValuesSection = styled.section`
//   background: ${softBg};
//   border-top: 1px solid ${borderColor};
//   border-bottom: 1px solid ${borderColor};
//   padding: 5rem 1.5rem;
// `;

// const ValuesHeader = styled.div`
//   text-align: center;
//   max-width: 700px;
//   margin: 0 auto 3.5rem auto;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const ValuesGrid = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//   gap: 2rem;
// `;

// const ValueCard = styled.div`
//   background: ${white};
//   border: 1px solid ${borderColor};
//   padding: 2.5rem 2rem;
//   border-radius: 16px;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 12px 30px rgba(139, 92, 246, 0.12);
//     border-color: ${richPurple};
//   }
// `;

// const IconBox = styled.div`
//   width: 50px;
//   height: 50px;
//   border-radius: 12px;
//   background: ${themeGradient};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: ${white};
//   font-size: 1.25rem;
//   font-weight: 700;
//   box-shadow: 0 6px 15px rgba(139, 92, 246, 0.3);
// `;

// const ValueTitle = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 700;
//   color: ${textMain};
//   margin: 0;
// `;

// const ValueDesc = styled.p`
//   font-size: 0.95rem;
//   color: ${textMuted};
//   line-height: 1.6;
//   margin: 0;
// `;

// const StatsSection = styled.section`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 4rem 1.5rem;
// `;

// const StatsGrid = styled.div`
//   background: ${darkBg};
//   border-radius: 24px;
//   padding: 3rem 2rem;
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 2rem;
//   text-align: center;
//   box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 2rem;
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const StatItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
// `;

// const StatNumber = styled.h3`
//   font-size: clamp(2rem, 3.5vw, 2.75rem);
//   font-weight: 800;
//   background: ${themeGradient};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   margin: 0;
// `;

// const StatLabel = styled.p`
//   font-size: 0.95rem;
//   color: #94a3b8;
//   font-weight: 500;
//   margin: 0;
// `;

// const CTASection = styled.section`
//   background: ${softBg};
//   border-top: 1px solid ${borderColor};
//   padding: 5rem 1.5rem;
//   text-align: center;
// `;

// const CTAContent = styled.div`
//   max-width: 700px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
//   align-items: center;
// `;

// const PrimaryButton = styled(Link)`
//   background: ${themeGradient};
//   color: ${white};
//   padding: 0.9rem 2rem;
//   border-radius: 12px;
//   font-weight: 700;
//   font-size: 1rem;
//   text-decoration: none;
//   box-shadow: 0 8px 25px rgba(139, 92, 246, 0.35);
//   transition: transform 0.3s ease, opacity 0.3s ease;

//   &:hover {
//     transform: translateY(-2px);
//     opacity: 0.92;
//   }
// `;

// /* ================= COMPONENT EXPORT ================= */

// export default function AboutUsPage() {
//   return (
//     <PageContainer>
//       {/* Hero Section */}
//       <HeroSection>
//         <HeroBgImage
//           src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920"
//           alt="Majinfotek Technology Infrastructure"
//         />
//         <HeroContent>
//           <Badge>About Majinfotek</Badge>
//           <HeroTitle>
//             Pioneering <span>Smart Security</span> & IT Solutions
//           </HeroTitle>
//           <HeroSubtitle>
//             Majinfotek delivers elite surveillance, automated access control, smart home integration, and resilient enterprise IT infrastructure designed for the modern world.
//           </HeroSubtitle>
//         </HeroContent>
//       </HeroSection>

//       {/* Our Story / Who We Are */}
//       <SectionContainer>
//         <GridTwoCol>
//           <StoryTextContent>
//             <SectionTag>Who We Are</SectionTag>
//             <SectionHeading>Engineering Secure, Intelligent Environments</SectionHeading>
//             <Paragraph>
//               Founded with a relentless vision to transform how homes and businesses secure their assets, Majinfotek has grown into a premier authority in surveillance installations, smart automation, and enterprise networking solutions.
//             </Paragraph>
//             <Paragraph>
//               Our team consists of certified engineers and technology specialists who combine deep industry expertise with cutting-edge hardware. We don't just install systems; we design comprehensive protection and connectivity ecosystems tailored precisely to your unique demands.
//             </Paragraph>
//           </StoryTextContent>
//           <ImageWrapper>
//             <img
//               src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000"
//               alt="Engineers working on technology infrastructure"
//             />
//           </ImageWrapper>
//         </GridTwoCol>
//       </SectionContainer>

//       {/* Stats Section */}
//       <StatsSection>
//         <StatsGrid>
//           <StatItem>
//             <StatNumber>500+</StatNumber>
//             <StatLabel>Projects Completed</StatLabel>
//           </StatItem>
//           <StatItem>
//             <StatNumber>99.8%</StatNumber>
//             <StatLabel>Client Satisfaction</StatLabel>
//           </StatItem>
//           <StatItem>
//             <StatNumber>10+</StatNumber>
//             <StatLabel>Years Experience</StatLabel>
//           </StatItem>
//           <StatItem>
//             <StatNumber>24/7</StatNumber>
//             <StatLabel>Support & Monitoring</StatLabel>
//           </StatItem>
//         </StatsGrid>
//       </StatsSection>

//       {/* Core Values */}
//       <ValuesSection>
//         <ValuesHeader>
//           <SectionTag>Our Principles</SectionTag>
//           <SectionHeading>What Drives Majinfotek Forward</SectionHeading>
//           <Paragraph>
//             Our core values shape every deployment, consultation, and client interaction, ensuring uncompromising quality and reliability.
//           </Paragraph>
//         </ValuesHeader>
//         <ValuesGrid>
//           <ValueCard>
//             <IconBox>🛡️</IconBox>
//             <ValueTitle>Uncompromising Security</ValueTitle>
//             <ValueDesc>
//               We prioritize robust, foolproof security measures that safeguard your property, data, and peace of mind against modern threats.
//             </ValueDesc>
//           </ValueCard>
//           <ValueCard>
//             <IconBox>💡</IconBox>
//             <ValueTitle>Continuous Innovation</ValueTitle>
//             <ValueDesc>
//               We stay ahead of technological curves, integrating state-of-the-art smart devices and AI-driven analytics into our solutions.
//             </ValueDesc>
//           </ValueCard>
//           <ValueCard>
//             <IconBox>🤝</IconBox>
//             <ValueTitle>Client-Centric Focus</ValueTitle>
//             <ValueDesc>
//               Every setup is customized. We listen to your specific operational or residential challenges to engineer the exact solution you need.
//             </ValueDesc>
//           </ValueCard>
//         </ValuesGrid>
//       </ValuesSection>

//       {/* Mission & Vision */}
//       <SectionContainer>
//         <GridTwoCol>
//           <ImageWrapper>
//             <img
//               src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000"
//               alt="Team collaboration and future vision"
//             />
//           </ImageWrapper>
//           <StoryTextContent>
//             <SectionTag>Our Mission & Vision</SectionTag>
//             <SectionHeading>Shaping a Connected, Secure Future</SectionHeading>
//             <Paragraph>
//               <strong>Our Mission:</strong> To empower residential and commercial clients with reliable, high-performance technology and security architecture that elevates safety and operational efficiency.
//             </Paragraph>
//             <Paragraph>
//               <strong>Our Vision:</strong> To be recognized globally as the benchmark for smart integration and security engineering, renowned for technical excellence and unwavering customer dedication.
//             </Paragraph>
//           </StoryTextContent>
//         </GridTwoCol>
//       </SectionContainer>

//       {/* Call To Action */}
//       <CTASection>
//         <CTAContent>
//           <SectionTag>Get Started Today</SectionTag>
//           <SectionHeading>Ready to Secure Your Space?</SectionHeading>
//           <Paragraph>
//             Whether you need advanced CCTV surveillance, smart home automation, or complete IT network restructuring, Majinfotek is ready to deliver.
//           </Paragraph>
//           <PrimaryButton href="/contact">Contact Our Experts</PrimaryButton>
//         </CTAContent>
//       </CTASection>
//     </PageContainer>
//   );
// }





"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Sparkles, ArrowRight, Heart, Leaf, ShieldCheck, Smile } from "lucide-react";
// import { primaryColoring, secondaryColoring } from "../Context";
import { primaryColoring, secondaryColoring } from "@/components/Context";
// 
/* ================= THEME STYLES (SHEALUXE) ================= */
const primaryColor = primaryColoring; // #3D1B17 (Deep Brown)
const secondaryColor = secondaryColoring; // #E2B04A (Gold)
const ThemeGradient = `linear-gradient(135deg, ${primaryColoring} 0%, ${secondaryColoring} 100%)`;
const LightBg = "#ffffff";
const CardBg = "#fdfbf9";
const TextPrimary = "#0f172a";
const TextMuted = "#475569";
const BorderColor = "rgba(226, 232, 240, 0.9)";

/* ================= STYLED COMPONENTS ================= */

const PageWrapper = styled.div`
  background-color: ${LightBg};
  color: ${TextPrimary};
  font-family: inherit;
  overflow: hidden;
`;

/* Hero Section */
const HeroSection = styled.section`
  padding: 5rem 1rem 3rem 1rem;
  background: linear-gradient(135deg, rgba(61, 27, 23, 0.04) 0%, rgba(226, 176, 74, 0.1) 100%);
  border-bottom: 1px solid ${BorderColor};

  @media (min-width: 768px) {
    padding: 8rem 1.5rem 6rem 1.5rem;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 3rem;
  }

  @media (min-width: 968px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  .badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    background: linear-gradient(135deg, rgba(61, 27, 23, 0.08), rgba(226, 176, 74, 0.15));
    border: 1px solid rgba(226, 176, 74, 0.3);
    border-radius: 9999px;
    color: ${primaryColor};
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    width: fit-content;

    @media (min-width: 768px) {
      padding: 0.5rem 1.25rem;
      font-size: 0.85rem;
    }
  }

  h1 {
    font-size: 2.25rem;
    font-weight: 900;
    line-height: 1.15;
    color: ${TextPrimary};
    letter-spacing: -0.03em;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }

  p {
    font-size: 1rem;
    color: ${TextMuted};
    line-height: 1.7;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 1.125rem;
      line-height: 1.8;
    }
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 20px 40px -12px rgba(61, 27, 23, 0.2);
  border: 1px solid ${BorderColor};
  height: 300px;

  @media (min-width: 768px) {
    border-radius: 2rem;
    height: 480px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* Origin Section */
const OriginSection = styled.section`
  padding: 3rem 1rem;
  background-color: ${CardBg};
  border-bottom: 1px solid ${BorderColor};

  @media (min-width: 768px) {
    padding: 7rem 1.5rem;
  }
`;

const OriginContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    gap: 3rem;
  }

  @media (min-width: 968px) {
    grid-template-columns: 0.9fr 1.1fr;
  }
`;

const OriginContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: ${TextPrimary};
    letter-spacing: -0.02em;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 2.75rem;
    }
  }

  p {
    font-size: 1rem;
    color: ${TextMuted};
    line-height: 1.7;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 1.125rem;
      line-height: 1.8;
    }
  }
`;

/* Mission / Offer Section */
const MissionSection = styled.section`
  padding: 3rem 1rem;
  background-color: ${LightBg};
  border-bottom: 1px solid ${BorderColor};

  @media (min-width: 768px) {
    padding: 7rem 1.5rem;
  }
`;

const MissionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 4rem;
  }
`;

const MissionHeader = styled.div`
  text-align: center;
  max-width: 52rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: ${TextPrimary};
    margin: 0;
    letter-spacing: -0.02em;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    color: ${TextMuted};
    font-size: 1rem;
    line-height: 1.7;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 1.15rem;
      line-height: 1.8;
    }
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 968px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`;

const ValueCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.03);
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    border-radius: 1.5rem;
    padding: 2.5rem 1.5rem;
    gap: 1rem;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(226, 176, 74, 0.5);
  }

  .icon-box {
    width: 50px;
    height: 50px;
    border-radius: 1rem;
    background: linear-gradient(135deg, rgba(61, 27, 23, 0.08), rgba(226, 176, 74, 0.2));
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${primaryColor};

    @media (min-width: 768px) {
      width: 60px;
      height: 60px;
    }
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${TextPrimary};
    margin: 0;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

/* Products CTA Section */
const ProductsCtaSection = styled.section`
  padding: 3rem 1rem;
  background: linear-gradient(135deg, rgba(61, 27, 23, 0.04) 0%, rgba(226, 176, 74, 0.08) 100%);
  text-align: center;

  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;

const CtaContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: ${TextPrimary};
    margin: 0;
    letter-spacing: -0.02em;

    @media (min-width: 768px) {
      font-size: 2.75rem;
    }
  }

  p {
    color: ${TextMuted};
    font-size: 1rem;
    line-height: 1.7;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 1.15rem;
    }
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.9rem 2rem;
  border-radius: 9999px;
  background: ${ThemeGradient};
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0 10px 25px -5px rgba(226, 176, 74, 0.4);
  transition: all 0.3s ease;
  text-decoration: none;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    padding: 1.15rem 2.8rem;
    font-size: 1.05rem;
    margin-top: 1rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px -5px rgba(226, 176, 74, 0.6);
  }
`;

/* ================= COMPONENT ================= */

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* WHO WE ARE SECTION */}
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <div className="badge-pill">
              <Sparkles className="w-4 h-4 text-amber-600" /> WHO WE ARE
            </div>
            <h1>About SheaLuxe Limited</h1>
            <p>
              Welcome to SheaLuxe Limited – a place for healing and harmonizing with your body's needs. We understand that your skin is the largest organ of your body, which is why we specialize in creating high-quality beauty, cosmetics, and personal care products that nourish and care for your skin and hair.
            </p>
            <p>
              Our products are made with love and care, using only the finest natural ingredients like raw Shea butter, Shea lotion, black soap gels, and hair growth oils and conditioners. Our formulations are carefully crafted to provide your body with the nutrients it needs to look and feel its best.
            </p>
            <p>
              In addition to our own products, we also offer contract manufacturing services to other brands. With our expertise in production and manufacturing, we can help take the stress off of your brand's production needs, so you can focus on growing your business.
            </p>
          </HeroContent>

          <HeroImageWrapper>
            <img 
              src="/h15.jpeg" 
              alt="Natural organic shea butter and cosmetic products" 
            />
          </HeroImageWrapper>
        </HeroContainer>
      </HeroSection>

      {/* OUR ORIGIN SECTION */}
      <OriginSection>
        <OriginContainer>
          <HeroImageWrapper>
            <img 
              src="/h14.jpeg" 
              alt="Founder and herbal botanical tradition" 
            />
          </HeroImageWrapper>

          <OriginContent>
            <div className="badge-pill" style={{ width: 'fit-content' }}>
              <Sparkles className="w-4 h-4 text-amber-600" /> OUR ORIGIN
            </div>
            <h2>Meet the Founder</h2>
            <p>
              Rachel Bamitale Thomas founded SheaLuxe Limited. She started her business because her children had a skin challenge and she used home remedies to take care of it. This led her sharing her remedies with other parents, and from there she eventually made it into packaged products.
            </p>
            <p>
              She has deep root in herbs and its application as it is a third generation practice in her family, this knowledge is what she brings into science and even though her brand sells cleansing products, people are up getting some dose of healing along side. It is her subtle way of helping people live healthy, relieving the daily stress of life.
            </p>
            <p>
              At SheaLuxe Limited, we believe that beauty starts from within, and our products are designed to help you feel confident and beautiful in your own skin.
            </p>
          </OriginContent>
        </OriginContainer>
      </OriginSection>

      {/* WHAT WE OFFER SECTION */}
      <MissionSection>
        <MissionContainer>
          <MissionHeader>
            <div className="badge-pill" style={{ margin: '0 auto' }}>
              <Sparkles className="w-4 h-4 text-amber-600" /> WHAT WE OFFER
            </div>
            <h2>Our Mission</h2>
            <p>
              SheaLuxe Limited is on the mission to help Afrocentric and international people get relief from skin and hair problems using the art of aromatherapy and the science of herbs and oils in the most natural way by making available for them a product that suits and mesmerizes everyone.
            </p>
          </MissionHeader>

          <ValuesGrid>
            <ValueCard>
              <div className="icon-box">
                <Leaf className="w-6 h-6" />
              </div>
              <h3>Natural Ingredients Only</h3>
            </ValueCard>

            <ValueCard>
              <div className="icon-box">
                <Heart className="w-6 h-6" />
              </div>
              <h3>Natural Body Beauty</h3>
            </ValueCard>

            <ValueCard>
              <div className="icon-box">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3>Science & Aromatherapy</h3>
            </ValueCard>

            <ValueCard>
              <div className="icon-box">
                <Smile className="w-6 h-6" />
              </div>
              <h3>Customer Satisfaction</h3>
            </ValueCard>
          </ValuesGrid>
        </MissionContainer>
      </MissionSection>

      {/* OUR PRODUCTS SECTION */}
      <ProductsCtaSection>
        <CtaContainer>
          <div className="badge-pill" style={{ margin: '0 auto' }}>
            <Sparkles className="w-4 h-4 text-amber-600" /> OUR PRODUCTS
          </div>
          <h2>Product Offerings</h2>
          <p>
            Check out our amazing range of products and select what you would be buying from us today
          </p>
          <PrimaryButton href="/store">
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </PrimaryButton>
        </CtaContainer>
      </ProductsCtaSection>
    </PageWrapper>
  );
}