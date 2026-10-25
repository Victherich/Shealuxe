"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { secondaryColoring } from "./Context";

/* ================= COLORS ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const OffWhiteBg = "#FAF8F4";
const DarkText = "#1A1A1A";
const MutedText = "#706E6B";

/* ================= SLIDE DATA ================= */
const editItems = [
  {
    id: 1,
    title: "Premium lovely gowns",
    tag: "BESPOKE WEARS",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1920&q=80",
    detailsLink: "/shop/item-1",
  },
  {
    id: 2,
    title: "Couture Occasion Wear",
    tag: "BESPOKE WEARS",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1920&q=80",
    detailsLink: "/shop/item-2",
  },
  {
    id: 3,
    title: "Luxury Native & Draped Sets",
    tag: "BESPOKE WEARS",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=80",
    detailsLink: "/shop/item-3",
  },
  {
    id: 4,
    title: "Bespoke Evening Gowns",
    tag: "BESPOKE WEARS",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80",
    detailsLink: "/shop/item-4",
  },
];

/* ================= CONTAINER & HEADER ================= */
const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${OffWhiteBg};
  padding: 4.5rem 0 0;
  box-sizing: border-box;
  text-align: center;
`;

const HeaderContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 2.5rem;
  padding: 0 1.5rem;
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
    width: 22px;
    height: 1px;
    background-color: ${GoldAccent};
  }
`;

const MainHeading = styled.h2`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.8rem;
  font-weight: 400;
  color: ${DarkText};
  margin: 0 0 0.6rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubText = styled.p`
  font-size: 0.85rem;
  color: ${MutedText};
  margin: 0;
  font-weight: 300;
`;

/* ================= SLIDER DISPLAY ================= */
const ShowcaseContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 520px;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.82) 0%,
      rgba(0, 0, 0, 0.2) 40%,
      rgba(0, 0, 0, 0.25) 100%
    ),
    url(${(p) => p.$image});
  background-size: cover;
  background-position: center 25%;
  transition: background-image 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 3rem 3rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem;
    height: 65vh;
  }
`;

/* ================= TOP CONTROLS (Badge + Indicator Lines) ================= */
const TopControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 5;
`;

const TapToViewBadge = styled.button`
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  padding: 0.4rem 0.8rem;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  border-radius: 2px;
  backdrop-filter: blur(4px);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    border-color: ${GoldAccent};
    color: ${GoldAccent};
  }
`;

const TopPaginationBars = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Bar = styled.div`
  width: ${(p) => (p.$active ? "28px" : "16px")};
  height: 2px;
  background-color: ${(p) => (p.$active ? GoldAccent : "rgba(255, 255, 255, 0.4)")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${GoldAccent};
  }
`;

/* ================= SIDE ARROWS ================= */
const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(p) => (p.$left ? "left: 1.5rem;" : "right: 1.5rem;")}
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(4px);
  z-index: 10;
  transition: all 0.25s ease;

  &:hover {
    background: ${GoldAccent};
    border-color: ${GoldAccent};
    color: #111827;
  }

  @media (max-width: 600px) {
    width: 34px;
    height: 34px;
    ${(p) => (p.$left ? "left: 0.75rem;" : "right: 0.75rem;")}
  }
`;

/* ================= BOTTOM CAPTION & BUTTON ================= */
const BottomContent = styled.div`
  text-align: left;
  max-width: 600px;
  z-index: 5;
  animation: fadeIn 0.5s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ItemTitle = styled.h3`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.2rem;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 1rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ViewDetailsBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  backdrop-filter: blur(4px);
  transition: all 0.25s ease;

  &:hover {
    background: #ffffff;
    color: #111827;
    border-color: #ffffff;
  }
`;

/* ================= MAIN COMPONENT ================= */
export default function TheEditShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % editItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = editItems[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? editItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % editItems.length);
  };

  return (
    <SectionWrapper>
      {/* SECTION HEADER */}
      <HeaderContainer>
        <HeaderTag>BESPOKE WEARS</HeaderTag>
        <MainHeading>ASHÉVON</MainHeading>
        <SubText>Tap any design to view details and start an enquiry.</SubText>
      </HeaderContainer>

      {/* FULL-WIDTH SHOWCASE SLIDER */}
      <ShowcaseContainer $image={currentItem.image} key={currentItem.id}>
        {/* TOP OVERLAY CONTROLS */}
        <TopControls>
          <TapToViewBadge as="a" href={currentItem.detailsLink}>
            ⤢ TAP TO VIEW
          </TapToViewBadge>

          <TopPaginationBars>
            {editItems.map((_, idx) => (
              <Bar
                key={idx}
                $active={idx === currentIndex}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </TopPaginationBars>
        </TopControls>

        {/* SIDE ARROW NAVIGATION */}
        <ArrowButton $left onClick={handlePrev} aria-label="Previous image">
          ‹
        </ArrowButton>
        <ArrowButton onClick={handleNext} aria-label="Next image">
          ›
        </ArrowButton>

        {/* BOTTOM CAPTION & DETAILS BUTTON */}
        <BottomContent>
          <ItemTitle>{currentItem.title}</ItemTitle>
          <ViewDetailsBtn href={currentItem.detailsLink}>
            VIEW DETAILS
          </ViewDetailsBtn>
        </BottomContent>
      </ShowcaseContainer>
    </SectionWrapper>
  );
}