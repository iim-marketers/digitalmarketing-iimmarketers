import type { NextConfig } from "next"

import { posts } from "./src/lib/posts"

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      ...posts.map((p) => ({
        source: `/${p.legacySlug}`,
        destination: `/blog/${p.slug}`,
        permanent: true,
      })),
      { source: "/team/:path*", destination: "/about", permanent: true },
      { source: "/feed", destination: "/blog", permanent: true },
      { source: "/comments/feed", destination: "/blog", permanent: true },
      { source: "/home", destination: "/", permanent: true },
    ]
  },
}

export default nextConfig
