import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone, Star } from "lucide-react";

import { LeadForm } from "@/components/site/lead-form";
import { StatCounter } from "@/components/site/stat-counter";
import { heroHighlights, siteConfig, stats } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-x-clip">
      <div className="container-page relative isolate grid gap-12 pt-8 pb-14 sm:pt-12 sm:pb-16 lg:min-h-[min(calc(100svh-87px),60rem)] lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-[clamp(1.5rem,4svh,3.5rem)] xl:gap-14">
        <Image
          src="/images/brand/logo-footer.webp"
          alt=""
          aria-hidden
          width={300}
          height={300}
          className="pointer-events-none absolute -top-6 -right-16 -z-10 size-72 opacity-[0.12] select-none sm:-right-10 sm:size-96 lg:top-1/2 lg:right-auto lg:left-[24%] lg:size-[min(34rem,70svh)] lg:-translate-y-1/2 lg:opacity-[0.12]"
        />
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-3 rounded-full border border-line bg-white/80 py-1.5 pr-5 pl-1.5 shadow-[0_12px_32px_-20px_rgb(35_29_69/0.35)] backdrop-blur-sm">
            <span className="grid h-10 shrink-0 place-items-center rounded-full bg-brand px-3.5 font-heading text-lg font-semibold tracking-[-0.02em] text-white">
              5.0
            </span>
            <span className="flex flex-col gap-1 leading-none">
              <span className="flex gap-0.5 text-amber">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" aria-hidden />
                ))}
                <span className="sr-only">5 out of 5 stars</span>
              </span>
              <span className="text-[0.8rem] font-medium whitespace-nowrap text-ink">
                Rated on Google
              </span>
            </span>
            <span aria-hidden className="hidden h-9 w-px shrink-0 bg-line sm:block" />
            <span className="hidden max-w-[17rem] text-[0.8rem] leading-snug text-ink/60 sm:block">
              India’s best digital marketing agency in{" "}
              <span className="font-medium text-ink">lead generation &amp; sales</span>
            </span>
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.6rem,min(9vw,11svh),4.5rem)] leading-[0.94] tracking-[-0.055em] sm:text-[clamp(3rem,min(8vw,11svh),5.5rem)] lg:mt-[clamp(1.25rem,3svh,2rem)] lg:text-[clamp(3rem,min(6.2vw,10.5svh),6.25rem)]"
          >
            We <span className="text-spectrum pr-[0.04em]">triple</span> your
            business in 6 months.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg lg:mt-[clamp(1.25rem,3svh,2rem)] lg:text-[clamp(1rem,2.4svh,1.25rem)]">
            Founded by IIT-IIM alumni, delivering guaranteed lead generation and
            sales for 9+ years within your budget.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-[clamp(1.5rem,4svh,2.5rem)]">
            <Link
              href="#growth-plan"
              className="btn btn-primary group h-13 px-7 text-base max-sm:w-full"
            >
              Get Started
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
            <a
              href={siteConfig.phones.primary.href}
              className="btn btn-light h-13 px-6 text-base max-sm:w-full"
            >
              <Phone className="size-4" aria-hidden />
              {siteConfig.phones.primary.label}
            </a>
          </div>

          <ul className="mt-8 grid gap-x-6 gap-y-2.5 text-[0.95rem] text-ink/75 sm:grid-cols-2 lg:mt-[clamp(1.5rem,4.5svh,3rem)]">
            {heroHighlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                  <Check className="size-3" aria-hidden strokeWidth={3} />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div
            id="growth-plan"
            className="max-w-2xl scroll-mt-24 rounded-[1.75rem] border border-line bg-white p-5 shadow-[0_40px_80px_-48px_rgb(35_29_69/0.35)] sm:p-7 lg:max-w-none lg:p-[clamp(1.25rem,3.2svh,2rem)]"
          >
            <h2 className="mb-5 text-[1.5rem] leading-tight tracking-[-0.03em] sm:text-[1.65rem]">
              Fill up the form and get{" "}
              <span className="whitespace-nowrap text-brand">50% OFF</span> on
              first month fees
            </h2>
            <LeadForm source="Homepage hero" variant="compact" />
          </div>
        </div>
      </div>

      <div className="container-page">
        <div className="grid gap-3 pb-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-ink lg:col-span-4">
            What We’re Offering to Our Clients
          </h2>
          <p className="max-w-3xl leading-relaxed text-ink/65 lg:col-span-8">
            IIM Marketers, a leading digital marketing company in Bengaluru,
            leverages its in-house AI tool to deliver guaranteed digital
            marketing results, proven strategies, and maximum ROI.
          </p>
        </div>
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
  );
}
