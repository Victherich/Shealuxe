"use client";

import styled from "styled-components";
import Link from "next/link";
import { secondaryColoring } from "./Context";

/* ================= COLORS ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const GreenBg = "#11382b";
const DarkText = "#1A1A1A";
const MutedText = "#706E6B";
const LightBg = "#FAF8F4";
const CardBg = "#FFFFFF";

/* ================= MAIN CONTAINER ================= */
const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${LightBg};
  color: ${DarkText};
  font-family: inherit;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
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

const SectionTitle = styled.h2`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: ${DarkText};
  margin: 0 0 1rem 0;
  line-height: 1.25;

  @media (max-width: 768px) {
    font-size: 1.85rem;
  }
`;

/* ================= 1. WHO WE ARE ================= */
const WhoWeAreGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const TextBlock = styled.div`
  p {
    font-size: 0.92rem;
    color: ${MutedText};
    line-height: 1.65;
    font-weight: 300;
    margin-bottom: 1.2rem;
  }
`;

const LogoCardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background-color: #f5f0e6;
  padding: 2.5rem;
  border-radius: 2px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    max-width: 320px;
    object-fit: contain;
    background: #ffffff;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  }
`;

/* ================= 2. VISION & MISSION ================= */
const VisionMissionBanner = styled.div`
  width: 100%;
  background-color: ${GreenBg};
  color: #ffffff;
  padding: 4rem 1.5rem;
  margin-bottom: 5rem;
`;

const VMGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const VMCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  .icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid ${GoldAccent};
    color: ${GoldAccent};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
  }

  h3 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: #ffffff;
    margin: 0;
  }

  p {
    font-size: 0.88rem;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.6;
    font-weight: 300;
    margin: 0;
  }
`;

/* ================= 3. WHAT GUIDES US (VALUES) ================= */
const ValuesSection = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: ${CardBg};
  border: 1px solid rgba(226, 232, 240, 0.8);
  padding: 2.5rem 1.5rem;
  border-radius: 2px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
    border-color: rgba(226, 176, 74, 0.4);
  }

  .value-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: ${LightBg};
    color: ${GreenBg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.2rem auto;
    font-size: 1.2rem;
  }

  h4 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.25rem;
    font-weight: 500;
    color: ${DarkText};
    margin: 0 0 0.6rem 0;
  }

  p {
    font-size: 0.8rem;
    color: ${MutedText};
    line-height: 1.55;
    font-weight: 300;
    margin: 0;
  }
`;

/* ================= 4. ONE BRAND, MANY DIVISIONS ================= */
const DivisionsListSection = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const DivisionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1000px;
  margin: 3rem auto 0 auto;
`;

const DivisionItem = styled(Link)`
  background: ${CardBg};
  border: 1px solid rgba(226, 232, 240, 0.8);
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.25s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    border-color: ${GoldAccent};
    transform: translateX(4px);
  }

  .left-meta {
    display: flex;
    align-items: center;
    gap: 1.8rem;
    text-align: left;
  }

  .num {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.2rem;
    color: ${GoldAccent};
    opacity: 0.8;
  }

  .title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.15rem;
    font-weight: 500;
    color: ${DarkText};
    margin-bottom: 0.2rem;
  }

  .sub {
    font-size: 0.78rem;
    color: ${MutedText};
    font-weight: 300;
  }

  .arrow {
    font-size: 1rem;
    color: ${DarkText};
    transition: transform 0.2s ease, color 0.2s ease;
  }

  &:hover .arrow {
    color: ${GoldAccent};
    transform: translateX(4px);
  }
`;

/* ================= 5. LEADERSHIP HEADER ================= */
const LeadershipHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

/* ================= 6. WHY CLIENTS CHOOSE US ================= */
const WhyChooseUsBanner = styled.div`
  width: 100%;
  background-color: ${GreenBg};
  color: #ffffff;
  padding: 4.5rem 1.5rem;
  text-align: center;
`;

const WhyInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  .top-icon {
    font-size: 1.8rem;
    color: ${GoldAccent};
    margin-bottom: 1rem;
  }

  h2 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.2rem;
    font-weight: 400;
    color: #ffffff;
    margin: 0 0 3rem 0;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureItem = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1.2rem;
  text-align: center;

  p {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.55;
    font-weight: 300;
    margin: 0;
  }
`;

const GoldCTAButton = styled(Link)`
  display: inline-block;
  background-color: ${GoldAccent};
  color: #111827;
  padding: 0.85rem 2rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

/* ================= 7. CONSULTATION FOOTER CALLOUT ================= */
const CalloutSection = styled.div`
  background-color: ${LightBg};
  border-top: 1px solid rgba(226, 232, 240, 0.9);
  padding: 4rem 1.5rem;
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
  background-color: ${GreenBg};
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
  color: ${GreenBg};
  border: 1px solid ${GreenBg};
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
export default function BrandStoryAndEcosystemSection() {
  return (
    <SectionWrapper>
      <InnerContainer>
        {/* 1. WHO WE ARE SECTION */}
        <WhoWeAreGrid>
          <TextBlock>
            <HeaderTag>WHO WE ARE</HeaderTag>
            <SectionTitle>
              A premium Nigerian ecosystem, built to last.
            </SectionTitle>
            <p>
              Pinkles NG Ltd is a premium Nigerian lifestyle, property, business, and beauty
              company. We bring together real estate, hospitality, interior design, cleaning,
              legal support, business consulting, media, fashion and beauty under one trusted brand.
            </p>
            <p>
              Our promise is simple: every interaction should feel considered, professional
              and worth recommending. We exist to empower brands, and build legacies — for
              our clients and for ourselves.
            </p>
          </TextBlock>

          <LogoCardContainer>
            <img src="/logo.jpg" alt="Pinkles NG Ltd Logo" />
          </LogoCardContainer>
        </WhoWeAreGrid>
      </InnerContainer>

      {/* 2. VISION & MISSION BANNER */}
      <VisionMissionBanner>
        <VMGrid>
          <VMCard>
            <div className="icon">👁️</div>
            <h3>Our Vision</h3>
            <p>
              To be Africa's most trusted premium multi-service brand — a household
              name synonymous with excellence across property, business, media,
              fashion and beauty.
            </p>
          </VMCard>

          <VMCard>
            <div className="icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To deliver world-class products and services that empower our clients to
              live, work and present beautifully — while building sustainable value for
              our communities.
            </p>
          </VMCard>
        </VMGrid>
      </VisionMissionBanner>

      <InnerContainer style={{ paddingTop: 0 }}>
        {/* 3. WHAT GUIDES US (CORE VALUES) */}
        <ValuesSection>
          <HeaderTag>OUR VALUES</HeaderTag>
          <SectionTitle>What Guides Us</SectionTitle>

          <ValuesGrid>
            <ValueCard>
              <div className="value-icon">💎</div>
              <h4>Excellence</h4>
              <p>We hold ourselves to an international standard in everything we deliver.</p>
            </ValueCard>

            <ValueCard>
              <div className="value-icon">🛡️</div>
              <h4>Integrity</h4>
              <p>Honesty and transparency guide every client relationship.</p>
            </ValueCard>

            <ValueCard>
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>We continuously seek better ways to serve and surprise our clients.</p>
            </ValueCard>

            <ValueCard>
              <div className="value-icon">🤝</div>
              <h4>Partnership</h4>
              <p>Our clients' success is the measure of our own.</p>
            </ValueCard>
          </ValuesGrid>
        </ValuesSection>

        {/* 4. ONE BRAND, MANY DIVISIONS */}
        <DivisionsListSection>
          <HeaderTag>OUR BUSINESSES</HeaderTag>
          <SectionTitle>One Brand, Many Divisions</SectionTitle>

          <DivisionList>
            <DivisionItem href="/properties">
              <div className="left-meta">
                <span className="num">01</span>
                <div>
                  <div className="title">Property & Lifestyle</div>
                  <div className="sub">Real estate, short lets, interior décor, cleaning and legal support.</div>
                </div>
              </div>
              <span className="arrow">→</span>
            </DivisionItem>

            <DivisionItem href="/business-consulting">
              <div className="left-meta">
                <span className="num">02</span>
                <div>
                  <div className="title">Business Consulting</div>
                  <div className="sub">Advisory for startups, growing and established companies.</div>
                </div>
              </div>
              <span className="arrow">→</span>
            </DivisionItem>

            <DivisionItem href="/media-advertising">
              <div className="left-meta">
                <span className="num">03</span>
                <div>
                  <div className="title">Media & Advertising</div>
                  <div className="sub">Creative agency for brands, campaigns and coverage.</div>
                </div>
              </div>
              <span className="arrow">→</span>
            </DivisionItem>

            <DivisionItem href="/ashakeade-closet">
              <div className="left-meta">
                <span className="num">04</span>
                <div>
                  <div className="title">Ashakade Closet</div>
                  <div className="sub">Premium women's fashion boutique.</div>
                </div>
              </div>
              <span className="arrow">→</span>
            </DivisionItem>

            <DivisionItem href="/book-now">
              <div className="left-meta">
                <span className="num">05</span>
                <div>
                  <div className="title">Pinkles Spa · Nail · Hair</div>
                  <div className="sub">Premium beauty and wellness experiences.</div>
                </div>
              </div>
              <span className="arrow">→</span>
            </DivisionItem>
          </DivisionList>
        </DivisionsListSection>

        {/* 5. LEADERSHIP HEADER */}
        <LeadershipHeader>
          <HeaderTag>LEADERSHIP</HeaderTag>
          <SectionTitle>The People Behind Pinkles</SectionTitle>
        </LeadershipHeader>
      </InnerContainer>

      {/* 6. WHY CLIENTS CHOOSE US BANNER */}
      <WhyChooseUsBanner>
        <WhyInner>
          <div className="top-icon">🏅</div>
          <h2>Why Clients Choose Us</h2>

          <FeatureGrid>
            <FeatureItem>
              <p>A single trusted brand across multiple needs — no juggling vendors.</p>
            </FeatureItem>
            <FeatureItem>
              <p>Specialist teams in every division, held to an international standard.</p>
            </FeatureItem>
            <FeatureItem>
              <p>Discretion, transparency and results — on every project, every time.</p>
            </FeatureItem>
          </FeatureGrid>

          <GoldCTAButton href="/contact">WORK WITH US →</GoldCTAButton>
        </WhyInner>
      </WhyChooseUsBanner>

   
    </SectionWrapper>
  );
}