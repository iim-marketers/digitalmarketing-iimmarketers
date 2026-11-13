import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
  inverted = false,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  className?: string
  as?: "h1" | "h2"
  inverted?: boolean
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow", inverted && "text-amber")}>{eyebrow}</span>
      ) : null}
      <Tag
        className={cn(
          "text-3xl leading-tight font-extrabold sm:text-4xl",
          inverted && "text-white"
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "text-base leading-relaxed sm:text-lg",
            inverted ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
