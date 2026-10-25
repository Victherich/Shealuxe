"use client";

import { useState } from "react";
import styled from "styled-components";
import { secondaryColoring } from "./Context";

/* ================= COLORS ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const GreenBtnBg = "#11382b";
const DarkText = "#1A1A1A";
const MutedText = "#706E6B";
const WarmBg = "#FAF8F4";
const InputBorder = "#E2DDD5";
const LabelGold = "#A38B53";

/* ================= CONTAINERS ================= */
const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${WarmBg};
  padding: 5rem 1.5rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
`;

/* ================= HEADER ================= */
const HeaderTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  color: ${GoldAccent};
  text-transform: uppercase;
  margin-bottom: 0.8rem;

  &::before,
  &::after {
    content: "";
    width: 22px;
    height: 1px;
    background-color: ${GoldAccent};
  }
`;

const MainHeading = styled.h2`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.8rem;
  font-weight: 400;
  color: ${DarkText};
  margin: 0 0 0.8rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

const SubText = styled.p`
  font-size: 0.9rem;
  color: ${MutedText};
  line-height: 1.5;
  margin: 0 auto 3rem auto;
  max-width: 480px;
  font-weight: 300;
`;

/* ================= FORM LAYOUT ================= */
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  text-align: left;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const Label = styled.label`
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: ${LabelGold};
  text-transform: uppercase;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.85rem 1rem;
  background-color: #ffffff;
  border: 1px solid ${InputBorder};
  border-radius: 2px;
  font-size: 0.9rem;
  color: ${DarkText};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #a8a299;
    font-size: 0.88rem;
    font-weight: 300;
  }

  &:focus {
    border-color: ${GoldAccent};
    box-shadow: 0 0 0 2px rgba(226, 176, 74, 0.15);
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;

  select {
    width: 100%;
    padding: 0.85rem 2.5rem 0.85rem 1rem;
    background-color: #ffffff;
    border: 1px solid ${InputBorder};
    border-radius: 2px;
    font-size: 0.9rem;
    color: ${DarkText};
    outline: none;
    appearance: none;
    cursor: pointer;
    box-sizing: border-box;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: ${GoldAccent};
    }
  }

  .arrow {
    position: absolute;
    right: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 0.8rem;
    color: ${DarkText};
  }
`;

/* ================= STAR RATING ================= */
const StarRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const StarsGroup = styled.div`
  display: flex;
  gap: 4px;
`;

const Star = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  padding: 0;
  color: ${(p) => (p.$active ? GoldAccent : "#dcd6cd")};
  transition: color 0.15s ease, transform 0.15s ease;

  &:hover {
    transform: scale(1.15);
  }
`;

const RatingText = styled.span`
  font-size: 0.82rem;
  color: #a8a299;
  font-weight: 300;
`;

/* ================= TEXTAREA & BUTTON ================= */
const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid ${InputBorder};
  border-radius: 2px;
  font-size: 0.9rem;
  font-family: inherit;
  color: ${DarkText};
  outline: none;
  resize: vertical;
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: #a8a299;
    font-size: 0.88rem;
    font-weight: 300;
  }

  &:focus {
    border-color: ${GoldAccent};
    box-shadow: 0 0 0 2px rgba(226, 176, 74, 0.15);
  }
`;

const SubmitBtn = styled.button`
  align-self: flex-start;
  background-color: ${GreenBtnBg};
  color: #ffffff;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: opacity 0.2s ease, transform 0.2s ease;
  margin-top: 0.5rem;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

/* ================= COMPONENT ================= */
export default function LeaveAReviewSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "General Experience",
    review: "",
  });

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !rating || !formData.review) {
      alert("Please fill in your name, select a rating, and write a review.");
      return;
    }
    console.log("Review Submitted:", { ...formData, rating });
    alert("Thank you for your feedback!");

    // Reset form
    setFormData({ name: "", email: "", service: "General Experience", review: "" });
    setRating(0);
  };

  return (
    <SectionWrapper>
      <FormContainer>
        <HeaderTag>SHARE YOUR EXPERIENCE</HeaderTag>
        <MainHeading>Leave a Review</MainHeading>
        <SubText>
          We'd love to hear about your experience with Pinkles. Your feedback helps us serve you better.
        </SubText>

        <StyledForm onSubmit={handleSubmit}>
          {/* Row 1: Name and Email */}
          <FormRow>
            <FormGroup>
              <Label htmlFor="name">YOUR NAME *</Label>
              <Input
                id="name"
                type="text"
                placeholder="e.g. Adewale O."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">EMAIL (OPTIONAL)</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </FormGroup>
          </FormRow>

          {/* Row 2: Service Selection */}
          <FormGroup>
            <Label htmlFor="service">SERVICE</Label>
            <SelectWrapper>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="General Experience">General Experience</option>
                <option value="Living / Interior Décor">Living / Interior Décor</option>
                <option value="Lifestyle / Fashion">Lifestyle / Fashion</option>
                <option value="Property Advisory">Property Advisory</option>
                <option value="Business Consulting">Business Consulting</option>
                <option value="Pinkles Spa">Pinkles Spa</option>
              </select>
              <span className="arrow">▼</span>
            </SelectWrapper>
          </FormGroup>

          {/* Row 3: Interactive Star Rating */}
          <FormGroup>
            <Label>YOUR RATING *</Label>
            <StarRatingContainer>
              <StarsGroup>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    type="button"
                    $active={star <= (hoverRating || rating)}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`Rate ${star} out of 5 stars`}
                  >
                    ★
                  </Star>
                ))}
              </StarsGroup>
              <RatingText>
                {rating > 0 ? `${rating} / 5 Stars` : "Select rating"}
              </RatingText>
            </StarRatingContainer>
          </FormGroup>

          {/* Row 4: Review Textarea */}
          <FormGroup>
            <Label htmlFor="review">YOUR REVIEW *</Label>
            <TextArea
              id="review"
              placeholder="Tell us about your experience..."
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              required
            />
          </FormGroup>

          {/* Submit Button */}
          <SubmitBtn type="submit">SUBMIT REVIEW</SubmitBtn>
        </StyledForm>
      </FormContainer>
    </SectionWrapper>
  );
}