import { IconClock, IconMail, IconMapPin, IconPhone } from "./icons";

const ITEMS = [
  {
    icon: IconMapPin,
    label: "Dirección",
    lines: ["Brandzen 245, esq. Brown - Quilmes"],
  },
  {
    icon: IconPhone,
    label: "Teléfono",
    lines: ["2085-5699"],
    href: "tel:2085-5699",
  },
  {
    icon: IconMail,
    label: "Email",
    lines: ["justobrandzen@hotmail.com"],
    href: "mailto:justobrandzen@hotmail.com",
  },
  {
    icon: IconClock,
    label: "Horarios",
    lines: [
      "Martes, Miércoles y Jueves de 10 a 00 hs",
      "Viernes y Sábados de 11 a 00 hs",
      "Domingos de 11 a 16 hs",
    ],
  },
];

export function Contact() {
  return (
    <section id="contacto" className="border-t border-white/10 bg-[#0e0b09] py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-gold-light">
          Contacto
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl text-white sm:text-4xl">
          Justo Brandzen
        </h2>
        <div className="mx-auto mt-6 h-px w-24 bg-gold" />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {ITEMS.map((item) => {
            const content = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold-light">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-light">
                    {item.label}
                  </h3>
                  <div className="mt-1 space-y-0.5 text-sm leading-relaxed text-white/75">
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 transition-colors hover:text-gold-light"
              >
                {content}
              </a>
            ) : (
              <div key={item.label} className="flex items-start gap-4">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
