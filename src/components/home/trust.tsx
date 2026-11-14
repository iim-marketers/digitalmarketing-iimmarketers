import { LogoMarquee } from "@/components/site/logo-marquee";
import { clientLogos } from "@/lib/site";

export function TrustedBrands() {
  const half = Math.ceil(clientLogos.length / 2);
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
        <p className="font-heading text-2xl leading-tight font-semibold tracking-[-0.03em] text-ink sm:text-3xl lg:text-4xl">
          Founded by{" "}
          <span className="text-spectrum pr-[0.04em] whitespace-nowrap">
            Ex-Director
          </span>{" "}
          of Kantar and EY
        </p>
      </div>
    </section>
  );
}
