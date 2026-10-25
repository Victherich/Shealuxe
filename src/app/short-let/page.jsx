


// "use client";

// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import Link from "next/link";
// import {
//   MapPin,
//   Calendar,
//   Users,
//   Bed,
//   Search,
//   Play,
//   CheckCircle2,
//   Shield,
//   Clock,
//   PhoneCall,
// } from "lucide-react";
// import { secondaryColoring } from "@/components/Context";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/firebaseConfig";

// /* ================= COLORS & BRANDING ================= */
// const GoldAccent = secondaryColoring || "#E2B04A";
// const DarkGreen = "#09281e";
// const MidGreen = "#11382b";
// const WarmBg = "#FAF8F4";
// const CardBg = "#FFFFFF";
// const DarkText = "#1A1A1A";
// const MutedText = "#66625b";
// const BorderColor = "#E2DDD5";

// /* ================= SLIDE & LISTING DATA ================= */
// const heroSlides = [
//   {
//     id: 1,
//     tag: "SHORT-LET APARTMENTS",
//     title: "Extended Stays, Made Simple",
//     description: "Flexible weekly and monthly stays with full service.",
//     primaryBtnText: "Explore",
//     primaryBtnLink: "#listings",
//     secondaryBtnText: "Enquire",
//     secondaryBtnLink: "/contact",
//     bgStyle:
//       "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1920&q=80')",
//   },
//   {
//     id: 2,
//     tag: "CURATED SPACES",
//     title: "Luxury Living in Prime Locations",
//     description: "Serene, fully serviced environments engineered for maximum comfort and relaxation.",
//     primaryBtnText: "View Apartments",
//     primaryBtnLink: "#listings",
//     secondaryBtnText: "Book Consultation",
//     secondaryBtnLink: "/contact",
//     bgStyle:
//       "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80')",
//   },
//   {
//     id: 3,
//     tag: "SERVICED SUITES",
//     title: "Comfort & Elegance Combined",
//     description: "24/7 power, high-speed Wi-Fi, premium entertainment, and dedicated security.",
//     primaryBtnText: "Explore Collection",
//     primaryBtnLink: "#listings",
//     secondaryBtnText: "Contact Us",
//     secondaryBtnLink: "/contact",
//     bgStyle:
//       "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1920&q=80')",
//   },
//   {
//     id: 4,
//     tag: "EXECUTIVE HOMES",
//     title: "Your Home Away From Home",
//     description: "Designed for families, business travelers, and executive retreats.",
//     primaryBtnText: "Browse Listings",
//     primaryBtnLink: "#listings",
//     secondaryBtnText: "Enquire Now",
//     secondaryBtnLink: "/contact",
//     bgStyle:
//       "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80')",
//   },
// ];

// // const apartmentsData = [
// //   {
// //     id: 1,
// //     title: "Home away from home",
// //     location: "Magodo Phase 2",
// //     guests: 2,
// //     bedrooms: 1,
// //     price: 130000,
// //     priceFormatted: "N130,000",
// //     period: "per night",
// //     featured: true,
// //     hasVideo: true,
// //     image:
// //       "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
// //     tags: ["24/7 POWER SUPPLY", "24/7 SECURITY", "KITCHEN", "SAFE AREA", "FREE WIFI"],
// //   },
// //   {
// //     id: 2,
// //     title: "Luxury two bedroom",
// //     location: "Magodo Phase 2",
// //     guests: 4,
// //     bedrooms: 2,
// //     price: 175000,
// //     priceFormatted: "N175,000",
// //     period: "per night",
// //     featured: true,
// //     hasVideo: true,
// //     image:
// //       "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
// //     tags: ["24/7 POWER SUPPLY", "24/7 SECURITY", "KITCHEN", "SAFE AREA", "FREE WIFI"],
// //   },
// //   {
// //     id: 3,
// //     title: "Home away from home",
// //     location: "Magodo Phase 2",
// //     guests: 6,
// //     bedrooms: 3,
// //     price: 145000,
// //     priceFormatted: "N145,000",
// //     period: "per night",
// //     featured: true,
// //     hasVideo: true,
// //     image:
// //       "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
// //     tags: [
// //       "24/7 LIGHT",
// //       "24/7 SECURITY AVAILABLE",
// //       "SERENE",
// //       "SAFE AREA",
// //       "FREE FAST WI-FI",
// //       "NETFLIX",
// //       "YOUTUBE",
// //       "PRIME",
// //       "DSTV",
// //     ],
// //   },
// // ];

// /* ================= STYLED COMPONENTS ================= */
// const PageWrapper = styled.div`
//   width: 100%;
//   background-color: ${WarmBg};
//   color: ${DarkText};
//   font-family: inherit;
// `;

// const HeroContainer = styled.section`
//   position: relative;
//   width: 100%;
//   min-height: 580px;
//   background: ${(p) => p.$bg};
//   background-size: cover;
//   background-position: center;
//   transition: background 0.6s ease-in-out;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   color: #ffffff;
//   padding: 5rem 4rem 10rem;
//   box-sizing: border-box;

//   @media (max-width: 768px) {
//     padding: 4rem 1.5rem 12rem;
//     min-height: 520px;
//   }
// `;

// const HeroContent = styled.div`
//   max-width: 700px;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const TagRow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   font-size: 0.72rem;
//   font-weight: 700;
//   letter-spacing: 0.22em;
//   color: ${GoldAccent};
//   text-transform: uppercase;

//   .line {
//     width: 22px;
//     height: 1px;
//     background: ${GoldAccent};
//   }
// `;

// const HeroTitle = styled.h1`
//   font-family: "Playfair Display", Georgia, serif;
//   font-size: 3.5rem;
//   font-weight: 400;
//   line-height: 1.12;
//   color: #ffffff;
//   margin: 0;

//   @media (max-width: 768px) {
//     font-size: 2.3rem;
//   }
// `;

// const HeroDescription = styled.p`
//   font-size: 1rem;
//   font-weight: 300;
//   color: #e2e8f0;
//   line-height: 1.6;
//   margin: 0 0 0.5rem 0;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   flex-wrap: wrap;
// `;

// const PrimaryBtn = styled(Link)`
//   background: ${GoldAccent};
//   color: #111827;
//   padding: 0.85rem 1.8rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.12em;
//   text-decoration: none;
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   border-radius: 2px;
//   transition: transform 0.2s, opacity 0.2s;

//   &:hover {
//     opacity: 0.92;
//     transform: translateY(-1px);
//   }
// `;

// const SecondaryBtn = styled(Link)`
//   background: transparent;
//   color: #ffffff;
//   border: 1px solid rgba(255, 255, 255, 0.4);
//   padding: 0.85rem 1.8rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.12em;
//   text-decoration: none;
//   border-radius: 2px;
//   transition: all 0.2s;

//   &:hover {
//     border-color: #ffffff;
//     background: rgba(255, 255, 255, 0.1);
//   }
// `;

// const SliderControls = styled.div`
//   position: absolute;
//   bottom: 8.5rem;
//   left: 4rem;
//   right: 4rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   @media (max-width: 768px) {
//     left: 1.5rem;
//     right: 1.5rem;
//     bottom: 11rem;
//   }
// `;

// const Indicators = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;

//   .counter {
//     font-size: 0.75rem;
//     font-weight: 600;
//     letter-spacing: 0.15em;
//     color: #ffffff;
//   }
// `;

// const Bars = styled.div`
//   display: flex;
//   gap: 6px;
// `;

// const Bar = styled.div`
//   width: ${(p) => (p.$active ? "32px" : "16px")};
//   height: 2px;
//   background: ${(p) => (p.$active ? GoldAccent : "rgba(255, 255, 255, 0.35)")};
//   cursor: pointer;
//   transition: all 0.3s;
// `;

// const ArrowGroup = styled.div`
//   display: flex;
//   gap: 0.5rem;
// `;

// const ArrowBtn = styled.button`
//   background: transparent;
//   border: 1px solid rgba(255, 255, 255, 0.35);
//   color: #ffffff;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: all 0.2s;

//   &:hover {
//     background: ${GoldAccent};
//     border-color: ${GoldAccent};
//     color: #111827;
//   }
// `;

// const FloatingFilterWrapper = styled.div`
//   position: absolute;
//   bottom: -3.5rem;
//   left: 4rem;
//   right: 4rem;
//   background: ${CardBg};
//   border-radius: 4px;
//   box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
//   padding: 1.5rem;
//   z-index: 20;

//   @media (max-width: 900px) {
//     position: relative;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     margin: -3rem 1.5rem 0;
//   }
// `;

// const FilterGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr;
//   gap: 1rem;
//   align-items: flex-end;

//   @media (max-width: 1024px) {
//     grid-template-columns: 1fr 1fr;
//   }

//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FilterField = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.4rem;

//   label {
//     font-size: 0.65rem;
//     font-weight: 700;
//     letter-spacing: 0.15em;
//     color: ${MutedText};
//     text-transform: uppercase;
//     display: flex;
//     align-items: center;
//     gap: 5px;

//     svg {
//       width: 14px;
//       height: 14px;
//       color: ${GoldAccent};
//     }
//   }

//   input,
//   select {
//     width: 100%;
//     padding: 0.75rem 0.85rem;
//     background-color: ${WarmBg};
//     border: 1px solid ${BorderColor};
//     border-radius: 2px;
//     font-size: 0.85rem;
//     color: ${DarkText};
//     outline: none;
//     box-sizing: border-box;

//     &:focus {
//       border-color: ${GoldAccent};
//     }
//   }
// `;

// const SearchBtn = styled.button`
//   grid-column: span 1;
//   width: 100%;
//   padding: 0.85rem;
//   background-color: ${MidGreen};
//   color: #ffffff;
//   font-size: 0.72rem;
//   font-weight: 700;
//   letter-spacing: 0.15em;
//   text-transform: uppercase;
//   border: none;
//   border-radius: 2px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   transition: opacity 0.2s;

//   &:hover {
//     opacity: 0.92;
//   }

//   @media (max-width: 1024px) {
//     grid-column: span 2;
//   }

//   @media (max-width: 600px) {
//     grid-column: span 1;
//   }
// `;

// const MainContent = styled.main`
//   max-width: 1200px;
//   margin: 6rem auto 4rem;
//   padding: 0 1.5rem;
//   box-sizing: border-box;
// `;

// const SectionHeader = styled.div`
//   text-align: center;
//   max-width: 600px;
//   margin: 0 auto 2.5rem;

//   .tag {
//     font-size: 0.65rem;
//     font-weight: 700;
//     letter-spacing: 0.2em;
//     color: ${GoldAccent};
//     text-transform: uppercase;
//     display: inline-block;
//     margin-bottom: 0.5rem;
//   }

//   h2 {
//     font-family: "Playfair Display", Georgia, serif;
//     font-size: 2.2rem;
//     font-weight: 400;
//     margin: 0 0 0.5rem 0;
//   }

//   p {
//     font-size: 0.85rem;
//     color: ${MutedText};
//     margin: 0;
//   }
// `;

// const CategoryTabsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 1rem;
//   margin-bottom: 3.5rem;

//   @media (max-width: 900px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 500px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const TabCard = styled.div`
//   background: ${(p) => (p.$active ? MidGreen : CardBg)};
//   color: ${(p) => (p.$active ? "#ffffff" : DarkText)};
//   border: 1px solid ${(p) => (p.$active ? MidGreen : BorderColor)};
//   border-radius: 4px;
//   padding: 1.25rem;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   .tab-title {
//     font-size: 0.9rem;
//     font-weight: 700;
//   }

//   .tab-count {
//     font-size: 0.72rem;
//     color: ${(p) => (p.$active ? "rgba(255,255,255,0.7)" : MutedText)};
//   }

//   .arrow {
//     font-size: 1rem;
//     color: ${(p) => (p.$active ? GoldAccent : MutedText)};
//   }
// `;

// const ListingMetaBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 2rem;
//   flex-wrap: wrap;
//   gap: 1rem;

//   .count {
//     font-size: 0.85rem;
//     color: ${MutedText};
//   }
// `;

// const SortGroup = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;

//   input {
//     width: 90px;
//     padding: 0.5rem 0.75rem;
//     background: ${CardBg};
//     border: 1px solid ${BorderColor};
//     border-radius: 2px;
//     font-size: 0.82rem;
//   }

//   select {
//     padding: 0.5rem 0.75rem;
//     background: ${CardBg};
//     border: 1px solid ${BorderColor};
//     border-radius: 2px;
//     font-size: 0.82rem;
//   }
// `;

// const ListingsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 1.5rem;

//   @media (max-width: 950px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ApartmentCard = styled.div`
//   background: ${CardBg};
//   border: 1px solid ${BorderColor};
//   border-radius: 4px;
//   overflow: hidden;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
//   display: flex;
//   flex-direction: column;
// `;

// const CardImageWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   aspect-ratio: 16 / 10;
//   background-color: #eee;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   .featured-badge {
//     position: absolute;
//     top: 10px;
//     left: 10px;
//     background: ${GoldAccent};
//     color: #111827;
//     font-size: 0.6rem;
//     font-weight: 800;
//     letter-spacing: 0.1em;
//     padding: 3px 8px;
//     border-radius: 2px;
//   }

//   .video-tag {
//     position: absolute;
//     bottom: 10px;
//     left: 10px;
//     background: rgba(0, 0, 0, 0.7);
//     color: #ffffff;
//     font-size: 0.65rem;
//     font-weight: 700;
//     padding: 4px 10px;
//     border-radius: 2px;
//     display: flex;
//     align-items: center;
//     gap: 5px;
//   }
// `;

// const CardBody = styled.div`
//   padding: 1.25rem;
//   display: flex;
//   flex-direction: column;
//   flex: 1;
// `;

// const ApartmentTitle = styled.h3`
//   font-family: "Playfair Display", Georgia, serif;
//   font-size: 1.25rem;
//   font-weight: 400;
//   margin: 0 0 0.3rem 0;
//   color: ${DarkText};
// `;

// const LocationText = styled.p`
//   font-size: 0.8rem;
//   color: ${MutedText};
//   margin: 0 0 0.8rem 0;
//   display: flex;
//   align-items: center;
//   gap: 4px;
// `;

// const AmenityPills = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 6px;
//   margin-bottom: 1.25rem;
// `;

// const Pill = styled.span`
//   background: ${WarmBg};
//   color: ${DarkText};
//   border: 1px solid ${BorderColor};
//   font-size: 0.6rem;
//   font-weight: 700;
//   padding: 3px 8px;
//   border-radius: 2px;
//   letter-spacing: 0.05em;
// `;

// const PriceRow = styled.div`
//   margin-top: auto;
//   padding-top: 1rem;
//   border-top: 1px dashed ${BorderColor};
//   display: flex;
//   align-items: baseline;
//   gap: 4px;

//   .amount {
//     font-size: 1.15rem;
//     font-weight: 700;
//     color: ${DarkText};
//   }

//   .period {
//     font-size: 0.75rem;
//     color: ${MutedText};
//   }
// `;

// const CardActions = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1.2fr;
//   gap: 0.5rem;
//   margin-top: 1rem;
// `;

// const OutlineCardBtn = styled(Link)`
//   border: 1px solid ${MidGreen};
//   color: ${MidGreen};
//   padding: 0.6rem;
//   font-size: 0.68rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-align: center;
//   text-decoration: none;
//   text-transform: uppercase;
//   border-radius: 2px;
//   transition: all 0.2s;

//   &:hover {
//     background: ${WarmBg};
//   }
// `;

// const SolidCardBtn = styled(Link)`
//   background: ${MidGreen};
//   color: #ffffff;
//   padding: 0.6rem;
//   font-size: 0.68rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-align: center;
//   text-decoration: none;
//   text-transform: uppercase;
//   border-radius: 2px;
//   transition: opacity 0.2s;

//   &:hover {
//     opacity: 0.92;
//   }
// `;

// const TrustSection = styled.section`
//   margin-top: 6rem;
//   padding-top: 4rem;
//   border-top: 1px solid ${BorderColor};
// `;

// const ValueGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 1.25rem;
//   margin-top: 2.5rem;

//   @media (max-width: 900px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 500px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ValueCard = styled.div`
//   background: ${CardBg};
//   border: 1px solid ${BorderColor};
//   border-radius: 4px;
//   padding: 2rem 1.25rem;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   .icon-wrapper {
//     width: 44px;
//     height: 44px;
//     border-radius: 50%;
//     background: ${WarmBg};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-bottom: 1rem;
//     color: ${MidGreen};

//     svg {
//       width: 20px;
//       height: 20px;
//     }
//   }

//   h4 {
//     font-family: "Playfair Display", Georgia, serif;
//     font-size: 1.1rem;
//     font-weight: 500;
//     margin: 0 0 0.5rem 0;
//   }

//   p {
//     font-size: 0.8rem;
//     color: ${MutedText};
//     line-height: 1.5;
//     margin: 0;
//   }
// `;

// /* ================= BOOKING MODAL STYLES ================= */
// const ModalOverlay = styled.div`
//   position: fixed;
//   inset: 0;
//   background-color: rgba(0, 0, 0, 0.65);
//   backdrop-filter: blur(4px);
//   z-index: 9999;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 1.5rem;
//   box-sizing: border-box;
//   animation: fadeIn 0.2s ease-out;

//   @keyframes fadeIn {
//     from { opacity: 0; }
//     to { opacity: 1; }
//   }
// `;

// const BookingModalContainer = styled.div`
//   background: #ffffff;
//   width: 100%;
//   max-width: 520px;
//   border-radius: 4px;
//   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
//   padding: 2.5rem 2rem 2rem;
//   position: relative;
//   box-sizing: border-box;

//   @media (max-width: 600px) {
//     padding: 2rem 1.25rem 1.5rem;
//   }
// `;

// const CloseModalBtn = styled.button`
//   position: absolute;
//   top: 1.5rem;
//   right: 1.5rem;
//   background: transparent;
//   border: none;
//   font-size: 1.25rem;
//   color: ${MutedText};
//   cursor: pointer;
//   transition: color 0.2s;

//   &:hover {
//     color: ${DarkText};
//   }
// `;

// const ModalTitle = styled.h2`
//   font-family: "Playfair Display", Georgia, serif;
//   font-size: 1.8rem;
//   font-weight: 400;
//   color: ${DarkText};
//   margin: 0 0 0.2rem 0;
// `;

// const ModalSubtitle = styled.p`
//   font-size: 0.82rem;
//   color: ${MutedText};
//   margin: 0 0 1.5rem 0;
//   display: flex;
//   align-items: center;
//   gap: 4px;
// `;

// const FormRow = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 1rem;
//   margin-bottom: 1rem;

//   @media (max-width: 500px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.35rem;
//   margin-bottom: 1rem;

//   label {
//     font-size: 0.65rem;
//     font-weight: 700;
//     letter-spacing: 0.12em;
//     color: ${MutedText};
//     text-transform: uppercase;
//   }

//   input {
//     width: 100%;
//     padding: 0.85rem;
//     background-color: ${WarmBg};
//     border: 1px solid ${BorderColor};
//     border-radius: 2px;
//     font-size: 0.85rem;
//     color: ${DarkText};
//     outline: none;
//     box-sizing: border-box;

//     &::placeholder {
//       color: #aaa;
//     }

//     &:focus {
//       border-color: ${GoldAccent};
//     }
//   }
// `;

// const SummaryBox = styled.div`
//   background-color: ${WarmBg};
//   border-radius: 2px;
//   padding: 1.25rem;
//   margin: 1.5rem 0;
//   display: flex;
//   flex-direction: column;
//   gap: 0.75rem;
// `;

// const SummaryRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 0.85rem;
//   color: ${(p) => (p.$isTotal ? DarkText : MutedText)};
//   font-weight: ${(p) => (p.$isTotal ? "700" : "400")};
//   font-family: ${(p) => (p.$isTotal ? '"Playfair Display", Georgia, serif' : "inherit")};

//   .total-amount {
//     font-size: 1.15rem;
//     color: ${MidGreen};
//     font-weight: 700;
//   }
// `;

// const ConfirmPayBtn = styled.button`
//   width: 100%;
//   padding: 0.9rem;
//   background-color: ${GoldAccent};
//   color: #111827;
//   font-size: 0.75rem;
//   font-weight: 800;
//   letter-spacing: 0.15em;
//   text-transform: uppercase;
//   border: none;
//   border-radius: 2px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   transition: opacity 0.2s;

//   &:hover {
//     opacity: 0.92;
//   }
// `;

// /* ================= MAIN COMPONENT ================= */
// export default function ShortLetApartmentsPage() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Filter & Sorting States
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [locationInput, setLocationInput] = useState("");
//   const [guestsInput, setGuestsInput] = useState("2 Guests");
//   const [bedroomsInput, setBedroomsInput] = useState("Any");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [sortBy, setSortBy] = useState("Recommended");
// // Add this state near your other useState hooks
// const [bookingApartment, setBookingApartment] = useState(null);

// // 🌟 Replace static array with dynamic state
//   const [apartmentsData, setApartmentsData] = useState([]);
//   const [loading, setLoading] = useState(true);

// // Optional form state if you want to capture input values dynamically
// const [bookingForm, setBookingForm] = useState({
//   fullName: "",
//   phone: "",
//   email: "",
// });

// const handleOpenBookingModal = (apt, e) => {
//   e.preventDefault(); // Prevents default Link navigation
//   setBookingApartment(apt);
// };

// const handleCloseBookingModal = () => {
//   setBookingApartment(null);
//   setBookingForm({ fullName: "", phone: "", email: "" });
// };

// const handleBookingSubmit = (e) => {
//   e.preventDefault();
//   alert(`Booking request for ${bookingApartment.title} submitted!`);
//   handleCloseBookingModal();
// };



// // Fetch shortlets from Firestore on mount
//   useEffect(() => {
//     const fetchShortletsFromFirestore = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "shortlets"));
//         const fetchedList = querySnapshot.docs.map((docSnap) => {
//           const data = docSnap.data();
//           return {
//             id: docSnap.id,
//             title: data.title || "Luxury Apartment",
//             location: data.location || "Lagos",
//             bedrooms: Number(data.bedrooms) || 1,
//             guests: data.guests ? Number(data.guests) : 2,
//             price: Number(data.pricePerNight) || 0,
//             priceFormatted: data.priceFormatted || `₦${Number(data.pricePerNight || 0).toLocaleString()}`,
//             period: "night",
//             featured: true,
//             hasVideo: !!data.media?.video,
//             // Map your image fields from the CRUD manager (img1 or media.img1)
//             image: data.media?.img1 || data.img1 || "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
//             // Convert description or tags safely into an array of badge pills
//             tags: data.tags || ["24/7 POWER SUPPLY", "FREE WIFI", "SECURED AREA"],
//           };
//         });

//         setApartmentsData(fetchedList);
//       } catch (error) {
//         console.error("Error fetching shortlets:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchShortletsFromFirestore();
//   }, []);


//   // Calculate dynamic counts from fetched state
//   const totalCount = apartmentsData.length;
//   const count1Bed = apartmentsData.filter(a => a.bedrooms === 1).length;
//   const count2Bed = apartmentsData.filter(a => a.bedrooms === 2).length;
//   const count3Bed = apartmentsData.filter(a => a.bedrooms === 3).length;


//   // Auto-slide effect
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   const slide = heroSlides[currentSlide];

//   // Sync category tab with bedroom filter dropdown
//   const handleCategoryTabClick = (categoryKey, bedValue) => {
//     setSelectedCategory(categoryKey);
//     setBedroomsInput(bedValue);
//   };

//   // Filtering & Sorting Logic
//   const filteredApartments = apartmentsData
//     .filter((apt) => {
//       // Category / Bedroom Filter
//       if (selectedCategory === "1bed" && apt.bedrooms !== 1) return false;
//       if (selectedCategory === "2bed" && apt.bedrooms !== 2) return false;
//       if (selectedCategory === "3bed" && apt.bedrooms !== 3) return false;

//       // Dropdown Bedroom Filter
//       if (bedroomsInput === "1 Bedroom" && apt.bedrooms !== 1) return false;
//       if (bedroomsInput === "2 Bedrooms" && apt.bedrooms !== 2) return false;
//       if (bedroomsInput === "3 Bedrooms" && apt.bedrooms !== 3) return false;

//       // Location Filter
//       if (
//         locationInput.trim() &&
//         !apt.location.toLowerCase().includes(locationInput.trim().toLowerCase())
//       ) {
//         return false;
//       }

//       // Guests Filter (Extract numeric guest count)
//       const guestNum = parseInt(guestsInput) || 1;
//       if (apt.guests < guestNum) return false;

//       // Min Price Filter
//       if (minPrice && apt.price < Number(minPrice)) return false;

//       // Max Price Filter
//       if (maxPrice && apt.price > Number(maxPrice)) return false;

//       return true;
//     })
//     .sort((a, b) => {
//       if (sortBy === "Price: Low to High") return a.price - b.price;
//       if (sortBy === "Price: High to Low") return b.price - a.price;
//       return 0; // Recommended / Default
//     });

//   return (
//     <PageWrapper>
//       {/* 1. HERO SLIDER */}
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
//             <PrimaryBtn href={slide.primaryBtnLink}>
//               {slide.primaryBtnText} →
//             </PrimaryBtn>
//             <SecondaryBtn href={slide.secondaryBtnLink}>
//               {slide.secondaryBtnText}
//             </SecondaryBtn>
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

//         {/* 2. FLOATING FILTER BAR */}
//         <FloatingFilterWrapper>
//           <FilterGrid>
//             <FilterField>
//               <label>
//                 <MapPin /> LOCATION
//               </label>
//               <input
//                 type="text"
//                 placeholder="e.g. Magodo"
//                 value={locationInput}
//                 onChange={(e) => setLocationInput(e.target.value)}
//               />
//             </FilterField>

//             <FilterField>
//               <label>
//                 <Calendar /> CHECK-IN
//               </label>
//               <input type="date" />
//             </FilterField>

//             <FilterField>
//               <label>
//                 <Calendar /> CHECK-OUT
//               </label>
//               <input type="date" />
//             </FilterField>

//             <FilterField>
//               <label>
//                 <Users /> GUESTS
//               </label>
//               <select
//                 value={guestsInput}
//                 onChange={(e) => setGuestsInput(e.target.value)}
//               >
//                 <option value="1 Guest">1 Guest</option>
//                 <option value="2 Guests">2 Guests</option>
//                 <option value="3 Guests">3 Guests</option>
//                 <option value="4+ Guests">4+ Guests</option>
//               </select>
//             </FilterField>

//             <FilterField>
//               <label>
//                 <Bed/> BEDROOMS
//               </label>
//               <select
//                 value={bedroomsInput}
//                 onChange={(e) => {
//                   const val = e.target.value;
//                   setBedroomsInput(val);
//                   if (val === "Any") setSelectedCategory("all");
//                   if (val === "1 Bedroom") setSelectedCategory("1bed");
//                   if (val === "2 Bedrooms") setSelectedCategory("2bed");
//                   if (val === "3 Bedrooms") setSelectedCategory("3bed");
//                 }}
//               >
//                 <option value="Any">Any</option>
//                 <option value="1 Bedroom">1 Bedroom</option>
//                 <option value="2 Bedrooms">2 Bedrooms</option>
//                 <option value="3 Bedrooms">3 Bedrooms</option>
//               </select>
//             </FilterField>

//             <SearchBtn
//               style={{ gridColumn: "span 5" }}
//               onClick={() => {
//                 const element = document.getElementById("listings");
//                 if (element) element.scrollIntoView({ behavior: "smooth" });
//               }}
//             >
//               <Search style={{ width: "16px", height: "16px" }} /> SEARCH APARTMENTS
//             </SearchBtn>
//           </FilterGrid>
//         </FloatingFilterWrapper>
//       </HeroContainer>

//       {/* 3. MAIN CONTENT */}
//       <MainContent id="listings">
//         <SectionHeader>
//           <span className="tag">— BROWSE BY TYPE —</span>
//           <h2>Find the Right Space for Your Stay</h2>
//           <p>Explore apartments by bedroom count — filtered from our actual listings.</p>
//         </SectionHeader>

//         {/* CATEGORY TABS */}
//         <CategoryTabsGrid>
//           <TabCard
//             $active={selectedCategory === "all"}
//             onClick={() => handleCategoryTabClick("all", "Any")}
//           >
//             <div>
//               <div className="tab-title">All Apartments</div>
//               {/* <div className="tab-count">3 listings</div> */}
//               <div className="tab-count">{totalCount} listings</div>

//             </div>
//             <span className="arrow">{selectedCategory === "all" ? "✓" : "→"}</span>
//           </TabCard>

//           <TabCard
//             $active={selectedCategory === "1bed"}
//             onClick={() => handleCategoryTabClick("1bed", "1 Bedroom")}
//           >
//             <div>
//               <div className="tab-title">1-Bedroom</div>
//               {/* <div className="tab-count">{count1Bed} listing{count1Bed === 1 ? '' : 's'}</div> */}
//             </div>
//             <span className="arrow">{selectedCategory === "1bed" ? "✓" : "→"}</span>
//           </TabCard>

//           <TabCard
//             $active={selectedCategory === "2bed"}
//             onClick={() => handleCategoryTabClick("2bed", "2 Bedrooms")}
//           >
//             <div>
//               <div className="tab-title">2-Bedroom</div>
//               {/* <div className="tab-count">{count1Bed} listing{count1Bed === 2 ? '' : 's'}</div> */}
//             </div>
//             <span className="arrow">{selectedCategory === "2bed" ? "✓" : "→"}</span>
//           </TabCard>

//           <TabCard
//             $active={selectedCategory === "3bed"}
//             onClick={() => handleCategoryTabClick("3bed", "3 Bedrooms")}
//           >
//             <div>
//               <div className="tab-title">3-Bedroom</div>
//               {/* <div className="tab-count">{count1Bed} listing{count1Bed === 3 ? '' : 's'}</div> */}
//             </div>
//             <span className="arrow">{selectedCategory === "3bed" ? "✓" : "→"}</span>
//           </TabCard>
//         </CategoryTabsGrid>

//         {/* SORTING META BAR */}
//         <ListingMetaBar>
//           <div className="count">
//             {filteredApartments.length} apartment
//             {filteredApartments.length === 1 ? "" : "s"} available
//           </div>

//           <SortGroup>
//             <input
//               type="number"
//               placeholder="Min N"
//               value={minPrice}
//               onChange={(e) => setMinPrice(e.target.value)}
//             />
//             <span style={{ color: MutedText }}>—</span>
//             <input
//               type="number"
//               placeholder="Max N"
//               value={maxPrice}
//               onChange={(e) => setMaxPrice(e.target.value)}
//             />
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//             >
//               <option value="Recommended">Recommended</option>
//               <option value="Price: Low to High">Price: Low to High</option>
//               <option value="Price: High to Low">Price: High to Low</option>
//             </select>
//           </SortGroup>
//         </ListingMetaBar>

//         {/* APARTMENT CARDS */}
//        {loading ? (
//   <div style={{ textAlign: "center", padding: "4rem 0", color: MutedText }}>
//     <p>Loading available apartments...</p>
//   </div>
// ) :
//         filteredApartments.length > 0 ? (
//           <ListingsGrid>
//             {filteredApartments.map((apt) => (
//               <ApartmentCard key={apt.id}>
//                 <CardImageWrapper>
//                   <img src={apt.image} alt={apt.title} />
//                   {apt.featured && <span className="featured-badge">FEATURED</span>}
//                   {apt.hasVideo && (
//                     <span className="video-tag">
//                       <Play style={{ width: "12px", height: "12px" }} /> VIDEO TOUR
//                     </span>
//                   )}
//                 </CardImageWrapper>

//                 <CardBody>
//                   <ApartmentTitle>{apt.title}</ApartmentTitle>
//                   <LocationText>
//                     <MapPin style={{ width: "14px", height: "14px" }} /> {apt.location}
//                   </LocationText>

//                   <AmenityPills>
//                     {apt.tags.map((tag, idx) => (
//                       <Pill key={idx}>{tag}</Pill>
//                     ))}
//                   </AmenityPills>

//                   <PriceRow>
//                     <span className="amount">{apt.priceFormatted}</span>
//                     <span className="period">/{apt.period}</span>
//                   </PriceRow>

//                   <CardActions>
//                     <OutlineCardBtn href={`/apartments/${apt.id}`}>
//                       VIEW
//                     </OutlineCardBtn>
//                  <SolidCardBtn
//   href="#"
//   onClick={(e) => handleOpenBookingModal(apt, e)}
// >
//   BOOK
// </SolidCardBtn>
//                   </CardActions>
//                 </CardBody>
//               </ApartmentCard>
//             ))}
//           </ListingsGrid>
//         ) : (
//           <div style={{ textAlign: "center", padding: "4rem 0", color: MutedText }}>
//             <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
//               No apartments match your filter criteria.
//             </p>
//             <button
//               onClick={() => {
//                 setSelectedCategory("all");
//                 setLocationInput("");
//                 setGuestsInput("2 Guests");
//                 setBedroomsInput("Any");
//                 setMinPrice("");
//                 setMaxPrice("");
//                 setSortBy("Recommended");
//               }}
//               style={{
//                 background: MidGreen,
//                 color: "#fff",
//                 border: "none",
//                 padding: "0.6rem 1.2rem",
//                 borderRadius: "2px",
//                 cursor: "pointer",
//                 fontSize: "0.8rem",
//               }}
//             >
//               Reset Filters
//             </button>
//           </div>
//         )}

//         {/* 4. WHY BOOK WITH US SECTION */}
//         <TrustSection>
//           <SectionHeader style={{ marginBottom: "1.5rem" }}>
//             <span className="tag">— WHY BOOK WITH US —</span>
//             <h2>A Stay You Can Trust</h2>
//             <p>
//               Every apartment is held to the same high standard — comfortable, clearly presented and easy to enquire about.
//             </p>
//           </SectionHeader>

//           <ValueGrid>
//             <ValueCard>
//               <div className="icon-wrapper">
//                 <CheckCircle2 />
//               </div>
//               <h4>Comfortable Stays</h4>
//               <p>Well-presented, furnished apartments prepared for your visit.</p>
//             </ValueCard>

//             <ValueCard>
//               <div className="icon-wrapper">
//                 <Shield />
//               </div>
//               <h4>Clear Information</h4>
//               <p>Honest apartment details and media so you know what to expect.</p>
//             </ValueCard>

//             <ValueCard>
//               <div className="icon-wrapper">
//                 <Clock />
//               </div>
//               <h4>Flexible Options</h4>
//               <p>Suitable for families, couples and business travelers.</p>
//             </ValueCard>

//             <ValueCard>
//               <div className="icon-wrapper">
//                 <PhoneCall />
//               </div>
//               <h4>Responsive Support</h4>
//               <p>A friendly team ready to help with your enquiry.</p>
//             </ValueCard>
//           </ValueGrid>
//         </TrustSection>
//       </MainContent>
 
//  {/* BOOKING MODAL */}
// {bookingApartment && (
//   <ModalOverlay onClick={handleCloseBookingModal}>
//     <BookingModalContainer onClick={(e) => e.stopPropagation()}>
//       <CloseModalBtn onClick={handleCloseBookingModal}>✕</CloseModalBtn>

//       <ModalTitle>{bookingApartment.title}</ModalTitle>
//       <ModalSubtitle>
//         <MapPin style={{ width: "14px", height: "14px" }} /> {bookingApartment.location}
//       </ModalSubtitle>

//       <form onSubmit={handleBookingSubmit}>
//         <FormRow>
//           <InputGroup style={{ marginBottom: 0 }}>
//             <label>FULL NAME</label>
//             <input
//               type="text"
//               placeholder="Your name"
//               value={bookingForm.fullName}
//               onChange={(e) => setBookingForm({ ...bookingForm, fullName: e.target.value })}
//               required
//             />
//           </InputGroup>

//           <InputGroup style={{ marginBottom: 0 }}>
//             <label>PHONE</label>
//             <input
//               type="tel"
//               placeholder="Phone number"
//               value={bookingForm.phone}
//               onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
//               required
//             />
//           </InputGroup>
//         </FormRow>

//         <InputGroup>
//           <label>EMAIL</label>
//           <input
//             type="email"
//             placeholder="Email address"
//             value={bookingForm.email}
//             onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
//             required
//           />
//         </InputGroup>

//         {/* SUMMARY DETAILS */}
//         <SummaryBox>
//           <SummaryRow>
//             <span>Check-in</span>
//             <span>—</span>
//           </SummaryRow>
//           <SummaryRow>
//             <span>Check-out</span>
//             <span>—</span>
//           </SummaryRow>
//           <SummaryRow>
//             <span>Guests</span>
//             <span>{bookingApartment.guests}</span>
//           </SummaryRow>
//           <SummaryRow>
//             <span>Nights</span>
//             <span>—</span>
//           </SummaryRow>

//           <div style={{ borderTop: `1px solid ${BorderColor}`, margin: "0.25rem 0" }} />

//           <SummaryRow $isTotal>
//             <span>Total</span>
//             <span className="total-amount">{bookingApartment.priceFormatted}</span>
//           </SummaryRow>
//         </SummaryBox>

//         <ConfirmPayBtn type="submit">
//           CONFIRM & PAY →
//         </ConfirmPayBtn>
//       </form>
//     </BookingModalContainer>
//   </ModalOverlay>
// )}
//     </PageWrapper>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Users,
  Bed,
  Search,
  Play,
  CheckCircle2,
  Shield,
  Clock,
  PhoneCall,
} from "lucide-react";
import { secondaryColoring } from "@/components/Context";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";

/* ================= COLORS & BRANDING ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const DarkGreen = "#09281e";
const MidGreen = "#11382b";
const WarmBg = "#FAF8F4";
const CardBg = "#FFFFFF";
const DarkText = "#1A1A1A";
const MutedText = "#66625b";
const BorderColor = "#E2DDD5";

/* ================= SLIDE & LISTING DATA ================= */
const heroSlides = [
  {
    id: 1,
    tag: "SHORT-LET APARTMENTS",
    title: "Extended Stays, Made Simple",
    description: "Flexible weekly and monthly stays with full service.",
    primaryBtnText: "Explore",
    primaryBtnLink: "#listings",
    secondaryBtnText: "Enquire",
    secondaryBtnLink: "/contact",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 2,
    tag: "CURATED SPACES",
    title: "Luxury Living in Prime Locations",
    description: "Serene, fully serviced environments engineered for maximum comfort and relaxation.",
    primaryBtnText: "View Apartments",
    primaryBtnLink: "#listings",
    secondaryBtnText: "Book Consultation",
    secondaryBtnLink: "/contact",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 3,
    tag: "SERVICED SUITES",
    title: "Comfort & Elegance Combined",
    description: "24/7 power, high-speed Wi-Fi, premium entertainment, and dedicated security.",
    primaryBtnText: "Explore Collection",
    primaryBtnLink: "#listings",
    secondaryBtnText: "Contact Us",
    secondaryBtnLink: "/contact",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 4,
    tag: "EXECUTIVE HOMES",
    title: "Your Home Away From Home",
    description: "Designed for families, business travelers, and executive retreats.",
    primaryBtnText: "Browse Listings",
    primaryBtnLink: "#listings",
    secondaryBtnText: "Enquire Now",
    secondaryBtnLink: "/contact",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80')",
  },
];

/* ================= STYLED COMPONENTS ================= */
const PageWrapper = styled.div`
  width: 100%;
  background-color: ${WarmBg};
  color: ${DarkText};
  font-family: inherit;
`;

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
  padding: 5rem 4rem 10rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem 12rem;
    min-height: 520px;
  }
`;

const HeroContent = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: ${GoldAccent};
  text-transform: uppercase;

  .line {
    width: 22px;
    height: 1px;
    background: ${GoldAccent};
  }
`;

const HeroTitle = styled.h1`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1.12;
  color: #ffffff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1rem;
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

const PrimaryBtn = styled(Link)`
  background: ${GoldAccent};
  color: #111827;
  padding: 0.85rem 1.8rem;
  font-size: 0.75rem;
  font-weight: 700;
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

const SecondaryBtn = styled(Link)`
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0.85rem 1.8rem;
  font-size: 0.75rem;
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
  bottom: 8.5rem;
  left: 4rem;
  right: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    left: 1.5rem;
    right: 1.5rem;
    bottom: 11rem;
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
  width: 40px;
  height: 40px;
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

const FloatingFilterWrapper = styled.div`
  position: absolute;
  bottom: -3.5rem;
  left: 4rem;
  right: 4rem;
  background: ${CardBg};
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  padding: 1.5rem;
  z-index: 20;

  @media (max-width: 900px) {
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    margin: -3rem 1.5rem 0;
  }
`;

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: flex-end;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FilterField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: ${MutedText};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 5px;

    svg {
      width: 14px;
      height: 14px;
      color: ${GoldAccent};
    }
  }

  input,
  select {
    width: 100%;
    padding: 0.75rem 0.85rem;
    background-color: ${WarmBg};
    border: 1px solid ${BorderColor};
    border-radius: 2px;
    font-size: 0.85rem;
    color: ${DarkText};
    outline: none;
    box-sizing: border-box;

    &:focus {
      border-color: ${GoldAccent};
    }
  }
`;

const SearchBtn = styled.button`
  grid-column: span 1;
  width: 100%;
  padding: 0.85rem;
  background-color: ${MidGreen};
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.92;
  }

  @media (max-width: 1024px) {
    grid-column: span 2;
  }

  @media (max-width: 600px) {
    grid-column: span 1;
  }
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 6rem auto 4rem;
  padding: 0 1.5rem;
  box-sizing: border-box;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 2.5rem;

  .tag {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: ${GoldAccent};
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.2rem;
    font-weight: 400;
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 0.85rem;
    color: ${MutedText};
    margin: 0;
  }
`;

const CategoryTabsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 3.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const TabCard = styled.div`
  background: ${(p) => (p.$active ? MidGreen : CardBg)};
  color: ${(p) => (p.$active ? "#ffffff" : DarkText)};
  border: 1px solid ${(p) => (p.$active ? MidGreen : BorderColor)};
  border-radius: 4px;
  padding: 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .tab-title {
    font-size: 0.9rem;
    font-weight: 700;
  }

  .tab-count {
    font-size: 0.72rem;
    color: ${(p) => (p.$active ? "rgba(255,255,255,0.7)" : MutedText)};
  }

  .arrow {
    font-size: 1rem;
    color: ${(p) => (p.$active ? GoldAccent : MutedText)};
  }
`;

const ListingMetaBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  .count {
    font-size: 0.85rem;
    color: ${MutedText};
  }
`;

const SortGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  input {
    width: 90px;
    padding: 0.5rem 0.75rem;
    background: ${CardBg};
    border: 1px solid ${BorderColor};
    border-radius: 2px;
    font-size: 0.82rem;
  }

  select {
    padding: 0.5rem 0.75rem;
    background: ${CardBg};
    border: 1px solid ${BorderColor};
    border-radius: 2px;
    font-size: 0.82rem;
  }
`;

const ListingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ApartmentCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background-color: #eee;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .featured-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: ${GoldAccent};
    color: #111827;
    font-size: 0.6rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    padding: 3px 8px;
    border-radius: 2px;
  }

  .video-tag {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: #ffffff;
    font-size: 0.65rem;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const CardBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ApartmentTitle = styled.h3`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 0.3rem 0;
  color: ${DarkText};
`;

const LocationText = styled.p`
  font-size: 0.8rem;
  color: ${MutedText};
  margin: 0 0 0.8rem 0;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const AmenityPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1.25rem;
`;

const Pill = styled.span`
  background: ${WarmBg};
  color: ${DarkText};
  border: 1px solid ${BorderColor};
  font-size: 0.6rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 2px;
  letter-spacing: 0.05em;
`;

const PriceRow = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px dashed ${BorderColor};
  display: flex;
  align-items: baseline;
  gap: 4px;

  .amount {
    font-size: 1.15rem;
    font-weight: 700;
    color: ${DarkText};
  }

  .period {
    font-size: 0.75rem;
    color: ${MutedText};
  }
`;

const CardActions = styled.div`
  display: grid;
  // grid-template-columns: 1fr 1.2fr;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const OutlineCardBtn = styled(Link)`
  border: 1px solid ${MidGreen};
  color: ${MidGreen};
  padding: 0.6rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 2px;
  transition: all 0.2s;
  width:100%;

  &:hover {
    background: ${WarmBg};
  }
`;

const SolidCardBtn = styled(Link)`
  background: ${MidGreen};
  color: #ffffff;
  padding: 0.6rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 2px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.92;
  }
`;

const TrustSection = styled.section`
  margin-top: 6rem;
  padding-top: 4rem;
  border-top: 1px solid ${BorderColor};
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  padding: 2rem 1.25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon-wrapper {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: ${WarmBg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    color: ${MidGreen};

    svg {
      width: 20px;
      height: 20px;
    }
  }

  h4 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 0.8rem;
    color: ${MutedText};
    line-height: 1.5;
    margin: 0;
  }
`;

/* ================= BOOKING MODAL STYLES ================= */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  box-sizing: border-box;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const BookingModalContainer = styled.div`
  background: #ffffff;
  width: 100%;
  max-width: 520px;
  border-radius: 4px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  padding: 2.5rem 2rem 2rem;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 2rem 1.25rem 1.5rem;
  }
`;

const CloseModalBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  font-size: 1.25rem;
  color: ${MutedText};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${DarkText};
  }
`;

const ModalTitle = styled.h2`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: ${DarkText};
  margin: 0 0 0.2rem 0;
`;

const ModalSubtitle = styled.p`
  font-size: 0.82rem;
  color: ${MutedText};
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 1rem;

  label {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: ${MutedText};
    text-transform: uppercase;
  }

  input {
    width: 100%;
    padding: 0.85rem;
    background-color: ${WarmBg};
    border: 1px solid ${BorderColor};
    border-radius: 2px;
    font-size: 0.85rem;
    color: ${DarkText};
    outline: none;
    box-sizing: border-box;

    &::placeholder {
      color: #aaa;
    }

    &:focus {
      border-color: ${GoldAccent};
    }
  }
`;

const SummaryBox = styled.div`
  background-color: ${WarmBg};
  border-radius: 2px;
  padding: 1.25rem;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: ${(p) => (p.$isTotal ? DarkText : MutedText)};
  font-weight: ${(p) => (p.$isTotal ? "700" : "400")};
  font-family: ${(p) => (p.$isTotal ? '"Playfair Display", Georgia, serif' : "inherit")};

  .total-amount {
    font-size: 1.15rem;
    color: ${MidGreen};
    font-weight: 700;
  }
`;

const ConfirmPayBtn = styled.button`
  width: 100%;
  padding: 0.9rem;
  background-color: ${GoldAccent};
  color: #111827;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.92;
  }
`;

/* ================= MAIN COMPONENT ================= */
export default function ShortLetApartmentsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter & Sorting States
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [locationInput, setLocationInput] = useState("");
  const [guestsInput, setGuestsInput] = useState("2 Guests");
  const [bedroomsInput, setBedroomsInput] = useState("Any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("Recommended");

  // Modal and Data States
  const [bookingApartment, setBookingApartment] = useState(null);
  const [apartmentsData, setApartmentsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const handleOpenBookingModal = (apt, e) => {
    e.preventDefault();
    setBookingApartment(apt);
  };

  const handleCloseBookingModal = () => {
    setBookingApartment(null);
    setBookingForm({ fullName: "", phone: "", email: "" });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Booking request for ${bookingApartment.title} submitted successfully!`);
    handleCloseBookingModal();
  };

  // Fetch shortlets from Firestore on mount
  useEffect(() => {
    const fetchShortletsFromFirestore = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "shortlets"));
        const fetchedList = querySnapshot.docs.map((docSnap) => {
          const data = docSnap.data();
          return {
            id: docSnap.id,
            title: data.title || "Luxury Apartment",
            location: data.location || "Lagos",
            bedrooms: Number(data.bedrooms) || 1,
            guests: data.guests ? Number(data.guests) : 2,
            price: Number(data.pricePerNight) || 0,
            priceFormatted: data.priceFormatted || `₦${Number(data.pricePerNight || 0).toLocaleString()}`,
            period: "night",
            featured: true,
            hasVideo: !!data.media?.video,
            image: data.media?.img1 || data.img1 || "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
            tags: data.tags || ["24/7 POWER SUPPLY", "FREE WIFI", "SECURED AREA"],
          };
        });

        setApartmentsData(fetchedList);
      } catch (error) {
        console.error("Error fetching shortlets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShortletsFromFirestore();
  }, []);

  // Calculate dynamic counts from fetched state
  const totalCount = apartmentsData.length;
  const count1Bed = apartmentsData.filter((a) => a.bedrooms === 1).length;
  const count2Bed = apartmentsData.filter((a) => a.bedrooms === 2).length;
  const count3Bed = apartmentsData.filter((a) => a.bedrooms === 3).length;

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  // Sync category tab with bedroom filter dropdown
  const handleCategoryTabClick = (categoryKey, bedValue) => {
    setSelectedCategory(categoryKey);
    setBedroomsInput(bedValue);
  };

  // Filtering & Sorting Logic
  const filteredApartments = apartmentsData
    .filter((apt) => {
      if (selectedCategory === "1bed" && apt.bedrooms !== 1) return false;
      if (selectedCategory === "2bed" && apt.bedrooms !== 2) return false;
      if (selectedCategory === "3bed" && apt.bedrooms !== 3) return false;

      if (bedroomsInput === "1 Bedroom" && apt.bedrooms !== 1) return false;
      if (bedroomsInput === "2 Bedrooms" && apt.bedrooms !== 2) return false;
      if (bedroomsInput === "3 Bedrooms" && apt.bedrooms !== 3) return false;

      if (
        locationInput.trim() &&
        !apt.location.toLowerCase().includes(locationInput.trim().toLowerCase())
      ) {
        return false;
      }

      const guestNum = parseInt(guestsInput) || 1;
      if (apt.guests < guestNum) return false;

      if (minPrice && apt.price < Number(minPrice)) return false;
      if (maxPrice && apt.price > Number(maxPrice)) return false;

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      return 0;
    });

  return (
    <PageWrapper>
      {/* 1. HERO SLIDER */}
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
            <PrimaryBtn href={slide.primaryBtnLink}>
              {slide.primaryBtnText} →
            </PrimaryBtn>
            <SecondaryBtn href={slide.secondaryBtnLink}>
              {slide.secondaryBtnText}
            </SecondaryBtn>
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

        {/* 2. FLOATING FILTER BAR */}
        <FloatingFilterWrapper>
          <FilterGrid>
            <FilterField>
              <label>
                <MapPin /> LOCATION
              </label>
              <input
                type="text"
                placeholder="e.g. Lagos"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
              />
            </FilterField>

            <FilterField>
              <label>
                <Calendar /> CHECK-IN
              </label>
              <input type="date" />
            </FilterField>

            <FilterField>
              <label>
                <Calendar /> CHECK-OUT
              </label>
              <input type="date" />
            </FilterField>

            <FilterField>
              <label>
                <Users /> GUESTS
              </label>
              <select
                value={guestsInput}
                onChange={(e) => setGuestsInput(e.target.value)}
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4+ Guests">4+ Guests</option>
              </select>
            </FilterField>

            <FilterField>
              <label>
                <Bed /> BEDROOMS
              </label>
              <select
                value={bedroomsInput}
                onChange={(e) => {
                  const val = e.target.value;
                  setBedroomsInput(val);
                  if (val === "Any") setSelectedCategory("all");
                  if (val === "1 Bedroom") setSelectedCategory("1bed");
                  if (val === "2 Bedrooms") setSelectedCategory("2bed");
                  if (val === "3 Bedrooms") setSelectedCategory("3bed");
                }}
              >
                <option value="Any">Any</option>
                <option value="1 Bedroom">1 Bedroom</option>
                <option value="2 Bedrooms">2 Bedrooms</option>
                <option value="3 Bedrooms">3 Bedrooms</option>
              </select>
            </FilterField>

            <SearchBtn
              style={{ gridColumn: "span 5" }}
              onClick={() => {
                const element = document.getElementById("listings");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Search style={{ width: "16px", height: "16px" }} /> SEARCH APARTMENTS
            </SearchBtn>
          </FilterGrid>
        </FloatingFilterWrapper>
      </HeroContainer>

      {/* 3. MAIN CONTENT */}
      <MainContent id="listings">
        <SectionHeader>
          <span className="tag">— BROWSE BY TYPE —</span>
          <h2>Find the Right Space for Your Stay</h2>
          <p>Explore apartments by bedroom count — filtered from our live listings.</p>
        </SectionHeader>

        {/* CATEGORY TABS */}
        <CategoryTabsGrid>
          <TabCard
            $active={selectedCategory === "all"}
            onClick={() => handleCategoryTabClick("all", "Any")}
          >
            <div>
              <div className="tab-title">All Apartments</div>
              <div className="tab-count">{totalCount} listings</div>
            </div>
            <span className="arrow">{selectedCategory === "all" ? "✓" : "→"}</span>
          </TabCard>

          <TabCard
            $active={selectedCategory === "1bed"}
            onClick={() => handleCategoryTabClick("1bed", "1 Bedroom")}
          >
            <div>
              <div className="tab-title">1-Bedroom</div>
              <div className="tab-count">{count1Bed} listing{count1Bed === 1 ? "" : "s"}</div>
            </div>
            <span className="arrow">{selectedCategory === "1bed" ? "✓" : "→"}</span>
          </TabCard>

          <TabCard
            $active={selectedCategory === "2bed"}
            onClick={() => handleCategoryTabClick("2bed", "2 Bedrooms")}
          >
            <div>
              <div className="tab-title">2-Bedroom</div>
              <div className="tab-count">{count2Bed} listing{count2Bed === 1 ? "" : "s"}</div>
            </div>
            <span className="arrow">{selectedCategory === "2bed" ? "✓" : "→"}</span>
          </TabCard>

          <TabCard
            $active={selectedCategory === "3bed"}
            onClick={() => handleCategoryTabClick("3bed", "3 Bedrooms")}
          >
            <div>
              <div className="tab-title">3-Bedroom</div>
              <div className="tab-count">{count3Bed} listing{count3Bed === 1 ? "" : "s"}</div>
            </div>
            <span className="arrow">{selectedCategory === "3bed" ? "✓" : "→"}</span>
          </TabCard>
        </CategoryTabsGrid>

        {/* SORTING META BAR */}
        <ListingMetaBar>
          <div className="count">
            {filteredApartments.length} apartment
            {filteredApartments.length === 1 ? "" : "s"} available
          </div>

          <SortGroup>
            <input
              type="number"
              placeholder="Min ₦"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <span style={{ color: MutedText }}>—</span>
            <input
              type="number"
              placeholder="Max ₦"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Recommended">Recommended</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </SortGroup>
        </ListingMetaBar>

        {/* APARTMENT CARDS */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "4rem 0", color: MutedText }}>
            <p>Loading available apartments...</p>
          </div>
        ) : filteredApartments.length > 0 ? (
          <ListingsGrid>
            {filteredApartments.map((apt) => (
              <ApartmentCard key={apt.id}>
                <CardImageWrapper>
                  <img src={apt.image} alt={apt.title} />
                  {apt.featured && <span className="featured-badge">FEATURED</span>}
                  {apt.hasVideo && (
                    <span className="video-tag">
                      <Play style={{ width: "12px", height: "12px" }} /> VIDEO TOUR
                    </span>
                  )}
                </CardImageWrapper>

                <CardBody>
                  <ApartmentTitle>{apt.title}</ApartmentTitle>
                  <LocationText>
                    <MapPin style={{ width: "14px", height: "14px" }} /> {apt.location}
                  </LocationText>

                  <AmenityPills>
                    {apt.tags.map((tag, idx) => (
                      <Pill key={idx}>{tag}</Pill>
                    ))}
                  </AmenityPills>

                  <PriceRow>
                    <span className="amount">{apt.priceFormatted}</span>
                    <span className="period">/{apt.period}</span>
                  </PriceRow>

                  <CardActions>
                    <OutlineCardBtn href={`/apartments/${apt.id}`}>
                      VIEW
                    </OutlineCardBtn>
                    {/* <SolidCardBtn
                      href="#"
                      onClick={(e) => handleOpenBookingModal(apt, e)}
                    >
                      BOOK
                    </SolidCardBtn> */}
                  </CardActions>
                </CardBody>
              </ApartmentCard>
            ))}
          </ListingsGrid>
        ) : (
          <div style={{ textAlign: "center", padding: "4rem 0", color: MutedText }}>
            <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
              No apartments match your filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setLocationInput("");
                setGuestsInput("2 Guests");
                setBedroomsInput("Any");
                setMinPrice("");
                setMaxPrice("");
                setSortBy("Recommended");
              }}
              style={{
                background: MidGreen,
                color: "#fff",
                border: "none",
                padding: "0.6rem 1.2rem",
                borderRadius: "2px",
                cursor: "pointer",
                fontSize: "0.8rem",
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 4. WHY BOOK WITH US SECTION */}
        <TrustSection>
          <SectionHeader style={{ marginBottom: "1.5rem" }}>
            <span className="tag">— WHY BOOK WITH US —</span>
            <h2>A Stay You Can Trust</h2>
            <p>
              Every apartment is held to the same high standard — comfortable, clearly presented and easy to enquire about.
            </p>
          </SectionHeader>

          <ValueGrid>
            <ValueCard>
              <div className="icon-wrapper">
                <CheckCircle2 />
              </div>
              <h4>Comfortable Stays</h4>
              <p>Well-presented, furnished apartments prepared for your visit.</p>
            </ValueCard>

            <ValueCard>
              <div className="icon-wrapper">
                <Shield />
              </div>
              <h4>Clear Information</h4>
              <p>Honest apartment details and media so you know what to expect.</p>
            </ValueCard>

            <ValueCard>
              <div className="icon-wrapper">
                <Clock />
              </div>
              <h4>Flexible Options</h4>
              <p>Suitable for families, couples and business travelers.</p>
            </ValueCard>

            <ValueCard>
              <div className="icon-wrapper">
                <PhoneCall />
              </div>
              <h4>Responsive Support</h4>
              <p>A friendly team ready to help with your enquiry.</p>
            </ValueCard>
          </ValueGrid>
        </TrustSection>
      </MainContent>

      {/* BOOKING MODAL */}
      {bookingApartment && (
        <ModalOverlay onClick={handleCloseBookingModal}>
          <BookingModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseModalBtn onClick={handleCloseBookingModal}>✕</CloseModalBtn>

            <ModalTitle>{bookingApartment.title}</ModalTitle>
            <ModalSubtitle>
              <MapPin style={{ width: "14px", height: "14px" }} /> {bookingApartment.location}
            </ModalSubtitle>

            <form onSubmit={handleBookingSubmit}>
              <FormRow>
                <InputGroup style={{ marginBottom: 0 }}>
                  <label>FULL NAME</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={bookingForm.fullName}
                    onChange={(e) => setBookingForm({ ...bookingForm, fullName: e.target.value })}
                    required
                  />
                </InputGroup>

                <InputGroup style={{ marginBottom: 0 }}>
                  <label>PHONE</label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    required
                  />
                </InputGroup>
              </FormRow>

              <InputGroup>
                <label>EMAIL</label>
                <input
                  type="email"
                  placeholder="Email address"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                  required
                />
              </InputGroup>

              {/* SUMMARY DETAILS */}
              <SummaryBox>
                <SummaryRow>
                  <span>Check-in</span>
                  <span>—</span>
                </SummaryRow>
                <SummaryRow>
                  <span>Check-out</span>
                  <span>—</span>
                </SummaryRow>
                <SummaryRow>
                  <span>Guests</span>
                  <span>{bookingApartment.guests}</span>
                </SummaryRow>
                <SummaryRow>
                  <span>Nights</span>
                  <span>—</span>
                </SummaryRow>

                <div style={{ borderTop: `1px solid ${BorderColor}`, margin: "0.25rem 0" }} />

                <SummaryRow $isTotal>
                  <span>Total</span>
                  <span className="total-amount">{bookingApartment.priceFormatted}</span>
                </SummaryRow>
              </SummaryBox>

              <ConfirmPayBtn type="submit">
                CONFIRM & PAY →
              </ConfirmPayBtn>
            </form>
          </BookingModalContainer>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
}