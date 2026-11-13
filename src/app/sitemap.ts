import type { MetadataRoute } from "next"

import { categories, getAllTags, posts } from "@/lib/posts"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${siteConfig.url}${path}`
  return [
    { url: url("/"), changeFrequency: "weekly", priority: 1 },
    { url: url("/about"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/contact"), changeFrequency: "yearly", priority: 0.8 },
    { url: url("/blog"), changeFrequency: "weekly", priority: 0.7 },
    ...posts.map((p) => ({
      url: url(`/blog/${p.slug}`),
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...categories.map((c) => ({ url: url(`/category/${c.slug}`), priority: 0.3 })),
    ...getAllTags().map((t) => ({ url: url(`/tag/${t.slug}`), priority: 0.2 })),
    { url: url("/privacy-policy"), priority: 0.1 },
    { url: url("/terms"), priority: 0.1 },
  ]
}
