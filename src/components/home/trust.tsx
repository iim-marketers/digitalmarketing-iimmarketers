import Image from "next/image"
import { Award } from "lucide-react"

import { LogoMarquee } from "@/components/site/logo-marquee"
import { StatCounter } from "@/components/site/stat-counter"
import { Reveal } from "@/components/site/reveal"
import { capabilities, clientLogos, stats } from "@/lib/site"

export function TrustedBrands() {
  const half = Math.ceil(clientLogos.length / 2)
  return (
    <section aria-labelledby="brands-title" className="py-16 sm:py-20">
      <div className="container-page flex flex-col items-center gap-4 text-center">
        <h2 id="brands-title" className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Brands that trust our team
        </h2>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <LogoMarquee logos={clientLogos.slice(0, half)} duration={50} />
        <LogoMarquee logos={clientLogos.slice(half)} duration={55} reverse />
      </div>
      <div className="container-page mt-10 flex justify-center">
        <p className="inline-flex items-center gap-2.5 rounded-full bg-brand-soft px-5 py-2.5 text-sm font-medium text-brand">
          <Award className="size-4" aria-hidden />
          Founded by an Ex-Director of Kantar and EY
        </p>
      </div>
    </section>
  )
}

export function CapabilityTicker() {
  const items = [...capabilities, ...capabilities]
  return (
    <section aria-label="What we do" className="relative -rotate-1 bg-brand py-5 shadow-lg">
      <div
        className="group flex overflow-hidden"
        style={{ "--marquee-duration": "35s", "--marquee-gap": "0rem" } as React.CSSProperties}
      >
        <ul className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {[...items, ...items].map((c, i) => (
            <li
              key={`${c.title}-${i}`}
              aria-hidden={i >= capabilities.length}
              className="flex shrink-0 items-center gap-3 px-8 font-heading text-lg font-extrabold whitespace-nowrap text-white sm:text-xl"
            >
              <span className="grid size-10 place-items-center rounded-full bg-white">
                <Image src={c.icon} alt="" width={28} height={28} className="size-6 object-contain" />
              </span>
              {c.title}
              <span className="ml-8 text-amber" aria-hidden>
                ✦
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Offering() {
  return (
    <section aria-labelledby="offering-title" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <span className="eyebrow">What we’re offering</span>
          <h2 id="offering-title" className="mt-4 text-3xl leading-tight font-extrabold sm:text-4xl">
            A leading digital marketing company in Bengaluru, powered by an{" "}
            <span className="text-brand">in-house AI tool</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We deliver guaranteed digital marketing results, proven strategies and maximum ROI —
            with a specialised marketing team, in-house AI experts and a state-of-the-art video
            studio working as one.
          </p>
        </Reveal>

        <dl className="grid grid-cols-2 gap-4 sm:gap-5">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className={
                i === 0
                  ? "rounded-3xl bg-ink p-6 text-white sm:p-8"
                  : "rounded-3xl border bg-white p-6 sm:p-8"
              }
            >
              <dt className={i === 0 ? "text-sm text-white/70" : "text-sm text-muted-foreground"}>
                {s.label}
              </dt>
              <dd
                className={`mt-3 font-heading text-4xl font-black sm:text-5xl ${i === 0 ? "text-amber" : "text-brand"}`}
              >
                <StatCounter value={s.value} suffix={s.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
