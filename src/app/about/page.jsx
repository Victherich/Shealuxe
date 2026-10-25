



"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Sparkles, ArrowRight, Heart, Leaf, ShieldCheck, Smile } from "lucide-react";
// import { primaryColoring, secondaryColoring } from "../Context";
import { primaryColoring, secondaryColoring } from "@/components/Context";
import AboutHeroSection from "@/components/AboutHero";
import BrandStoryAndEcosystemSection from "@/components/BrandStoryAndEcosystemSection";
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


/* ================= COMPONENT ================= */

export default function AboutPage() {
  return (
    <PageWrapper>
  <AboutHeroSection/>
  <BrandStoryAndEcosystemSection/>
 

   
    </PageWrapper>
  );
}