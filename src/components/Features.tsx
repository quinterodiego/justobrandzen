import { IconChevronDown, IconCloche, IconMapPin, IconStar } from "./icons";

const FEATURES = [
  {
    icon: IconStar,
    title: "Más de 20 años",
    description: "De historia y tradición en cada plato.",
  },
  {
    icon: IconCloche,
    title: "Cocina tradicional",
    description: "Recetas clásicas con el mejor sabor.",
  },
  {
    icon: IconMapPin,
    title: "En Quilmes",
    description: "Brandzen 245, esquina Brown. Fácil de llegar.",
  },
];

export function Features() {
  return (
    <section className="relative bg-[#0e0b09] pb-10 pt-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-3 lg:px-12">
        {FEATURES.map((f, i) => (
          <div key={f.title} className="relative flex items-start gap-4">
            {i > 0 && (
              <span className="absolute -left-5 top-1 hidden h-14 w-px bg-white/15 sm:block" />
            )}
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold text-gold-light">
              <f.icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-light">
                {f.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-white/70">
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a href="#carta" aria-label="Desplazarse hacia abajo" className="text-white/50 hover:text-gold-light">
          <IconChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
