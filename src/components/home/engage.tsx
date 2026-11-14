import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PostCard } from "@/components/site/post-card";
import { Reveal } from "@/components/site/reveal";
import { sortedPosts } from "@/lib/posts";
import { faqs, testimonials } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ── Testimonials ──────────────────────────────────────────────────────── */

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="pt-7 pb-14">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Client stories</p>
            <h2 id="testimonials-title" className="title mt-5 max-w-2xl">
              Don’t just take our word for it.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-heading text-6xl leading-none font-semibold tracking-[-0.05em]">
              5.0
            </span>
            <span className="flex flex-col gap-1">
              <span className="flex text-amber" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              <span className="text-sm text-ink/55">Average Google rating</span>
            </span>
          </div>
        </div>

        <div className="mt-14 gap-5 md:columns-2 lg:columns-3">
          {testimonials.map((t, i) => {
            const featured = i === 0;
            return (
              <Reveal
                key={t.name}
                delay={(i % 3) * 80}
                className="mb-5 break-inside-avoid"
              >
                <figure
                  className={cn(
                    "rounded-3xl p-7 sm:p-8",
                    featured
                      ? "bg-panel text-white"
                      : "border border-line bg-white",
                  )}
                >
                  <blockquote
                    className={cn(
                      "leading-relaxed",
                      featured
                        ? "text-lg text-white/85"
                        : "text-[1.02rem] text-ink/75",
                    )}
                  >
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3">
                    <Image
                      src={t.image}
                      alt=""
                      width={44}
                      height={44}
                      className="size-11 rounded-full object-cover"
                    />
                    <span className="flex flex-col">
                      <span
                        className={cn(
                          "font-semibold",
                          featured ? "text-white" : "text-ink",
                        )}
                      >
                        {t.name}
                      </span>
                      <span
                        className={cn(
                          "text-sm",
                          featured ? "text-white/75" : "text-ink/50",
                        )}
                      >
                        {t.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Why us + FAQ ──────────────────────────────────────────────────────── */

const reasons = [
  "Dedicated account managers and editors on your project",
  "No contracts or hidden clauses — flexible payments",
  "Money-back guarantee and 100% satisfaction promise",
  "Cheaper than hiring an unreliable freelancer",
];

export function WhyUsFaq() {
  return (
    <section aria-labelledby="why-title" className="section bg-paper-deep">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <p className="eyebrow">Why IIM Marketers</p>
          <h2 id="why-title" className="title mt-2">
            Questions, answered.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/60">
            Top-notch delivery at a fair price — led by an Ex-Director of Kantar
            Europe and an Ex-Director of EY.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3 text-ink/80">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Check className="size-3" aria-hidden strokeWidth={3} />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <h3 className="sr-only">Frequently asked questions</h3>
          <Accordion
            type="single"
            collapsible
            className="gap-3"
          >
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="rounded-2xl border-0 bg-white px-6 not-last:border-b-0 data-[state=open]:shadow-[0_20px_40px_-32px_rgb(18_17_23/0.35)]"
              >
                <AccordionTrigger className="items-center pt-4 font-heading text-lg leading-snug font-medium tracking-[-0.015em] text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-ink/65">
                  <p>{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ── Latest insights ───────────────────────────────────────────────────── */

export function LatestInsights() {
  return (
    <section aria-labelledby="insights-title" className="section">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">From the blog</p>
            <h2 id="insights-title" className="title mt-5">
              Ideas worth stealing.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-medium text-ink underline decoration-ink/20 underline-offset-4 transition-colors hover:decoration-ink"
          >
            All articles <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
