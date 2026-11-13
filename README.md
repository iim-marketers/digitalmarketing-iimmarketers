# IIM Marketers — Digital Marketing Website

The Next.js rebuild of [digitalmarketing.iimmarketers.com](https://digitalmarketing.iimmarketers.com), which was previously built on WordPress.

**Stack:** Next.js 16 (App Router, Cache Components) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix) · lucide-react · Embla Carousel

## Getting started

```bash
npm install
cp .env.example .env.local   # optional, see "Forms" below
npm run dev                  # http://localhost:3000
```

| Script          | What it does                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack) |
| `npm run build` | Production build                 |
| `npm start`     | Serve the production build       |
| `npm run lint`  | ESLint                           |

## Project structure

```
src/
  app/
    page.tsx                 Home
    about/ contact/ blog/    Main pages
    blog/[slug]/             Blog posts
    category/[slug]/ tag/[slug]/   Blog archives
    privacy-policy/ terms/   Legal pages
    actions.ts               Server actions for the lead + newsletter forms
    sitemap.ts robots.ts     SEO
  components/
    ui/                      shadcn/ui primitives (generated: `npx shadcn add <name>`)
    site/                    Shared site components (header, footer, forms, cards…)
    home/                    Homepage sections
  lib/
    site.ts                  ← All site copy, contact details, services, stats, FAQs, testimonials
    posts.ts                 ← Blog posts (structured content)
public/images/               Assets migrated from the WordPress site
```

### Editing content

Most copy changes need only one file:

- **Phone numbers, email, services, stats, FAQs, testimonials, client logos, team:** `src/lib/site.ts`
- **Blog posts:** add an entry to `posts` in `src/lib/posts.ts`. Its page, archive listings, sitemap entry and footer "Recent news" are generated from that entry.

### Brand theme

Colours and fonts are defined as CSS variables in `src/app/globals.css`:

| Token        | Value     | Use                          |
| ------------ | --------- | ---------------------------- |
| `--brand`    | `#5027cb` | Primary purple (shadcn `primary`) |
| `--amber`    | `#ffb32e` | Accent / highlights          |
| `--ink`      | `#1d1729` | Headings, dark sections      |
| `--lavender` | `#f4f2f9` | Soft section backgrounds     |

Headings use **Nunito** and body text uses **Rubik** (via `next/font`).

## Forms

The hero form, contact form and newsletter form post to server actions in `src/app/actions.ts`. These validate input and include a honeypot field to catch spam bots.

- **With `RESEND_API_KEY` and `CONTACT_TO_EMAIL` set,** each submission is emailed to you through [Resend](https://resend.com).
- **Without them,** each submission is only written to the server log, so it works in local development.

To use a different provider (for example a CRM webhook or SMTP), replace the `deliver()` function in that file.

## SEO and migration

- Every page has its own title, description and canonical URL. Blog posts also output `BlogPosting` JSON-LD, and the homepage outputs `MarketingAgency` and `FAQPage` JSON-LD.
- Old WordPress post URLs permanently redirect (308) to their new `/blog/<slug>` addresses, so existing links and search rankings carry over. The redirects are defined in `next.config.ts`, using the `legacySlug` field on each post.
- `/sitemap.xml` and `/robots.txt` are generated automatically. Set `NEXT_PUBLIC_SITE_URL` in production so their URLs are correct.
