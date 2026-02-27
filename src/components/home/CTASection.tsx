"use client";

import ScrollReveal from "../ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="bg-roca-orange py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-8 text-center">
        <ScrollReveal>
          <h2 className="mb-10 font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-white sm:text-5xl lg:text-6xl">
            ¿Estás Listo Para Empezar?
          </h2>
          <a
            href="https://wa.me/18098205103?text=Hola%20Roca%20Gimnasio,%20quiero%20inscribirme"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-10 py-4 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-roca-orange transition-colors hover:bg-gray-100"
          >
            Inscríbete Por WhatsApp
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
