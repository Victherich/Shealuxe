"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Swal from "sweetalert2";
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
    tag: "BUSINESS CONSULTING",
    title: "Corporate Consulting",
    description: "Advisory for established companies navigating change and opportunity.",
    primaryBtnText: "Book a Consultation",
    primaryBtnLink: "#schedule-consultation",
    secondaryBtnText: "Explore Services",
    secondaryBtnLink: "#advisory-services",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 2,
    tag: "BUSINESS CONSULTING",
    title: "Growth, Engineered",
    description: "Strategy and restructuring for companies ready to scale.",
    primaryBtnText: "Growth Strategy",
    primaryBtnLink: "#advisory-services",
    secondaryBtnText: "Talk to Us",
    secondaryBtnLink: "#schedule-consultation",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 3,
    tag: "BUSINESS CONSULTING",
    title: "From Idea to Structured Business",
    description: "Startup consulting that turns a spark into a registered, sustainable company.",
    primaryBtnText: "Book a Consultation",
    primaryBtnLink: "#schedule-consultation",
    secondaryBtnText: "Our Services",
    secondaryBtnLink: "#advisory-services",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80')",
  },
  {
    id: 4,
    tag: "BUSINESS CONSULTING",
    title: "Strategy With Substance",
    description: "Business plans, marketing and development built on real market insight.",
    primaryBtnText: "Develop a Plan",
    primaryBtnLink: "#schedule-consultation",
    secondaryBtnText: "Book a Consultation",
    secondaryBtnLink: "#schedule-consultation",
    bgStyle:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')",
  },
];

/* ================= ADVISORY SERVICES DATA ================= */
const advisoryServices = [
  {
    id: "idea-validation",
    title: "Business Idea Validation",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "startup-consulting",
    title: "Startup Consulting",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "business-development",
    title: "Business Development",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "business-strategy",
    title: "Business Strategy",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "growth-restructuring",
    title: "Growth & Restructuring",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "entrepreneur-coaching",
    title: "Entrepreneur Coaching",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
];

/* ================= SEMINAR SESSIONS DATA ================= */
const seminarSessions = [
  {
    id: "gov-funding",
    title: "Government Funding Seminars & Lectures",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "health-profs",
    title: "Training for Health Professionals",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "networking-events",
    title: "Social Networking Events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "safeguarding",
    title: "Safeguarding",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "political-security",
    title: "Political & Security Measures",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
  },
];

/* ================= STYLED COMPONENTS ================= */
const PageWrapper = styled.div`
  width: 100%;
  background-color: ${WarmBg};
  color: ${DarkText};
  font-family: inherit;
`;

/* ----- HERO SECTION ----- */
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

/* ----- GRID CARDS ----- */
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

const ImageCard = styled.div`
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
    min-height: 90px;
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

/* ----- GREEN BANNER SECTIONS ----- */
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
    font-size: 2.4rem;
    font-weight: 400;
    margin: 0 0 0.8rem 0;
    line-height: 1.25;

    @media (max-width: 600px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 0.88rem;
    color: rgba(255, 255, 255, 0.75);
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.6;
    font-weight: 300;
  }
`;

const BottomHeroBanner = styled.section`
  position: relative;
  width: 100%;
  padding: 6rem 1.5rem;
  background: linear-gradient(rgba(9, 40, 30, 0.85), rgba(9, 40, 30, 0.9)),
    url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80");
  background-size: cover;
  background-position: center;
  text-align: center;
  color: #ffffff;
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
    font-size: 2.8rem;
    font-weight: 400;
    margin: 0 0 2rem 0;

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

// /* ================= MAIN COMPONENT ================= */
// export default function BusinessConsultingPage() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [paymentAmount, setPaymentAmount] = useState("");
//   const [currency, setCurrency] = useState("₦");

//   // Form states
//   const [seminarTopic, setSeminarTopic] = useState("Government Funding Seminars & Lectures");
//   const [consultType, setConsultType] = useState("Business Idea Validation");

//   // Auto-slide effect
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   const slide = heroSlides[currentSlide];

//   const handleSeminarSubmit = (e) => {
//     e.preventDefault();
//     Swal.fire({
//       title: "Place Requested 🎉",
//       text: "Your seminar place request has been received. Our team will contact you within 24 hours.",
//       icon: "success",
//       confirmButtonColor: MidGreen,
//     });
//   };

//   const handleConsultationSubmit = (e) => {
//     e.preventDefault();
//     Swal.fire({
//       title: "Consultation Scheduled ✅",
//       text: "Thank you! We have received your request and will confirm availability shortly.",
//       icon: "success",
//       confirmButtonColor: GoldAccent,
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

//       {/* 2. OVERVIEW INTRO */}
//       <SectionContainer style={{ paddingBottom: "2rem" }}>
//         <HeaderBlock style={{ marginBottom: "2rem" }}>
//           <span className="tag">BUSINESS CONSULTING</span>
//           <h2>Turn your idea into a business that grows — and lasts.</h2>
//           <p>
//             We work with entrepreneurs, startups and established companies to build structure, strategy and momentum. From registration guidance to growth plans, we're your thinking partner.
//           </p>
//         </HeaderBlock>

//         {/* 3. ADVISORY SERVICES GRID */}
//         <HeaderBlock id="advisory-services" style={{ marginBottom: "2.5rem" }}>
//           <span className="tag">— ADVISORY SERVICES —</span>
//           <h2>Every Stage of Your Business</h2>
//           <p>
//             Whether you're starting out or scaling up, our consultants provide structure, strategy and accountability.
//           </p>
//         </HeaderBlock>

//         <ThreeColumnGrid>
//           {advisoryServices.map((service) => (
//             <ImageCard key={service.id}>
//               <img src={service.image} alt={service.title} />
//               <div className="gradient-overlay">
//                 <h3 className="title">{service.title}</h3>
//                 <button
//                   className="explore-btn"
//                   onClick={() => {
//                     setConsultType(service.title);
//                     const el = document.getElementById("schedule-consultation");
//                     if (el) el.scrollIntoView({ behavior: "smooth" });
//                   }}
//                 >
//                   EXPLORE SERVICE — →
//                 </button>
//               </div>
//             </ImageCard>
//           ))}
//         </ThreeColumnGrid>
//       </SectionContainer>

//       {/* 4. SEMINAR & CONSULTATION SESSIONS GRID */}
//       <SectionContainer style={{ paddingTop: "2rem" }}>
//         <HeaderBlock style={{ marginBottom: "2.5rem" }}>
//           <span className="tag">— UK · USA · EUROPE —</span>
//           <h2>Seminar & Consultation Sessions</h2>
//           <p>
//             Book government funding seminars, professional training, networking events and specialist briefings — delivered across the UK, USA and Europe.
//           </p>
//         </HeaderBlock>

//         <ThreeColumnGrid>
//           {seminarSessions.map((session) => (
//             <ImageCard key={session.id}>
//               <img src={session.image} alt={session.title} />
//               <div className="gradient-overlay">
//                 <h3 className="title">{session.title}</h3>
//                 <button
//                   className="explore-btn"
//                   onClick={() => {
//                     setSeminarTopic(session.title);
//                     const el = document.getElementById("reserve-seminar");
//                     if (el) el.scrollIntoView({ behavior: "smooth" });
//                   }}
//                 >
//                   RESERVE PLACE — →
//                 </button>
//               </div>
//             </ImageCard>
//           ))}
//         </ThreeColumnGrid>
//       </SectionContainer>

//       {/* 5. RESERVE YOUR SEMINAR PLACE FORM */}
//       <SectionContainer id="reserve-seminar" style={{ paddingTop: "2rem" }}>
//         <HeaderBlock style={{ marginBottom: "1.5rem" }}>
//           <span className="tag">— BOOK A SESSION —</span>
//           <h2>Reserve Your Seminar Place</h2>
//           <p>Tell us your topic, preferred date and region — our team will confirm availability within 24 hours.</p>
//         </HeaderBlock>

//         <FormBox onSubmit={handleSeminarSubmit}>
//           <FormRow>
//             <FormGroup>
//               <label>FULL NAME *</label>
//               <input type="text" placeholder="Your name" required />
//             </FormGroup>
//             <FormGroup>
//               <label>EMAIL *</label>
//               <input type="email" placeholder="Email" required />
//             </FormGroup>
//           </FormRow>

//           <FormRow>
//             <FormGroup>
//               <label>ORGANISATION / ROLE</label>
//               <input type="text" placeholder="e.g. NHS, Senior Clinician" />
//             </FormGroup>
//             <FormGroup>
//               <label>SEMINAR TOPIC</label>
//               <select
//                 value={seminarTopic}
//                 onChange={(e) => setSeminarTopic(e.target.value)}
//               >
//                 <option>Government Funding Seminars & Lectures</option>
//                 <option>Training for Health Professionals</option>
//                 <option>Social Networking Events</option>
//                 <option>Safeguarding</option>
//                 <option>Political & Security Measures</option>
//               </select>
//             </FormGroup>
//           </FormRow>

//           <FormRow>
//             <FormGroup>
//               <label>PREFERRED DATE</label>
//               <input type="date" />
//             </FormGroup>
//             <FormGroup>
//               <label>PREFERRED REGION</label>
//               <select>
//                 <option>United Kingdom</option>
//                 <option>United States</option>
//                 <option>Europe</option>
//                 <option>Africa / International</option>
//               </select>
//             </FormGroup>
//           </FormRow>

//           <FormGroup style={{ marginBottom: "1.5rem" }}>
//             <label>NOTES</label>
//             <textarea placeholder="Number of attendees, specific requirements, etc." />
//           </FormGroup>

//           <SubmitGreenBtn type="submit">
//             REQUEST SEMINAR PLACE →
//           </SubmitGreenBtn>
//         </FormBox>
//       </SectionContainer>

//       {/* 6. SCHEDULE YOUR CONSULTATION FORM */}
//       <SectionContainer id="schedule-consultation" style={{ paddingTop: "3rem" }}>
//         <HeaderBlock style={{ marginBottom: "1.5rem" }}>
//           <span className="tag">— BOOK A SESSION —</span>
//           <h2>Schedule Your Consultation</h2>
//           <p>Tell us about your business and preferred time — we'll confirm within 24 hours.</p>
//         </HeaderBlock>

//         <FormBox onSubmit={handleConsultationSubmit}>
//           <FormRow>
//             <FormGroup>
//               <label>CONSULTATION TYPE</label>
//               <select
//                 value={consultType}
//                 onChange={(e) => setConsultType(e.target.value)}
//               >
//                 <option>Business Idea Validation</option>
//                 <option>Startup Consulting</option>
//                 <option>Business Development</option>
//                 <option>Business Strategy</option>
//                 <option>Growth & Restructuring</option>
//                 <option>Entrepreneur Coaching</option>
//               </select>
//             </FormGroup>

//             <FormGroup>
//               <label>BUSINESS STAGE</label>
//               <select>
//                 <option>Idea Stage</option>
//                 <option>Early Stage / Pre-revenue</option>
//                 <option>Operational / Growing</option>
//                 <option>Established / Scaling</option>
//               </select>
//             </FormGroup>
//           </FormRow>

//           <FormRow>
//             <FormGroup>
//               <label>INDUSTRY</label>
//               <input type="text" placeholder="e.g. Retail, Tech, Hospitality" />
//             </FormGroup>

//             <FormGroup>
//               <label>PREFERRED FORMAT</label>
//               <select>
//                 <option>In Person (Lagos)</option>
//                 <option>Virtual / Online (Zoom/Google Meet)</option>
//                 <option>International On-Site</option>
//               </select>
//             </FormGroup>
//           </FormRow>

//           <FormRow>
//             <FormGroup>
//               <label>PREFERRED DATE</label>
//               <input type="date" />
//             </FormGroup>

//             <FormGroup>
//               <label>PREFERRED TIME</label>
//               <input type="time" />
//             </FormGroup>
//           </FormRow>

//           <FormGroup style={{ marginBottom: "1.5rem" }}>
//             <label>BUDGET RANGE</label>
//             <input type="text" placeholder="e.g. ₦100,000 - ₦250,000" />
//           </FormGroup>

//           <SubmitGreenBtn type="submit">
//             REQUEST CONSULTATION →
//           </SubmitGreenBtn>
//         </FormBox>
//       </SectionContainer>

//       {/* 7. MAKE A PAYMENT */}
//       <SectionContainer style={{ paddingTop: "2rem" }}>
//         <HeaderBlock style={{ marginBottom: "1.5rem" }}>
//           <span className="tag">SECURE PAYMENT</span>
//           <h2 style={{ fontSize: "1.8rem" }}>Make a Payment</h2>
//           <p>
//             Pay for Business Consulting securely online via Stripe, Paystack or Flutterwave.
//           </p>
//         </HeaderBlock>

//         <PaymentCard>
//           <label
//             style={{
//               fontSize: "0.62rem",
//               fontWeight: 700,
//               letterSpacing: "0.12em",
//               color: MutedText,
//               display: "block",
//               textAlign: "left",
//               marginBottom: "0.4rem",
//             }}
//           >
//             AMOUNT
//           </label>
//           <AmountInputWrapper>
//             <input
//               type="number"
//               placeholder="Enter amount"
//               value={paymentAmount}
//               onChange={(e) => setPaymentAmount(e.target.value)}
//             />
//             <select
//               value={currency}
//               onChange={(e) => setCurrency(e.target.value)}
//             >
//               <option value="₦">₦</option>
//               <option value="$">$</option>
//               <option value="£">£</option>
//             </select>
//           </AmountInputWrapper>
//           <PayBtn
//             onClick={() =>
//               Swal.fire(
//                 "Payment Initiated",
//                 `Redirecting to payment gateway for ${currency}${
//                   paymentAmount || 0
//                 }...`,
//                 "info"
//               )
//             }
//           >
//             ENTER AMOUNT TO PAY
//           </PayBtn>
//         </PaymentCard>
//       </SectionContainer>

//       {/* 8. GREEN GOALS CTA */}
//       <GreenBannerSection>
//         <span className="tag">CONSULTING FOR BUSINESS & DEVELOPMENT</span>
//         <h2>Tell us your goals — our professionals will assist you.</h2>
//         <p>
//           From business development to strategic growth, our consultants tailor a plan to your needs. Email us for a personalized quote and we'll take it from there.
//         </p>
//         <PrimaryGoldBtn href="/contact?type=quote">
//           EMAIL FOR QUOTE →
//         </PrimaryGoldBtn>
//       </GreenBannerSection>

//       {/* 9. BOTTOM HERO BANNER */}
//       <BottomHeroBanner>
//         <span className="tag">LET'S BUILD TOGETHER</span>
//         <h2>Your business deserves a strategy that works.</h2>
//         <ButtonGroup style={{ justifyContent: "center" }}>
//           <PrimaryGoldBtn href="#schedule-consultation">
//             BOOK A CONSULTATION →
//           </PrimaryGoldBtn>
//           <SecondaryOutlineBtn href="/contact">
//             CONTACT US
//           </SecondaryOutlineBtn>
//         </ButtonGroup>
//       </BottomHeroBanner>
//     </PageWrapper>
//   );
// }


/* ================= MAIN COMPONENT ================= */


export default function BusinessConsultingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [currency, setCurrency] = useState("₦");

  // Form states
  const [seminarTopic, setSeminarTopic] = useState("Government Funding Seminars & Lectures");
  const [consultType, setConsultType] = useState("Business Idea Validation");

  // 1. Seminar Form State
  const [seminarData, setSeminarData] = useState({
    fullName: "",
    email: "",
    organisationRole: "",
    preferredDate: "",
    preferredRegion: "United Kingdom",
    notes: "",
  });
  const [seminarLoading, setSeminarLoading] = useState(false);

  // 2. Consultation Form State
  const [consultData, setConsultData] = useState({
    businessStage: "Idea Stage",
    industry: "",
    preferredFormat: "In Person (Lagos)",
    preferredDate: "",
    preferredTime: "",
    budgetRange: "",
  });
  const [consultLoading, setConsultLoading] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  // Seminar Form Handler
  const handleSeminarSubmit = async (e) => {
    e.preventDefault();
    setSeminarLoading(true);

    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formTitle: "Seminar Reservation Request",
          seminarTopic,
          ...seminarData,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        Swal.fire({
          title: "Place Requested 🎉",
          text: data.message || "Your seminar place request has been received. Our team will contact you within 24 hours.",
          icon: "success",
          confirmButtonColor: "#2e7d32", // Replace with MidGreen variable if defined in your scope
        });

        // Reset form
        setSeminarData({
          fullName: "",
          email: "",
          organisationRole: "",
          preferredDate: "",
          preferredRegion: "United Kingdom",
          notes: "",
        });
      } else {
        throw new Error(data.message || data.error || "Failed to submit seminar reservation.");
      }
    } catch (error) {
      Swal.fire({
        title: "Submission Failed ❌",
        text: error.message || "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#d32f2f",
      });
    } finally {
      setSeminarLoading(false);
    }
  };

  // Consultation Form Handler
  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    setConsultLoading(true);

    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formTitle: "Business Consultation Booking",
          consultationType: consultType,
          ...consultData,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        Swal.fire({
          title: "Consultation Scheduled ✅",
          text: data.message || "Thank you! We have received your request and will confirm availability shortly.",
          icon: "success",
          confirmButtonColor: "#c5a059", // Replace with GoldAccent variable if defined in your scope
        });

        // Reset optional fields
        setConsultData({
          businessStage: "Idea Stage",
          industry: "",
          preferredFormat: "In Person (Lagos)",
          preferredDate: "",
          preferredTime: "",
          budgetRange: "",
        });
      } else {
        throw new Error(data.message || data.error || "Failed to submit consultation booking.");
      }
    } catch (error) {
      Swal.fire({
        title: "Submission Failed ❌",
        text: error.message || "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#d32f2f",
      });
    } finally {
      setConsultLoading(false);
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

      {/* 2. OVERVIEW INTRO */}
      <SectionContainer style={{ paddingBottom: "2rem" }}>
        <HeaderBlock style={{ marginBottom: "2rem" }}>
          <span className="tag">BUSINESS CONSULTING</span>
          <h2>Turn your idea into a business that grows — and lasts.</h2>
          <p>
            We work with entrepreneurs, startups and established companies to build structure, strategy and momentum. From registration guidance to growth plans, we're your thinking partner.
          </p>
        </HeaderBlock>

        {/* 3. ADVISORY SERVICES GRID */}
        <HeaderBlock id="advisory-services" style={{ marginBottom: "2.5rem" }}>
          <span className="tag">— ADVISORY SERVICES —</span>
          <h2>Every Stage of Your Business</h2>
          <p>
            Whether you're starting out or scaling up, our consultants provide structure, strategy and accountability.
          </p>
        </HeaderBlock>

        <ThreeColumnGrid>
          {advisoryServices.map((service) => (
            <ImageCard key={service.id}>
              <img src={service.image} alt={service.title} />
              <div className="gradient-overlay">
                <h3 className="title">{service.title}</h3>
                <button
                  className="explore-btn"
                  onClick={() => {
                    setConsultType(service.title);
                    const el = document.getElementById("schedule-consultation");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  EXPLORE SERVICE — →
                </button>
              </div>
            </ImageCard>
          ))}
        </ThreeColumnGrid>
      </SectionContainer>

      {/* 4. SEMINAR & CONSULTATION SESSIONS GRID */}
      <SectionContainer style={{ paddingTop: "2rem" }}>
        <HeaderBlock style={{ marginBottom: "2.5rem" }}>
          <span className="tag">— UK · USA · EUROPE —</span>
          <h2>Seminar & Consultation Sessions</h2>
          <p>
            Book government funding seminars, professional training, networking events and specialist briefings — delivered across the UK, USA and Europe.
          </p>
        </HeaderBlock>

        <ThreeColumnGrid>
          {seminarSessions.map((session) => (
            <ImageCard key={session.id}>
              <img src={session.image} alt={session.title} />
              <div className="gradient-overlay">
                <h3 className="title">{session.title}</h3>
                <button
                  className="explore-btn"
                  onClick={() => {
                    setSeminarTopic(session.title);
                    const el = document.getElementById("reserve-seminar");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  RESERVE PLACE — →
                </button>
              </div>
            </ImageCard>
          ))}
        </ThreeColumnGrid>
      </SectionContainer>

      {/* 5. RESERVE YOUR SEMINAR PLACE FORM */}
      <SectionContainer id="reserve-seminar" style={{ paddingTop: "2rem" }}>
        <HeaderBlock style={{ marginBottom: "1.5rem" }}>
          <span className="tag">— BOOK A SESSION —</span>
          <h2>Reserve Your Seminar Place</h2>
          <p>Tell us your topic, preferred date and region — our team will confirm availability within 24 hours.</p>
        </HeaderBlock>

        <FormBox onSubmit={handleSeminarSubmit}>
          <FormRow>
            <FormGroup>
              <label>FULL NAME *</label>
              <input
                type="text"
                placeholder="Your name"
                required
                value={seminarData.fullName}
                onChange={(e) =>
                  setSeminarData({ ...seminarData, fullName: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <label>EMAIL *</label>
              <input
                type="email"
                placeholder="Email"
                required
                value={seminarData.email}
                onChange={(e) =>
                  setSeminarData({ ...seminarData, email: e.target.value })
                }
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <label>ORGANISATION / ROLE</label>
              <input
                type="text"
                placeholder="e.g. NHS, Senior Clinician"
                value={seminarData.organisationRole}
                onChange={(e) =>
                  setSeminarData({ ...seminarData, organisationRole: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <label>SEMINAR TOPIC</label>
              <select
                value={seminarTopic}
                onChange={(e) => setSeminarTopic(e.target.value)}
              >
                <option>Government Funding Seminars & Lectures</option>
                <option>Training for Health Professionals</option>
                <option>Social Networking Events</option>
                <option>Safeguarding</option>
                <option>Political & Security Measures</option>
              </select>
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <label>PREFERRED DATE</label>
              <input
                type="date"
                value={seminarData.preferredDate}
                onChange={(e) =>
                  setSeminarData({ ...seminarData, preferredDate: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <label>PREFERRED REGION</label>
              <select
                value={seminarData.preferredRegion}
                onChange={(e) =>
                  setSeminarData({ ...seminarData, preferredRegion: e.target.value })
                }
              >
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Europe</option>
                <option>Africa / International</option>
              </select>
            </FormGroup>
          </FormRow>

          <FormGroup style={{ marginBottom: "1.5rem" }}>
            <label>NOTES</label>
            <textarea
              placeholder="Number of attendees, specific requirements, etc."
              value={seminarData.notes}
              onChange={(e) =>
                setSeminarData({ ...seminarData, notes: e.target.value })
              }
            />
          </FormGroup>

          <SubmitGreenBtn type="submit" disabled={seminarLoading}>
            {seminarLoading ? "SUBMITTING..." : "REQUEST SEMINAR PLACE →"}
          </SubmitGreenBtn>
        </FormBox>
      </SectionContainer>

      {/* 6. SCHEDULE YOUR CONSULTATION FORM */}
      <SectionContainer id="schedule-consultation" style={{ paddingTop: "3rem" }}>
        <HeaderBlock style={{ marginBottom: "1.5rem" }}>
          <span className="tag">— BOOK A SESSION —</span>
          <h2>Schedule Your Consultation</h2>
          <p>Tell us about your business and preferred time — we'll confirm within 24 hours.</p>
        </HeaderBlock>

        <FormBox onSubmit={handleConsultationSubmit}>
          <FormRow>
            <FormGroup>
              <label>CONSULTATION TYPE</label>
              <select
                value={consultType}
                onChange={(e) => setConsultType(e.target.value)}
              >
                <option>Business Idea Validation</option>
                <option>Startup Consulting</option>
                <option>Business Development</option>
                <option>Business Strategy</option>
                <option>Growth & Restructuring</option>
                <option>Entrepreneur Coaching</option>
              </select>
            </FormGroup>

            <FormGroup>
              <label>BUSINESS STAGE</label>
              <select
                value={consultData.businessStage}
                onChange={(e) =>
                  setConsultData({ ...consultData, businessStage: e.target.value })
                }
              >
                <option>Idea Stage</option>
                <option>Early Stage / Pre-revenue</option>
                <option>Operational / Growing</option>
                <option>Established / Scaling</option>
              </select>
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <label>INDUSTRY</label>
              <input
                type="text"
                placeholder="e.g. Retail, Tech, Hospitality"
                value={consultData.industry}
                onChange={(e) =>
                  setConsultData({ ...consultData, industry: e.target.value })
                }
              />
            </FormGroup>

            <FormGroup>
              <label>PREFERRED FORMAT</label>
              <select
                value={consultData.preferredFormat}
                onChange={(e) =>
                  setConsultData({ ...consultData, preferredFormat: e.target.value })
                }
              >
                <option>In Person (Lagos)</option>
                <option>Virtual / Online (Zoom/Google Meet)</option>
                <option>International On-Site</option>
              </select>
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <label>PREFERRED DATE</label>
              <input
                type="date"
                value={consultData.preferredDate}
                onChange={(e) =>
                  setConsultData({ ...consultData, preferredDate: e.target.value })
                }
              />
            </FormGroup>

            <FormGroup>
              <label>PREFERRED TIME</label>
              <input
                type="time"
                value={consultData.preferredTime}
                onChange={(e) =>
                  setConsultData({ ...consultData, preferredTime: e.target.value })
                }
              />
            </FormGroup>
          </FormRow>

          <FormGroup style={{ marginBottom: "1.5rem" }}>
            <label>BUDGET RANGE</label>
            <input
              type="text"
              placeholder="e.g. ₦100,000 - ₦250,000"
              value={consultData.budgetRange}
              onChange={(e) =>
                setConsultData({ ...consultData, budgetRange: e.target.value })
              }
            />
          </FormGroup>

          <SubmitGreenBtn type="submit" disabled={consultLoading}>
            {consultLoading ? "SUBMITTING..." : "REQUEST CONSULTATION →"}
          </SubmitGreenBtn>
        </FormBox>
      </SectionContainer>

      {/* 7. MAKE A PAYMENT */}
<SecurePaymentSection/>

      {/* 8. GREEN GOALS CTA */}
      <GreenBannerSection>
        <span className="tag">CONSULTING FOR BUSINESS & DEVELOPMENT</span>
        <h2>Tell us your goals — our professionals will assist you.</h2>
        <p>
          From business development to strategic growth, our consultants tailor a plan to your needs. Email us for a personalized quote and we'll take it from there.
        </p>
        <PrimaryGoldBtn href="/contact?type=quote">
          EMAIL FOR QUOTE →
        </PrimaryGoldBtn>
      </GreenBannerSection>

      {/* 9. BOTTOM HERO BANNER */}
      <BottomHeroBanner>
        <span className="tag">LET'S BUILD TOGETHER</span>
        <h2>Your business deserves a strategy that works.</h2>
        <ButtonGroup style={{ justifyContent: "center" }}>
          <PrimaryGoldBtn href="#schedule-consultation">
            BOOK A CONSULTATION →
          </PrimaryGoldBtn>
          <SecondaryOutlineBtn href="/contact">
            CONTACT US
          </SecondaryOutlineBtn>
        </ButtonGroup>
      </BottomHeroBanner>
    </PageWrapper>
  );
}