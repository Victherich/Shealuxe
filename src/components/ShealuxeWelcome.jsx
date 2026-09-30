"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Heart, Award } from "lucide-react";
import { primaryColoring, secondaryColoring } from "./Context";

/* ================= THEME STYLES (SHEALUXE) ================= */
const primaryColor = primaryColoring; // #3D1B17 (Deep Brown)
const secondaryColor = secondaryColoring; // #E2B04A (Gold)
const ThemeGradient = `linear-gradient(135deg, ${primaryColoring} 0%, ${secondaryColoring} 100%)`;
const LightBg = "#ffffff";
const CardBg = "#fdfbf9";
const TextPrimary = "#0f172a";
const TextMuted = "#475569";
const BorderColor = "rgba(226, 232, 240, 0.9)";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(226, 176, 74, 0.4); }
  70% { box-shadow: 0 0 0 22px rgba(226, 176, 74, 0); }
  100% { box-shadow: 0 0 0 0 rgba(226, 176, 74, 0); }
`;

/* ================= STYLED COMPONENTS ================= */

const PageWrapper = styled.div`
  background-color: ${LightBg};
  color: ${TextPrimary};
  font-family: inherit;
  overflow: hidden;
`;

/* Hero Section */
const HeroSection = styled.section`
  padding: 8rem 1.5rem 6rem 1.5rem;
  background: linear-gradient(135deg, rgba(61, 27, 23, 0.04) 0%, rgba(226, 176, 74, 0.1) 100%);
  border-bottom: 1px solid ${BorderColor};
  position: relative;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 968px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const HeroContent = styled.div`
  animation: ${fadeIn} 0.8s ease-in-out;

  .badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.25rem;
    background: linear-gradient(135deg, rgba(61, 27, 23, 0.08), rgba(226, 176, 74, 0.15));
    border: 1px solid rgba(226, 176, 74, 0.3);
    border-radius: 9999px;
    color: ${primaryColor};
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 900;
    line-height: 1.15;
    color: ${TextPrimary};
    margin-bottom: 1.5rem;
    letter-spacing: -0.03em;

    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }

  p {
    font-size: 1.15rem;
    color: ${TextMuted};
    line-height: 1.8;
    margin-bottom: 2.5rem;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.15rem 2.8rem;
  border-radius: 9999px;
  background: ${ThemeGradient};
  color: #ffffff;
  font-weight: 700;
  font-size: 1.05rem;
  box-shadow: 0 14px 30px -5px rgba(226, 176, 74, 0.45);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  animation: ${pulseGlow} 3s infinite;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 20px 40px -5px rgba(226, 176, 74, 0.65);
    animation: none;
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(61, 27, 23, 0.25);
  border: 1px solid ${BorderColor};
  height: 420px;

  @media (min-width: 768px) {
    height: 500px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;

    &:hover {
      transform: scale(1.03);
    }
  }
`;

/* Products Collection Showcase */
const ProductsSection = styled.section`
  padding: 7rem 1.5rem;
  background-color: ${LightBg};
  border-bottom: 1px solid ${BorderColor};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 52rem;
  margin: 0 auto 4rem auto;

  h2 {
    font-size: 2.25rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: ${TextPrimary};
    letter-spacing: -0.02em;
    @media (min-width: 768px) { font-size: 3rem; }
  }

  p {
    color: ${TextMuted};
    font-size: 1.15rem;
    line-height: 1.7;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProductCard = styled(Link)`
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  height: 380px;
  display: flex;
  align-items: flex-end;
  padding: 3rem;
  text-decoration: none;
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08);
  border: 1px solid ${BorderColor};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 30%, rgba(61, 27, 23, 0.85) 100%);
    z-index: 1;
    transition: opacity 0.3s ease;
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -12px rgba(61, 27, 23, 0.3);

    img {
      transform: scale(1.06);
    }

    .arrow-icon {
      transform: translateX(6px);
      background: ${secondaryColor};
      color: ${primaryColor};
    }
  }

  .content-overlay {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;

    h3 {
      font-size: 2rem;
      font-weight: 800;
      color: #ffffff;
      margin: 0;
      letter-spacing: -0.01em;
    }

    .arrow-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      transition: all 0.3s ease;
    }
  }
`;

/* Services & Classes Section */
const ServicesSection = styled.section`
  padding: 7rem 1.5rem;

  background-color: ${CardBg};
  @media(max-width:768px){
  padding:3rem 0rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: ${LightBg};
  border: 1px solid ${BorderColor};
  border-radius: 2.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.04);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(226, 176, 74, 0.5);
    box-shadow: 0 30px 60px -15px rgba(226, 176, 74, 0.15);
  }

  .card-icon {
    width: 64px;
    height: 64px;
    border-radius: 1.25rem;
    background: linear-gradient(135deg, rgba(61, 27, 23, 0.08), rgba(226, 176, 74, 0.2));
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${primaryColor};
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.85rem;
    font-weight: 800;
    color: ${TextPrimary};
    margin-bottom: 1.25rem;
    letter-spacing: -0.02em;
  }

  p {
    color: ${TextMuted};
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 2.5rem;
  }
`;

const ActionLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: ${primaryColor};
  font-weight: 800;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    color: ${secondaryColor};
    gap: 1rem;
  }
`;

/* ================= COMPONENT ================= */

export default function SheaLuxeWelcome() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <div className="badge-pill">
              <Sparkles className="w-4 h-4 text-amber-600" /> Welcome to SheaLuxe Limited
            </div>
            <h1>Your go-to destination for natural, luxurious skin and hair care products.</h1>
            <p>
              Experience the transformative power of nature. Indulge your skin and explore a range of results-driven products.
            </p>
            <PrimaryButton href="/store">
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </PrimaryButton>
          </HeroContent>

          <HeroImageWrapper>
            <img 
              src="/h10.jpeg" 
              alt="Natural organic skincare and whipped shea butter bottles" 
            />
          </HeroImageWrapper>
        </HeroContainer>
      </HeroSection>

      {/* Discover Our Products Section */}
      {/* <ProductsSection>
        <Container>
          <SectionHeader>
            <h2>Discover Our Products</h2>
            <p>Handcrafted botanical formulations designed to nourish, protect, and revitalize your skin and hair naturally.</p>
          </SectionHeader>

          <ProductGrid>
            <ProductCard href="/products?category=body">
              <img 
                src="/h11.jpeg" 
                alt="Body Collection" 
              />
              <div className="content-overlay">
                <h3>Body Collection</h3>
                <div className="arrow-icon">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </ProductCard>

            <ProductCard href="/products?category=hair">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=900" 
                alt="Hair Collection" 
              />
              <div className="content-overlay">
                <h3>Hair Collection</h3>
                <div className="arrow-icon">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </ProductCard>
          </ProductGrid>
        </Container>
      </ProductsSection> */}

      {/* Services & Classes Section */}
      <ServicesSection>
        <Container>
          <SectionHeader>
            <h2>Our Services</h2>
            <p>Elevate your personal care journey with professional consultations and expert formulation masterclasses.</p>
          </SectionHeader>

          <ServicesGrid>
            {/* Skincare Consultations */}
            <ServiceCard>
              <div>
                <div className="card-icon">
                  <Heart className="w-7 h-7" />
                </div>
                <h3>Skincare consultations</h3>
                <p>
                  Whether you're looking to establish a new skin-care routine or trying to address a specific skin concern, our skincare experts are here to help. We understand that skincare is not one-size-fits-all, which is why our experts work with you to understand your skin's unique needs, and create a custom skincare routine just for you.
                </p>
              </div>
              <ActionLink href="/contact">
                Book your consultation now <ArrowRight className="w-5 h-5" />
              </ActionLink>
            </ServiceCard>

            {/* Class Schedule */}
            <ServiceCard>
              <div>
                <div className="card-icon">
                  <Calendar className="w-7 h-7" />
                </div>
                <h3>Class Schedule</h3>
                <p>
                  Are you interested in learning how to create your own organic skin and hair care products? Join our expert-led classes and master the art of natural formulation. Learn how to craft a wide range of products, from cleansers and exfoliators to hair growth serums and face masks. Whether you are a beginner or a seasoned formulator, our classes are designed to cater to everyone.
                </p>
              </div>
              <ActionLink href="/contact">
                Check out our Class Schedule <ArrowRight className="w-5 h-5" />
              </ActionLink>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </ServicesSection>
    </PageWrapper>
  );
}