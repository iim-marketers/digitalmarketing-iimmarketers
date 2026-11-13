export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "images"; images: { src: string; alt: string }[] }

export type Post = {
  slug: string
  /** Slug used on the original WordPress site — kept for permanent redirects. */
  legacySlug: string
  title: string
  excerpt: string
  date: string // ISO
  category: { slug: string; name: string }
  tags: { slug: string; name: string }[]
  cover: { src: string; width: number; height: number }
  readingMinutes: number
  body: PostBlock[]
}

const tag = {
  business: { slug: "business", name: "Business" },
  digitalMarketing: { slug: "digital-marketing", name: "Digital Marketing" },
  security: { slug: "security", name: "Security" },
  technology: { slug: "technology", name: "Technology" },
  web: { slug: "web", name: "Web" },
}

export const categories = [
  { slug: "digital-marketing", name: "Digital Marketing" },
  { slug: "it-consulting", name: "IT Consulting" },
  { slug: "technology", name: "Technology" },
  { slug: "web-development", name: "Web Development" },
]

const digitalMarketing = categories[0]

export const posts: Post[] = [
  {
    slug: "why-clean-well-edited-videos-are-essential",
    legacySlug: "a-complete-guide-to-business-insurance-perfect",
    title: "Why Clean and Well-Edited Videos Are Essential for Online Success",
    excerpt:
      "In the digital age, videos are one of the most effective ways to engage your audience — but not just any video will do. Here’s why clean editing decides your reach.",
    date: "2025-03-16",
    category: digitalMarketing,
    tags: [tag.business, tag.digitalMarketing],
    cover: { src: "/images/blog/clean-videos.webp", width: 1000, height: 563 },
    readingMinutes: 3,
    body: [
      {
        type: "p",
        text: "In the digital age, videos are one of the most effective ways to engage your audience. But not just any video will do — clean, well-edited videos are essential for maintaining viewer interest and achieving better reach.",
      },
      { type: "h2", text: "First impressions matter" },
      {
        type: "list",
        items: [
          "Poor-quality videos turn viewers away within seconds.",
          "Clean editing enhances professionalism and builds trust.",
        ],
      },
      { type: "h2", text: "The role of clarity and quality" },
      {
        type: "list",
        items: [
          "Crisp visuals and smooth transitions keep viewers engaged.",
          "Audio quality and background-noise reduction are equally important.",
        ],
      },
      { type: "h2", text: "Impact on social media reach" },
      {
        type: "list",
        items: [
          "Algorithms favour videos with higher watch time and engagement.",
          "Well-produced content is more likely to be shared and recommended.",
        ],
      },
      { type: "h2", text: "How to achieve clean video editing" },
      {
        type: "list",
        items: [
          "Use high-quality footage from the start.",
          "Master essential editing techniques like cuts, transitions and colour correction.",
        ],
      },
      {
        type: "images",
        images: [
          { src: "/images/blog/inline-03.webp", alt: "Editing timeline on a monitor" },
          { src: "/images/blog/inline-05.webp", alt: "Video production workspace" },
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Investing in clean and professional video editing not only boosts your credibility but also increases your chances of reaching a wider audience.",
      },
    ],
  },
  {
    slug: "eye-catching-videos-with-stunning-color-grading",
    legacySlug: "how-to-create-eye-catching-videos-with-stunning-color-grading",
    title: "How to Create Eye-Catching Videos with Stunning Color Grading",
    excerpt:
      "Eye-catching videos are more likely to go viral and build a strong connection with the audience. Stunning colour grading is one of the biggest levers you have.",
    date: "2025-01-17",
    category: digitalMarketing,
    tags: [tag.business, tag.security, tag.technology],
    cover: { src: "/images/blog/eye-catching-videos.webp", width: 1000, height: 667 },
    readingMinutes: 3,
    body: [
      {
        type: "p",
        text: "Eye-catching videos are more likely to go viral and build a strong connection with the audience. One of the most important elements of achieving this is stunning colour grading.",
      },
      { type: "h2", text: "Understanding the basics" },
      {
        type: "list",
        items: [
          "Colour correction vs. colour grading: what’s the difference?",
          "The importance of balanced and natural colours.",
        ],
      },
      { type: "h2", text: "Creating visual harmony" },
      {
        type: "list",
        items: [
          "How to choose the right colour palette for your niche.",
          "Harmonising colours to create visual flow.",
        ],
      },
      { type: "h2", text: "Colour grading for different platforms" },
      {
        type: "list",
        items: [
          "YouTube vs. Instagram: adapting grading techniques.",
          "Ensuring colours look great on mobile and desktop devices.",
        ],
      },
      { type: "h2", text: "Tips and tricks" },
      {
        type: "list",
        items: [
          "Start with colour correction to balance footage.",
          "Use LUTs (Look-Up Tables) to speed up the grading process.",
          "Test your graded video on multiple devices.",
        ],
      },
      {
        type: "images",
        images: [
          { src: "/images/blog/inline-04.webp", alt: "Colour grading wheels in an editor" },
          { src: "/images/blog/inline-03.webp", alt: "Editing timeline on a monitor" },
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Stunning colour grading not only makes your video look professional but also grabs viewers’ attention and keeps them engaged. Master this skill to stand out in a sea of content.",
      },
    ],
  },
  {
    slug: "power-of-color-grading-in-video-editing",
    legacySlug: "the-power-of-color-grading-in-video-editing-transform-your-content",
    title: "The Power of Color Grading in Video Editing: Transform Your Content",
    excerpt:
      "Colour grading is more than adding a filter — it sets the mood, enhances the story and captures attention. Here’s how it elevates your content.",
    date: "2024-01-17",
    category: digitalMarketing,
    tags: [tag.business, tag.digitalMarketing, tag.web],
    cover: { src: "/images/blog/color-grading-power.webp", width: 1000, height: 625 },
    readingMinutes: 4,
    body: [
      {
        type: "p",
        text: "Colour grading is more than just adding a filter to your video — it’s about setting the mood, enhancing the story and capturing your audience’s attention. In this post, we explore how colour grading can elevate your content and why it’s essential for video success.",
      },
      { type: "h2", text: "Why colour grading matters" },
      {
        type: "list",
        items: [
          "Improves visual appeal and professionalism.",
          "Helps maintain brand consistency across videos.",
          "Sets the mood and tone, making your content more immersive.",
        ],
      },
      { type: "h2", text: "Techniques to master" },
      {
        type: "list",
        items: [
          "Adjusting contrast and brightness for a balanced look.",
          "Using colour wheels to correct and stylise footage.",
          "Matching shots for a consistent colour palette.",
        ],
      },
      {
        type: "images",
        images: [
          { src: "/images/blog/inline-03.webp", alt: "Editing timeline on a monitor" },
          { src: "/images/blog/inline-05.webp", alt: "Video production workspace" },
        ],
      },
      { type: "h2", text: "Tools of the trade" },
      {
        type: "list",
        items: [
          "DaVinci Resolve, Adobe Premiere Pro and Final Cut Pro.",
          "Choosing the right tool for your needs and budget.",
        ],
      },
      { type: "h2", text: "Real-life examples" },
      {
        type: "list",
        items: [
          "How blockbuster movies use colour grading to enhance storytelling.",
          "Case study: how colour grading improved engagement for a YouTuber.",
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Colour grading is a powerful tool that can drastically change the look and feel of your videos. Investing time in this skill will make your content stand out and increase your reach.",
      },
    ],
  },
]

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}

export function getAllTags() {
  const map = new Map<string, string>()
  for (const p of posts) for (const t of p.tags) map.set(t.slug, t.name)
  return [...map].map(([slug, name]) => ({ slug, name }))
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`))
}
