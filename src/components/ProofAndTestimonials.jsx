


// "use client";

// import React, { useState } from "react";
// import styled, { keyframes } from "styled-components";
// import { ShieldCheck, Eye, X, MessageSquareQuote, Sparkles, ZoomIn } from "lucide-react";


// /* ================= THEME STYLES (MAJINFOTEK) ================= */
// const primaryBlue = "#1c3ba4";
// const richPurple = "#8b5cf6";
// const ThemeGradient = "linear-gradient(135deg, #1c3ba4 0%, #8b5cf6 100%)";
// const LightBg = "#ffffff";
// const CardBg = "#f8fafc";
// const TextPrimary = "#0f172a";
// const TextMuted = "#475569";
// const BorderColor = "rgba(226, 232, 240, 0.9)";

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// /* ================= COMPONENTS ================= */

// const SectionWrapper = styled.section`
//   padding: 7rem 1.5rem;
//   background-color: ${LightBg};
//   border-top: 1px solid ${BorderColor};
//   border-bottom: 1px solid ${BorderColor};
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const SectionHeader = styled.div`
//   text-align: center;
//   max-width: 52rem;
//   margin: 0 auto 4rem auto;

//   .badge-pill {
//     display: inline-flex;
//     align-items: center;
//     gap: 0.5rem;
//     padding: 0.5rem 1.25rem;
//     background: linear-gradient(135deg, rgba(28, 59, 164, 0.1), rgba(139, 92, 246, 0.1));
//     border: 1px solid rgba(139, 92, 246, 0.25);
//     border-radius: 9999px;
//     color: ${richPurple};
//     font-weight: 700;
//     font-size: 0.85rem;
//     text-transform: uppercase;
//     letter-spacing: 0.08em;
//     margin-bottom: 1.25rem;
//   }

//   h2 {
//     font-size: 2.25rem;
//     font-weight: 800;
//     margin-bottom: 1.25rem;
//     color: ${TextPrimary};
//     letter-spacing: -0.02em;
//     @media (min-width: 768px) { font-size: 3.25rem; }
//   }

//   p {
//     color: ${TextMuted};
//     font-size: 1.15rem;
//     line-height: 1.7;
//   }
// `;

// const ProofGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 2rem;


//   @media (min-width: 640px) {
//     grid-template-columns: repeat(2, 1fr);

//   }

//   @media (min-width: 1024px) {
//     grid-template-columns: repeat(4, 1fr);
  
//   }
// `;

// const ProofCard = styled.div`
//   background: ${CardBg};
//   border: 1px solid ${BorderColor};
//   border-radius: 1.5rem;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//   box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
//   animation: ${fadeIn} 0.6s ease-in-out;

//   &:hover {
//     transform: translateY(-6px);
//     border-color: rgba(139, 92, 246, 0.4);
//     box-shadow: 0 20px 40px -10px rgba(139, 92, 246, 0.2);

//     .image-container img {
//       transform: scale(1.04);
//     }

//     .overlay {
//       opacity: 1;
//     }
//   }

//   .image-container {
//     position: relative;
//     width: 100%;
//     height: 200px;
//     overflow: hidden;
//     background: #e2e8f0;
//     cursor: pointer;

//     img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//       transition: transform 0.5s ease;
//     }

//     .overlay {
//       position: absolute;
//       inset: 0;
//       background: rgba(28, 59, 164, 0.6);
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       gap: 0.5rem;
//       opacity: 0;
//       transition: opacity 0.3s ease;
//       color: #ffffff;
//       font-weight: 700;
//       font-size: 0.95rem;

//       span {
//         background: ${richPurple};
//         padding: 0.5rem 1rem;
//         border-radius: 9999px;
//         display: flex;
//         align-items: center;
//         gap: 0.4rem;
//       }
//     }
//   }
// `;

// /* Modal Styles for Full-Screen Viewing */
// const ModalBackdrop = styled.div`
//   position: fixed;
//   inset: 0;
//   background: rgba(28, 59, 164, 0.85);
//   backdrop-filter: blur(8px);
//   z-index: 9999;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 1.5rem;
//   animation: ${fadeIn} 0.3s ease-out;

//   .modal-content {
//     position: relative;
//     max-width: 900px;
//     width: 100%;
//     max-height: 90vh;
//     background: #ffffff;
//     border-radius: 1.5rem;
//     overflow: hidden;
//     display: flex;
//     flex-direction: column;
//     box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);

//     .modal-header {
//       padding: 1.25rem 1.5rem;
//       background: ${CardBg};
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       border-bottom: 1px solid ${BorderColor};

//       h3 {
//         font-size: 1.1rem;
//         font-weight: 700;
//         color: ${TextPrimary};
//         margin: 0;
//       }

//       button {
//         background: #e2e8f0;
//         border: none;
//         width: 36px;
//         height: 36px;
//         border-radius: 50%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         cursor: pointer;
//         color: ${TextPrimary};
//         transition: background 0.2s;

//         &:hover {
//           background: #cbd5e1;
//         }
//       }
//     }

//     .modal-body {
//       padding: 1rem;
//       background: #000000;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       overflow: hidden;
//       max-height: 75vh;

//       img {
//         max-width: 100%;
//         max-height: 70vh;
//         object-fit: contain;
//       }
//     }
//   }
// `;

// /* ================= DATA (Unsplash Security Proofs) ================= */
// const proofItems = [
//   {
//     id: 1,
//     clientName: "Engr. Adebayo",
//     tag: "CCTV Project Review",
//     image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
//     description: "Successful installation feedback for corporate office surveillance."
//   },
//   {
//     id: 2,
//     clientName: "Mrs. Umu Alli",
//     tag: "Smart Intercom Feedback",
//     image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=80&w=800",
//     description: "Residential video doorbell deployment and configuration."
//   },
//   // {
//   //   id: 3,
//   //   clientName: "Mr. Chukwudi",
//   //   tag: "Access Control Chat",
//   //   image: "https://images.unsplash.com/photo-1563630423388-5d838ae57a6e?auto=format&fit=crop&q=80&w=800",
//   //   description: "Biometric security gate deployment confirmation."
//   // },
//   {
//     id: 4,
//     clientName: "Dr. Aliyu",
//     tag: "Wholesale Security Review",
//     image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800",
//     description: "Bulk deployment of IP security camera systems."
//   },
//   {
//     id: 5,
//     clientName: "Chief Okon",
//     tag: "Perimeter Defense Feedback",
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
//     description: "Industrial compound surveillance system sign-off."
//   }
// ];

// export default function ProofAndTestimonials() {
//   const [activeImage, setActiveImage] = useState(null);

//   return (
//     <SectionWrapper>
//       <Container>
//         <SectionHeader>
//           <div className="badge-pill">
//             <Sparkles className="w-4 h-4 text-purple-600" /> Verified Evidence
//           </div>
//           <h2>Real Client Proof & Project Deployments</h2>
//           <p>
//             Explore authentic installation logs, client reviews, and verified feedback from our deployed security systems.
//           </p>
//         </SectionHeader>

//         <ProofGrid>
//           {proofItems.map((item) => (
//             <ProofCard key={item.id}>
//               <div 
//                 className="image-container"
//                 onClick={() => setActiveImage(item)}
//               >
//                 <img src={item.image} alt={item.clientName} />
//                 <div className="overlay">
//                   <span>
//                     <ZoomIn className="w-4 h-4" /> Click to Expand
//                   </span>
//                 </div>
//               </div>
//             </ProofCard>
//           ))}
//         </ProofGrid>

//         {/* Lightbox Modal */}
//         {activeImage && (
//           <ModalBackdrop onClick={() => setActiveImage(null)}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//               <div className="modal-header">
//                 <h3></h3>
//                 <button onClick={() => setActiveImage(null)}>
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <img src={activeImage.image} alt={activeImage.clientName} />
//               </div>
//             </div>
//           </ModalBackdrop>
//         )}
//       </Container>
//     </SectionWrapper>
//   );
// }



"use client";

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ShieldCheck, Eye, X, MessageSquareQuote, Sparkles, ZoomIn } from "lucide-react";
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
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ================= COMPONENTS ================= */

const SectionWrapper = styled.section`
  padding: 7rem 1.5rem;
  background-color: ${LightBg};
  border-top: 1px solid ${BorderColor};
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
    margin-bottom: 1.25rem;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 800;
    margin-bottom: 1.25rem;
    color: ${TextPrimary};
    letter-spacing: -0.02em;
    @media (min-width: 768px) { font-size: 3.25rem; }
  }

  p {
    color: ${TextMuted};
    font-size: 1.15rem;
    line-height: 1.7;
  }
`;

const ProofGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProofCard = styled.div`
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 1.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
  animation: ${fadeIn} 0.6s ease-in-out;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(226, 176, 74, 0.5);
    box-shadow: 0 20px 40px -10px rgba(226, 176, 74, 0.2);

    .image-container img {
      transform: scale(1.04);
    }

    .overlay {
      opacity: 1;
    }
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: #e2e8f0;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(61, 27, 23, 0.65);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      opacity: 0;
      transition: opacity 0.3s ease;
      color: #ffffff;
      font-weight: 700;
      font-size: 0.95rem;

      span {
        background: ${secondaryColor};
        color: ${primaryColor};
        padding: 0.5rem 1rem;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        gap: 0.4rem;
      }
    }
  }
`;

/* Modal Styles for Full-Screen Viewing */
const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(61, 27, 23, 0.85);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: ${fadeIn} 0.3s ease-out;

  .modal-content {
    position: relative;
    max-width: 900px;
    width: 100%;
    max-height: 90vh;
    background: #ffffff;
    border-radius: 1.5rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);

    .modal-header {
      padding: 1.25rem 1.5rem;
      background: ${CardBg};
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${BorderColor};

      h3 {
        font-size: 1.1rem;
        font-weight: 700;
        color: ${TextPrimary};
        margin: 0;
      }

      button {
        background: #e2e8f0;
        border: none;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: ${TextPrimary};
        transition: background 0.2s;

        &:hover {
          background: #cbd5e1;
        }
      }
    }

    .modal-body {
      padding: 1rem;
      background: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      max-height: 75vh;

      img {
        max-width: 100%;
        max-height: 70vh;
        object-fit: contain;
      }
    }
  }
`;

/* ================= DATA (Shealuxe Product & Class Proofs) ================= */
const proofItems = [
  {
    id: 1,
    clientName: "Amina Yusuf",
    tag: "Skincare Batch Review",
    image: "/h7.jpeg",
    description: "Freshly whipped organic shea butter packaging and quality check."
  },
  {
    id: 2,
    clientName: "Chioma Okoro",
    tag: "Masterclass Feedback",
    image: "/h8.jpeg",
    description: "Student formulation session and cosmetic compounding results."
  },
  {
    id: 3,
    clientName: "Zainab Bello",
    tag: "Hair Care Delivery",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    description: "Natural herbal hair growth oil and butter batch production."
  },
  {
    id: 4,
    clientName: "Global Client Order",
    tag: "Export Quality Check",
    image: "/h9.jpg",
    description: "Bulk botanical skincare formulation ready for international dispatch."
  }
];

export default function ProofAndTestimonials() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <SectionWrapper>
      <Container>
        <SectionHeader>
          <div className="badge-pill">
            <Sparkles className="w-4 h-4 text-amber-600" /> Verified Quality
          </div>
          <h2>Real Product Proof & Formulations</h2>
          <p>
            Explore authentic production batches, client reviews, and quality highlights from our natural skincare and hair care collections.
          </p>
        </SectionHeader>

        <ProofGrid>
          {proofItems.map((item) => (
            <ProofCard key={item.id}>
              <div 
                className="image-container"
                onClick={() => setActiveImage(item)}
              >
                <img src={item.image} alt={item.clientName} />
                <div className="overlay">
                  <span>
                    <ZoomIn className="w-4 h-4" /> Click to Expand
                  </span>
                </div>
              </div>
            </ProofCard>
          ))}
        </ProofGrid>

        {/* Lightbox Modal */}
        {activeImage && (
          <ModalBackdrop onClick={() => setActiveImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{activeImage.tag} - {activeImage.clientName}</h3>
                <button onClick={() => setActiveImage(null)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="modal-body">
                <img src={activeImage.image} alt={activeImage.clientName} />
              </div>
            </div>
          </ModalBackdrop>
        )}
      </Container>
    </SectionWrapper>
  );
}