"use client";

import { Star, Quote } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const testimonials = [
  {
    text: "Llevo 2 años en Roca Gimnasio y ha sido lo mejor que me ha pasado. El ambiente es increíble y la comunidad te hace sentir en familia.",
    name: "Juan Carlos M.",
    program: "Miembro desde 2023",
  },
  {
    text: "Hice el Reto 21 Días y bajé 15 libras. Pero lo más importante fue el cambio mental. El equipo de ROCA te empuja a dar lo mejor de ti.",
    name: "María Elena R.",
    program: "Reto 21 Días",
  },
  {
    text: "Mis hijos van a las clases de boxeo con Coach Mangu y la disciplina que han aprendido es impresionante. Gracias Roca Gimnasio.",
    name: "Roberto A.",
    program: "Boxeo Infantil",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-roca-black sm:text-5xl lg:text-6xl">
              Lo Que Dicen{" "}
              <span className="text-roca-orange">Nuestros Miembros</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={index * 0.15}>
              <div className="rounded-xl border border-roca-gray-border bg-white p-8 transition-all hover:border-roca-orange/30 hover:shadow-md">
                <Quote className="mb-6 h-8 w-8 text-roca-orange/30" />
                <p className="mb-6 text-lg leading-relaxed text-roca-gray-dark">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-roca-gold text-roca-gold"
                    />
                  ))}
                </div>
                <p className="font-[family-name:var(--font-oswald)] font-bold text-roca-black">
                  {t.name}
                </p>
                <p className="text-sm text-roca-orange">{t.program}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
