"use client";

import TrainerCard from "../ui/TrainerCard";
import ScrollReveal from "../ui/ScrollReveal";

const trainers = [
  {
    image: "/images/ceo.jpg",
    name: "Propietario Roca Gimnasio",
    role: "Fundador & Coach Principal",
    description:
      "Fundador de Roca Gimnasio y líder de la comunidad ROCA. Apasionado por el fitness y la nutrición deportiva.",
    specialties: ["Pesas", "Entrenamiento Funcional", "Nutrición"],
  },
  {
    image: null,
    name: "Coach Mangu Valera",
    role: "Instructor de Boxeo — Campeón Mundial",
    description:
      "Campeón mundial de boxeo que trae su disciplina y experiencia al ring de Roca Gimnasio. Clases para adultos y niños.",
    specialties: ["Boxeo", "Defensa Personal", "Disciplina"],
  },
  {
    image: null,
    name: "Instructor Willy",
    role: "Instructor de Zumba",
    description:
      "Energía pura en cada clase. Willy hace que quemar calorías sea la parte más divertida de tu día.",
    specialties: ["Zumba", "Baile Fitness", "Cardio"],
  },
];

export default function TrainersSection() {
  return (
    <section id="equipo" className="bg-roca-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-white sm:text-5xl lg:text-6xl">
              Nuestro{" "}
              <span className="text-roca-red">Equipo</span>
            </h2>
            <p className="mt-4 text-roca-text">
              Profesionales comprometidos con tu transformación
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={trainer.name}
              image={trainer.image}
              name={trainer.name}
              role={trainer.role}
              description={trainer.description}
              specialties={trainer.specialties}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
