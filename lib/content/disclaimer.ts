import type { Section } from "../policies";

export const disclaimerSections: Section[] = [
  {
    id: "scope",
    title: "Scope and platform purpose",
    body: [
      "This Disclaimer Policy applies to all users of the Services. It clarifies the scope and limitations of the Services and the professional responsibilities that come with using them. It forms part of the Terms of Service.",
      { heading: "5.1 Platform purpose" },
      "Sparkview assists professional users with accounting tasks, including transaction reconciliation, BAS preparation (labels G1, 1A and 1B) and profit and loss reporting. The Services also include live bank feeds provided through Fiskil, the AI Memory feature, and a depreciation and fixed asset module.",
      "The Services are a preparation and assistance tool. They are not a substitute for professional judgment.",
    ],
  },
  {
    id: "user-responsibility",
    title: "User responsibility",
    body: [
      { heading: "5.2 User responsibility" },
      "Final review responsibility rests with you, whether you are an accountant, BAS agent, tax agent, bookkeeper or business owner. You must validate, review and approve all Output before it is submitted or used, including:",
      [
        "transactions imported through bank feeds;",
        "categorisations influenced by AI Memory; and",
        "depreciation and fixed asset calculations.",
      ],
      "You are solely responsible for your regulatory, legal and professional compliance.",
    ],
  },
  {
    id: "ai-output",
    title: "AI Output",
    body: [
      { heading: "5.3 AI Output" },
      "AI-generated Output is an assistance tool only. Output is probabilistic and must always undergo human review by a competent person. Although the Services are designed for reliability and efficiency, we do not guarantee that Output is accurate or complete in all circumstances.",
    ],
  },
  {
    id: "lodgement-and-ato",
    title: "Lodgement and dealings with the ATO",
    body: [
      { heading: "5.4 Lodgement and dealings with the ATO" },
      "Sparkview is not lodgement software. It does not lodge, submit, transmit or file tax returns, activity statements, reports or any other document with the Australian Taxation Office (ATO) or any other authority on your behalf. Sparkview prepares drafts, calculations, reconciliations and reports for your review.",
      "You are solely responsible for checking, verifying and approving all Output, and for any return, statement or lodgement you make.",
      "To the maximum extent permitted by law, Sparkview is not responsible or liable for any review, audit, investigation, amendment, default assessment, interest charge, penalty, fine or other intervention by the ATO or any other authority, or for any decision, position or lodgement made by you or your advisers. You should obtain advice from a registered tax agent, BAS agent or other qualified professional where appropriate.",
    ],
  },
  {
    id: "no-liability",
    title: "No liability for professional decisions",
    body: [
      { heading: "5.5 No liability for professional decisions" },
      "Subject to the Australian Consumer Law, Sparkview is not liable for losses, penalties or errors resulting from reliance on Output without proper review.",
      "You indemnify Sparkview against claims arising from non-compliance, incorrect reporting or professional mistakes, on the terms set out in section 1.21 of the Terms of Service.",
    ],
  },
  {
    id: "bank-feed-disclosure",
    title: "Bank feed disclosure",
    body: [
      { heading: "5.6 Bank feed disclosure" },
      "Live bank feeds are provided through Fiskil, a third-party data infrastructure provider. Sparkview does not connect directly to banks. It receives data through secure, consent-based API arrangements and depends on the availability and uptime of Fiskil and the relevant financial institutions.",
      "We do not guarantee that bank feeds will be uninterrupted or error-free, and you remain responsible for reviewing imported transactions.",
    ],
  },
  {
    id: "acknowledgement",
    title: "Acknowledgement",
    body: [
      { heading: "5.7 Acknowledgement" },
      "By using the Services, you acknowledge that:",
      [
        "Sparkview assists with preparation only;",
        "final responsibility for review and submission rests with you;",
        "all Output requires human review; and",
        "Sparkview does not lodge or submit anything on your behalf.",
      ],
    ],
  },
];
