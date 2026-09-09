import type { Section } from "../policies";

export const privacyPolicySections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: [
      "This Privacy Policy explains how Sparkview collects, uses, stores, discloses and protects personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). We are committed to managing personal information openly and transparently.",
      "This policy forms part of the Terms of Service and should be read together with the Cookie Policy, the Data Security and Information Handling Policy, and the Record Retention and Deletion Policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: [
      { heading: "7.1 Information we collect" },
      "Depending on how you use the Services, we may collect:",
      [
        "personal details such as your name, email address and business name;",
        "account credentials and security settings;",
        "financial and transactional data uploaded by users, including Client Data;",
        "Bank Feed Data accessed through Fiskil;",
        "AI Memory data;",
        "depreciation and fixed asset data; and",
        "usage data and technical logs, including IP addresses and timestamps.",
      ],
      "We do not sell personal information.",
      { heading: "7.2 How we collect information" },
      "We collect information directly from you when you create an account or contact us, automatically as you use the Services, and, for Bank Feed Data, through Fiskil with the relevant consent under applicable banking data-sharing arrangements, including the Consumer Data Right.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    body: [
      { heading: "7.3 How we use information" },
      "We use personal information to:",
      [
        "provide, maintain, secure and improve the Services;",
        "process reconciliations, bank feeds and reports, including BAS, profit and loss and depreciation schedules;",
        "improve categorisation through AI Memory;",
        "communicate service and account updates; and",
        "meet our legal obligations.",
      ],
      "We use personal information for the primary purpose for which it was collected, and for related purposes you would reasonably expect.",
      { heading: "7.4 AI processing and automated handling" },
      "Uploaded data may be processed by AI systems to produce Output, including bank feed categorisation, AI Memory adjustments and automated reporting. Output is generated programmatically and is not routinely reviewed by Sparkview staff, except where needed for support, security or legal reasons.",
      "The Services assist professional users and do not make decisions that produce legal or similarly significant effects on individuals without your review. We do not use your data to train generalised AI models. As transparency requirements relating to automated decision-making take effect, we will update this policy accordingly.",
    ],
  },
  {
    id: "disclosure",
    title: "Disclosure and overseas transfers",
    body: [
      { heading: "7.5 Disclosure" },
      "We may disclose personal information to:",
      [
        "service providers and infrastructure partners, including cloud hosting, Fiskil for bank feeds, and AI infrastructure and analytics providers, each engaged under confidentiality and security obligations;",
        "our professional advisers; and",
        "regulators, courts or authorities where required or authorised by law.",
      ],
      "We do not sell personal information.",
      { heading: "7.6 Overseas disclosure" },
      "Some service providers may store or process information outside Australia, including in countries where our cloud and infrastructure providers operate. Where this occurs, we take reasonable steps to ensure that recipients handle information consistently with the APPs.",
    ],
  },
  {
    id: "security-and-retention",
    title: "Data security and retention",
    body: [
      { heading: "7.7 Data security" },
      "We encrypt personal information in transit and at rest, apply role-based access controls and other technical and organisational measures, and follow industry-standard practices, as described in the Data Security and Information Handling Policy. Despite these safeguards, no system is completely secure.",
      { heading: "7.8 Data retention" },
      "We retain personal information only for as long as needed to provide the Services or to meet our legal obligations, and then take reasonable steps to destroy or de-identify it, as described in the Record Retention and Deletion Policy. This includes Bank Feed Data, AI Memory data and depreciation records.",
    ],
  },
  {
    id: "your-rights",
    title: "Access, correction and marketing",
    body: [
      { heading: "7.9 Access and correction" },
      "You may request access to, or correction of, your personal information by contacting us. We will respond within a reasonable time, generally within 30 days, and may need to verify your identity before acting on a request. Some requests may be subject to exceptions permitted by law.",
      { heading: "7.10 Direct marketing" },
      "Where we send marketing communications, you can opt out at any time using the unsubscribe function in the message or by contacting us.",
      { heading: "7.11 Cookies and analytics" },
      "We use cookies and similar technologies as described in the Cookie Policy.",
    ],
  },
  {
    id: "complaints-and-contact",
    title: "Complaints, changes and contact",
    body: [
      { heading: "7.12 Complaints" },
      "If you have a privacy concern, contact us at hello@accountantgenie.com.au, marked for the attention of the Privacy Officer. We will acknowledge your complaint and investigate it. If you are not satisfied with our response, you may complain to the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au or on 1300 363 992.",
      { heading: "7.13 Changes" },
      "We may update this Privacy Policy from time to time. Section 1.16 of the Terms of Service applies, and continued use of the Services after an update takes effect constitutes acceptance of the updated policy.",
      { heading: "7.14 Contact" },
      "For privacy enquiries, contact us at hello@accountantgenie.com.au.",
    ],
  },
];
