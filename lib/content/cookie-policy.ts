import type { Section } from "../policies";

export const cookiePolicySections: Section[] = [
  {
    id: "about-cookies",
    title: "About cookies",
    body: [
      "This Cookie Policy explains how Sparkview uses cookies and similar technologies on our website and platform. It should be read together with the Privacy Policy and forms part of the Terms of Service.",
      { heading: "8.1 What cookies are" },
      "Cookies are small text files placed on your device when you visit a website. They may be session cookies, which are deleted when you close your browser, or persistent cookies, which stay on your device for a set period. They may also be first-party cookies, set by Sparkview, or third-party cookies, set by external providers we work with.",
      { heading: "8.2 How we use cookies" },
      "We use cookies to:",
      [
        "enable core functionality and keep the Services working;",
        "maintain secure, logged-in sessions;",
        "remember your preferences and settings;",
        "analyse usage and performance so we can improve the Services; and",
        "improve security and detect fraud or suspicious activity.",
      ],
      "We do not use cookies to sell personal information or for intrusive advertising.",
    ],
  },
  {
    id: "types-of-cookies",
    title: "Types of cookies we use",
    body: [
      { heading: "8.3 Types of cookies we use" },
      {
        terms: [
          {
            term: "Essential cookies",
            definition:
              "Necessary for the Services to function and cannot be disabled. They authenticate users, maintain logged-in sessions and enable secure access.",
          },
          {
            term: "Performance and analytics cookies",
            definition:
              "Help us understand how the Services are used through aggregated and de-identified information, such as pages visited, time spent, and error and performance metrics.",
          },
          {
            term: "Functional cookies",
            definition: "Remember the choices you make, such as preferences and interface settings, so you do not have to set them again.",
          },
          {
            term: "Security cookies",
            definition: "Help detect suspicious activity, prevent unauthorised access and support authentication.",
          },
        ],
      },
      { heading: "8.4 Third-party cookies" },
      "Trusted providers, such as our analytics, hosting and security providers, may set cookies for the purposes described above. These providers are engaged under confidentiality and security obligations consistent with Australian privacy law.",
    ],
  },
  {
    id: "managing-cookies",
    title: "Managing cookies and consent",
    body: [
      { heading: "8.5 Managing cookies" },
      "You can control or disable cookies through your browser settings. Instructions are usually found in your browser's help section. Disabling essential cookies may prevent the Services from working correctly, including your ability to log in.",
      { heading: "8.6 Consent" },
      "By using the Services, you consent to the use of cookies in accordance with this policy. Where required by law, we may provide cookie consent banners or preference tools so you can manage non-essential cookies.",
    ],
  },
  {
    id: "changes-and-contact",
    title: "Changes and contact",
    body: [
      { heading: "8.7 Changes and contact" },
      "We may update this policy from time to time to reflect changes in the technologies we use or in the law. The latest version will always be available on this page.",
      "For questions about cookies, contact us at hello@accountantgenie.com.au.",
    ],
  },
];
