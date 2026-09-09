import type { Section } from "../policies";

export const thirdPartyServicesSections: Section[] = [
  {
    id: "integrations",
    title: "Integrations",
    body: [
      { heading: "13.1 Integrations" },
      "To deliver the Services, Sparkview integrates with a small number of trusted third-party infrastructure, analytics and data providers. These currently include:",
      [
        "Fiskil, our accredited data provider, for live bank feeds;",
        "cloud hosting providers that store and run the platform; and",
        "AI infrastructure providers that support the AI features described in the AI Use and Disclosure Policy.",
      ],
      "Each provider is engaged under written terms that impose confidentiality and data-protection obligations, as described in the Data Processing Addendum. This policy forms part of the Terms of Service.",
    ],
  },
  {
    id: "third-party-liability",
    title: "Third-party liability",
    body: [
      { heading: "13.2 Third-party liability" },
      "The availability, security and performance of third-party services are outside our direct control. Subject to the Australian Consumer Law and to sections 1.20 and 1.22 of the Terms of Service, Sparkview is not liable for third-party errors, downtime, misconduct, unlawful conduct, security incidents or data issues that are outside our reasonable control.",
      "Where a third-party issue affects the Services, we will work with the provider to restore normal operation as quickly as practicable and will keep you informed where your account or data is affected.",
    ],
  },
  {
    id: "consent",
    title: "Consent",
    body: [
      { heading: "13.3 Consent" },
      "By using the Services, you consent to third-party processing of your data to the extent necessary to deliver the Services. Your use of a third-party service, such as connecting a bank feed through Fiskil, may also be subject to that provider's own terms and privacy policy.",
    ],
  },
];
