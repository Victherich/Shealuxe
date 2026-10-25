"use client";

import styled from "styled-components";
import Link from "next/link";
import { secondaryColoring } from "./Context";

const GoldAccent = secondaryColoring || "#E2B04A";
const OffWhiteBg = "#FAF8F4";
const CardBg = "#FFFFFF";
const DarkText = "#1A1A1A";
const MutedText = "#706E6B";
const MutedTag = "#A09A90";

/* ================= CONTAINER & SECTION WRAPPERS ================= */
const PageSection = styled.section`
  width: 100%;
  background-color: #ffffff;
  color: ${DarkText};
  font-family: inherit;
`;

const TopBanner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 1.5rem 4.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSubTitle = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  color: ${GoldAccent};
  text-transform: uppercase;
  margin-bottom: 1.2rem;
`;

const TopHeading = styled.h1`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 1.25;
  color: ${DarkText};
  max-width: 950px;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.85rem;
  }
`;

const TopDescription = styled.p`
  font-size: 0.95rem;
  color: ${MutedText};
  line-height: 1.65;
  max-width: 720px;
  margin: 0;
  font-weight: 300;
`;

/* ================= BOTTOM GRID SECTION ================= */
const DivisionsSection = styled.div`
  background-color: ${OffWhiteBg};
  padding: 5rem 1.5rem 6rem;
`;

const InnerContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
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
  font-size: 2.5rem;
  font-weight: 400;
  color: ${DarkText};
  margin: 0 0 1rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionSub = styled.p`
  font-size: 0.9rem;
  color: ${MutedText};
  margin: 0 auto 3.5rem auto;
  max-width: 620px;
  font-weight: 300;
  line-height: 1.5;
`;

/* ================= CARDS GRID ================= */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${CardBg};
  border: 1px solid rgba(226, 232, 240, 0.7);
  padding: 2.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
    border-color: rgba(226, 176, 74, 0.4);
  }
`;

const CardContent = styled.div``;

const CardNumber = styled.div`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: ${GoldAccent};
  opacity: 0.85;
  margin-bottom: 0.75rem;
`;

const CardTitle = styled.h3`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${DarkText};
  margin: 0 0 0.35rem 0;
`;

const CardCategoryTag = styled.p`
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: ${MutedTag};
  text-transform: uppercase;
  margin: 0 0 1.8rem 0;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const ServiceItem = styled.li`
  font-size: 0.82rem;
  color: ${MutedText};
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: "▪";
    color: ${GoldAccent};
    font-size: 0.6rem;
  }
`;

const CardLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: ${MutedTag};
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease;

  .line {
    width: 20px;
    height: 1px;
    background-color: ${MutedTag};
    transition: all 0.2s ease;
  }

  &:hover {
    color: ${GoldAccent};

    .line {
      width: 32px;
      background-color: ${GoldAccent};
    }
  }
`;

/* ================= DATA ================= */
const divisionsData = [
  {
    number: "01",
    title: "Living",
    subtitle: "INTERIORS · HOME DECOR · SHORT-LETS",
    href: "/interior-decor",
    services: [
      "Interior Design",
      "Home Styling",
      "Short-Let Apartments",
      "Property Staging",
      "Cleaning Services",
    ],
  },
  {
    number: "02",
    title: "Lifestyle",
    subtitle: "FASHION · SPA · WELLNESS",
    href: "/ashakeade-closet",
    services: [
      "Women's Fashion",
      "Couture & Occasion Wear",
      "Spa & Massage",
      "Nails & Hair",
      "Bridal Packages",
    ],
  },
  {
    number: "03",
    title: "Property",
    subtitle: "BUYING · SELLING · ADVISORY · MORTGAGE",
    href: "/properties",
    services: [
      "Properties for Sale & Rent",
      "Short-Let Booking",
      "Property Advisory",
      "Mortgage Guidance",
      "Legal Consultancy",
    ],
  },
  {
    number: "04",
    title: "Professional Services",
    subtitle: "CONSULTING · ADVERTISING · BRAND · LEGAL",
    href: "/business-consulting",
    services: [
      "Business Strategy",
      "Brand & Ambassador",
      "Advertising & Media",
      "Transaction Consultancy",
      "Legal Advisory",
    ],
  },
];

/* ================= COMPONENT ================= */
export default function EcosystemDivisions() {
  return (
    <PageSection>
      {/* Top Banner Section */}
      <TopBanner>
        <TopSubTitle>THE PINKLES ECOSYSTEM</TopSubTitle>
        <TopHeading>
          One trusted brand bringing together real estate, hospitality, interior
          design, business consulting, media, fashion and beauty.
        </TopHeading>
        <TopDescription>
          Luxury meets purpose. We are a premium Nigerian group organised around
          four divisions — Living, Lifestyle, Property and Professional
          Services — each delivered with the same standard of excellence.
        </TopDescription>
      </TopBanner>

      {/* Bottom Divisions Section */}
      <DivisionsSection>
        <InnerContainer>
          <HeaderTag>EXPLORE OUR WORLD</HeaderTag>
          <SectionTitle>
            Four Divisions, One Standard of Excellence
          </SectionTitle>
          <SectionSub>
            An umbrella brand that feels intentional — each division led by
            specialists who deliver a world-class experience.
          </SectionSub>

          <Grid>
            {divisionsData.map((item) => (
              <Card key={item.number}>
                <CardContent>
                  <CardNumber>{item.number}</CardNumber>
                  <CardTitle>{item.title}</CardTitle>
                  <CardCategoryTag>{item.subtitle}</CardCategoryTag>

                  <ServiceList>
                    {item.services.map((service, idx) => (
                      <ServiceItem key={idx}>{service}</ServiceItem>
                    ))}
                  </ServiceList>
                </CardContent>

                <CardLink href={item.href}>
                  EXPLORE DIVISION <span className="line" /> →
                </CardLink>
              </Card>
            ))}
          </Grid>
        </InnerContainer>
      </DivisionsSection>
    </PageSection>
  );
}