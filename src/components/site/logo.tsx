"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

import { cn } from "@/lib/utils";

function LogoArt({ className }: { className?: string }) {
  return (
    <svg viewBox="36 28 262 250" aria-hidden className={className}>
      <image href="/images/brand/logo-mark.webp" x="0" y="0" width="300" height="300" />
      <g transform="translate(78 186) scale(1.55)" fill="#29313c">
        <rect x="32.5" y="1" width="7.3" height="33" />
        <rect x="53.8" y="1" width="7.3" height="33" />
        <path
          d="M78.15 34V10.5a6.55 6.55 0 0 1 13.1 0V34M91.25 10.5a6.25 6.25 0 0 1 12.5 0V34"
          fill="none"
          stroke="#29313c"
          strokeWidth="7.3"
        />
        <rect x="3" y="49.8" width="6" height="1.8" />
        <rect x="131" y="49.8" width="6" height="1.8" />
        <text
          x="16"
          y="57"
          textLength="108"
          lengthAdjust="spacing"
          fontSize="16"
          fontWeight="500"
          style={{ fontFamily: "var(--font-geist), ui-sans-serif, sans-serif" }}
        >
          MARKETERS
        </text>
      </g>
    </svg>
  );
}

export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    if (window.location.hash) window.history.replaceState(null, "", "/");
    window.scrollTo({ top: 0 });
  };

  return (
    <Link
      href="/"
      aria-label="IIM Marketers — home"
      onClick={handleClick}
      className={cn("group inline-block shrink-0", className)}
    >
      <LogoArt
        className={cn(
          "w-auto transition-transform duration-500 group-hover:-translate-y-0.5",
          size === "lg" ? "h-36" : "h-[76px]",
        )}
      />
    </Link>
  );
}
