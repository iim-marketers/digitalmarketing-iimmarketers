import type { Metadata } from "next"
import { Clock, Globe, Mail, Phone } from "lucide-react"

import { LeadForm } from "@/components/site/lead-form"
import { PageHero } from "@/components/site/page-hero"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with IIM Marketers for a free trial. Call +91 62913 92772 or email hello@iimmarketers.com — we reply within 24 hours.",
  alternates: { canonical: "/contact" },
}

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: siteConfig.phones.primary.label,
    href: siteConfig.phones.primary.href,
    tone: "bg-brand text-white",
  },
  {
    icon: Phone,
    label: "Sales line",
    value: siteConfig.phones.secondary.label,
    href: siteConfig.phones.secondary.href,
    tone: "bg-brand-soft text-brand",
  },
  {
    icon: Mail,
    label: "Send email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    tone: "bg-amber text-ink",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        description="Get in touch for a FREE trial — and 50% off your first month’s fees."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="flex flex-col gap-6">
            <div>
              <span className="eyebrow">Contact with us</span>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Let’s grow your business</h2>
              <p className="mt-4 text-muted-foreground">
                Share a few details and a strategist will reach out with a tailored plan. Prefer to
                talk now? Call or email us directly.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {channels.map(({ icon: Icon, ...c }) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="group flex items-center gap-4 rounded-2xl border bg-white p-5 transition-colors hover:border-brand/40"
                  >
                    <span className={`grid size-12 shrink-0 place-items-center rounded-xl ${c.tone}`}>
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-muted-foreground">{c.label}</span>
                      <span className="block truncate font-heading text-lg font-bold text-ink group-hover:text-brand">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 rounded-2xl bg-lavender p-5 text-sm text-ink/80">
              <Clock className="size-5 shrink-0 text-brand" aria-hidden />
              We respond to every enquiry within 24 hours, Monday to Saturday.
            </div>

            <div className="rounded-3xl border p-6">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <Globe className="size-5 text-brand" aria-hidden />
                Our affiliates
              </h2>
              <ul className="mt-4 flex flex-col divide-y">
                {siteConfig.affiliates.map((a) => (
                  <li key={a.region} className="flex flex-col py-3 first:pt-0 last:pb-0">
                    <span className="text-xs font-semibold tracking-wide text-brand uppercase">
                      {a.region}
                    </span>
                    <span className="text-ink/85">{a.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-fit rounded-[1.75rem] border bg-white p-6 shadow-[0_30px_70px_-45px_rgb(29_23_41/0.4)] sm:p-10 lg:sticky lg:top-28">
            <h2 className="text-2xl font-extrabold">Request your free trial</h2>
            <p className="mt-2 mb-8 text-sm text-muted-foreground">
              Fields marked as optional can be skipped.
            </p>
            <LeadForm source="Contact page" submitLabel="Send message" />
          </div>
        </div>
      </section>
    </>
  )
}
