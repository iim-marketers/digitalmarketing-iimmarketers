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
    <section className="relative overflow-hidden bg-lavender">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-24 right-[10%] size-72 rounded-full bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-[5%] size-60 rounded-full bg-amber/20 blur-3xl" />
      <div className="container-page relative py-16 text-center sm:py-24">
        <nav aria-label="Breadcrumb" className="mb-5 flex justify-center">
          <ol className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-4 py-1.5 text-sm text-muted-foreground shadow-sm ring-1 ring-border">
            {crumbs.map((c, i) => (
              <li key={c.label} className="inline-flex items-center gap-1.5">
                {i > 0 ? <ChevronRight className="size-3.5 opacity-60" aria-hidden /> : null}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-brand">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-ink">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{title}</h1>
        {description ? (
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
