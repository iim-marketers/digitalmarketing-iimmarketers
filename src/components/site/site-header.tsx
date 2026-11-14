"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ArrowRight, Mail, Menu, Phone } from "lucide-react"

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
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color] duration-300",
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent bg-paper"
      )}
    >
      {/* the signature: a hairline of the logo's spectrum */}
      <div aria-hidden className="bg-spectrum h-[3px] w-full" />

      <div className="container-page flex h-[68px] items-center justify-between gap-6">
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
                      "rounded-full px-4 py-2 text-[0.95rem] transition-colors",
                      active ? "bg-ink/[0.06] text-ink" : "text-ink/65 hover:text-ink"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phones.secondary.href}
            className="hidden items-center gap-2 px-3 text-sm text-ink/65 transition-colors hover:text-ink xl:inline-flex"
          >
            <Phone className="size-4" aria-hidden />
            {siteConfig.phones.secondary.label}
          </a>
          <Link href="/contact" className="btn btn-primary group hidden h-11 px-5 sm:inline-flex">
            Get Started
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-full border border-ink/15 bg-white lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm gap-0 bg-paper p-0">
              <div aria-hidden className="bg-spectrum h-[3px] w-full" />
              <SheetHeader className="p-5">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>
                <Logo />
              </SheetHeader>
              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5">
                <ul className="flex flex-col">
                  {mainNav.map((item) => {
                    const active = isActive(pathname, item.href)
                    return (
                      <li key={item.href} className="border-b border-line">
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                              "flex items-center justify-between py-5 font-heading text-3xl font-semibold tracking-tight transition-colors",
                              active ? "text-ink" : "text-ink/55 hover:text-ink"
                            )}
                          >
                            {item.title}
                            {active ? (
                              <span aria-hidden className="bg-spectrum size-2.5 rounded-full" />
                            ) : null}
                          </Link>
                        </SheetClose>
                      </li>
                    )
                  })}
                </ul>
              </nav>
              <div className="flex flex-col gap-3 p-5 text-sm text-ink/70">
                <a href={siteConfig.phones.secondary.href} className="flex items-center gap-3">
                  <Phone className="size-4" aria-hidden />
                  {siteConfig.phones.secondary.label}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3">
                  <Mail className="size-4" aria-hidden />
                  {siteConfig.email}
                </a>
                <SheetClose asChild>
                  <Link href="/contact" className="btn btn-primary mt-3 w-full">
                    Get Started
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  return <HeaderShell pathname={pathname} />
}
