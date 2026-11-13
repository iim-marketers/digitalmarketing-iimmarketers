import { CapabilityTicker, Offering, TrustedBrands } from "@/components/home/trust"
import { Hero } from "@/components/home/hero"
import {
  CaseStudies,
  CoreServices,
  Guarantees,
  HowItWorks,
  Solutions,
  Studio,
} from "@/components/home/services"
import {
  ContactSection,
  LatestInsights,
  Testimonials,
  VideoEditingCta,
  WhyUsFaq,
} from "@/components/home/engage"
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
      <div className="overflow-hidden py-6">
        <CapabilityTicker />
      </div>
      <Offering />
      <CoreServices />
      <CaseStudies />
      <HowItWorks />
      <Studio />
      <Guarantees />
      <Testimonials />
      <Solutions />
      <WhyUsFaq />
      <VideoEditingCta />
      <LatestInsights />
      <ContactSection />
    </>
  )
}
