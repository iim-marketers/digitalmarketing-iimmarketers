import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { categories, formatDate, getAllTags, posts, sortedPosts } from "@/lib/posts"
import { cn } from "@/lib/utils"

function Widget({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border bg-white p-6">
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

export function BlogSidebar({
  activeCategory,
  activeTag,
  excludeSlug,
}: {
  activeCategory?: string
  activeTag?: string
  excludeSlug?: string
}) {
  const recent = sortedPosts.filter((p) => p.slug !== excludeSlug).slice(0, 3)
  const tags = getAllTags()

  return (
    <aside className="flex flex-col gap-6 lg:sticky lg:top-28">
      <Widget title="Recent posts">
        <ul className="flex flex-col gap-4">
          {recent.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group flex gap-3">
                <Image
                  src={p.cover.src}
                  alt=""
                  width={80}
                  height={64}
                  className="h-16 w-20 shrink-0 rounded-xl object-cover"
                />
                <span className="flex flex-col gap-1">
                  <time dateTime={p.date} className="text-xs text-muted-foreground">
                    {formatDate(p.date)}
                  </time>
                  <span className="line-clamp-2 text-sm leading-snug font-semibold text-ink transition-colors group-hover:text-brand">
                    {p.title}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Widget>

      <Widget title="Categories">
        <ul className="flex flex-col">
          {categories.map((c) => {
            const count = posts.filter((p) => p.category.slug === c.slug).length
            const active = activeCategory === c.slug
            return (
              <li key={c.slug}>
                <Link
                  href={`/category/${c.slug}`}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors",
                    active ? "bg-brand-soft font-semibold text-brand" : "text-ink/80 hover:bg-muted"
                  )}
                >
                  {c.name}
                  <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground tabular-nums">
                    {count}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Widget>

      <Widget title="Popular topics">
        <ul className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/tag/${t.slug}`}
                aria-current={activeTag === t.slug ? "page" : undefined}
                className={cn(
                  "inline-flex rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                  activeTag === t.slug
                    ? "border-brand bg-brand text-white"
                    : "text-ink/75 hover:border-brand hover:text-brand"
                )}
              >
                {t.name}
              </Link>
            </li>
          ))}
        </ul>
      </Widget>

      <section className="relative overflow-hidden rounded-3xl bg-ink p-6 text-white">
        <div className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-brand/50 blur-3xl" />
        <p className="relative font-heading text-xl font-extrabold text-white">
          Get 50% off your first month
        </p>
        <p className="relative mt-2 text-sm text-white/70">
          Talk to an IIM-led strategist about your growth goals.
        </p>
        <Button
          asChild
          className="relative mt-5 h-11 rounded-full bg-amber px-5 text-ink hover:bg-amber/90"
        >
          <Link href="/contact">
            Get a free trial
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
      </section>
    </aside>
  )
}
