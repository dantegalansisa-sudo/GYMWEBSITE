"use client";

import { MapPin } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="bg-roca-red py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <ScrollReveal>
          <h2 className="mb-6 font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-white sm:text-5xl lg:text-6xl">
            ¿Estás Listo Para Empezar?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/90">
            Únete a la familia ROCA y transforma tu vida. Tu primera visita
            puede ser hoy.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/18098205103?text=Hola%20Roca%20Gimnasio,%20quiero%20inscribirme"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-white px-8 py-4 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-roca-red transition-colors hover:bg-gray-100"
            >
              Inscríbete Por WhatsApp
            </a>
            <a
              href="tel:+18098205103"
              className="rounded border-2 border-white px-8 py-4 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              Llámanos: 809-820-5103
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/80">
            <MapPin className="h-4 w-4" />
            Km 13, Autopista Duarte, Los Ángeles, Santo Domingo
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
