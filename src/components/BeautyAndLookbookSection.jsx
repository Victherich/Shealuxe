"use client";

import styled from "styled-components";
import Link from "next/link";
import { secondaryColoring } from "./Context";

/* ================= COLORS ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const GreenBtnBg = "#11382b";
const DarkText = "#1A1A1A";
const MutedText = "#706E6B";
const LightBg = "#FAF8F4";
const InputBorder = "#E2DDD5";

/* ================= MAIN CONTAINER ================= */
const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${LightBg};
  color: ${DarkText};
  font-family: inherit;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  text-align: center;
`;

/* ================= HEADER TAG ================= */
const HeaderTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  color: ${GoldAccent};
  text-transform: uppercase;
  margin-bottom: 0.8rem;

  &::before,
  &::after {
    content: "";
    width: 20px;
    height: 1px;
    background-color: ${GoldAccent};
  }
`;

/* ================= 1. WELCOME & COMING SOON ================= */
const HeroQuote = styled.h2`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.8rem;
  font-weight: 400;
  color: ${DarkText};
  line-height: 1.25;
  margin: 0 0 1rem 0;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSub = styled.p`
  font-size: 0.9rem;
  color: ${MutedText};
  line-height: 1.6;
  margin: 0 auto 3rem auto;
  max-width: 620px;
  font-weight: 300;
`;

const ComingSoonBox = styled.div`
  display: inline-block;
  background-color: ${GreenBtnBg};
  border: 2px solid ${GoldAccent};
  padding: 1.2rem 3.5rem;
  margin-bottom: 5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);

  span {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    color: ${GoldAccent};
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    padding: 1rem 2.2rem;

    span {
      font-size: 1.6rem;
    }
  }
`;

/* ================= 2. THE PINKLES LOOKBOOK ================= */
const LookbookSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.4rem;
  font-weight: 400;
  color: ${DarkText};
  margin: 0 0 0.6rem 0;

  @media (max-width: 768px) {
    font-size: 1.85rem;
  }
`;

const SectionSub = styled.p`
  font-size: 0.88rem;
  color: ${MutedText};
  margin: 0 auto 3.5rem auto;
  max-width: 580px;
  font-weight: 300;
`;

const EmptyStateCard = styled.div`
  background: #ffffff;
  border: 1px dashed ${InputBorder};
  border-radius: 2px;
  padding: 4rem 2rem;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .icon {
    font-size: 2.2rem;
    color: #c4bebe;
  }

  span {
    font-size: 0.82rem;
    color: #989288;
    font-weight: 400;
  }
`;

/* ================= 3. CONSULTATION FOOTER BANNER ================= */
const CalloutSection = styled.div`
  background-color: ${LightBg};
  border-top: 1px solid ${InputBorder};
  padding: 4rem 1.5rem;
  text-align: left;
`;

const CalloutInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const CalloutText = styled.div`
  max-width: 600px;

  h2 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.2rem;
    font-weight: 400;
    color: ${DarkText};
    line-height: 1.25;
    margin: 0 0 0.8rem 0;

    @media (max-width: 768px) {
      font-size: 1.7rem;
    }
  }

  p {
    font-size: 0.88rem;
    color: ${MutedText};
    margin: 0 0 1rem 0;
    line-height: 1.6;
    font-weight: 300;
  }

  a.email {
    font-size: 0.88rem;
    font-weight: 600;
    color: ${GoldAccent};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled(Link)`
  background-color: ${GreenBtnBg};
  color: #ffffff;
  padding: 0.85rem 1.6rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.92;
  }
`;

const SecondaryOutlineBtn = styled(Link)`
  background-color: transparent;
  color: ${GreenBtnBg};
  border: 1px solid ${GreenBtnBg};
  padding: 0.85rem 1.6rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s ease;

  &:hover {
    background-color: rgba(17, 56, 43, 0.05);
  }
`;

/* ================= MAIN COMPONENT ================= */
export default function BeautyAndLookbookSection() {
  return (
    <SectionWrapper>
      <InnerContainer>
        {/* WELCOME SECTION */}
        <HeaderTag>WELCOME TO PINKLES</HeaderTag>
        <HeroQuote>
          “Beauty is not just how you look. It's how you feel.”
        </HeroQuote>
        <HeroSub>
          A sanctuary for hair, nails and spa — where every appointment is a moment reserved entirely for you.
        </HeroSub>

        {/* COMING SOON FRAME */}
        <ComingSoonBox>
          <span>COMING SOON</span>
        </ComingSoonBox>

        {/* THE PINKLES LOOKBOOK */}
        <LookbookSection>
          <HeaderTag>BEAUTY GALLERY</HeaderTag>
          <SectionTitle>The Pinkles Lookbook</SectionTitle>
          <SectionSub>
            A curated collection of our signature looks, treatments and transformations.
          </SectionSub>

          <EmptyStateCard>
            <div className="icon">🖼️</div>
            <span>No galleries published yet.</span>
          </EmptyStateCard>
        </LookbookSection>
      </InnerContainer>

    </SectionWrapper>
  );
}