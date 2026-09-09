import type { Section } from "../policies";

export const dataSecuritySections: Section[] = [
  {
    id: "overview",
    title: "Overview and purpose",
    body: [
      "This policy forms part of the Terms of Service and the Privacy Policy. It outlines how Sparkview collects, stores, protects, processes and manages user and client information.",
      "We are committed to commercially reasonable administrative, technical and physical safeguards designed to protect data against unauthorised access, misuse, interference, loss, corruption, alteration, disclosure or destruction, consistent with Australian law, including the Privacy Act 1988 (Cth), the Australian Privacy Principles, the Notifiable Data Breaches scheme and the Electronic Transactions Act 1999 (Cth).",
      { heading: "10.1 Purpose" },
      "The purpose of this policy is to:",
      [
        "protect data held in the Services;",
        "maintain the confidentiality, integrity and availability of that data;",
        "set security obligations for users, staff, contractors and authorised third parties;",
        "support compliance and security best practice; and",
        "minimise risks from cyber threats, data breaches, fraud and system compromise.",
      ],
    ],
  },
  {
    id: "security-measures",
    title: "Security measures",
    body: [
      { heading: "10.2 Security measures" },
      "We implement layered controls and commercially reasonable safeguards across the data lifecycle. These may include, without limitation:",
      {
        terms: [
          {
            term: "Encryption and secure transmission",
            definition:
              "Encryption of data at rest and in transit; secure HTTPS and TLS communications; encrypted storage and backups; and secure API authentication, including tokenised authentication and encrypted ingestion of bank feed data via Fiskil.",
          },
          {
            term: "Access controls and authentication",
            definition:
              "Role-based access controls; multi-factor authentication; secure credential management; and session and account monitoring.",
          },
          {
            term: "Monitoring and threat detection",
            definition:
              "Continuous monitoring; automated detection of suspicious activity; security logging and audit trails; and intrusion detection and incident response.",
          },
          {
            term: "Testing and maintenance",
            definition:
              "Internal security reviews and vulnerability assessments; independent penetration testing where appropriate; and timely deployment of patches and updates.",
          },
          {
            term: "Data handling and storage",
            definition:
              "Segregation of sensitive data where appropriate; controlled production access; secure storage and backup procedures; and data minimisation and retention controls.",
          },
        ],
      },
      "We may modify or enhance our security measures at any time to address evolving threats or operational requirements.",
    ],
  },
  {
    id: "user-responsibilities",
    title: "User responsibilities",
    body: [
      { heading: "10.3 User responsibilities" },
      "Security is a shared responsibility. When using the Services, you must:",
      [
        "maintain secure credentials and never share them;",
        "enable multi-factor authentication where available;",
        "securely store any records you export or download;",
        "restrict unauthorised access to your devices and accounts;",
        "promptly notify us of any suspected unauthorised access, security incident, phishing attempt or data breach;",
        "ensure that information you upload does not contain malicious code or unlawful material; and",
        "comply with our reasonable security instructions.",
      ],
      "You are responsible for activity under your account that results from a failure to maintain adequate security.",
    ],
  },
  {
    id: "information-handling",
    title: "Information handling",
    body: [
      { heading: "10.4 Information handling" },
      "Information may be collected and processed to provide the Services, including user data, system logs, processed information, Bank Feed Data received via Fiskil, AI Memory data, and depreciation schedules and fixed asset registers.",
      "That information may be:",
      [
        "stored in secure hosted environments;",
        "retained for legal, compliance, backup, operational and audit purposes;",
        "accessed by authorised personnel, contractors or providers strictly on a need-to-know basis; and",
        "disclosed where required by law.",
      ],
      "We take reasonable steps to keep personal information accurate, and to protect it against misuse, interference and loss.",
    ],
  },
  {
    id: "security-commitments",
    title: "Security commitments and incident response",
    body: [
      { heading: "10.5 Security commitments" },
      "Sparkview is committed to:",
      [
        "alignment with ISO 27001 security principles where commercially appropriate;",
        "compliance with applicable Australian privacy and data protection laws;",
        "regular internal reviews and penetration testing where applicable;",
        "ongoing monitoring and incident response;",
        "secure, current encryption standards; and",
        "compliance with applicable breach-notification obligations.",
      ],
      { heading: "10.6 Data breach and incident response" },
      "We maintain procedures to identify, investigate, contain, document and remediate suspected security incidents, as described in the Incident Response and Breach Notification Policy. You must promptly report any suspected incident or unauthorised access involving your account.",
    ],
  },
];
