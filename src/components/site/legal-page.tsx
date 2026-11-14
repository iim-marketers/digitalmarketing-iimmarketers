import { PageHero } from "@/components/site/page-hero"

export type LegalSection = { heading: string; paragraphs: string[] }

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string
  updated?: string
  intro?: string
  sections: LegalSection[]
}) {
  return (
    <>
      <PageHero title={title} crumbs={[{ label: "Home", href: "/" }, { label: title }]} />
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[240px_1fr]">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                On this page
              </p>
              <ol className="mt-4 flex flex-col gap-2 border-l text-sm">
                {sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#section-${i + 1}`}
                      className="-ml-px block border-l border-transparent py-1 pl-4 text-ink/70 transition-colors hover:border-ink hover:text-ink"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
          <article className="max-w-3xl">
            {updated ? (
              <p className="mb-4 text-sm text-muted-foreground">Last updated: {updated}</p>
            ) : null}
            {intro ? <p className="text-lg leading-relaxed text-ink/80">{intro}</p> : null}
            {sections.map((s, i) => (
              <section key={s.heading} id={`section-${i + 1}`} className="scroll-mt-28">
                <h2 className="mt-10 text-2xl font-semibold first:mt-0">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="mt-4 leading-relaxed text-ink/75">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}
