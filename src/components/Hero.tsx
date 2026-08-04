import Image from "next/image";
import { IconBook, IconCalendar } from "./icons";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#140d09]"
    >
      <Image
        src="/hero.png"
        alt="Interior del restaurante Justo Brandzen"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* left-to-right scrim so text reads over the image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,7,5,0.94) 0%, rgba(10,7,5,0.8) 32%, rgba(10,7,5,0.45) 58%, rgba(10,7,5,0.15) 100%)",
        }}
      />

      {/* bottom vignette into the feature strip */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(10,7,5,0.95))",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-12">
        <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          La cocina de siempre,
          <br />
          en el <span className="text-gold-light">corazón</span> de Quilmes.
        </h1>

        <div className="mt-6 h-px w-24 bg-gold" />

        <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
          Platos clásicos, ingredientes seleccionados y el ambiente perfecto
          para disfrutar cada momento.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://pedidodirecto.net/menu/justobrandzencarta/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded bg-gold-light px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#1c1207] transition-colors hover:bg-[color-mix(in_srgb,var(--gold-light)_85%,white)]"
          >
            <IconBook className="h-5 w-5" />
            Ver Carta
          </a>
          <a
            href="#contacto"
            className="flex items-center justify-center gap-2 rounded border border-white/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-gold-light transition-colors hover:border-gold-light hover:bg-white/5"
          >
            <IconCalendar className="h-5 w-5" />
            Reservar Mesa
          </a>
        </div>
      </div>
    </section>
  );
}
