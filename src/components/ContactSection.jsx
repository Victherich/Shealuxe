"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { secondaryColoring } from "./Context";
import Swal from 'sweetalert2'

/* ================= COLORS ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const GreenBtnBg = "#11382b";
const DarkText = "#1A1A1A";
const MutedText = "#706E6B";
const OffWhiteBg = "#FAF8F4";
const CardBg = "#FFFFFF";
const InputBorder = "#E2DDD5";
const LabelGold = "#A38B53";

/* ================= MAIN CONTAINER ================= */
const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${OffWhiteBg};
  color: ${DarkText};
  font-family: inherit;
  box-sizing: border-box;
  padding: 5rem 1.5rem 0;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

/* ================= HEADER TAG ================= */
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

const SectionTitle = styled.h2`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: ${DarkText};
  margin: 0 0 2rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

/* ================= LEFT: FORM STYLES ================= */
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
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
  gap: 0.4rem;
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
  background-color: ${CardBg};
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
    background-color: ${CardBg};
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
    font-size: 0.75rem;
    color: ${DarkText};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  background-color: ${CardBg};
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
  width: 100%;
  background-color: ${GreenBtnBg};
  color: #ffffff;
  border: none;
  padding: 0.95rem 1.8rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: opacity 0.2s ease, transform 0.2s ease;
  margin-top: 0.5rem;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }
`;

/* ================= RIGHT: CONTACT DETAILS ================= */
const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${InputBorder};
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border-radius: 2px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${GoldAccent};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
  }

  .icon-circle {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: ${GreenBtnBg};
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    flex-shrink: 0;
  }

  .meta {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .label {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: ${LabelGold};
    text-transform: uppercase;
  }

  .value {
    font-size: 0.88rem;
    font-weight: 500;
    color: ${DarkText};

    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: ${GoldAccent};
      }
    }
  }
`;

const LocationBox = styled.div`
  width: 100%;
  background-color: #f0eae1;
  border: 1px solid ${InputBorder};
  border-radius: 2px;
  padding: 3rem 1.5rem;
  text-align: center;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);

  .map-pin {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${GreenBtnBg};
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }

  .location-title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.1rem;
    font-weight: 500;
    color: ${DarkText};
  }

  .location-sub {
    font-size: 0.75rem;
    color: ${MutedText};
    font-style: italic;
  }
`;

/* ================= BOTTOM: CONSULTATION CALLOUT ================= */
const CalloutSection = styled.div`
  background-color: ${OffWhiteBg};
  border-top: 1px solid ${InputBorder};
  padding: 4rem 1.5rem;
  margin: 0 -1.5rem;
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

  h2 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.2rem;
    font-weight: 400;
    color: ${DarkText};
    line-height: 1.25;
    margin: 0 0 0.8rem 0;
  }

  p {
    font-size: 0.88rem;
    color: ${MutedText};
    margin: 0 0 1rem 0;
    line-height: 1.6;
    font-weight: 300;
  }

  a.email {
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

// /* ================= COMPONENT ================= */
// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     department: "Real Estate",
//     subject: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     alert("Thank you! Your message has been sent successfully.");
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       department: "Real Estate",
//       subject: "",
//       message: "",
//     });
//   };

//   return (
//     <SectionWrapper>
//       <InnerContainer>
//         <MainGrid>
//           {/* LEFT COLUMN: SEND A MESSAGE FORM */}
//           <div>
//             <HeaderTag>SEND A MESSAGE</HeaderTag>
//             <SectionTitle>We'd Love to <br /> Hear From You</SectionTitle>

//             <ContactForm onSubmit={handleSubmit}>
//               <FormRow>
//                 <FormGroup>
//                   <Label htmlFor="fullName">FULL NAME</Label>
//                   <Input
//                     id="fullName"
//                     type="text"
//                     placeholder="Your name"
//                     value={formData.fullName}
//                     onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                     required
//                   />
//                 </FormGroup>

//                 <FormGroup>
//                   <Label htmlFor="email">EMAIL</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     required
//                   />
//                 </FormGroup>
//               </FormRow>

//               <FormRow>
//                 <FormGroup>
//                   <Label htmlFor="phone">PHONE</Label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     placeholder="Phone"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   />
//                 </FormGroup>

//                 <FormGroup>
//                   <Label htmlFor="department">DEPARTMENT</Label>
//                   <SelectWrapper>
//                     <select
//                       id="department"
//                       value={formData.department}
//                       onChange={(e) => setFormData({ ...formData, department: e.target.value })}
//                     >
//                       <option value="Real Estate">Real Estate</option>
//                       <option value="Interior Décor">Interior Décor</option>
//                       <option value="Ashakade Closet">Ashakade Closet</option>
//                       <option value="Pinkles Spa">Pinkles Spa</option>
//                       <option value="Business Consulting">Business Consulting</option>
//                       <option value="Legal Advisory">Legal Advisory</option>
//                     </select>
//                     <span className="arrow">▼</span>
//                   </SelectWrapper>
//                 </FormGroup>
//               </FormRow>

//               <FormGroup>
//                 <Label htmlFor="subject">SUBJECT</Label>
//                 <Input
//                   id="subject"
//                   type="text"
//                   placeholder="How can we help?"
//                   value={formData.subject}
//                   onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                   required
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <Label htmlFor="message">MESSAGE</Label>
//                 <TextArea
//                   id="message"
//                   placeholder="Tell us more..."
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   required
//                 />
//               </FormGroup>

//               <SubmitBtn type="submit">
//                 SEND MESSAGE →
//               </SubmitBtn>
//             </ContactForm>
//           </div>

//           {/* RIGHT COLUMN: CONTACT DETAILS */}
//           <div>
//             <HeaderTag>REACH US</HeaderTag>
//             <SectionTitle>Contact Details</SectionTitle>

//             <DetailsList>
//               <InfoCard>
//                 <div className="icon-circle">📞</div>
//                 <div className="meta">
//                   <span className="label">CALL US</span>
//                   <span className="value">
//                     <a href="tel:+2348000000000">+234 800 000 0000</a>
//                   </span>
//                 </div>
//               </InfoCard>

//               <InfoCard>
//                 <div className="icon-circle">✉️</div>
//                 <div className="meta">
//                   <span className="label">EMAIL US</span>
//                   <span className="value">
//                     <a href="mailto:hello@pinklesng.com">hello@pinklesng.com</a>
//                   </span>
//                 </div>
//               </InfoCard>

//               <InfoCard>
//                 <div className="icon-circle">💬</div>
//                 <div className="meta">
//                   <span className="label">WHATSAPP</span>
//                   <span className="value">
//                     <a href="https://wa.me/2348000000000" target="_blank" rel="noreferrer">
//                       Chat with us instantly
//                     </a>
//                   </span>
//                 </div>
//               </InfoCard>

//               <InfoCard>
//                 <div className="icon-circle">📍</div>
//                 <div className="meta">
//                   <span className="label">VISIT US</span>
//                   <span className="value">Victoria Island, Lagos, Nigeria</span>
//                 </div>
//               </InfoCard>

//               <InfoCard>
//                 <div className="icon-circle">⏰</div>
//                 <div className="meta">
//                   <span className="label">BUSINESS HOURS</span>
//                   <span className="value">Mon - Sat: 8:00 AM – 7:00 PM</span>
//                 </div>
//               </InfoCard>

//               <LocationBox>
//                 <div className="map-pin">📍</div>
//                 <div className="location-title">Victoria Island, Lagos</div>
//                 <div className="location-sub">Our Flagship Office</div>
//               </LocationBox>
//             </DetailsList>
//           </div>
//         </MainGrid>


//       </InnerContainer>
//     </SectionWrapper>
//   );
// }




/* ================= COMPONENT ================= */
// import React, { useState } from "react";
// import Swal from "sweetalert2";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "Real Estate",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
          formTitle: `Contact Form Submission - ${formData.department}`,
          ...formData,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        Swal.fire({
          title: "Message Sent 🎉",
          text: data.message || "Thank you! Your message has been sent successfully.",
          icon: "success",
          confirmButtonColor: "#2e7d32",
        });

        // Reset form fields
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          department: "Real Estate",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.message || data.error || "Failed to send message.");
      }
    } catch (error) {
      Swal.fire({
        title: "Submission Failed ❌",
        text: error.message || "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#d32f2f",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper>
      <InnerContainer>
        <MainGrid>
          {/* LEFT COLUMN: SEND A MESSAGE FORM */}
          <div>
            <HeaderTag>SEND A MESSAGE</HeaderTag>
            <SectionTitle>
              We'd Love to <br /> Hear From You
            </SectionTitle>

            <ContactForm onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="fullName">FULL NAME</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">EMAIL</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <Label htmlFor="phone">PHONE</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="department">DEPARTMENT</Label>
                  <SelectWrapper>
                    <select
                      id="department"
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                    >
                      <option value="Real Estate">Real Estate</option>
                      <option value="Interior Décor">Interior Décor</option>
                      <option value="Ashakade Closet">Ashakade Closet</option>
                      <option value="Pinkles Spa">Pinkles Spa</option>
                      <option value="Business Consulting">Business Consulting</option>
                      <option value="Legal Advisory">Legal Advisory</option>
                    </select>
                    <span className="arrow">▼</span>
                  </SelectWrapper>
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor="subject">SUBJECT</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">MESSAGE</Label>
                <TextArea
                  id="message"
                  placeholder="Tell us more..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </FormGroup>

              <SubmitBtn type="submit" disabled={loading}>
                {loading ? "SENDING..." : "SEND MESSAGE →"}
              </SubmitBtn>
            </ContactForm>
          </div>

          {/* RIGHT COLUMN: CONTACT DETAILS */}
          <div>
            <HeaderTag>REACH US</HeaderTag>
            <SectionTitle>Contact Details</SectionTitle>

            <DetailsList>
              <InfoCard>
                <div className="icon-circle">📞</div>
                <div className="meta">
                  <span className="label">CALL US</span>
                  <span className="value">
                    <a href="tel:+2348000000000">+234 800 000 0000</a>
                  </span>
                </div>
              </InfoCard>

              <InfoCard>
                <div className="icon-circle">✉️</div>
                <div className="meta">
                  <span className="label">EMAIL US</span>
                  <span className="value">
                    <a href="mailto:hello@pinklesng.com">hello@pinklesng.com</a>
                  </span>
                </div>
              </InfoCard>

              <InfoCard>
                <div className="icon-circle">💬</div>
                <div className="meta">
                  <span className="label">WHATSAPP</span>
                  <span className="value">
                    <a
                      href="https://wa.me/2348000000000"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chat with us instantly
                    </a>
                  </span>
                </div>
              </InfoCard>

              <InfoCard>
                <div className="icon-circle">📍</div>
                <div className="meta">
                  <span className="label">VISIT US</span>
                  <span className="value">Victoria Island, Lagos, Nigeria</span>
                </div>
              </InfoCard>

              <InfoCard>
                <div className="icon-circle">⏰</div>
                <div className="meta">
                  <span className="label">BUSINESS HOURS</span>
                  <span className="value">Mon - Sat: 8:00 AM – 7:00 PM</span>
                </div>
              </InfoCard>

              <LocationBox>
                <div className="map-pin">📍</div>
                <div className="location-title">Victoria Island, Lagos</div>
                <div className="location-sub">Our Flagship Office</div>
              </LocationBox>
            </DetailsList>
          </div>
        </MainGrid>
      </InnerContainer>
    </SectionWrapper>
  );
}