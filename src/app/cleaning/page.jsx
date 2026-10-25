"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  Sparkles,
  Briefcase,
  UserCheck,
  Calendar,
  Clock,
  MessageSquare,
  Mail,
  Send,
  Plus,
  Minus,
} from "lucide-react";
import { secondaryColoring } from "@/components/Context";
import Swal from 'sweetalert2'

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
    tag: "CLEANING SERVICES",
    title: "Deep Cleaning, Done Right",
    description: "Move-in, move-out and deep cleaning that meets the highest standard.",
    primaryBtnText: "Book Deep Clean",
    primaryBtnLink: "#hourly-calculator",
    secondaryBtnText: "Our Services",
    secondaryBtnLink: "#services",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 2,
    tag: "RESIDENTIAL & COMMERCIAL",
    title: "A Spotless Space, Every Time",
    description: "Consistent, thorough cleaning tailored for homes, offices and corporate facilities.",
    primaryBtnText: "Explore Options",
    primaryBtnLink: "#services",
    secondaryBtnText: "Hire A Cleaner",
    secondaryBtnLink: "#hourly-calculator",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 3,
    tag: "POST-CONSTRUCTION & SHORT-LET",
    title: "Turnkey Cleanliness & Care",
    description: "From post-renovation reset to seamless Airbnb turnarounds, we handle the hard work.",
    primaryBtnText: "Book Appointment",
    primaryBtnLink: "#hourly-calculator",
    secondaryBtnText: "View Packages",
    secondaryBtnLink: "#services",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 4,
    tag: "JOIN OUR NETWORK",
    title: "Professional & Vetted Teams",
    description: "Register as a certified cleaner or book top-tier professional cleaning on demand.",
    primaryBtnText: "Become a Cleaner",
    primaryBtnLink: "#register-cleaner",
    secondaryBtnText: "Contact Us",
    secondaryBtnLink: "/contact",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1920&q=80')",
  },
];

/* ================= SERVICES DATA ================= */
const cleaningServices = [
  {
    id: "RESIDENTIAL CLEANING",
    title: "Residential Cleaning",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "OFFICE CLEANING",
    title: "Office Cleaning",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "DEEP CLEANING",
    title: "Deep Cleaning",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "MOVE-IN / MOVE-OUT",
    title: "Move-In / Move-Out",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "POST-CONSTRUCTION",
    title: "Post-Construction",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "AIRBNB / SHORT-LET",
    title: "Airbnb / Short-Let",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
];

const cleanerServicePills = [
  "MOVING HOUSE CLEANING",
  "END OF TENANCY CLEANING",
  "SHORT-LET APARTMENT CLEANING",
  "COMMERCIAL CLEANING",
  "WEEKLY / MONTHLY CLEANING",
  "ONE-OFF CLEANING",
];

/* ================= STYLED COMPONENTS ================= */
const PageWrapper = styled.div`
  width: 100%;
  background-color: ${WarmBg};
  color: ${DarkText};
  font-family: inherit;
`;

/* ----- HERO STYLES ----- */
const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 560px;
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

const PrimaryGoldBtn = styled(Link)`
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

const SecondaryOutlineBtn = styled(Link)`
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

/* ----- SERVICES SHOWCASE STYLES ----- */
const SectionContainer = styled.section`
  max-width: 1100px;
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

const ServiceGrid = styled.div`
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
  aspect-ratio: 4 / 4.2;
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
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.2) 60%,
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
    margin: 0 0 1rem 0;
  }

  .action-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const CardGoldBtn = styled.button`
  background: ${GoldAccent};
  color: #111827;
  padding: 0.6rem 0.8rem;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const CardTextBtn = styled(Link)`
  color: #ffffff;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0.85;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

/* ----- GREEN PLATFORM CTA SECTION ----- */
const PlatformSection = styled.section`
  background-color: ${DarkGreen};
  color: #ffffff;
  padding: 5rem 1.5rem;
  width: 100%;
  box-sizing: border-box;
`;

const PlatformHeader = styled.div`
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
    margin: 0 0 0.8rem 0;
    color: #ffffff;
  }

  p {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.6;
    margin: 0;
    font-weight: 300;
  }
`;

const DualCardGrid = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const PlatformCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 2.5rem 1.75rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .icon-circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid ${GoldAccent};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${GoldAccent};
    margin-bottom: 1.25rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  h3 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.35rem;
    font-weight: 400;
    color: #ffffff;
    margin: 0 0 0.6rem 0;
  }

  p {
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
    margin: 0 0 1.5rem 0;
    font-weight: 300;
  }
`;

const SolidGoldBtn = styled.a`
  width: 100%;
  padding: 0.8rem;
  background-color: ${GoldAccent};
  color: #111827;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-block;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const OutlineGreenBtn = styled.a`
  width: 100%;
  padding: 0.8rem;
  background-color: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-block;
  transition: all 0.2s;

  &:hover {
    border-color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
  }
`;

/* ----- 1. HIRE A CLEANER BY THE HOUR SECTION ----- */
const HourlyCalculatorLayout = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const FormCardBox = styled.div`
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);

  @media (max-width: 500px) {
    padding: 1.25rem;
  }
`;

const FieldLabel = styled.label`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: ${MutedText};
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.5rem;
`;

const ServicePillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ServicePill = styled.button`
  background: ${(p) => (p.$active ? MidGreen : WarmBg)};
  color: ${(p) => (p.$active ? "#ffffff" : DarkText)};
  border: 1px solid ${(p) => (p.$active ? MidGreen : BorderColor)};
  padding: 0.55rem 0.85rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${MidGreen};
  }
`;

const FlexRowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const CurrencySwitcher = styled.div`
  display: flex;
  gap: 0.35rem;

  button {
    flex: 1;
    padding: 0.65rem;
    background: ${(p) => p.bg || WarmBg};
    border: 1px solid ${BorderColor};
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 2px;
    cursor: pointer;

    &.active {
      background: ${MidGreen};
      color: #ffffff;
      border-color: ${MidGreen};
    }
  }
`;

const HoursStepper = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 38px;
    height: 38px;
    background: ${WarmBg};
    border: 1px solid ${BorderColor};
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;

    &:hover {
      border-color: ${MidGreen};
    }
  }

  span {
    flex: 1;
    text-align: center;
    font-size: 0.88rem;
    font-weight: 700;
  }
`;

const InputStyled = styled.input`
  width: 100%;
  padding: 0.75rem;
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
`;

/* RIGHT GREEN PRICE CARD */
const PriceCardBox = styled.div`
  background: ${DarkGreen};
  color: #ffffff;
  border-radius: 4px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .price-title {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: ${GoldAccent};
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }

  .price-range {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.8rem;
    font-weight: 400;
    margin: 0 0 1.5rem 0;
  }

  .summary-line {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.5rem;
  }

  .estimated-total {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    margin-top: 1.5rem;
    padding-top: 1rem;

    .est-label {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: ${GoldAccent};
      text-transform: uppercase;
      display: block;
      margin-bottom: 0.2rem;
    }

    .est-amount {
      font-family: "Playfair Display", Georgia, serif;
      font-size: 1.6rem;
      font-weight: 400;
      color: #ffffff;
    }
  }

  .action-stack {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 2rem;
  }
`;

const GoldWhatsappBtn = styled.a`
  width: 100%;
  padding: 0.85rem;
  background-color: ${GoldAccent};
  color: #111827;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    opacity: 0.92;
  }
`;

const OutlineEmailBtn = styled.a`
  width: 100%;
  padding: 0.85rem;
  background-color: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.35);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    border-color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
  }
`;

/* ----- 2. REGISTER AS A CLEANER SECTION ----- */
const RegisterFormBox = styled.form`
  max-width: 800px;
  margin: 2rem auto 0;
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  padding: 2.5rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);

  @media (max-width: 600px) {
    padding: 1.5rem 1.25rem;
  }
`;

const ButtonRowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const SubmitGreenBtn = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: ${MidGreen};
  color: #ffffff;
  font-size: 0.7rem;
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

  &:hover {
    opacity: 0.92;
  }
`;

const OutlineWhatsappBtn = styled.a`
  width: 100%;
  padding: 0.85rem;
  background-color: transparent;
  color: ${DarkText};
  border: 1px solid ${BorderColor};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    border-color: ${MidGreen};
  }
`;

/* ----- 3. BOTTOM BANNER SECTION ----- */
const BottomBannerSection = styled.section`
  position: relative;
  width: 100%;
  padding: 5rem 1.5rem;
  background: linear-gradient(rgba(9, 40, 30, 0.88), rgba(9, 40, 30, 0.92)),
    url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80");
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
    font-size: 2.6rem;
    font-weight: 400;
    margin: 0 0 2rem 0;

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

/* ================= MAIN COMPONENT ================= */
export default function CleaningServicesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ----- HOURLY CALCULATOR STATES ----- */
  const [selectedService, setSelectedService] = useState("OFFICE CLEANING");
  const [currency, setCurrency] = useState("₦");
  const [hours, setHours] = useState(3);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  /* ----- CLEANER REGISTER FORM STATES ----- */
  const [regFullName, setRegFullName] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regLocation, setRegLocation] = useState("");
  const [regExperience, setRegExperience] = useState("");
  const [selectedCleanerTypes, setSelectedCleanerTypes] = useState([
    "MOVING HOUSE CLEANING",
  ]);
// Loading states for form submissions
  const [isBookingLoading, setIsBookingLoading] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);





  // Auto-rotate hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  // Dynamic price calculation
  const getPriceRange = () => {
    if (currency === "₦") {
      const min = 10000 * hours;
      const max = 66600 * hours;
      return {
        minFormatted: `₦${min.toLocaleString()}`,
        maxFormatted: `₦${max.toLocaleString()}`,
        display: `From ₦${min.toLocaleString()} to ₦${max.toLocaleString()}`,
      };
    } else if (currency === "£") {
      const min = 12 * hours;
      const max = 35 * hours;
      return {
        minFormatted: `£${min}`,
        maxFormatted: `£${max}`,
        display: `From £${min} to £${max}`,
      };
    } else {
      const min = 15 * hours;
      const max = 45 * hours;
      return {
        minFormatted: `$${min}`,
        maxFormatted: `$${max}`,
        display: `From $${min} to $${max}`,
      };
    }
  };

  const priceData = getPriceRange();

  const toggleCleanerTypePill = (pill) => {
    setSelectedCleanerTypes((prev) =>
      prev.includes(pill) ? prev.filter((p) => p !== pill) : [...prev, pill]
    );
  };

 const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsRegisterLoading(true);

    const payload = {
      formTitle: "Cleaner Network Registration",
      fullName: regFullName,
      phoneNumber: regPhone,
      emailAddress: regEmail,
      location: regLocation,
      experience: regExperience,
      selectedCleanerTypes: selectedCleanerTypes.join(", "),
    };

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({text:"Thank you! Your cleaner application has been submitted successfully.", icon:"success"});
        // Optional: clear form
        setRegFullName("");
        setRegPhone("");
        setRegEmail("");
        setRegLocation("");
        setRegExperience("");
      } else {
        alert("Failed to submit application: " + (data.message || data.error));
      }
    } catch (err) {
      console.error("Error submitting registration:", err);
      alert("An error occurred while submitting your application.");
    } finally {
      setIsRegisterLoading(false);
    }
  };



  const handleBookingEmailSubmit = async (e) => {
    e.preventDefault();
    setIsBookingLoading(true);

    const payload = {
      formTitle: "Cleaning Service Booking",
      serviceType: selectedService,
      currency: currency,
      hoursRequested: hours,
      estimatedPrice: priceData.display,
      preferredDate: preferredDate || "Not Specified",
      preferredTime: preferredTime || "Not Specified",
    };

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({text:"Booking inquiry sent successfully via email!", icon:"success"});
      } else {
        alert("Failed to send email: " + (data.message || data.error));
      }
    } catch (err) {
      console.error("Error submitting booking form:", err);
      alert("An error occurred while sending your request.");
    } finally {
      setIsBookingLoading(false);
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

      {/* 2. TOP INTRO HEADER */}
      <SectionContainer style={{ paddingBottom: "2rem" }}>
        <HeaderBlock style={{ marginBottom: "2rem" }}>
          <span className="tag">CLEANING SERVICES</span>
          <h2>A spotless space, without lifting a finger.</h2>
          <p>
            Our trained, vetted teams deliver consistent, thorough cleaning for homes, offices and short-lets — with transparent pricing and flexible scheduling.
          </p>
        </HeaderBlock>

        {/* 3. A CLEAN FOR EVERY NEED (SERVICES SHOWCASE GRID) */}
        <HeaderBlock id="services" style={{ marginBottom: "2.5rem" }}>
          <span className="tag">— OUR SERVICES —</span>
          <h2>A Clean for Every Need</h2>
          <p>
            From a tidy apartment to a full post-construction reset, our trained teams deliver consistent, thorough results.
          </p>
        </HeaderBlock>

        <ServiceGrid>
          {cleaningServices.map((service) => (
            <ServiceCard key={service.id}>
              <img src={service.image} alt={service.title} />
              <div className="gradient-overlay">
                <h3 className="title">{service.title}</h3>
                <div className="action-buttons">
                  <CardGoldBtn
                    onClick={() => {
                      setSelectedService(service.id);
                      const el = document.getElementById("hourly-calculator");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    BOOK AN APPOINTMENT →
                  </CardGoldBtn>
                  <CardTextBtn href="/gallery">
                    <Sparkles style={{ width: "12px", height: "12px" }} /> EXPLORE GALLERY
                  </CardTextBtn>
                </div>
              </div>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </SectionContainer>

      {/* 4. GREEN HIRE OR JOIN DUAL CARDS */}
      <PlatformSection id="hire-join">
        <PlatformHeader>
          <span className="tag">CLEANING SERVICE PLATFORM</span>
          <h2>Hire a Cleaner or Join Our Team</h2>
          <p>
            Book a professional cleaning service or register as a cleaner — all in one place.
          </p>
        </PlatformHeader>

        <DualCardGrid>
          <PlatformCard>
            <div>
              <div className="icon-circle">
                <Briefcase />
              </div>
              <h3>Hire a Cleaner</h3>
              <p>
                Move-in/move-out, end of tenancy, short-let, commercial or weekly — book instantly with transparent pricing.
              </p>
            </div>
            <SolidGoldBtn href="#hourly-calculator">
              BOOK A CLEAN →
            </SolidGoldBtn>
          </PlatformCard>

          <PlatformCard>
            <div>
              <div className="icon-circle">
                <UserCheck />
              </div>
              <h3>Become a Cleaner</h3>
              <p>
                Join our network of professional cleaners. Register your interest and we'll be in touch to onboard you.
              </p>
            </div>
            <OutlineGreenBtn href="#register-cleaner">
              REGISTER NOW →
            </OutlineGreenBtn>
          </PlatformCard>
        </DualCardGrid>
      </PlatformSection>

      {/* ================= 5. HIRE A CLEANER BY THE HOUR ================= */}
      <SectionContainer id="hourly-calculator">
        <HeaderBlock style={{ marginBottom: "1.5rem" }}>
          <h2>Hire a Cleaner by the Hour</h2>
          <p>Choose your service type and book instantly — prices from £15 to £100.</p>
        </HeaderBlock>

        <HourlyCalculatorLayout>
          {/* LEFT CALCULATOR FORM */}
          <FormCardBox>
            <FieldLabel>SERVICE TYPE</FieldLabel>
            <ServicePillsWrapper>
              {cleaningServices.map((s) => (
                <ServicePill
                  key={s.id}
                  $active={selectedService === s.id}
                  onClick={() => setSelectedService(s.id)}
                >
                  {s.id}
                </ServicePill>
              ))}
            </ServicePillsWrapper>

            <FlexRowGrid>
              <div>
                <FieldLabel>CURRENCY</FieldLabel>
                <CurrencySwitcher>
                  <button
                    className={currency === "£" ? "active" : ""}
                    onClick={() => setCurrency("£")}
                  >
                    £
                  </button>
                  <button
                    className={currency === "$" ? "active" : ""}
                    onClick={() => setCurrency("$")}
                  >
                    $
                  </button>
                  <button
                    className={currency === "₦" ? "active" : ""}
                    onClick={() => setCurrency("₦")}
                  >
                    ₦
                  </button>
                </CurrencySwitcher>
              </div>

              <div>
                <FieldLabel>HOURS NEEDED (MIN 1)</FieldLabel>
                <HoursStepper>
                  <button onClick={() => setHours((h) => Math.max(1, h - 1))}>
                    <Minus style={{ width: "14px", height: "14px" }} />
                  </button>
                  <span>{hours}</span>
                  <button onClick={() => setHours((h) => h + 1)}>
                    <Plus style={{ width: "14px", height: "14px" }} />
                  </button>
                </HoursStepper>
              </div>
            </FlexRowGrid>

            <FlexRowGrid style={{ marginBottom: 0 }}>
              <div>
                <FieldLabel>PREFERRED DATE</FieldLabel>
                <InputStyled
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                />
              </div>

              <div>
                <FieldLabel>PREFERRED TIME</FieldLabel>
                <InputStyled
                  type="time"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                />
              </div>
            </FlexRowGrid>
          </FormCardBox>

          {/* RIGHT GREEN SUMMARY CARD */}
          <PriceCardBox>
            <div>
              <div className="price-title">PRICE</div>
              <div className="price-range">{priceData.display}</div>

              <div className="summary-line">
                <span>Service</span>
                <span style={{ fontWeight: 600, color: "#fff" }}>
                  {selectedService.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase())}
                </span>
              </div>

              <div className="summary-line">
                <span>Hours</span>
                <span style={{ fontWeight: 600, color: "#fff" }}>{hours}</span>
              </div>

              <div className="summary-line">
                <span>Price</span>
                <span style={{ fontWeight: 600, color: "#fff" }}>
                  {priceData.display}
                </span>
              </div>

              <div className="estimated-total">
                <span className="est-label">ESTIMATED TOTAL</span>
                <span className="est-amount">{priceData.display}</span>
              </div>
            </div>

            <div className="action-stack">
              <GoldWhatsappBtn
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Hello, I would like to book ${selectedService} for ${hours} hours on${preferredDate} at ${preferredTime}. Currency: ${currency}`
                )}`}
                target="_blank"
              >
                <MessageSquare style={{ width: "14px", height: "14px" }} /> BOOK VIA WHATSAPP
              </GoldWhatsappBtn>

              <OutlineEmailBtn as="button" type="submit" onClick={handleBookingEmailSubmit} disabled={isBookingLoading}>
    <Mail style={{ width: "14px", height: "14px" }} />
    {isBookingLoading ? "SENDING EMAIL..." : "BOOK VIA EMAIL"}
  </OutlineEmailBtn>
            </div> 

            {/* <div className="action-stack">
  <GoldWhatsappBtn href={whatsappBookingLink} target="_blank" rel="noopener noreferrer">
    <MessageSquare style={{ width: "14px", height: "14px" }} />
    BOOK VIA WHATSAPP
  </GoldWhatsappBtn>

  <OutlineEmailBtn as="button" type="submit" onClick={handleBookingEmailSubmit} disabled={isBookingLoading}>
    <Mail style={{ width: "14px", height: "14px" }} />
    {isBookingLoading ? "SENDING EMAIL..." : "BOOK VIA EMAIL"}
  </OutlineEmailBtn>
</div> */}
          </PriceCardBox>
        </HourlyCalculatorLayout>
      </SectionContainer>

      {/* ================= 6. REGISTER AS A CLEANER ================= */}
      <SectionContainer id="register-cleaner" style={{ paddingTop: "2rem" }}>
        <HeaderBlock style={{ marginBottom: "1.5rem" }}>
          <span className="tag">— JOIN OUR TEAM —</span>
          <h2>Register as a Cleaner</h2>
          <p>Fill in your details and we'll get in touch to onboard you.</p>
        </HeaderBlock>

        <RegisterFormBox onSubmit={handleRegisterSubmit}>
          <FlexRowGrid>
            <div>
              <FieldLabel>FULL NAME *</FieldLabel>
              <InputStyled
                type="text"
                placeholder="Your name"
                value={regFullName}
                onChange={(e) => setRegFullName(e.target.value)}
                required
              />
            </div>

            <div>
              <FieldLabel>PHONE NUMBER *</FieldLabel>
              <InputStyled
                type="tel"
                placeholder="Phone number"
                value={regPhone}
                onChange={(e) => setRegPhone(e.target.value)}
                required
              />
            </div>
          </FlexRowGrid>

          <FlexRowGrid>
            <div>
              <FieldLabel>EMAIL</FieldLabel>
              <InputStyled
                type="email"
                placeholder="Email address"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
              />
            </div>

            <div>
              <FieldLabel>LOCATION / AREA</FieldLabel>
              <InputStyled
                type="text"
                placeholder="e.g. Lekki, Lagos"
                value={regLocation}
                onChange={(e) => setRegLocation(e.target.value)}
              />
            </div>
          </FlexRowGrid>

          <div style={{ marginBottom: "1.25rem" }}>
            <FieldLabel>YEARS OF EXPERIENCE</FieldLabel>
            <InputStyled
              type="text"
              placeholder="e.g. 3"
              value={regExperience}
              onChange={(e) => setRegExperience(e.target.value)}
            />
          </div>

          <div>
            <FieldLabel>PREFERRED SERVICE TYPES</FieldLabel>
            <ServicePillsWrapper style={{ marginBottom: 0 }}>
              {cleanerServicePills.map((pill) => (
                <ServicePill
                  key={pill}
                  type="button"
                  $active={selectedCleanerTypes.includes(pill)}
                  onClick={() => toggleCleanerTypePill(pill)}
                >
                  {pill}
                </ServicePill>
              ))}
            </ServicePillsWrapper>
          </div>

          <ButtonRowGrid>
              <SubmitGreenBtn type="submit" disabled={isRegisterLoading}>
    <Send style={{ width: "14px", height: "14px" }} />
    {isRegisterLoading ? "SUBMITTING EMAIL..." : "SUBMIT APPLICATION VIA EMAIL"}
  </SubmitGreenBtn>

            <OutlineWhatsappBtn
              href={`https://wa.me/?text=${encodeURIComponent(
                `Hello, I would like to register as a cleaner. Name: ${regFullName}, Phone: ${regPhone}, Location:${regLocation}`
              )}`}
              target="_blank"
            >
              <MessageSquare style={{ width: "14px", height: "14px" }} /> SEND VIA WHATSAPP
            </OutlineWhatsappBtn>
          </ButtonRowGrid>
          
          
          {/* <ButtonRowGrid>
  <SubmitGreenBtn type="submit" disabled={isRegisterLoading}>
    <Send style={{ width: "14px", height: "14px" }} />
    {isRegisterLoading ? "SUBMITTING EMAIL..." : "SUBMIT APPLICATION VIA EMAIL"}
  </SubmitGreenBtn>

  <OutlineWhatsappBtn href={whatsappRegisterLink} target="_blank" rel="noopener noreferrer">
    <MessageSquare style={{ width: "14px", height: "14px" }} />
    REGISTER VIA WHATSAPP
  </OutlineWhatsappBtn>
</ButtonRowGrid> */}
        </RegisterFormBox>
      </SectionContainer>

      {/* ================= 7. BOTTOM BANNER ================= */}
      <BottomBannerSection>
        <span className="tag">SPARKLING CLEAN</span>
        <h2>Book your cleaning in minutes.</h2>
        <ButtonGroup style={{ justifyContent: "center" }}>
          <PrimaryGoldBtn href="#hourly-calculator">
            BOOK CLEANING →
          </PrimaryGoldBtn>
          <SecondaryOutlineBtn href="/contact">
            CONTACT US
          </SecondaryOutlineBtn>
        </ButtonGroup>
      </BottomBannerSection>
    </PageWrapper>
  );
}