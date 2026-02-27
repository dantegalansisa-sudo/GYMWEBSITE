"use client";

import Image from "next/image";
import { Award, Quote } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function CEOSection() {
  return (
    <section className="bg-roca-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left">
            <div>
              <p className="mb-3 font-[family-name:var(--font-oswald)] text-sm uppercase tracking-widest text-roca-orange">
                Nuestro Fundador
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase text-roca-black sm:text-4xl lg:text-5xl">
                Pasión Por El{" "}
                <span className="text-roca-orange">Fitness</span>
              </h2>
              <div className="mb-6 flex items-center gap-2">
                <div className="h-0.5 w-8 bg-roca-orange" />
                <div className="h-0.5 w-2 bg-roca-orange" />
              </div>
              <p className="mb-4 leading-relaxed text-roca-gray">
                Roca Gimnasio fue fundado con un sueño: crear un espacio donde
                cada persona, sin importar su nivel o experiencia, pudiera
                transformar su vida a través del fitness. Nuestro fundador ha
                dedicado más de una década a construir no solo un gimnasio, sino
                una comunidad que se apoya mutuamente.
              </p>
              <p className="mb-8 leading-relaxed text-roca-gray">
                Con formación en nutrición deportiva y entrenamiento funcional,
                lidera personalmente el Reto 21 Días y se asegura de que cada
                miembro de ROCA reciba atención personalizada. Su filosofía es
                simple: &ldquo;Si te comprometes, los resultados llegan.&rdquo;
              </p>
              <p className="mb-8 font-[family-name:var(--font-oswald)] text-sm italic tracking-wider text-roca-gray-dark">
                Fundador &amp; Coach Principal
              </p>
              <div className="relative rounded-2xl border border-roca-orange/20 bg-white p-6">
                <Quote className="absolute -top-3 left-4 h-8 w-8 text-roca-orange/30" />
                <p className="pl-2 text-lg italic leading-relaxed text-roca-gray-dark">
                  &ldquo;El gimnasio de ustedes. Fuerza que se respeta.&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative">
              <div className="relative aspect-[3/4] w-full max-w-lg overflow-hidden rounded-2xl">
                <Image src="/images/ceo.jpg" alt="Fundador de Roca Gimnasio" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-roca-orange/30 lg:-bottom-6 lg:-right-6" />
              <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-lg lg:-left-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-roca-orange-light">
                  <Award className="h-5 w-5 text-roca-orange" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-oswald)] text-lg font-bold text-roca-black">10+</p>
                  <p className="text-xs text-roca-gray">Años de Experiencia</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
