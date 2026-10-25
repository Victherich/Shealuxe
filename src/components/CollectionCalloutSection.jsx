"use client";

import styled from "styled-components";
import Link from "next/link";
import { secondaryColoring } from "./Context";

const GoldAccent = secondaryColoring || "#E2B04A";

/* ================= STYLED COMPONENTS ================= */
const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.55)
    ),
    url("https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=80");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  padding: 0 1.5rem;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const TagText = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  color: ${GoldAccent};
  text-transform: uppercase;
`;

const Heading = styled.h1`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 3.8rem;
  font-weight: 400;
  color: #ffffff;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const OutlineButton = styled(Link)`
  margin-top: 0.5rem;
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.7);
  padding: 0.85rem 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  border-radius: 2px;
  transition: all 0.25s ease;

  &:hover {
    background: #ffffff;
    color: #111827;
    border-color: #ffffff;
  }
`;

/* ================= COMPONENT ================= */
export default function CollectionCalloutSection() {
  return (
    <BannerContainer>
      <ContentWrapper>
        <TagText>ASHAKEADE CLOSET</TagText>
        <Heading>ASHÉVON</Heading>
        {/* <OutlineButton href="/shop">
          VIEW COLLECTION →
        </OutlineButton> */}
      </ContentWrapper>
    </BannerContainer>
  );
}