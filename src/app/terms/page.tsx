import type { Metadata } from "next"

import { LegalPage, type LegalSection } from "@/components/site/legal-page"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the IIM Marketers website.",
  alternates: { canonical: "/terms" },
}

// NOTE: Placeholder terms written for the migration. Have them reviewed before launch.
const sections: LegalSection[] = [
  {
    heading: "Using this website",
    paragraphs: [
      "By accessing this website you agree to these terms. If you do not agree, please do not use the site.",
    ],
  },
  {
    heading: "Content and intellectual property",
    paragraphs: [
      `All content on this website, including text, graphics, logos and videos, belongs to ${siteConfig.name} or its clients and may not be reproduced without written permission.`,
    ],
  },
  {
    heading: "Offers and services",
    paragraphs: [
      "Promotional offers shown on the website (such as discounts on first-month fees or free trials) are subject to the terms agreed in your individual proposal or contract.",
      "Results described on this website reflect past client outcomes and are not a promise of identical results for every business.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "This website is provided “as is”. We make reasonable efforts to keep information accurate but do not guarantee it is complete or current.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [`Questions about these terms can be sent to ${siteConfig.email}.`],
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="November 2026"
      intro="These terms govern your use of the IIM Marketers website."
      sections={sections}
    />
  )
}
