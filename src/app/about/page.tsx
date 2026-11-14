import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HowItWorks } from "@/components/home/services"
import { Testimonials } from "@/components/home/engage"
import { TrustedBrands } from "@/components/home/trust"
import { iconMap } from "@/components/site/icons"
import { PageHero } from "@/components/site/page-hero"
import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { StatCounter } from "@/components/site/stat-counter"
import { aboutFeatures, stats, studioPhotos, team } from "@/lib/site"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet IIM Marketers — dedicated editors, 24-hour delivery and stunning videos. A digital marketing team founded by IIT-IIM alumni and led by ex-Kantar and EY directors.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About us"
        description="Strategy from IIM minds, execution from an in-house studio — built to make your brand grow."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section aria-labelledby="about-title" className="section">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="/images/brand/about.webp"
                alt="IIM Marketers editors reviewing a colour grade together"
                width={805}
                height={760}
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="aspect-[805/760] w-full object-cover"
              />
            </div>
            <div className="absolute -right-3 -bottom-6 flex items-center gap-4 rounded-2xl bg-white p-4 pr-6 shadow-xl ring-1 ring-border sm:-right-8">
              <span className="grid size-12 place-items-center rounded-full bg-brand text-white">
                <Play className="size-5 fill-current" aria-hidden />
              </span>
              <span>
                <span className="block font-heading text-2xl font-semibold text-ink">24 hrs</span>
                <span className="text-sm text-muted-foreground">delivery time</span>
              </span>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About your company"
              title={
                <span id="about-title">Dedicated editors, 24-hour delivery, stunning videos</span>
              }
            />
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We promise professional video editing that engages, converts and elevates your brand.
              In today’s digital world, high-quality video content isn’t just an option — it’s a
              necessity. Whether you’re a brand, business or creator, our expert team ensures your
              videos stand out, engage your audience and drive results.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutFeatures.map((f) => {
                const Icon = iconMap[f.icon]
                return (
                  <li key={f.title} className="flex items-center gap-3 rounded-2xl border p-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-paper-deep text-ink">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-medium text-ink">{f.title}</span>
                  </li>
                )
              })}
            </ul>
            <Button asChild size="lg" className="mt-9 h-12 rounded-full px-7 text-base">
              <Link href="/contact">
                Contact us
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section aria-label="Key numbers" className="pb-16 sm:pb-20">
        <div className="container-page">
          <dl className="grid grid-cols-2 divide-border rounded-3xl border bg-lavender lg:grid-cols-4 lg:divide-x">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse p-6 text-center sm:p-8">
                <dt className="mt-2 text-sm text-muted-foreground">{s.label}</dt>
                <dd className="font-heading text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <HowItWorks image={studioPhotos[3]} />

      <section aria-labelledby="viral-title" className="section">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] bg-panel px-6 py-14 text-center text-white sm:px-12">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse,black,transparent_70%)]" />
            <h2
              id="viral-title"
              className="relative mx-auto max-w-3xl text-3xl leading-tight font-semibold text-white sm:text-4xl"
            >
              We turn your raw footage into viral, scroll-stopping videos!
            </h2>
            <Button
              asChild
              size="lg"
              className="relative mt-8 h-12 rounded-full bg-white px-7 text-base text-brand hover:bg-white/90"
            >
              <Link href="/contact">
                Contact us
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="team-title" className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Our expert people"
            title={<span id="team-title">Meet our professional team</span>}
            description="Friendly, experienced and knowledgeable people who take your growth as seriously as you do."
          />
          <ul className="mt-12 flex flex-wrap justify-center gap-6">
            {team.map((m) => (
              <li key={m.name} className="w-full max-w-sm">
                <article className="group overflow-hidden rounded-3xl border bg-white">
                  <div className="relative aspect-[550/580] overflow-hidden bg-lavender">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="384px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold">{m.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-ink/60">{m.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{m.bio}</p>
                  </div>
                </article>
              </li>
            ))}
            <li className="w-full max-w-sm">
              <div className="flex h-full flex-col items-center justify-center gap-4 rounded-3xl border border-dashed bg-lavender/60 p-8 text-center">
                <span className="grid size-14 place-items-center rounded-full bg-white text-ink shadow-sm">
                  <Award className="size-6" aria-hidden />
                </span>
                <p className="font-heading text-xl font-bold text-ink">
                  Led by an Ex-Director of Kantar Europe and an Ex-Director of EY
                </p>
                <p className="text-sm text-muted-foreground">
                  Plus strategists, editors, designers and AI engineers across India, the UK and
                  the Netherlands.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div className="bg-lavender">
        <TrustedBrands />
      </div>
      <Testimonials />
    </>
  )
}
