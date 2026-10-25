



// "use client";

// import React from "react";
// import styled from "styled-components";
// import Link from "next/link";

// /* ================= THEME COLORS (From Screenshot) ================= */
// const Colors = {
//   FooterBg: "#124332",       // Deep forest green background
//   GoldAccent: "#C5A059",     // Muted gold for titles, headings, and subscribe button
//   TextLight: "#FFFFFF",      // Primary white text
//   TextMuted: "#E0E0E0",      // Off-white / light grey for descriptions and links
//   InputBg: "#0E3628",        // Darker green for input field background
//   BorderColor: "#1E5A44",    // Subtle border color
// };

// /* ================= STYLED COMPONENTS ================= */
// const FooterContainer = styled.footer`
//   background-color: ${Colors.FooterBg};
//   color: ${Colors.TextLight};
//   font-family: inherit;
//   padding: 4rem 2rem 2rem 2rem;
//   width: 100%;
// `;

// const FooterWrapper = styled.div`
//   max-width: 1350px;
//   margin: 0 auto;
// `;

// /* ================= NEWSLETTER SECTION ================= */
// const NewsletterSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 2rem;
//   padding-bottom: 3.5rem;
//   border-bottom: 1px solid ${Colors.BorderColor};

//   @media (min-width: 900px) {
//     flex-direction: row;
//     align-items: center;
//   }
// `;

// const NewsletterLeft = styled.div`
//   max-width: 650px;

//   h4 {
//     color: ${Colors.GoldAccent};
//     font-size: 0.75rem;
//     font-weight: 700;
//     text-transform: uppercase;
//     letter-spacing: 0.1em;
//     margin-bottom: 0.75rem;
//   }

//   h2 {
//     font-size: 2.2rem;
//     font-weight: 400;
//     line-height: 1.25;
//     color: ${Colors.TextLight};
//     font-family: serif;

//     @media (max-width: 768px) {
//       font-size: 1.6rem;
//     }
//   }
// `;

// const NewsletterRight = styled.form`
//   display: flex;
//   gap: 0.5rem;
//   width: 100%;
//   max-width: 500px;

//   input {
//     flex: 1;
//     background: ${Colors.InputBg};
//     border: 1px solid ${Colors.BorderColor};
//     padding: 0.85rem 1rem;
//     color: ${Colors.TextLight};
//     font-size: 0.9rem;
//     outline: none;
//     transition: border-color 0.2s;

//     &::placeholder {
//       color: #99b3a7;
//     }

//     &:focus {
//       border-color: ${Colors.GoldAccent};
//     }
//   }

//   button {
//     background: ${Colors.GoldAccent};
//     color: #124332;
//     border: none;
//     padding: 0.85rem 1.5rem;
//     font-weight: 700;
//     font-size: 0.78rem;
//     letter-spacing: 0.08em;
//     text-transform: uppercase;
//     cursor: pointer;
//     transition: opacity 0.2s;
//     white-space: nowrap;

//     &:hover {
//       opacity: 0.9;
//     }
//   }

//   @media (max-width: 600px) {
//     flex-direction: column;
//   }
// `;

// /* ================= MAIN LINKS GRID ================= */
// const LinksGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1.5fr repeat(4, 1fr);
//   gap: 2.5rem;
//   padding: 4rem 0 3rem 0;
//   border-bottom: 1px solid ${Colors.BorderColor};

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 3rem;
//   }

//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;
//     gap: 2.5rem;
//   }
// `;

// const BrandColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.2rem;
//   grid-column: span 1;

//   @media (max-width: 1024px) {
//     grid-column: span 2;
//   }

//   @media (max-width: 600px) {
//     grid-column: span 1;
//   }

//   img.footer-logo {
//     width: 90px;
//     height: auto;
//     object-fit: contain;
//     background: ${Colors.TextLight};
//     padding: 6px;
//     border-radius: 4px;
//   }

//   p {
//     font-size: 0.88rem;
//     line-height: 1.6;
//     color: ${Colors.TextMuted};
//     max-width: 340px;
//   }

//   .contact-info {
//     display: flex;
//     flex-direction: column;
//     gap: 0.5rem;
//     margin-top: 0.5rem;

//     a, span {
//       font-size: 0.85rem;
//       color: ${Colors.TextMuted};
//       text-decoration: none;
//       display: flex;
//       align-items: center;
//       gap: 8px;
//       transition: color 0.2s;

//       &:hover {
//         color: ${Colors.GoldAccent};
//       }
//     }
//   }
// `;

// const FooterColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;

//   h4 {
//     color: ${Colors.GoldAccent};
//     font-size: 0.75rem;
//     font-weight: 700;
//     letter-spacing: 0.1em;
//     text-transform: uppercase;
//     margin-bottom: 0.5rem;
//   }

//   ul {
//     list-style: none;
//     display: flex;
//     flex-direction: column;
//     gap: 0.75rem;

//     li {
//       a {
//         color: ${Colors.TextMuted};
//         text-decoration: none;
//         font-size: 0.88rem;
//         transition: color 0.2s;

//         &:hover {
//           color: ${Colors.GoldAccent};
//         }
//       }
//     }
//   }
// `;

// /* ================= BOTTOM BAR ================= */
// const BottomBar = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   padding-top: 2rem;
//   gap: 1.5rem;
//   font-size: 0.78rem;
//   color: ${Colors.TextMuted};

//   @media (min-width: 768px) {
//     flex-direction: row;
//   }

//   .copyright {
//     letter-spacing: 0.05em;
//   }

//   .bottom-links {
//     display: flex;
//     align-items: center;
//     gap: 1.5rem;

//     a {
//       color: ${Colors.TextMuted};
//       text-decoration: none;
//       letter-spacing: 0.05em;
//       transition: color 0.2s;

//       &:hover {
//         color: ${Colors.GoldAccent};
//       }
//     }
//   }

//   .social-icons {
//     display: flex;
//     gap: 0.75rem;
//     justify-content:center;
//     align-items:center;

//     a {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       width: 32px;
//       height: 32px;
//       border: 1px solid ${Colors.BorderColor};
//       border-radius: 50%;
//       color: ${Colors.TextLight};
//       font-size: 0.85rem;
//       text-decoration: none;
//       transition: all 0.2s;

//       &:hover {
//         border-color: ${Colors.GoldAccent};
//         color: ${Colors.GoldAccent};
//       }
//     }
//   }
// `;

// /* ================= FOOTER COMPONENT ================= */
// export default function Footer() {
//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     alert("Subscribed successfully!");
//   };

//   return (
//     <FooterContainer>
//       <FooterWrapper>
//         {/* Newsletter Section */}
//         <NewsletterSection>
//           <NewsletterLeft>
//             <h4>The Pinkles Letter</h4>
//             <h2>Insights on property, business, fashion & beauty — delivered with intention.</h2>
//           </NewsletterLeft>
//           <NewsletterRight onSubmit={handleSubscribe}>
//             <input type="email" placeholder="Your email address" required />
//             <button type="submit">Subscribe →</button>
//           </NewsletterRight>
//         </NewsletterSection>

//         {/* Links & Brand Grid */}
//         <LinksGrid>
//           {/* Brand & Contact Info */}
//           <BrandColumn>
//             <img src="/logo.jpg" alt="Pinkles Logo" className="footer-logo" />
//             <p>
//               A premium Nigerian ecosystem bringing together property, hospitality, interior design, business consulting, media, fashion and beauty under one trusted brand.
//             </p>
//             <div className="contact-info">
//               <a href="tel:+2348084361466">📞 +234 808 436 1466</a>
//               <a href="mailto:admin@pinklesnigerialimited.com">✉️ admin@pinklesnigerialimited.com</a>
//               <a href="mailto:contact@pinklesnigerialimited.com">✉️ contact@pinklesnigerialimited.com</a>
           
//               <span>📍 Victoria Island, Lagos, Nigeria</span>
//             </div>
//           </BrandColumn>

//           {/* Company Column */}
//           <FooterColumn>
//             <h4>Company</h4>
//             <ul>
//               <li><Link href="/about">About Us</Link></li>
//               <li><Link href="/contact">Contact</Link></li>
//               <li><Link href="/business-consulting">Our Businesses</Link></li>
//               {/* <li><Link href="/careers">Careers</Link></li> */}
//               <li><Link href="/about">Leadership</Link></li>
//             </ul>
//           </FooterColumn>

//           {/* Properties Column */}
//           <FooterColumn>
//             <h4>Properties</h4>
//             <ul>
//               <li><Link href="/properties">For Sale</Link></li>
//               <li><Link href="/properties">For Rent</Link></li>
//               <li><Link href="/properties">Short-Let</Link></li>
//               <li><Link href="/properties">Land</Link></li>
//               <li><Link href="/properties">Luxury Homes</Link></li>
//             </ul>
//           </FooterColumn>

//           {/* Services Column */}
//           <FooterColumn>
//             <h4>Services</h4>
//             <ul>
//               <li><Link href="/interior-decor">Interior Décor</Link></li>
//               <li><Link href="/cleaning">Cleaning Services</Link></li>
//               <li><Link href="/legal-mortgage">Legal & Mortgage</Link></li>
//               <li><Link href="/business-consulting">Business Consulting</Link></li>
//               <li><Link href="/media-advertising">Media & Advertising</Link></li>
//             </ul>
//           </FooterColumn>

//           {/* Brands Column */}
//           <FooterColumn>
//             <h4>Brands</h4>
//             <ul>
//               <li><Link href="/ashakeade-closet">AshakeAde Closet</Link></li>
//               <li><Link href="/book-now">Pinkles Spa</Link></li>
//               <li><Link href="/ashakeade-closet">New Arrivals</Link></li>
//               <li><Link href="/book-now">Book Appointment</Link></li>
//               <li><Link href="/ashakeade-closet">Gift Cards</Link></li>
//             </ul>
//           </FooterColumn>
//         </LinksGrid>

//         {/* Bottom Bar */}
//         <BottomBar>
//           <div className="copyright">
//             © 2026 PINKLES NG LTD. ALL RIGHTS RESERVED.
//           </div>
//           <div className="bottom-links">
//             <Link href="/terms-conditions">
//   PRIVACY POLICY
// </Link>
// <Link href="/terms-conditions">
//   TERMS
// </Link>
//             <Link href="/dashboard">DASHBOARD</Link>
//           </div>
//           <div className="social-icons">
            
//             <p>Follow Us on IG:</p>
       
// <a 
//   href="https://www.instagram.com/pinkles_ng_ltd?cplk=MWJneXBoeHI2dmYyYw==" 
//   target="_blank" 
//   rel="noreferrer" 
//   aria-label="Instagram"
//   style={{ display: "inline-flex", alignItems: "center", color: "inherit" }}
// >
//   <svg 
//     xmlns="http://www.w3.org/2000/svg" 
//     width="20" 
//     height="20" 
//     viewBox="0 0 24 24" 
//     fill="none" 
//     stroke="currentColor" 
//     strokeWidth="2" 
//     strokeLinecap="round" 
//     strokeLinejoin="round"
//   >
//     <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
//     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
//     <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
//   </svg>
// </a>
//              </div>
//         </BottomBar>
//       </FooterWrapper>
//     </FooterContainer>
//   );
// }







// "use client";

// import React, { useState } from "react";
// import styled from "styled-components";
// import Link from "next/link";

// /* ================= THEME COLORS (Matching Boohoo UI) ================= */
// const Colors = {
//   Bg: "#FFFFFF",
//   TextPrimary: "#111827",
//   TextSecondary: "#374151",
//   TextMuted: "#6B7280",
//   BorderColor: "#E5E7EB",
//   InputBg: "#F9FAFB",
//   DarkButtonBg: "#111827",
// };

// /* ================= STYLED COMPONENTS ================= */
// const FooterContainer = styled.footer`
//   background-color: ${Colors.Bg};
//   color: ${Colors.TextPrimary};
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
//   padding: 3rem 1.5rem 2rem 1.5rem;
//   width: 100%;
//   border-top: 1px solid ${Colors.BorderColor};
// `;

// const FooterWrapper = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// /* ================= NEWSLETTER SECTION ================= */
// const NewsletterSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 1.5rem;
//   padding-bottom: 2.5rem;
//   border-bottom: 1px solid ${Colors.BorderColor};

//   @media (min-width: 900px) {
//     flex-direction: row;
//     align-items: center;
//   }
// `;

// const NewsletterLeft = styled.div`
//   max-width: 600px;

//   h4 {
//     color: ${Colors.TextMuted};
//     font-size: 0.75rem;
//     font-weight: 700;
//     text-transform: uppercase;
//     letter-spacing: 0.08em;
//     margin-bottom: 0.5rem;
//   }

//   h2 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     line-height: 1.3;
//     color: ${Colors.TextPrimary};

//     @media (max-width: 768px) {
//       font-size: 1.25rem;
//     }
//   }
// `;

// const NewsletterRight = styled.form`
//   display: flex;
//   gap: 0.5rem;
//   width: 100%;
//   max-width: 480px;

//   input {
//     flex: 1;
//     background: ${Colors.InputBg};
//     border: 1px solid ${Colors.BorderColor};
//     padding: 0.8rem 1rem;
//     color: ${Colors.TextPrimary};
//     font-size: 0.9rem;
//     border-radius: 4px;
//     outline: none;
//     transition: border-color 0.2s;

//     &::placeholder {
//       color: ${Colors.TextMuted};
//     }

//     &:focus {
//       border-color: ${Colors.TextPrimary};
//     }
//   }

//   button {
//     background: ${Colors.DarkButtonBg};
//     color: #ffffff;
//     border: none;
//     padding: 0.8rem 1.4rem;
//     font-weight: 600;
//     font-size: 0.8rem;
//     letter-spacing: 0.05em;
//     text-transform: uppercase;
//     border-radius: 4px;
//     cursor: pointer;
//     transition: opacity 0.2s;
//     white-space: nowrap;

//     &:hover {
//       opacity: 0.88;
//     }
//   }

//   @media (max-width: 600px) {
//     flex-direction: column;
//   }
// `;

// /* ================= ACCORDION LINKS SECTION ================= */
// const AccordionGrid = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-top: 1rem;

//   @media (min-width: 900px) {
//     display: grid;
//     grid-template-columns: 1.4fr repeat(4, 1fr);
//     gap: 2rem;
//     padding: 2.5rem 0;
//     border-bottom: 1px solid ${Colors.BorderColor};
//   }
// `;

// const AccordionItem = styled.div`
//   border-bottom: 1px solid ${Colors.BorderColor};

//   @media (min-width: 900px) {
//     border-bottom: none;
//   }
// `;

// const AccordionHeader = styled.button`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: none;
//   border: none;
//   padding: 1.1rem 0;
//   cursor: pointer;
//   text-align: left;

//   h3 {
//     font-size: 1.05rem;
//     font-weight: 700;
//     color: ${Colors.TextPrimary};
//     margin: 0;
//   }

//   span.chevron {
//     font-size: 1rem;
//     transition: transform 0.25s ease;
//     transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
//     color: ${Colors.TextPrimary};
//   }

//   @media (min-width: 900px) {
//     cursor: default;
//     padding: 0 0 1rem 0;

//     span.chevron {
//       display: none;
//     }
//   }
// `;

// const AccordionContent = styled.div`
//   display: ${(props) => (props.$isOpen ? "block" : "none")};
//   padding-bottom: 1.25rem;

//   ul {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//     display: flex;
//     flex-direction: column;
//     gap: 0.75rem;

//     li a, li span {
//       color: ${Colors.TextSecondary};
//       text-decoration: none;
//       font-size: 0.95rem;
//       transition: color 0.2s;
//       display: inline-block;

//       &:hover {
//         color: ${Colors.TextPrimary};
//         text-decoration: underline;
//       }
//     }
//   }

//   @media (min-width: 900px) {
//     display: block !important;
//     padding-bottom: 0;
//   }
// `;

// const BrandBlock = styled.div`
//   padding: 1.25rem 0;
//   border-bottom: 1px solid ${Colors.BorderColor};

//   @media (min-width: 900px) {
//     border-bottom: none;
//     padding: 0;
//   }

//   img.footer-logo {
//     width: 100px;
//     height: auto;
//     object-fit: contain;
//     margin-bottom: 0.85rem;
//     border-radius: 4px;
//   }

//   p {
//     font-size: 0.9rem;
//     line-height: 1.55;
//     color: ${Colors.TextSecondary};
//     margin-bottom: 1rem;
//   }

//   .contact-details {
//     display: flex;
//     flex-direction: column;
//     gap: 0.5rem;

//     a, span {
//       font-size: 0.88rem;
//       color: ${Colors.TextSecondary};
//       text-decoration: none;
//       transition: color 0.2s;

//       &:hover {
//         color: ${Colors.TextPrimary};
//       }
//     }
//   }
// `;

// /* ================= APP DOWNLOAD & COUNTRY ================= */
// const SecondarySection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   padding: 2.5rem 0 1.5rem 0;
//   gap: 1.75rem;
// `;

// const AppDownloadBlock = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 0.75rem;

//   h4 {
//     font-size: 1.1rem;
//     font-weight: 700;
//     color: ${Colors.TextPrimary};
//   }

//   .app-badge {
//     display: inline-flex;
//     align-items: center;
//     gap: 8px;
//     background: #000000;
//     color: #ffffff;
//     padding: 0.5rem 1.1rem;
//     border-radius: 6px;
//     text-decoration: none;

//     .text {
//       display: flex;
//       flex-direction: column;
//       align-items: flex-start;
//       line-height: 1.1;

//       span.sub {
//         font-size: 0.6rem;
//         text-transform: uppercase;
//         letter-spacing: 0.05em;
//       }

//       span.main {
//         font-size: 0.9rem;
//         font-weight: 700;
//       }
//     }
//   }
// `;

// const CountrySelector = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 0.5rem;
//   width: 100%;
//   max-width: 360px;

//   h4 {
//     font-size: 1rem;
//     font-weight: 700;
//     color: ${Colors.TextPrimary};
//   }

//   .select-box {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     background: #f3f4f6;
//     border: 1px solid ${Colors.BorderColor};
//     padding: 0.65rem 1rem;
//     border-radius: 6px;
//     font-size: 0.9rem;
//     font-weight: 500;
//     color: ${Colors.TextPrimary};

//     .flag-group {
//       display: flex;
//       align-items: center;
//       gap: 0.5rem;
//     }
//   }
// `;

// /* ================= SOCIAL MEDIA ================= */
// const SocialSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 0.85rem;
//   padding-top: 0.5rem;

//   h4 {
//     font-size: 1rem;
//     font-weight: 700;
//     color: ${Colors.TextPrimary};
//   }

//   .icons-row {
//     display: flex;
//     align-items: center;
//     gap: 1.25rem;

//     a {
//       color: ${Colors.TextPrimary};
//       transition: opacity 0.2s;

//       &:hover {
//         opacity: 0.7;
//       }
//     }
//   }
// `;

// /* ================= BOTTOM COPYRIGHT BAR ================= */
// const BottomBar = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   gap: 1.25rem;
//   padding-top: 2.5rem;
//   margin-top: 1.5rem;
//   border-top: 1px solid ${Colors.BorderColor};

//   .brand-logo-text {
//     font-size: 2rem;
//     font-weight: 900;
//     letter-spacing: -0.03em;
//     color: ${Colors.TextPrimary};
//     text-transform: lowercase;
//   }

//   .copyright {
//     font-size: 0.75rem;
//     color: ${Colors.TextMuted};
//     letter-spacing: 0.05em;
//     text-transform: uppercase;
//   }

//   .legal-links {
//     display: flex;
//     align-items: center;
//     gap: 1.5rem;
//     flex-wrap: wrap;
//     justify-content: center;

//     a {
//       font-size: 0.78rem;
//       font-weight: 600;
//       color: ${Colors.TextSecondary};
//       text-decoration: none;
//       letter-spacing: 0.04em;

//       &:hover {
//         color: ${Colors.TextPrimary};
//         text-decoration: underline;
//       }
//     }
//   }
// `;

// /* ================= COMPONENT ================= */
// export default function Footer() {
//   const [openSection, setOpenSection] = useState(null);

//   const toggleSection = (sectionName) => {
//     setOpenSection(openSection === sectionName ? null : sectionName);
//   };

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     alert("Subscribed successfully!");
//   };

//   return (
//     <FooterContainer>
//       <FooterWrapper>
//         {/* Newsletter Section */}
//         <NewsletterSection>
//           <NewsletterLeft>
//             <h4>The Pinkles Letter</h4>
//             <h2>Insights on property, business, fashion & beauty — delivered with intention.</h2>
//           </NewsletterLeft>
//           <NewsletterRight onSubmit={handleSubscribe}>
//             <input type="email" placeholder="Your email address" required />
//             <button type="submit">Subscribe →</button>
//           </NewsletterRight>
//         </NewsletterSection>

//         {/* Accordion / Links Grid */}
//         <AccordionGrid>
//           {/* Brand Info */}
//           <BrandBlock>
//             <img src="/logo.jpg" alt="Pinkles Logo" className="footer-logo" />
//             <p>
//               A premium Nigerian ecosystem bringing together property, hospitality, interior design, business consulting, media, fashion and beauty under one trusted brand.
//             </p>
//             <div className="contact-details">
//               <a href="tel:+2348084361466">📞 +234 808 436 1466</a>
//               <a href="mailto:admin@pinklesnigerialimited.com">✉️ admin@pinklesnigerialimited.com</a>
//               <a href="mailto:contact@pinklesnigerialimited.com">✉️ contact@pinklesnigerialimited.com</a>
//               <span>📍 Victoria Island, Lagos, Nigeria</span>
//             </div>
//           </BrandBlock>

//           {/* Company Column */}
//           <AccordionItem>
//             <AccordionHeader
//               onClick={() => toggleSection("company")}
//               $isOpen={openSection === "company"}
//             >
//               <h3>Company</h3>
//               <span className="chevron">∧</span>
//             </AccordionHeader>
//             <AccordionContent $isOpen={openSection === "company"}>
//               <ul>
//                 <li><Link href="/about">About Us</Link></li>
//                 <li><Link href="/contact">Contact</Link></li>
//                 <li><Link href="/business-consulting">Our Businesses</Link></li>
//                 <li><Link href="/about">Leadership</Link></li>
//               </ul>
//             </AccordionContent>
//           </AccordionItem>

//           {/* Properties Column */}
//           <AccordionItem>
//             <AccordionHeader
//               onClick={() => toggleSection("properties")}
//               $isOpen={openSection === "properties"}
//             >
//               <h3>Properties</h3>
//               <span className="chevron">∧</span>
//             </AccordionHeader>
//             <AccordionContent $isOpen={openSection === "properties"}>
//               <ul>
//                 <li><Link href="/properties">For Sale</Link></li>
//                 <li><Link href="/properties">For Rent</Link></li>
//                 <li><Link href="/properties">Short-Let</Link></li>
//                 <li><Link href="/properties">Land</Link></li>
//                 <li><Link href="/properties">Luxury Homes</Link></li>
//               </ul>
//             </AccordionContent>
//           </AccordionItem>

//           {/* Services Column */}
//           <AccordionItem>
//             <AccordionHeader
//               onClick={() => toggleSection("services")}
//               $isOpen={openSection === "services"}
//             >
//               <h3>Services</h3>
//               <span className="chevron">∧</span>
//             </AccordionHeader>
//             <AccordionContent $isOpen={openSection === "services"}>
//               <ul>
//                 <li><Link href="/interior-decor">Interior Décor</Link></li>
//                 <li><Link href="/cleaning">Cleaning Services</Link></li>
//                 <li><Link href="/legal-mortgage">Legal & Mortgage</Link></li>
//                 <li><Link href="/business-consulting">Business Consulting</Link></li>
//                 <li><Link href="/media-advertising">Media & Advertising</Link></li>
//               </ul>
//             </AccordionContent>
//           </AccordionItem>

//           {/* Brands Column */}
//           <AccordionItem>
//             <AccordionHeader
//               onClick={() => toggleSection("brands")}
//               $isOpen={openSection === "brands"}
//             >
//               <h3>Brands</h3>
//               <span className="chevron">∧</span>
//             </AccordionHeader>
//             <AccordionContent $isOpen={openSection === "brands"}>
//               <ul>
//                 <li><Link href="/ashakeade-closet">AshakeAde Closet</Link></li>
//                 <li><Link href="/book-now">Pinkles Spa</Link></li>
//                 <li><Link href="/ashakeade-closet">New Arrivals</Link></li>
//                 <li><Link href="/book-now">Book Appointment</Link></li>
//                 <li><Link href="/ashakeade-closet">Gift Cards</Link></li>
//               </ul>
//             </AccordionContent>
//           </AccordionItem>
//         </AccordionGrid>


//         {/* Social Section */}
//         <SocialSection>
//           <h4>Follow Us On Social Media</h4>
//           <div className="icons-row">
//             <a
//               href="https://www.instagram.com/pinkles_ng_ltd?cplk=MWJneXBoeHI2dmYyYw=="
//               target="_blank"
//               rel="noreferrer"
//               aria-label="Instagram"
//             >
//               <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                 <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//               </svg>
//             </a>
//             <a href="#" aria-label="Pinterest">
//               <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
//               </svg>
//             </a>
//             <a href="#" aria-label="Facebook">
//               <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//               </svg>
//             </a>
//             <a href="#" aria-label="YouTube">
//               <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//               </svg>
//             </a>
//             <a href="#" aria-label="TikTok">
//               <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M12.525 0h3.08c.12 1.05.6 2.055 1.373 2.828.82.82 1.89 1.31 3.022 1.403v3.136c-1.455-.02-2.883-.496-4.062-1.353-.162-.116-.316-.241-.462-.372V15.2c0 1.834-.606 3.606-1.722 5.038A8.13 8.13 0 0 1 7.28 23.23c-2.03.228-4.085-.308-5.717-1.493A8.16 8.16 0 0 1 0 15.51c.07-2.03.82-3.96 2.13-5.46a8.16 8.16 0 0 1 5.37-2.65V10.6a4.98 4.98 0 0 0-3.1 1.54 4.97 4.97 0 0 0-1.28 3.39c.02 1.34.56 2.62 1.52 3.55a4.98 4.98 0 0 0 3.58 1.42c1.34 0 2.63-.52 3.57-1.46.94-.94 1.47-2.23 1.47-3.57V0z" />
//               </svg>
//             </a>
//           </div>
//         </SocialSection>

//         {/* Bottom Copyright & Legal Bar */}
//         <BottomBar>
//           <div className="brand-logo-text">pinkles</div>
//           <div className="legal-links">
//             <Link href="/terms-conditions">PRIVACY POLICY</Link>
//             <Link href="/terms-conditions">TERMS & CONDITIONS</Link>
//             <Link href="/dashboard">DASHBOARD</Link>
//           </div>
//           <div className="copyright">
//             COPYRIGHT © 2026 PINKLES NIGERIA LTD. ALL RIGHTS RESERVED.
//           </div>
//         </BottomBar>
//       </FooterWrapper>
//     </FooterContainer>
//   );
// }






"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

/* ================= THEME COLORS ================= */
const Colors = {
  Bg: "#FFFFFF",
  TextPrimary: "#111827",
  TextSecondary: "#374151",
  TextMuted: "#6B7280",
  BorderColor: "#E5E7EB",
  InputBg: "#F9FAFB",
  DarkButtonBg: "#111827",
};

/* ================= STYLED COMPONENTS ================= */
const FooterContainer = styled.footer`
  background-color: ${Colors.Bg};
  color: ${Colors.TextPrimary};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  padding: 3rem 1.5rem 2rem 1.5rem;
  width: 100%;
  border-top: 1px solid ${Colors.BorderColor};
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

/* ================= NEWSLETTER SECTION ================= */
const NewsletterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid ${Colors.BorderColor};

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
  }
`;

const NewsletterLeft = styled.div`
  max-width: 600px;

  h4 {
    color: ${Colors.TextMuted};
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.3;
    color: ${Colors.TextPrimary};

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

const NewsletterRight = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  max-width: 480px;

  input {
    flex: 1;
    background: ${Colors.InputBg};
    border: 1px solid ${Colors.BorderColor};
    padding: 0.8rem 1rem;
    color: ${Colors.TextPrimary};
    font-size: 0.9rem;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.2s;

    &::placeholder {
      color: ${Colors.TextMuted};
    }

    &:focus {
      border-color: ${Colors.TextPrimary};
    }
  }

  button {
    background: ${Colors.DarkButtonBg};
    color: #ffffff;
    border: none;
    padding: 0.8rem 1.4rem;
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.2s;
    white-space: nowrap;

    &:hover {
      opacity: 0.88;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

/* ================= LINKS GRID SECTION (Always Visible) ================= */
const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2.5rem 0;
  border-bottom: 1px solid ${Colors.BorderColor};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: 1.4fr repeat(4, 1fr);
    gap: 2rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.05rem;
    font-weight: 700;
    color: ${Colors.TextPrimary};
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    li a, li span {
      color: ${Colors.TextSecondary};
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s;
      display: inline-block;

      &:hover {
        color: ${Colors.TextPrimary};
        text-decoration: underline;
      }
    }
  }
`;

const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: 1 / -1;

  @media (min-width: 900px) {
    grid-column: span 1;
  }

  img.footer-logo {
    width: 100px;
    height: auto;
    object-fit: contain;
    border-radius: 4px;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.55;
    color: ${Colors.TextSecondary};
    margin: 0;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a, span {
      font-size: 0.88rem;
      color: ${Colors.TextSecondary};
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${Colors.TextPrimary};
      }
    }
  }
`;

/* ================= APP DOWNLOAD & COUNTRY ================= */
const SecondarySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem 0 1.5rem 0;
  gap: 1.75rem;
`;

const AppDownloadBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${Colors.TextPrimary};
  }

  .app-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #000000;
    color: #ffffff;
    padding: 0.5rem 1.1rem;
    border-radius: 6px;
    text-decoration: none;

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      line-height: 1.1;

      span.sub {
        font-size: 0.6rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      span.main {
        font-size: 0.9rem;
        font-weight: 700;
      }
    }
  }
`;

const CountrySelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 360px;

  h4 {
    font-size: 1rem;
    font-weight: 700;
    color: ${Colors.TextPrimary};
  }

  .select-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f3f4f6;
    border: 1px solid ${Colors.BorderColor};
    padding: 0.65rem 1rem;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${Colors.TextPrimary};

    .flag-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

/* ================= SOCIAL MEDIA ================= */
const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  padding-top: 0.5rem;

  h4 {
    font-size: 1rem;
    font-weight: 700;
    color: ${Colors.TextPrimary};
  }

  .icons-row {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    a {
      color: ${Colors.TextPrimary};
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

/* ================= BOTTOM COPYRIGHT BAR ================= */
const BottomBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  padding-top: 2.5rem;
  margin-top: 1.5rem;
  border-top: 1px solid ${Colors.BorderColor};

  .brand-logo-text {
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -0.03em;
    color: ${Colors.TextPrimary};
    text-transform: lowercase;
  }

  .copyright {
    font-size: 0.75rem;
    color: ${Colors.TextMuted};
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .legal-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;

    a {
      font-size: 0.78rem;
      font-weight: 600;
      color: ${Colors.TextSecondary};
      text-decoration: none;
      letter-spacing: 0.04em;

      &:hover {
        color: ${Colors.TextPrimary};
        text-decoration: underline;
      }
    }
  }
`;

/* ================= COMPONENT ================= */
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

        {/* Links Grid (Always Open / Expanded) */}
        <LinksGrid>
          {/* Brand Info */}
          <BrandBlock>
            <img src="/logo.jpg" alt="Pinkles Logo" className="footer-logo" />
            <p>
              A premium Nigerian ecosystem bringing together property, hospitality, interior design, business consulting, media, fashion and beauty under one trusted brand.
            </p>
            <div className="contact-details">
              <a href="tel:+2348084361466">📞 +234 808 436 1466</a>
              <a href="mailto:admin@pinklesnigerialimited.com">✉️ admin@pinklesnigerialimited.com</a>
              <a href="mailto:contact@pinklesnigerialimited.com">✉️ contact@pinklesnigerialimited.com</a>
              <span>📍 Victoria Island, Lagos, Nigeria</span>
            </div>
          </BrandBlock>

          {/* Company Column */}
          <FooterColumn>
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/business-consulting">Our Businesses</Link></li>
              <li><Link href="/about">Leadership</Link></li>
            </ul>
          </FooterColumn>

          {/* Properties Column */}
          <FooterColumn>
            <h3>Properties</h3>
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
            <h3>Services</h3>
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
            <h3>Brands</h3>
            <ul>
              <li><Link href="/ashakeade-closet">AshakeAde Closet</Link></li>
              <li><Link href="/book-now">Pinkles Spa</Link></li>
              <li><Link href="/ashakeade-closet">New Arrivals</Link></li>
              <li><Link href="/book-now">Book Appointment</Link></li>
              <li><Link href="/ashakeade-closet">Gift Cards</Link></li>
            </ul>
          </FooterColumn>
        </LinksGrid>

     

        {/* Social Section */}
        <SocialSection>
          <h4>Follow Us On Social Media</h4>
          <div className="icons-row">
            <a
              href="https://www.instagram.com/pinkles_ng_ltd?cplk=MWJneXBoeHI2dmYyYw=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="Pinterest">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525 0h3.08c.12 1.05.6 2.055 1.373 2.828.82.82 1.89 1.31 3.022 1.403v3.136c-1.455-.02-2.883-.496-4.062-1.353-.162-.116-.316-.241-.462-.372V15.2c0 1.834-.606 3.606-1.722 5.038A8.13 8.13 0 0 1 7.28 23.23c-2.03.228-4.085-.308-5.717-1.493A8.16 8.16 0 0 1 0 15.51c.07-2.03.82-3.96 2.13-5.46a8.16 8.16 0 0 1 5.37-2.65V10.6a4.98 4.98 0 0 0-3.1 1.54 4.97 4.97 0 0 0-1.28 3.39c.02 1.34.56 2.62 1.52 3.55a4.98 4.98 0 0 0 3.58 1.42c1.34 0 2.63-.52 3.57-1.46.94-.94 1.47-2.23 1.47-3.57V0z" />
              </svg>
            </a>
          </div>
        </SocialSection>

        {/* Bottom Copyright & Legal Bar */}
        <BottomBar>
          <div className="brand-logo-text">pinkles</div>
          <div className="legal-links">
            <Link href="/terms-conditions">PRIVACY POLICY</Link>
            <Link href="/terms-conditions">TERMS & CONDITIONS</Link>
            <Link href="/dashboard">DASHBOARD</Link>
          </div>
          <div className="copyright">
            COPYRIGHT © 2026 PINKLES NIGERIA LTD. ALL RIGHTS RESERVED.
          </div>
        </BottomBar>
      </FooterWrapper>
    </FooterContainer>
  );
}