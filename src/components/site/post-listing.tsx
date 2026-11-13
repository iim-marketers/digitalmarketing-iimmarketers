import { BlogSidebar } from "@/components/site/blog-sidebar"
import { PostCard } from "@/components/site/post-card"
import type { Post } from "@/lib/posts"

export function PostListing({
  posts,
  emptyMessage = "No posts here yet — check back soon.",
  activeCategory,
  activeTag,
}: {
  posts: Post[]
  emptyMessage?: string
  activeCategory?: string
  activeTag?: string
}) {
  return (
    <section className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_340px]">
        <div>
          {posts.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2">
              {posts.map((p) => (
                <li key={p.slug}>
                  <PostCard post={p} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-3xl border border-dashed p-10 text-center text-muted-foreground">
              {emptyMessage}
            </p>
          )}
        </div>
        <BlogSidebar activeCategory={activeCategory} activeTag={activeTag} />
      </div>
    </section>
  )
}
