import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PageHero } from "@/components/site/page-hero"
import { PostListing } from "@/components/site/post-listing"
import { getAllTags, sortedPosts } from "@/lib/posts"

export function generateStaticParams() {
  return getAllTags().map((t) => ({ slug: t.slug }))
}

export async function generateMetadata(props: PageProps<"/tag/[slug]">): Promise<Metadata> {
  const { slug } = await props.params
  const tag = getAllTags().find((t) => t.slug === slug)
  if (!tag) return {}
  return {
    title: `${tag.name} — Blog`,
    description: `Articles tagged “${tag.name}” from the IIM Marketers team.`,
    alternates: { canonical: `/tag/${slug}` },
  }
}

export default async function TagPage(props: PageProps<"/tag/[slug]">) {
  const { slug } = await props.params
  const tag = getAllTags().find((t) => t.slug === slug)
  if (!tag) notFound()

  return (
    <>
      <PageHero
        title={`#${tag.name}`}
        description="Tag archive"
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: tag.name }]}
      />
      <PostListing
        posts={sortedPosts.filter((p) => p.tags.some((t) => t.slug === slug))}
        activeTag={slug}
      />
    </>
  )
}
