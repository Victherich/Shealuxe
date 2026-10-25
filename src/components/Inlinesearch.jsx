"use client";

import { useState } from "react";
import styled from "styled-components";
import { primaryColoring, useAppContext } from "./Context";

const PrimaryColor = primaryColoring;
const Dark = "#0f172a";
const Border = "#e2e8f0";
const LightBg = "#faf8f5"; // Matches the soft warm background in your image

const SearchWrapper = styled.div`
  width: 100%;
  background: ${LightBg};
  border-bottom: 1px solid ${Border};
  padding: 1.25rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;
const SearchInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  border-bottom: 1px solid #dcd6cd;
  padding-bottom: 0.6rem;

  svg,
  span.search-icon {
    font-size: 1.2rem;
    color: #8c8275;
    display: flex;
    align-items: center;
  }

input {
  flex: 1;
  border: none !important;
  background: transparent !important;
  background-color: transparent !important;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none !important;
  font-size: 1rem;
  font-weight: 400;
  color: ${Dark};
  outline: none;

  &:focus,
  &:active,
  &:hover {
    background: transparent !important;
    background-color: transparent !important;
    box-shadow: none !important;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    background-color: transparent !important;
  }

  &::placeholder {
    color: #9a9083;
    font-weight: 300;
  }
}

  button.close-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    color: #8c8275;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: ${PrimaryColor};
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
`;

const TagPill = styled.button`
  background: transparent;
  border: 1px solid #dcd6cd;
  border-radius: 50px;
  padding: 0.4rem 1rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #6b6255;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${PrimaryColor};
    color: ${PrimaryColor};
    background: rgba(17, 56, 43, 0.03);
  }
`;

export default function InlineSearch({ onClose, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  

  const quickTags = [
    "LUXURY HOMES",
    "3-BEDROOM LAGOS",
    "SHORT-LET",
    "INTERIOR DESIGN",
    "DRESSES",
    "SPA BOOKING",
  ];

  const handleTagClick = (tag) => {
    setSearchTerm(tag);
    if (onSearch) onSearch(tag);
  };

  return (
    <SearchWrapper>
      <SearchInputRow>
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search properties, services, fashion, beauty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
        />
        <button className="close-btn" onClick={onClose} aria-label="Close search">
          ✕
        </button>
      </SearchInputRow>

      <TagsContainer>
        {quickTags.map((tag, index) => (
          <TagPill key={index} onClick={() => handleTagClick(tag)}>
            {tag}
          </TagPill>
        ))}
      </TagsContainer>
    </SearchWrapper>
  );
}