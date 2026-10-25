"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Swal from "sweetalert2";
import { CheckCircle2, ShieldCheck, FileText, Scale, Home, CreditCard } from "lucide-react";
import { secondaryColoring } from "@/components/Context";
import SecurePaymentSection from "@/components/SecurePaymentSection";

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
    tag: "LEGAL & PROPERTY CONSULTANCY",
    title: "Land, Verified. Titles, Secured.",
    description: "Professional guidance for property acquisition, land transactions and documentation.",
    primaryBtnText: "Request Consultation",
    primaryBtnLink: "#consultation-services",
    secondaryBtnText: "Explore Properties",
    secondaryBtnLink: "/properties",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 2,
    tag: "LEGAL & PROPERTY CONSULTANCY",
    title: "Mortgages, Made Clear",
    description: "Advisory that demystifies financing and puts you in control of your purchase.",
    primaryBtnText: "Mortgage Advisory",
    primaryBtnLink: "#consultation-services",
    secondaryBtnText: "Talk to a Consultant",
    secondaryBtnLink: "/contact",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 3,
    tag: "LEGAL & PROPERTY CONSULTANCY",
    title: "Due Diligence, Done Properly",
    description: "Title verification, contract review and documentation you can trust.",
    primaryBtnText: "Verify a Property",
    primaryBtnLink: "#consultation-services",
    secondaryBtnText: "Our Services",
    secondaryBtnLink: "#consultation-services",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 4,
    tag: "LEGAL & PROPERTY CONSULTANCY",
    title: "Acquisition, End to End",
    description: "From first enquiry to registered title — guided at every step.",
    primaryBtnText: "Request Property Consultation",
    primaryBtnLink: "#consultation-services",
    secondaryBtnText: "Contact Us",
    secondaryBtnLink: "/contact",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')",
  },
];

/* ================= CONSULTANCY SERVICES DATA ================= */
const consultancyServices = [
  {
    id: "land-purchase",
    title: "Land Purchase Consultation",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "property-verification",
    title: "Property Verification",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "title-verification",
    title: "Title & Document Verification",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "contract-review",
    title: "Contract Review",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mortgage-advisory",
    title: "Mortgage Advisory",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "documentation-guidance",
    title: "Documentation Guidance",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
];

/* ================= WHY IT MATTERS CHECKLIST ================= */
const whyItMattersPoints = [
  "Independent verification of property and land status",
  "Clear explanation of titles, deeds and encumbrances",
  "Mortgage options compared and explained in plain language",
  "Contract terms reviewed before you sign",
  "End-to-end documentation support and follow-up",
];

/* ================= STYLED COMPONENTS ================= */
const PageWrapper = styled.div`
  width: 100%;
  background-color: ${WarmBg};
  color: ${DarkText};
  font-family: inherit;
`;

/* ----- HERO SLIDER STYLES ----- */
const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 580px;
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

const PrimaryGoldBtn = styled.a`
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

const SecondaryOutlineBtn = styled.a`
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

/* ----- SECTIONS & HEADERS ----- */
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

/* ----- SERVICES GRID ----- */
const ThreeColumnGrid = styled.div`
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
  aspect-ratio: 4 / 3.8;
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
      rgba(0, 0, 0, 0.88) 0%,
      rgba(0, 0, 0, 0.3) 50%,
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
    margin: 0 0 0.6rem 0;
  }

  .explore-btn {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: ${GoldAccent};
    text-transform: uppercase;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    text-align: left;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

/* ----- WHY IT MATTERS SECTION ----- */
const WhyItMattersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureImageCard = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3.2;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FeatureContent = styled.div`
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
    margin: 0 0 1rem 0;
    line-height: 1.2;
  }

  p {
    font-size: 0.85rem;
    color: ${MutedText};
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-weight: 300;
  }
`;

const Checklist = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const CheckItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.82rem;
  color: ${DarkText};
  line-height: 1.4;

  svg {
    width: 18px;
    height: 18px;
    color: ${MidGreen};
    flex-shrink: 0;
    margin-top: 1px;
  }
`;

/* ----- GREEN CTA BANNER ----- */
const GreenCTABanner = styled.section`
  background-color: ${DarkGreen};
  color: #ffffff;
  padding: 5rem 1.5rem;
  text-align: center;
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
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0 0 2rem 0;

    @media (max-width: 600px) {
      font-size: 1.9rem;
    }
  }
`;

/* ----- MAKE A PAYMENT ----- */
const PaymentCard = styled.div`
  max-width: 440px;
  margin: 0 auto;
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  padding: 1.8rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  text-align: center;
`;

const AmountInputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.2rem;

  input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid ${BorderColor};
    border-radius: 2px;
    font-size: 0.88rem;
    outline: none;
    background: ${WarmBg};
  }

  select {
    width: 80px;
    padding: 0.75rem;
    border: 1px solid ${BorderColor};
    border-radius: 2px;
    font-size: 0.88rem;
    background: ${WarmBg};
    outline: none;
  }
`;

const PayBtn = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: ${WarmBg};
  color: ${MutedText};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: 1px solid ${BorderColor};
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    border-color: ${GoldAccent};
    color: ${DarkText};
  }
`;

/* ================= MAIN COMPONENT ================= */
export default function LegalAndPropertyConsultancyPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [currency, setCurrency] = useState("₦");

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  const handleOpenConsultationModal = (serviceTitle) => {
    Swal.fire({
      title: serviceTitle,
      text: "Request a legal or property verification consultation for this service.",
      input: "email",
      inputPlaceholder: "Enter your email address",
      showCancelButton: true,
      confirmButtonText: "Submit Request",
      confirmButtonColor: MidGreen,
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        Swal.fire("Request Submitted 🎉", "Our team will reach out to you shortly.", "success");
      }
    });
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

      {/* 2. OVERVIEW HEADER */}
      <SectionContainer style={{ paddingBottom: "2rem" }}>
        <HeaderBlock style={{ marginBottom: "2rem" }}>
          <span className="tag">LEGAL & MORTGAGE</span>
          <h2>Property decisions, made with certainty.</h2>
          <p>
            We provide consultancy and support across the legal and financial aspects of property. Where matters require legal representation, licensed legal professionals handle them — and we coordinate every step.
          </p>
        </HeaderBlock>

        {/* 3. CONSULTANCY SERVICES GRID */}
        <HeaderBlock id="consultation-services" style={{ marginBottom: "2.5rem" }}>
          <span className="tag">— CONSULTANCY SERVICES —</span>
          <h2>Protecting Your Property Journey</h2>
          <p>
            We provide professional support across the legal and financial dimensions of property — so every transaction is informed, secure and compliant.
          </p>
        </HeaderBlock>

        <ThreeColumnGrid>
          {consultancyServices.map((service) => (
            <ServiceCard key={service.id}>
              <img src={service.image} alt={service.title} />
              <div className="gradient-overlay">
                <h3 className="title">{service.title}</h3>
                {/* <button
                  className="explore-btn"
                  onClick={() => handleOpenConsultationModal(service.title)}
                >
                  EXPLORE SERVICE — →
                </button> */}
              </div>
            </ServiceCard>
          ))}
        </ThreeColumnGrid>
      </SectionContainer>

      {/* 4. WHY IT MATTERS SECTION */}
      <SectionContainer style={{ paddingTop: "2rem" }}>
        <WhyItMattersGrid>
          <FeatureImageCard>
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80"
              alt="Scales of Justice"
            />
          </FeatureImageCard>

          <FeatureContent>
            <span className="tag">WHY IT MATTERS</span>
            <h2>Confidence at every stage of acquisition</h2>
            <p>
              Property is one of the largest investments you will make. Our consultancy ensures you understand what you're buying, that the title is sound, and that every document protects you.
            </p>

            <Checklist>
              {whyItMattersPoints.map((point, idx) => (
                <CheckItem key={idx}>
                  <CheckCircle2 />
                  <span>{point}</span>
                </CheckItem>
              ))}
            </Checklist>
          </FeatureContent>
        </WhyItMattersGrid>
      </SectionContainer>

      {/* 5. PROTECT YOUR INVESTMENT CTA BANNER */}
      <GreenCTABanner>
        <span className="tag">PROTECT YOUR INVESTMENT</span>
        <h2>Request a Property Consultation</h2>
        <ButtonGroup style={{ justifyContent: "center" }}>
          <PrimaryGoldBtn href="/contact?service=property-consultation">
            REQUEST PROPERTY CONSULTATION →
          </PrimaryGoldBtn>
          <SecondaryOutlineBtn href="/properties">
            EXPLORE PROPERTIES
          </SecondaryOutlineBtn>
        </ButtonGroup>
      </GreenCTABanner>

      {/* 6. MAKE A PAYMENT */}
    <SecurePaymentSection/>
    </PageWrapper>
  );
}