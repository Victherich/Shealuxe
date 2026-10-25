"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { secondaryColoring } from "./Context";

/* ================= COLORS ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const DarkGreenBg = "#072318";

/* ================= HERO SLIDES DATA ================= */
const heroSlides = [
  {
    id: 1,
    tag: "PROPERTY PORTAL",
    title: "Luxury Homes, Curated",
    description: "Verified residences across Nigeria's most sought-after addresses.",
    primaryBtnText: "Browse Properties",
    primaryBtnLink: "/properties",
    secondaryBtnText: "Talk to a Realtor",
    secondaryBtnLink: "/contact?role=realtor",
    bgGradient:
      "radial-gradient(circle at 80% 50%, #0e3d2c 0%, #072318 70%)",
  },
  {
    id: 2,
    tag: "PROPERTY PORTAL",
    title: "Land & Investments",
    description: "Build your portfolio with verified land and investment properties.",
    primaryBtnText: "View Land",
    primaryBtnLink: "/properties?category=land",
    secondaryBtnText: "Investment Properties",
    secondaryBtnLink: "/properties?category=investment",
    bgGradient:
      "radial-gradient(circle at 80% 50%, #0f4230 0%, #072318 70%)",
  },
  {
    id: 3,
    tag: "PROPERTY PORTAL",
    title: "For Rent, Settled",
    description: "Long and short-term rentals in prime locations.",
    primaryBtnText: "Browse Rentals",
    primaryBtnLink: "/properties?type=rent",
    secondaryBtnText: "Short-Let",
    secondaryBtnLink: "/properties?type=short-let",
    bgGradient:
      "radial-gradient(circle at 80% 50%, #0a3626 0%, #072318 70%)",
  },
  {
    id: 4,
    tag: "PROPERTY PORTAL",
    title: "Your Realtor, On Your Side",
    description: "Buy, sell, rent or invest with professional guidance.",
    primaryBtnText: "Talk to a Realtor",
    primaryBtnLink: "/contact?role=realtor",
    secondaryBtnText: "Explore All",
    secondaryBtnLink: "/properties",
    bgGradient:
      "radial-gradient(circle at 80% 50%, #0b3a29 0%, #072318 70%)",
  },
];

/* ================= STYLED COMPONENTS ================= */
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 520px;
  background: ${(p) => p.$bg};
  transition: background 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  padding: 5rem 4rem 6rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem 5rem;
    min-height: 460px;
  }
`;

const ContentBox = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
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
    width: 22px;
    height: 1px;
    background: ${GoldAccent};
  }
`;

const Title = styled.h1`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 3.8rem;
  font-weight: 400;
  line-height: 1.1;
  color: #ffffff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  font-weight: 300;
  color: #c2d1cb;
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
  color: #0d1e18;
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
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }
`;

const SecondaryOutlineBtn = styled.a`
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.35);
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
    background: rgba(255, 255, 255, 0.08);
  }
`;

/* ----- BOTTOM CONTROLS ----- */
const ControlsWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
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

const IndicatorGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  .counter {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: #ffffff;
  }
`;

const BarsRow = styled.div`
  display: flex;
  gap: 6px;
`;

const Bar = styled.div`
  width: ${(p) => (p.$active ? "32px" : "16px")};
  height: 2px;
  background: ${(p) => (p.$active ? GoldAccent : "rgba(255, 255, 255, 0.25)")};
  cursor: pointer;
  transition: all 0.3s ease;
`;

const ArrowsRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ArrowBtn = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: ${GoldAccent};
    border-color: ${GoldAccent};
    color: #0d1e18;
  }
`;

/* ================= COMPONENT ================= */
export default function PropertyPortalHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <HeroSection $bg={slide.bgGradient}>
      <ContentBox key={slide.id}>
        <TagRow>
          <div className="line" />
          <span>{slide.tag}</span>
        </TagRow>

        <Title>{slide.title}</Title>
        <Description>{slide.description}</Description>

        <ButtonGroup>
          <PrimaryGoldBtn href={slide.primaryBtnLink}>
            {slide.primaryBtnText} →
          </PrimaryGoldBtn>
          <SecondaryOutlineBtn href={slide.secondaryBtnLink}>
            {slide.secondaryBtnText}
          </SecondaryOutlineBtn>
        </ButtonGroup>
      </ContentBox>

      {/* CONTROLS */}
      <ControlsWrapper>
        <IndicatorGroup>
          <BarsRow>
            {heroSlides.map((_, idx) => (
              <Bar
                key={idx}
                $active={idx === currentSlide}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </BarsRow>
          <span className="counter">
            0{currentSlide + 1} / 0{heroSlides.length}
          </span>
        </IndicatorGroup>

        <ArrowsRow>
          <ArrowBtn
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? heroSlides.length - 1 : prev - 1
              )
            }
          >
            <ChevronLeft />
          </ArrowBtn>
          <ArrowBtn
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
            }
          >
            <ChevronRight />
          </ArrowBtn>
        </ArrowsRow>
      </ControlsWrapper>
    </HeroSection>
  );
}