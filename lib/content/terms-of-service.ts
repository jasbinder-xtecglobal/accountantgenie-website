import type { Section } from "../policies";

export const termsOfServiceSections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: [
      "These Terms of Service (the Terms) govern your access to and use of the Sparkview platform, website, applications, integrations and related services. By accessing or using the Services, you agree to be bound by these Terms and the policies incorporated into them.",
      { heading: "1.2 Agreement to these Terms" },
      "By accessing or using the Services, you agree to these Terms. If you do not agree, you must not use the Services. If you use the Services on behalf of a business or professional practice, you confirm that you are authorised to bind that entity, and references to you include that entity.",
      { heading: "1.3 About Sparkview" },
      "Sparkview is an Australian AI-assisted reconciliation and reporting platform that helps accountants, tax and BAS agents, bookkeepers and businesses with transaction reconciliation, report preparation and related tasks. The Services include live bank feeds provided through Fiskil, an AI Memory feature, and a depreciation and fixed asset module.",
      "Sparkview is not lodgement software. It does not provide tax, legal or financial advice, does not act as a registered tax agent, BAS agent, accountant or legal practitioner, and does not lodge, submit, transmit or file any return, activity statement, report or form with the Australian Taxation Office (ATO) or any other government body. Lodgement, and all dealings with the ATO and other authorities, remain your responsibility.",
      { heading: "1.4 Eligibility" },
      "You must be at least 18 years old and legally able to enter into a binding contract. The Services are intended for professional and business use and are not intended for personal, domestic or household use.",
    ],
  },
  {
    id: "definitions",
    title: "Definitions",
    body: [
      { heading: "1.1 Definitions" },
      "In these Terms, the following words have the meanings set out below.",
      {
        terms: [
          {
            term: "Sparkview, we, us and our",
            definition: "Sparkview Pty Ltd, the provider of the Services.",
          },
          {
            term: "Services",
            definition:
              "The Sparkview platform, website, applications, integrations (including live bank feeds), AI features (including AI Memory), reporting tools, the depreciation and fixed asset module, and related services.",
          },
          {
            term: "You and User",
            definition:
              "The person or entity that accesses or uses the Services and, where applicable, the accounting firm, practice or business on whose behalf the Services are used.",
          },
          {
            term: "Customer Data",
            definition:
              "Data and information you submit, upload or generate through the Services, including Client Data, Bank Feed Data, AI Memory data, and asset and depreciation data.",
          },
          {
            term: "Client Data",
            definition: "Personal or financial information relating to your clients that you upload to or process through the Services.",
          },
          {
            term: "Output",
            definition:
              "Any AI-generated or system-generated result, suggestion, categorisation, calculation, report or preparation produced by the Services.",
          },
          {
            term: "Bank Feed Data",
            definition: "Transaction and account data accessed through the live bank feed integration.",
          },
          {
            term: "ACL",
            definition: "The Australian Consumer Law in Schedule 2 to the Competition and Consumer Act 2010 (Cth).",
          },
        ],
      },
    ],
  },
  {
    id: "nature-of-services",
    title: "Nature of the Services",
    body: [
      { heading: "1.5 Nature of the Services" },
      "This section is fundamental to the basis on which the Services are provided. See also the AI Use and Disclosure Policy and the Disclaimer Policy.",
      [
        "The Services provide assistance and preparation tools only.",
        "All Output is indicative and informational and is not advice.",
        "Human review by a competent person is mandatory before any Output is relied on, submitted, lodged or used for client advice.",
        "Final responsibility for accuracy, compliance and lodgement rests with you.",
      ],
    ],
  },
  {
    id: "account-and-obligations",
    title: "Your account and obligations",
    body: [
      { heading: "1.6 Your account and security" },
      "You are responsible for keeping your account credentials secure, for enabling multi-factor authentication where available, and for all activity under your account caused by a failure to keep your credentials secure. You must notify us promptly of any suspected unauthorised access. Subject to the ACL, we are not liable for loss arising from your failure to secure your account, except to the extent the loss is caused by our breach of these Terms or of the law.",
      { heading: "1.7 Your obligations" },
      "You must provide accurate, lawful and current information; review all Output before use; comply with Australian tax laws and applicable professional standards; and use the Services only for lawful purposes.",
      "You must not:",
      [
        "rely solely on Output without review;",
        "upload unlawful, misleading or unauthorised data;",
        "provide unlicensed professional services through the Services; or",
        "use the Services in breach of the Acceptable Use Policy.",
      ],
      { heading: "1.8 Authority for client data and bank feeds" },
      "Where you upload Client Data or connect a bank feed, you confirm that you have the authority and all necessary consents (including from your clients and the relevant account holders) to collect, upload, share and process that data through the Services, including any consent required under the Consumer Data Right and applicable banking data-sharing arrangements. You are responsible for managing your clients' instructions and consents.",
    ],
  },
  {
    id: "data-bank-feeds-ai-memory",
    title: "Your data, bank feeds and AI Memory",
    body: [
      { heading: "1.9 Data uploads and ownership" },
      "You retain all ownership of your Customer Data, including Client Data, Bank Feed Data, AI Memory data, and asset and depreciation data. You grant us a limited, non-exclusive licence to host, process and use Customer Data only as needed to provide, secure, maintain and improve the Services to you, and as otherwise permitted in the Privacy Policy. We do not claim ownership of your financial or client data.",
      { heading: "1.10 Live bank feeds" },
      "Live bank feeds are provided through Fiskil, a third-party data infrastructure provider. Sparkview does not connect directly to your or your clients' banks and receives data through secure, consent-based application programming interface (API) arrangements. Access to bank data requires valid consent and may be provided under the Consumer Data Right.",
      "Availability of bank feeds depends on third parties, including Fiskil and the relevant financial institutions, and we do not guarantee uninterrupted or error-free feeds. You remain responsible for reviewing imported transactions.",
      { heading: "1.11 AI Memory" },
      "AI Memory is an optional feature that stores adjustments you approve, such as categorisation and reconciliation decisions, to improve the accuracy of future Output for your account. AI Memory may operate at client level or firm-wide level, as configured by you.",
      "AI Memory data is stored in Sparkview's database, is held within your account, and is not shared with or made available to other customers. Output influenced by AI Memory remains assistive only and requires human review. You can configure, disable or request deletion of AI Memory data as described in the Record Retention and Deletion Policy.",
    ],
  },
  {
    id: "ip-fees-changes",
    title: "Intellectual property, fees and changes",
    body: [
      { heading: "1.12 Intellectual property" },
      "All platform content, branding, software and intellectual property in the Services remain the property of Sparkview or its licensors. You may not copy, reproduce, modify, reverse engineer or reuse platform materials except as permitted by law or with our written consent. If you provide feedback or suggestions, you grant us a perpetual, royalty-free licence to use them without obligation to you.",
      { heading: "1.13 Fees and billing" },
      "Fees, where applicable, are set out at the time of purchase and are governed by the Billing and Refund Policy.",
      { heading: "1.14 Changes to the Services" },
      "We may improve, modify or add to the Services from time to time, including for security, legal or operational reasons. We will not materially reduce the core functionality of a paid subscription during a paid term without giving you reasonable prior notice. If we make a change that materially and adversely affects your use of a paid subscription, you may terminate the affected subscription and we will refund any prepaid fees for the unused part of your then-current term.",
      { heading: "1.15 Availability" },
      "We aim to provide reliable access but do not guarantee that the Services will be uninterrupted, timely, secure or error-free. The Services may be unavailable during maintenance or because of factors outside our reasonable control, including third-party outages affecting bank feeds.",
      { heading: "1.16 Changes to these Terms" },
      "We may update these Terms from time to time. For changes that are administrative or favourable to you, we may update the Terms and post the current version. For changes that materially and adversely affect you, we will give you reasonable prior notice, being at least 30 days where practicable, before they take effect.",
      "If you do not accept a material change, you may stop using the Services and cancel before the change takes effect, and the change will not apply to you before then. Continued use after a change takes effect constitutes acceptance of the updated Terms.",
    ],
  },
  {
    id: "suspension-termination",
    title: "Suspension, termination and confidentiality",
    body: [
      { heading: "1.17 Suspension and termination" },
      "You may cancel your account at any time as set out in the Billing and Refund Policy. We may suspend or limit your access where reasonably necessary: if you materially breach these Terms; for non-payment; if your use poses a security, legal or operational risk to us, the Services or others; or if required by law.",
      "Where a breach is capable of remedy and the circumstances reasonably allow, we will give you notice and a reasonable opportunity to remedy it before suspending or terminating. We may suspend immediately where necessary to address a serious security, legal or integrity risk, and will tell you as soon as practicable.",
      "On termination, your right to use the Services ends. Sections intended to survive, including ownership, confidentiality, liability, indemnity and governing law, continue. Data handling on termination is governed by the Record Retention and Deletion Policy.",
      { heading: "1.18 Confidentiality" },
      "Each party must keep the other's confidential information confidential and use it only for the purposes of these Terms, except where disclosure is required by law or made to professional advisers under confidentiality. This does not limit our handling of personal information under the Privacy Policy.",
    ],
  },
  {
    id: "guarantees-and-liability",
    title: "Consumer guarantees and liability",
    body: [
      { heading: "1.19 Consumer guarantees (Australian Consumer Law)" },
      "Our Services come with guarantees that cannot be excluded under the ACL. Nothing in these Terms excludes, restricts or modifies any consumer guarantee, right or remedy you have under the ACL or any other law that cannot lawfully be excluded.",
      "Where we are permitted to limit our liability for a failure to comply with a consumer guarantee in respect of services that are not of a kind ordinarily acquired for personal, domestic or household use, our liability is limited, at our option, to supplying the services again or paying the cost of having them supplied again.",
      { heading: "1.20 Limitation of liability" },
      "Subject to section 1.19 and to the extent permitted by law:",
      [
        "we are not liable for any indirect, incidental, special or consequential loss, or for loss of profit, revenue, goodwill, data or anticipated savings; and",
        "our total aggregate liability arising out of or in connection with the Services and these Terms is limited to the total fees paid by you to us for the Services in the 12 months immediately before the event giving rise to the liability.",
      ],
      "To the maximum extent permitted by law, and subject to section 1.19, we are not responsible or liable for any loss, damage, penalty or claim to the extent it arises from or relates to:",
      [
        "the acts, omissions, misconduct, negligence, errors, outages, security incidents or failures of any third party, including financial institutions, Fiskil, accounting or tax software providers, payment providers, hosting and AI infrastructure providers, and our sub-processors;",
        "the conduct, misuse, negligence, errors, fraud or unlawful acts of any user, customer, client or their personnel, including how Output is reviewed, relied on, lodged or used;",
        "your breach of these Terms, your reliance on Output without adequate review, your failure to secure your account, or inaccurate or incomplete data you provide; or",
        "any return, statement, report or lodgement that you or your advisers prepare, approve or submit to the Australian Taxation Office or any other authority, or any audit, review or other action taken by such an authority.",
      ],
      "You are responsible for the acts and omissions of anyone who accesses the Services through your account.",
      { heading: "1.21 Indemnity" },
      "You indemnify us against loss, liability and reasonable costs we suffer arising from: your breach of these Terms; your misuse of the Services; your reliance on Output without adequate review; your provision of professional services to your clients; or a claim by a third party (including your clients) relating to your Customer Data or your use of the Services.",
      "This indemnity does not apply to the extent the loss is caused by our breach, negligence or unlawful conduct. We will notify you of any relevant claim, allow you to participate in its defence, and not settle a claim that imposes obligations on you without your consent, which is not to be unreasonably withheld.",
      { heading: "1.22 Third-party services" },
      "The Services may rely on or integrate with third-party services, including Fiskil, financial institutions, hosting, AI infrastructure and analytics providers. Subject to the ACL and to sections 1.20 and 1.21, we are not responsible or liable for any third-party service, its availability, security or performance, or for the acts, omissions, misconduct or unlawful conduct of any third party. Your use of third-party services may be subject to their terms.",
    ],
  },
  {
    id: "privacy-notices-general",
    title: "Privacy, notices and general terms",
    body: [
      { heading: "1.23 Privacy" },
      "We handle personal information in accordance with the Privacy Policy, which forms part of these Terms.",
      { heading: "1.24 Force majeure" },
      "We are not liable for any failure or delay caused by events beyond our reasonable control, including third-party or financial-institution outages, internet failures, cyber attacks, natural events, or changes in law.",
      { heading: "1.25 Notices" },
      "We may give notices through the Services, by email to your registered address, or by posting on our website. You may give us formal notices by email to hello@accountantgenie.com.au.",
      { heading: "1.26 General" },
      [
        "Assignment: you may not assign these Terms without our consent; we may assign or novate to a successor of our business on notice to you.",
        "Severance: if any provision is unenforceable, it is severed and the rest continues in force.",
        "No waiver: a failure to enforce a right is not a waiver of that right.",
        "Entire agreement: these Terms and the incorporated policies are the entire agreement between us about the Services and supersede prior representations, except for any liability for misleading conduct under the ACL.",
        "Survival: sections that by their nature should survive termination do so.",
      ],
      { heading: "1.27 Governing law and disputes" },
      "These Terms are governed by the laws of Victoria, Australia, and the parties submit to the non-exclusive jurisdiction of the courts of Victoria. Before starting proceedings, other than for urgent relief, the parties will try in good faith to resolve any dispute by discussion. Nothing in this section limits your rights under the ACL or your ability to make a complaint to a regulator.",
    ],
  },
];
