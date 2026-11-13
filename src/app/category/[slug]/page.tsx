import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PageHero } from "@/components/site/page-hero"
import { PostListing } from "@/components/site/post-listing"
import { categories, sortedPosts } from "@/lib/posts"

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata(props: PageProps<"/category/[slug]">): Promise<Metadata> {
  const { slug } = await props.params
  const category = categories.find((c) => c.slug === slug)
  if (!category) return {}
  return {
    title: `${category.name} — Blog`,
    description: `Articles about ${category.name.toLowerCase()} from the IIM Marketers team.`,
    alternates: { canonical: `/category/${slug}` },
  }
}

export default async function CategoryPage(props: PageProps<"/category/[slug]">) {
  const { slug } = await props.params
  const category = categories.find((c) => c.slug === slug)
  if (!category) notFound()

  return (
    <>
      <PageHero
        title={category.name}
        description="Category archive"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: category.name },
        ]}
      />
      <PostListing
        posts={sortedPosts.filter((p) => p.category.slug === slug)}
        activeCategory={slug}
        emptyMessage={`No ${category.name} articles yet — check back soon.`}
      />
    </>
  )
}
