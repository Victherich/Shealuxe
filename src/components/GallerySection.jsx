// "use client";

// import { useState, useEffect, useCallback } from "react";
// import styled from "styled-components";
// import Link from "next/link";
// import { secondaryColoring } from "./Context";
// import { db } from "@/firebaseConfig";
// import { collection, getDocs, query } from "firebase/firestore";

// /* ================= COLORS ================= */
// const GoldAccent = secondaryColoring || "#E2B04A";
// const GreenBtnBg = "#11382b";
// const DarkText = "#1A1A1A";
// const MutedText = "#706E6B";
// const LightBg = "#FAF8F4";
// const BorderColor = "#E2DDD5";

// /* ================= GALLERY CATEGORIES & IMAGES ================= */
// const galleryCategories = [
//   {
//     id: "properties",
//     tag: "PROPERTIES",
//     title: "Properties Gallery",
//     subtitle: "Bold property imagery for the Properties page.",
//     images: [
//       { id: "prop-1", title: "1000723447", url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80" },
//       { id: "prop-2", title: "1000723429", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" },
//       { id: "prop-3", title: "1000723430", url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80" },
//       { id: "prop-4", title: "1000723431", url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80" },
//       { id: "prop-5", title: "1000723432", url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80" },
//       { id: "prop-6", title: "1000723433", url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=80" },
//     ],
//   },
//   {
//     id: "bedroom",
//     tag: "BEDROOM",
//     title: "Bedroom",
//     subtitle: "Interior collection — Bedroom",
//     images: [
//       { id: "bed-1", title: "Bedroom", url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80" },
//       { id: "bed-2", title: "Bedroom", url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80" },
//       { id: "bed-3", title: "Bedroom", url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=1000&q=80" },
//       { id: "bed-4", title: "Bedroom", url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=80" },
//       { id: "bed-5", title: "Bedroom", url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80" },
//       { id: "bed-6", title: "Bedroom", url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80" },
//       { id: "bed-7", title: "Bedroom", url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80" },
//       { id: "bed-8", title: "Bedroom", url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80" },
//     ],
//   },
//   {
//     id: "living-room",
//     tag: "LIVING ROOM",
//     title: "Living Room",
//     subtitle: "Interior collection — Living Room",
//     images: [
//       { id: "lr-1", title: "Living Room", url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80" },
//       { id: "lr-2", title: "Living Room", url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80" },
//       { id: "lr-3", title: "Living Room", url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80" },
//       { id: "lr-4", title: "Living Room", url: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1000&q=80" },
//       { id: "lr-5", title: "Living Room", url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80" },
//       { id: "lr-6", title: "Living Room", url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80" },
//       { id: "lr-7", title: "Living Room", url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80" },
//       { id: "lr-8", title: "Living Room", url: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80" },
//     ],
//   },
//   {
//     id: "wall-decor",
//     tag: "WALL DÉCOR",
//     title: "Wall Decor",
//     subtitle: "Interior collection — Wall Decor",
//     images: [
//       { id: "wd-1", title: "Wall Decor", url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80" },
//       { id: "wd-2", title: "Wall Decor", url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80" },
//       { id: "wd-3", title: "Wall Decor", url: "https://images.unsplash.com/photo-1582582621959-48d273528920?auto=format&fit=crop&w=1000&q=80" },
//     ],
//   },
//   {
//     id: "dining-sets",
//     tag: "DINING SETS",
//     title: "Dining Sets",
//     subtitle: "Interior collection — Dining Sets",
//     images: [
//       { id: "ds-1", title: "Executive premium dining table", url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80" },
//       { id: "ds-2", title: "Executive premium dining table", url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80" },
//       { id: "ds-3", title: "Executive premium dining table", url: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80" },
//       { id: "ds-4", title: "Executive premium dining table", url: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80" },
//       { id: "ds-5", title: "Executive premium dining table", url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80" },
//       { id: "ds-6", title: "Executive premium dining table", url: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80" },
//       { id: "ds-7", title: "Executive premium dining table", url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80" },
//       { id: "ds-8", title: "Executive premium dining table", url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80" },
//       { id: "ds-9", title: "Executive premium dining table", url: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1000&q=80" },
//       { id: "ds-10", title: "Executive premium dining table", url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80" },
//     ],
//   },
//   {
//     id: "hallway",
//     tag: "HALLWAY",
//     title: "Hallway",
//     subtitle: "Interior collection — Hallway",
//     images: [
//       { id: "hw-1", title: "Beautiful hallway", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" },
//       { id: "hw-2", title: "Beautiful hallway", url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80" },
//       { id: "hw-3", title: "Beautiful hallway", url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80" },
//       { id: "hw-4", title: "Beautiful hallway", url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80" },
//       { id: "hw-5", title: "Beautiful hallway", url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=80" },
//       { id: "hw-6", title: "Beautiful hallway", url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80" },
//       { id: "hw-7", title: "Beautiful hallway", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" },
//       { id: "hw-8", title: "Beautiful hallway", url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80" },
//     ],
//   },
//   {
//     id: "tv-units",
//     tag: "TV UNITS",
//     title: "TV Units",
//     subtitle: "Interior collection — TV Units",
//     images: [
//       { id: "tv-1", title: "Beautiful TV unit", url: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1000&q=80" },
//       { id: "tv-2", title: "Beautiful TV unit", url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80" },
//       { id: "tv-3", title: "Beautiful TV unit", url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=80" },
//     ],
//   },
//   {
//     id: "centre-pieces",
//     tag: "CENTRE PIECES",
//     title: "Centre Pieces",
//     subtitle: "Interior collection — Centre Pieces",
//     images: [
//       { id: "cp-1", title: "Luxury centre pieces", url: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80" },
//       { id: "cp-2", title: "Luxury centre pieces", url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80" },
//       { id: "cp-3", title: "Luxury centre pieces", url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80" },
//       { id: "cp-4", title: "Luxury centre pieces", url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80" },
//       { id: "cp-5", title: "Luxury centre pieces", url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80" },
//       { id: "cp-6", title: "Luxury centre pieces", url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80" },
//       { id: "cp-7", title: "Luxury centre pieces", url: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80" },
//       { id: "cp-8", title: "Luxury centre pieces", url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80" },
//       { id: "cp-9", title: "Luxury centre pieces", url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80" },
//     ],
//   },
//   {
//     id: "mirrors",
//     tag: "MIRRORS",
//     title: "Mirrors",
//     subtitle: "Interior collection — Mirrors",
//     images: [
//       { id: "mir-1", title: "Bespoke Mirror", url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80" },
//       { id: "mir-2", title: "Bespoke Mirror", url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80" },
//       { id: "mir-3", title: "Bespoke Mirror", url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80" },
//     ],
//   },
//   {
//     id: "flowers-vases",
//     tag: "FLOWERS AND FLOWER VASE",
//     title: "Flowers and flower vase",
//     subtitle: "Interior collection — Flowers and Flower vase",
//     images: [
//       { id: "fl-1", title: "Beautiful flowers", url: "https://images.unsplash.com/photo-1582582621959-48d273528920?auto=format&fit=crop&w=1000&q=80" },
//       { id: "fl-2", title: "Beautiful flowers", url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80" },
//       { id: "fl-3", title: "Beautiful flowers", url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80" },
//       { id: "fl-4", title: "Beautiful flowers", url: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80" },
//       { id: "fl-5", title: "Beautiful flowers", url: "https://images.unsplash.com/photo-1582582621959-48d273528920?auto=format&fit=crop&w=1000&q=80" },
//       { id: "fl-6", title: "Beautiful flowers", url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80" },
//       { id: "fl-7", title: "Beautiful flowers", url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80" },
//       { id: "fl-8", title: "Beautiful flowers", url: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80" },
//       { id: "fl-9", title: "Beautiful flowers", url: "https://images.unsplash.com/photo-1582582621959-48d273528920?auto=format&fit=crop&w=1000&q=80" },
//     ],
//   },
//   {
//     id: "kitchen",
//     tag: "KITCHEN",
//     title: "Kitchen",
//     subtitle: "Interior collection — Kitchen",
//     images: [
//       { id: "kit-1", title: "Luxury kitchens", url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80" },
//       { id: "kit-2", title: "Luxury kitchens", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" },
//       { id: "kit-3", title: "Luxury kitchens", url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80" },
//       { id: "kit-4", title: "Luxury kitchens", url: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80" },
//       { id: "kit-5", title: "Luxury kitchens", url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80" },
//       { id: "kit-6", title: "Luxury kitchens", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" },
//       { id: "kit-7", title: "Luxury kitchens", url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80" },
//       { id: "kit-8", title: "Luxury kitchens", url: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80" },
//       { id: "kit-9", title: "Luxury kitchens", url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80" },
//     ],
//   },
//   {
//     id: "chairs",
//     tag: "CHAIRS",
//     title: "Chairs",
//     subtitle: "Interior collection — Chairs",
//     images: [
//       { id: "ch-1", title: "Luxury Chair", url: "https://images.unsplash.com/photo-1580481072645-022f9a6d8310?auto=format&fit=crop&w=1000&q=80" },
//       { id: "ch-2", title: "Luxury Chair", url: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80" },
//       { id: "ch-3", title: "Luxury Chair", url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80" },
//     ],
//   },
// ];

// /* ================= PAGE CONTAINERS ================= */
// const PageWrapper = styled.div`
//   width: 100%;
//   background-color: ${LightBg};
//   color: ${DarkText};
//   min-height: 100vh;
//   padding: 4rem 1.5rem 6rem;
//   box-sizing: border-box;
// `;

// const HeaderContainer = styled.div`
//   max-width: 900px;
//   margin: 0 auto 4rem;
//   text-align: center;
// `;

// const BackBtn = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   background: transparent;
//   border: 1px solid ${BorderColor};
//   color: ${DarkText};
//   padding: 0.5rem 1rem;
//   font-size: 0.65rem;
//   font-weight: 700;
//   letter-spacing: 0.15em;
//   text-transform: uppercase;
//   text-decoration: none;
//   border-radius: 2px;
//   margin-bottom: 2.5rem;
//   transition: all 0.2s ease;

//   &:hover {
//     border-color: ${GoldAccent};
//     color: ${GoldAccent};
//   }
// `;

// const HeaderTag = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 0.75rem;
//   font-size: 0.65rem;
//   font-weight: 700;
//   letter-spacing: 0.25em;
//   color: ${GoldAccent};
//   text-transform: uppercase;
//   margin-bottom: 0.6rem;

//   &::before,
//   &::after {
//     content: "";
//     width: 20px;
//     height: 1px;
//     background-color: ${GoldAccent};
//   }
// `;

// const MainHeading = styled.h1`
//   font-family: "Playfair Display", Georgia, serif;
//   font-size: 3rem;
//   font-weight: 400;
//   color: ${DarkText};
//   margin: 0 0 1rem 0;

//   @media (max-width: 768px) {
//     font-size: 2.2rem;
//   }
// `;

// const SubText = styled.p`
//   font-size: 0.88rem;
//   color: ${MutedText};
//   line-height: 1.6;
//   max-width: 600px;
//   margin: 0 auto;
//   font-weight: 300;
// `;

// /* ================= SECTION GRID ================= */
// const ContentSection = styled.section`
//   max-width: 1200px;
//   margin: 0 auto 5rem;
// `;

// const CategoryHeader = styled.div`
//   margin-bottom: 1.5rem;

//   .cat-tag {
//     font-size: 0.62rem;
//     font-weight: 700;
//     letter-spacing: 0.2em;
//     color: ${GoldAccent};
//     text-transform: uppercase;
//     display: block;
//     margin-bottom: 0.3rem;
//   }

//   h2 {
//     font-family: "Playfair Display", Georgia, serif;
//     font-size: 2rem;
//     font-weight: 400;
//     color: ${DarkText};
//     margin: 0 0 0.3rem 0;
//   }

//   p {
//     font-size: 0.8rem;
//     color: ${MutedText};
//     margin: 0;
//     font-weight: 300;
//   }
// `;

// const ImageGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 1.5rem;

//   @media (max-width: 900px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 550px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ImageCard = styled.div`
//   position: relative;
//   aspect-ratio: 4 / 5;
//   background-color: #e8e3da;
//   overflow: hidden;
//   border-radius: 2px;
//   cursor: pointer;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.5s ease;
//   }

//   .overlay {
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(
//       to top,
//       rgba(0, 0, 0, 0.85) 0%,
//       rgba(0, 0, 0, 0.1) 50%,
//       transparent 100%
//     );
//     display: flex;
//     align-items: flex-end;
//     padding: 1.25rem;
//     transition: opacity 0.3s ease;
//   }

//   .card-title {
//     font-family: "Playfair Display", Georgia, serif;
//     font-size: 1.15rem;
//     color: #ffffff;
//     font-weight: 400;
//     margin: 0;
//   }

//   &:hover {
//     img {
//       transform: scale(1.05);
//     }
//   }
// `;

// /* ================= LIGHTBOX MODAL ================= */
// const ModalOverlay = styled.div`
//   position: fixed;
//   inset: 0;
//   background-color: rgba(10, 10, 10, 0.94);
//   backdrop-filter: blur(8px);
//   z-index: 9999;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 1.5rem;
//   box-sizing: border-box;
//   animation: fadeIn 0.25s ease forwards;

//   @keyframes fadeIn {
//     from { opacity: 0; }
//     to { opacity: 1; }
//   }
// `;

// const ModalHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   color: #ffffff;

//   .category-meta {
//     span.tag {
//       font-size: 0.65rem;
//       font-weight: 700;
//       letter-spacing: 0.2em;
//       color: ${GoldAccent};
//       text-transform: uppercase;
//       display: block;
//     }
//     h3 {
//       font-family: "Playfair Display", Georgia, serif;
//       font-size: 1.4rem;
//       font-weight: 400;
//       margin: 0;
//     }
//   }
// `;

// const CloseButton = styled.button`
//   background: transparent;
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   color: #ffffff;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   font-size: 1.2rem;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.2s ease;

//   &:hover {
//     background: ${GoldAccent};
//     border-color: ${GoldAccent};
//     color: #111827;
//   }
// `;

// const ModalStage = styled.div`
//   position: relative;
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 1rem 0;
// `;

// const ActiveImage = styled.img`
//   max-width: 85vw;
//   max-height: 65vh;
//   object-fit: contain;
//   box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
//   border-radius: 2px;
// `;

// const ArrowNav = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   ${(p) => (p.$left ? "left: 1rem;" : "right: 1rem;")}
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
//   background: rgba(255, 255, 255, 0.1);
//   border: 1px solid rgba(255, 255, 255, 0.25);
//   color: #ffffff;
//   font-size: 1.2rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   z-index: 10;

//   &:hover {
//     background: ${GoldAccent};
//     border-color: ${GoldAccent};
//     color: #111827;
//   }
// `;

// const ModalFooter = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;
// `;

// const ImageInfoBar = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   max-width: 900px;
//   color: #ffffff;

//   .counter {
//     font-size: 0.8rem;
//     font-weight: 600;
//     letter-spacing: 0.15em;
//     color: ${GoldAccent};
//   }

//   .title {
//     font-family: "Playfair Display", Georgia, serif;
//     font-size: 1.1rem;
//   }
// `;

// const BookConsultBtn = styled(Link)`
//   background: ${GreenBtnBg};
//   border: 1px solid ${GoldAccent};
//   color: ${GoldAccent};
//   padding: 0.75rem 1.8rem;
//   font-size: 0.72rem;
//   font-weight: 700;
//   letter-spacing: 0.15em;
//   text-transform: uppercase;
//   text-decoration: none;
//   border-radius: 2px;
//   transition: all 0.2s ease;

//   &:hover {
//     background: ${GoldAccent};
//     color: #111827;
//   }
// `;

// const ThumbnailsStrip = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   overflow-x: auto;
//   max-width: 900px;
//   padding-bottom: 0.4rem;

//   &::-webkit-scrollbar {
//     height: 4px;
//   }
//   &::-webkit-scrollbar-thumb {
//     background: ${GoldAccent};
//   }
// `;

// const Thumb = styled.img`
//   width: 50px;
//   height: 50px;
//   object-fit: cover;
//   border-radius: 2px;
//   cursor: pointer;
//   opacity: ${(p) => (p.$active ? 1 : 0.4)};
//   border: ${(p) => (p.$active ? `2px solid ${GoldAccent}` : "2px solid transparent")};
//   transition: all 0.2s ease;

//   &:hover {
//     opacity: 1;
//   }
// `;

// /* ================= MAIN COMPONENT ================= */
// export default function GallerySection() {
//   const [activeGroup, setActiveGroup] = useState(null);
//   const [activeImageIndex, setActiveImageIndex] = useState(0);

//   const [galleryCategories, setGalleryCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchGallery = async () => {
//       try {
//         const querySnapshot = await getDocs(query(collection(db, "galleryImages")));
//         const fetchedImages = [];
//         querySnapshot.forEach((doc) => {
//           fetchedImages.push({ id: doc.id, ...doc.data() });
//         });

//         // Base static category structure mapping
//         const baseCategories = [
//           { id: "properties", tag: "PROPERTIES", title: "Properties Gallery", subtitle: "Bold property imagery for the Properties page." },
//           { id: "bedroom", tag: "BEDROOM", title: "Bedroom", subtitle: "Interior collection — Bedroom" },
//           { id: "living-room", tag: "LIVING ROOM", title: "Living Room", subtitle: "Interior collection — Living Room" },
//           { id: "wall-decor", tag: "WALL DÉCOR", title: "Wall Decor", subtitle: "Interior collection — Wall Decor" },
//           { id: "dining-sets", tag: "DINING SETS", title: "Dining Sets", subtitle: "Interior collection — Dining Sets" },
//           { id: "hallway", tag: "HALLWAY", title: "Hallway", subtitle: "Interior collection — Hallway" },
//           { id: "tv-units", tag: "TV UNITS", title: "TV Units", subtitle: "Interior collection — TV Units" },
//           { id: "centre-pieces", tag: "CENTRE PIECES", title: "Centre Pieces", subtitle: "Interior collection — Centre Pieces" },
//           { id: "mirrors", tag: "MIRRORS", title: "Mirrors", subtitle: "Interior collection — Mirrors" },
//           { id: "flowers-vases", tag: "FLOWERS AND FLOWER VASE", title: "Flowers and flower vase", subtitle: "Interior collection — Flowers and Flower vase" },
//           { id: "kitchen", tag: "KITCHEN", title: "Kitchen", subtitle: "Interior collection — Kitchen" },
//           { id: "chairs", tag: "CHAIRS", title: "Chairs", subtitle: "Interior collection — Chairs" },
//         ];

//         // Group fetched images by categoryId
//         const structured = baseCategories.map((cat) => ({
//           ...cat,
//           images: fetchedImages.filter((img) => img.categoryId === cat.id),
//         }));

//         setGalleryCategories(structured);
//       } catch (error) {
//         console.error("Error fetching gallery:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGallery();
//   }, []);






//   const openLightbox = (category, index) => {
//     setActiveGroup(category);
//     setActiveImageIndex(index);
//   };

//   const closeLightbox = () => {
//     setActiveGroup(null);
//     setActiveImageIndex(0);
//   };

//   const handlePrev = useCallback(() => {
//     if (!activeGroup) return;
//     setActiveImageIndex((prev) =>
//       prev === 0 ? activeGroup.images.length - 1 : prev - 1
//     );
//   }, [activeGroup]);

//   const handleNext = useCallback(() => {
//     if (!activeGroup) return;
//     setActiveImageIndex((prev) => (prev + 1) % activeGroup.images.length);
//   }, [activeGroup]);

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!activeGroup) return;
//       if (e.key === "Escape") closeLightbox();
//       if (e.key === "ArrowLeft") handlePrev();
//       if (e.key === "ArrowRight") handleNext();
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [activeGroup, handlePrev, handleNext]);

//   return (
//     <PageWrapper id="gallery">
//       {/* PAGE HEADER */}
//     {window.location.pathname==='/gallery' && <HeaderContainer>
  
//         <br />
//         <HeaderTag>SHOWCASE</HeaderTag>
//         <MainHeading>Galleries & Collections</MainHeading>
//         <SubText>
//           A curated visual journey across our interior projects, properties and lifestyle work. Tap any image to view it, then tap Book Consultation to enquire about that design.
//         </SubText>
//       </HeaderContainer>}

// {window.location.pathname==='/gallery'&&<>
//        {loading ? (
//         <div style={{ textAlign: "center", padding: "4rem 0", color: MutedText }}>
//           Loading collections...
//         </div>
//       ) : (
//         galleryCategories
//           .filter((category) => category.images.length > 0) // Optional: hides empty categories
//           .map((category) => (
//             <ContentSection key={category.id} id={category.id}>
//               <CategoryHeader>
//                 <span className="cat-tag">{category.tag}</span>
//                 <h2>{category.title}</h2>
//                 <p>{category.subtitle}</p>
//               </CategoryHeader>

//               <ImageGrid>
//                 {category.images.map((img, idx) => (
//                   <ImageCard
//                     key={img.id}
//                     onClick={() => openLightbox(category, idx)}
//                   >
//                     <img src={img.url} alt={img.title} loading="lazy" />
//                     <div className="overlay">
//                       <h3 className="card-title">{img.title}</h3>
//                     </div>
//                   </ImageCard>
//                 ))}
//               </ImageGrid>
//             </ContentSection>
//           ))
//       )} 
//       </>}


// {window.location.pathname==='/properties'&&<>
//         {loading ? (
//         <div style={{ textAlign: "center", padding: "4rem 0", color: MutedText }}>
//           Loading collections...
//         </div>
//       ) : (
//         galleryCategories.slice(0,1)
//           .filter((category) => category.images.length > 0) // Optional: hides empty categories
//           .map((category) => (
//             <ContentSection key={category.id} id={category.id}>
//               {/* <CategoryHeader>
//                 <span className="cat-tag">{category.tag}</span>
//                 <h2>{category.title}</h2>
//                 <p>{category.subtitle}</p>
//               </CategoryHeader> */}

//               <ImageGrid>
//                 {category.images.map((img, idx) => (
//                   <ImageCard
//                     key={img.id}
//                     onClick={() => openLightbox(category, idx)}
//                   >
//                     <img src={img.url} alt={img.title} loading="lazy" />
//                     <div className="overlay">
//                       <h3 className="card-title">{img.title}</h3>
//                     </div>
//                   </ImageCard>
//                 ))}
//               </ImageGrid>
//             </ContentSection>
//           ))
//       )}
// </>}
//       {/* LIGHTBOX MODAL */}
//       {activeGroup && (
//         <ModalOverlay>
//           <ModalHeader>
//             <div className="category-meta">
//               <span className="tag">{activeGroup.tag}</span>
//               <h3>{activeGroup.title}</h3>
//             </div>
//             <CloseButton onClick={closeLightbox}>✕</CloseButton>
//           </ModalHeader>

//           <ModalStage>
//             <ArrowNav $left onClick={handlePrev}>
//               ‹
//             </ArrowNav>

//             <ActiveImage
//               src={activeGroup.images[activeImageIndex].url}
//               alt={activeGroup.images[activeImageIndex].title}
//             />

//             <ArrowNav onClick={handleNext}>
//               ›
//             </ArrowNav>
//           </ModalStage>

//           <ModalFooter>
//             <ImageInfoBar>
//               <span className="title">
//                 {activeGroup.images[activeImageIndex].title}
//               </span>
//               {/* <BookConsultBtn href="/book-consultation">
//                 BOOK CONSULTATION →
//               </BookConsultBtn> */}
//               <span className="counter">
//                 0{activeImageIndex + 1} / 0{activeGroup.images.length}
//               </span>
//             </ImageInfoBar>

//             {/* THUMBNAIL PREVIEW BAR */}
//             <ThumbnailsStrip>
//               {activeGroup.images.map((img, idx) => (
//                 <Thumb
//                   key={img.id}
//                   src={img.url}
//                   $active={idx === activeImageIndex}
//                   onClick={() => setActiveImageIndex(idx)}
//                 />
//               ))}
//             </ThumbnailsStrip>
//           </ModalFooter>
//         </ModalOverlay>
//       )}
//     </PageWrapper>
//   );
// }


"use client";

import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import { secondaryColoring } from "./Context";
import { db } from "@/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

/* ================= COLORS ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const GreenBtnBg = "#11382b";
const DarkText = "#1A1A1A";
const MutedText = "#706E6B";
const LightBg = "#FAF8F4";
const BorderColor = "#E2DDD5";

/* ================= PAGE CONTAINERS ================= */
const PageWrapper = styled.div`
  width: 100%;
  background-color: ${LightBg};
  color: ${DarkText};
  min-height: 100vh;
  padding: 4rem 1.5rem 6rem;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
`;

const HeaderTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  color: ${GoldAccent};
  text-transform: uppercase;
  margin-bottom: 0.6rem;

  &::before,
  &::after {
    content: "";
    width: 20px;
    height: 1px;
    background-color: ${GoldAccent};
  }
`;

const MainHeading = styled.h1`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 3rem;
  font-weight: 400;
  color: ${DarkText};
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubText = styled.p`
  font-size: 0.88rem;
  color: ${MutedText};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 300;
`;

/* ================= SECTION GRID ================= */
const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 5rem;
`;

const CategoryHeader = styled.div`
  margin-bottom: 1.5rem;

  .cat-tag {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: ${GoldAccent};
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.3rem;
  }

  h2 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2rem;
    font-weight: 400;
    color: ${DarkText};
    margin: 0 0 0.3rem 0;
  }

  p {
    font-size: 0.8rem;
    color: ${MutedText};
    margin: 0;
    font-weight: 300;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const ImageCard = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  background-color: #e8e3da;
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      transparent 100%
    );
    display: flex;
    align-items: flex-end;
    padding: 1.25rem;
    transition: opacity 0.3s ease;
  }

  .card-title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.15rem;
    color: #ffffff;
    font-weight: 400;
    margin: 0;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

/* ================= LIGHTBOX MODAL ================= */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(10, 10, 10, 0.94);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  box-sizing: border-box;
  animation: fadeIn 0.25s ease forwards;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;

  .category-meta {
    span.tag {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: ${GoldAccent};
      text-transform: uppercase;
      display: block;
    }
    h3 {
      font-family: "Playfair Display", Georgia, serif;
      font-size: 1.4rem;
      font-weight: 400;
      margin: 0;
    }
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${GoldAccent};
    border-color: ${GoldAccent};
    color: #111827;
  }
`;

const ModalStage = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const ActiveImage = styled.img`
  max-width: 85vw;
  max-height: 65vh;
  object-fit: contain;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
`;

const ArrowNav = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(p) => (p.$left ? "left: 1rem;" : "right: 1rem;")}
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: ${GoldAccent};
    border-color: ${GoldAccent};
    color: #111827;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ImageInfoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  color: #ffffff;

  .counter {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: ${GoldAccent};
  }

  .title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.1rem;
  }
`;

const ThumbnailsStrip = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  max-width: 900px;
  padding-bottom: 0.4rem;

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${GoldAccent};
  }
`;

const Thumb = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 2px;
  cursor: pointer;
  opacity: ${(p) => (p.$active ? 1 : 0.4)};
  border: ${(p) => (p.$active ? `2px solid ${GoldAccent}` : "2px solid transparent")};
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

/* ================= MAIN COMPONENT ================= */
export default function GallerySection() {
  const [activeGroup, setActiveGroup] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [galleryCategories, setGalleryCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState("");

  // Safely check path after mount to prevent SSR window reference crashes
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const querySnapshot = await getDocs(query(collection(db, "galleryImages")));
        const fetchedImages = [];
        querySnapshot.forEach((doc) => {
          fetchedImages.push({ id: doc.id, ...doc.data() });
        });

        // Base static category structure mapping
        const baseCategories = [
          { id: "properties", tag: "PROPERTIES", title: "Properties Gallery", subtitle: "Bold property imagery for the Properties page." },
          { id: "bedroom", tag: "BEDROOM", title: "Bedroom", subtitle: "Interior collection — Bedroom" },
          { id: "living-room", tag: "LIVING ROOM", title: "Living Room", subtitle: "Interior collection — Living Room" },
          { id: "wall-decor", tag: "WALL DÉCOR", title: "Wall Decor", subtitle: "Interior collection — Wall Decor" },
          { id: "dining-sets", tag: "DINING SETS", title: "Dining Sets", subtitle: "Interior collection — Dining Sets" },
          { id: "hallway", tag: "HALLWAY", title: "Hallway", subtitle: "Interior collection — Hallway" },
          { id: "tv-units", tag: "TV UNITS", title: "TV Units", subtitle: "Interior collection — TV Units" },
          { id: "centre-pieces", tag: "CENTRE PIECES", title: "Centre Pieces", subtitle: "Interior collection — Centre Pieces" },
          { id: "mirrors", tag: "MIRRORS", title: "Mirrors", subtitle: "Interior collection — Mirrors" },
          { id: "flowers-vases", tag: "FLOWERS AND FLOWER VASE", title: "Flowers and flower vase", subtitle: "Interior collection — Flowers and Flower vase" },
          { id: "kitchen", tag: "KITCHEN", title: "Kitchen", subtitle: "Interior collection — Kitchen" },
          { id: "chairs", tag: "CHAIRS", title: "Chairs", subtitle: "Interior collection — Chairs" },
        ];

        // Group fetched images by categoryId
        const structured = baseCategories.map((cat) => ({
          ...cat,
          images: fetchedImages.filter((img) => img.categoryId === cat.id),
        }));

        setGalleryCategories(structured);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const openLightbox = (category, index) => {
    setActiveGroup(category);
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveGroup(null);
    setActiveImageIndex(0);
  };

  const handlePrev = useCallback(() => {
    if (!activeGroup) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? activeGroup.images.length - 1 : prev - 1
    );
  }, [activeGroup]);

  const handleNext = useCallback(() => {
    if (!activeGroup) return;
    setActiveImageIndex((prev) => (prev + 1) % activeGroup.images.length);
  }, [activeGroup]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeGroup) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGroup, handlePrev, handleNext]);

  return (
    <PageWrapper id="gallery">
      {/* PAGE HEADER */}
      {currentPath === '/gallery' && (
        <HeaderContainer>
          <br />
          <HeaderTag>SHOWCASE</HeaderTag>
          <MainHeading>Galleries & Collections</MainHeading>
          <SubText>
            A curated visual journey across our interior projects, properties and lifestyle work. Tap any image to view it, then tap Book Consultation to enquire about that design.
          </SubText>
        </HeaderContainer>
      )}

      {currentPath === '/gallery' && (
        <>
          {loading ? (
            <div style={{ textAlign: "center", padding: "4rem 0", color: MutedText }}>
              Loading collections...
            </div>
          ) : (
            galleryCategories
              .filter((category) => category.images.length > 0)
              .map((category) => (
                <ContentSection key={category.id} id={category.id}>
                  <CategoryHeader>
                    <span className="cat-tag">{category.tag}</span>
                    <h2>{category.title}</h2>
                    <p>{category.subtitle}</p>
                  </CategoryHeader>

                  <ImageGrid>
                    {category.images.map((img, idx) => (
                      <ImageCard
                        key={img.id}
                        onClick={() => openLightbox(category, idx)}
                      >
                        <img src={img.url} alt={img.title} loading="lazy" />
                        <div className="overlay">
                          <h3 className="card-title">{img.title}</h3>
                        </div>
                      </ImageCard>
                    ))}
                  </ImageGrid>
                </ContentSection>
              ))
          )} 
        </>
      )}

      {currentPath === '/properties' && (
        <>
          {loading ? (
            <div style={{ textAlign: "center", padding: "4rem 0", color: MutedText }}>
              Loading collections...
            </div>
          ) : (
            galleryCategories.slice(0, 1)
              .filter((category) => category.images.length > 0)
              .map((category) => (
                <ContentSection key={category.id} id={category.id}>
                  <ImageGrid>
                    {category.images.map((img, idx) => (
                      <ImageCard
                        key={img.id}
                        onClick={() => openLightbox(category, idx)}
                      >
                        <img src={img.url} alt={img.title} loading="lazy" />
                        <div className="overlay">
                          <h3 className="card-title">{img.title}</h3>
                        </div>
                      </ImageCard>
                    ))}
                  </ImageGrid>
                </ContentSection>
              ))
          )}
        </>
      )}

      {/* LIGHTBOX MODAL */}
      {activeGroup && (
        <ModalOverlay>
          <ModalHeader>
            <div className="category-meta">
              <span className="tag">{activeGroup.tag}</span>
              <h3>{activeGroup.title}</h3>
            </div>
            <CloseButton onClick={closeLightbox}>✕</CloseButton>
          </ModalHeader>

          <ModalStage>
            <ArrowNav $left onClick={handlePrev}>
              ‹
            </ArrowNav>

            <ActiveImage
              src={activeGroup.images[activeImageIndex].url}
              alt={activeGroup.images[activeImageIndex].title}
            />

            <ArrowNav onClick={handleNext}>
              ›
            </ArrowNav>
          </ModalStage>

          <ModalFooter>
            <ImageInfoBar>
              <span className="title">
                {activeGroup.images[activeImageIndex].title}
              </span>
              <span className="counter">
                0{activeImageIndex + 1} / 0{activeGroup.images.length}
              </span>
            </ImageInfoBar>

            {/* THUMBNAIL PREVIEW BAR */}
            <ThumbnailsStrip>
              {activeGroup.images.map((img, idx) => (
                <Thumb
                  key={img.id}
                  src={img.url}
                  $active={idx === activeImageIndex}
                  onClick={() => setActiveImageIndex(idx)}
                />
              ))}
            </ThumbnailsStrip>
          </ModalFooter>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
}