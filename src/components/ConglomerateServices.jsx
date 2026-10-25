"use client";

import styled from "styled-components";
import Link from "next/link";
import { secondaryColoring } from "./Context";

const GoldAccent = secondaryColoring || "#E2B04A";
const DarkText = "#1A1A1A";
const MutedText = "#706E6B";
const LightBg = "#FAF8F4";

/* ================= SECTION CONTAINERS ================= */
const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${LightBg};
  padding: 5rem 1.5rem 6rem;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  text-align: center;
`;

/* ================= HEADER STYLES ================= */
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

const MainHeading = styled.h2`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.8rem;
  font-weight: 400;
  color: ${DarkText};
  margin: 0 0 1rem 0;
  line-height: 1.25;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.p`
  font-size: 0.95rem;
  color: ${MutedText};
  line-height: 1.6;
  max-width: 680px;
  margin: 0 auto 3.5rem auto;
  font-weight: 300;
`;

/* ================= SERVICES GRID ================= */
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

const ServiceCard = styled(Link)`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem 1.75rem;
  box-sizing: border-box;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  /* Background Image & Zoom Animation */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${(p) => p.$image});
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease;
    z-index: 1;
  }

  /* Dark Overlay for Readability */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.35) 50%,
      rgba(0, 0, 0, 0.15) 100%
    );
    transition: opacity 0.3s ease;
    z-index: 2;
  }

  &:hover::before {
    transform: scale(1.08);
  }

  &:hover::after {
    opacity: 0.9;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ServiceTitle = styled.h3`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.35rem;
  }
`;

const ExploreButton = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: ${GoldAccent};
  text-transform: uppercase;
  transition: gap 0.3s ease;

  .line {
    width: 22px;
    height: 1px;
    background-color: ${GoldAccent};
    transition: width 0.3s ease;
  }

  ${ServiceCard}:hover & {
    gap: 0.9rem;

    .line {
      width: 32px;
    }
  }
`;

/* ================= SERVICES DATA ================= */
const servicesData = [
  {
    title: "Interior Décor",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    href: "/interior-decor",
  },
  {
    title: "Short-Let",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    href: "/short-let",
  },
  {
    title: "Cleaning Services",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    href: "/cleaning",
  },
  {
    title: "Realtor",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    href: "/properties",
  },
  {
    title: "Property & Legal Consultancy",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    href: "/legal-mortgage",
  },
  {
    title: "Business Consulting",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    href: "/business-consulting",
  },
  {
    title: "Advertising & Media",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    href: "/media-advertising",
  },
  {
    title: "Brand Ambassador",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    href: "/media-advertising",
  },
];

/* ================= COMPONENT ================= */
export default function ConglomerateServices() {
  return (
    <SectionWrapper>
      <InnerContainer>
        <HeaderTag>WHAT WE DO</HeaderTag>
        <MainHeading>
          A Conglomerate of <br /> Premium Services
        </MainHeading>
        <SubHeading>
          Every division is led by specialists who deliver a world-class experience — from
          your first enquiry to long after delivery.
        </SubHeading>

        <Grid>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} href={service.href} $image={service.image}>
              <CardContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ExploreButton>
                  EXPLORE SERVICE <span className="line" /> →
                </ExploreButton>
              </CardContent>
            </ServiceCard>
          ))}
        </Grid>
      </InnerContainer>
    </SectionWrapper>
  );
}