"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { Quote, Star } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

type Testimonial = { name: string; role: string; image: string; quote: string }

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return
    const update = () => {
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap())
    }
    update()
    api.on("select", update)
    api.on("reInit", update)
    return () => {
      api.off("select", update)
      api.off("reInit", update)
    }
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true }}
      plugins={[Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true })]}
      className="w-full"
      aria-label="Client testimonials"
    >
      <CarouselContent className="-ml-5">
        {items.map((t) => (
          <CarouselItem key={t.name} className="pl-5 md:basis-1/2 xl:basis-1/3">
            <figure className="flex h-full flex-col rounded-3xl border bg-white p-7 transition-shadow duration-300 hover:shadow-[0_20px_50px_-25px_rgb(80_39_203/0.35)]">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-amber" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden />
                  ))}
                </div>
                <Quote className="size-8 text-brand/15" aria-hidden />
              </div>
              <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-ink/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                <Image
                  src={t.image}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover ring-2 ring-brand-soft"
                />
                <span className="flex flex-col">
                  <span className="font-heading font-bold text-ink">{t.name}</span>
                  <span className="text-sm text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === current ? "w-8 bg-brand" : "w-2 bg-brand/20 hover:bg-brand/40"
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <CarouselPrevious className="static size-11 translate-y-0 rounded-full" />
          <CarouselNext className="static size-11 translate-y-0 rounded-full" />
        </div>
      </div>
    </Carousel>
  )
}
