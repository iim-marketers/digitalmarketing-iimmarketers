import { cacheLife } from "next/cache";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

import { BackToTop } from "@/components/site/back-to-top"
import { Logo } from "@/components/site/logo";
import { NewsletterForm } from "@/components/site/newsletter-form";
import { footerServices, mainNav, siteConfig } from "@/lib/site";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

function CtaPanel() {
  return (
    <section
      aria-labelledby="cta-title"
      className="container-page pt-8 pb-16 sm:pb-20"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-panel px-6 py-14 text-white sm:px-14 sm:py-20">
        <svg
          aria-hidden
          viewBox="0 0 600 420"
          preserveAspectRatio="xMaxYMax meet"
          className="pointer-events-none absolute right-0 bottom-0 hidden h-full w-[55%] md:block"
        >
          <defs>
            <linearGradient
              id="cta-leap"
              x1="0"
              x2="600"
              y1="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
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
          <h2
            id="cta-title"
            className="text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.045em] text-white"
          >
            Ready to <span className="text-spectrum-light">Collaborate</span>{" "}
            <br className="hidden sm:block" />
            with us?
          </h2>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn group bg-white text-brand hover:bg-white/90"
            >
              Contact us
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <CtaPanel />
      <div className="border-t border-line">
        <div className="container-page grid gap-12 pt-14 pb-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-ink/60">
              {siteConfig.footerBlurb}
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
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <FooterList title="Services">
              {footerServices.map((s) => (
                <li key={s}>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-ink"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </FooterList>
            <FooterList title="Company">
              {mainNav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="transition-colors hover:text-ink"
                  >
                    {n.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-ink"
                >
                  Privacy Policy
                </Link>
              </li>
            </FooterList>
          </div>

          <div className="md:col-span-2 lg:col-span-4">
            <div className="rounded-2xl bg-panel p-6 text-white">
              <h2 className="mb-5 font-heading text-lg font-semibold text-white">
                Subscribe
              </h2>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="container-page">
          {/* The back-to-top button sits centred on the divider line */}
          <div className="relative flex flex-col items-center justify-between gap-3 border-t border-line pt-12 pb-6 text-xs text-ink/50 sm:flex-row sm:pt-6">
            <BackToTop className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:-translate-y-[calc(50%+0.25rem)]" />
            <p>
              © All Copyright <CopyrightYear /> by IIM Marketers
            </p>
            <Link href="/privacy-policy" className="transition-colors hover:text-ink">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterList({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-sans text-sm font-semibold tracking-normal text-ink">
        {title}
      </h2>
      <ul className="mt-4 flex flex-col gap-3 text-sm text-ink/60">
        {children}
      </ul>
    </div>
  );
}
