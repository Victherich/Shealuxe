


// "use client";

// import { useState } from "react";
// import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";
// import { primaryColoring, secondaryColoring } from "./Context";

// /* ================= COLORS (SHEALUXE THEME) ================= */

// const primaryColor = primaryColoring; // #3D1B17 (Deep Brown)
// const secondaryColor = secondaryColoring; // #E2B04A (Gold)
// const ThemeGradient = `linear-gradient(135deg, ${primaryColoring} 0%, ${secondaryColoring} 100%)`;
// const Dark = "#161616";
// const Border = "rgba(226, 232, 240, 0.15)";
// const White = "#ffffff";
// const TextMuted = "#94a3b8";
// const PrimaryAccent = secondaryColor;

// /* ================= FOOTER STYLES ================= */

// const FooterContainer = styled.footer`
//   background: ${Dark};
//   color: ${White};
//   border-top: 1px solid ${Border};
//   font-family: inherit;
//   position: relative;
// `;

// const FooterInner = styled.div`
//   max-width: 1200px;
//   margin: auto;
//   padding: 4rem 1.5rem 2rem 1.5rem;

//   display: grid;
//   grid-template-columns: 2fr 1fr 1fr 1.5fr;
//   gap: 2rem;

//   @media (max-width: 968px) {
//     grid-template-columns: 1fr 1fr;
//     gap: 2rem;
//   }

//   @media (max-width: 576px) {
//     grid-template-columns: 1fr;
//     gap: 2rem;
//   }
// `;

// const FooterCol = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const Logo = styled.div`
//   font-size: 1.4rem;
//   font-weight: 800;
//   color: ${White};
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   span {
//     background: ${ThemeGradient};
//     background-size: 200% auto;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
// `;

// const FooterText = styled.p`
//   color: ${TextMuted};
//   font-size: 0.95rem;
//   line-height: 1.7;
// `;

// const ColTitle = styled.h4`
//   font-size: 1.1rem;
//   font-weight: 700;
//   color: ${White};
//   letter-spacing: 0.05em;
//   text-transform: uppercase;
//   margin-bottom: 0.25rem;
// `;

// const FooterLink = styled(Link)`
//   color: ${TextMuted};
//   text-decoration: none;
//   font-size: 0.95rem;
//   transition: all 0.2s ease;
//   width: fit-content;

//   &:hover {
//     color: ${PrimaryAccent};
//     padding-left: 4px;
//   }
// `;

// const ContactInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.75rem;
//   color: ${TextMuted};
//   font-size: 0.95rem;

//   p {
//     margin: 0;
//     line-height: 1.5;
//   }

//   span {
//     color: ${White};
//   }
// `;

// const SocialIconsContainer = styled.div`
//   display: flex;
//   gap: 12px;
//   margin-top: 0.5rem;
// `;

// const SocialIconLink = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background: #1e293b;
//   border: 1px solid ${Border};
//   color: ${TextMuted};
//   transition: all 0.3s ease;

//   &:hover {
//     background: ${ThemeGradient};
//     color: ${White};
//     border-color: transparent;
//     transform: translateY(-3px);
//   }

//   svg {
//     width: 18px;
//     height: 18px;
//     fill: currentColor;
//   }
// `;

// const BottomBarWrapper = styled.div`
//   max-width: 1200px;
//   margin: auto;
//   padding: 0 1.5rem;
// `;

// const BottomBar = styled.div`
//   padding: 2rem 0;
//   border-top: 1px solid ${Border};

//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 1rem;
//     text-align: center;
//   }
// `;

// const Copyright = styled.p`
//   color: ${TextMuted};
//   font-size: 0.85rem;
//   margin: 0;
// `;

// const LegalLinks = styled.div`
//   display: flex;
//   gap: 1.5rem;

//   a {
//     color: ${TextMuted};
//     text-decoration: none;
//     font-size: 0.85rem;
//     transition: color 0.2s ease;

//     &:hover {
//       color: ${White};
//     }
//   }
// `;

// /* ================= FLOATING WHATSAPP ================= */

// const WhatsAppFloat = styled.a`
//   position: fixed;
//   bottom: 2rem;
//   right: 2rem;
//   z-index: 300;
//   background-color: #25d366;
//   color: white;
//   width: 55px;
//   height: 55px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: scale(1.1);
//     box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
//   }
// `;

// /* ================= NEWSLETTER & MODAL STYLES ================= */

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background: rgba(15, 23, 42, 0.8);
//   backdrop-filter: blur(4px);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
//   padding: 1rem;
// `;

// const ModalContent = styled.div`
//   background: ${Dark};
//   border: 1px solid ${Border};
//   padding: 2.5rem 2rem;
//   border-radius: 16px;
//   width: 100%;
//   max-width: 420px;
//   box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   gap: 1.25rem;
//   color: ${White};
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   background: transparent;
//   border: none;
//   color: ${TextMuted};
//   font-size: 1.25rem;
//   cursor: pointer;

//   &:hover {
//     color: ${White};
//   }
// `;

// const ModalTitle = styled.h3`
//   font-size: 1.4rem;
//   font-weight: 800;
//   margin: 0;
//   color: ${White};
// `;

// const ModalSubtitle = styled.p`
//   color: ${TextMuted};
//   font-size: 0.9rem;
//   margin: 0;
//   line-height: 1.5;
// `;

// const FormInput = styled.input`
//   width: 100%;
//   padding: 0.85rem 1rem;
//   background: #1e293b;
//   border: 1px solid ${Border};
//   border-radius: 8px;
//   color: ${White};
//   font-size: 0.95rem;
//   outline: none;
//   transition: border-color 0.2s;

//   &:focus {
//     border-color: ${PrimaryAccent};
//   }
// `;

// const SubmitButton = styled.button`
//   background: ${ThemeGradient};
//   color: ${White};
//   border: none;
//   padding: 0.85rem;
//   border-radius: 8px;
//   font-weight: 700;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: opacity 0.2s;

//   &:hover {
//     opacity: 0.9;
//   }

//   &:disabled {
//     opacity: 0.6;
//     cursor: not-allowed;
//   }
// `;

// const SuccessMessage = styled.p`
//   color: #22c55e;
//   font-size: 0.9rem;
//   font-weight: 600;
//   margin: 0;
//   text-align: center;
// `;

// /* ================= COMPONENT ================= */

// export default function Footer() {
//   const currentYear = new Date().getFullYear();
//   const whatsappMessage = encodeURIComponent(
//     "Hello Shealuxe, I just visited your website. I would like to inquire about your botanical products and formulation classes."
//   );

//   // Modal and Form state
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubscribe = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage("");

//     try {
//       const res = await fetch("/api/newsletter", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error || "Failed to subscribe");
//       }

//       setSuccess(true);
//       setName("");
//       setEmail("");
      
//       setTimeout(() => {
//         setIsModalOpen(false);
//         setSuccess(false);
//       }, 3000);
//     } catch (err) {
//       setErrorMessage(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <FooterContainer>
//         <FooterInner>
//           {/* Col 1: Brand Info */}
//           <FooterCol>
//             <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
//               <Logo>
//                 <img src='/logo.jpg' alt='Shealuxe Logo' style={{width:'50px', borderRadius:"10px"}}/>
//                 <span>Shealuxe</span>
//               </Logo>
//             </Link>
//             <p style={{ fontStyle: "italic", fontSize: "0.9rem", color: TextMuted, margin: 0 }}>Pure Botanical Skincare & Organic Formulation Masterclass</p>
//             <FooterText>
//               Shealuxe delivers premium, ethically sourced African shea butter products, organic hair care solutions, and expert-led formulation training for natural beauty enthusiasts.
//             </FooterText>
//           </FooterCol>

//           {/* Col 2: Quick Links */}
//           <FooterCol>
//             <ColTitle>Quick Links</ColTitle>
//             <FooterLink href="/">Home</FooterLink>
//             <FooterLink href="/about">About Us</FooterLink>
//             <FooterLink href="/store">Shop</FooterLink>
//             <FooterLink href="/cart">Cart</FooterLink>
//             <FooterLink href="/contact">Contact Us</FooterLink>
//             <FooterLink href="/terms-conditions">Terms and Conditions</FooterLink>
//             <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
//           </FooterCol>

//           {/* Col 3: Contact & Support */}
//           <FooterCol>
//             <ColTitle>Get in Touch</ColTitle>
//             <ContactInfo>
//               <p>Email: support@shealuxe.com</p>
//               <p>Phone: +234 816 273 5776</p>
//               <p>Location: Ibadan, Oyo State, Nigeria</p>
//             </ContactInfo>
//           </FooterCol>

//           {/* Col 4: Social Media */}
//           <FooterCol>
//             <ColTitle>Connect With Us</ColTitle>
//             <FooterText>
//               Follow our channels for updates on new organic skincare batches, beauty tips, and masterclass enrollments.
//             </FooterText>
//             <SocialIconsContainer>
//               {/* Instagram */}
//               <SocialIconLink 
//                 href="https://instagram.com" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//               >
//                 <svg viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                 </svg>
//               </SocialIconLink>

//               {/* Twitter / X */}
//               <SocialIconLink 
//                 href="https://twitter.com" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 aria-label="Twitter"
//               >
//                 <svg viewBox="0 0 24 24">
//                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//                 </svg>
//               </SocialIconLink>
//             </SocialIconsContainer>
//           </FooterCol>
//         </FooterInner>

//         {/* Bottom Bar */}
//         <BottomBarWrapper>
//           <BottomBar>
//             <Copyright>
//               &copy; {currentYear} Shealuxe. All rights reserved.
//             </Copyright>
//             <LegalLinks style={{textDecoration:"underline", fontStyle:"italic"}}>
//               <Link href="https://echobyteconcept.vercel.app/" target="_blank">Designed and Powered by Echobyte Concept</Link>
//             </LegalLinks>
//           </BottomBar>
//         </BottomBarWrapper>
//       </FooterContainer>

//       {/* Floating WhatsApp Icon with Pre-filled Text */}
//       <WhatsAppFloat 
//         href={`https://wa.me/2348162735776?text=${whatsappMessage}`} 
//         target="_blank" 
//         rel="noopener noreferrer"
//         aria-label="Chat on WhatsApp"
//       >
//         <Image
//           src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//           alt="WhatsApp"
//           width={28}
//           height={28}
//         />
//       </WhatsAppFloat>
//     </>
//   );
// }







"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

/* ================= THEME COLORS (From Screenshot) ================= */
const Colors = {
  FooterBg: "#124332",       // Deep forest green background
  GoldAccent: "#C5A059",     // Muted gold for titles, headings, and subscribe button
  TextLight: "#FFFFFF",      // Primary white text
  TextMuted: "#E0E0E0",      // Off-white / light grey for descriptions and links
  InputBg: "#0E3628",        // Darker green for input field background
  BorderColor: "#1E5A44",    // Subtle border color
};

/* ================= STYLED COMPONENTS ================= */
const FooterContainer = styled.footer`
  background-color: ${Colors.FooterBg};
  color: ${Colors.TextLight};
  font-family: inherit;
  padding: 4rem 2rem 2rem 2rem;
  width: 100%;
`;

const FooterWrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
`;

/* ================= NEWSLETTER SECTION ================= */
const NewsletterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid ${Colors.BorderColor};

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
  }
`;

const NewsletterLeft = styled.div`
  max-width: 650px;

  h4 {
    color: ${Colors.GoldAccent};
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 1.25;
    color: ${Colors.TextLight};
    font-family: serif;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }
`;

const NewsletterRight = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  max-width: 500px;

  input {
    flex: 1;
    background: ${Colors.InputBg};
    border: 1px solid ${Colors.BorderColor};
    padding: 0.85rem 1rem;
    color: ${Colors.TextLight};
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.2s;

    &::placeholder {
      color: #99b3a7;
    }

    &:focus {
      border-color: ${Colors.GoldAccent};
    }
  }

  button {
    background: ${Colors.GoldAccent};
    color: #124332;
    border: none;
    padding: 0.85rem 1.5rem;
    font-weight: 700;
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: opacity 0.2s;
    white-space: nowrap;

    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

/* ================= MAIN LINKS GRID ================= */
const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr repeat(4, 1fr);
  gap: 2.5rem;
  padding: 4rem 0 3rem 0;
  border-bottom: 1px solid ${Colors.BorderColor};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  grid-column: span 1;

  @media (max-width: 1024px) {
    grid-column: span 2;
  }

  @media (max-width: 600px) {
    grid-column: span 1;
  }

  img.footer-logo {
    width: 90px;
    height: auto;
    object-fit: contain;
    background: ${Colors.TextLight};
    padding: 6px;
    border-radius: 4px;
  }

  p {
    font-size: 0.88rem;
    line-height: 1.6;
    color: ${Colors.TextMuted};
    max-width: 340px;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;

    a, span {
      font-size: 0.85rem;
      color: ${Colors.TextMuted};
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: color 0.2s;

      &:hover {
        color: ${Colors.GoldAccent};
      }
    }
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    color: ${Colors.GoldAccent};
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    li {
      a {
        color: ${Colors.TextMuted};
        text-decoration: none;
        font-size: 0.88rem;
        transition: color 0.2s;

        &:hover {
          color: ${Colors.GoldAccent};
        }
      }
    }
  }
`;

/* ================= BOTTOM BAR ================= */
const BottomBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  gap: 1.5rem;
  font-size: 0.78rem;
  color: ${Colors.TextMuted};

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .copyright {
    letter-spacing: 0.05em;
  }

  .bottom-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      color: ${Colors.TextMuted};
      text-decoration: none;
      letter-spacing: 0.05em;
      transition: color 0.2s;

      &:hover {
        color: ${Colors.GoldAccent};
      }
    }
  }

  .social-icons {
    display: flex;
    gap: 0.75rem;
    justify-content:center;
    align-items:center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: 1px solid ${Colors.BorderColor};
      border-radius: 50%;
      color: ${Colors.TextLight};
      font-size: 0.85rem;
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        border-color: ${Colors.GoldAccent};
        color: ${Colors.GoldAccent};
      }
    }
  }
`;

/* ================= FOOTER COMPONENT ================= */
export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed successfully!");
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        {/* Newsletter Section */}
        <NewsletterSection>
          <NewsletterLeft>
            <h4>The Pinkles Letter</h4>
            <h2>Insights on property, business, fashion & beauty — delivered with intention.</h2>
          </NewsletterLeft>
          <NewsletterRight onSubmit={handleSubscribe}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe →</button>
          </NewsletterRight>
        </NewsletterSection>

        {/* Links & Brand Grid */}
        <LinksGrid>
          {/* Brand & Contact Info */}
          <BrandColumn>
            <img src="/logo.jpg" alt="Pinkles Logo" className="footer-logo" />
            <p>
              A premium Nigerian ecosystem bringing together property, hospitality, interior design, business consulting, media, fashion and beauty under one trusted brand.
            </p>
            <div className="contact-info">
              <a href="tel:+2348084361466">📞 +234 808 436 1466</a>
              <a href="mailto:admin@pinklesnigerialimited.com">✉️ admin@pinklesnigerialimited.com</a>
              <a href="mailto:contact@pinklesnigerialimited.com">✉️ contact@pinklesnigerialimited.com</a>
           
              <span>📍 Victoria Island, Lagos, Nigeria</span>
            </div>
          </BrandColumn>

          {/* Company Column */}
          <FooterColumn>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/business-consulting">Our Businesses</Link></li>
              {/* <li><Link href="/careers">Careers</Link></li> */}
              <li><Link href="/about">Leadership</Link></li>
            </ul>
          </FooterColumn>

          {/* Properties Column */}
          <FooterColumn>
            <h4>Properties</h4>
            <ul>
              <li><Link href="/properties">For Sale</Link></li>
              <li><Link href="/properties">For Rent</Link></li>
              <li><Link href="/properties">Short-Let</Link></li>
              <li><Link href="/properties">Land</Link></li>
              <li><Link href="/properties">Luxury Homes</Link></li>
            </ul>
          </FooterColumn>

          {/* Services Column */}
          <FooterColumn>
            <h4>Services</h4>
            <ul>
              <li><Link href="/interior-decor">Interior Décor</Link></li>
              <li><Link href="/cleaning">Cleaning Services</Link></li>
              <li><Link href="/legal-mortgage">Legal & Mortgage</Link></li>
              <li><Link href="/business-consulting">Business Consulting</Link></li>
              <li><Link href="/media-advertising">Media & Advertising</Link></li>
            </ul>
          </FooterColumn>

          {/* Brands Column */}
          <FooterColumn>
            <h4>Brands</h4>
            <ul>
              <li><Link href="/ashakeade-closet">AshakeAde Closet</Link></li>
              <li><Link href="/book-now">Pinkles Spa</Link></li>
              <li><Link href="/ashakeade-closet">New Arrivals</Link></li>
              <li><Link href="/book-now">Book Appointment</Link></li>
              <li><Link href="/ashakeade-closet">Gift Cards</Link></li>
            </ul>
          </FooterColumn>
        </LinksGrid>

        {/* Bottom Bar */}
        <BottomBar>
          <div className="copyright">
            © 2026 PINKLES NG LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="bottom-links">
            <a href="/terms.pdf" target="_blank" rel="noopener noreferrer">
  PRIVACY POLICY
</a>
<a href="/terms.pdf" target="_blank" rel="noopener noreferrer">
  TERMS
</a>
            <Link href="/dashboard">DASHBOARD</Link>
          </div>
          <div className="social-icons">
            
            <p>Follow Us on IG:</p>
       
<a 
  href="https://www.instagram.com/pinkles_ng_ltd?cplk=MWJneXBoeHI2dmYyYw==" 
  target="_blank" 
  rel="noreferrer" 
  aria-label="Instagram"
  style={{ display: "inline-flex", alignItems: "center", color: "inherit" }}
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
</a>
             </div>
        </BottomBar>
      </FooterWrapper>
    </FooterContainer>
  );
}
