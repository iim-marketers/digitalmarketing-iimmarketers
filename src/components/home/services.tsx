import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { iconMap } from "@/components/site/icons"
import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import {
  caseStudies,
  coreServices,
  processSteps,
  socialGuarantees,
  solutions,
  studioFeatures,
  studioPhotos,
} from "@/lib/site"

export function CoreServices() {
  return (
    <section aria-labelledby="services-title" className="section bg-lavender">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our core services"
            title={
              <span id="services-title">
                Your partner for performance-driven digital marketing
              </span>
            }
            description="A comprehensive suite of services designed to deliver measurable results and long-term ROI — from the first click to the final sale."
          />
          <Button asChild variant="outline" className="h-11 shrink-0 rounded-full bg-white px-5">
            <Link href="/contact">
              Discuss your project
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <Reveal as="li" key={s.title} delay={(i % 4) * 70}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_50px_-28px_rgb(80_39_203/0.45)]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg leading-snug font-bold">{s.title}</h3>
                  <p className="mt-1 text-xs font-medium tracking-wide text-amber-600 uppercase">
                    {s.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="pointer-events-none absolute -right-6 -bottom-6 size-24 rounded-full bg-amber/0 transition-colors duration-500 group-hover:bg-amber/15" />
                </article>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export function CaseStudies() {
  return (
    <section aria-labelledby="results-title" className="section">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Our completed projects"
          title={<span id="results-title">Results that speak for themselves</span>}
          description="Real campaigns, real numbers. A glimpse of what our team has delivered for brands like yours."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.client} delay={i * 100} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-white">
                <div className="overflow-hidden bg-muted">
                  <Image
                    src={c.image}
                    alt={`${c.client} — ${c.result}`}
                    width={c.width}
                    height={c.height}
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="aspect-[2/1] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6 sm:p-7">
                  <div>
                    <p className="text-sm font-semibold text-brand">{c.client}</p>
                    <h3 className="mt-1 text-xl font-extrabold sm:text-2xl">{c.result}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.detail}</p>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-amber/15 text-amber-700">
                    <TrendingUp className="size-5" aria-hidden />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
            <Link href="/contact">
              Get a free trial
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const defaultProcessImage = {
  src: "/images/brand/about.webp",
  alt: "IIM Marketers editors reviewing a colour grade together",
  width: 805,
  height: 760,
}

export function HowItWorks({
  image = defaultProcessImage,
}: {
  image?: { src: string; alt: string; width: number; height: number }
}) {
  return (
    <section aria-labelledby="process-title" className="section bg-ink text-white">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[805/760] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent" />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-amber p-5 text-ink shadow-xl sm:left-auto sm:-right-6">
            <p className="font-heading text-3xl font-black">100%</p>
            <p className="text-sm font-medium">satisfaction guarantee</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            inverted
            eyebrow="How it works"
            title={<span id="process-title">From analysis to results in four clear steps</span>}
            description="A process run by IIM graduates — structured, transparent and obsessed with outcomes."
          />
          <ol className="mt-10 flex flex-col gap-4">
            {processSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 80}>
                <div className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.06]">
                  <span className="font-heading text-2xl font-black text-amber tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export function Studio() {
  return (
    <section aria-labelledby="studio-title" className="section">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Team"
          title={<span id="studio-title">In-house video studio + proprietary AI tool</span>}
          description="Strategists, editors and engineers under one roof — so ideas move from brief to published in hours, not weeks."
        />

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
          {studioPhotos.map((p, i) => (
            <Reveal
              key={p.src}
              delay={i * 70}
              className={
                [
                  "col-span-2 row-span-2",
                  "col-span-1 row-span-1",
                  "col-span-1 row-span-2 md:row-span-2",
                  "col-span-1 row-span-1",
                ][i]
              }
            >
              <div className="group relative h-full overflow-hidden rounded-3xl">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {studioFeatures.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 80}>
              <article className="h-full rounded-3xl border bg-white p-7">
                <span className="font-heading text-sm font-black text-brand">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-bold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Guarantees() {
  return (
    <section aria-label="Our guarantees" className="pb-16 sm:pb-20 lg:pb-24">
      <div className="container-page grid gap-6 lg:grid-cols-2">
        <Reveal className="relative overflow-hidden rounded-3xl bg-brand p-8 text-white sm:p-10">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="relative">
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
              No. 1
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white">
              In lead generation &amp; paid campaigns
            </h2>
            <p className="mt-4 leading-relaxed text-white/75">
              We specialise in guaranteed lead generation and high-converting paid campaigns. From
              clinics and schools to service-sector companies, we deliver measurable results that
              drive business growth.
            </p>
            <Button
              asChild
              className="mt-8 h-12 rounded-full bg-amber px-6 text-base text-ink hover:bg-amber/90"
            >
              <Link href="/contact">
                Get started
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100} className="rounded-3xl border bg-lavender p-8 sm:p-10">
          <span className="eyebrow">Social media</span>
          <h2 className="mt-4 text-3xl font-extrabold">
            Best social media agency with guaranteed results
          </h2>
          <ul className="mt-6 flex flex-col gap-3.5">
            {socialGuarantees.map((g) => (
              <li key={g} className="flex items-start gap-3 text-ink/85">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Check className="size-3" strokeWidth={3} aria-hidden />
                </span>
                {g}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function Solutions() {
  return (
    <section aria-labelledby="solutions-title" className="section bg-lavender">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title={<span id="solutions-title">Solutions for every stage of growth</span>}
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <li key={s.number} className="group relative bg-white p-8 transition-colors hover:bg-ink">
              <span className="font-heading text-5xl font-black text-brand/10 transition-colors group-hover:text-amber/30">
                {s.number}
              </span>
              <h3 className="mt-2 text-xl font-bold transition-colors group-hover:text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/65">
                {s.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
