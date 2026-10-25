"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { primaryColoring, secondaryColoring } from "./Context";

const GoldAccent = secondaryColoring; // #E2B04A

const slides = [
  {
    id: 1,
    tag: "", // No tag visible in Image 1
    title: "A Conglomerate Built on Trust",
    description: "Empowering brands. Building legacies — across property, business, media, fashion and beauty.",
    primaryBtnText: "Our Businesses",
    primaryBtnLink: "/business-consulting",
    secondaryBtnText: "Contact Us",
    secondaryBtnLink: "/contact",
    bgStyle: "linear-gradient(135deg, #091e17 0%, #11382b 60%, #0d281f 100%)",
  },
  {
    id: 2,
    tag: "OUR STORY",
    title: "From a Vision to an Ecosystem",
    description: "Years of disciplined growth across multiple industries.",
    primaryBtnText: "Our Story",
    primaryBtnLink: "/about",
    secondaryBtnText: "Leadership",
    secondaryBtnLink: "/about",
    bgStyle: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 3,
    tag: "OUR VALUES",
    title: "Excellence in Every Detail",
    description: "The principles that guide every decision we make.",
    primaryBtnText: "Our Values",
    primaryBtnLink: "/about",
    secondaryBtnText: "Why Choose Us",
    secondaryBtnLink: "/about",
    bgStyle: "linear-gradient(135deg, #091e17 0%, #11382b 60%, #0d281f 100%)",
  },
  {
    id: 4,
    tag: "LEADERSHIP",
    title: "Guided by Experience",
    description: "A team of specialists leading each division.",
    primaryBtnText: "Meet the Team",
    primaryBtnLink: "/about",
    secondaryBtnText: "Partner With Us",
    secondaryBtnLink: "/about",
    bgStyle: "linear-gradient(135deg, #091e17 0%, #11382b 60%, #0d281f 100%)",
  },
];

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 85vh;
  min-height: 550px;
  background: ${(p) => p.$bg};
  background-size: cover;
  background-position: center;
  transition: background 0.6s ease-in-out;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 0 4rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    height: 75vh;
  }
`;

const ContentWrapper = styled.div`
  max-width: 750px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  animation: fadeIn 0.6s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: ${GoldAccent};
  text-transform: uppercase;

  .line {
    width: 24px;
    height: 1px;
    background: ${GoldAccent};
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  font-family: serif;
  line-height: 1.15;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  font-weight: 300;
  color: #e2e8f0;
  line-height: 1.6;
  margin: 0 0 0.5rem 0;
  max-width: 580px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  background: ${GoldAccent};
  color: #111827;
  padding: 0.85rem 1.75rem;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 2px;
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled(Link)`
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.35);
  padding: 0.85rem 1.75rem;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  border-radius: 2px;
  transition: all 0.2s;

  &:hover {
    border-color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
  }
`;

/* ================= CONTROLS & FOOTER BAR ================= */
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

const IndicatorsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  .counter {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: #ffffff;
  }
`;

const LineBars = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Bar = styled.div`
  width: ${(p) => (p.$active ? "36px" : "18px")};
  height: 2px;
  background: ${(p) => (p.$active ? GoldAccent : "rgba(255, 255, 255, 0.35)")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${GoldAccent};
  }
`;

const ArrowGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ArrowButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  width: 42px;
  height: 42px;
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

export default function AboutHeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <HeroContainer $bg={currentSlide.bgStyle} key={currentSlide.id}>
      <ContentWrapper>
        {currentSlide.tag && (
          <TagRow>
            <div className="line" />
            <span>{currentSlide.tag}</span>
          </TagRow>
        )}

        <Title>{currentSlide.title}</Title>
        <Description>{currentSlide.description}</Description>

        <ButtonGroup>
          <PrimaryButton href={currentSlide.primaryBtnLink}>
            {currentSlide.primaryBtnText} →
          </PrimaryButton>
          <SecondaryButton href={currentSlide.secondaryBtnLink}>
            {currentSlide.secondaryBtnText}
          </SecondaryButton>
        </ButtonGroup>
      </ContentWrapper>

      <SliderControls>
        <IndicatorsContainer>
          <LineBars>
            {slides.map((slide, idx) => (
              <Bar
                key={slide.id}
                $active={idx === currentIndex}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </LineBars>
          <span className="counter">
            0{currentIndex + 1} / 0{slides.length}
          </span>
        </IndicatorsContainer>

        <ArrowGroup>
          <ArrowButton onClick={handlePrev} aria-label="Previous slide">
            ←
          </ArrowButton>
          <ArrowButton onClick={handleNext} aria-label="Next slide">
            →
          </ArrowButton>
        </ArrowGroup>
      </SliderControls>
    </HeroContainer>
  );
}