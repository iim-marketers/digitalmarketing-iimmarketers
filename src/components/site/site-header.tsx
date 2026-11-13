"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ArrowRight, Mail, Menu, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/site/logo"
import { mainNav, siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)
}

export function HeaderShell({ pathname }: { pathname: string | null }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-ink text-xs text-white/75 md:block">
        <div className="container-page flex h-9 items-center justify-between">
          <p>
            <span className="font-semibold text-amber">50% off</span> your first month — founded by
            IIT-IIM alumni, 9+ years of guaranteed results.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="size-3.5" aria-hidden />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.phones.primary.href}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="size-3.5" aria-hidden />
              {siteConfig.phones.primary.label}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "border-border/70 bg-white/85 shadow-[0_8px_30px_-12px_rgb(29_23_41/0.15)] backdrop-blur-lg"
            : "border-transparent bg-white"
        )}
      >
        <div className="container-page flex h-[72px] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors",
                        active ? "text-brand" : "text-ink/75 hover:text-ink"
                      )}
                    >
                      {item.title}
                      <span
                        className={cn(
                          "absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-amber transition-transform duration-300",
                          active ? "scale-x-100" : "scale-x-0"
                        )}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phones.secondary.href}
              className="hidden items-center gap-2.5 xl:flex"
              aria-label={`Call ${siteConfig.phones.secondary.label}`}
            >
              <span className="grid size-10 place-items-center rounded-full bg-brand-soft text-brand">
                <Phone className="size-4" aria-hidden />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[0.7rem] text-muted-foreground">Call anytime</span>
                <span className="text-sm font-semibold text-ink">
                  {siteConfig.phones.secondary.label}
                </span>
              </span>
            </a>
            <Button asChild className="hidden h-11 rounded-full px-5 text-sm sm:inline-flex">
              <Link href="/contact">
                Get Started
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon-lg"
                  className="size-11 rounded-full lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm gap-0 p-0">
                <SheetHeader className="border-b p-5">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetDescription className="sr-only">Site navigation</SheetDescription>
                  <Logo />
                </SheetHeader>
                <nav aria-label="Mobile" className="flex-1 overflow-y-auto p-5">
                  <ul className="flex flex-col gap-1">
                    {mainNav.map((item) => {
                      const active = isActive(pathname, item.href)
                      return (
                        <li key={item.href}>
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "flex items-center justify-between rounded-xl px-4 py-3.5 font-heading text-lg font-bold transition-colors",
                                active ? "bg-brand-soft text-brand" : "text-ink hover:bg-muted"
                              )}
                            >
                              {item.title}
                              <ArrowRight className="size-4 opacity-50" aria-hidden />
                            </Link>
                          </SheetClose>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
                <div className="flex flex-col gap-3 border-t bg-muted/60 p-5 text-sm">
                  <a href={siteConfig.phones.primary.href} className="flex items-center gap-3">
                    <Phone className="size-4 text-brand" aria-hidden />
                    {siteConfig.phones.primary.label}
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3">
                    <Mail className="size-4 text-brand" aria-hidden />
                    {siteConfig.email}
                  </a>
                  <SheetClose asChild>
                    <Button asChild className="mt-2 h-12 rounded-full text-base">
                      <Link href="/contact">Get a free trial</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  return <HeaderShell pathname={pathname} />
}
