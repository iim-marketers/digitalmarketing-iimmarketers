import Image from "next/image"

import { cn } from "@/lib/utils"

/** Infinite, pause-on-hover logo strip. Pure CSS — no client JS. */
export function LogoMarquee({
  logos,
  reverse = false,
  duration = 45,
  className,
}: {
  logos: string[]
  reverse?: boolean
  duration?: number
  className?: string
}) {
  const items = [...logos, ...logos]
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
      style={{ "--marquee-duration": `${duration}s`, "--marquee-gap": "1rem" } as React.CSSProperties}
    >
      <ul
        className={cn(
          "flex w-max shrink-0 items-center gap-4 group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {items.map((src, i) => (
          <li
            key={`${src}-${i}`}
            aria-hidden={i >= logos.length}
            className="flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border bg-white px-5 sm:w-44"
          >
            <Image
              src={src}
              alt={i >= logos.length ? "" : "Client logo"}
              width={200}
              height={90}
              className="max-h-12 w-auto object-contain opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
