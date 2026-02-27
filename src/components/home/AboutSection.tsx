"use client";

import Image from "next/image";
import { CheckCircle, Dumbbell } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const values = [
  "Ambiente motivador y libre de juicios",
  "Equipos de calidad para todos los niveles",
  "Clases grupales que te retan y te divierten",
  "Comunidad que te apoya en cada paso",
  "Tienda de suplementos y nutrición deportiva",
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-roca-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Images */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg">
                <Image
                  src="/images/ceo.jpg"
                  alt="Fundador de Roca Gimnasio"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Secondary image overlapping */}
              <div className="absolute -bottom-8 -right-4 aspect-[4/3] w-48 overflow-hidden rounded-lg border-4 border-roca-black shadow-2xl sm:w-56 lg:-right-8">
                <Image
                  src="/images/reto-exercise.jpg"
                  alt="Entrenamiento al aire libre"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative badge */}
              <div className="absolute -left-4 top-8 flex h-20 w-20 items-center justify-center rounded-full bg-roca-red shadow-lg lg:-left-6">
                <Dumbbell className="h-8 w-8 text-white" />
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Content */}
          <ScrollReveal direction="right">
            <div>
              <p className="mb-3 font-[family-name:var(--font-oswald)] text-sm uppercase tracking-widest text-roca-red">
                Sobre Nosotros
              </p>
              <h2 className="mb-6 font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase text-white sm:text-4xl lg:text-5xl">
                Más Que Un Gym,
                <br />
                <span className="text-roca-red">Una Familia</span>
              </h2>
              <p className="mb-8 leading-relaxed text-roca-text">
                Roca Gimnasio nació con una misión simple: ser el gimnasio de la
                comunidad. Ubicados en Km 13, Autopista Duarte, hemos construido
                más que un espacio de entrenamiento — hemos creado una familia.
                Aquí no importa tu nivel, tu edad ni tu experiencia. Lo que
                importa es tu compromiso.
              </p>

              {/* Values list */}
              <ul className="mb-8 flex flex-col gap-3">
                {values.map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-roca-red" />
                    <span className="text-sm text-roca-text-light">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded border border-white/30 px-6 py-3 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-roca-red hover:text-roca-red"
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
