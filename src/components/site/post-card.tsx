import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react"

import { formatDate, type Post } from "@/lib/posts"
import { cn } from "@/lib/utils"

export function PostCard({ post, className }: { post: Post; className?: string }) {
  const href = `/blog/${post.slug}`
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgb(18_17_23/0.45)]",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.cover.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <Link
          href={`/category/${post.category.slug}`}
          className="absolute top-4 left-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur transition-colors hover:bg-white"
        >
          {post.category.name}
        </Link>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" aria-hidden />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden />
            {post.readingMinutes} min read
          </span>
        </div>
        <h3 className="mt-3 text-xl leading-snug tracking-[-0.02em]">
          <Link
            href={href}
            className="transition-colors after:absolute after:inset-0 group-hover:text-ink/70"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-ink">
          Read more
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </div>
    </article>
  )
}
