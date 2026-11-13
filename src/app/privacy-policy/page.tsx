import type { Metadata } from "next"

import { LegalPage, type LegalSection } from "@/components/site/legal-page"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How IIM Marketers collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
}

// NOTE: Adapted from the original site's WordPress privacy template. Have it reviewed before launch.
const sections: LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      `${siteConfig.name} is a digital marketing agency. Our website address is ${siteConfig.url}. You can reach us at ${siteConfig.email}.`,
    ],
  },
  {
    heading: "Information we collect",
    paragraphs: [
      "When you submit a form on this website we collect the details you provide — typically your name, email address, phone number and message — so we can respond to your enquiry.",
      "When you subscribe to our newsletter we collect your email address and your consent to receive it.",
      "Like most websites, our hosting provider may automatically log technical information such as your IP address, browser type and the pages you visit, to keep the site secure and reliable.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "This website uses only the cookies needed for it to function. If we add analytics or advertising tools in future, we will update this policy and, where required, ask for your consent first.",
    ],
  },
  {
    heading: "Embedded content from other websites",
    paragraphs: [
      "Pages on this site may include embedded content (for example videos or images) from other websites. Embedded content behaves in the same way as if you had visited the other website directly.",
      "These websites may collect data about you, use cookies, embed additional third-party tracking and monitor your interaction with that content.",
    ],
  },
  {
    heading: "Who we share your data with",
    paragraphs: [
      "We do not sell your personal information. We share it only with service providers who help us operate the website and respond to you (such as hosting and email delivery), and only as far as needed for that purpose.",
    ],
  },
  {
    heading: "How long we retain your data",
    paragraphs: [
      "We keep enquiry details for as long as needed to respond and to maintain a record of our business relationship. Newsletter subscriptions are kept until you unsubscribe.",
    ],
  },
  {
    heading: "What rights you have over your data",
    paragraphs: [
      `You can ask us for a copy of the personal data we hold about you, or ask us to correct or erase it, by emailing ${siteConfig.email}. This does not include data we are obliged to keep for administrative, legal or security purposes.`,
    ],
  },
  {
    heading: "Where we send your data",
    paragraphs: [
      "Form submissions may be checked by automated spam-detection services before they reach our team.",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="November 2026"
      intro="Your privacy matters to us. This policy explains what information we collect through this website, why we collect it and how you can control it."
      sections={sections}
    />
  )
}
