import { cacheLife } from "next/cache"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Logo } from "@/components/site/logo"
import { NewsletterForm } from "@/components/site/newsletter-form"
import { footerServices, mainNav, siteConfig } from "@/lib/site"

async function CopyrightYear() {
  "use cache"
  cacheLife("days")
  return <>{new Date().getFullYear()}</>
}

function CtaPanel() {
  return (
    <section aria-labelledby="cta-title" className="container-page pt-8 pb-16 sm:pb-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-panel px-6 py-14 text-white sm:px-14 sm:py-20">
        <svg
          aria-hidden
          viewBox="0 0 600 420"
          preserveAspectRatio="xMaxYMax meet"
          className="pointer-events-none absolute right-0 bottom-0 hidden h-full w-[55%] md:block"
        >
          <defs>
            <linearGradient id="cta-leap" x1="0" x2="600" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="0.35" stopColor="#f3c8ff" />
              <stop offset="0.65" stopColor="#c43aa6" />
              <stop offset="0.85" stopColor="#ff6a2b" />
              <stop offset="1" stopColor="#ffb21f" />
            </linearGradient>
          </defs>
          <path
            d="M0,410 C 260,400 430,330 540,90"
            fill="none"
            stroke="url(#cta-leap)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="540" cy="90" r="26" fill="#ffb21f" fillOpacity="0.15" />
          <circle cx="540" cy="90" r="9" fill="#ffb21f" />
        </svg>
        <div className="relative max-w-2xl">
          <p className="text-sm font-medium text-white/75">
            Free growth plan · 50% off your first month
          </p>
          <h2
            id="cta-title"
            className="mt-4 text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.045em] text-white"
          >
            Ready to make <br className="hidden sm:block" />
            the <span className="text-spectrum-light">leap?</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-white/80">
            Tell us where you want to grow. A strategist replies within 24 hours.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn group bg-white text-brand hover:bg-white/90">
              Get started
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
            <a
              href={siteConfig.phones.primary.href}
              className="btn border border-white/35 text-white hover:bg-white/10"
            >
              <Phone className="size-4" aria-hidden />
              {siteConfig.phones.primary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <CtaPanel />
      <div className="border-t border-line">
        <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/60">
              Performance marketing, an in-house video studio and AI-led automation — founded by
              IIT-IIM alumni to help ambitious brands grow.
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-ink/70">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-3 transition-colors hover:text-ink"
                >
                  <Mail className="size-4 text-ink/40" aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phones.primary.href}
                  className="inline-flex items-center gap-3 transition-colors hover:text-ink"
                >
                  <Phone className="size-4 text-ink/40" aria-hidden />
                  {siteConfig.phones.primary.label}
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <MapPin className="size-4 text-ink/40" aria-hidden />
                Bengaluru · Kolkata · UK · Netherlands
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <FooterList title="Services">
              {footerServices.map((s) => (
                <li key={s}>
                  <Link href="/contact" className="transition-colors hover:text-ink">
                    {s}
                  </Link>
                </li>
              ))}
            </FooterList>
            <FooterList title="Company">
              {mainNav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition-colors hover:text-ink">
                    {n.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className="transition-colors hover:text-ink">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-ink">
                  Terms &amp; Conditions
                </Link>
              </li>
            </FooterList>
          </div>

          <div className="md:col-span-2 lg:col-span-4">
            <div className="rounded-2xl bg-panel p-6 text-white">
              <h2 className="font-heading text-lg font-semibold text-white">
                Marketing notes, once a month
              </h2>
              <p className="mt-1 mb-5 text-sm text-white/75">Practical ideas. No spam.</p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="container-page">
          <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 text-xs text-ink/50 sm:flex-row">
            <p>
              © <CopyrightYear /> IIM Marketers. All rights reserved.
            </p>
            <p>Affiliates: {siteConfig.affiliates.map((a) => a.region).join(" · ")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterList({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-sans text-sm font-semibold tracking-normal text-ink">{title}</h2>
      <ul className="mt-4 flex flex-col gap-3 text-sm text-ink/60">{children}</ul>
    </div>
  )
}
