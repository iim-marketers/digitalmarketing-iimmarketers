import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-lavender">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse,black,transparent_70%)]" />
      <div className="container-page relative flex flex-col items-center py-24 text-center sm:py-32">
        <Image src="/images/brand/logo-footer.webp" alt="" width={120} height={120} className="size-28" />
        <p className="mt-4 font-heading text-7xl font-black text-brand">404</p>
        <h1 className="mt-2 text-3xl font-extrabold">This page leapt away</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className="h-12 rounded-full px-6">
            <Link href="/">
              <ArrowLeft data-icon="inline-start" />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full bg-white px-6">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
