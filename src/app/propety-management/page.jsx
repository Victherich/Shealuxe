"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Swal from "sweetalert2";
import {
  Building2,
  ClipboardCheck,
  Users,
  Wallet,
  Wrench,
  ShieldCheck,
  Megaphone,
  Headphones,
  HeartHandshake,
} from "lucide-react";
import SecurePaymentSection from "@/components/SecurePaymentSection";

/* ================= COLORS & BRANDING ================= */
const GoldAccent = "#E2B04A";
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
    tag: "PROPERTY MANAGEMENT",
    title: "We Manage Properties",
    description:
      "Professional care for your property — supervision, tenants, maintenance and returns, handled end to end.",
    primaryBtnText: "Our Services",
    primaryBtnLink: "#management-services",
    secondaryBtnText: "Let Us Manage Yours",
    secondaryBtnLink: "#handover-form",
    bgStyle:
      "linear-gradient(rgba(9, 40, 30, 0.88), rgba(9, 40, 30, 0.92)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 2,
    tag: "PROPERTY MANAGEMENT",
    title: "Your Property, Our Responsibility",
    description:
      "From inspection to rent collection, we protect your investment and your peace of mind.",
    primaryBtnText: "Talk to Us",
    primaryBtnLink: "/contact",
    secondaryBtnText: "Enquire Now",
    secondaryBtnLink: "#handover-form",
    bgStyle:
      "linear-gradient(rgba(9, 40, 30, 0.88), rgba(9, 40, 30, 0.92)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 3,
    tag: "PROPERTY MANAGEMENT",
    title: "Trusted by Landlords",
    description:
      "Transparent, reliable management that keeps your property occupied and well maintained.",
    primaryBtnText: "Get Started",
    primaryBtnLink: "#handover-form",
    secondaryBtnText: "Our Services",
    secondaryBtnLink: "#management-services",
    bgStyle:
      "linear-gradient(rgba(9, 40, 30, 0.88), rgba(9, 40, 30, 0.92)), url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 4,
    tag: "PROPERTY MANAGEMENT",
    title: "Let Us Manage Your Property",
    description:
      "Hand over the day-to-day and enjoy the returns — we handle the rest.",
    primaryBtnText: "Enquire Now",
    primaryBtnLink: "#handover-form",
    secondaryBtnText: "Contact Us",
    secondaryBtnLink: "/contact",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')",
  },
];

/* ================= SERVICES DATA ================= */
const managementServices = [
  {
    id: "supervision",
    icon: Building2,
    title: "Property Supervision",
    description:
      "Regular oversight of your property to ensure it remains in excellent condition at all times.",
  },
  {
    id: "inspection",
    icon: ClipboardCheck,
    title: "Property Inspection",
    description:
      "Detailed, documented inspections with clear reports and actionable recommendations.",
  },
  {
    id: "tenant-management",
    icon: Users,
    title: "Tenant Management",
    description:
      "Sourcing, screening and managing reliable tenants on your behalf.",
  },
  {
    id: "rent-collection",
    icon: Wallet,
    title: "Rent Collection",
    description:
      "Timely rent collection and remittance with full transparency and records.",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance Coordination",
    description:
      "Coordinating repairs and upkeep with trusted, vetted vendors.",
  },
  {
    id: "facility-management",
    icon: ShieldCheck,
    title: "Facility Management",
    description:
      "End-to-end management of facilities and shared amenities.",
  },
  {
    id: "property-marketing",
    icon: Megaphone,
    title: "Property Marketing",
    description:
      "Marketing your property to the right audience for faster, better occupancy.",
  },
  {
    id: "landlord-support",
    icon: Headphones,
    title: "Landlord Support",
    description:
      "Advisory and administrative support for property owners, whenever you need it.",
  },
  {
    id: "tenant-relations",
    icon: HeartHandshake,
    title: "Tenant Relations",
    description:
      "Maintaining positive, responsive relationships with your tenants.",
  },
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
  max-width: 720px;
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
    line-height: 1.25;
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

const ServiceBoxCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  padding: 2.2rem 1.6rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, border-color 0.2s;

  .icon-wrapper {
    width: 42px;
    height: 42px;
    border-radius: 4px;
    background: #eef4f1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${MidGreen};
    margin-bottom: 1.2rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  h3 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${DarkText};
    margin: 0 0 0.6rem 0;
  }

  p {
    font-size: 0.8rem;
    color: ${MutedText};
    line-height: 1.55;
    margin: 0;
    font-weight: 300;
  }

  &:hover {
    border-color: ${GoldAccent};
    transform: translateY(-2px);
  }
`;

/* ----- FORMS ----- */
const FormBox = styled.form`
  max-width: 780px;
  margin: 0 auto;
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  padding: 2.5rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);

  @media (max-width: 600px) {
    padding: 1.5rem 1.25rem;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: ${MutedText};
    text-transform: uppercase;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.75rem;
    background-color: ${WarmBg};
    border: 1px solid ${BorderColor};
    border-radius: 2px;
    font-size: 0.85rem;
    color: ${DarkText};
    outline: none;
    box-sizing: border-box;

    &:focus {
      border-color: ${GoldAccent};
    }
  }

  textarea {
    min-height: 110px;
    resize: vertical;
  }
`;

const SubmitGreenBtn = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: ${MidGreen};
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    opacity: 0.92;
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

/* ----- GREEN BANNER CTA ----- */
const GreenBannerSection = styled.section`
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

/* ================= MAIN COMPONENT ================= */

export default function PropertyManagementPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [currency, setCurrency] = useState("₦");

  // Form State
  const [handoverData, setHandoverData] = useState({
    fullName: "",
    phone: "",
    email: "",
    propertyType: "",
    propertyLocation: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  const handleHandoverSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send data to your backend API route
      // (Adjust '/api/contact' to match your actual API route path)
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formTitle: "Property Management Inquiry",
          ...handoverData,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        Swal.fire({
          title: "Property Handover Enquired 🎉",
          text:
            data.message ||
            "Thank you! Our property management team will get back to you within 24 hours with a tailored plan.",
          icon: "success",
          confirmButtonColor: "#2e7d32", // Replace with MidGreen variable if imported/defined
        });

        // Reset form fields
        setHandoverData({
          fullName: "",
          phone: "",
          email: "",
          propertyType: "",
          propertyLocation: "",
          details: "",
        });
      } else {
        throw new Error(
          data.message || data.error || "Failed to submit property details."
        );
      }
    } catch (error) {
      Swal.fire({
        title: "Submission Failed ❌",
        text: error.message || "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#d32f2f",
      });
    } finally {
      setLoading(false);
    }
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
          <span className="tag">WE MANAGE PROPERTIES</span>
          <h2>
            We don't just list properties — we manage them for the people who
            own them.
          </h2>
          <p>
            Anointed Nigeria Limited offers complete property management for
            landlords and investors. Whether you own one apartment or a
            portfolio, we take care of supervision, tenants, maintenance and
            collections — so your investment works for you without the stress.
          </p>
        </HeaderBlock>

        {/* 3. COMPREHENSIVE PROPERTY MANAGEMENT GRID */}
        <HeaderBlock id="management-services" style={{ marginBottom: "2.5rem" }}>
          <span className="tag">— WHAT WE HANDLE —</span>
          <h2>Comprehensive Property Management</h2>
          <p>
            Every aspect of your property, managed by specialists who treat it
            like their own.
          </p>
        </HeaderBlock>

        <ThreeColumnGrid>
          {managementServices.map((service) => {
            const IconComp = service.icon;
            return (
              <ServiceBoxCard key={service.id}>
                <div className="icon-wrapper">
                  <IconComp />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </ServiceBoxCard>
            );
          })}
        </ThreeColumnGrid>
      </SectionContainer>

      {/* 4. HAND OVER THE DAY-TO-DAY FORM */}
      <SectionContainer id="handover-form" style={{ paddingTop: "2rem" }}>
        <HeaderBlock style={{ marginBottom: "1.5rem" }}>
          <span className="tag">— LET US MANAGE YOUR PROPERTY —</span>
          <h2>Hand Over the Day-to-Day</h2>
          <p>
            Tell us about your property and we'll get back to you within 24 hours
            with a tailored management plan.
          </p>
        </HeaderBlock>

        <FormBox onSubmit={handleHandoverSubmit}>
          <FormRow>
            <FormGroup>
              <label>FULL NAME *</label>
              <input
                type="text"
                placeholder="Your name"
                required
                value={handoverData.fullName}
                onChange={(e) =>
                  setHandoverData({ ...handoverData, fullName: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <label>PHONE *</label>
              <input
                type="tel"
                placeholder="Phone number"
                required
                value={handoverData.phone}
                onChange={(e) =>
                  setHandoverData({ ...handoverData, phone: e.target.value })
                }
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <label>EMAIL *</label>
              <input
                type="email"
                placeholder="Email address"
                required
                value={handoverData.email}
                onChange={(e) =>
                  setHandoverData({ ...handoverData, email: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <label>PROPERTY TYPE</label>
              <input
                type="text"
                placeholder="e.g. Apartment, Duplex, Land"
                value={handoverData.propertyType}
                onChange={(e) =>
                  setHandoverData({ ...handoverData, propertyType: e.target.value })
                }
              />
            </FormGroup>
          </FormRow>

          <FormGroup style={{ marginBottom: "1.25rem" }}>
            <label>PROPERTY LOCATION</label>
            <input
              type="text"
              placeholder="e.g. Lekki, Lagos"
              value={handoverData.propertyLocation}
              onChange={(e) =>
                setHandoverData({
                  ...handoverData,
                  propertyLocation: e.target.value,
                })
              }
            />
          </FormGroup>

          <FormGroup style={{ marginBottom: "1.5rem" }}>
            <label>TELL US ABOUT YOUR PROPERTY</label>
            <textarea
              placeholder="Number of units, current status, what you need managed..."
              value={handoverData.details}
              onChange={(e) =>
                setHandoverData({ ...handoverData, details: e.target.value })
              }
            />
          </FormGroup>

          <SubmitGreenBtn type="submit" disabled={loading}>
            {loading ? "SUBMITTING..." : "LET US MANAGE YOUR PROPERTY →"}
          </SubmitGreenBtn>
        </FormBox>
      </SectionContainer>

      {/* 5. MAKE A PAYMENT */}
      <SecurePaymentSection />

      {/* 6. BOTTOM GREEN CTA BANNER */}
      <GreenBannerSection>
        <span className="tag">PREFER TO TALK?</span>
        <h2>Speak to our property management team today.</h2>
        <ButtonGroup style={{ justifyContent: "center" }}>
          <PrimaryGoldBtn href="/contact">CONTACT US →</PrimaryGoldBtn>
          <SecondaryOutlineBtn href="/properties">
            VIEW PROPERTIES
          </SecondaryOutlineBtn>
        </ButtonGroup>
      </GreenBannerSection>
    </PageWrapper>
  );
}

// /* ================= MAIN COMPONENT ================= */
// export default function PropertyManagementPage() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [paymentAmount, setPaymentAmount] = useState("");
//   const [currency, setCurrency] = useState("₦");

//   // Auto-slide effect
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   const slide = heroSlides[currentSlide];

//   const handleHandoverSubmit = (e) => {
//     e.preventDefault();
//     Swal.fire({
//       title: "Property Handover Enquired 🎉",
//       text: "Thank you! Our property management team will get back to you within 24 hours with a tailored plan.",
//       icon: "success",
//       confirmButtonColor: MidGreen,
//     });
//   };

//   return (
//     <PageWrapper>
//       {/* 1. HERO SLIDER SECTION */}
//       <HeroContainer $bg={slide.bgStyle}>
//         <HeroContent key={slide.id}>
//           {slide.tag && (
//             <TagRow>
//               <div className="line" />
//               <span>{slide.tag}</span>
//             </TagRow>
//           )}
//           <HeroTitle>{slide.title}</HeroTitle>
//           <HeroDescription>{slide.description}</HeroDescription>
//           <ButtonGroup>
//             <PrimaryGoldBtn href={slide.primaryBtnLink}>
//               {slide.primaryBtnText} →
//             </PrimaryGoldBtn>
//             <SecondaryOutlineBtn href={slide.secondaryBtnLink}>
//               {slide.secondaryBtnText}
//             </SecondaryOutlineBtn>
//           </ButtonGroup>
//         </HeroContent>

//         {/* CONTROLS */}
//         <SliderControls>
//           <Indicators>
//             <Bars>
//               {heroSlides.map((_, idx) => (
//                 <Bar
//                   key={idx}
//                   $active={idx === currentSlide}
//                   onClick={() => setCurrentSlide(idx)}
//                 />
//               ))}
//             </Bars>
//             <span className="counter">
//               0{currentSlide + 1} / 0{heroSlides.length}
//             </span>
//           </Indicators>

//           <ArrowGroup>
//             <ArrowBtn
//               onClick={() =>
//                 setCurrentSlide((prev) =>
//                   prev === 0 ? heroSlides.length - 1 : prev - 1
//                 )
//               }
//             >
//               ←
//             </ArrowBtn>
//             <ArrowBtn
//               onClick={() =>
//                 setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
//               }
//             >
//               →
//             </ArrowBtn>
//           </ArrowGroup>
//         </SliderControls>
//       </HeroContainer>

//       {/* 2. OVERVIEW HEADER */}
//       <SectionContainer style={{ paddingBottom: "2rem" }}>
//         <HeaderBlock style={{ marginBottom: "2rem" }}>
//           <span className="tag">WE MANAGE PROPERTIES</span>
//           <h2>
//             We don't just list properties — we manage them for the people who
//             own them.
//           </h2>
//           <p>
//             Anointed Nigeria Limited offers complete property management for
//             landlords and investors. Whether you own one apartment or a
//             portfolio, we take care of supervision, tenants, maintenance and
//             collections — so your investment works for you without the stress.
//           </p>
//         </HeaderBlock>

//         {/* 3. COMPREHENSIVE PROPERTY MANAGEMENT GRID */}
//         <HeaderBlock id="management-services" style={{ marginBottom: "2.5rem" }}>
//           <span className="tag">— WHAT WE HANDLE —</span>
//           <h2>Comprehensive Property Management</h2>
//           <p>
//             Every aspect of your property, managed by specialists who treat it
//             like their own.
//           </p>
//         </HeaderBlock>

//         <ThreeColumnGrid>
//           {managementServices.map((service) => {
//             const IconComp = service.icon;
//             return (
//               <ServiceBoxCard key={service.id}>
//                 <div className="icon-wrapper">
//                   <IconComp />
//                 </div>
//                 <h3>{service.title}</h3>
//                 <p>{service.description}</p>
//               </ServiceBoxCard>
//             );
//           })}
//         </ThreeColumnGrid>
//       </SectionContainer>

//       {/* 4. HAND OVER THE DAY-TO-DAY FORM */}
//       <SectionContainer id="handover-form" style={{ paddingTop: "2rem" }}>
//         <HeaderBlock style={{ marginBottom: "1.5rem" }}>
//           <span className="tag">— LET US MANAGE YOUR PROPERTY —</span>
//           <h2>Hand Over the Day-to-Day</h2>
//           <p>
//             Tell us about your property and we'll get back to you within 24 hours
//             with a tailored management plan.
//           </p>
//         </HeaderBlock>

//         <FormBox onSubmit={handleHandoverSubmit}>
//           <FormRow>
//             <FormGroup>
//               <label>FULL NAME *</label>
//               <input type="text" placeholder="Your name" required />
//             </FormGroup>
//             <FormGroup>
//               <label>PHONE *</label>
//               <input type="tel" placeholder="Phone number" required />
//             </FormGroup>
//           </FormRow>

//           <FormRow>
//             <FormGroup>
//               <label>EMAIL *</label>
//               <input type="email" placeholder="Email address" required />
//             </FormGroup>
//             <FormGroup>
//               <label>PROPERTY TYPE</label>
//               <input type="text" placeholder="e.g. Apartment, Duplex, Land" />
//             </FormGroup>
//           </FormRow>

//           <FormGroup style={{ marginBottom: "1.25rem" }}>
//             <label>PROPERTY LOCATION</label>
//             <input type="text" placeholder="e.g. Lekki, Lagos" />
//           </FormGroup>

//           <FormGroup style={{ marginBottom: "1.5rem" }}>
//             <label>TELL US ABOUT YOUR PROPERTY</label>
//             <textarea placeholder="Number of units, current status, what you need managed..." />
//           </FormGroup>

//           <SubmitGreenBtn type="submit">
//             LET US MANAGE YOUR PROPERTY →
//           </SubmitGreenBtn>
//         </FormBox>
//       </SectionContainer>

//       {/* 5. MAKE A PAYMENT */}
// <SecurePaymentSection/>
//       {/* 6. BOTTOM GREEN CTA BANNER */}
//       <GreenBannerSection>
//         <span className="tag">PREFER TO TALK?</span>
//         <h2>Speak to our property management team today.</h2>
//         <ButtonGroup style={{ justifyContent: "center" }}>
//           <PrimaryGoldBtn href="/contact">CONTACT US →</PrimaryGoldBtn>
//           <SecondaryOutlineBtn href="/properties">
//             VIEW PROPERTIES
//           </SecondaryOutlineBtn>
//         </ButtonGroup>
//       </GreenBannerSection>
//     </PageWrapper>
//   );
// }