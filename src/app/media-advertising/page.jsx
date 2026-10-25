"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Swal from "sweetalert2";
import {
  Eye,
  TrendingUp,
  Layers,
  Check,
  Mail,
  Lock,
  MessageSquare,
  Share2,
  UserCheck,
  Megaphone,
} from "lucide-react";
import { secondaryColoring } from "@/components/Context";

/* ================= COLORS & BRANDING ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const DarkGreen = "#09281e";
const MidGreen = "#11382b";
const WarmBg = "#FAF8F4";
const CardBg = "#FFFFFF";
const DarkText = "#1A1A1A";
const MutedText = "#66625b";
const BorderColor = "#E2DDD5";

/* ================= HERO SLIDES DATA ================= */
const heroSlides = [
  {
    id: 1,
    tag: "MEDIA & ADVERTISING",
    title: "Advertising That Moves Audiences",
    description: "Strategic digital and traditional advertising that puts your brand in front of the right people.",
    primaryBtnText: "Start a Campaign",
    primaryBtnLink: "#pricing-packages",
    secondaryBtnText: "View Packages",
    secondaryBtnLink: "#pricing-packages",
    bgStyle:
      "linear-gradient(rgba(9, 40, 30, 0.85), rgba(9, 40, 30, 0.92)), url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 2,
    tag: "MEDIA & ADVERTISING",
    title: "Media Coverage, Earned and Amplified",
    description: "Event coverage, press and storytelling that builds credibility.",
    primaryBtnText: "Request Coverage",
    primaryBtnLink: "/contact?service=media-coverage",
    secondaryBtnText: "Our Services",
    secondaryBtnLink: "#creative-services",
    bgStyle:
      "linear-gradient(rgba(9, 40, 30, 0.85), rgba(9, 40, 30, 0.92)), url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 3,
    tag: "MEDIA & ADVERTISING",
    title: "Brand Ambassadors, Matched Right",
    description: "Connecting brands with credible personalities and engaged audiences.",
    primaryBtnText: "Find an Ambassador",
    primaryBtnLink: "/contact?service=brand-ambassadors",
    secondaryBtnText: "Talk to Us",
    secondaryBtnLink: "/contact",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 4,
    tag: "MEDIA & ADVERTISING",
    title: "Campaigns, End to End",
    description: "From concept and content to launch, measurement and scale.",
    primaryBtnText: "Start a Campaign",
    primaryBtnLink: "#pricing-packages",
    secondaryBtnText: "See Our Work",
    secondaryBtnLink: "#delivered-work",
    bgStyle:
      "linear-gradient(rgba(9, 40, 30, 0.85), rgba(9, 40, 30, 0.92)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')",
  },
];

/* ================= CREATIVE SERVICES DATA ================= */
const creativeServices = [
  {
    id: "digital-advertising",
    title: "Digital Advertising",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "social-media-campaigns",
    title: "Social Media Campaigns",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "media-coverage",
    title: "Media Coverage",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "brand-ambassador-campaigns",
    title: "Brand Ambassador Campaigns",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  },
];

/* ================= PRICING PACKAGES DATA ================= */
const campaignPackages = [
  {
    id: "weekly",
    name: "Weekly Package",
    period: "WEEKLY",
    price: "₦200,000",
    features: [
      "1 Social Media Post",
      "1 Promotional Video",
      "1 Social media post",
      "1 Promotional video",
      "125k+ platform views",
      "125k+ engagement",
      "Targeted audience reach",
    ],
    popular: false,
  },
  {
    id: "monthly",
    name: "Monthly Package",
    period: "MONTHLY",
    price: "₦500,000",
    features: [
      "1 Social Media Post",
      "1 Promotional Video",
      "1 Social media post",
      "1 Promotional video",
      "125k+ platform views",
      "125k+ engagement",
      "Targeted audience reach",
      "Monthly performance report",
    ],
    popular: false,
  },
  {
    id: "3-month",
    name: "3-Month Package",
    period: "3 MONTHS",
    price: "₦2,500,000",
    features: [
      "2 Posts Weekly",
      "2 Videos",
      "2 posts weekly",
      "2 promotional videos",
      "125k+ platform views",
      "125k+ engagement",
      "Targeted audience reach",
      "Monthly performance report",
      "Custom strategy session",
    ],
    popular: true, // Gold Highlight
  },
  {
    id: "6-month",
    name: "6-Month Package",
    period: "6 MONTHS",
    price: "₦10,000,000",
    features: [
      "Weekly Posts",
      "4 Videos",
      "Weekly posts",
      "4 promotional videos",
      "125k+ platform views",
      "125k+ engagement",
      "Targeted audience reach",
      "Monthly performance report",
      "Custom strategy session",
      "Brand ambassador matching",
    ],
    popular: false,
  },
  {
    id: "12-month",
    name: "12-Month Package",
    period: "12 MONTHS",
    price: "₦20,000,000",
    features: [
      "Weekly Posts",
      "8 Videos",
      "Weekly posts",
      "8 promotional videos",
      "125k+ platform views",
      "125k+ engagement",
      "Targeted audience reach",
      "Monthly performance report",
      "Custom strategy session",
      "Brand ambassador matching",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

/* ================= STYLED COMPONENTS ================= */
const PageWrapper = styled.div`
  width: 100%;
  background-color: ${WarmBg};
  color: ${DarkText};
  font-family: inherit;
`;

/* ----- HERO SLIDER ----- */
const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 580px;
  background: ${(p) => p.$bg};
  background-size: cover;
  background-position: center;
  transition: background 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  padding: 5rem 4rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    min-height: 500px;
  }
`;

const HeroContent = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: ${GoldAccent};
  text-transform: uppercase;

  .line {
    width: 20px;
    height: 1px;
    background: ${GoldAccent};
  }
`;

const HeroTitle = styled.h1`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 3.6rem;
  font-weight: 400;
  line-height: 1.12;
  color: #ffffff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 0.95rem;
  font-weight: 300;
  color: #e2e8f0;
  line-height: 1.6;
  margin: 0 0 0.5rem 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryGoldBtn = styled.a`
  background: ${GoldAccent};
  color: #111827;
  padding: 0.85rem 1.8rem;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 2px;
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }
`;

const SecondaryOutlineBtn = styled.a`
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0.85rem 1.8rem;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.2s;

  &:hover {
    border-color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const SliderControls = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 4rem;
  right: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    left: 1.5rem;
    right: 1.5rem;
    bottom: 1.5rem;
  }
`;

const Indicators = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .counter {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: #ffffff;
  }
`;

const Bars = styled.div`
  display: flex;
  gap: 6px;
`;

const Bar = styled.div`
  width: ${(p) => (p.$active ? "32px" : "16px")};
  height: 2px;
  background: ${(p) => (p.$active ? GoldAccent : "rgba(255, 255, 255, 0.35)")};
  cursor: pointer;
  transition: all 0.3s;
`;

const ArrowGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ArrowBtn = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #ffffff;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${GoldAccent};
    border-color: ${GoldAccent};
    color: #111827;
  }
`;

/* ----- SECTIONS & HEADERS ----- */
const SectionContainer = styled.section`
  max-width: 1150px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  box-sizing: border-box;
`;

const HeaderBlock = styled.div`
  text-align: center;
  max-width: 650px;
  margin: 0 auto 3rem;

  .tag {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    color: ${GoldAccent};
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.2rem;
    font-weight: 400;
    color: ${DarkText};
    margin: 0 0 0.8rem 0;
  }

  p {
    font-size: 0.85rem;
    color: ${MutedText};
    line-height: 1.6;
    margin: 0;
    font-weight: 300;
  }
`;

/* ----- PLATFORMS STATS GREEN BANNER ----- */
const StatsGreenSection = styled.section`
  background-color: ${DarkGreen};
  color: #ffffff;
  padding: 4.5rem 1.5rem;
  text-align: center;
  box-sizing: border-box;
`;

const StatsGrid = styled.div`
  max-width: 900px;
  margin: 3rem auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon-circle {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid ${GoldAccent};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${GoldAccent};
    margin-bottom: 1rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .stat-number {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.5rem;
    font-weight: 400;
    color: ${GoldAccent};
    line-height: 1;
    margin-bottom: 0.4rem;
  }

  .stat-label {
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
  }
`;

/* ----- CREATIVE SERVICES GRID ----- */
const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  position: relative;
  aspect-ratio: 4 / 3.8;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .gradient-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.88) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      transparent 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.25rem;
    box-sizing: border-box;
  }

  .title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.25rem;
    color: #ffffff;
    font-weight: 400;
    margin: 0 0 0.6rem 0;
  }

  .explore-btn {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: ${GoldAccent};
    text-transform: uppercase;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    text-align: left;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

/* ----- PRICING PACKAGES GRID ----- */
const FiveColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const PackageCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${(p) => (p.$popular ? GoldAccent : BorderColor)};
  border-radius: 2px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${(p) => (p.$popular ? "0 10px 25px rgba(226, 176, 74, 0.15)" : "none")};
  position: relative;

  .popular-header {
    background: ${GoldAccent};
    color: #111827;
    font-size: 0.58rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-align: center;
    padding: 0.3rem;
    margin: -1.5rem -1rem 1rem -1rem;
  }

  .pkg-name {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.1rem;
    font-weight: 400;
    margin: 0 0 0.2rem 0;
    color: ${DarkText};
  }

  .pkg-period {
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: ${MutedText};
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.8rem;
  }

  .pkg-price {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: ${MidGreen};
    margin-bottom: 1.25rem;
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    li {
      font-size: 0.68rem;
      color: ${MutedText};
      display: flex;
      align-items: flex-start;
      gap: 6px;
      line-height: 1.4;

      svg {
        width: 12px;
        height: 12px;
        color: ${MidGreen};
        flex-shrink: 0;
        margin-top: 1px;
      }
    }
  }

  .pkg-actions {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

const CardSolidBtn = styled.button`
  width: 100%;
  padding: 0.65rem;
  background-color: ${(p) => (p.$popular ? GoldAccent : MidGreen)};
  color: ${(p) => (p.$popular ? "#111827" : "#ffffff")};
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const CardOutlineBtn = styled.button`
  width: 100%;
  padding: 0.55rem;
  background-color: transparent;
  color: ${DarkText};
  border: 1px solid ${BorderColor};
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover {
    border-color: ${MidGreen};
  }
`;

/* ----- SOCIAL MEDIA & PR MANAGEMENT CARDS ----- */
const PRCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const PRCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  padding: 2rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon-circle {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: ${WarmBg};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${MidGreen};
    margin-bottom: 1.25rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  h3 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0 0 0.6rem 0;
    color: ${DarkText};
  }

  p {
    font-size: 0.8rem;
    color: ${MutedText};
    line-height: 1.5;
    margin: 0;
    font-weight: 300;
  }
`;

const CenteredGreenBtn = styled.a`
  display: inline-block;
  background-color: ${MidGreen};
  color: #ffffff;
  padding: 0.85rem 2rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.92;
  }
`;

/* ----- PORTFOLIO MASONRY GRID ----- */
const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.25rem;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const MasonryTile = styled.div`
  background: #e5e0d8;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  min-height: 180px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .netflix-box {
    width: 100%;
    height: 100%;
    background: #0f1015;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 180px;

    .n-logo {
      font-size: 3rem;
      font-weight: 900;
      color: #e50914;
      font-family: sans-serif;
    }
  }
`;

/* ----- BOTTOM HERO BANNER ----- */
const BottomHeroBanner = styled.section`
  position: relative;
  width: 100%;
  padding: 6rem 1.5rem;
  background: linear-gradient(rgba(9, 40, 30, 0.88), rgba(9, 40, 30, 0.92)),
    url("https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=80");
  background-size: cover;
  background-position: center;
  text-align: center;
  color: #ffffff;
  box-sizing: border-box;

  .tag {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    color: ${GoldAccent};
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.8rem;
    font-weight: 400;
    margin: 0 0 2rem 0;

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

// /* ================= MAIN COMPONENT ================= */
// export default function MediaAndAdvertisingPage() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-rotate hero slides
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   const slide = heroSlides[currentSlide];

//   const handleBookPackage = (pkgName, price) => {
//     Swal.fire({
//       title: `Book ${pkgName}`,
//       text: `Confirm booking request for ${pkgName} at ${price}?`,
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonText: "Proceed to Payment",
//       confirmButtonColor: MidGreen,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire(
//           "Booking Initiated 🎉",
//           "Redirecting to secure gateway...",
//           "success"
//         );
//       }
//     });
//   };

//   return (
//     <PageWrapper>
//       {/* 1. HERO SLIDER SECTION */}
//       <HeroContainer $bg={slide.bgStyle}>
//         <HeroContent key={slide.id}>
//           {slide.tag && (
//             <TagRow>
//               <div className="line" />
//               <span>{slide.tag}</span>
//             </TagRow>
//           )}
//           <HeroTitle>{slide.title}</HeroTitle>
//           <HeroDescription>{slide.description}</HeroDescription>
//           <ButtonGroup>
//             <PrimaryGoldBtn href={slide.primaryBtnLink}>
//               {slide.primaryBtnText} →
//             </PrimaryGoldBtn>
//             <SecondaryOutlineBtn href={slide.secondaryBtnLink}>
//               {slide.secondaryBtnText}
//             </SecondaryOutlineBtn>
//           </ButtonGroup>
//         </HeroContent>

//         {/* CONTROLS */}
//         <SliderControls>
//           <Indicators>
//             <Bars>
//               {heroSlides.map((_, idx) => (
//                 <Bar
//                   key={idx}
//                   $active={idx === currentSlide}
//                   onClick={() => setCurrentSlide(idx)}
//                 />
//               ))}
//             </Bars>
//             <span className="counter">
//               0{currentSlide + 1} / 0{heroSlides.length}
//             </span>
//           </Indicators>

//           <ArrowGroup>
//             <ArrowBtn
//               onClick={() =>
//                 setCurrentSlide((prev) =>
//                   prev === 0 ? heroSlides.length - 1 : prev - 1
//                 )
//               }
//             >
//               ←
//             </ArrowBtn>
//             <ArrowBtn
//               onClick={() =>
//                 setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
//               }
//             >
//               →
//             </ArrowBtn>
//           </ArrowGroup>
//         </SliderControls>
//       </HeroContainer>

//       {/* 2. TOP TAGLINE SECTION */}
//       <SectionContainer style={{ paddingBottom: "2rem" }}>
//         <HeaderBlock style={{ marginBottom: "2rem" }}>
//           <span className="tag">MEDIA & ADVERTISING</span>
//           <h2>Where strategy meets storytelling.</h2>
//           <p>
//             We help brands reach, resonate and grow — combining data-driven advertising with creative that earns attention and loyalty.
//           </p>
//         </HeaderBlock>
//       </SectionContainer>

//       {/* 3. PLATFORMS STATS GREEN BANNER */}
//       <StatsGreenSection>
//         <span className="tag" style={{ color: GoldAccent }}>
//           — OUR REACH —
//         </span>
//         <h2
//           style={{
//             fontFamily: '"Playfair Display", Georgia, serif',
//             fontSize: "2.2rem",
//             fontWeight: 400,
//             margin: "0.5rem 0",
//           }}
//         >
//           Platforms That Move the Needle
//         </h2>
//         <p
//           style={{
//             fontSize: "0.85rem",
//             color: "rgba(255,255,255,0.75)",
//             maxWidth: "600px",
//             margin: "0 auto",
//             fontWeight: 300,
//           }}
//         >
//           Every campaign runs across platforms with a combined reach of over 52 million views and more than 5 million in engagement — putting your brand in front of the right people.
//         </p>

//         <StatsGrid>
//           <StatItem>
//             <div className="icon-circle">
//               <Eye />
//             </div>
//             <div className="stat-number">52M+</div>
//             <div className="stat-label">TOTAL PLATFORM VIEWS</div>
//           </StatItem>

//           <StatItem>
//             <div className="icon-circle">
//               <TrendingUp />
//             </div>
//             <div className="stat-number">5M+</div>
//             <div className="stat-label">ENGAGEMENT GENERATED</div>
//           </StatItem>

//           <StatItem>
//             <div className="icon-circle">
//               <Layers />
//             </div>
//             <div className="stat-number">Multiple</div>
//             <div className="stat-label">ADVERTISING PLATFORMS</div>
//           </StatItem>
//         </StatsGrid>
//       </StatsGreenSection>

//       {/* 4. A FULL-SERVICE CREATIVE AGENCY */}
//       <SectionContainer id="creative-services">
//         <HeaderBlock style={{ marginBottom: "2.5rem" }}>
//           <span className="tag">— CREATIVE SERVICES —</span>
//           <h2>A Full-Service Creative Agency</h2>
//           <p>
//             Strategy, content, production and amplification — under one roof, delivered with precision.
//           </p>
//         </HeaderBlock>

//         <ThreeColumnGrid>
//           {creativeServices.map((service) => (
//             <ServiceCard key={service.id}>
//               <img src={service.image} alt={service.title} />
//               <div className="gradient-overlay">
//                 <h3 className="title">{service.title}</h3>
//                 <button
//                   className="explore-btn"
//                   onClick={() => {
//                     const el = document.getElementById("pricing-packages");
//                     if (el) el.scrollIntoView({ behavior: "smooth" });
//                   }}
//                 >
//                   EXPLORE SERVICE — →
//                 </button>
//               </div>
//             </ServiceCard>
//           ))}
//         </ThreeColumnGrid>
//       </SectionContainer>

//       {/* 5. CHOOSE YOUR CAMPAIGN (PRICING PACKAGES) */}
//       <SectionContainer id="pricing-packages" style={{ paddingTop: 0 }}>
//         <HeaderBlock style={{ marginBottom: "2.5rem" }}>
//           <span className="tag">— ADVERTISING PACKAGES —</span>
//           <h2>Choose Your Campaign</h2>
//           <p>
//             Transparent pricing across every platform — with over 52M+ views and 5M+ engagement at your fingertips.
//           </p>
//         </HeaderBlock>

//         <FiveColumnGrid>
//           {campaignPackages.map((pkg) => (
//             <PackageCard key={pkg.id} $popular={pkg.popular}>
//               {pkg.popular && <div className="popular-header">MOST POPULAR</div>}

//               <div>
//                 <h3 className="pkg-name">{pkg.name}</h3>
//                 <span className="pkg-period">{pkg.period}</span>
//                 <div className="pkg-price">{pkg.price}</div>

//                 <ul className="feature-list">
//                   {pkg.features.map((feat, idx) => (
//                     <li key={idx}>
//                       <Check />
//                       <span>{feat}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="pkg-actions">
//                 <CardSolidBtn
//                   $popular={pkg.popular}
//                   onClick={() => handleBookPackage(pkg.name, pkg.price)}
//                 >
//                   BOOK NOW →
//                 </CardSolidBtn>

//                 {/* <CardOutlineBtn
//                   onClick={() =>
//                     (window.location.href = `mailto:echobyteconcept@gmail.com?subject=Enquiry regarding ${pkg.name}`)
//                   }
//                 >
//                   <Mail style={{ width: "11px", height: "11px" }} /> EMAIL US
//                 </CardOutlineBtn> */}

//                 {/* <CardOutlineBtn
//                   onClick={() =>
//                     Swal.fire("Login Required", "Please log in to continue payment.", "info")
//                   }
//                 >
//                   <Lock style={{ width: "11px", height: "11px" }} /> LOG IN TO PAY
//                 </CardOutlineBtn> */}
//               </div>
//             </PackageCard>
//           ))}
//         </FiveColumnGrid>
//       </SectionContainer>

//       {/* 6. BEYOND ADVERTISING: SOCIAL MEDIA & PR MANAGEMENT */}
//       <SectionContainer style={{ paddingTop: 0 }}>
//         <HeaderBlock style={{ marginBottom: "2rem" }}>
//           <span className="tag">— BEYOND ADVERTISING —</span>
//           <h2>Social Media & PR Management</h2>
//           <p>
//             We don't just run campaigns — we manage your entire social media presence and provide professional PRO and PA assistance for clients who need dedicated support.
//           </p>
//         </HeaderBlock>

//         <PRCardsGrid>
//           <PRCard>
//             <div className="icon-circle">
//               <Share2 />
//             </div>
//             <h3>Social Media Management</h3>
//             <p>
//               Full handling of your social media presence — content planning, posting, community management and performance reporting.
//             </p>
//           </PRCard>

//           <PRCard>
//             <div className="icon-circle">
//               <UserCheck />
//             </div>
//             <h3>PRO / PA Assistance</h3>
//             <p>
//               Professional public relations and personal assistant support for executives and brands that need dedicated representation.
//             </p>
//           </PRCard>

//           <PRCard>
//             <div className="icon-circle">
//               <Megaphone />
//             </div>
//             <h3>Brand Strategy</h3>
//             <p>
//               End-to-end brand positioning, messaging and campaign strategy tailored to your audience and goals.
//             </p>
//           </PRCard>
//         </PRCardsGrid>

//         <div style={{ textAlign: "center" }}>
//           <CenteredGreenBtn href="/contact?type=pr-quote">
//             EMAIL FOR QUOTE
//           </CenteredGreenBtn>
//         </div>
//       </SectionContainer>

//       {/* 7. WORK THAT DELIVERED (PORTFOLIO GRID) */}
//       <SectionContainer id="delivered-work" style={{ paddingTop: "1rem" }}>
//         <HeaderBlock style={{ marginBottom: "2.5rem" }}>
//           <span className="tag">— SELECTED CAMPAIGNS —</span>
//           <h2>Work That Delivered</h2>
//           <p>A snapshot of campaigns and content produced for brands across Nigeria.</p>
//         </HeaderBlock>

//         <PortfolioGrid>
//           <MasonryTile style={{ gridRow: "span 2" }}>
//             <img
//               src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
//               alt="Campaign 1"
//             />
//           </MasonryTile>

//           <MasonryTile>
//             <img
//               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
//               alt="Campaign 2"
//             />
//           </MasonryTile>

//           <MasonryTile>
//             <img
//               src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
//               alt="Campaign 3"
//             />
//           </MasonryTile>

//           <MasonryTile>
//             <img
//               src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
//               alt="Campaign 4"
//             />
//           </MasonryTile>

//           <MasonryTile>
//             <div className="netflix-box">
//               <span className="n-logo">N</span>
//             </div>
//           </MasonryTile>

//           <MasonryTile style={{ gridColumn: "span 2" }}>
//             <img
//               src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80"
//               alt="Campaign 5"
//             />
//           </MasonryTile>
//         </PortfolioGrid>
//       </SectionContainer>

//       {/* 8. BOTTOM HERO BANNER */}
//       <BottomHeroBanner>
//         <span className="tag">LET'S BUILD YOUR BRAND</span>
//         <h2>Start a campaign that gets noticed.</h2>
//         <ButtonGroup style={{ justifyContent: "center" }}>
//           <PrimaryGoldBtn href="#pricing-packages">
//             START A CAMPAIGN →
//           </PrimaryGoldBtn>
//           <SecondaryOutlineBtn href="#creative-services">
//             VIEW ALL SERVICES
//           </SecondaryOutlineBtn>
//         </ButtonGroup>
//       </BottomHeroBanner>
//     </PageWrapper>
//   );
// }




/* ================= MAIN COMPONENT ================= */
// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";

export default function MediaAndAdvertisingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  // Handle Booking Package via Swal Modal & API Submission
  const handleBookPackage = async (pkg) => {
    const { value: formValues } = await Swal.fire({
      title: `Book ${pkg.name}`,
      html: `
        <p style="font-size: 0.9rem; color: #475569; margin-bottom: 1rem;">
          Price: <strong>${pkg.price}</strong> ${pkg.period ? `(${pkg.period})` : ""}
        </p>
        <input id="swal-input-name" class="swal2-input" placeholder="Full Name *" style="margin: 0.5rem auto; width: 85%; display: block;" />
        <input id="swal-input-email" type="email" class="swal2-input" placeholder="Email Address *" style="margin: 0.5rem auto; width: 85%; display: block;" />
        <input id="swal-input-phone" type="tel" class="swal2-input" placeholder="Phone Number *" style="margin: 0.5rem auto; width: 85%; display: block;" />
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Confirm & Book Package",
      confirmButtonColor: "#2e7d32", // Replace with MidGreen variable if imported/defined
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const name = document.getElementById("swal-input-name").value.trim();
        const email = document.getElementById("swal-input-email").value.trim();
        const phone = document.getElementById("swal-input-phone").value.trim();

        if (!name || !email || !phone) {
          Swal.showValidationMessage("Please fill out all required fields (*)");
          return false;
        }

        return { name, email, phone };
      },
    });

    if (formValues) {
      Swal.fire({
        title: "Processing Request...",
        text: "Please wait while we submit your booking request.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        const response = await fetch("/api/send-contact-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formTitle: `Advertising Package Booking - ${pkg.name}`,
            packageName: pkg.name,
            packagePrice: pkg.price,
            packagePeriod: pkg.period || "N/A",
            packageFeatures: pkg.features ? pkg.features.join(", ") : "N/A",
            fullName: formValues.name,
            email: formValues.email,
            phone: formValues.phone,
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          Swal.fire({
            title: "Booking Submitted 🎉",
            text:
              data.message ||
              `Thank you, ${formValues.name}! Your request for ${pkg.name} has been sent. Our team will reach out shortly.`,
            icon: "success",
            confirmButtonColor: "#2e7d32",
          });
        } else {
          throw new Error(
            data.message || data.error || "Failed to submit booking request."
          );
        }
      } catch (error) {
        Swal.fire({
          title: "Submission Failed ❌",
          text: error.message || "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonColor: "#d32f2f",
        });
      }
    }
  };

  return (
    <PageWrapper>
      {/* 1. HERO SLIDER SECTION */}
      <HeroContainer $bg={slide.bgStyle}>
        <HeroContent key={slide.id}>
          {slide.tag && (
            <TagRow>
              <div className="line" />
              <span>{slide.tag}</span>
            </TagRow>
          )}
          <HeroTitle>{slide.title}</HeroTitle>
          <HeroDescription>{slide.description}</HeroDescription>
          <ButtonGroup>
            <PrimaryGoldBtn href={slide.primaryBtnLink}>
              {slide.primaryBtnText} →
            </PrimaryGoldBtn>
            <SecondaryOutlineBtn href={slide.secondaryBtnLink}>
              {slide.secondaryBtnText}
            </SecondaryOutlineBtn>
          </ButtonGroup>
        </HeroContent>

        {/* CONTROLS */}
        <SliderControls>
          <Indicators>
            <Bars>
              {heroSlides.map((_, idx) => (
                <Bar
                  key={idx}
                  $active={idx === currentSlide}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </Bars>
            <span className="counter">
              0{currentSlide + 1} / 0{heroSlides.length}
            </span>
          </Indicators>

          <ArrowGroup>
            <ArrowBtn
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? heroSlides.length - 1 : prev - 1
                )
              }
            >
              ←
            </ArrowBtn>
            <ArrowBtn
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
              }
            >
              →
            </ArrowBtn>
          </ArrowGroup>
        </SliderControls>
      </HeroContainer>

      {/* 2. TOP TAGLINE SECTION */}
      <SectionContainer style={{ paddingBottom: "2rem" }}>
        <HeaderBlock style={{ marginBottom: "2rem" }}>
          <span className="tag">MEDIA & ADVERTISING</span>
          <h2>Where strategy meets storytelling.</h2>
          <p>
            We help brands reach, resonate and grow — combining data-driven
            advertising with creative that earns attention and loyalty.
          </p>
        </HeaderBlock>
      </SectionContainer>

      {/* 3. PLATFORMS STATS GREEN BANNER */}
      <StatsGreenSection>
        <span className="tag" style={{ color: GoldAccent }}>
          — OUR REACH —
        </span>
        <h2
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "2.2rem",
            fontWeight: 400,
            margin: "0.5rem 0",
          }}
        >
          Platforms That Move the Needle
        </h2>
        <p
          style={{
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.75)",
            maxWidth: "600px",
            margin: "0 auto",
            fontWeight: 300,
          }}
        >
          Every campaign runs across platforms with a combined reach of over 52
          million views and more than 5 million in engagement — putting your
          brand in front of the right people.
        </p>

        <StatsGrid>
          <StatItem>
            <div className="icon-circle">
              <Eye />
            </div>
            <div className="stat-number">52M+</div>
            <div className="stat-label">TOTAL PLATFORM VIEWS</div>
          </StatItem>

          <StatItem>
            <div className="icon-circle">
              <TrendingUp />
            </div>
            <div className="stat-number">5M+</div>
            <div className="stat-label">ENGAGEMENT GENERATED</div>
          </StatItem>

          <StatItem>
            <div className="icon-circle">
              <Layers />
            </div>
            <div className="stat-number">Multiple</div>
            <div className="stat-label">ADVERTISING PLATFORMS</div>
          </StatItem>
        </StatsGrid>
      </StatsGreenSection>

      {/* 4. A FULL-SERVICE CREATIVE AGENCY */}
      <SectionContainer id="creative-services">
        <HeaderBlock style={{ marginBottom: "2.5rem" }}>
          <span className="tag">— CREATIVE SERVICES —</span>
          <h2>A Full-Service Creative Agency</h2>
          <p>
            Strategy, content, production and amplification — under one roof,
            delivered with precision.
          </p>
        </HeaderBlock>

        <ThreeColumnGrid>
          {creativeServices.map((service) => (
            <ServiceCard key={service.id}>
              <img src={service.image} alt={service.title} />
              <div className="gradient-overlay">
                <h3 className="title">{service.title}</h3>
                <button
                  className="explore-btn"
                  onClick={() => {
                    const el = document.getElementById("pricing-packages");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  EXPLORE SERVICE — →
                </button>
              </div>
            </ServiceCard>
          ))}
        </ThreeColumnGrid>
      </SectionContainer>

      {/* 5. CHOOSE YOUR CAMPAIGN (PRICING PACKAGES) */}
      <SectionContainer id="pricing-packages" style={{ paddingTop: 0 }}>
        <HeaderBlock style={{ marginBottom: "2.5rem" }}>
          <span className="tag">— ADVERTISING PACKAGES —</span>
          <h2>Choose Your Campaign</h2>
          <p>
            Transparent pricing across every platform — with over 52M+ views and
            5M+ engagement at your fingertips.
          </p>
        </HeaderBlock>

        <FiveColumnGrid>
          {campaignPackages.map((pkg) => (
            <PackageCard key={pkg.id} $popular={pkg.popular}>
              {pkg.popular && <div className="popular-header">MOST POPULAR</div>}

              <div>
                <h3 className="pkg-name">{pkg.name}</h3>
                <span className="pkg-period">{pkg.period}</span>
                <div className="pkg-price">{pkg.price}</div>

                <ul className="feature-list">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx}>
                      <Check />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pkg-actions">
                <CardSolidBtn
                  $popular={pkg.popular}
                  onClick={() => handleBookPackage(pkg)}
                >
                  BOOK NOW →
                </CardSolidBtn>
              </div>
            </PackageCard>
          ))}
        </FiveColumnGrid>
      </SectionContainer>

      {/* 6. BEYOND ADVERTISING: SOCIAL MEDIA & PR MANAGEMENT */}
      <SectionContainer style={{ paddingTop: 0 }}>
        <HeaderBlock style={{ marginBottom: "2rem" }}>
          <span className="tag">— BEYOND ADVERTISING —</span>
          <h2>Social Media & PR Management</h2>
          <p>
            We don't just run campaigns — we manage your entire social media
            presence and provide professional PRO and PA assistance for
            clients who need dedicated support.
          </p>
        </HeaderBlock>

        <PRCardsGrid>
          <PRCard>
            <div className="icon-circle">
              <Share2 />
            </div>
            <h3>Social Media Management</h3>
            <p>
              Full handling of your social media presence — content planning,
              posting, community management and performance reporting.
            </p>
          </PRCard>

          <PRCard>
            <div className="icon-circle">
              <UserCheck />
            </div>
            <h3>PRO / PA Assistance</h3>
            <p>
              Professional public relations and personal assistant support for
              executives and brands that need dedicated representation.
            </p>
          </PRCard>

          <PRCard>
            <div className="icon-circle">
              <Megaphone />
            </div>
            <h3>Brand Strategy</h3>
            <p>
              End-to-end brand positioning, messaging and campaign strategy
              tailored to your audience and goals.
            </p>
          </PRCard>
        </PRCardsGrid>

        <div style={{ textAlign: "center" }}>
          <CenteredGreenBtn href="/contact?type=pr-quote">
            EMAIL FOR QUOTE
          </CenteredGreenBtn>
        </div>
      </SectionContainer>

      {/* 7. WORK THAT DELIVERED (PORTFOLIO GRID) */}
      <SectionContainer id="delivered-work" style={{ paddingTop: "1rem" }}>
        <HeaderBlock style={{ marginBottom: "2.5rem" }}>
          <span className="tag">— SELECTED CAMPAIGNS —</span>
          <h2>Work That Delivered</h2>
          <p>
            A snapshot of campaigns and content produced for brands across
            Nigeria.
          </p>
        </HeaderBlock>

        <PortfolioGrid>
          <MasonryTile style={{ gridRow: "span 2" }}>
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
              alt="Campaign 1"
            />
          </MasonryTile>

          <MasonryTile>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Campaign 2"
            />
          </MasonryTile>

          <MasonryTile>
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
              alt="Campaign 3"
            />
          </MasonryTile>

          <MasonryTile>
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
              alt="Campaign 4"
            />
          </MasonryTile>

          <MasonryTile>
            <div className="netflix-box">
              <span className="n-logo">N</span>
            </div>
          </MasonryTile>

          <MasonryTile style={{ gridColumn: "span 2" }}>
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80"
              alt="Campaign 5"
            />
          </MasonryTile>
        </PortfolioGrid>
      </SectionContainer>

      {/* 8. BOTTOM HERO BANNER */}
      <BottomHeroBanner>
        <span className="tag">LET'S BUILD YOUR BRAND</span>
        <h2>Start a campaign that gets noticed.</h2>
        <ButtonGroup style={{ justifyContent: "center" }}>
          <PrimaryGoldBtn href="#pricing-packages">
            START A CAMPAIGN →
          </PrimaryGoldBtn>
          <SecondaryOutlineBtn href="#creative-services">
            VIEW ALL SERVICES
          </SecondaryOutlineBtn>
        </ButtonGroup>
      </BottomHeroBanner>
    </PageWrapper>
  );
}