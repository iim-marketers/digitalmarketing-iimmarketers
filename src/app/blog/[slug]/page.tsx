import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarDays, Folder } from "lucide-react"

import { BlogSidebar } from "@/components/site/blog-sidebar"
import { PageHero } from "@/components/site/page-hero"
import { formatDate, getPost, posts, type PostBlock } from "@/lib/posts"
import { siteConfig } from "@/lib/site"

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: post.cover.src, width: post.cover.width, height: post.cover.height }],
    },
  }
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-10 text-2xl font-semibold">{block.text}</h2>
    case "p":
      return <p className="mt-5 text-[1.05rem] leading-relaxed text-ink/80">{block.text}</p>
    case "list":
      return (
        <ul className="mt-4 flex flex-col gap-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[1.05rem] leading-relaxed text-ink/80">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-amber" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      )
    case "images":
      return (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {block.images.map((img) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={890}
              height={500}
              sizes="(min-width: 640px) 380px, 100vw"
              className="aspect-[89/50] w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      )
  }
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params
  const post = getPost(slug)
  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${siteConfig.url}${post.cover.src}`,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PageHero
        title={post.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category.name },
        ]}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_340px]">
          <article>
            <Image
              src={post.cover.src}
              alt=""
              width={post.cover.width}
              height={post.cover.height}
              priority
              sizes="(min-width: 1024px) 800px, 100vw"
              className="w-full rounded-3xl object-cover"
            />
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-b pb-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-4" aria-hidden />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <Link
                href={`/category/${post.category.slug}`}
                className="inline-flex items-center gap-1.5 hover:text-brand"
              >
                <Folder className="size-4" aria-hidden />
                {post.category.name}
              </Link>
            </div>

            <div className="mx-auto max-w-3xl pt-2">
              {post.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}

              <div className="mt-12 flex flex-wrap items-center gap-2 border-t pt-6">
                <span className="mr-2 text-sm font-semibold text-ink">Tags:</span>
                {post.tags.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/tag/${t.slug}`}
                    className="rounded-full border px-3.5 py-1.5 text-sm text-ink/75 transition-colors hover:border-brand hover:text-brand"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/blog"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
              >
                <ArrowLeft className="size-4" aria-hidden />
                Back to all posts
              </Link>
            </div>

          </article>

          <BlogSidebar excludeSlug={post.slug} activeCategory={post.category.slug} />
        </div>
      </section>
    </>
  )
}
