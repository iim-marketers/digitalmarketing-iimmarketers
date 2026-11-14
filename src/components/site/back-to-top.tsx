"use client";

import { ArrowUp } from "lucide-react";

import { cn } from "@/lib/utils";

/** Round "back to top" button with a spectrum ring. Smooth-scrolls unless reduced motion is on. */
export function BackToTop({ className }: { className?: string }) {
  function scrollToTop() {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <span
      className={cn(
        "bg-spectrum inline-flex rounded-full p-[2px] shadow-[0_12px_28px_-12px_rgb(91_52_232/0.55)] transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        className="group grid size-12 place-items-center rounded-full bg-white text-ink transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <ArrowUp
          className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </button>
    </span>
  );
}
