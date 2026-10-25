"use client";

import styled from "styled-components";
import { primaryColoring, secondaryColoring } from "./Context";

/* ================= COLORS & THEME (Matching Header) ================= */
const PrimaryColor = primaryColoring || "#11382b";
const SecondaryColor = secondaryColoring || "#d4af37";
const Dark = "#0f172a";
const Border = "#e2e8f0";
const White = "#ffffff";
const LightBg = "rgba(250, 248, 244, 0.98)";
const SectionBg = "#f8fafc";
const TextMuted = "#475569";
const TextDark = "#1e293b";

/* ================= STYLED COMPONENTS ================= */
const SectionWrapper = styled.section`
  width: 100%;
  background: ${White};
  color: ${Dark};
  font-family: inherit;
  line-height: 1.6;
  padding: 3rem 1.5rem 4rem 1.5rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

/* ================= HERO / HEADER BANNER ================= */
const HeroCard = styled.div`
  background: ${PrimaryColor};
  color: ${White};
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  margin-bottom: 2.5rem;
  border-top: 4px solid ${SecondaryColor};

  @media (max-width: 768px) {
    padding: 1.75rem 1.25rem;
  }
`;

const CompanyTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: ${White};
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const MainHeading = styled.h2`
  font-size: 1.35rem;
  font-weight: 700;
  color: ${SecondaryColor};
  margin: 0 0 0.25rem 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const SubHeading = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #e2e8f0;
  margin: 0 0 1.25rem 0;
  letter-spacing: 0.03em;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const TaglineList = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${SecondaryColor};
  margin: 0 0 1.25rem 0;
  text-transform: uppercase;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 1rem;
`;

const FrameworkText = styled.p`
  font-size: 0.92rem;
  color: #f1f5f9;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.75rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem 1.25rem;
  border-radius: 8px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  font-size: 0.82rem;
  color: #e2e8f0;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  strong {
    color: ${SecondaryColor};
    font-weight: 700;
  }
`;

/* ================= NOTICE BOX ================= */
const NoticeBox = styled.div`
  background: #fffbe2;
  border-left: 4px solid ${SecondaryColor};
  border-top: 1px solid #fef08a;
  border-right: 1px solid #fef08a;
  border-bottom: 1px solid #fef08a;
  padding: 1.25rem 1.5rem;
  border-radius: 6px;
  font-size: 0.85rem;
  color: #713f12;
  margin-bottom: 2rem;
  line-height: 1.6;

  strong {
    font-weight: 700;
    color: #854d0e;
  }
`;

/* ================= DOCUMENT CONTROL ================= */
const DocumentControlCard = styled.div`
  background: ${LightBg};
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 1.75rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
`;

const SectionTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${PrimaryColor};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 1rem 0;
  border-bottom: 2px solid ${SecondaryColor};
  padding-bottom: 0.4rem;
  display: inline-block;
`;

const Paragraph = styled.p`
  font-size: 0.88rem;
  color: ${TextDark};
  margin: 0 0 1rem 0;
  line-height: 1.65;

  &:last-child {
    margin-bottom: 0;
  }
`;

/* ================= CONTENTS INDEX ================= */
const ContentsCard = styled.div`
  background: ${SectionBg};
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 1.75rem;
  margin-bottom: 2.5rem;
`;

const ContentsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0.6rem 1.5rem;
`;

const ContentItem = styled.li`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${TextDark};
  display: flex;
  align-items: center;

  &::before {
    content: "•";
    color: ${SecondaryColor};
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
`;

/* ================= CONTENT SECTIONS ================= */
const PolicySection = styled.div`
  margin-bottom: 2.5rem;
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 1.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
`;

const ClauseTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${PrimaryColor};
  margin: 1.25rem 0 0.5rem 0;

  &:first-of-type {
    margin-top: 0.5rem;
  }
`;

const BulletList = styled.ul`
  margin: 0.5rem 0 1rem 1.25rem;
  padding: 0;
  font-size: 0.88rem;
  color: ${TextDark};

  li {
    margin-bottom: 0.4rem;
    line-height: 1.6;
  }
`;

/* ================= MAIN COMPONENT ================= */
export default function TermsHeaderAndIntro() {
  return (
    <SectionWrapper>
      <Container>
        {/* HERO / HEADER SECTION */}
        <HeroCard>
          <CompanyTitle>PINKLES NIGERIA LTD</CompanyTitle>
          <MainHeading>COMPANY POLICIES, TERMS & CONDITIONS</MainHeading>
          <SubHeading>AND PRIVACY POLICY</SubHeading>
          
          <TaglineList>
            Home Interior Design • Cleaning • Brand Ambassadors • Seminars • Fashion
            Short-Let Accommodation • Conveyance • Spa • Advertising
          </TaglineList>

          <FrameworkText>
            Corporate policy framework
            A practical governance document covering customer service, bookings, payments and
            refunds, staff and contractors, property and estate services, marketing, safety, privacy,
            complaints and compliance.
          </FrameworkText>

          <MetaGrid>
            <div>
              <span><strong>Company:</strong> Pinkles Nigeria Ltd</span>
              <span><strong>CAC Registration No.:</strong> 8391820 (confirm against current CAC records before publication)</span>
            </div>
            <div>
              <span><strong>Effective date:</strong> 24 October 2026</span>
              <span><strong>Version:</strong> 1.0 — Draft for legal review and operational adoption</span>
            </div>
          </MetaGrid>
        </HeroCard>

        {/* IMPORTANT NOTICE */}
        <NoticeBox>
          <strong>IMPORTANT:</strong> This is a general compliance template, not a legal opinion or a guarantee of compliance. Nigerian federal law and state/local rules vary by service and location. Have a Nigerian legal practitioner review this document, fill in company contact details, verify licences and tailor service-specific contracts before publishing or relying on it.Pinkles Nigeria Ltd | Policies, Terms & Conditions and Privacy
        </NoticeBox>

        {/* DOCUMENT CONTROL AND HOW TO USE THIS POLICY */}
        <DocumentControlCard>
          <SectionTitle>DOCUMENT CONTROL AND HOW TO USE THIS POLICY</SectionTitle>
          <Paragraph>
            This framework applies to Pinkles Nigeria Ltd ("Pinkles", "the Company", "we", "us" or "our") and its directors, employees, temporary workers, consultants, agents, contractors and approved service partners, subject to their lawful status and written agreements.
          </Paragraph>
          <Paragraph>
            It is intended to be read with each quotation, booking confirmation, service order, property mandate, tenancy/short-let agreement, campaign brief, event registration form, employment contract and any service-specific terms. If a signed service agreement gives a more specific lawful term, that term governs that engagement. Mandatory law always prevails over inconsistent wording in this document.
          </Paragraph>
          <Paragraph>
            Before use, insert and verify: registered office/business address; customer-service email; telephone/WhatsApp; privacy contact; payment details; complaint escalation contact; operating hours; and any applicable licence, permit, insurance and tax details. Do not publish an unmonitored contact channel.
          </Paragraph>
        </DocumentControlCard>

        {/* TABLE OF CONTENTS */}
        <ContentsCard>
          <SectionTitle>Contents</SectionTitle>
          <ContentsList>
            <ContentItem>Company policy and governance</ContentItem>
            <ContentItem>2. Customer service standards and complaints</ContentItem>
            <ContentItem>3. Bookings, quotations and payment rules</ContentItem>
            <ContentItem>4. Refunds, cancellations and rescheduling</ContentItem>
            <ContentItem>5. Service-specific terms</ContentItem>
            <ContentItem>6. Property, estate agency and conveyance controls</ContentItem>
            <ContentItem>7. Staff, volunteers, contractors and brand ambassadors</ContentItem>
            <ContentItem>8. Health, safety, safeguarding and conduct</ContentItem>
            <ContentItem>9. Privacy policy and data protection</ContentItem>
            <ContentItem>10. Advertising, fashion and intellectual property</ContentItem>
            <ContentItem>11. Liability, disputes and governing law</ContentItem>
            <ContentItem>12. Legal compliance checklist and official references</ContentItem>
          </ContentsList>
        </ContentsCard>

        {/* SECTION 1: COMPANY POLICY AND GOVERNANCE */}
        <PolicySection>
          <SectionTitle>1. COMPANY POLICY AND GOVERNANCE</SectionTitle>
          
          <ClauseTitle>1.1 Purpose and principles</ClauseTitle>
          <Paragraph>
            Pinkles aims to provide reliable, transparent and professional services. The Company will conduct business honestly, treat customers and workers fairly, protect confidential information, maintain accurate records, avoid misleading representations and comply with applicable Nigerian federal, state and local laws and lawful regulatory directions.
          </Paragraph>

          <ClauseTitle>1.2 Scope of services</ClauseTitle>
          <Paragraph>
            The framework covers home interior design and décor; residential and commercial cleaning; brand ambassador and influencer engagements; seminars, workshops and events; fashion design, supply and related services; short-let accommodation and management; conveyance/logistics or passenger transport only where lawfully authorised; spa and wellness services; advertising, promotion and marketing; and property/estate-related consultancy or transactions to the extent the Company is licensed and legally permitted to undertake them.
          </Paragraph>

          <ClauseTitle>1.3 Compliance and permits</ClauseTitle>
          <BulletList>
            <li>The responsible manager must identify all licences, registrations, permits, professional qualifications, local-government approvals, tax obligations, insurance and sector rules applicable to each service and location before offering it.</li>
            <li>No employee or agent may claim that Pinkles, a property, a spa practitioner, an advert, a product or an event is licensed, certified, insured or government-approved unless that statement is accurate and documented.</li>
            <li>Where a regulated activity requires a licence or qualified practitioner, Pinkles will either obtain the required authorisation or refer/contract the activity to a duly authorised provider. No clause in this document authorises unlicensed practice.</li>
            <li>Maintain appropriate records of quotations, invoices, receipts, customer instructions, work completion, incidents, complaints, refunds, contracts and regulatory correspondence, for the period required by law and legitimate business needs.</li>
          </BulletList>

          <ClauseTitle>1.4 Integrity, conflicts and anti-bribery</ClauseTitle>
          <Paragraph>
            Staff and representatives must not offer or accept bribes, kickbacks, secret commissions, facilitation payments, undisclosed referral fees or improper gifts. Conflicts of interest must be disclosed in writing to management and, where relevant, to the customer before a decision or transaction. No staff member may misuse client funds, company property, customer data or confidential information.
          </Paragraph>

          <ClauseTitle>1.5 Equal treatment and accessibility</ClauseTitle>
          <Paragraph>
            Customers and workers must be treated respectfully and without unlawful discrimination. Reasonable service adjustments should be considered where practicable. Harassment, intimidation, sexual harassment, exploitation, retaliation and abusive conduct are prohibited.
          </Paragraph>

          <ClauseTitle>1.6 Records, supervision and review</ClauseTitle>
          <Paragraph>
            Management should appoint a person responsible for customer complaints, privacy requests, health and safety, and staff concerns. This policy should be reviewed at least annually and whenever the law, business model, service scope or risk profile materially changes.
          </Paragraph>
        </PolicySection>

        {/* SECTION 2: CUSTOMER SERVICE STANDARDS AND COMPLAINTS */}
        <PolicySection>
          <SectionTitle>2. CUSTOMER SERVICE STANDARDS AND COMPLAINTS</SectionTitle>

          <ClauseTitle>2.1 Before a customer commits</ClauseTitle>
          <BulletList>
            <li>Give a clear description of the service, scope, deliverables, exclusions, timetable, price, taxes and additional charges, payment milestones, cancellation/refund rules, customer responsibilities and any material risks.</li>
            <li>Explain whether the service is delivered by Pinkles, an employee, a contractor, a third-party supplier, a landlord/host or another independent provider.</li>
            <li>Obtain the customer's informed approval for changes to price, scope, materials, delivery dates or other material terms before proceeding, except where immediate action is reasonably necessary to protect life or prevent serious damage.</li>
          </BulletList>

          <ClauseTitle>2.2 During delivery</ClauseTitle>
          <BulletList>
            <li>Be punctual, professional, courteous and appropriately identifiable. Notify the customer promptly of delays, disruptions, staff substitutions or issues likely to affect delivery.</li>
            <li>Keep the customer informed of progress and document approvals, variations and completion. Do not make promises that cannot reasonably be delivered.</li>
            <li>Respect customer property, privacy, access instructions and reasonable security requirements. Staff must not photograph, film or post a customer's home, belongings, premises or personal information without permission.</li>
          </BulletList>

          <ClauseTitle>2.3 Complaint procedure</ClauseTitle>
          <Paragraph>
            Customers may submit a complaint through the Company's published phone/WhatsApp, email or written business address. Pinkles should acknowledge complaints within two business days, aim to provide a substantive response within ten business days, and explain any delay and revised response date. These are internal service targets and do not shorten any statutory deadline or legal right.
          </Paragraph>
          <Paragraph>
            A complaint should include the customer's name and contact details, invoice/booking reference, date and description of the issue, supporting photos or records if available, and the remedy requested. Pinkles will investigate fairly, preserve relevant records, give the responsible team an opportunity to respond and communicate the outcome in writing.
          </Paragraph>
          <Paragraph>
            If unresolved, the customer may request review by a senior manager. Nothing prevents a customer from approaching the Federal Competition and Consumer Protection Commission (FCCPC), the Nigeria Data Protection Commission (NDPC), a relevant state regulator, a professional body or a court with jurisdiction.
          </Paragraph>

          <ClauseTitle>2.4 Customer conduct</ClauseTitle>
          <Paragraph>
            Customers must provide accurate information, safe and lawful access, timely decisions, and respectful treatment of workers. Threats, violence, harassment, discriminatory abuse, illegal requests or unsafe conditions may justify pausing or ending the service, subject to the contract, applicable law and fair handling of any refund due.
          </Paragraph>
        </PolicySection>

        {/* SECTION 3: BOOKINGS, QUOTATIONS AND PAYMENT RULES */}
        <PolicySection>
          <SectionTitle>3. BOOKINGS, QUOTATIONS AND PAYMENT RULES</SectionTitle>

          <ClauseTitle>3.1 Quotations and contract formation</ClauseTitle>
          <Paragraph>
            A quotation is valid for the period stated on it; if none is stated, it is valid for 14 calendar days unless withdrawn earlier due to a material change in supplier pricing or availability. A contract is formed when the customer accepts the quotation or service terms in writing (including a traceable electronic message) and Pinkles confirms the booking, subject to any stated deposit or verification requirements.
          </Paragraph>

          <ClauseTitle>3.2 Prices, taxes and third-party costs</ClauseTitle>
          <Paragraph>
            Prices must be communicated clearly in Nigerian naira unless another currency is expressly agreed. The quotation should state whether VAT, delivery, transport, installation, platform charges, government levies, security deposits, utilities, materials and third-party costs are included or excluded. Applicable taxes must be charged, invoiced and remitted as required by law. No undisclosed fee may be added after acceptance.
          </Paragraph>

          <ClauseTitle>3.3 Deposits and staged payments</ClauseTitle>
          <Paragraph>
            Any deposit, booking fee, mobilisation payment, milestone or security deposit must be shown separately on the quotation or agreement, with its purpose, due date and treatment on cancellation. Payments must be made only to verified Company or expressly authorised collection accounts. Customers should obtain a receipt. Staff must not request payment into personal accounts without written authorisation and documented safeguards.
          </Paragraph>

          <ClauseTitle>3.4 Late payment and suspension</ClauseTitle>
          <Paragraph>
            Where payment is overdue, Pinkles may give written notice and a reasonable opportunity to remedy the default before suspending work, withholding undelivered items or cancelling future bookings, to the extent lawful and contractually permitted. Any interest, recovery cost or late fee must be expressly agreed in advance, reasonable and lawful. Pinkles will not retain a customer's money or property as leverage where doing so would breach the law.
          </Paragraph>

          <ClauseTitle>3.5 Customer-supplied materials and approvals</ClauseTitle>
          <Paragraph>
            The customer is responsible for ensuring that supplied designs, photographs, logos, text, measurements, instructions and materials may lawfully be used. Pinkles may rely on customer-approved specifications but must flag obvious inconsistencies or safety concerns reasonably apparent to it. Changes requested after approval may affect price and timing and must be documented.
          </Paragraph>
        </PolicySection>
      </Container>
    </SectionWrapper>
  );
}