"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Swal from "sweetalert2";
import { secondaryColoring } from "@/components/Context"; // Adjust import path as needed

/* ================= COLORS ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const GreenBtnBg = "#11382b";
const DarkText = "#1A1A1A";
const MutedText = "#706E6B";
const WarmBg = "#FAF8F4";
const BorderColor = "#E2DDD5";
const White = "#FFFFFF";

/* ================= STYLED COMPONENTS ================= */
const PageWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${WarmBg};
  padding: 4.5rem 1.5rem;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
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
  margin-bottom: 0.8rem;

  &::before,
  &::after {
    content: "";
    width: 20px;
    height: 1px;
    background-color: ${GoldAccent};
  }
`;

const Title = styled.h1`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.6rem;
  font-weight: 400;
  color: ${DarkText};
  line-height: 1.2;
  margin: 0 0 0.8rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.92rem;
  color: ${MutedText};
  line-height: 1.6;
  margin: 0 auto;
  max-width: 600px;
  font-weight: 300;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const GiftCardItem = styled.div`
  background: ${White};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    border-color: ${GoldAccent};
  }
`;

const CardTop = styled.div``;

const TierBadge = styled.span`
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: ${GoldAccent};
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${DarkText};
  margin: 0 0 0.5rem 0;
`;

const CardPrice = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${GreenBtnBg};
  margin-bottom: 1.2rem;
`;

const CardDescription = styled.p`
  font-size: 0.85rem;
  color: ${MutedText};
  line-height: 1.6;
  margin: 0 0 2rem 0;
  font-weight: 300;
`;

const ActionButton = styled.button`
  width: 100%;
  background-color: ${GreenBtnBg};
  color: ${White};
  padding: 0.85rem 1.5rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* ================= COMPONENT ================= */
export default function GiftCardsPage() {
  const [submittingId, setSubmittingId] = useState(null);

  const giftOptions = [
    {
      id: "tier-1",
      name: "Consultation Voucher",
      price: "₦50,000",
      category: "Business Advisory / Interiors",
      description:
        "Redeemable for a 1-hour private advisory or interior styling consultation with our specialist team.",
    },
    {
      id: "tier-2",
      name: "ASHÉVON Experience",
      price: "₦150,000",
      category: "ASHÉVON",
      description:
        "An exclusive curation gift card granting access to bespoke design pieces or tailored service credits.",
    },
    {
      id: "tier-3",
      name: "Executive Gold Pass",
      price: "₦350,000",
      category: "All Divisions",
      description:
        "Full-spectrum priority pass across property, interiors, fashion, wellness, and corporate advisory services.",
    },
  ];

  const handleRequestCard = async (card) => {
    // Step 1: Collect user details securely using SweetAlert2 HTML inputs
    const { value: formValues } = await Swal.fire({
      title: `Request ${card.name}`,
      html: `
        <div style="text-align: left; font-size: 14px; color: #1A1A1A;">
          <p style="margin-bottom: 12px; color: #706E6B;">Price: <strong>${card.price}</strong></p>
          <label style="display: block; font-weight: 700; font-size: 11px; text-transform: uppercase; margin-bottom: 4px;">Full Name *</label>
          <input id="swal-input-name" class="swal2-input" placeholder="Enter your full name" style="margin: 0 0 12px 0; width: 100%; box-sizing: border-box;">
          
          <label style="display: block; font-weight: 700; font-size: 11px; text-transform: uppercase; margin-bottom: 4px;">Email Address *</label>
          <input id="swal-input-email" type="email" class="swal2-input" placeholder="Enter your email" style="margin: 0 0 12px 0; width: 100%; box-sizing: border-box;">
          
          <label style="display: block; font-weight: 700; font-size: 11px; text-transform: uppercase; margin-bottom: 4px;">Phone Number *</label>
          <input id="swal-input-phone" type="tel" class="swal2-input" placeholder="Enter your phone number" style="margin: 0 0 12px 0; width: 100%; box-sizing: border-box;">
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonColor: GreenBtnBg,
      cancelButtonColor: MutedText,
      confirmButtonText: "Submit Request →",
      preConfirm: () => {
        const name = document.getElementById("swal-input-name").value.trim();
        const email = document.getElementById("swal-input-email").value.trim();
        const phone = document.getElementById("swal-input-phone").value.trim();

        if (!name || !email || !phone) {
          Swal.showValidationMessage("Please fill in all required fields.");
          return false;
        }
        return { name, email, phone };
      },
    });

    if (!formValues) return;

    setSubmittingId(card.id);

    try {
      // Step 2: Send request to your backend API endpoint
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formTitle: `Gift Card Request - ${card.name}`,
          fullName: formValues.name,
          email: formValues.email,
          phoneNumber: formValues.phone,
          giftCardTier: card.name,
          price: card.price,
          category: card.category,
          description: card.description,
        }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Request Sent Successfully",
          text: "Thank you! Our team has received your gift card request and will contact you shortly with payment details.",
          icon: "success",
          confirmButtonColor: GreenBtnBg,
        });
      } else {
        throw new Error(result.message || "Failed to submit request.");
      }
    } catch (err) {
      Swal.fire({
        title: "Submission Error",
        text: err.message || "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: GreenBtnBg,
      });
    } finally {
      setSubmittingId(null);
    }
  };

  return (
    <PageWrapper>
      <InnerContainer>
        <HeaderSection>
          <HeaderTag>EXCLUSIVE REWARDS</HeaderTag>
          <Title>Curated Gift Cards</Title>
          <Subtitle>
            Give the gift of bespoke design, private consultations, and elite
            services. Choose an option below to submit your request.
          </Subtitle>
        </HeaderSection>

        <CardsGrid>
          {giftOptions.map((card) => (
            <GiftCardItem key={card.id}>
              <CardTop>
                <TierBadge>{card.category}</TierBadge>
                <CardTitle>{card.name}</CardTitle>
                <CardPrice>{card.price}</CardPrice>
                <CardDescription>{card.description}</CardDescription>
              </CardTop>
              <ActionButton
                onClick={() => handleRequestCard(card)}
                disabled={submittingId === card.id}
              >
                {submittingId === card.id
                  ? "SENDING REQUEST..."
                  : "Request gift card →"}
              </ActionButton>
            </GiftCardItem>
          ))}
        </CardsGrid>
      </InnerContainer>
    </PageWrapper>
  );
}