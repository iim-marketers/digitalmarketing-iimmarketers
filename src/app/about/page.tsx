import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { iconMap } from "@/components/site/icons";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { aboutFeatures, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet IIM Marketers — dedicated editors, 24-hour delivery and stunning videos. A digital marketing team founded by IIT-IIM alumni and led by ex-Kantar and EY directors.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
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
                <span className="block font-heading text-2xl font-semibold text-ink">
                  24 hours
                </span>
                <span className="text-sm text-muted-foreground">
                  delivery time
                </span>
              </span>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About Your Company"
              title={
                <span id="about-title">
                  Dedicated Editors, 24 hours delivery time, Stunning Videos
                </span>
              }
            />
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We Promise to provide Professional Video Editing That Engages,
              Converts, and Elevates Your Brand. In today’s digital world,
              high-quality video content isn’t just an option—it’s a necessity.
              Whether you’re a brand, business, or creator, our expert video
              editing team ensures your videos stand out, engage your audience,
              and drive results.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutFeatures.map((f) => {
                const Icon = iconMap[f.icon];
                return (
                  <li
                    key={f.title}
                    className="flex items-center gap-3 rounded-2xl border p-4"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-paper-deep text-ink">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-medium text-ink">{f.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

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

      <section aria-labelledby="team-title" className="pb-14">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Our Expert People"
            title={
              <span id="team-title">Meet Our Professional Team Member</span>
            }
            description="Meet friendly, experienced and knowledgeable team members who make individuals and businesses pleased with their qualification. They often take their job seriously."
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
                    <p className="mt-1 text-sm text-muted-foreground">
                      {m.role}. {m.bio}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
