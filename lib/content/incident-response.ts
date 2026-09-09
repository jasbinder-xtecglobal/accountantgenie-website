import type { Section } from "../policies";

export const incidentResponseSections: Section[] = [
  {
    id: "purpose",
    title: "Purpose",
    body: [
      { heading: "11.1 Purpose" },
      "This policy establishes Sparkview's procedures for responding to suspected or confirmed security incidents, cyber threats, unauthorised access events and eligible data breaches. It forms part of the Terms of Service and should be read together with the Data Security and Information Handling Policy and the Privacy Policy.",
    ],
  },
  {
    id: "reporting-obligations",
    title: "Reporting obligations",
    body: [
      { heading: "11.2 Reporting obligations" },
      "Users, contractors, staff and authorised representatives must promptly report:",
      [
        "suspected unauthorised access to systems or accounts;",
        "phishing attempts or credential compromise;",
        "malware, ransomware or other suspicious activity;",
        "accidental disclosure of confidential information; or",
        "any event reasonably suspected to compromise the confidentiality, integrity or availability of data.",
      ],
      "Reports should be made as soon as practicable through our designated support or security channels, by email to hello@accountantgenie.com.au. Please include as much detail as you can, such as what happened, when, and which accounts or data may be affected.",
    ],
  },
  {
    id: "investigation-and-response",
    title: "Investigation and response",
    body: [
      { heading: "11.3 Investigation and response" },
      "On becoming aware of a suspected incident, we may:",
      [
        "investigate and assess its severity and scope;",
        "restrict or suspend affected systems or accounts;",
        "preserve evidence and system logs;",
        "engage external cybersecurity specialists where necessary;",
        "undertake containment and remediation; and",
        "document the incident and the corrective actions taken.",
      ],
      "We will keep you informed where an incident affects your account or data.",
    ],
  },
  {
    id: "breach-notification",
    title: "Breach notification",
    body: [
      { heading: "11.4 Breach notification" },
      "Where required under the Notifiable Data Breaches scheme in Part IIIC of the Privacy Act 1988 (Cth), we will assess a suspected eligible data breach, taking all reasonable steps to complete that assessment within 30 days of becoming aware of grounds to suspect it.",
      "Where there are reasonable grounds to believe an eligible data breach has occurred, we will notify affected individuals and the Office of the Australian Information Commissioner (OAIC) as soon as practicable. Notifications may include:",
      [
        "the nature of the breach;",
        "the kinds of information affected;",
        "recommended steps individuals can take to protect themselves; and",
        "the steps we have taken in response.",
      ],
      "Where you are responsible for affected Client Data as the controlling APP entity, we will assist you to meet your own notification obligations.",
    ],
  },
  {
    id: "limitation",
    title: "Limitation",
    body: [
      { heading: "11.5 Limitation" },
      "While we implement commercially reasonable safeguards, you acknowledge that no system is completely secure, that incidents may occur despite reasonable precautions, and that internet-based services carry inherent risks.",
      "To the maximum extent permitted by law, and subject to the Australian Consumer Law, we exclude liability for indirect, incidental, consequential or unforeseeable loss arising from cybersecurity incidents, unauthorised access, service interruptions or data breaches, except where that liability cannot lawfully be excluded.",
    ],
  },
];
