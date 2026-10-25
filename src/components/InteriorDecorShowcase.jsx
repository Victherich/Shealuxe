"use client";

import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { secondaryColoring } from "./Context";
import { useEffect } from "react";
import { db } from "@/firebaseConfig"; // Adjust path to your firebase config if needed
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import SecurePaymentSection from "./SecurePaymentSection";

/* ================= COLORS & THEMING ================= */
const GoldAccent = secondaryColoring || "#E2B04A";
const DarkGreen = "#09281e";
const MidGreen = "#11382b";
const WarmBg = "#FAF8F4";
const CardBg = "#FFFFFF";
const DarkText = "#1A1A1A";
const MutedText = "#66625b";
const BorderColor = "#E2DDD5";

/* ================= PORTFOLIO IMAGES DATA ================= */
const portfolioItems = [
  {
    id: 1,
    title: "Portfolio Design 1",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
    featured: true, // Top wide image
  },
  {
    id: 2,
    title: "Portfolio Design 2",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Portfolio Design 3",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Portfolio Design 4",
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6d8310?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Portfolio Design 5",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Portfolio Design 6",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Portfolio Design 7",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  },
];

/* ================= PAGE CONTAINERS ================= */
const PageContainer = styled.div`
  width: 100%;
  background-color: ${WarmBg};
  color: ${DarkText};
  font-family: inherit;
`;

const SectionPadding = styled.section`
  padding: 4.5rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const CenteredHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const SmallTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: ${GoldAccent};
  text-transform: uppercase;
  margin-bottom: 0.8rem;

  &::before,
  &::after {
    content: "";
    width: 18px;
    height: 1px;
    background-color: ${GoldAccent};
  }
`;

const MainTitle = styled.h1`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.6rem;
  font-weight: 400;
  color: ${DarkText};
  line-height: 1.25;
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const DescriptionText = styled.p`
  font-size: 0.88rem;
  color: ${MutedText};
  line-height: 1.6;
  margin: 0;
  font-weight: 300;
`;

/* ================= PORTFOLIO GRID ================= */
const PortfolioGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 2rem;
`;

const FeaturedImageCard = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #eee;
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const ImageCard = styled.div`
  width: 100%;
  aspect-ratio: 4 / 4.5;
  background-color: #eee;
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

/* ================= CONSULTATION TABS ================= */
const ConsultationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ConsultCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  padding: 1.8rem 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    border-color: ${GoldAccent};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
  }

  .icon {
    width: 28px;
    height: 28px;
    opacity: 0.8;
  }

  span {
    font-size: 0.8rem;
    font-weight: 600;
    color: ${DarkText};
  }
`;

/* ================= GREEN WHOLE-HOME SECTION ================= */
const GreenSection = styled.div`
  background-color: ${DarkGreen};
  color: #ffffff;
  padding: 5rem 1.5rem;
  width: 100%;
  box-sizing: border-box;
`;

const GreenFormContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 2.5rem 2rem;
  background-color: rgba(255, 255, 255, 0.02);
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 1.5rem 1rem;
  }
`;

const FormGrid = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  label {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.75rem 0.85rem;
    background-color: #faf8f4;
    border: 1px solid transparent;
    border-radius: 2px;
    color: ${DarkText};
    font-size: 0.85rem;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
      color: #a09a90;
    }

    &:focus {
      border-color: ${GoldAccent};
    }
  }

  textarea {
    min-height: 90px;
    resize: vertical;
  }
`;

const GoldSubmitBtn = styled.button`
  width: 100%;
  padding: 0.9rem;
  background-color: ${GoldAccent};
  color: #111827;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.92;
  }
`;

const CTAWrapper = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 4.5rem auto 0;

  h2 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.2rem;
    font-weight: 400;
    margin: 0 0 1.5rem 0;
    line-height: 1.25;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryGoldBtn = styled.a`
  background-color: ${GoldAccent};
  color: #111827;
  padding: 0.85rem 1.6rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
`;

const OutlineLightBtn = styled.a`
  background-color: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0.85rem 1.6rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;

  &:hover {
    border-color: #ffffff;
  }
`;

/* ================= MAKE A PAYMENT SECTION ================= */
const PaymentCard = styled.div`
  max-width: 440px;
  margin: 0 auto;
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  padding: 1.8rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  text-align: center;
`;

const AmountInputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.2rem;

  input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid ${BorderColor};
    border-radius: 2px;
    font-size: 0.88rem;
    outline: none;
    background: #faf8f4;
  }

  select {
    width: 80px;
    padding: 0.75rem;
    border: 1px solid ${BorderColor};
    border-radius: 2px;
    font-size: 0.88rem;
    background: #faf8f4;
    outline: none;
  }
`;

const PayBtn = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: ${WarmBg};
  color: ${MutedText};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: 1px solid ${BorderColor};
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    border-color: ${GoldAccent};
    color: ${DarkText};
  }
`;

/* ================= MODAL STYLES ================= */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  z-index: 302;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: ${WarmBg};
  width: 100%;
  max-width: 480px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalImagePreview = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ddd;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem 1.8rem 2rem;
`;

const ModalHeader = styled.div`
  margin-bottom: 1.25rem;

  .tag {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: ${GoldAccent};
    text-transform: uppercase;
    display: block;
  }

  h3 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${DarkText};
    margin: 0.2rem 0 0 0;
  }
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: ${MutedText};
    text-transform: uppercase;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.7rem;
    border: 1px solid ${BorderColor};
    background: #ffffff;
    border-radius: 2px;
    font-size: 0.85rem;
    outline: none;
    box-sizing: border-box;

    &:focus {
      border-color: ${GoldAccent};
    }
  }

  textarea {
    min-height: 70px;
  }
`;

const GreenSubmitBtn = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: ${MidGreen};
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    opacity: 0.92;
  }
`;

const CloseModalBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

/* ================= MAIN COMPONENT ================= */
export default function InteriorDecorShowcase() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [currency, setCurrency] = useState("₦");
  const [portfolioItems, setPortfolioItems] = useState([]);

  // Fetch portfolio items from Firestore on mount
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(db, "interiorPortfolio"), orderBy("createdAt", "desc"))
        );
        const items = querySnapshot.docs.map((doc, index) => ({
          id: doc.id,
          // Map database fields: fallback to defaults if properties differ
          title: doc.data().title || `Portfolio Design ${index + 1}`,
          image: doc.data().url || doc.data().image, 
          featured: index === 0, // Makes the first item the top wide image automatically
        }));
        
        // Fallback to default items if database is empty so the layout doesn't break
        if (items.length > 0) {
          setPortfolioItems(items);
        }
      } catch (error) {
        console.error("Error fetching portfolio from Firestore:", error);
      }
    };

    fetchPortfolio();
  }, []);

  // const handleEnquirySubmit = (e) => {
  //   e.preventDefault();
  //   Swal.fire({
  //     title: "Enquiry Sent 🎉",
  //     text: "Thank you! Our design team will contact you shortly.",
  //     icon: "success",
  //     confirmButtonColor: MidGreen,
  //   });
  //   setSelectedItem(null);
  // };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const payload = {
      formTitle: `Design Enquiry: ${selectedItem?.title || "Portfolio Item"}`,
      portfolioItem: selectedItem?.title || "N/A",
      fullName: form.querySelector('input[type="text"]').value,
      email: form.querySelector('input[type="email"]').value,
      phone: form.querySelector('input[type="tel"]').value,
      budget: form.querySelectorAll('input[type="text"]')[1]?.value || "N/A",
      preferredDate: form.querySelector('input[type="date"]').value || "N/A",
      notes: form.querySelector("textarea").value || "N/A",
    };

    await submitFormToApi(
      payload,
      "Enquiry Sent 🎉",
      "Thank you! Our design team will contact you shortly.",
      () => {
        form.reset();
        setSelectedItem(null);
      }
    );
  };

  // const handleWholeHomeSubmit = (e) => {
  //   e.preventDefault();
  //   Swal.fire({
  //     title: "Transformation Request Received ✅",
  //     text: "We have received your home design vision details.",
  //     icon: "success",
  //     confirmButtonColor: GoldAccent,
  //   });
  // };



const handleWholeHomeSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const payload = {
      formTitle: "Whole-Home Transformation Request",
      fullName: formData.get("fullName") || form.querySelector('input[type="text"]').value,
      email: form.querySelector('input[type="email"]').value,
      phone: form.querySelector('input[type="tel"]').value,
      propertyType: form.querySelectorAll("select")[0]?.value || "",
      scopeRooms: form.querySelectorAll("select")[1]?.value || "",
      budget: form.querySelectorAll("input[type='text']")[1]?.value || "",
      timeline: form.querySelectorAll("select")[2]?.value || "",
      preferredDate: form.querySelector('input[type="date"]').value,
      visionNotes: form.querySelector("textarea").value,
    };

    await submitFormToApi(
      payload,
      "Transformation Request Received ✅",
      "We have received your home design vision details and sent them to our team.",
      () => form.reset()
    );
  };





const submitFormToApi = async (formData, successTitle, successText, resetFormCallback) => {
    Swal.fire({
      title: "Submitting...",
      text: "Please wait while we send your details.",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit form.");
      }

      Swal.fire({
        title: successTitle,
        text: successText,
        icon: "success",
        confirmButtonColor: MidGreen,
      });

      if (resetFormCallback) resetFormCallback();
    } catch (error) {
      console.error("Submission error:", error);
      Swal.fire("Error", error.message || "Something went wrong. Please try again.", "error");
    }
  };



  return (
    <PageContainer>
      {/* 1. HEADER SECTION */}
      <SectionPadding>
        <CenteredHeader>
          <SmallTag>INTERIOR DÉCOR</SmallTag>
          <MainTitle>
            Interiors that tell your story — with restraint, warmth and craft.
          </MainTitle>
          <DescriptionText>
            We believe great design is felt before it's noticed. Our team translates how you live, work and host into spaces that are beautiful, functional and enduring.
          </DescriptionText>
        </CenteredHeader>

        {/* 2. SELECTED TRANSFORMATIONS */}
        <CenteredHeader style={{ marginBottom: "1.5rem" }}>
          <SmallTag>PORTFOLIO</SmallTag>

          <MainTitle style={{ fontSize: "2rem" }}>
            Selected Transformations
          </MainTitle>
          <DescriptionText>
            A glimpse of recent projects across residential and commercial spaces. Click any design to enquire.
          </DescriptionText>
        </CenteredHeader>
<PortfolioGrid>
          {portfolioItems.length === 0 ? (
            <p style={{ textAlign: "center", color: MutedText, padding: "2rem 0" }}>
              Loading portfolio designs...
            </p>
          ) : (
            <>
              {/* Top Wide Image */}
              {portfolioItems[0] && (
                <FeaturedImageCard onClick={() => setSelectedItem(portfolioItems[0])}>
                  <img src={portfolioItems[0].image} alt={portfolioItems[0].title} />
                </FeaturedImageCard>
              )}

              {/* Render remaining items in pairs for the 2-Column grid rows */}
              {Array.from({ length: Math.ceil((portfolioItems.length - 1) / 2) }).map((_, rowIndex) => {
                const firstIndex = rowIndex * 2 + 1;
                const secondIndex = rowIndex * 2 + 2;
                const item1 = portfolioItems[firstIndex];
                const item2 = portfolioItems[secondIndex];

                if (!item1) return null;

                return (
                  <TwoColumnGrid key={rowIndex}>
                    <ImageCard onClick={() => setSelectedItem(item1)}>
                      <img src={item1.image} alt={item1.title} />
                    </ImageCard>
                    {item2 && (
                      <ImageCard onClick={() => setSelectedItem(item2)}>
                        <img src={item2.image} alt={item2.title} />
                      </ImageCard>
                    )}
                  </TwoColumnGrid>
                );
              })}
            </>
          )}
        </PortfolioGrid>
      </SectionPadding>

      {/* 3. BOOK A DESIGN CONSULTATION */}
      <SectionPadding style={{ paddingTop: 0 }}>
        <CenteredHeader>
          <SmallTag>INTERIOR CONSULTATION</SmallTag>
          <MainTitle style={{ fontSize: "2rem" }}>
            Book a Design Consultation
          </MainTitle>
          <DescriptionText>
            Select a category and reserve a one-on-one consultation with our interior design team.
          </DescriptionText>

          <ConsultationGrid>
            <ConsultCard>
              <div className="icon">🛋️</div>
              <span>Custom Interior Design</span>
            </ConsultCard>
            <ConsultCard>
              <div className="icon">🏛️</div>
              <span>Total Interior Transformation</span>
            </ConsultCard>
            <ConsultCard>
              <div className="icon">🛏️</div>
              <span>Single Room Redesign</span>
            </ConsultCard>
            <ConsultCard>
              <div className="icon">🏢</div>
              <span>Commercial Space Design</span>
            </ConsultCard>
          </ConsultationGrid>
        </CenteredHeader>
      </SectionPadding>

      {/* 4. GREEN WHOLE-HOME TRANSFORMATION FORM */}
      <GreenSection>
        <CenteredHeader style={{ color: "#ffffff" }}>
          <SmallTag>WHOLE-HOME TRANSFORMATION</SmallTag>
          <MainTitle style={{ color: "#ffffff" }}>
            Transform Your Entire Home
          </MainTitle>
          <DescriptionText style={{ color: "rgba(255,255,255,0.8)" }}>
            Tell us about your property and vision. We'll craft a complete design plan — from spatial planning to the final styling details.
          </DescriptionText>
        </CenteredHeader>

        <GreenFormContainer>
          <FormGrid onSubmit={handleWholeHomeSubmit}>
            <FormGroup>
              <label>FULL NAME</label>
              <input type="text" placeholder="Your name" required />
            </FormGroup>

            <FormRow>
              <FormGroup>
                <label>EMAIL</label>
                <input type="email" placeholder="Email address" required />
              </FormGroup>
              <FormGroup>
                <label>PHONE</label>
                <input type="tel" placeholder="Phone number" required />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <label>PROPERTY TYPE</label>
                <select>
                  <option>Select...</option>
                  <option>Residential Duplex</option>
                  <option>Apartment / Penthouse</option>
                  <option>Villa</option>
                  <option>Commercial Property</option>
                </select>
              </FormGroup>
              <FormGroup>
                <label>SCOPE / ROOMS</label>
                <select>
                  <option>Select...</option>
                  <option>Entire Home</option>
                  <option>Multiple Rooms</option>
                  <option>Single Room</option>
                </select>
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <label>BUDGET (₦)</label>
                <input type="text" placeholder="e.g. 7,500,000" />
              </FormGroup>
              <FormGroup>
                <label>TIMELINE</label>
                <select>
                  <option>Select...</option>
                  <option>Immediate (Within 1 Month)</option>
                  <option>1 - 3 Months</option>
                  <option>Flexible</option>
                </select>
              </FormGroup>
            </FormRow>

            <FormGroup>
              <label>PREFERRED CONSULTATION DATE</label>
              <input type="date" />
            </FormGroup>

            <FormGroup>
              <label>TELL US ABOUT YOUR VISION</label>
              <textarea placeholder="Describe your style, inspiration, must-haves, and how you want your home to feel..." />
            </FormGroup>

            <GoldSubmitBtn type="submit">
              REQUEST TRANSFORMATION →
            </GoldSubmitBtn>
          </FormGrid>
        </GreenFormContainer>

        {/* CTA BANNER INSIDE GREEN SECTION */}
        <CTAWrapper>
          <h2>Let's design a space that feels unmistakably yours.</h2>
          <ButtonRow>
            <PrimaryGoldBtn href="/contact">
              START YOUR INTERIOR PROJECT →
            </PrimaryGoldBtn>
            <OutlineLightBtn href="/properties">
              VIEW PROPERTIES
            </OutlineLightBtn>
          </ButtonRow>
        </CTAWrapper>
      </GreenSection>

      {/* 5. SECURE PAYMENT SECTION */}
      <SecurePaymentSection/>

      {/* 6. DESIGN ENQUIRY POPUP MODAL */}
      {selectedItem && (
        <ModalOverlay onClick={() => setSelectedItem(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseModalBtn onClick={() => setSelectedItem(null)}>✕</CloseModalBtn>

            <ModalImagePreview>
              <img src={selectedItem.image} alt={selectedItem.title} />
            </ModalImagePreview>

            <ModalBody>
              <ModalHeader>
                <span className="tag">DESIGN ENQUIRY</span>
                <h3>{selectedItem.title}</h3>
              </ModalHeader>

              <ModalForm onSubmit={handleEnquirySubmit}>
                <div>
                  <label>FULL NAME</label>
                  <input type="text" placeholder="Your name" required />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <div>
                    <label>EMAIL</label>
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div>
                    <label>PHONE</label>
                    <input type="tel" placeholder="Phone" required />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <div>
                    <label>BUDGET (₦)</label>
                    <input type="text" placeholder="e.g. 500,000" />
                  </div>
                  <div>
                    <label>PREFERRED DATE</label>
                    <input type="date" />
                  </div>
                </div>

                <div>
                  <label>NOTES</label>
                  <textarea placeholder="Tell us about your space, style preferences, or specific requirements..." />
                </div>

                <GreenSubmitBtn type="submit">
                  SUBMIT ENQUIRY →
                </GreenSubmitBtn>
              </ModalForm>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
}