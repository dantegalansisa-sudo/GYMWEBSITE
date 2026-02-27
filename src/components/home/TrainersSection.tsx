"use client";

import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";

const trainers = [
  { image: "/images/ceo.jpg", name: "Propietario Roca Gimnasio", role: "Fundador & Coach Principal",
    description: "Fundador de Roca Gimnasio y líder de la comunidad ROCA. Apasionado por el fitness y la nutrición deportiva.",
    specialties: ["Pesas", "Entrenamiento Funcional", "Nutrición"] },
  { image: null, name: "Coach Mangu Valera", role: "Instructor de Boxeo — Campeón Mundial",
    description: "Campeón mundial de boxeo que trae su disciplina y experiencia al ring de Roca Gimnasio. Clases para adultos y niños.",
    specialties: ["Boxeo", "Defensa Personal", "Disciplina"] },
  { image: null, name: "Instructor Willy", role: "Instructor de Zumba",
    description: "Energía pura en cada clase. Willy hace que quemar calorías sea la parte más divertida de tu día.",
    specialties: ["Zumba", "Baile Fitness", "Cardio"] },
];

export default function TrainersSection() {
  return (
    <section id="equipo" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-roca-black sm:text-5xl lg:text-6xl">
              Nuestro <span className="text-roca-orange">Equipo</span>
            </h2>
            <p className="mt-4 text-roca-gray">Profesionales comprometidos con tu transformación</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, index) => (
            <ScrollReveal key={trainer.name} delay={index * 0.15}>
              <div className="group overflow-hidden rounded-2xl border border-roca-gray-border bg-white transition-all duration-300 hover:border-roca-orange hover:shadow-lg hover:shadow-roca-orange/10">
                <div className="relative h-72 w-full overflow-hidden bg-roca-light">
                  {trainer.image ? (
                    <Image src={trainer.image} alt={trainer.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-roca-orange-light to-roca-light">
                      <div className="h-24 w-24 rounded-full bg-roca-orange/10" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold uppercase text-roca-black">{trainer.name}</h3>
                  <p className="mb-3 font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-orange">{trainer.role}</p>
                  <p className="mb-4 text-sm leading-relaxed text-roca-gray">{trainer.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((spec) => (
                      <span key={spec} className="rounded-full bg-roca-orange-light px-3 py-1 text-xs font-medium text-roca-orange">{spec}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
