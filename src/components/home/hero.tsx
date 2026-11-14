import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, Star } from "lucide-react"

import { LeadForm } from "@/components/site/lead-form"
import { StatCounter } from "@/components/site/stat-counter"
import { siteConfig, stats, testimonials } from "@/lib/site"

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      {/* On desktop the hero fills the viewport below the 71px header and centres its content
          (capped at 60rem so very tall screens don't get empty bands); type and spacing scale with viewport height so CTAs and the form stay above the fold. */}
      <div className="container-page grid gap-12 pt-8 pb-14 sm:pt-12 sm:pb-16 lg:min-h-[min(calc(100svh-71px),60rem)] lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-[clamp(1.5rem,4svh,3.5rem)] xl:gap-14">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white py-1.5 pr-4 pl-1.5 text-sm text-ink/70">
            <span className="flex items-center gap-0.5 rounded-full bg-brand px-2 py-1 text-amber">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-current" aria-hidden />
              ))}
            </span>
            5.0 on Google<span className="hidden sm:inline"> · Founded by IIT-IIM alumni</span>
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.6rem,min(9vw,11svh),4.5rem)] leading-[0.94] tracking-[-0.055em] sm:text-[clamp(3rem,min(8vw,11svh),5.5rem)] lg:mt-[clamp(1.25rem,3svh,2rem)] lg:text-[clamp(3rem,min(6.2vw,10.5svh),6.25rem)]"
          >
            We <span className="text-spectrum pr-[0.04em]">triple</span> your business in six
            months.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg lg:mt-[clamp(1.25rem,3svh,2rem)] lg:text-[clamp(1rem,2.4svh,1.25rem)]">
            India’s lead-generation and sales specialists. Strategy from business-school minds,
            execution from our in-house studio and AI tools — within your budget.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-[clamp(1.5rem,4svh,2.5rem)]">
            <Link href="#growth-plan" className="btn btn-primary group h-13 px-7 text-base max-sm:w-full">
              Get my free growth plan
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
            <a href={siteConfig.phones.primary.href} className="btn btn-light h-13 px-6 text-base max-sm:w-full">
              <Phone className="size-4" aria-hidden />
              {siteConfig.phones.primary.label}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 lg:mt-[clamp(1.5rem,4.5svh,3rem)]">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 4).map((t) => (
                <Image
                  key={t.name}
                  src={t.image}
                  alt=""
                  width={44}
                  height={44}
                  className="size-11 rounded-full object-cover ring-3 ring-paper"
                />
              ))}
            </div>
            <p className="text-sm leading-snug text-ink/60">
              <span className="block font-semibold text-ink">Trusted by 150+ brands</span>
              across India, the UK, Australia &amp; Europe
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div
            id="growth-plan"
            className="max-w-2xl scroll-mt-24 rounded-[1.75rem] border border-line bg-white p-5 shadow-[0_40px_80px_-48px_rgb(35_29_69/0.35)] sm:p-7 lg:max-w-none lg:p-[clamp(1.25rem,3.2svh,2rem)]"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-paper-deep px-3 py-1 text-xs font-semibold text-ink">
              <span aria-hidden className="bg-spectrum size-2 rounded-full" />
              50% off your first month
            </p>
            <h2 className="mt-3 text-[1.6rem] leading-tight tracking-[-0.03em] sm:text-[1.75rem]">
              Get your free growth plan
            </h2>
            <p className="mt-1 mb-5 text-sm text-ink/60">
              A strategist calls you back within 24 hours.
            </p>
            <LeadForm source="Homepage hero" variant="compact" submitLabel="Get my free plan" />
          </div>
        </div>
      </div>

      <div className="container-page">
        {/* gap-px over a line-coloured background draws the inner dividers */}
        <dl className="grid grid-cols-2 gap-px border-y border-line bg-line lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col-reverse gap-1 bg-paper py-8 pr-4 pl-6 odd:pl-0 sm:py-10 sm:pl-8 sm:odd:pl-0 lg:[&:nth-child(3)]:pl-8"
            >
              <dt className="text-sm text-ink/55">{s.label}</dt>
              <dd className="font-heading text-[clamp(2.5rem,5vw,4rem)] leading-none font-semibold tracking-[-0.05em] text-ink">
                <StatCounter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
