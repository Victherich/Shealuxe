"use client";

import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import { secondaryColoring } from "./Context";
import GallerySection from "./GallerySection";

/* ================= COLORS ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const GreenBtnBg = "#11382b";
const DarkText = "#1A1A1A";
const MutedText = "#706E6B";
const LightBg = "#FAF8F4";
const BorderColor = "#E2DDD5";

/* ================= PROPERTIES CATEGORY DATA ================= */
const propertiesCategory = {
  id: "properties",
  tag: "PROPERTIES",
  title: "Properties Gallery",
  subtitle: "Bold property imagery for the Properties page.",
  images: [
    { id: "prop-1", title: "1000723447", url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80" },
    { id: "prop-2", title: "1000723429", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" },
    { id: "prop-3", title: "1000723430", url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80" },
    { id: "prop-4", title: "1000723431", url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80" },
    { id: "prop-5", title: "1000723432", url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80" },
    { id: "prop-6", title: "1000723433", url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=80" },
  ],
};

/* ================= PAGE CONTAINERS ================= */
const PageWrapper = styled.div`
  width: 100%;
  background-color: ${LightBg};
  color: ${DarkText};
  min-height: 100vh;
  padding: 4rem 1.5rem 6rem;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
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
  margin-bottom: 0.6rem;

  &::before,
  &::after {
    content: "";
    width: 20px;
    height: 1px;
    background-color: ${GoldAccent};
  }
`;

const MainHeading = styled.h1`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 3rem;
  font-weight: 400;
  color: ${DarkText};
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubText = styled.p`
  font-size: 0.88rem;
  color: ${MutedText};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 300;
`;

/* ================= SECTION GRID ================= */
const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 5rem;
`;

const CategoryHeader = styled.div`
  margin-bottom: 1.5rem;

  .cat-tag {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: ${GoldAccent};
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.3rem;
  }

  h2 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2rem;
    font-weight: 400;
    color: ${DarkText};
    margin: 0 0 0.3rem 0;
  }

  p {
    font-size: 0.8rem;
    color: ${MutedText};
    margin: 0;
    font-weight: 300;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const ImageCard = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  background-color: #e8e3da;
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      transparent 100%
    );
    display: flex;
    align-items: flex-end;
    padding: 1.25rem;
    transition: opacity 0.3s ease;
  }

  .card-title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.15rem;
    color: #ffffff;
    font-weight: 400;
    margin: 0;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

/* ================= LIGHTBOX MODAL ================= */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(10, 10, 10, 0.94);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  box-sizing: border-box;
  animation: fadeIn 0.25s ease forwards;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;

  .category-meta {
    span.tag {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: ${GoldAccent};
      text-transform: uppercase;
      display: block;
    }
    h3 {
      font-family: "Playfair Display", Georgia, serif;
      font-size: 1.4rem;
      font-weight: 400;
      margin: 0;
    }
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${GoldAccent};
    border-color: ${GoldAccent};
    color: #111827;
  }
`;

const ModalStage = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const ActiveImage = styled.img`
  max-width: 85vw;
  max-height: 65vh;
  object-fit: contain;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
`;

const ArrowNav = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(p) => (p.$left ? "left: 1rem;" : "right: 1rem;")}
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: ${GoldAccent};
    border-color: ${GoldAccent};
    color: #111827;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ImageInfoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  color: #ffffff;

  .counter {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: ${GoldAccent};
  }

  .title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.1rem;
  }
`;

const ThumbnailsStrip = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  max-width: 900px;
  padding-bottom: 0.4rem;

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${GoldAccent};
  }
`;

const Thumb = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 2px;
  cursor: pointer;
  opacity: ${(p) => (p.$active ? 1 : 0.4)};
  border: ${(p) => (p.$active ? `2px solid ${GoldAccent}` : "2px solid transparent")};
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

/* ================= MAIN COMPONENT ================= */
export default function PropertiesGallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const handlePrev = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev === 0 ? propertiesCategory.images.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setActiveImageIndex((prev) => (prev + 1) % propertiesCategory.images.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, handlePrev, handleNext]);

  return (
    <PageWrapper id="properties-gallery">
      {/* PAGE HEADER */}
      <HeaderContainer>
        <HeaderTag>PORTFOLIO</HeaderTag>
        <MainHeading>{propertiesCategory.title}</MainHeading>
        <SubText>{propertiesCategory.subtitle}</SubText>
      </HeaderContainer>

      {/* RENDER PROPERTIES CATEGORY */}
      {/* <ContentSection> */}
        {/* <CategoryHeader>
          <span className="cat-tag">{propertiesCategory.tag}</span>
          <h2>{propertiesCategory.title}</h2>
          <p>{propertiesCategory.subtitle}</p>
        </CategoryHeader> */}

        {/* <ImageGrid>
          {propertiesCategory.images.map((img, idx) => (
            <ImageCard key={img.id} onClick={() => openLightbox(idx)}>
              <img src={img.url} alt={img.title} loading="lazy" />
              <div className="overlay">
                <h3 className="card-title">{img.title}</h3>
              </div>
            </ImageCard>
          ))}
        </ImageGrid> */}
        <GallerySection/>
      {/* </ContentSection> */}

      {/* LIGHTBOX MODAL */}
      {activeImageIndex !== null && (
        <ModalOverlay>
          <ModalHeader>
            <div className="category-meta">
              <span className="tag">{propertiesCategory.tag}</span>
              <h3>{propertiesCategory.title}</h3>
            </div>
            <CloseButton onClick={closeLightbox}>✕</CloseButton>
          </ModalHeader>

          <ModalStage>
            <ArrowNav $left onClick={handlePrev}>
              ‹
            </ArrowNav>

            <ActiveImage
              src={propertiesCategory.images[activeImageIndex].url}
              alt={propertiesCategory.images[activeImageIndex].title}
            />

            <ArrowNav onClick={handleNext}>
              ›
            </ArrowNav>
          </ModalStage>

          <ModalFooter>
            <ImageInfoBar>
              <span className="title">
                {propertiesCategory.images[activeImageIndex].title}
              </span>
              <span className="counter">
                0{activeImageIndex + 1} / 0{propertiesCategory.images.length}
              </span>
            </ImageInfoBar>

            {/* THUMBNAIL PREVIEW BAR */}
            <ThumbnailsStrip>
              {propertiesCategory.images.map((img, idx) => (
                <Thumb
                  key={img.id}
                  src={img.url}
                  $active={idx === activeImageIndex}
                  onClick={() => setActiveImageIndex(idx)}
                />
              ))}
            </ThumbnailsStrip>
          </ModalFooter>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
}