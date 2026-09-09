import type { Section } from "../policies";

export const acceptableUseSections: Section[] = [
  {
    id: "purpose",
    title: "Purpose",
    body: [
      { heading: "2.1 Purpose" },
      "This Acceptable Use Policy sets out what you can and cannot do when using Sparkview. It exists to keep the Services safe, lawful and reliable for every customer, and it forms part of the Terms of Service.",
      "By using the Services you agree to follow this policy, and you are responsible for ensuring that anyone who accesses the Services through your account does the same.",
    ],
  },
  {
    id: "prohibited-conduct",
    title: "Prohibited conduct",
    body: [
      { heading: "2.2 Prohibited conduct" },
      "When using the Services, you must not:",
      [
        "upload unlawful, infringing or unauthorised data, or any data you do not have the consent or authority to process;",
        "reverse engineer, copy, scrape, or attempt to extract the AI models or the underlying technology behind the Services;",
        "use Output to mislead clients, regulators or any other person;",
        "interfere with, disrupt or attempt to manipulate the AI Memory feature, the bank feed systems, or any financial data interface, including Fiskil;",
        "circumvent or test our security controls, gain or attempt to gain unauthorised access, or disrupt or degrade the Services;",
        "introduce malicious code, malware or unlawful material into the Services; or",
        "use the Services to provide unlicensed professional services, or in breach of your professional or legal obligations.",
      ],
      "If you are unsure whether a particular use is permitted, contact us before proceeding.",
    ],
  },
  {
    id: "enforcement",
    title: "Enforcement",
    body: [
      { heading: "2.3 Enforcement" },
      "A breach of this policy may result in suspension or termination of your access under section 1.17 of the Terms of Service. Where a breach can be remedied and the circumstances reasonably allow, we will give you notice and an opportunity to fix it first. We may act immediately where necessary to address a serious security, legal or integrity risk.",
      "You remain liable for any misuse of the Services under your account, including after your account is suspended or terminated.",
    ],
  },
];
