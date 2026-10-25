"use client";

import styled from "styled-components";
import Link from "next/link";
import { secondaryColoring } from "./Context";

/* ================= COLORS ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const GreenBtnBg = "#11382b";
const DarkText = "#1A1A1A";
const MutedText = "#706E6B";
const MutedDate = "#9E988E";
const LightBg = "#FAF8F4";
const CardBg = "#FFFFFF";

/* ================= MAIN CONTAINER ================= */
const SectionWrapper = styled.section`
  width: 100%;
  background-color: #ffffff;
  color: ${DarkText};
  font-family: inherit;
  box-sizing: border-box;
`;

/* ================= 1. JOURNAL SECTION ================= */
const JournalContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem 4.5rem;
`;

const JournalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
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
  margin-bottom: 0.6rem;

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
  margin: 0 0 0.5rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.85rem;
  }
`;

const SectionSub = styled.p`
  font-size: 0.9rem;
  color: ${MutedText};
  margin: 0;
  font-weight: 300;
`;

const ViewAllLink = styled(Link)`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: ${DarkText};
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${GoldAccent};
  }
`;

const JournalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const JournalCard = styled(Link)`
  background: ${CardBg};
  border: 1px solid rgba(226, 232, 240, 0.8);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    border-color: rgba(226, 176, 74, 0.4);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1.6 / 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${JournalCard}:hover img {
    transform: scale(1.05);
  }
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: ${GoldAccent};
  color: #111827;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.35rem 0.7rem;
  border-radius: 1px;
`;

const CardBody = styled.div`
  padding: 1.8rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const DateText = styled.span`
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: ${MutedDate};
  text-transform: uppercase;
  margin-bottom: 0.6rem;
`;

const ArticleTitle = styled.h3`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${DarkText};
  line-height: 1.35;
  margin: 0 0 0.8rem 0;
  transition: color 0.2s ease;

  ${JournalCard}:hover & {
    color: ${GoldAccent};
  }
`;

const ArticleExcerpt = styled.p`
  font-size: 0.82rem;
  color: ${MutedText};
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  font-weight: 300;
`;

const ReadMoreBtn = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: ${DarkText};
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: auto;
  transition: color 0.2s ease;

  ${JournalCard}:hover & {
    color: ${GoldAccent};
  }
`;

/* ================= 2. SOCIAL GALLERY SECTION ================= */
const GallerySection = styled.div`
  background-color: ${LightBg};
  padding: 4.5rem 1.5rem;
  text-align: center;
`;

const GalleryInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HandleTag = styled.a`
  font-size: 0.82rem;
  color: ${GreenBtnBg};
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 2.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GalleryItem = styled.a`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #eae5dc;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.08);
  }

  /* Fallback placeholder icon */
  .placeholder-icon {
    font-size: 1.5rem;
    color: #c2bbb0;
  }
`;

/* ================= 3. CONSULTATION CALLOUT SECTION ================= */
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
`;

const CalloutTitle = styled.h2`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.2rem;
  font-weight: 400;
  color: ${DarkText};
  line-height: 1.25;
  margin: 0 0 0.8rem 0;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const CalloutSub = styled.p`
  font-size: 0.88rem;
  color: ${MutedText};
  margin: 0 0 1rem 0;
  line-height: 1.6;
  font-weight: 300;
`;

const EmailText = styled.a`
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
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled(Link)`
  background-color: ${GreenBtnBg};
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
  color: ${GreenBtnBg};
  border: 1px solid ${GreenBtnBg};
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

/* ================= DATA ================= */
const journalData = [
  {
    category: "PROPERTY",
    date: "AUG 2025",
    title: "What to Verify Before Buying Land in Lagos",
    excerpt: "A practical due diligence checklist for buyers entering Nigeria's property market.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    href: "/about",
  },
  {
    category: "INTERIOR",
    date: "AUG 2025",
    title: "Five Details That Make a Living Room Feel Luxe",
    excerpt: "Small, considered touches that elevate a space without overwhelming it.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    href: "/about",
  },
  {
    category: "BUSINESS",
    date: "JUL 2025",
    title: "From Idea to Registered Company in Weeks",
    excerpt: "How structured consulting shortens the path from concept to a real business.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    href: "/about",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=500&q=80",
   "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      , // Placeholder tile 1
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    , // Placeholder tile 2
];

/* ================= MAIN COMPONENT ================= */
export default function JournalAndSocialSection() {
  return (
    <SectionWrapper>
      {/* 1. LATEST FROM THE JOURNAL */}
      <JournalContainer>
        <JournalHeader>
          <div>
            <HeaderTag>INSIGHTS</HeaderTag>
            <SectionTitle>Latest from the Journal</SectionTitle>
            <SectionSub>
              Ideas on property, lifestyle, business and design — written by our specialists.
            </SectionSub>
          </div>
          <ViewAllLink href="/journal">VIEW ALL ARTICLES →</ViewAllLink>
        </JournalHeader>

        <JournalGrid>
          {journalData.map((article, index) => (
            <JournalCard key={index} href={article.href}>
              <ImageWrapper>
                <img src={article.image} alt={article.title} />
                <CategoryBadge>{article.category}</CategoryBadge>
              </ImageWrapper>
              <CardBody>
                <DateText>{article.date}</DateText>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                <ReadMoreBtn>READ MORE →</ReadMoreBtn>
              </CardBody>
            </JournalCard>
          ))}
        </JournalGrid>
      </JournalContainer>

      {/* 2. FOLLOW THE WORLD OF PINKLES */}
      <GallerySection>
        <GalleryInner>
          <HeaderTag>SOCIAL GALLERY</HeaderTag>
          <SectionTitle>Follow the World of Pinkles</SectionTitle>
          <HandleTag href="https://www.instagram.com/pinkles_ng_ltd?cplk=MWJneXBoeHI2dmYyYw==" target="_blank" rel="noreferrer">
            📷 @pinklesng
          </HandleTag>

          <InstagramGrid>
            {galleryImages.map((imgUrl, idx) => (
              <GalleryItem key={idx} href="https://www.instagram.com/pinkles_ng_ltd?cplk=MWJneXBoeHI2dmYyYw==" target="_blank" rel="noreferrer">
                {imgUrl ? (
                  <img src={imgUrl} alt={`Gallery post ${idx + 1}`} />
                ) : (
                  <span className="placeholder-icon">🖼️</span>
                )}
              </GalleryItem>
            ))}
          </InstagramGrid>
        </GalleryInner>
      </GallerySection>

   
    </SectionWrapper>
  );
}