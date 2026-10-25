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
    margin-bottom: 0.5rem;
    line-height: 1.65;
  }

  a {
    color: ${PrimaryColor};
    text-decoration: underline;
    word-break: break-all;
    font-weight: 500;

    &:hover {
      color: ${SecondaryColor};
    }
  }
`;

/* ================= MAIN COMPONENT ================= */
export default function TermsAdvertisingAndReferences() {
  return (
    <SectionWrapper>
      <Container>
        {/* SECTION 10: ADVERTISING, PROMOTIONS AND INTELLECTUAL PROPERTY */}
        <PolicySection>
          <MainHeaderTitle>
            10. ADVERTISING, PROMOTIONS AND INTELLECTUAL PROPERTY
          </MainHeaderTitle>

          <ClauseTitle>10.1 Truthful advertising</ClauseTitle>
          <Paragraph>
            All advertising, offers, testimonials, endorsements, prices, discounts, before-and-after images and performance claims must be accurate, substantiated and not misleading. Material conditions must be prominent and communicated before purchase. Staff must not create fake reviews, misrepresent availability, hide compulsory fees or imply official endorsement without evidence.
          </Paragraph>

          <ClauseTitle>10.2 Regulatory approvals</ClauseTitle>
          <Paragraph>
            Before running an advertising campaign, management must determine whether ARCON registration/licensing, pre-exposure vetting or approval, sector-specific advertising rules, promotion permits, broadcast/platform rules or other approvals apply. Campaigns involving health, beauty, financial, property, food, alcohol or other regulated products may require additional review. Do not publish regulated advertising until required approvals are secured.
          </Paragraph>

          <ClauseTitle>10.3 Intellectual property</ClauseTitle>
          <Paragraph>
            Each contract should identify ownership and licence rights in designs, photographs, videos, copy, logos, campaign assets, clothing patterns, event materials and other deliverables. Unless expressly assigned in writing, pre-existing intellectual property remains with its owner. Customers grant Pinkles only the limited licence needed to perform the agreed service. Pinkles will obtain permissions for third-party material it supplies and expects customers/ambassadors to do the same.
          </Paragraph>

          <ClauseTitle>10.4 Confidentiality and publicity</ClauseTitle>
          <Paragraph>
            Neither party may disclose the other's confidential commercial or personal information except as required to perform the contract, with permission, or by law. Pinkles may list a client or show project work in its portfolio only with permission or another lawful basis and subject to agreed confidentiality restrictions.
          </Paragraph>

          <ClauseTitle>10.5 Fashion and campaign claims</ClauseTitle>
          <Paragraph>
            Product descriptions, fabric composition, origin claims, sustainability statements, discounts and endorsement claims must be supportable. Brand ambassadors must disclose material connections and must not claim to have used a product or received a result unless truthful.
          </Paragraph>
        </PolicySection>

        {/* SECTION 11: LIABILITY, DISPUTES AND GOVERNING LAW */}
        <PolicySection>
          <MainHeaderTitle>
            11. LIABILITY, DISPUTES AND GOVERNING LAW
          </MainHeaderTitle>

          <ClauseTitle>11.1 Fair allocation of responsibility</ClauseTitle>
          <Paragraph>
            Each party is responsible for its own acts and omissions as provided by law and the applicable contract. Pinkles will take reasonable care in performing agreed services. Nothing in these terms excludes or limits liability where exclusion or limitation is prohibited by Nigerian law, including liability that cannot lawfully be excluded for fraud, misrepresentation, negligence, defective performance or statutory consumer rights.
          </Paragraph>

          <ClauseTitle>11.2 Third-party providers and force majeure</ClauseTitle>
          <Paragraph>
            Where a third party supplies part of a service, Pinkles will identify that role where material and will remain responsible for obligations imposed on it by law and the contract. Neither party is automatically excused from every obligation by an event beyond its control. The affected party should notify the other promptly, mitigate the impact and agree a reasonable solution. Payments for undelivered services and statutory rights will be handled under the refund policy and applicable law.
          </Paragraph>

          <ClauseTitle>11.3 Complaints and dispute resolution</ClauseTitle>
          <Paragraph>
            The parties should first attempt to resolve disputes through the complaint process and good-faith discussions. If unresolved, either party may use mediation or another agreed dispute-resolution process, without preventing urgent court relief or access to a regulator. No clause requires a consumer to waive mandatory legal rights or prevents a lawful complaint to a regulator.
          </Paragraph>

          <ClauseTitle>11.4 Governing law and jurisdiction</ClauseTitle>
          <Paragraph>
            These general terms are governed by the laws of the Federal Republic of Nigeria and, where relevant, the applicable laws of the state in which the service or property is located. Courts with lawful jurisdiction may hear disputes. State-specific terms may be required for property, tenancy, transport, spa, events and other regulated services.
          </Paragraph>

          <ClauseTitle>11.5 Changes to terms</ClauseTitle>
          <Paragraph>
            Pinkles may update these policies to reflect operational or legal changes. The current version and effective date should be made available to customers. Material changes will not retrospectively remove accrued rights or alter an existing contract without a lawful basis and any required agreement. For a new booking, the version supplied before acceptance applies.
          </Paragraph>
        </PolicySection>

        {/* SECTION 12: LEGAL COMPLIANCE CHECKLIST AND OFFICIAL REFERENCES */}
        <PolicySection>
          <MainHeaderTitle>
            12. LEGAL COMPLIANCE CHECKLIST AND OFFICIAL REFERENCES
          </MainHeaderTitle>

          <ClauseTitle>12.1 Before publishing or using this document</ClauseTitle>
          <BulletList>
            <li>Insert the registered office, contact details, privacy contact, complaint contact and official payment channels.</li>
            <li>Have Nigerian counsel review the complete document and service-specific booking forms, especially refunds, liability, staff status, short-let, tenancy and estate agency.</li>
            <li>Confirm CAC details and all required licences/registrations. Verify LASRERA requirements before estate agency activity in Lagos and check the relevant regulator in other states.</li>
            <li>Confirm whether ARCON licensing, vetting or approval applies to Pinkles' advertising activities and campaigns.</li>
            <li>Create separate written forms for: interior design; cleaning; fashion sales/custom work; spa; event/seminar tickets; short-let; property agency mandate; conveyance/transport; brand ambassador; employee; contractor.</li>
            <li>Create an operational refund register, client-money ledger, incident log, complaints log, staff training record, privacy request log and retention schedule.</li>
            <li>Confirm tax/VAT invoicing and remittance obligations with a qualified tax professional; do not state a tax rate or exemption without checking current law and the transaction.</li>
            <li>Review insurance: public liability, professional indemnity where relevant, employer/workplace obligations, motor/transport, property/custody and event cover as applicable.</li>
            <li>Train staff on customer service, data protection, anti-bribery, safety, handling client money, safeguarding, access keys and complaints.</li>
            <li>Display prices, key conditions and cancellation/refund terms before customers pay; retain evidence of acceptance.</li>
          </BulletList>

          <ClauseTitle>12.2 Principal legal and regulatory sources to verify</ClauseTitle>
          <Paragraph>
            The following are starting points for legal review, not an exhaustive list. Always check the current legislation, amendments, state-specific rules and official guidance that apply to the actual service and location:
          </Paragraph>
          <BulletList>
            <li>
              Federal Competition and Consumer Protection Act 2018 (FCCPA), including consumer rights, fair dealing, quality, cancellation/returns and prohibited unfair terms. Official FCCPC resources:{" "}
              <a href="https://fccpc.gov.ng/resources-library/fccpa/" target="_blank" rel="noopener noreferrer">
                https://fccpc.gov.ng/resources-library/fccpa/
              </a>{" "}
              and{" "}
              <a href="https://fccpc.gov.ng/consumers/consumer-rights-responsibilities/rights-responsibilities/" target="_blank" rel="noopener noreferrer">
                https://fccpc.gov.ng/consumers/consumer-rights-responsibilities/rights-responsibilities/
              </a>
            </li>
            <li>
              Nigeria Data Protection Act 2023 and applicable NDPC regulations/guidance. Official NDPC resource:{" "}
              <a href="https://ndpc.gov.ng/download/nigeria-data-protection-act-2023" target="_blank" rel="noopener noreferrer">
                https://ndpc.gov.ng/download/nigeria-data-protection-act-2023
              </a>
            </li>
            <li>
              Constitution of the Federal Republic of Nigeria 1999 (as amended), including privacy protections, and applicable data protection requirements.
            </li>
            <li>
              Labour Act and other applicable federal/state employment, minimum wage, pension, compensation, tax, workplace safety and anti-discrimination laws. Official reference portal:{" "}
              <a href="https://nipc.gov.ng/external-resources/labour-act" target="_blank" rel="noopener noreferrer">
                https://nipc.gov.ng/external-resources/labour-act
              </a>
            </li>
            <li>
              Lagos State Real Estate Regulatory Authority Law 2021 and current LASRERA rules for relevant Lagos estate agency activity; check state law for properties outside Lagos. Official legal reform reference:{" "}
              <a href="https://www.lawrecom.lg.gov.ng/past-inquiries.php" target="_blank" rel="noopener noreferrer">
                https://www.lawrecom.lg.gov.ng/past-inquiries.php
              </a>
            </li>
            <li>
              Advertising Regulatory Council of Nigeria Act 2022, current ARCON registration/licensing requirements, advertising code and any applicable pre-exposure vetting. Official source:{" "}
              <a href="https://advertcouncil.gov.ng/" target="_blank" rel="noopener noreferrer">
                https://advertcouncil.gov.ng/
              </a>
            </li>
            <li>
              Applicable state tenancy, planning/building, environmental health, sanitation, transport, hospitality, public health, spa/beauty, consumer product, tax, local-government and event/venue requirements.
            </li>
          </BulletList>
        </PolicySection>
      </Container>
    </SectionWrapper>
  );
}