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
        // bg-paper gives mix-blend-multiply a backdrop inside the mask's isolated group
        "group relative flex overflow-hidden bg-paper [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
      style={{ "--marquee-duration": `${duration}s`, "--marquee-gap": "3.5rem" } as React.CSSProperties}
    >
      <ul
        className={cn(
          "flex w-max shrink-0 items-center gap-14 group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {items.map((src, i) => (
          <li
            key={`${src}-${i}`}
            aria-hidden={i >= logos.length}
            className="flex h-16 w-32 shrink-0 items-center justify-center"
          >
            <Image
              src={src}
              alt={i >= logos.length ? "" : "Client logo"}
              width={200}
              height={90}
              className="max-h-12 w-auto object-contain mix-blend-multiply"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
