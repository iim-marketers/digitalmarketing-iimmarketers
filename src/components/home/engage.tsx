import Link from "next/link"
import { ArrowRight, Clock, Mail, Phone, ShieldCheck, Users } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/site/lead-form"
import { PostCard } from "@/components/site/post-card"
import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { TestimonialsCarousel } from "@/components/site/testimonials-carousel"
import { sortedPosts } from "@/lib/posts"
import { faqs, siteConfig, testimonials } from "@/lib/site"

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="section overflow-hidden">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our clients’ feedback"
            title={<span id="testimonials-title">Testimonials from clients</span>}
            description="Founders, marketing heads and creators on what it’s like to work with us."
          />
          <div className="flex items-center gap-3 rounded-2xl border bg-white px-5 py-3">
            <span className="font-heading text-3xl font-black text-ink">5.0</span>
            <span className="text-sm leading-tight text-muted-foreground">
              Average rating
              <br />
              on Google reviews
            </span>
          </div>
        </div>
        <div className="mt-12">
          <TestimonialsCarousel items={testimonials} />
        </div>
      </div>
    </section>
  )
}

const reasons = [
  { icon: Users, text: "Dedicated account managers and editors on your project" },
  { icon: ShieldCheck, text: "No contracts or hidden clauses, flexible payments" },
  { icon: Clock, text: "Cheaper than hiring an unreliable freelancer" },
]

export function WhyUsFaq() {
  return (
    <section aria-labelledby="why-title" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Why choose us"
            title={<span id="why-title">Why should you choose us?</span>}
            description="Top-notch delivery at a fair price — with a management team that includes an Ex-Director of Kantar Europe and an Ex-Director of EY."
          />
          <ul className="mt-8 flex flex-col gap-4">
            {reasons.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="text-ink/85">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <h3 className="sr-only">Frequently asked questions</h3>
          <Accordion type="single" collapsible defaultValue="faq-0" className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="rounded-2xl border bg-white px-5 transition-colors last:border-b data-[state=open]:border-brand/30 data-[state=open]:bg-lavender/60"
              >
                <AccordionTrigger className="py-5 text-left font-heading text-base font-bold text-ink hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}

export function VideoEditingCta() {
  return (
    <section aria-labelledby="video-cta-title" className="pb-16 sm:pb-20 lg:pb-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -top-24 left-1/4 size-80 rounded-full bg-brand/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-24 size-72 rounded-full bg-amber/20 blur-3xl" />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse,black,transparent_70%)]" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-medium text-amber">
              Works like an extension of your team, at your pace
            </p>
            <h2
              id="video-cta-title"
              className="mt-4 text-3xl leading-tight font-extrabold text-white sm:text-5xl"
            >
              Professional video editing that captivates, converts &amp; elevates your brand
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              A dedicated video editing team for your project with 24-hour delivery. Premium
              service, priced better than your freelancer.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-amber px-7 text-base text-ink hover:bg-amber/90"
              >
                <Link href="/contact">
                  Get a FREE trial
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/25 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
              >
                <a href={siteConfig.phones.primary.href}>
                  <Phone data-icon="inline-start" />
                  Contact us now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function LatestInsights() {
  return (
    <section aria-labelledby="insights-title" className="section bg-lavender">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Insights"
            title={<span id="insights-title">Our latest insights</span>}
          />
          <Button asChild variant="outline" className="h-11 shrink-0 rounded-full bg-white px-5">
            <Link href="/blog">
              View all blogs
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.slice(0, 3).map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 80}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ContactSection({ source = "Homepage contact" }: { source?: string }) {
  return (
    <section aria-labelledby="contact-title" className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact with us"
            title={<span id="contact-title">Get in touch for a FREE trial</span>}
            description="Tell us where you want to grow. We’ll come back within 24 hours with a plan — no obligation."
          />
          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <a
                href={siteConfig.phones.primary.href}
                className="group flex items-center gap-4 rounded-2xl border bg-white p-5 transition-colors hover:border-brand/40"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-brand text-white">
                  <Phone className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Call us</span>
                  <span className="font-heading text-lg font-bold text-ink group-hover:text-brand">
                    {siteConfig.phones.primary.label}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 rounded-2xl border bg-white p-5 transition-colors hover:border-brand/40"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-amber text-ink">
                  <Mail className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Send email</span>
                  <span className="font-heading text-lg font-bold text-ink group-hover:text-brand">
                    {siteConfig.email}
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-[1.75rem] border bg-white p-6 shadow-[0_30px_70px_-45px_rgb(29_23_41/0.4)] sm:p-9">
          <LeadForm source={source} submitLabel="Request free trial" />
        </div>
      </div>
    </section>
  )
}
