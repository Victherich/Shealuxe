"use client";

import styled from "styled-components";
import Link from "next/link";
import { secondaryColoring } from "./Context";

/* ================= COLORS ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const GreenBtnBg = "#11382b";
const DarkText = "#1A1A1A";
const MutedText = "#706E6B";
const WarmBg = "#FAF8F4";
const BorderColor = "#E2DDD5";

/* ================= STYLED COMPONENTS ================= */
const BannerWrapper = styled.section`
  width: 100%;
  background-color: ${WarmBg};
  border-top: 1px solid ${BorderColor};
  padding: 4.5rem 1.5rem;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LeftContent = styled.div`
  max-width: 620px;
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
  margin-bottom: 0.8rem;

  &::before,
  &::after {
    content: "";
    width: 20px;
    height: 1px;
    background-color: ${GoldAccent};
  }
`;

const Title = styled.h2`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.3rem;
  font-weight: 400;
  color: ${DarkText};
  line-height: 1.2;
  margin: 0 0 0.8rem 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 0.88rem;
  color: ${MutedText};
  line-height: 1.6;
  margin: 0 0 1.2rem 0;
  font-weight: 300;
`;

const EmailLink = styled.a`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${GoldAccent};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
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
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryOutlineButton = styled(Link)`
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
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${GreenBtnBg};
    color: #ffffff;
  }
`;

/* ================= COMPONENT ================= */
export default function BookConsultationBanner() {
  return (
    <BannerWrapper>
      <InnerContainer>
        {/* LEFT TEXT AREA */}
        <LeftContent>
          <HeaderTag>BOOK A CONSULTATION</HeaderTag>
          <Title>
            Speak with our team <br /> about your next move.
          </Title>
          <Description>
            Arrange a private consultation across any division — property, interiors,
            fashion, wellness, business or legal advisory.
          </Description>
          <EmailLink href="mailto:niphdpinkles@gmail.com">
            ✉️ niphdpinkles@gmail.com
          </EmailLink>
        </LeftContent>

        {/* RIGHT ACTION BUTTONS */}
        <ButtonGroup>
          <PrimaryButton href="/book-now">
            SPEAK TO A CONSULTANT →
          </PrimaryButton>
          <SecondaryOutlineButton href="/contact">
            CONTACT US NOW
          </SecondaryOutlineButton>
        </ButtonGroup>
      </InnerContainer>
    </BannerWrapper>
  );
}