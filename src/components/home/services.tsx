import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check, Clock } from "lucide-react"

import { iconMap } from "@/components/site/icons"
import { Reveal } from "@/components/site/reveal"
import {
  caseStudies,
  coreServices,
  processSteps,
  socialGuarantees,
  studioFeatures,
  studioPhotos,
} from "@/lib/site"
import { cn } from "@/lib/utils"

/* ── Shared section header ─────────────────────────────────────────────── */

function SectionHead({
  id,
  eyebrow,
  title,
  aside,
  inverted = false,
}: {
  id: string
  eyebrow: string
  title: React.ReactNode
  aside?: React.ReactNode
  inverted?: boolean
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
        <p className={cn("eyebrow", inverted && "text-white/75")}>{eyebrow}</p>
        <h2 id={id} className={cn("title mt-5", inverted && "text-white")}>
          {title}
        </h2>
      </div>
      {aside ? (
        <div
          className={cn(
            "max-w-md text-lg leading-relaxed lg:col-span-5 lg:justify-self-end",
            inverted ? "text-white/75" : "text-ink/60"
          )}
        >
          {aside}
        </div>
      ) : null}
    </div>
  )
}

/* ── Services ──────────────────────────────────────────────────────────── */

export function CoreServices() {
  return (
    <section aria-labelledby="services-title" className="section pt-8 sm:pt-10 lg:pt-12">
      <div className="container-page">
        <SectionHead
          id="services-title"
          eyebrow="What we do"
          title="Everything you need to grow, under one roof."
          aside={
            <>
              <p>Performance-driven marketing — from the first click to the final sale.</p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-1.5 text-base font-medium text-ink underline decoration-ink/20 underline-offset-4 transition-colors hover:decoration-ink"
              >
                Discuss your project <ArrowRight className="size-4" aria-hidden />
              </Link>
            </>
          }
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <li key={s.title} className="group flex flex-col bg-white p-6 transition-colors hover:bg-paper sm:p-7">
                <span className="grid size-11 place-items-center rounded-xl bg-paper-deep text-ink transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-6 text-xl leading-snug tracking-[-0.02em] sm:mt-10">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/60">{s.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* ── Results ───────────────────────────────────────────────────────────── */

export function CaseStudies() {
  return (
    <section aria-labelledby="results-title" className="section bg-paper-deep">
      <div className="container-page">
        <SectionHead
          id="results-title"
          eyebrow="Results"
          title="Outcomes our clients can bank on."
          aside={<p>We measure success the way you do: footfall, orders and revenue.</p>}
        />

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6">
          {caseStudies.map((c, i) => (
            <Reveal key={c.client} delay={i * 100} className="h-full">
              <article className="group flex h-full flex-col rounded-[1.75rem] border border-line bg-white p-2.5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_64px_-40px_rgb(35_29_69/0.35)]">
                {/* Media: real photo beside a brand-coloured panel carrying the client's logo */}
                <div
                  className="grid aspect-[16/10] overflow-hidden rounded-[1.25rem]"
                  style={{ gridTemplateColumns: c.mediaColumns }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={c.photo.src}
                      alt={c.photoAlt}
                      fill
                      sizes="(min-width: 1024px) 440px, 75vw"
                      style={{ objectPosition: c.photo.position }}
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.7rem] font-medium text-ink shadow-sm backdrop-blur-sm sm:top-4 sm:left-4 sm:text-xs">
                      {c.brief}
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-center p-3"
                    style={{ backgroundColor: c.brandColor }}
                  >
                    <Image
                      src={c.logo}
                      alt={`${c.client} logo`}
                      width={160}
                      height={160}
                      className="aspect-square w-[72%] max-w-36 rounded-2xl object-cover shadow-[0_18px_40px_-18px_rgb(0_0_0/0.45)] ring-1 ring-white/25"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 pt-6 pb-4 sm:px-6 sm:pt-7 sm:pb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-sans text-base font-semibold tracking-normal text-ink">
                      {c.client}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
                      <Clock className="size-3.5" aria-hidden />
                      In {c.timeline}
                    </span>
                  </div>
                  <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-spectrum font-heading text-[clamp(3rem,6vw,4.75rem)] leading-[1.05] font-semibold tracking-[-0.06em]">
                      {c.metric}
                    </span>
                    <span className="text-lg font-medium text-ink/75">{c.metricLabel}</span>
                  </p>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/60">{c.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-[1.75rem] border border-line bg-white px-6 py-5 sm:flex-row sm:items-center sm:px-8 lg:mt-6">
            <p className="text-ink/70">
              <span className="font-semibold text-ink">Your brand could be next.</span> Get a free
              growth plan built around your numbers.
            </p>
            <Link href="/contact" className="btn btn-primary group h-11 shrink-0 px-5 max-sm:w-full">
              Get my free growth plan
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── How it works — four steps along the leap ──────────────────────────── */

// A rising curve, sampled as a polyline: y = 150 − 135·t^2.2 on a 1000×160 canvas.
const leapY = (t: number) => 150 - 135 * Math.pow(t, 2.2)
const leapPath = Array.from({ length: 61 }, (_, i) => {
  const t = i / 60
  return `${i ? "L" : "M"}${(t * 1000).toFixed(1)},${leapY(t).toFixed(1)}`
}).join(" ")
const stepAt = (i: number) => (i + 0.5) / processSteps.length

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
    <section aria-labelledby="process-title" className="section overflow-hidden bg-panel text-white">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow text-white/75">How we work</p>
            <h2 id="process-title" className="title mt-5 text-white">
              Four steps from today to 3×.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
              A process run by IIM graduates — structured, transparent and obsessed with outcomes.
            </p>
          </div>
          <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="400px"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* desktop: steps sit on a rising spectrum curve */}
        <div className="relative mt-20 hidden aspect-[1000/160] lg:block" aria-hidden>
          <svg
            viewBox="0 0 1000 160"
            className="absolute inset-0 h-full w-full overflow-visible"
          >
            <defs>
              <linearGradient id="leap-stroke" x1="0" x2="1000" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="0.28" stopColor="#f3c8ff" />
                <stop offset="0.56" stopColor="#c43aa6" />
                <stop offset="0.8" stopColor="#ff6a2b" />
                <stop offset="1" stopColor="#ffb21f" />
              </linearGradient>
            </defs>
            <line x1="0" x2="1000" y1="150" y2="150" stroke="white" strokeOpacity="0.25" />
            <path
              d={leapPath}
              fill="none"
              stroke="url(#leap-stroke)"
              strokeWidth="3"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1"
              className="motion-safe-only animate-[draw_2s_cubic-bezier(.6,.05,.25,1)_both] [animation-range:entry_20%_cover_50%] [animation-timeline:view()]"
            />
          </svg>
          {processSteps.map((step, i) => (
            <span
              key={step.title}
              className="absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-brand bg-white"
              style={{ left: `${stepAt(i) * 100}%`, top: `${(leapY(stepAt(i)) / 160) * 100}%` }}
            />
          ))}
          <span className="absolute bottom-[-1.75rem] left-0 text-xs text-white/65">Today · 1×</span>
          <span className="absolute -top-7 right-0 text-xs font-medium text-amber">Month 6 · 3×</span>
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 100}
              className="border-l border-white/25 pl-6 lg:border-l-0 lg:pl-0 lg:text-center"
            >
              <span className="text-sm text-white/65">Step {i + 1}</span>
              <h3 className="mt-2 text-2xl text-white">{step.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-white/75 lg:mx-auto lg:max-w-[16rem]">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ── Studio ────────────────────────────────────────────────────────────── */

const bento = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
]

export function Studio() {
  return (
    <section aria-labelledby="studio-title" className="section">
      <div className="container-page">
        <SectionHead
          id="studio-title"
          eyebrow="In-house studio"
          title="A video studio and an AI tool, under the same roof."
          aside={
            <p>
              Strategists, editors and engineers work side by side — so ideas move from brief to
              published in hours, not weeks.
            </p>
          }
        />

        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[240px]">
          {studioPhotos.map((p, i) => (
            <div key={p.src} className={cn("relative overflow-hidden rounded-2xl bg-paper-deep", bento[i])}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes={i === 0 ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 320px, 50vw"}
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>

        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {studioFeatures.map((f) => (
            <li key={f.title}>
              <span aria-hidden className="bg-spectrum block h-0.5 w-10 rounded-full" />
              <h3 className="mt-5 text-xl tracking-[-0.02em]">{f.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/60">{f.description}</p>
            </li>
          ))}
        </ul>

        <Reveal className="mt-16">
          <div className="grid gap-10 rounded-3xl bg-paper-deep p-7 sm:p-10 lg:grid-cols-12 lg:items-center lg:p-12">
            <div className="lg:col-span-6">
              <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-[-0.035em]">
                Video editing with 24-hour delivery.
              </h3>
              <p className="mt-3 max-w-md text-ink/60">
                A dedicated editing team on your project — premium quality, priced better than your
                freelancer.
              </p>
              <Link href="/contact" className="btn btn-primary group mt-7">
                Start a free trial
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </div>
            <ul className="flex flex-col gap-3 lg:col-span-6">
              {socialGuarantees.map((g) => (
                <li key={g} className="flex items-start gap-3 text-ink/80">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Check className="size-3" aria-hidden strokeWidth={3} />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
