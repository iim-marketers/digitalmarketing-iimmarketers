import type { Metadata } from "next"

import { PageHero } from "@/components/site/page-hero"
import { PostListing } from "@/components/site/post-listing"
import { sortedPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on video editing, colour grading, social media and performance marketing from the IIM Marketers team.",
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        description="Practical insights on video, content and performance marketing from our team."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <PostListing posts={sortedPosts} />
    </>
  )
}
