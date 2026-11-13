import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Phone, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/site/lead-form"
import { heroHighlights, siteConfig, testimonials } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-lavender">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 -left-32 size-[28rem] rounded-full bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 size-[22rem] rounded-full bg-amber/20 blur-3xl" />

      <div className="container-page relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full bg-white py-1.5 pr-4 pl-1.5 shadow-sm ring-1 ring-border">
            <Image
              src="/images/brand/hero.webp"
              alt="5 star Google reviews"
              width={735}
              height={325}
              priority
              className="h-7 w-auto"
            />
            <span className="flex items-center gap-1 text-sm font-medium text-ink">
              <span className="flex text-amber" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </span>
              Rated on Google
            </span>
          </div>

          <h1 className="mt-6 text-4xl leading-[1.08] font-black tracking-tight sm:text-5xl xl:text-[3.6rem]">
            India’s best digital marketing agency in{" "}
            <span className="relative whitespace-nowrap text-brand">
              lead generation
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-3 w-full text-amber"
              >
                <path
                  d="M2 9C60 3 140 1 298 6"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            &amp; sales
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-ink">We triple your business in 6 months.</strong>{" "}
            Founded by IIT-IIM alumni, delivering guaranteed lead generation and sales for 9+ years
            — within your budget.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {heroHighlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-[0.95rem] text-ink/85">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Check className="size-3" strokeWidth={3} aria-hidden />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-13 rounded-full px-7 text-base">
              <Link href="/contact">
                Get started
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 rounded-full bg-white px-6 text-base"
            >
              <a href={siteConfig.phones.primary.href}>
                <Phone data-icon="inline-start" />
                {siteConfig.phones.primary.label}
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 4).map((t) => (
                <Image
                  key={t.name}
                  src={t.image}
                  alt=""
                  width={44}
                  height={44}
                  className="size-11 rounded-full object-cover ring-[3px] ring-lavender"
                />
              ))}
            </div>
            <p className="text-sm leading-snug text-muted-foreground">
              <span className="block font-heading text-base font-extrabold text-ink">
                150+ satisfied brands
              </span>
              across India, UK, Australia &amp; Europe
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 -z-0 rotate-2 rounded-[2rem] bg-gradient-to-br from-brand/25 to-amber/25" />
          <div className="relative rounded-[1.75rem] bg-white p-6 shadow-[0_40px_80px_-40px_rgb(29_23_41/0.35)] ring-1 ring-border sm:p-8">
            <div className="absolute -top-4 right-6 rotate-3 rounded-full bg-amber px-4 py-1.5 font-heading text-sm font-extrabold text-ink shadow-md">
              50% OFF
            </div>
            <h2 className="text-2xl leading-tight font-extrabold">
              Fill up the form &amp; get{" "}
              <span className="text-brand">50% off</span> your first month’s fees
            </h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">
              A strategist will call you back within 24 hours with a free growth plan.
            </p>
            <LeadForm source="Homepage hero" variant="compact" submitLabel="Claim my 50% off" />
          </div>
        </div>
      </div>
    </section>
  )
}
