import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-lavender">
            <div className="container-page relative flex flex-col items-center py-24 text-center sm:py-32">
        <Image src="/images/brand/logo-footer.webp" alt="" width={120} height={120} className="size-28" />
        <p className="mt-4 text-spectrum font-heading text-8xl font-semibold tracking-[-0.06em]">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Page Not Found</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          This page can’t be found.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className="h-12 rounded-full px-6">
            <Link href="/">
              <ArrowLeft data-icon="inline-start" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
