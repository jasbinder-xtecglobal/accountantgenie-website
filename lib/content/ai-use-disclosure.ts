import type { Section } from "../policies";

export const aiUseDisclosureSections: Section[] = [
  {
    id: "purpose",
    title: "Purpose and how we use AI",
    body: [
      { heading: "4.1 Purpose" },
      "Sparkview uses artificial intelligence to assist professional users with everyday reconciliation and reporting work. This policy explains what our AI does, what its Output is and is not, and what we expect from you when you rely on it. It forms part of the Terms of Service.",
      "AI features are used across the Services for:",
      [
        "transaction reconciliation and matching against your records;",
        "BAS preparation, including labels G1, 1A and 1B;",
        "profit and loss reporting;",
        "bank feed categorisation;",
        "the AI Memory learning feature; and",
        "depreciation and fixed asset calculations.",
      ],
    ],
  },
  {
    id: "nature-of-output",
    title: "Nature of Output",
    body: [
      { heading: "4.2 Nature of Output" },
      "Output is assistive only and is not advice. It is probabilistic, may include errors or omissions, and depends on the quality and completeness of the data you provide. Output may reflect live bank feed data, adjustments learned through AI Memory, and depreciation logic configured in your account.",
      "We design the Services for accuracy and reliability, but we do not guarantee that Output is accurate, complete or suitable in every circumstance.",
    ],
  },
  {
    id: "human-review",
    title: "Human review and your responsibility",
    body: [
      { heading: "4.3 Human review" },
      "You must validate and review all Output before it is relied on, submitted, lodged or used for client advice. Review must be carried out by a competent person with the appropriate professional knowledge.",
      { heading: "4.4 User responsibility" },
      "You remain fully responsible for any decision made using Output. Subject to your non-excludable rights under the Australian Consumer Law, we are not liable for loss arising from reliance on Output without adequate review.",
    ],
  },
  {
    id: "ai-memory",
    title: "AI Memory",
    body: [
      { heading: "4.5 AI Memory" },
      "AI Memory stores the adjustments you approve, such as categorisation and reconciliation decisions, to improve future Output for your account. It is optional and can be configured to operate at client level or firm-wide level.",
      "AI Memory does not make decisions about your clients without your review. AI Memory data is stored in Sparkview's database, is held within your account, and is not shared with or made available to other customers. We do not use AI Memory data to train generalised or foundational AI models.",
    ],
  },
  {
    id: "model-training",
    title: "Use of data for model training",
    body: [
      { heading: "4.6 Use of data for model training" },
      "We do not use your Customer Data or Client Data to train generalised or foundational AI models.",
      "Where AI processing is carried out using third-party AI infrastructure providers, we engage those providers under terms that prohibit them from using your data to train their models.",
    ],
  },
  {
    id: "changes-and-limitations",
    title: "Changes and limitations",
    body: [
      { heading: "4.7 Changes and limitations" },
      "AI features may be updated, refined or replaced over time as the technology and our Services evolve. We will keep this policy current as those changes occur.",
      "AI does not replace professional judgment, and it does not replace your compliance obligations under tax law or professional standards.",
    ],
  },
];
