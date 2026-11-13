import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="IIM Marketers — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <Image
        src="/images/brand/logo-footer.webp"
        alt=""
        width={300}
        height={300}
        priority
        className="-my-2 -mr-1 size-14 transition-transform duration-300 group-hover:-rotate-6"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-xl font-extrabold tracking-[0.2em]",
            inverted ? "text-white" : "text-ink"
          )}
        >
          IIM
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-medium tracking-[0.32em] uppercase",
            inverted ? "text-white/70" : "text-muted-foreground"
          )}
        >
          Marketers
        </span>
      </span>
    </Link>
  )
}
