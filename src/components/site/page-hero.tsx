import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function PageHero({
  title,
  description,
  crumbs,
}: {
  title: string
  description?: string
  crumbs: { label: string; href?: string }[]
}) {
  return (
    <section className="border-b border-line">
      <div className="container-page pt-10 pb-14 sm:pt-14 sm:pb-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink/50">
            {crumbs.map((c, i) => (
              <li key={c.label} className="inline-flex items-center gap-1.5">
                {i > 0 ? <ChevronRight aria-hidden className="size-3.5 text-ink/30" /> : null}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-ink">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ink">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-8 max-w-4xl text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.045em] sm:mt-10">
          {title}
        </h1>
        <span aria-hidden className="bg-spectrum mt-6 block h-1 w-16 rounded-full" />
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">{description}</p>
        ) : null}
      </div>
    </section>
  )
}
