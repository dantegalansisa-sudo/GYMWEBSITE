"use client";

import Image from "next/image";
import { Dumbbell } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

interface ClassBlock {
  subtitle: string;
  title: string;
  description: string;
  schedule?: string;
  buttonText: string;
  whatsappMessage: string;
  image: string | null;
  imageAlt: string;
  reverse: boolean;
  bg: string;
}

const classes: ClassBlock[] = [
  {
    subtitle: "Explora Tu Fuerza",
    title: "Pesas Y Musculación",
    description:
      "Zona completa de pesas libres, máquinas y equipos de última generación para que entrenes a tu ritmo. Desde principiantes hasta avanzados, aquí encontrarás todo lo que necesitas para transformar tu cuerpo.",
    schedule: "Lun-Vie 5AM-12AM | Sáb 6AM-2PM",
    buttonText: "Inscríbete",
    whatsappMessage:
      "Hola Roca Gimnasio, quiero información sobre la membresía de pesas",
    image: null,
    imageAlt: "Zona de pesas Roca Gimnasio",
    reverse: false,
    bg: "bg-white",
  },
  {
    subtitle: "Baila Y Quema",
    title: "Zumba",
    description:
      "Clases de zumba con el Instructor Willy. Quema calorías mientras te diviertes al ritmo de la música. La forma más divertida de hacer cardio.",
    schedule: "Miércoles 7:30 AM | Jueves 6:00 PM",
    buttonText: "Inscríbete",
    whatsappMessage:
      "Hola Roca Gimnasio, quiero información sobre las clases de Zumba",
    image: "/images/zumba.jpg",
    imageAlt: "Clase de Zumba con Instructor Willy",
    reverse: true,
    bg: "bg-roca-light",
  },
  {
    subtitle: "Disciplina Pura",
    title: "Boxeo",
    description:
      "Entrena con Coach Mangu Valera, Campeón Mundial. Más que una clase de boxeo, un santuario de disciplina. Clases para adultos y niños.",
    schedule: "Adultos: Jueves 8PM | Niños: Sábado 9AM",
    buttonText: "Inscríbete",
    whatsappMessage:
      "Hola Roca Gimnasio, quiero información sobre las clases de Boxeo",
    image: "/images/boxing.jpg",
    imageAlt: "Boxeo con Coach Mangu Valera",
    reverse: false,
    bg: "bg-white",
  },
  {
    subtitle: "Transfórmate",
    title: "Reto 21 Días",
    description:
      "Nuestro programa estrella. 21 días de entrenamiento intensivo que combina rutinas en el gym, actividades al aire libre y guía nutricional. Transforma tu cuerpo y tu mente con el apoyo de toda la comunidad ROCA.",
    buttonText: "Quiero El Reto",
    whatsappMessage:
      "Hola Roca Gimnasio, quiero unirme al Reto 21 Días",
    image: "/images/reto-group.jpg",
    imageAlt: "Reto 21 Días Roca Gimnasio",
    reverse: true,
    bg: "bg-roca-light",
  },
];

export default function ClassesSection() {
  return (
    <section id="clases">
      {/* Section title */}
      <div className="bg-white pb-8 pt-28 lg:pt-36">
        <div className="mx-auto max-w-6xl px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-roca-black sm:text-5xl lg:text-6xl">
                Nuestras <span className="text-roca-orange">Clases</span>
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Class blocks */}
      {classes.map((cls) => (
        <div key={cls.title} className={`${cls.bg} py-24 lg:py-28`}>
          <div className="mx-auto max-w-6xl px-8">
            <div
              className={`grid items-center gap-16 lg:grid-cols-2 lg:gap-24`}
            >
              {/* Image */}
              <ScrollReveal
                direction={cls.reverse ? "right" : "left"}
                className={cls.reverse ? "order-2 lg:order-2" : ""}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  {cls.image ? (
                    <Image
                      src={cls.image}
                      alt={cls.imageAlt}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-roca-orange-light to-roca-cream">
                      <Dumbbell className="h-20 w-20 text-roca-orange/20" />
                    </div>
                  )}
                </div>
              </ScrollReveal>

              {/* Text */}
              <ScrollReveal
                direction={cls.reverse ? "left" : "right"}
                className={cls.reverse ? "order-1 lg:order-1" : ""}
              >
                <div>
                  <p className="mb-3 font-[family-name:var(--font-oswald)] text-sm uppercase tracking-widest text-roca-orange">
                    {cls.subtitle}
                  </p>
                  <h3 className="mb-6 font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase text-roca-black sm:text-4xl lg:text-5xl">
                    {cls.title}
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-roca-gray">
                    {cls.description}
                  </p>
                  {cls.schedule && (
                    <p className="mb-8 text-sm font-medium text-roca-gray-dark">
                      {cls.schedule}
                    </p>
                  )}
                  <a
                    href={`https://wa.me/18098205103?text=${encodeURIComponent(cls.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-roca-orange px-8 py-4 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-roca-orange-hover"
                  >
                    {cls.buttonText} &rarr;
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
