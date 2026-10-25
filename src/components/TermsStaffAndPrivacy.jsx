"use client";

import styled from "styled-components";
import { primaryColoring, secondaryColoring } from "./Context";

/* ================= COLORS & THEME (Matching Header) ================= */
const PrimaryColor = primaryColoring || "#11382b";
const SecondaryColor = secondaryColoring || "#d4af37";
const Dark = "#0f172a";
const Border = "#e2e8f0";
const White = "#ffffff";
const TextDark = "#1e293b";

/* ================= STYLED COMPONENTS ================= */
const SectionWrapper = styled.section`
  width: 100%;
  background: ${White};
  color: ${Dark};
  font-family: inherit;
  line-height: 1.6;
  padding: 0 1.5rem 4rem 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1rem 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const PolicySection = styled.div`
  margin-bottom: 2.5rem;
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 1.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
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

const MainHeaderTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${PrimaryColor};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 1rem 0;
  border-bottom: 2px solid ${SecondaryColor};
  padding-bottom: 0.4rem;
  display: block;
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

const Paragraph = styled.p`
  font-size: 0.88rem;
  color: ${TextDark};
  margin: 0 0 1rem 0;
  line-height: 1.65;

  &:last-child {
    margin-bottom: 0;
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
export default function TermsStaffAndPrivacy() {
  return (
    <SectionWrapper>
      <Container>
        {/* SECTION 7: STAFF, VOLUNTEERS, CONTRACTORS AND BRAND AMBASSADORS */}
        <PolicySection>
          <SectionTitle>7. STAFF, VOLUNTEERS, CONTRACTORS AND BRAND AMBASSADORS</SectionTitle>

          <ClauseTitle>7.1 Written engagement terms</ClauseTitle>
          <Paragraph>
            Each worker must receive a written agreement appropriate to their actual status: employee, fixed-term worker, casual worker, consultant, independent contractor, volunteer or brand ambassador. Labels alone do not determine legal status; the real working relationship and applicable law do.
          </Paragraph>
          <BulletList>
            <li>The agreement should specify duties, reporting line, work location, working hours, pay/fee and payment dates, expenses, leave and statutory entitlements where applicable, probation if lawful, confidentiality, intellectual property, data protection, health and safety, disciplinary process, notice/termination and dispute handling.</li>
            <li>Pay wages and other entitlements in line with applicable law and the agreement. Do not make unlawful deductions, withhold earned wages as punishment or misclassify an employee to avoid statutory obligations.</li>
            <li>Where a person is described as a volunteer but receives payment per shift/day, the Company must review the arrangement to determine the correct legal status and obligations. Do not assume the word 'volunteer' removes employment rights.</li>
          </BulletList>

          <ClauseTitle>7.2 Recruitment and onboarding</ClauseTitle>
          <BulletList>
            <li>Use fair, role-related selection criteria and verify identity, qualifications, references and right to work where relevant and lawful. Collect only necessary recruitment information.</li>
            <li>Provide role-specific induction, supervision, equipment and safety instructions. Training must be given before staff handle chemicals, customer homes, cash, personal data, transport, spa treatments or property keys.</li>
          </BulletList>

          <ClauseTitle>7.3 Conduct and disciplinary standards</ClauseTitle>
          <BulletList>
            <li>Prohibited conduct includes theft, fraud, bribery, harassment, discrimination, violence, intoxication while on duty, unauthorised disclosure, falsifying records, misuse of customer property, unsafe work and unauthorised public statements on behalf of Pinkles.</li>
            <li>Disciplinary action must be fair, documented, proportionate and consistent with the contract and applicable law. Serious allegations should be investigated, and the worker should have a reasonable opportunity to respond.</li>
          </BulletList>

          <ClauseTitle>7.4 Contractors and subcontracting</ClauseTitle>
          <Paragraph>
            Contractors must hold any licences, qualifications, insurance and permits needed for their work and comply with relevant safety, privacy, anti-bribery and customer-service requirements. Pinkles should use written agreements that define scope, quality standards, payment, confidentiality, ownership of work, subcontracting, liability, insurance and termination.
          </Paragraph>

          <ClauseTitle>7.5 Brand ambassadors and influencers</ClauseTitle>
          <BulletList>
            <li>A written campaign brief must specify deliverables, channels, deadlines, fees, expenses, approval process, usage/licensing rights, exclusivity, disclosure obligations, cancellation and reporting.</li>
            <li>Ambassadors must disclose paid, gifted, sponsored or otherwise material relationships clearly and in accordance with applicable advertising rules and platform policies. They must not fabricate testimonials, metrics, personal experience or product claims.</li>
            <li>No ambassador may bind Pinkles to a contract, make unauthorised guarantees, buy fake engagement, publish confidential information or use third-party music/images/marks without permission.</li>
            <li>Pinkles may require correction or removal of unlawful, misleading or materially non-compliant content, subject to the campaign contract and applicable law.</li>
          </BulletList>
        </PolicySection>

        {/* SECTION 8: HEALTH, SAFETY, SAFEGUARDING AND SECURITY */}
        <PolicySection>
          <SectionTitle>8. HEALTH, SAFETY, SAFEGUARDING AND SECURITY</SectionTitle>

          <ClauseTitle>8.1 General duty</ClauseTitle>
          <Paragraph>
            Management must assess foreseeable risks, provide safe systems of work and suitable training/equipment, and comply with applicable workplace health and safety laws and regulations. Workers must follow instructions, use protective equipment, report hazards and stop work where there is an immediate serious risk.
          </Paragraph>

          <ClauseTitle>8.2 Home visits and lone working</ClauseTitle>
          <BulletList>
            <li>Use a booking/dispatch record, customer address and emergency contact process. Where risk warrants, use check-in/check-out procedures, paired visits or supervisor monitoring.</li>
            <li>Staff should not enter a property if there is a credible threat, uncontrolled animal, exposed wiring, suspected criminal activity or other serious hazard. Leave safely, notify management and document the incident.</li>
            <li>Keys, access codes and alarm details must be restricted to staff who need them and returned/deleted promptly when access ends.</li>
          </BulletList>

          <ClauseTitle>8.3 Chemical, equipment and hygiene controls</ClauseTitle>
          <Paragraph>
            Cleaning products and spa supplies must be stored, labelled and used according to instructions. Staff must not mix chemicals, decant products into unlabelled containers or use unsafe equipment. Maintain hygiene, ventilation, protective equipment, first-aid arrangements and incident reporting appropriate to the service.
          </Paragraph>

          <ClauseTitle>8.4 Safeguarding</ClauseTitle>
          <Paragraph>
            Staff must maintain professional boundaries with children and vulnerable people, never exploit or intimidate them, and report suspected abuse or immediate danger through appropriate management and lawful safeguarding channels. Any role requiring background checks or specialist safeguarding procedures must not begin until the applicable requirements are met.
          </Paragraph>

          <ClauseTitle>8.5 Incidents and emergencies</ClauseTitle>
          <Paragraph>
            Report injury, damage, theft, suspected data breach, unsafe property condition, lost keys, chemical exposure, transport incident or safeguarding concern to management as soon as possible. Preserve relevant evidence, prioritise immediate safety and contact emergency services where appropriate. Management must investigate, record corrective actions and make any legally required notifications.
          </Paragraph>
        </PolicySection>

        {/* SECTION 9: PRIVACY POLICY AND DATA PROTECTION */}
        <PolicySection>
          <MainHeaderTitle>
            9. PRIVACY POLICY AND DATA PROTECTION
          </MainHeaderTitle>

          <ClauseTitle>9.1 Who is responsible</ClauseTitle>
          <Paragraph>
            Pinkles Nigeria Ltd is the intended data controller for personal information it determines how and why to process, subject to the facts of each engagement. Before publication, insert a monitored privacy contact: [PRIVACY EMAIL] / [PHONE OR POSTAL ADDRESS]. If another organisation determines the purpose and means of processing, the parties must document their respective roles.
          </Paragraph>

          <ClauseTitle>9.2 Information we may collect</ClauseTitle>
          <BulletList>
            <li>Identity and contact information: name, phone number, email, address, business details and verification records.</li>
            <li>Booking and transaction information: service requests, property/guest details, invoices, receipts, payment status, preferences, complaints and communications.</li>
            <li>Employment/contractor information: CV, qualifications, references, contract, payroll and attendance records, and other information necessary for engagement.</li>
            <li>Campaign/event information: public profile, deliverables, content, event registration, attendance and permissions.</li>
            <li>Property/security information: access instructions, check-in records, incident reports and condition/inventory records.</li>
            <li>Technical information: website or social-media interactions, device/log information and cookies where used.</li>
            <li>Sensitive information only where genuinely necessary and lawful, such as limited health or accessibility information for a spa treatment or accommodation request. Such information requires heightened care and an appropriate lawful basis.</li>
          </BulletList>

          <ClauseTitle>9.3 Purposes and lawful bases</ClauseTitle>
          <Paragraph>
            We process information to respond to enquiries; quote and deliver services; manage bookings, payments and refunds; verify authority and prevent fraud; meet tax, employment, regulatory and other legal obligations; protect people, property and legal claims; manage staff and contractors; and send marketing where permitted. The applicable lawful basis may be contract, legal obligation, consent, vital interests or another basis recognised by the Nigeria Data Protection Act 2023. We will not rely on consent where it is not freely given or where another lawful basis is appropriate.
          </Paragraph>

          <ClauseTitle>9.4 Sharing and international transfers</ClauseTitle>
          <Paragraph>
            Information may be shared on a need-to-know basis with employees, professional advisers, payment providers, booking platforms, landlords/hosts, approved contractors, insurers, auditors, regulators, law enforcement or courts where necessary and lawful. We do not sell personal information. Where information is transferred outside Nigeria, we will assess and implement safeguards and conditions required by applicable data protection law.
          </Paragraph>

          <ClauseTitle>9.5 Marketing and photography</ClauseTitle>
          <Paragraph>
            We may send service-related messages needed to administer a booking or contract. Promotional messages will be sent only where permitted by law and, where required, with consent or an appropriate opt-out mechanism. You may opt out of marketing at any time. We will obtain appropriate permission before using identifiable customer photographs, testimonials or private premises in advertising, except where another lawful basis clearly applies.
          </Paragraph>

          <ClauseTitle>9.6 Security, retention and breach response</ClauseTitle>
          <Paragraph>
            We use reasonable organisational and technical measures proportionate to the risks, such as access controls, confidentiality duties, secure storage, backups and staff training. No method is perfectly secure. We retain data only for as long as reasonably necessary for the stated purpose, legal retention periods, dispute handling and legitimate business needs, then securely delete or anonymise it where practicable. If a personal data breach occurs, we will assess it and notify the NDPC and affected individuals where and when required by law.
          </Paragraph>

          <ClauseTitle>9.7 Your rights</ClauseTitle>
          <Paragraph>
            Subject to applicable law and any lawful exceptions, you may request access to your personal data, correction of inaccurate information, deletion, restriction or objection to certain processing, data portability where applicable, withdrawal of consent where consent is the basis, and information about how your data is used. You may also complain to the Nigeria Data Protection Commission. We may need to verify your identity and explain if a request cannot lawfully be fully granted.
          </Paragraph>

          <ClauseTitle>9.8 Cookies and third-party platforms</ClauseTitle>
          <Paragraph>
            If our website uses cookies or analytics, provide a clear notice explaining their purpose and choices, and obtain consent where required. Third-party platforms such as social networks, payment services and booking websites have their own privacy terms. Pinkles is not responsible for independent processing by those platforms, but will take reasonable steps when selecting service providers.
          </Paragraph>

          <ClauseTitle>9.9 Children’s information</ClauseTitle>
          <Paragraph>
            We do not knowingly collect children’s personal information beyond what is necessary for a lawful service or event. Where required, we will obtain consent or authorisation from a parent/guardian and apply additional safeguards. Do not publish images or identifying details of children without an appropriate lawful basis and permission.
          </Paragraph>
        </PolicySection>
      </Container>
    </SectionWrapper>
  );
}