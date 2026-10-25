// "use client";

// import { useState } from "react";
// import styled from "styled-components";
// import Link from "next/link";
// import { secondaryColoring } from "./Context";

// /* ================= COLORS ================= */
// const GoldAccent = secondaryColoring || "#E2B04A";
// const GreenBtnBg = "#11382b";
// const DarkText = "#1A1A1A";
// const MutedText = "#706E6B";
// const WarmBg = "#FAF8F4";
// const CardBg = "#FFFFFF";
// const InputBorder = "#E2DDD5";
// const LabelGold = "#A38B53";
// const DarkSectionBg = "#0A0A0A";

// /* ================= SECTION CONTAINERS ================= */
// const PageWrapper = styled.section`
//   width: 100%;
//   background-color: ${WarmBg};
//   color: ${DarkText};
//   font-family: inherit;
//   box-sizing: border-box;
// `;

// const SectionContainer = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   padding: 5rem 1.5rem 6rem;
//   text-align: center;
// `;

// /* ================= HEADER TAG ================= */
// const HeaderTag = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 0.75rem;
//   font-size: 0.65rem;
//   font-weight: 700;
//   letter-spacing: 0.25em;
//   color: ${GoldAccent};
//   text-transform: uppercase;
//   margin-bottom: 0.8rem;

//   &::before,
//   &::after {
//     content: "";
//     width: 22px;
//     height: 1px;
//     background-color: ${GoldAccent};
//   }
// `;

// const MainHeading = styled.h2`
//   font-family: "Playfair Display", Georgia, serif;
//   font-size: 2.8rem;
//   font-weight: 400;
//   color: ${DarkText};
//   margin: 0 0 0.8rem 0;
//   line-height: 1.2;

//   @media (max-width: 768px) {
//     font-size: 2.1rem;
//   }
// `;

// const SubText = styled.p`
//   font-size: 0.9rem;
//   color: ${MutedText};
//   line-height: 1.5;
//   margin: 0 auto 3rem auto;
//   max-width: 580px;
//   font-weight: 300;
// `;

// /* ================= CATEGORY TABS ================= */
// const CategoryTabGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 1.25rem;
//   margin-bottom: 2.5rem;

//   @media (max-width: 850px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (max-width: 500px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const TabCard = styled.button`
//   background: ${CardBg};
//   border: ${(p) => (p.$active ? `2px solid ${GoldAccent}` : `1px solid ${InputBorder}`)};
//   padding: 1.5rem 0.8rem;
//   border-radius: 2px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 0.8rem;
//   cursor: pointer;
//   position: relative;
//   transition: all 0.2s ease;
//   box-shadow: ${(p) => (p.$active ? "0 8px 24px rgba(226, 176, 74, 0.15)" : "0 4px 12px rgba(0, 0, 0, 0.02)")};

//   &:hover {
//     border-color: ${GoldAccent};
//     transform: translateY(-2px);
//   }

//   .icon-circle {
//     width: 42px;
//     height: 42px;
//     border-radius: 50%;
//     background-color: ${(p) => (p.$active ? GoldAccent : "#f4f0e8")};
//     color: ${(p) => (p.$active ? "#ffffff" : GreenBtnBg)};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 1.2rem;
//     transition: all 0.2s ease;
//   }

//   .tab-title {
//     font-size: 0.72rem;
//     font-weight: 700;
//     color: ${DarkText};
//     letter-spacing: 0.05em;
//     text-transform: capitalize;
//   }

//   ${(p) =>
//     p.$active &&
//     `
//     &::after {
//       content: "✓";
//       position: absolute;
//       top: 6px;
//       right: 6px;
//       font-size: 0.6rem;
//       background: ${GoldAccent};
//       color: #ffffff;
//       width: 14px;
//       height: 14px;
//       border-radius: 50%;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }
//   `}
// `;

// /* ================= FORM CARD ================= */
// const FormCard = styled.div`
//   background: ${CardBg};
//   border: 1px solid ${InputBorder};
//   border-radius: 2px;
//   padding: 2.5rem 2.5rem 2rem;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
//   text-align: left;
// `;

// const FormSubtitle = styled.p`
//   font-size: 0.82rem;
//   color: ${MutedText};
//   margin: 0 0 2rem 0;
//   font-style: italic;
// `;

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1.25rem;
// `;

// const FormRow = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 1.25rem;

//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.4rem;
//   width: 100%;
// `;

// const Label = styled.label`
//   font-size: 0.62rem;
//   font-weight: 700;
//   letter-spacing: 0.18em;
//   color: ${LabelGold};
//   text-transform: uppercase;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.85rem 1rem;
//   background-color: ${CardBg};
//   border: 1px solid ${InputBorder};
//   border-radius: 2px;
//   font-size: 0.9rem;
//   color: ${DarkText};
//   outline: none;
//   box-sizing: border-box;
//   transition: border-color 0.2s ease, box-shadow 0.2s ease;

//   &::placeholder {
//     color: #a8a299;
//     font-size: 0.88rem;
//     font-weight: 300;
//   }

//   &:focus {
//     border-color: ${GoldAccent};
//     box-shadow: 0 0 0 2px rgba(226, 176, 74, 0.15);
//   }
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   min-height: 100px;
//   padding: 1rem;
//   background-color: ${CardBg};
//   border: 1px solid ${InputBorder};
//   border-radius: 2px;
//   font-size: 0.9rem;
//   font-family: inherit;
//   color: ${DarkText};
//   outline: none;
//   resize: vertical;
//   box-sizing: border-box;
//   transition: border-color 0.2s ease;

//   &::placeholder {
//     color: #a8a299;
//     font-size: 0.88rem;
//     font-weight: 300;
//   }

//   &:focus {
//     border-color: ${GoldAccent};
//     box-shadow: 0 0 0 2px rgba(226, 176, 74, 0.15);
//   }
// `;

// const SubmitBtn = styled.button`
//   width: 100%;
//   background-color: ${GreenBtnBg};
//   color: #ffffff;
//   border: none;
//   padding: 0.95rem 1.8rem;
//   font-size: 0.72rem;
//   font-weight: 700;
//   letter-spacing: 0.18em;
//   text-transform: uppercase;
//   cursor: pointer;
//   border-radius: 2px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   transition: opacity 0.2s ease, transform 0.2s ease;
//   margin-top: 0.5rem;

//   &:hover {
//     opacity: 0.92;
//     transform: translateY(-1px);
//   }
// `;

// /* ================= DARK ENQUIRY SECTION ================= */
// const DarkEnquirySection = styled.div`
//   width: 100%;
//   background-color: ${DarkSectionBg};
//   color: #ffffff;
//   padding: 5rem 1.5rem;
//   box-sizing: border-box;
//   text-align: center;
// `;

// const DarkInner = styled.div`
//   max-width: 600px;
//   margin: 0 auto;

//   h2 {
//     font-family: "Playfair Display", Georgia, serif;
//     font-size: 2.8rem;
//     font-weight: 400;
//     color: #ffffff;
//     margin: 0 0 0.8rem 0;
//   }

//   p {
//     font-size: 0.88rem;
//     color: rgba(255, 255, 255, 0.7);
//     margin: 0 0 2.5rem 0;
//     font-weight: 300;
//   }
// `;

// const DarkForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1.25rem;
// `;

// const DarkInput = styled.input`
//   width: 100%;
//   padding: 1rem 1.2rem;
//   background-color: #141414;
//   border: 1px solid #2a2a2a;
//   border-radius: 2px;
//   font-size: 0.9rem;
//   color: #ffffff;
//   outline: none;
//   box-sizing: border-box;
//   transition: border-color 0.2s ease;

//   &::placeholder {
//     color: #666666;
//     font-size: 0.88rem;
//   }

//   &:focus {
//     border-color: ${GoldAccent};
//   }
// `;

// const DarkTextArea = styled.textarea`
//   width: 100%;
//   min-height: 120px;
//   padding: 1rem 1.2rem;
//   background-color: #141414;
//   border: 1px solid #2a2a2a;
//   border-radius: 2px;
//   font-size: 0.9rem;
//   font-family: inherit;
//   color: #ffffff;
//   outline: none;
//   resize: vertical;
//   box-sizing: border-box;
//   transition: border-color 0.2s ease;

//   &::placeholder {
//     color: #666666;
//     font-size: 0.88rem;
//   }

//   &:focus {
//     border-color: ${GoldAccent};
//   }
// `;

// const GoldSubmitBtn = styled.button`
//   width: 100%;
//   background-color: ${GoldAccent};
//   color: #111827;
//   border: none;
//   padding: 0.95rem 1.8rem;
//   font-size: 0.72rem;
//   font-weight: 700;
//   letter-spacing: 0.18em;
//   text-transform: uppercase;
//   cursor: pointer;
//   border-radius: 2px;
//   transition: opacity 0.2s ease, transform 0.2s ease;
//   margin-top: 0.5rem;

//   &:hover {
//     opacity: 0.92;
//     transform: translateY(-1px);
//   }
// `;

// /* ================= BOTTOM CONSULTATION CALLOUT ================= */
// const CalloutSection = styled.div`
//   background-color: ${WarmBg};
//   border-top: 1px solid ${InputBorder};
//   padding: 4rem 1.5rem;
// `;

// const CalloutInner = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-end;

//   @media (max-width: 850px) {
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 2rem;
//   }
// `;

// const CalloutText = styled.div`
//   max-width: 600px;

//   h2 {
//     font-family: "Playfair Display", Georgia, serif;
//     font-size: 2.2rem;
//     font-weight: 400;
//     color: ${DarkText};
//     line-height: 1.25;
//     margin: 0 0 0.8rem 0;
//   }

//   p {
//     font-size: 0.88rem;
//     color: ${MutedText};
//     margin: 0 0 1rem 0;
//     line-height: 1.6;
//     font-weight: 300;
//   }

//   a.email {
//     font-size: 0.88rem;
//     font-weight: 600;
//     color: ${GoldAccent};
//     text-decoration: none;
//     display: inline-flex;
//     align-items: center;
//     gap: 0.4rem;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   flex-wrap: wrap;
// `;

// const PrimaryBtn = styled(Link)`
//   background-color: ${GreenBtnBg};
//   color: #ffffff;
//   padding: 0.85rem 1.6rem;
//   font-size: 0.72rem;
//   font-weight: 700;
//   letter-spacing: 0.15em;
//   text-transform: uppercase;
//   text-decoration: none;
//   border-radius: 2px;
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   transition: opacity 0.2s ease;

//   &:hover {
//     opacity: 0.92;
//   }
// `;

// const SecondaryOutlineBtn = styled(Link)`
//   background-color: transparent;
//   color: ${GreenBtnBg};
//   border: 1px solid ${GreenBtnBg};
//   padding: 0.85rem 1.6rem;
//   font-size: 0.72rem;
//   font-weight: 700;
//   letter-spacing: 0.15em;
//   text-transform: uppercase;
//   text-decoration: none;
//   border-radius: 2px;
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   transition: background 0.2s ease;

//   &:hover {
//     background-color: rgba(17, 56, 43, 0.05);
//   }
// `;

// /* ================= DATA ================= */
// const categoryTabs = [
//   { id: "bags", title: "Bags", icon: "💼" },
//   { id: "jewellery", title: "Jewellery", icon: "💎" },
//   { id: "furs", title: "Furs", icon: "🧥" },
//   { id: "personal-shopping", title: "Luxury Personal Shopping", icon: "🛍️" },
//   { id: "custom-dress", title: "Custom-Made Dress", icon: "👗" },
// ];

// /* ================= COMPONENT ================= */
// export default function PersonalShoppingSection() {
//   const [activeTab, setActiveTab] = useState("custom-dress");

//   const [bookingData, setBookingData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     preferredDate: "",
//     brandsOfInterest: "",
//     specificItem: "",
//     budget: "",
//     notes: "",
//   });

//   const [enquiryData, setEnquiryData] = useState({
//     fullName: "",
//     email: "",
//     message: "",
//   });

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();
//     console.log("Personal Shopping Booking:", { category: activeTab, ...bookingData });
//     alert("Your personal shopping consultation request has been received!");
//   };

//   const handleEnquirySubmit = (e) => {
//     e.preventDefault();
//     console.log("Enquiry Submitted:", enquiryData);
//     alert("Thank you! Your enquiry has been sent.");
//     setEnquiryData({ fullName: "", email: "", message: "" });
//   };

//   return (
//     <PageWrapper>
//       {/* 1. PERSONAL SHOPPING SECTION */}
//       <SectionContainer>
//         <HeaderTag>LUXURY CONSULTATION</HeaderTag>
//         <MainHeading>Book a Consultation <br /> For a custom dress</MainHeading>
      



//         {/* FORM CARD */}
//         <FormCard>
//           <FormSubtitle>
//             Bespoke dress design and tailoring — made to measure for your perfect fit.
//           </FormSubtitle>

//           <StyledForm onSubmit={handleBookingSubmit}>
//             <FormRow>
//               <FormGroup>
//                 <Label htmlFor="fullName">FULL NAME *</Label>
//                 <Input
//                   id="fullName"
//                   type="text"
//                   placeholder="Your name"
//                   value={bookingData.fullName}
//                   onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })}
//                   required
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <Label htmlFor="email">EMAIL *</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Email address"
//                   value={bookingData.email}
//                   onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
//                   required
//                 />
//               </FormGroup>
//             </FormRow>

//             <FormRow>
//               <FormGroup>
//                 <Label htmlFor="phone">PHONE</Label>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   placeholder="Phone number"
//                   value={bookingData.phone}
//                   onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <Label htmlFor="preferredDate">PREFERRED DATE</Label>
//                 <Input
//                   id="preferredDate"
//                   type="date"
//                   value={bookingData.preferredDate}
//                   onChange={(e) => setBookingData({ ...bookingData, preferredDate: e.target.value })}
//                 />
//               </FormGroup>
//             </FormRow>

//             <FormRow>
//               <FormGroup>
//                 <Label htmlFor="brandsOfInterest">BRANDS OF INTEREST</Label>
//                 <Input
//                   id="brandsOfInterest"
//                   type="text"
//                   placeholder="e.g. Louis Vuitton, Hermès, Chanel"
//                   value={bookingData.brandsOfInterest}
//                   onChange={(e) => setBookingData({ ...bookingData, brandsOfInterest: e.target.value })}
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <Label htmlFor="specificItem">SPECIFIC ITEM</Label>
//                 <Input
//                   id="specificItem"
//                   type="text"
//                   placeholder="e.g. Speedy bag, Cartier bracelet"
//                   value={bookingData.specificItem}
//                   onChange={(e) => setBookingData({ ...bookingData, specificItem: e.target.value })}
//                 />
//               </FormGroup>
//             </FormRow>

//             <FormGroup>
//               <Label htmlFor="budget">BUDGET (₦)</Label>
//               <Input
//                 id="budget"
//                 type="text"
//                 placeholder="e.g. 500,000"
//                 value={bookingData.budget}
//                 onChange={(e) => setBookingData({ ...bookingData, budget: e.target.value })}
//               />
//             </FormGroup>

//             <FormGroup>
//               <Label htmlFor="notes">NOTES</Label>
//               <TextArea
//                 id="notes"
//                 placeholder="Any preferences, sizing, or special requests..."
//                 value={bookingData.notes}
//                 onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
//               />
//             </FormGroup>

//             <SubmitBtn type="submit">
//               📋 BOOK CONSULTATION →
//             </SubmitBtn>
//           </StyledForm>
//         </FormCard>
//       </SectionContainer>

//       {/* 2. MAKE AN ENQUIRY DARK SECTION */}
//       <DarkEnquirySection>
//         <DarkInner>
//           <HeaderTag style={{ color: GoldAccent }}>GET IN TOUCH</HeaderTag>
//           <h2>Make an Enquiry</h2>
//           <p>Interested in a piece? Send us a message and our team will get back to you.</p>

//           <DarkForm onSubmit={handleEnquirySubmit}>
//             <DarkInput
//               type="text"
//               placeholder="Full Name"
//               value={enquiryData.fullName}
//               onChange={(e) => setEnquiryData({ ...enquiryData, fullName: e.target.value })}
//               required
//             />
//             <DarkInput
//               type="email"
//               placeholder="Email Address"
//               value={enquiryData.email}
//               onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
//               required
//             />
//             <DarkTextArea
//               placeholder="Your Message"
//               value={enquiryData.message}
//               onChange={(e) => setEnquiryData({ ...enquiryData, message: e.target.value })}
//               required
//             />
//             <GoldSubmitBtn type="submit">
//               SEND ENQUIRY
//             </GoldSubmitBtn>
//           </DarkForm>
//         </DarkInner>
//       </DarkEnquirySection>


//     </PageWrapper>
//   );
// }




"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Swal from "sweetalert2";

/* ================= COLORS ================= */
const GoldAccent = "#E2B04A";
const GreenBtnBg = "#11382b";
const DarkText = "#1A1A1A";
const MutedText = "#706E6B";
const WarmBg = "#FAF8F4";
const CardBg = "#FFFFFF";
const InputBorder = "#E2DDD5";
const LabelGold = "#A38B53";
const DarkSectionBg = "#0A0A0A";

/* ================= SECTION CONTAINERS ================= */
const PageWrapper = styled.section`
  width: 100%;
  background-color: ${WarmBg};
  color: ${DarkText};
  font-family: inherit;
  box-sizing: border-box;
`;

const SectionContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 5rem 1.5rem 6rem;
  text-align: center;
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

/* ================= FORM CARD ================= */
const FormCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${InputBorder};
  border-radius: 2px;
  padding: 2.5rem 2.5rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  text-align: left;
  margin-top: 2rem;
`;

const FormSubtitle = styled.p`
  font-size: 0.82rem;
  color: ${MutedText};
  margin: 0 0 2rem 0;
  font-style: italic;
`;

const StyledForm = styled.form`
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

const Select = styled.select`
  width: 100%;
  padding: 0.85rem 1rem;
  background-color: ${CardBg};
  border: 1px solid ${InputBorder};
  border-radius: 2px;
  font-size: 0.9rem;
  color: ${DarkText};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${GoldAccent};
    box-shadow: 0 0 0 2px rgba(226, 176, 74, 0.15);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.92;
    transform: translateY(-1px);
  }
`;

/* ================= DARK ENQUIRY SECTION ================= */
const DarkEnquirySection = styled.div`
  width: 100%;
  background-color: ${DarkSectionBg};
  color: #ffffff;
  padding: 5rem 1.5rem;
  box-sizing: border-box;
  text-align: center;
`;

const DarkInner = styled.div`
  max-width: 600px;
  margin: 0 auto;

  h2 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.8rem;
    font-weight: 400;
    color: #ffffff;
    margin: 0 0 0.8rem 0;
  }

  p {
    font-size: 0.88rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0 2.5rem 0;
    font-weight: 300;
  }
`;

const DarkForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const DarkInput = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  background-color: #141414;
  border: 1px solid #2a2a2a;
  border-radius: 2px;
  font-size: 0.9rem;
  color: #ffffff;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: #666666;
    font-size: 0.88rem;
  }

  &:focus {
    border-color: ${GoldAccent};
  }
`;

const DarkTextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem 1.2rem;
  background-color: #141414;
  border: 1px solid #2a2a2a;
  border-radius: 2px;
  font-size: 0.9rem;
  font-family: inherit;
  color: #ffffff;
  outline: none;
  resize: vertical;
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: #666666;
    font-size: 0.88rem;
  }

  &:focus {
    border-color: ${GoldAccent};
  }
`;

const GoldSubmitBtn = styled.button`
  width: 100%;
  background-color: ${GoldAccent};
  color: #111827;
  border: none;
  padding: 0.95rem 1.8rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: opacity 0.2s ease, transform 0.2s ease;
  margin-top: 0.5rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.92;
    transform: translateY(-1px);
  }
`;

/* ================= COMPONENT ================= */
export default function CustomDressConsultation() {
  const [loading, setLoading] = useState(false);
  const [enquiryLoading, setEnquiryLoading] = useState(false);

  const [bookingData, setBookingData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dressType: "Evening Gown / Red Carpet",
    eventDate: "",
    preferredConsultationDate: "",
    budget: "",
    notes: "",
    formTitle: "Custom Dress Consultation Request",
  });

  const [enquiryData, setEnquiryData] = useState({
    fullName: "",
    email: "",
    message: "",
    formTitle: "General Website Enquiry",
  });

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        Swal.fire({
          icon: "success",
          title: "Consultation Booked!",
          text: "Your custom dress consultation request has been sent successfully. We will contact you shortly.",
          confirmButtonColor: GreenBtnBg,
        });
        setBookingData({
          fullName: "",
          email: "",
          phone: "",
          dressType: "Evening Gown / Red Carpet",
          eventDate: "",
          preferredConsultationDate: "",
          budget: "",
          notes: "",
          formTitle: "Custom Dress Consultation Request",
        });
      } else {
        throw new Error(result.message || "Failed to submit request.");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.message || "Something went wrong. Please try again.",
        confirmButtonColor: GreenBtnBg,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setEnquiryLoading(true);

    try {
      const res = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiryData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        Swal.fire({
          icon: "success",
          title: "Enquiry Sent!",
          text: "Thank you! Your message has been received.",
          confirmButtonColor: GoldAccent,
        });
        setEnquiryData({
          fullName: "",
          email: "",
          message: "",
          formTitle: "General Website Enquiry",
        });
      } else {
        throw new Error(result.message || "Failed to send enquiry.");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Could not send message. Please try again.",
        confirmButtonColor: GoldAccent,
      });
    } finally {
      setEnquiryLoading(false);
    }
  };

  return (
    <PageWrapper>
      {/* 1. CUSTOM DRESS CONSULTATION SECTION */}
      <SectionContainer>
        <HeaderTag>BESPOKE TAILORING</HeaderTag>
        <MainHeading>
          Book a Consultation <br /> For a Custom Dress
        </MainHeading>

        {/* FORM CARD */}
        <FormCard>
          <FormSubtitle>
            Provide your details and preferences below so our master tailors can prepare for your bespoke consultation.
          </FormSubtitle>

          <StyledForm onSubmit={handleBookingSubmit}>
            <FormRow>
              <FormGroup>
                <Label htmlFor="fullName">FULL NAME *</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  value={bookingData.fullName}
                  onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">EMAIL ADDRESS *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="phone">PHONE NUMBER *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone / WhatsApp number"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="dressType">DRESS STYLE / CATEGORY</Label>
                <Select
                  id="dressType"
                  value={bookingData.dressType}
                  onChange={(e) => setBookingData({ ...bookingData, dressType: e.target.value })}
                >
                  <option value="Evening Gown / Red Carpet">Evening Gown / Red Carpet</option>
                  <option value="Bridal / Wedding Dress">Bridal / Wedding Dress</option>
                  <option value="Traditional / Native Attire">Traditional / Native Attire</option>
                  <option value="Cocktail / Party Dress">Cocktail / Party Dress</option>
                  <option value="Corporate / Suit">Corporate / Suit</option>
                  <option value="Other Custom Design">Other Custom Design</option>
                </Select>
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="eventDate">TARGET EVENT DATE</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={bookingData.eventDate}
                  onChange={(e) => setBookingData({ ...bookingData, eventDate: e.target.value })}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="preferredConsultationDate">PREFERRED CONSULTATION DATE</Label>
                <Input
                  id="preferredConsultationDate"
                  type="date"
                  value={bookingData.preferredConsultationDate}
                  onChange={(e) => setBookingData({ ...bookingData, preferredConsultationDate: e.target.value })}
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="budget">ESTIMATED BUDGET (₦)</Label>
              <Input
                id="budget"
                type="text"
                placeholder="e.g. 250,000"
                value={bookingData.budget}
                onChange={(e) => setBookingData({ ...bookingData, budget: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="notes">STYLE NOTES / MEASUREMENT DETAILS / SPECIAL REQUESTS</Label>
              <TextArea
                id="notes"
                placeholder="Describe your design vision, fabric preference, or any specific measurements..."
                value={bookingData.notes}
                onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
              />
            </FormGroup>

            <SubmitBtn type="submit" disabled={loading}>
              {loading ? "SENDING REQUEST..." : "📋 BOOK CUSTOM DRESS CONSULTATION →"}
            </SubmitBtn>
          </StyledForm>
        </FormCard>
      </SectionContainer>

      {/* 2. MAKE AN ENQUIRY DARK SECTION */}
      <DarkEnquirySection>
        <DarkInner>
          <HeaderTag style={{ color: GoldAccent }}>GET IN TOUCH</HeaderTag>
          <h2>Make an Enquiry</h2>
          <p>Have questions regarding our tailoring process or ready-to-wear pieces? Send us a message.</p>

          <DarkForm onSubmit={handleEnquirySubmit}>
            <DarkInput
              type="text"
              placeholder="Full Name"
              value={enquiryData.fullName}
              onChange={(e) => setEnquiryData({ ...enquiryData, fullName: e.target.value })}
              required
            />
            <DarkInput
              type="email"
              placeholder="Email Address"
              value={enquiryData.email}
              onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
              required
            />
            <DarkTextArea
              placeholder="Your Message"
              value={enquiryData.message}
              onChange={(e) => setEnquiryData({ ...enquiryData, message: e.target.value })}
              required
            />
            <GoldSubmitBtn type="submit" disabled={enquiryLoading}>
              {enquiryLoading ? "SENDING..." : "SEND ENQUIRY"}
            </GoldSubmitBtn>
          </DarkForm>
        </DarkInner>
      </DarkEnquirySection>
    </PageWrapper>
  );
}