"use client";

import styled from "styled-components";
import Link from "next/link";
import { secondaryColoring } from "./Context";

/* ================= COLORS ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const GreenBtnBg = "#11382b";
const DarkText = "#1A1A1A";
const MutedText = "#66625b";
const OffWhiteBg = "#FAF8F4";

/* ================= CONTAINER ================= */
const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${OffWhiteBg};
  padding: 5rem 1.5rem 6rem;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

/* ================= TWO-COLUMN ROW ================= */
const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

/* ================= MEDIA BOXES ================= */
const ImageBox = styled.div`
  width: 100%;
  aspect-ratio: 1.15 / 1;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const OverlayCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1.15 / 1;
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.5rem 2rem;
  box-sizing: border-box;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.25) 60%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${(p) => p.$bg});
  background-size: cover;
  background-position: center;
  color: #ffffff;
`;

const ComingSoonCard = styled.div`
  width: 100%;
  aspect-ratio: 1.15 / 1;
  background-color: ${GreenBtnBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2.5rem;
  box-sizing: border-box;
  color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  h3 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    color: ${GoldAccent};
    margin: 0.8rem 0;
  }

  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 300;
    margin: 0;
  }
`;

const FounderImageCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 3.3;

  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .founder-overlay {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    color: #ffffff;
  }

  .founder-tag {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: ${GoldAccent};
    text-transform: uppercase;
  }

  .founder-name {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.4rem;
    font-weight: 500;
    margin: 0.2rem 0 0 0;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
`;

/* ================= TEXT CONTENT STYLES ================= */
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CategoryTag = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: ${GoldAccent};
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`;

const Heading = styled.h2`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.2rem;
  font-weight: 400;
  color: ${DarkText};
  line-height: 1.25;
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Paragraph = styled.p`
  font-size: 0.92rem;
  color: ${MutedText};
  line-height: 1.65;
  font-weight: 300;
  margin: 0 0 1.8rem 0;
`;

const ActionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background-color: ${GreenBtnBg};
  color: #ffffff;
  padding: 0.8rem 1.6rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.25 ease;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }
`;

const SecondaryOutlineBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background-color: transparent;
  color: ${GreenBtnBg};
  border: 1px solid ${GreenBtnBg};
  padding: 0.8rem 1.6rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(17, 56, 43, 0.05);
  }
`;

const InlineLink = styled(Link)`
  color: ${GoldAccent};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

/* ================= FOUNDER CHECKLIST ================= */
const ChecklistGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem 1.5rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CheckItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.82rem;
  color: ${DarkText};
  font-weight: 500;

  .icon {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${GreenBtnBg};
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.65rem;
    flex-shrink: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

/* ================= MAIN COMPONENT ================= */
export default function FeaturedHighlightsSection() {
  return (
    <SectionWrapper>
      <InnerContainer>
        {/* ROW 1: Interior & Home Decor */}
        <GridRow>
          <ImageBox>
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
              alt="Interior & Home Decor"
            />
          </ImageBox>
          <TextBlock>
            <CategoryTag>INTERIOR & HOME DECOR</CategoryTag>
            <Heading>Transforming Spaces Into Beautiful Experiences</Heading>
            <Paragraph>
              From a single room to a full property, our designers craft interiors that reflect
              your personality — residential, commercial, Airbnb styling and short-let
              furnishing.
            </Paragraph>
            <ActionButton href="/book-now">
              BOOK AN INTERIOR CONSULTATION →
            </ActionButton>
          </TextBlock>
        </GridRow>

        {/* ROW 2: Fashion Overlay & Coming Soon */}
        <GridRow>
          <OverlayCard $bg="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80">
            <CategoryTag style={{ color: GoldAccent }}>ASHAKADE CLOSET</CategoryTag>
            <Heading style={{ color: "#ffffff", fontSize: "1.8rem" }}>
              Fashion, Curated for Her
            </Heading>
            <Paragraph style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.85rem", marginBottom: "1.2rem" }}>
              Dresses, two-piece, corporate, occasion and luxury native wear — crafted for the woman who arrives with intention.
            </Paragraph>
            <InlineLink href="/ashakeade-closet">SHOP THE COLLECTION →</InlineLink>
          </OverlayCard>

          <ComingSoonCard>
            <CategoryTag style={{ color: GoldAccent }}>PINKLES SPA · NAIL · HAIR</CategoryTag>
            <h3>COMING SOON</h3>
            <p>A new beauty experience is on the way.</p>
          </ComingSoonCard>
        </GridRow>

        {/* ROW 3: Property & Legal Consultancy */}
        <GridRow>
          <TextBlock>
            <CategoryTag>PROPERTY & LEGAL CONSULTANCY</CategoryTag>
            <Heading>Buy, Sell and Invest With Confidence</Heading>
            <Paragraph>
              Professional guidance for property acquisition, land transactions, mortgages,
              documentation and due diligence — coordinated end to end.
            </Paragraph>
            <ActionButton href="/legal-mortgage">
              SPEAK TO A PROPERTY ADVISOR →
            </ActionButton>
          </TextBlock>

          <ImageBox>
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80"
              alt="Property & Legal Consultancy"
            />
          </ImageBox>
        </GridRow>

        {/* ROW 4: Business, Advertising & Brand */}
        <GridRow>
          <ImageBox>
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80"
              alt="Business Strategy"
            />
          </ImageBox>

          <TextBlock>
            <CategoryTag>BUSINESS, ADVERTISING & BRAND</CategoryTag>
            <Heading>Turn Your Vision Into a Brand That Grows</Heading>
            <Paragraph>
              Business strategy, brand development, advertising campaigns and ambassador
              partnerships — built to position your business for lasting growth.
            </Paragraph>
            <ActionButton href="/business-consulting">
              REQUEST A CONSULTATION →
            </ActionButton>
          </TextBlock>
        </GridRow>

        {/* ROW 5: Founder Profile */}
        <GridRow>
          <FounderImageCard>
            <img
              src="/founderimg.jpeg"
              alt="Barr. Omowunmi Oyebode"
              style={{objectPosition:"top"}}
            />
            <div className="founder-overlay">
              <div className="founder-tag">FOUNDER & PRINCIPAL</div>
              <div className="founder-name">Barr. Omowunmi Oyebode</div>
            </div>
          </FounderImageCard>

          <TextBlock>
            <CategoryTag>MEET THE FOUNDER</CategoryTag>
            <Heading>The professional behind the brand.</Heading>
            <Paragraph>
              Barr. Omowunmi Oyebode leads the Pinkles ecosystem with a rare blend of legal
              acumen, business strategy and an eye for lifestyle excellence. Her vision unites
              property, interiors, fashion, wellness and professional services under one
              trusted standard.
            </Paragraph>
            <Paragraph style={{ marginTop: "-0.8rem" }}>
              With years of experience across transactions, consulting and brand building, she has
              built a group designed around discretion, quality and results.
            </Paragraph>

            <ChecklistGrid>
              <CheckItem>
                <div className="icon">✓</div>
                <span>Property & Transaction Consultancy</span>
              </CheckItem>
              <CheckItem>
                <div className="icon">✓</div>
                <span>Business Strategy & Development</span>
              </CheckItem>
              <CheckItem>
                <div className="icon">✓</div>
                <span>Brand Partnerships & Representation</span>
              </CheckItem>
              <CheckItem>
                <div className="icon">✓</div>
                <span>Interior & Lifestyle Curation</span>
              </CheckItem>
            </ChecklistGrid>

            <ButtonGroup>
              <ActionButton href="/about">
                DISCOVER OUR STORY →
              </ActionButton>
              <SecondaryOutlineBtn href="/contact">
                👤 MEET THE FOUNDER
              </SecondaryOutlineBtn>
            </ButtonGroup>
          </TextBlock>
        </GridRow>
      </InnerContainer>
    </SectionWrapper>
  );
}