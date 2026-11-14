import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google"
import { Suspense } from "react"

import { HeaderShell, SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { siteConfig } from "@/lib/site"
import "./globals.css"

// Characterful grotesk for headings; Geist carries body copy.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
})

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "digital marketing agency Bengaluru",
    "lead generation agency India",
    "social media marketing Kolkata",
    "SEO agency",
    "PPC agency",
    "video editing services",
    "IIM Marketers",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  alternates: { canonical: "/" },
}

export const viewport: Viewport = {
  themeColor: "#fbfaf7",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-brand px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <TooltipProvider>
          <Suspense fallback={<HeaderShell pathname={null} />}>
            <SiteHeader />
          </Suspense>
          <main id="main" className="flex-1 overflow-x-clip">
            {children}
          </main>
          <SiteFooter />
        </TooltipProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
