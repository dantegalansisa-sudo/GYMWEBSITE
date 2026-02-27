"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const values = [
  "Ambiente motivador y libre de juicios",
  "Clases grupales que te retan y te divierten",
  "Tienda de suplementos y nutrición deportiva",
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/gym-community.jpg"
                  alt="Comunidad Roca Gimnasio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border-2 border-roca-orange/30 lg:-bottom-6 lg:-left-6" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <p className="mb-3 font-[family-name:var(--font-oswald)] text-sm uppercase tracking-widest text-roca-orange">
                Sobre Roca Gimnasio
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase text-roca-black sm:text-4xl lg:text-5xl">
                Más Que Un Gym,
                <br />
                <span className="text-roca-orange">Una Familia</span>
              </h2>
              <div className="mb-6 flex items-center gap-2">
                <div className="h-0.5 w-8 bg-roca-orange" />
                <div className="h-0.5 w-2 bg-roca-orange" />
              </div>
              <p className="mb-10 text-lg leading-relaxed text-roca-gray">
                Roca Gimnasio nació con una misión simple: ser el gimnasio de la
                comunidad. Ubicados en Km 13, Autopista Duarte, hemos construido
                más que un espacio de entrenamiento — hemos creado una familia.
                Aquí no importa tu nivel, tu edad ni tu experiencia. Lo que
                importa es tu compromiso.
              </p>
              <ul className="mb-10 flex flex-col gap-4">
                {values.map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-roca-orange" />
                    <span className="text-lg text-roca-gray-dark">{value}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full border-2 border-roca-gray-border px-6 py-3 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-wider text-roca-gray-dark transition-colors hover:border-roca-orange hover:text-roca-orange"
              >
                Conócenos <span>&rarr;</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
