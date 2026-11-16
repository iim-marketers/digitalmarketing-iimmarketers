import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

import { LeadForm } from "@/components/site/lead-form";
import { PageHero } from "@/components/site/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with IIM Marketers for a free trial. Call +91 62913 92772 or email iimmarketers@gmail.com.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: Phone,
    label: "Call Us",
    value: siteConfig.phones.primary.label,
    href: siteConfig.phones.primary.href,
    tone: "bg-brand text-white",
  },
  {
    icon: Mail,
    label: "Send Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    tone: "bg-paper-deep text-ink",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="flex flex-col gap-6">
            <div>
              <span className="eyebrow">Contact With Us</span>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Get in Touch for <span className="text-brand">FREE</span> Trial
              </h2>
            </div>

            <ul className="flex flex-col gap-3">
              {channels.map(({ icon: Icon, ...c }) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-ink/30"
                  >
                    <span
                      className={`grid size-12 shrink-0 place-items-center rounded-xl ${c.tone}`}
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-muted-foreground">
                        {c.label}
                      </span>
                      <span className="block truncate font-heading text-lg font-semibold text-ink">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="rounded-3xl border p-6">
              <ul className="flex flex-col divide-y">
                {siteConfig.affiliates.map((a) => (
                  <li
                    key={a.label}
                    className="flex flex-col py-3 first:pt-0 last:pb-0"
                  >
                    <span className="text-xs font-semibold tracking-wide text-ink/50 uppercase">
                      {a.label}
                    </span>
                    <span className="text-ink/85">{a.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-fit rounded-[1.75rem] border bg-white p-6 shadow-[0_30px_70px_-45px_rgb(29_23_41/0.4)] sm:p-10 lg:sticky lg:top-28">
            <LeadForm source="Contact page" />
          </div>
        </div>
      </section>
    </>
  );
}
