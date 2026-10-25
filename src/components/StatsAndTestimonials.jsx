"use client";

import styled from "styled-components";
import { secondaryColoring } from "./Context";

/* ================= COLORS ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const DarkGreenBg = "#11382b";
const DarkText = "#1A1A1A";
const MutedText = "#706E6B";
const LightBg = "#FAF8F4";
const CardBg = "#FFFFFF";

/* ================= MAIN CONTAINER ================= */
const SectionContainer = styled.section`
  width: 100%;
  background-color: ${LightBg};
  box-sizing: border-box;
`;

/* ================= TOP STATS BANNER ================= */
const StatsBanner = styled.div`
  width: 100%;
  background-color: ${DarkGreenBg};
  padding: 3rem 1.5rem;
  box-sizing: border-box;
`;

const StatsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem 1rem;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNumber = styled.span`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.8rem;
  font-weight: 500;
  color: ${GoldAccent};
  line-height: 1;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const StatLabel = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: ${GoldAccent};
  text-transform: uppercase;
  opacity: 0.9;
`;

/* ================= TESTIMONIALS SECTION ================= */
const TestimonialsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem 6rem;
  text-align: center;
`;

const HeaderTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  color: ${GoldAccent};
  text-transform: uppercase;
  margin-bottom: 0.8rem;

  &::before,
  &::after {
    content: "";
    width: 24px;
    height: 1px;
    background-color: ${GoldAccent};
  }
`;

const SectionTitle = styled.h2`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.8rem;
  font-weight: 400;
  color: ${DarkText};
  margin: 0 0 0.8rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSub = styled.p`
  font-size: 0.95rem;
  color: ${MutedText};
  margin: 0 auto 3.5rem auto;
  max-width: 600px;
  font-weight: 300;
  line-height: 1.5;
`;

/* ================= TESTIMONIAL CARDS GRID ================= */
const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: ${CardBg};
  border: 1px solid rgba(226, 232, 240, 0.8);
  padding: 2.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  border-radius: 2px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.07);
    border-color: rgba(226, 176, 74, 0.4);
  }
`;

const QuoteIcon = styled.div`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.5rem;
  line-height: 1;
  color: ${GoldAccent};
  opacity: 0.6;
  margin-bottom: 0.8rem;
`;

const QuoteText = styled.p`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 0.98rem;
  font-style: italic;
  color: ${DarkText};
  line-height: 1.6;
  margin: 0 0 1.2rem 0;
`;

const StarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${GoldAccent};
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(226, 232, 240, 0.9);
  margin-bottom: 1.2rem;
`;

const AuthorMeta = styled.div``;

const AuthorName = styled.h4`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.05rem;
  font-weight: 500;
  color: ${DarkText};
  margin: 0 0 0.25rem 0;
`;

const AuthorCategory = styled.p`
  font-size: 0.72rem;
  color: ${MutedText};
  margin: 0;
  font-weight: 400;
`;

/* ================= DATA ================= */
const statsData = [
  { number: "850+", label: "PROPERTIES MANAGED" },
  { number: "1,200+", label: "HAPPY CLIENTS" },
  { number: "4", label: "CORE DIVISIONS" },
  { number: "15 yrs", label: "OF EXCELLENCE" },
];

const testimonialsData = [
  {
    quote:
      '"Their business consulting took our startup from idea to a registered, structured company in weeks."',
    stars: 5,
    author: "Tunde A.",
    category: "Business Consulting",
  },
  {
    quote:
      '"Ashakade Closet dressed me for my wedding. The craftsmanship was simply world-class."',
    stars: 5,
    author: "Chioma N.",
    category: "Ashakade Closet",
  },
  {
    quote:
      '"The interior décor team transformed our living room beyond what we imagined. Professional and detail-oriented."',
    stars: 5,
    author: "Emeka J.",
    category: "Interior Décor",
  },
  {
    quote:
      '"Pinkles found us the perfect short-let in Lekki and handled the cleaning — flawless from start to finish."',
    stars: 5,
    author: "Adewale O.",
    category: "Short-Let",
  },
  {
    quote:
      '"Best spa experience in Lagos. From the ambiance to the service, everything was top-notch."',
    stars: 5,
    author: "Funmi R.",
    category: "Pinkles Spa",
  },
  {
    quote:
      '"Sold my property through Pinkles in record time. Their real estate team is incredibly professional."',
    stars: 5,
    author: "David K.",
    category: "Properties",
  },
];

/* ================= COMPONENT ================= */
export default function StatsAndTestimonials() {
  return (
    <SectionContainer>
      {/* Top Banner with Key Performance Stats */}
      <StatsBanner>
        <StatsGrid>
          {statsData.map((stat, idx) => (
            <StatItem key={idx}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      </StatsBanner>

      {/* Client Testimonials Section */}
      <TestimonialsContent>
        <HeaderTag>CLIENT VOICES</HeaderTag>
        <SectionTitle>Trusted by Thousands</SectionTitle>
        <SectionSub>A reputation built on discretion, quality and results.</SectionSub>

        <TestimonialGrid>
          {testimonialsData.map((item, idx) => (
            <TestimonialCard key={idx}>
              <div>
                <QuoteIcon>“</QuoteIcon>
                <QuoteText>{item.quote}</QuoteText>
                <StarRow>
                  {[...Array(item.stars)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </StarRow>
              </div>

              <div>
                <Divider />
                <AuthorMeta>
                  <AuthorName>{item.author}</AuthorName>
                  <AuthorCategory>{item.category}</AuthorCategory>
                </AuthorMeta>
              </div>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </TestimonialsContent>
    </SectionContainer>
  );
}