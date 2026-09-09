import type { Section } from "../policies";

export const billingRefundsSections: Section[] = [
  {
    id: "plans-and-payment",
    title: "Subscription plans and payment",
    body: [
      "This policy governs payment, invoicing and refunds for the Services. It should be read together with the Terms of Service and the Privacy Policy, and forms part of the Terms.",
      { heading: "6.1 Subscription plans" },
      "Sparkview offers subscription access through a range of plans, such as Starter, Core, Growth and Scale. The features and pricing of each plan are set out on our website and may be updated from time to time with notice.",
      { heading: "6.2 Payment" },
      "Fees are payable in advance for each subscription period using the payment methods we accept. You must keep your payment details current, and you authorise us to charge your nominated payment method for fees as they fall due.",
    ],
  },
  {
    id: "billing-cycle",
    title: "Billing cycle, taxes and invoicing",
    body: [
      { heading: "6.3 Billing cycle and auto-renewal" },
      "Subscriptions renew automatically for successive periods of the same length unless you cancel before the next renewal date. We will make the renewal terms clear at the time you subscribe.",
      "If we increase our fees, we will give you at least 30 days' notice before the increase applies to your next renewal, so you can cancel before it takes effect.",
      { heading: "6.4 Taxes" },
      "Fees are exclusive of GST and any other applicable taxes unless stated otherwise. You are responsible for any taxes associated with your subscription.",
      { heading: "6.5 Invoicing" },
      "Invoices are generated automatically at each billing date, are available in your account dashboard, and include the information required for tax purposes.",
    ],
  },
  {
    id: "refunds",
    title: "Refunds",
    body: [
      { heading: "6.6 Refunds" },
      "Subscription fees are non-refundable except where required by law, including the Australian Consumer Law, or as set out in this policy. No refunds are provided for partial use, unused credits or early termination, except where required by law.",
      { heading: "6.7 Exceptional refunds" },
      "At our discretion, we may provide a refund in the following circumstances:",
      [
        "a verified outage of the Sparkview platform exceeding 72 continuous hours that is not caused by you or by an event outside our reasonable control; or",
        "a billing error that is clearly caused by us.",
      ],
      "Refund requests must be made in writing to hello@accountantgenie.com.au within 14 days of the incident, and should include your account details and a description of the issue.",
      { heading: "6.8 Beta and promotional offers" },
      "Fees for beta access, early access or promotional offers are non-refundable unless we expressly state otherwise in the offer.",
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation",
    body: [
      { heading: "6.9 Cancellation" },
      "You may cancel your subscription at any time from within the platform. Cancellation stops future charges but does not refund past payments, except where required by law. Your access continues until the end of the current paid period.",
      "Data handling after cancellation is governed by the Record Retention and Deletion Policy.",
    ],
  },
  {
    id: "disputes-and-changes",
    title: "Disputes and changes",
    body: [
      { heading: "6.10 Disputes" },
      "For billing disputes or refund requests, contact us at hello@accountantgenie.com.au. We will review your request and respond within 7 business days. Your rights under the Australian Consumer Law are not affected by this policy.",
      { heading: "6.11 Changes" },
      "We may update this policy from time to time and will give you notice of any material change. Section 1.16 of the Terms of Service applies to changes to this policy.",
    ],
  },
];
