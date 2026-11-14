import { LogoMarquee } from "@/components/site/logo-marquee"
import { clientLogos } from "@/lib/site"

export function TrustedBrands() {
  const half = Math.ceil(clientLogos.length / 2)
  return (
    <section aria-labelledby="brands-title" className="py-16 sm:py-20">
      <div className="container-page">
        <h2
          id="brands-title"
          className="text-center font-sans text-sm font-medium tracking-normal text-ink/55"
        >
          150+ brands have grown with us — from healthcare chains to D2C launches
        </h2>
      </div>
      <div className="mt-10 flex flex-col gap-6">
        <LogoMarquee logos={clientLogos.slice(0, half)} duration={50} />
        <LogoMarquee logos={clientLogos.slice(half)} duration={55} reverse />
      </div>
    </section>
  )
}
