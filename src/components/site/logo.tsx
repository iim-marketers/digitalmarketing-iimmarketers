import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="IIM Marketers — home"
      className={cn("group inline-flex items-center gap-1.5", className)}
    >
      <Image
        src="/images/brand/logo-footer.webp"
        alt=""
        width={300}
        height={300}
        priority
        className="-my-2 -ml-2 size-12 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:-rotate-6"
      />
      <span
        className={cn(
          "font-heading text-xl font-semibold tracking-[-0.03em]",
          inverted ? "text-white" : "text-ink"
        )}
      >
        IIM Marketers
      </span>
    </Link>
  )
}
