import Image from "next/image"

import { LogoMarquee } from "@/components/site/logo-marquee"
import { capabilities, clientLogos } from "@/lib/site"

export function TrustedBrands() {
  const half = Math.ceil(clientLogos.length / 2)
  return (
    <section aria-labelledby="brands-title" className="py-10 sm:py-12">
      <div className="container-page text-center">
        <h2
          id="brands-title"
          className="font-sans text-sm font-medium tracking-normal text-ink/55"
        >
          Brands that trust our Team
        </h2>
      </div>
      <div className="mt-10 flex flex-col gap-6">
        <LogoMarquee logos={clientLogos.slice(0, half)} duration={50} />
        <LogoMarquee logos={clientLogos.slice(half)} duration={55} reverse />
      </div>
      <div className="container-page mt-10 flex flex-col items-center gap-5 text-center">
        <p className="font-heading text-lg font-semibold tracking-[-0.02em] text-ink">
          Founded by Ex-Director of Kantar and EY
        </p>
        <ul className="flex flex-wrap justify-center gap-2.5">
          {capabilities.map((c) => (
            <li
              key={c.title}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white py-1.5 pr-4 pl-2 text-sm text-ink/80"
            >
              <Image src={c.icon} alt="" width={22} height={22} className="size-5.5 object-contain" />
              {c.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
