import Image from "next/image"
import { cacheLife } from "next/cache"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/site/logo"
import { NewsletterForm } from "@/components/site/newsletter-form"
import { formatDate, sortedPosts } from "@/lib/posts"
import { footerServices, mainNav, siteConfig } from "@/lib/site"

async function CopyrightYear() {
  "use cache"
  cacheLife("days")
  return <>{new Date().getFullYear()}</>
}

function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="container-page relative z-10 -mb-24">
      <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-10 text-white shadow-[0_30px_60px_-30px_rgb(80_39_203/0.6)] sm:px-12 sm:py-12">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_left,black,transparent)]" />
        <div className="pointer-events-none absolute -top-16 -right-10 size-56 rounded-full bg-amber/30 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-medium tracking-wide text-white/70">Call to action</p>
            <h2 id="cta-title" className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Ready to collaborate with us?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-amber px-6 text-base text-ink hover:bg-amber/90"
            >
              <Link href="/contact">
                Contact us
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/30 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <a href={siteConfig.phones.primary.href}>
                <Phone data-icon="inline-start" />
                {siteConfig.phones.primary.label}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  const recent = sortedPosts.slice(0, 2)

  return (
    <footer className="mt-auto">
      <CtaBand />
      <div className="bg-ink pt-40 pb-10 text-white/70">
        <div className="container-page grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo inverted />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">{siteConfig.footerBlurb}</p>
            <ul className="mt-6 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={siteConfig.phones.primary.href}
                  className="inline-flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="size-4 text-amber" aria-hidden />
                  {siteConfig.phones.primary.label}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="size-4 text-amber" aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <MapPin className="size-4 text-amber" aria-hidden />
                Bengaluru · Kolkata · UK · Netherlands
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <div>
              <h2 className="text-base font-bold text-white">Services</h2>
              <ul className="mt-5 flex flex-col gap-3 text-sm">
                {footerServices.map((s) => (
                  <li key={s}>
                    <Link href="/contact" className="transition-colors hover:text-white">
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Company</h2>
              <ul className="mt-5 flex flex-col gap-3 text-sm">
                {mainNav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="transition-colors hover:text-white">
                      {n.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/privacy-policy" className="transition-colors hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="transition-colors hover:text-white">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:col-span-2 md:grid md:grid-cols-2 lg:col-span-4 lg:flex">
            <div>
              <h2 className="text-base font-bold text-white">Recent news</h2>
              <ul className="mt-5 flex flex-col gap-4">
                {recent.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="group flex gap-3">
                      <Image
                        src={p.cover.src}
                        alt=""
                        width={72}
                        height={56}
                        className="h-14 w-[72px] shrink-0 rounded-lg object-cover"
                      />
                      <span className="flex flex-col gap-1">
                        <span className="text-xs text-amber">{formatDate(p.date)}</span>
                        <span className="line-clamp-2 text-sm leading-snug text-white/85 transition-colors group-hover:text-white">
                          {p.title}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Subscribe</h2>
              <p className="mt-2 mb-4 text-sm">Marketing insights, once a month. No spam.</p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="container-page mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <p>
            © <CopyrightYear /> IIM Marketers. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
