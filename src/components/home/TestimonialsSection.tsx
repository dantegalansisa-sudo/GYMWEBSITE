"use client";

import { Star, Quote } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

interface Testimonial {
  text: string;
  name: string;
  program: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Llevo 2 años en Roca Gimnasio y ha sido lo mejor que me ha pasado. El ambiente es increíble, los instructores te motivan y la comunidad te hace sentir en familia. ¡Fuerza que se respeta!",
    name: "Juan Carlos M.",
    program: "Miembro desde 2023",
  },
  {
    text: "Hice el Reto 21 Días y bajé 15 libras. Pero lo más importante fue el cambio mental. El equipo de ROCA te empuja a dar lo mejor de ti. 100% recomendado para cualquier persona.",
    name: "María Elena R.",
    program: "Reto 21 Días",
  },
  {
    text: "Mis hijos van a las clases de boxeo con Coach Mangu y la disciplina que han aprendido es impresionante. Más que boxeo, les enseña valores. Gracias Roca Gimnasio.",
    name: "Roberto A.",
    program: "Boxeo Infantil",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-roca-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-white sm:text-5xl lg:text-6xl">
              Lo Que Dicen{" "}
              <span className="text-roca-red">Nuestros Miembros</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
              <div className="relative rounded-lg border border-roca-gray bg-roca-black p-8 transition-all hover:border-roca-red/30">
                {/* Quote icon */}
                <Quote className="mb-4 h-8 w-8 text-roca-red/40" />

                {/* Text */}
                <p className="mb-6 leading-relaxed text-roca-text-light">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-roca-gold text-roca-gold"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <p className="font-[family-name:var(--font-oswald)] font-bold text-white">
                    {testimonial.name}
                  </p>
                  <span className="rounded-full bg-roca-red/10 px-3 py-1 text-xs font-medium text-roca-red">
                    {testimonial.program}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
