import { Hero } from "@/components/home/hero"
import { TrustedBrands } from "@/components/home/trust"
import { CaseStudies, CoreServices, HowItWorks, Studio } from "@/components/home/services"
import { LatestInsights, Testimonials, WhyUsFaq } from "@/components/home/engage"
import { faqs, siteConfig } from "@/lib/site"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MarketingAgency",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/brand/logo.webp`,
      email: siteConfig.email,
      telephone: siteConfig.phones.primary.label,
      description: siteConfig.description,
      areaServed: ["IN", "GB", "AU", "NL"],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <TrustedBrands />
      <CoreServices />
      <CaseStudies />
      <HowItWorks />
      <Studio />
      <Testimonials />
      <WhyUsFaq />
      <LatestInsights />
    </>
  )
}
