"use client";

import { useState, useEffect, Suspense } from "react";
import styled from "styled-components";
import { useSearchParams } from "next/navigation";
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
  padding: 4rem 1.5rem;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
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
  font-size: 2.4rem;
  font-weight: 400;
  color: ${DarkText};
  line-height: 1.2;
  margin: 0 0 0.8rem 0;

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: ${MutedText};
  line-height: 1.6;
  margin: 0 auto;
  max-width: 580px;
  font-weight: 300;
`;

const FormContainer = styled.form`
  background: ${White};
  border: 1px solid ${BorderColor};
  border-radius: 2px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  grid-column: ${(props) => (props.$fullWidth ? "span 2" : "span 1")};

  @media (max-width: 650px) {
    grid-column: span 1;
  }
`;

const Label = styled.label`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${DarkText};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.85rem 1rem;
  font-size: 0.88rem;
  color: ${DarkText};
  background-color: ${WarmBg};
  border: 1px solid ${BorderColor};
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${GoldAccent};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.85rem 1rem;
  font-size: 0.88rem;
  color: ${DarkText};
  background-color: ${WarmBg};
  border: 1px solid ${BorderColor};
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${GoldAccent};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.85rem 1rem;
  font-size: 0.88rem;
  color: ${DarkText};
  background-color: ${WarmBg};
  border: 1px solid ${BorderColor};
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${GoldAccent};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background-color: ${GreenBtnBg};
  color: ${White};
  padding: 1rem 1.6rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
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
    transform: none;
  }
`;

/* ================= FORM CONTENT COMPONENT ================= */
function BookingFormContent() {
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get("service") || "";

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    formTitle: "Private Appointment Booking",
    fullName: "",
    email: "",
    phoneNumber: "",
    appointmentCategory: "Interiors",
    preferredDate: "",
    preferredTime: "Morning (9:00 AM - 12:00 PM)",
    locationOrType: "Virtual Consultation",
    additionalNotes: "",
  });

  // Pre-select category based on URL search query (e.g., /book-now?service=ashevon)
  useEffect(() => {
    if (serviceQuery) {
      const normalized = serviceQuery.toLowerCase();
      if (normalized.includes("ashevon")) {
        setFormData((prev) => ({ ...prev, appointmentCategory: "ASHÉVON" }));
      } else if (normalized.includes("interior")) {
        setFormData((prev) => ({ ...prev, appointmentCategory: "Interiors" }));
      } else if (normalized.includes("property")) {
        setFormData((prev) => ({ ...prev, appointmentCategory: "Property" }));
      } else if (normalized.includes("fashion")) {
        setFormData((prev) => ({ ...prev, appointmentCategory: "Fashion" }));
      }
    }
  }, [serviceQuery]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formTitle: `Appointment Request - ${formData.appointmentCategory}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Appointment Requested",
          text: "Thank you for scheduling with us. Our team will confirm your consultation shortly.",
          icon: "success",
          confirmButtonColor: GreenBtnBg,
        });

        setFormData({
          formTitle: "Private Appointment Booking",
          fullName: "",
          email: "",
          phoneNumber: "",
          appointmentCategory: "Interiors",
          preferredDate: "",
          preferredTime: "Morning (9:00 AM - 12:00 PM)",
          locationOrType: "Virtual Consultation",
          additionalNotes: "",
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
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Grid>
        <FormGroup>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. john@example.com"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phoneNumber">Phone Number *</Label>
          <Input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+234 ..."
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="appointmentCategory">Consultation Division *</Label>
          <Select
            id="appointmentCategory"
            name="appointmentCategory"
            value={formData.appointmentCategory}
            onChange={handleChange}
            required
          >
            <option value="Interiors">Interiors</option>
            <option value="ASHÉVON">ASHÉVON</option>
            <option value="Property">Property</option>
            <option value="Fashion">Fashion</option>
            <option value="Wellness">Wellness</option>
            <option value="Business Advisory">Business Advisory</option>
            <option value="Legal Advisory">Legal Advisory</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="preferredDate">Preferred Date *</Label>
          <Input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="preferredTime">Preferred Time Slot *</Label>
          <Select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
          >
            <option value="Morning (9:00 AM - 12:00 PM)">
              Morning (9:00 AM - 12:00 PM)
            </option>
            <option value="Afternoon (12:00 PM - 3:00 PM)">
              Afternoon (12:00 PM - 3:00 PM)
            </option>
            <option value="Late Afternoon (3:00 PM - 6:00 PM)">
              Late Afternoon (3:00 PM - 6:00 PM)
            </option>
          </Select>
        </FormGroup>

        <FormGroup $fullWidth>
          <Label htmlFor="locationOrType">Consultation Type *</Label>
          <Select
            id="locationOrType"
            name="locationOrType"
            value={formData.locationOrType}
            onChange={handleChange}
            required
          >
            <option value="Virtual Consultation">
              Virtual Meeting (Google Meet / Zoom)
            </option>
            <option value="In-Person Private Session">
              In-Person Private Session
            </option>
          </Select>
        </FormGroup>

        <FormGroup $fullWidth>
          <Label htmlFor="additionalNotes">Project Brief / Notes</Label>
          <TextArea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Tell us briefly about your inquiry or specific vision..."
          />
        </FormGroup>
      </Grid>

      <SubmitButton type="submit" disabled={loading}>
        {loading ? "SUBMITTING REQUEST..." : "CONFIRM APPOINTMENT REQUEST →"}
      </SubmitButton>
    </FormContainer>
  );
}

/* ================= EXPORTED MAIN PAGE ================= */
export default function BookAppointmentPage() {
  return (
    <PageWrapper>
      <InnerContainer>
        <HeaderSection>
          <HeaderTag>RESERVATIONS & CONSULTATIONS</HeaderTag>
          <Title>Schedule Your Private Session</Title>
          <Subtitle>
            Select your required division and date below. Our team will review
            your details and confirm your appointment.
          </Subtitle>
        </HeaderSection>

        <Suspense fallback={<div>Loading form...</div>}>
          <BookingFormContent />
        </Suspense>
      </InnerContainer>
    </PageWrapper>
  );
}