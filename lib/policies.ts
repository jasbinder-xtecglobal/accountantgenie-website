/* ──────────────────────────────────────────────
   Policies
   Single source of truth for /policies and
   /policies/[slug]. Add a policy here and both
   the hub card and its page appear automatically.

   `body` accepts paragraphs (string), bullet
   lists (string[]) and term lists ({ terms }).
   A policy with no sections renders a "being
   finalised" notice.
   ────────────────────────────────────────────── */

export const CONTACT_EMAIL = "hello@accountantgenie.com.au";

export type Term = { term: string; definition: string };
/** A paragraph, a bullet list, a sub-heading, or a glossary-style list of terms. */
export type Block = string | string[] | { terms: Term[] } | { heading: string };
export type Section = { id: string; title: string; body: Block[] };

export type PolicyIcon =
  | "book"
  | "file"
  | "shield"
  | "badge"
  | "sparkles"
  | "alert"
  | "card"
  | "lock"
  | "cookie"
  | "database"
  | "key"
  | "siren"
  | "archive"
  | "plug"
  | "flask"
  | "scale";

export type Policy = {
  slug: string;
  title: string;
  /** Icon shown on the hub card. Mapped to a Lucide icon in PoliciesPage. */
  icon: PolicyIcon;
  /** Short description shown on the hub card and in page metadata. */
  summary: string;
  lastUpdated: string;
  sections: Section[];
};

import { termsOfServiceSections } from "./content/terms-of-service";
import { acceptableUseSections } from "./content/acceptable-use";
import { professionalEligibilitySections } from "./content/professional-eligibility";
import { aiUseDisclosureSections } from "./content/ai-use-disclosure";
import { disclaimerSections } from "./content/disclaimer";
import { billingRefundsSections } from "./content/billing-refunds";
import { privacyPolicySections } from "./content/privacy-policy";
import { cookiePolicySections } from "./content/cookie-policy";
import { dataProcessingAddendumSections } from "./content/data-processing-addendum";
import { dataSecuritySections } from "./content/data-security";
import { incidentResponseSections } from "./content/incident-response";
import { recordRetentionSections } from "./content/record-retention";
import { thirdPartyServicesSections } from "./content/third-party-services";
import { betaEarlyAccessSections } from "./content/beta-early-access";
import { limitationOfLiabilitySections } from "./content/limitation-of-liability";

export const policies: Policy[] = [
  {
    slug: "glossary",
    icon: "book",
    title: "Glossary & Key Terms",
    summary:
      "Plain-language explanations of the key terms used in Sparkview's legal policies, including BAS, AI Memory, bank feeds, reconciliation, CDR and more.",
    lastUpdated: "9 September 2026",
    sections: [
      {
        id: "about-this-glossary",
        title: "About this glossary",
        body: [
          "This glossary explains the key terms used across Sparkview's policies in plain language, so the agreement is easier to follow.",
          "It is a guide only and does not form part of the agreement. If an explanation here differs from a definition in a policy, the policy applies.",
        ],
      },
      {
        id: "terms-a-c",
        title: "A to C",
        body: [
          {
            terms: [
              {
                term: "ACL (Australian Consumer Law)",
                definition:
                  "Australia's national consumer protection law. It gives you certain rights that a contract cannot take away.",
              },
              {
                term: "AI Memory",
                definition:
                  "An optional Sparkview feature that remembers the categorisation and reconciliation choices you approve, so future suggestions become more accurate. AI Memory data is stored in Sparkview's database and stays within your account.",
              },
              {
                term: "APP (Australian Privacy Principles)",
                definition:
                  "The rules under the Privacy Act 1988 (Cth) that set out how organisations must collect, use, store and disclose personal information.",
              },
              {
                term: "BAS (Business Activity Statement)",
                definition:
                  "The form a business lodges with the Australian Taxation Office (ATO) to report GST and certain other tax amounts.",
              },
              {
                term: "Bank feed",
                definition:
                  "A secure connection that brings your bank transaction data into Sparkview. Bank feeds are provided through Fiskil, our accredited data provider.",
              },
              {
                term: "CDR (Consumer Data Right)",
                definition:
                  "Australia's open banking framework. It lets you share your banking data, with your consent, with accredited providers.",
              },
              {
                term: "Client Data",
                definition: "Information about your clients that you upload to, or process through, Sparkview.",
              },
              {
                term: "Consumer guarantee",
                definition:
                  "A right under the Australian Consumer Law, such as the right to have a service provided with due care and skill, that cannot be excluded by a contract.",
              },
              {
                term: "Customer Data",
                definition:
                  "All information you put into or generate in Sparkview, including Client Data, bank feed data, AI Memory data, and asset and depreciation data.",
              },
            ],
          },
        ],
      },
      {
        id: "terms-d-f",
        title: "D to F",
        body: [
          {
            terms: [
              {
                term: "Data Processing Addendum (DPA)",
                definition:
                  "The part of these policies that explains how Sparkview handles data on behalf of your firm, including our security and sub-processor commitments.",
              },
              {
                term: "Depreciation",
                definition:
                  "The reduction in value of a business asset over time. Sparkview's depreciation module helps you calculate and record it.",
              },
              {
                term: "Fiskil",
                definition:
                  "Sparkview's accredited banking data provider. Fiskil retrieves your bank transaction data with your consent, so Sparkview never connects to your bank directly.",
              },
              {
                term: "Force majeure",
                definition:
                  "Events outside a party's reasonable control, such as natural disasters, infrastructure outages, cyber attacks or changes in law.",
              },
            ],
          },
        ],
      },
      {
        id: "terms-i-o",
        title: "I to O",
        body: [
          {
            terms: [
              {
                term: "Indemnify",
                definition:
                  "To agree to cover another party's losses or reasonable legal costs in defined situations.",
              },
              {
                term: "NDB (Notifiable Data Breaches)",
                definition:
                  "The scheme under the Privacy Act that requires certain data breaches to be reported to the regulator and to the people affected.",
              },
              {
                term: "OAIC (Office of the Australian Information Commissioner)",
                definition:
                  "Australia's federal privacy regulator. You can contact the OAIC at oaic.gov.au or on 1300 363 992.",
              },
              {
                term: "Output",
                definition:
                  "Any result Sparkview produces, such as a categorisation, calculation, reconciliation or report. Output always needs your review before it is relied on or lodged.",
              },
            ],
          },
        ],
      },
      {
        id: "terms-p-s",
        title: "P to S",
        body: [
          {
            terms: [
              {
                term: "Reconciliation",
                definition:
                  "The process of matching your bank transactions against your accounting records so that the two agree.",
              },
              {
                term: "Sub-processor",
                definition:
                  "A third party that Sparkview engages to help process data on your behalf, such as a hosting or AI infrastructure provider.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "terms-of-service",
    icon: "file",
    title: "Terms of Service",
    summary:
      "The terms that govern your use of Sparkview, including account access, AI Output, bank feeds, AI Memory, and your rights under Australian Consumer Law.",
    lastUpdated: "15 June 2026",
    sections: termsOfServiceSections,
  },
  {
    slug: "acceptable-use",
    icon: "shield",
    title: "Acceptable Use Policy (AUP)",
    summary:
      "What you can and cannot do when using Sparkview, including rules around data uploads, AI Memory, bank feeds, security, and professional conduct.",
    lastUpdated: "15 June 2026",
    sections: acceptableUseSections,
  },
  {
    slug: "professional-eligibility",
    icon: "badge",
    title: "Professional Eligibility & Authority Policy",
    summary:
      "Who can use Sparkview, the professional registrations and qualifications required, and your obligations around client consent and data authority.",
    lastUpdated: "15 June 2026",
    sections: professionalEligibilitySections,
  },
  {
    slug: "ai-use-disclosure",
    icon: "sparkles",
    title: "AI Use & Disclosure Policy",
    summary:
      "How Sparkview uses AI for reconciliation, BAS preparation and reporting, how AI Memory works, and what your review obligations are.",
    lastUpdated: "15 June 2026",
    sections: aiUseDisclosureSections,
  },
  {
    slug: "disclaimer",
    icon: "alert",
    title: "Disclaimer Policy",
    summary:
      "Sparkview is an AI reconciliation and reporting platform, not lodgement software. Read our disclaimer on Output review, ATO responsibility, and bank feed limitations.",
    lastUpdated: "15 June 2026",
    sections: disclaimerSections,
  },
  {
    slug: "billing-refunds",
    icon: "card",
    title: "Billing and Refund Policy",
    summary:
      "How Sparkview billing works, when refunds apply, how renewals and cancellations are handled, and your rights under Australian Consumer Law.",
    lastUpdated: "15 June 2026",
    sections: billingRefundsSections,
  },
  {
    slug: "privacy-policy",
    icon: "lock",
    title: "Privacy Policy",
    summary:
      "How Sparkview collects, uses, stores and protects your personal information under the Australian Privacy Principles, including Bank Feed Data and AI Memory.",
    lastUpdated: "15 June 2026",
    sections: privacyPolicySections,
  },
  {
    slug: "cookie-policy",
    icon: "cookie",
    title: "Cookie Policy",
    summary: "What cookies Sparkview uses, why we use them, and how you can manage them in your browser.",
    lastUpdated: "15 June 2026",
    sections: cookiePolicySections,
  },
  {
    slug: "data-processing-addendum",
    icon: "database",
    title: "Data Processing Addendum (DPA)",
    summary:
      "How Sparkview processes your firm's data on your behalf, including sub-processor obligations, security standards, and data handling commitments.",
    lastUpdated: "15 June 2026",
    sections: dataProcessingAddendumSections,
  },
  {
    slug: "data-security",
    icon: "key",
    title: "Data Security & Information Handling Policy",
    summary:
      "How Sparkview secures your financial and client data, including encryption, access controls, monitoring, your security responsibilities, and incident handling.",
    lastUpdated: "15 June 2026",
    sections: dataSecuritySections,
  },
  {
    slug: "incident-response",
    icon: "siren",
    title: "Incident Response & Breach Notification Policy",
    summary:
      "How Sparkview detects, responds to, and notifies you of security incidents and data breaches under Australia's Notifiable Data Breaches scheme.",
    lastUpdated: "15 June 2026",
    sections: incidentResponseSections,
  },
  {
    slug: "record-retention",
    icon: "archive",
    title: "Record Retention & Deletion Policy",
    summary:
      "How long Sparkview keeps your data, how AI Memory data is retained, what happens on account closure, and how to request deletion of your records.",
    lastUpdated: "15 June 2026",
    sections: recordRetentionSections,
  },
  {
    slug: "third-party-services",
    icon: "plug",
    title: "Third-Party Services & Integrations Policy",
    summary:
      "How Sparkview works with third parties including Fiskil for bank feeds, and our liability position on third-party availability and conduct.",
    lastUpdated: "15 June 2026",
    sections: thirdPartyServicesSections,
  },
  {
    slug: "beta-early-access",
    icon: "flask",
    title: "Beta & Early Access Policy",
    summary:
      "Terms for using Sparkview beta features, including limitations, feedback, service levels, and the modified liability position for pre-release functionality.",
    lastUpdated: "15 June 2026",
    sections: betaEarlyAccessSections,
  },
  {
    slug: "limitation-of-liability",
    icon: "scale",
    title: "Limitation of Liability & Risk Allocation Policy",
    summary:
      "How liability is allocated between Sparkview and users, including the cap on our liability, third-party exclusions, and your responsibility for reviewing Output before lodgement.",
    lastUpdated: "15 June 2026",
    sections: limitationOfLiabilitySections,
  },
];

export function getPolicy(slug: string): Policy | undefined {
  return policies.find((p) => p.slug === slug);
}
