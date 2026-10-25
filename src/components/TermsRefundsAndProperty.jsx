"use client";

import styled from "styled-components";
import { primaryColoring, secondaryColoring } from "./Context";

/* ================= COLORS & THEME (Matching Header) ================= */
const PrimaryColor = primaryColoring || "#11382b";
const SecondaryColor = secondaryColoring || "#d4af37";
const Dark = "#0f172a";
const Border = "#e2e8f0";
const White = "#ffffff";
const SectionBg = "#f8fafc";
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

/* ================= TABLE STYLES ================= */
const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 1rem 0;
  border: 1px solid ${Border};
  border-radius: 6px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
  text-align: left;

  th, td {
    padding: 0.85rem 1rem;
    border-bottom: 1px solid ${Border};
  }

  th {
    background: ${SectionBg};
    color: ${PrimaryColor};
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.03em;
  }

  tr:last-child td {
    border-bottom: none;
  }

  td:first-child {
    font-weight: 600;
    width: 35%;
    color: ${PrimaryColor};
    background: #fafafa;
  }

  @media (max-width: 600px) {
    th, td {
      padding: 0.65rem 0.75rem;
      font-size: 0.8rem;
    }
  }
`;

/* ================= MAIN COMPONENT ================= */
export default function TermsRefundsAndProperty() {
  return (
    <SectionWrapper>
      <Container>
        {/* SECTION 4: REFUNDS, CANCELLATIONS AND RESCHEDULING */}
        <PolicySection>
          <SectionTitle>4. REFUNDS, CANCELLATIONS AND RESCHEDULING</SectionTitle>
          
          <Paragraph>
            This policy must be displayed or provided before payment. It is a general framework: the Federal Competition
            and Consumer Protection Act 2018 (FCCPA), including applicable statutory cancellation, return, quality and
            refund rights, takes precedence. No blanket 'no refunds under any circumstances' rule is intended or permitted
            where it would remove a non-excludable legal right.
          </Paragraph>

          <ClauseTitle>4.1 General refund principles</ClauseTitle>
          <BulletList>
            <li>If Pinkles cancels a service and cannot offer a mutually acceptable replacement date or equivalent remedy, the customer will receive a refund of amounts paid for the undelivered portion, subject to any lawful, itemised third-party costs that the customer approved in advance and that cannot reasonably be recovered.</li>
            <li>If Pinkles materially fails to deliver what was agreed, it will assess a suitable remedy, which may include correction/re-performance, replacement, a proportionate price reduction or refund, consistent with the contract and law.</li>
            <li>If the customer cancels, Pinkles may deduct only clearly disclosed, reasonable and lawful costs already incurred or a reasonable cancellation charge where permitted. No deduction may be punitive, misleading or contrary to statutory rights.</li>
            <li>Refunds will ordinarily be returned through the original payment method within 10 business days after approval, or within any shorter period required by law or the payment provider. If the original method is unavailable, an alternative will be agreed with the customer.</li>
            <li>Refunds do not affect rights to claim for loss or remedies that cannot lawfully be excluded. Pinkles will provide a written breakdown of any permitted deduction on request.</li>
          </BulletList>

          <ClauseTitle>4.2 Indicative cancellation schedule — only if disclosed and lawful</ClauseTitle>
          
          <TableWrapper>
            <StyledTable>
              <thead>
                <tr>
                  <th>Timing</th>
                  <th>Proposed handling</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>More than 7 calendar days before service</td>
                  <td>Refund payment less reasonable, evidenced, non-recoverable costs already incurred and disclosed, where legally permitted.</td>
                </tr>
                <tr>
                  <td>2–7 calendar days before service</td>
                  <td>Offer rescheduling first; if cancelled, deduct only a pre-disclosed, reasonable amount reflecting actual committed costs, where lawful.</td>
                </tr>
                <tr>
                  <td>Less than 48 hours / no-show</td>
                  <td>A reasonable fee may apply only if clearly disclosed, proportionate and lawful. Statutory cancellation/refund rights remain unaffected.</td>
                </tr>
                <tr>
                  <td>Pinkles cancels / material non-performance</td>
                  <td>Offer a suitable alternative or refund for the undelivered portion; no charge for services not supplied, subject to applicable law.</td>
                </tr>
              </tbody>
            </StyledTable>
          </TableWrapper>

          <Paragraph>
            This schedule is not automatic. It must be adapted to each service, disclosed before the customer pays and applied consistently with the FCCPA and any applicable sector rules. The law prevails if it provides a stronger remedy.
          </Paragraph>

          <ClauseTitle>4.3 Service-specific refund notes</ClauseTitle>
          <BulletList>
            <li>Interior design and cleaning: refund any unearned amount for work not started or not supplied; materials already purchased specifically for the customer may be deducted only if disclosed, evidenced, non-returnable and lawful. Defective or incomplete work should first be assessed for reasonable correction where appropriate.</li>
            <li>Fashion and custom-made items: custom sizing, approved fabric or personalised production may limit change-of-mind returns where law permits, but does not remove remedies for defective, misdescribed or wrongly supplied items. Standard-stock items may be returned subject to applicable law and disclosed hygiene/safety limitations.</li>
            <li>Short-let accommodation and seminars/events: terms must identify booking dates, check-in/event times, deposits, guest limits, no-show handling, cancellation deadlines and any third-party platform rules. Statutory rights and exceptional circumstances must be considered; do not assume every booking fee is automatically non-refundable.</li>
            <li>Spa: disclose appointment cancellation rules before payment. If a treatment is unsuitable or cannot safely be performed, offer a reschedule or refund for the unprovided treatment, as appropriate.</li>
            <li>Advertising and brand ambassadors: specify deliverables, posting dates, approval rounds, media spend, talent fees, usage rights and cancellation milestones. Return unused client funds and unearned fees, subject to documented work completed and lawful, disclosed committed costs.</li>
            <li>Conveyance/logistics: state pickup/delivery scope, waiting time, failed delivery, damage reporting and insurance terms. Refunds and liability for loss or damage remain subject to mandatory law and the agreed lawful contract.</li>
          </BulletList>
        </PolicySection>

        {/* SECTION 5: SERVICE-SPECIFIC TERMS */}
        <PolicySection>
          <SectionTitle>5. SERVICE-SPECIFIC TERMS</SectionTitle>

          <ClauseTitle>5.1 Home interior design and décor</ClauseTitle>
          <BulletList>
            <li>A written scope should specify rooms/areas, design concepts, drawings or renders, number of revisions, materials, dimensions, procurement, installation, completion milestones, site access and exclusions.</li>
            <li>Colour, texture and finish may vary slightly across screens, batches and natural materials. Pinkles must disclose material variations and obtain approval for material substitutions.</li>
            <li>Structural works, electrical works, plumbing, gas, fire systems or other regulated/specialist work must be undertaken by appropriately qualified and authorised professionals. No design approval replaces planning, building-control or other required approvals.</li>
            <li>The customer must disclose known hazards, concealed utilities, building restrictions and relevant permissions. Variations must be approved in writing before additional costs are incurred.</li>
          </BulletList>

          <ClauseTitle>5.2 Cleaning services</ClauseTitle>
          <BulletList>
            <li>The booking should identify premises, number/size of rooms, service type, expected duration, included tasks, excluded tasks, supplies, access arrangements and any add-on charges.</li>
            <li>Customers should secure cash, jewellery, medicines, confidential documents, fragile valuables and pets before work begins. Pinkles staff must not use customer property for personal purposes or access unrelated rooms or records.</li>
            <li>Hazardous materials, biohazards, pest infestation, mould remediation, high-level work, industrial cleaning and specialist waste require prior disclosure and appropriate training, equipment and authorisation. Staff must not mix chemicals or use products contrary to labels.</li>
            <li>Damage or loss concerns should be reported promptly with evidence. Pinkles will investigate fairly; this clause does not waive legal responsibility for proven negligence or misconduct.</li>
          </BulletList>

          <ClauseTitle>5.3 Fashion, clothing and product supply</ClauseTitle>
          <BulletList>
            <li>Descriptions should state fabric/material, sizing, colour, customisation, care instructions, production lead time, delivery and any made-to-order conditions. Customers must verify measurements where requested.</li>
            <li>Ownership of supplied designs, patterns, photographs and brand assets must be agreed in writing. Pinkles will not knowingly sell counterfeit goods or misuse third-party intellectual property.</li>
            <li>Hygiene-related limitations on returns must be lawful, proportionate and disclosed before purchase; they do not remove statutory remedies for defects or misdescription.</li>
          </BulletList>

          <ClauseTitle>5.4 Spa and wellness services</ClauseTitle>
          <BulletList>
            <li>Publish the treatment offered, price, duration, practitioner qualifications where relevant, contraindications, hygiene practices, cancellation rules and complaint route.</li>
            <li>Customers must provide relevant safety information needed to determine whether a treatment can be performed safely. Collect only necessary information and handle any health-related data with enhanced confidentiality.</li>
            <li>No unqualified person may provide a regulated medical, invasive or clinical treatment. Products must be lawfully sourced, properly labelled and used according to instructions. Stop a treatment if a serious safety concern arises and seek appropriate assistance.</li>
          </BulletList>

          <ClauseTitle>5.5 Seminars, workshops and events</ClauseTitle>
          <BulletList>
            <li>Event terms should state organiser, venue/platform, date and time, ticket inclusions, speaker changes, recording/photography notice, accessibility arrangements, conduct rules and cancellation/refund arrangements.</li>
            <li>Pinkles may make reasonable programme changes. If a material change or cancellation substantially affects the paid-for event, provide an appropriate remedy consistent with the advertised terms and law.</li>
            <li>Attendees must follow lawful venue instructions. Photography or recording involving identifiable attendees should be handled transparently and with appropriate notice/consent where required.</li>
          </BulletList>
        </PolicySection>

        {/* SECTION 6: SHORT-LET, PROPERTY, ESTATE AGENCY AND CONVEYANCE */}
        <PolicySection>
          <MainHeaderTitle>
            6. SHORT-LET, PROPERTY, ESTATE AGENCY AND CONVEYANCE
          </MainHeaderTitle>

          <ClauseTitle>6.1 Short-let bookings and guest rules</ClauseTitle>
          <BulletList>
            <li>Every booking must identify the property, host/operator, dates, occupancy limit, price, taxes/fees, deposit, check-in/check-out, house rules, utilities, cleaning, damage reporting and emergency contact.</li>
            <li>Guests must not exceed occupancy limits, hold unauthorised events, engage in unlawful activity, disturb neighbours, damage property or duplicate/access-control keys without permission. House rules must be reasonable and disclosed before booking.</li>
            <li>Any security/damage deposit must be separately identified, held and accounted for appropriately, with deductions supported by evidence and an itemised explanation. A deposit is not an automatic penalty.</li>
            <li>Pinkles must not advertise a property as available or represent authority to let/manage it without reasonable verification of the owner's identity, ownership/authority and right to instruct the Company.</li>
          </BulletList>

          <ClauseTitle>6.2 Estate agency and property transactions</ClauseTitle>
          <Paragraph>
            Where Pinkles or its representatives carry out estate agency activity, they must first confirm and maintain all registrations/licences required in the state where the property is located. In Lagos State, the Lagos State Real Estate Regulatory Authority (LASRERA) framework and any applicable current law and guidance must be checked before estate agency work is undertaken.
          </Paragraph>
          <BulletList>
            <li>Obtain a written agency mandate identifying the principal, property, authority, service, fee/commission, term, exclusivity (if any), expenses and termination procedure.</li>
            <li>Conduct reasonable due diligence appropriate to the transaction, including identity/authority checks and review of title or supporting documents by a qualified legal practitioner where needed. Never guarantee title, planning status, rental yield or investment return without a sound, documented basis.</li>
            <li>Disclose any personal interest, referral fee, dual agency or other conflict before the customer commits. Do not act for conflicting principals in a manner prohibited by law or the agency mandate.</li>
            <li>Client monies must be receipted, recorded, kept separate where required, and remitted to the entitled party within the applicable legal/contractual timeframe. Staff must never mix client money with personal funds or use it for company expenses.</li>
            <li>Do not collect multiple deposits for the same property in a misleading or unauthorised manner. Provide a written record of offers, payments, receipts, material communications and handover.</li>
            <li>Conveyancing/legal title work must be handled by a qualified legal practitioner where required. Pinkles must not present itself as a law firm or provide reserved legal services unless lawfully entitled to do so.</li>
          </BulletList>

          <ClauseTitle>6.3 Conveyance, transport and delivery</ClauseTitle>
          <Paragraph>
            The term 'conveyance' must be defined in each contract as passenger transport, goods transport, logistics or property-related conveyancing. If it involves transport of people or goods, confirm relevant vehicle/driver licences, roadworthiness, permits, insurance, load and safety requirements, and any state or local transport rules. If it means legal transfer of property, use a qualified legal practitioner where required. Do not accept prohibited or dangerous cargo or transport passengers beyond authorised capacity.
          </Paragraph>

          <ClauseTitle>6.4 Property damage and handover</ClauseTitle>
          <Paragraph>
            Conduct an inventory/condition report at check-in, check-out or handover where practicable. Distinguish ordinary wear and tear from damage beyond ordinary use. Any claim against a customer or contractor should be supported by reasonable evidence, and any disputed amount should be reviewed by a manager.
          </Paragraph>
        </PolicySection>
      </Container>
    </SectionWrapper>
  );
}