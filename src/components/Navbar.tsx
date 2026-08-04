"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { IconClose, IconMenu } from "./icons";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "La Carta", href: "#carta" },
  { label: "Sobre Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a href="#inicio" className="shrink-0">
          <Logo />
        </a>

        <ul className="hidden items-center gap-9 text-sm font-medium tracking-wide text-white/90 lg:flex">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative pb-1 uppercase transition-colors hover:text-gold-light ${
                  i === 0
                    ? "text-gold-light after:absolute after:inset-x-0 after:-bottom-0 after:h-[2px] after:bg-gold-light"
                    : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden shrink-0 rounded border border-gold-light px-5 py-2.5 text-sm font-medium uppercase tracking-wide text-gold-light transition-colors hover:bg-gold-light hover:text-[#0e0b09] lg:block"
        >
          Reservar Mesa
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          className="text-white lg:hidden"
        >
          {open ? <IconClose className="h-7 w-7" /> : <IconMenu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-2 flex flex-col gap-1 rounded-lg border border-white/10 bg-[#0e0b09]/95 p-4 backdrop-blur lg:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded px-3 py-2 text-sm font-medium uppercase tracking-wide text-white/90 hover:bg-white/5 hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 rounded border border-gold-light px-3 py-2 text-center text-sm font-medium uppercase tracking-wide text-gold-light hover:bg-gold-light hover:text-[#0e0b09]"
          >
            Reservar Mesa
          </a>
        </div>
      )}
    </header>
  );
}
