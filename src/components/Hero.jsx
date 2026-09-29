

// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import styled, { keyframes } from "styled-components";
// import { ShieldCheck, ArrowRight, Video } from "lucide-react";

// // Curated slides featuring high-end Unsplash security, CCTV, and smart tech images
// const heroSlides = [
//   {
//     image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80", // Modern security / tech lighting
//     badge: "Advanced Surveillance",
//     subtitle: "Protect what matters most with cutting-edge CCTV cameras and high-definition security monitoring solutions tailored for homes and businesses."
//   },
//   {
//     image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1920&q=80", // Surveillance camera close up
//     badge: "Crystal Clear Monitoring",
//     subtitle: "Experience 24/7 crystal-clear visibility with state-of-the-art security gadgets designed for maximum reliability and protection."
//   },
//   {
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80", // Server room / tech networking / intercom control
//     badge: "Smart Intercom Systems",
//     subtitle: "Seamless communication and secure access control integration for modern residential and corporate facilities in Ikoyi and beyond."
//   },
//   {
//     image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1920&q=80", // Smart home tech / security
//     badge: "Total Security Gadgets",
//     subtitle: "Explore our premium selection of reliable security gadgets, installation accessories, and professional tech solutions from Majinfotek."
//   }
// ];

// // Fluid & Smooth Keyframe Animations
// const smoothFadeInUp = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(20px);
//     filter: blur(4px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const smoothZoom = keyframes`
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.08);
//   }
//   100% {
//     transform: scale(1.03);
//   }
// `;

// const shimmer = keyframes`
//   0% {
//     background-position: -200% 0;
//   }
//   100% {
//     background-position: 200% 0;
//   }
// `;

// // Styled Components (Updated with Majinfotek Theme: Deep Royal Blue #1c3ba4 & Rich Purple #8b5cf6)
// const HeroSectionWrapper = styled.section`
//   position: relative;
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
//   background-color: #1c3ba4;
//   padding-top: 5rem; /* account for fixed header */
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   inset: 0;
//   background-image: url(${props => props.$bgImage});
//   background-size: cover;
//   background-position: center;
//   opacity: ${props => (props.$isActive ? 1 : 0)};
//   transition: opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1);
//   animation: ${props => (props.$isActive ? smoothZoom : "none")} 7s ease-in-out infinite alternate;
//   will-change: opacity, transform;
// `;

// const GradientOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background: linear-gradient(to top, rgba(28, 59, 164, 0.7), rgba(28, 59, 164, 0.2), rgba(15, 23, 42, 0.1));
//   z-index: 1;
// `;

// const ContentContainer = styled.div`
//   position: relative;
//   z-index: 10;
//   max-width: 56rem;
//   margin: 0 auto;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 2rem;
//   margin-top: 1.5rem;
//   padding: 0 1.5rem;
// `;

// const Badge = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   padding: 0.5rem 1.25rem;
//   border-radius: 9999px;
//   background-color: rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(16px);
//   border: 1px solid rgba(139, 92, 246, 0.4);
//   color: #ffffff;
//   font-size: 0.75rem;
//   font-weight: 500;
//   letter-spacing: 0.05em;
//   box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.03);
//   }

//   @media (min-width: 640px) {
//     font-size: 0.875rem;
//   }
// `;

// const Title = styled.h1`
//   font-size: 2.2rem;
//   font-weight: 900;
//   letter-spacing: -0.025em;
//   color: #ffffff;
//   line-height: 1.15;

//   @media (min-width: 640px) {
//     font-size: 3.5rem;
//   }
//   @media (min-width: 768px) {
//     font-size: 4.2rem;
//   }
// `;

// const HighlightSpan = styled.span`
//   background: linear-gradient(135deg, #ffffff 0%, #8b5cf6 100%);
//   background-size: 200% auto;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   animation: ${shimmer} 5s linear infinite;
// `;

// const Subtitle = styled.p`
//   max-width: 42rem;
//   font-size: 1rem;
//   color: #cbd5e1;
//   font-weight: 400;
//   line-height: 1.625;
//   animation: ${smoothFadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//   will-change: opacity, transform, filter;

//   @media (min-width: 768px) {
//     font-size: 1.15rem;
//   }
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 1rem;
//   width: 100%;
//   padding-top: 1rem;

//   @media (min-width: 640px) {
//     flex-direction: row;
//     width: auto;
//   }
// `;

// const PrimaryButton = styled(Link)`
//   width: 100%;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.75rem;
//   padding: 1rem 2rem;
//   border-radius: 9999px;
//   background: linear-gradient(135deg, #1c3ba4 0%, #8b5cf6 100%);
//   color: #ffffff;
//   font-weight: 600;
//   font-size: 1rem;
//   box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.4);
//   transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
//   text-decoration: none;

//   &:hover {
//     opacity: 0.95;
//     transform: translateY(-3px) scale(1.02);
//     box-shadow: 0 15px 30px -5px rgba(139, 92, 246, 0.6);
//   }

//   @media (min-width: 640px) {
//     width: auto;
//   }
// `;

// const SecondaryButton = styled(Link)`
//   width: 100%;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.75rem;
//   padding: 1rem 2rem;
//   border-radius: 9999px;
//   background-color: rgba(255, 255, 255, 0.08);
//   color: #ffffff;
//   border: 1px solid rgba(255, 255, 255, 0.25);
//   backdrop-filter: blur(12px);
//   font-weight: 600;
//   font-size: 1rem;
//   transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
//   text-decoration: none;

//   &:hover {
//     background-color: rgba(255, 255, 255, 0.18);
//     border-color: rgba(139, 92, 246, 0.6);
//     transform: translateY(-3px) scale(1.02);
//   }

//   @media (min-width: 640px) {
//     width: auto;
//   }
// `;

// const IndicatorsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.6rem;
//   padding-top: 1.5rem;
// `;

// const IndicatorDot = styled.button`
//   height: 0.5rem;
//   border-radius: 9999px;
//   transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//   border: none;
//   cursor: pointer;
//   width: ${props => (props.$isActive ? "2.5rem" : "0.5rem")};
//   background-color: ${props => (props.$isActive ? "#8b5cf6" : "rgba(255, 255, 255, 0.35)")};
//   box-shadow: ${props => (props.$isActive ? "0 0 12px rgba(139, 92, 246, 0.6)" : "none")};

//   &:hover {
//     background-color: ${props => (props.$isActive ? "#8b5cf6" : "rgba(255, 255, 255, 0.6)")};
//   }
// `;

// export default function HeroSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically switch backgrounds and subtitles smoothly every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const currentSlide = heroSlides[currentIndex];

//   return (
//     <HeroSectionWrapper>
//       {/* Background Images with Fluid Crossfade & Subtle Zoom */}
//       {heroSlides.map((slide, index) => (
//         <BackgroundImage
//           key={slide.image}
//           $bgImage={slide.image}$isActive={index === currentIndex}
//         />
//       ))}

//       <GradientOverlay />

//       <ContentContainer>
        
//         {/* Security Badge */}
//         <Badge>
//           <ShieldCheck className="w-4 h-4 text-purple-400 animate-pulse" />
//           <span>{currentSlide.badge}</span>
//         </Badge>

//         {/* Main Headline */}
//         <Title>
//           MAJ<HighlightSpan>INFOTEK</HighlightSpan>
//         </Title>

//         {/* Dynamic Animated Subtitle Description */}
//         <Subtitle key={currentIndex}>
//           {currentSlide.subtitle}
//         </Subtitle>

//         {/* Dual Call-To-Action Buttons */}
//         <ButtonGroup>
//           <PrimaryButton href="/store">
//             Explore
//             <ArrowRight className="w-5 h-5 transition-transform duration-300 hover:translate-x-1" />
//           </PrimaryButton>

//           <SecondaryButton href="/contact">
//             <Video className="w-5 h-5 text-purple-400" />
//             Get in touch
//           </SecondaryButton>
//         </ButtonGroup>

//         {/* Interactive Carousel Indicators */}
//         <IndicatorsContainer>
//           {heroSlides.map((_, idx) => (
//             <IndicatorDot
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               $isActive={idx === currentIndex}
//               aria-label={`Go to slide ${idx + 1}`}
//             />
//           ))}
//         </IndicatorsContainer>

//       </ContentContainer>
//     </HeroSectionWrapper>
//   );
// }





"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { primaryColoring, secondaryColoring } from "./Context";

// Color Theme Variables assigned from Context
const primaryColor = primaryColoring; // #3D1B17 (Deep Brown)
const secondaryColor = secondaryColoring; // #E2B04A (Gold)
const accentGradient = `linear-gradient(135deg, ${primaryColoring} 0%, ${secondaryColoring} 100%)`;
const textLight = "#ffffff";
const textMuted = "#f3e8e2";

// Curated slides featuring high-end African botanical skincare, body care, and wellness
const heroSlides = [
  {
    image: "/h2.png", // Natural skincare / cosmetic bottles
    badge: "Pure Botanical Heritage",
    subtitle: "Experience the transformative power of nature. Indulge your skin and explore a range of results-driven products crafted from Africa’s rich indigenous botanicals."
  },
  {
    image: "/h1.png", // Luxury spa and organic body care
    badge: "Body & Hair Collection",
    subtitle: "Your go-to destination for natural, luxurious skin and hair care products designed to inspire healthier living and radiant beauty."
  },
  {
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80", // Holistic wellness and expert skincare
    badge: "Expert Formulation Classes",
    subtitle: "Join our expert-led classes and master the art of natural formulation. Learn how to craft a wide range of products, from cleansers to hair growth serums."
  }
];

// Fluid & Smooth Keyframe Animations
const smoothFadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const smoothZoom = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1.03);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Styled Components (Updated with Shealuxe Theme & Context Colors)
const HeroSectionWrapper = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${primaryColor};
  padding-top: 5rem; /* account for fixed header */
`;

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.$isActive ? 1 : 0)};
  transition: opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${props => (props.$isActive ? smoothZoom : "none")} 7s ease-in-out infinite alternate;
  will-change: opacity, transform;
`;

const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(61, 27, 23, 0.85), rgba(61, 27, 23, 0.4), rgba(15, 23, 42, 0.2));
  z-index: 1;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
  padding: 0 1.5rem;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border: 1px solid ${secondaryColor};
  color: ${textLight};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: -0.025em;
  color: ${textLight};
  line-height: 1.15;

  @media (min-width: 640px) {
    font-size: 3.5rem;
  }
  @media (min-width: 768px) {
    font-size: 4.2rem;
  }
`;

const HighlightSpan = styled.span`
  background: linear-gradient(135deg, ${textLight} 0%, ${secondaryColor} 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 5s linear infinite;
`;

const Subtitle = styled.p`
  max-width: 42rem;
  font-size: 1rem;
  color: ${textMuted};
  font-weight: 400;
  line-height: 1.625;
  animation: ${smoothFadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  will-change: opacity, transform, filter;

  @media (min-width: 768px) {
    font-size: 1.15rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding-top: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
    width: auto;
  }
`;

const PrimaryButton = styled(Link)`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 9999px;
  background: ${accentGradient};
  color: ${textLight};
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 10px 25px -5px rgba(226, 176, 74, 0.4);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;

  &:hover {
    opacity: 0.95;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 30px -5px rgba(226, 176, 74, 0.6);
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

const SecondaryButton = styled(Link)`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.08);
  color: ${textLight};
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.18);
    border-color: ${secondaryColor};
    transform: translateY(-3px) scale(1.02);
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

const IndicatorsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-top: 1.5rem;
`;

const IndicatorDot = styled.button`
  height: 0.5rem;
  border-radius: 9999px;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  border: none;
  cursor: pointer;
  width: ${props => (props.$isActive ? "2.5rem" : "0.5rem")};
  background-color: ${props => (props.$isActive ? secondaryColor : "rgba(255, 255, 255, 0.35)")};
  box-shadow: ${props => (props.$isActive ? "0 0 12px rgba(226, 176, 74, 0.6)" : "none")};

  &:hover {
    background-color: ${props => (props.$isActive ? secondaryColor : "rgba(255, 255, 255, 0.6)")};
  }
`;

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch backgrounds and subtitles smoothly every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[currentIndex];

  return (
    <HeroSectionWrapper>
      {/* Background Images with Fluid Crossfade & Subtle Zoom */}
      {heroSlides.map((slide, index) => (
        <BackgroundImage
          key={slide.image}
          $bgImage={slide.image}$isActive={index === currentIndex}
        />
      ))}

      <GradientOverlay />

      <ContentContainer>
        
        {/* Botanical Wellness Badge */}
        <Badge>
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>{currentSlide.badge}</span>
        </Badge>

        {/* Main Headline */}
        <Title>
          SHEA<HighlightSpan>LUXE</HighlightSpan>
        </Title>

        {/* Dynamic Animated Subtitle Description */}
        <Subtitle key={currentIndex}>
          {currentSlide.subtitle}
        </Subtitle>

        {/* Dual Call-To-Action Buttons */}
        <ButtonGroup>
          <PrimaryButton href="/store">
            Shop Now
            <ArrowRight className="w-5 h-5 transition-transform duration-300 hover:translate-x-1" />
          </PrimaryButton>

          <SecondaryButton href="/contact">
            <BookOpen className="w-5 h-5 text-amber-300" />
            Get in touch
          </SecondaryButton>
        </ButtonGroup>

        {/* Interactive Carousel Indicators */}
        <IndicatorsContainer>
          {heroSlides.map((_, idx) => (
            <IndicatorDot
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              $isActive={idx === currentIndex}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </IndicatorsContainer>

      </ContentContainer>
    </HeroSectionWrapper>
  );
}