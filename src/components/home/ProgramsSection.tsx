"use client";

import Image from "next/image";
import { CheckCircle, Flame } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const includes = [
  "Rutinas personalizadas de 21 días",
  "Actividades al aire libre con el equipo",
  "Guía de nutrición",
  "Grupo de WhatsApp con soporte diario",
  "Camiseta oficial del Reto",
  "Medición de progreso (antes y después)",
];

export default function ProgramsSection() {
  return (
    <section id="programas" className="bg-roca-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image src="/images/reto-group.jpg" alt="Reto 21 Días Roca Gimnasio" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 aspect-video w-44 overflow-hidden rounded-xl border-4 border-white shadow-xl sm:w-52 lg:-right-6">
                <Image src="/images/reto-exercise.jpg" alt="Ejercicio al aire libre" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border-2 border-roca-orange/20" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-roca-orange/30 bg-roca-orange-light px-4 py-2">
                <Flame className="h-4 w-4 text-roca-orange" />
                <span className="font-[family-name:var(--font-oswald)] text-xs uppercase tracking-widest text-roca-orange">Programa Estrella</span>
              </div>
              <h2 className="mb-2 font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase text-roca-black sm:text-4xl lg:text-5xl">
                Reto 21 Días <span className="text-roca-orange">Fitness</span>
              </h2>
              <p className="mb-4 font-[family-name:var(--font-oswald)] text-lg text-roca-gray-dark">Transforma tu cuerpo en 21 días</p>
              <p className="mb-8 leading-relaxed text-roca-gray">
                Nuestro programa más popular. 21 días de entrenamiento intensivo
                que combina rutinas en el gym, actividades al aire libre, guía
                nutricional y el apoyo de toda la comunidad ROCA. No es solo
                ejercicio — es una transformación completa.
              </p>
              <ul className="mb-8 flex flex-col gap-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-roca-orange" />
                    <span className="text-sm text-roca-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/18098205103?text=Hola%20Roca%20Gimnasio,%20quiero%20unirme%20al%20Reto%2021%20Días"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-roca-orange px-8 py-4 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-roca-orange-hover"
              >Quiero Unirme Al Reto &rarr;</a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
