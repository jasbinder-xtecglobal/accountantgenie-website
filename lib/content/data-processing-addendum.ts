import type { Section } from "../policies";

export const dataProcessingAddendumSections: Section[] = [
  {
    id: "roles",
    title: "Roles and scope",
    body: [
      "This Data Processing Addendum (DPA) explains how Sparkview processes Customer Data on your behalf. It forms part of the Terms of Service and applies whenever you upload or generate personal information through the Services.",
      { heading: "9.1 Roles" },
      "For personal information you upload, including Client Data, you are the controlling APP entity and are responsible for that information under the Privacy Act 1988 (Cth). Sparkview acts as a processor on your behalf and processes that information only on your documented instructions, which include the Terms of Service and your use of the Services.",
      { heading: "9.2 Processing activities" },
      "Our processing of Customer Data includes:",
      [
        "collecting, storing and processing Customer Data to provide the Services;",
        "generating Output;",
        "processing Bank Feed Data received through Fiskil;",
        "maintaining AI Memory datasets for your account;",
        "processing depreciation and fixed asset data; and",
        "maintaining logs, analytics and security data.",
      ],
    ],
  },
  {
    id: "our-obligations",
    title: "Our obligations",
    body: [
      { heading: "9.3 Our obligations" },
      "When processing Customer Data on your behalf, we will:",
      [
        "process Customer Data only to provide the Services and as you instruct;",
        "apply appropriate technical and organisational security measures, as described in the Data Security and Information Handling Policy;",
        "ensure that our personnel who access Customer Data are bound by confidentiality obligations; and",
        "assist you, so far as is reasonable, with your access, correction, security and breach-notification obligations.",
      ],
    ],
  },
  {
    id: "sub-processors",
    title: "Sub-processors and cross-border transfers",
    body: [
      { heading: "9.4 Sub-processors" },
      "We may engage sub-processors to help deliver the Services, including cloud hosting providers, Fiskil for bank feeds, and AI infrastructure providers. Each sub-processor is engaged under written terms that impose data-protection and confidentiality obligations comparable to those in this DPA. We remain responsible for the processing they perform on our behalf.",
      { heading: "9.5 Cross-border transfers" },
      "Customer Data may be processed outside Australia, including by infrastructure providers such as Fiskil and our cloud and AI providers. Where this occurs, we apply appropriate safeguards consistent with the Australian Privacy Principles.",
    ],
  },
  {
    id: "breach-return-deletion",
    title: "Breach assistance, return and deletion",
    body: [
      { heading: "9.6 Breach assistance" },
      "We will notify you without undue delay after becoming aware of a data breach affecting your Customer Data, and will assist you in meeting your own obligations, as described in the Incident Response and Breach Notification Policy.",
      { heading: "9.7 Return and deletion" },
      "On termination of your subscription, we handle Customer Data, including its return, deletion or de-identification, as set out in the Record Retention and Deletion Policy.",
    ],
  },
  {
    id: "compliance",
    title: "Compliance",
    body: [
      { heading: "9.8 Compliance" },
      "We comply with the Australian Privacy Principles in our handling of Customer Data, and will assist you, so far as is reasonable, to meet your own obligations under applicable privacy laws.",
    ],
  },
];
