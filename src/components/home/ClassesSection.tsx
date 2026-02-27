"use client";

import Image from "next/image";
import {
  Dumbbell,
  Music,
  Swords,
  Trophy,
  Heart,
  Medal,
  LucideIcon,
} from "lucide-react";
import ClassCard from "../ui/ClassCard";
import ScrollReveal from "../ui/ScrollReveal";

interface ClassData {
  number: string;
  subtitle: string;
  title: string;
  description: string;
  schedule: string;
  icon: LucideIcon;
  whatsappMessage: string;
  image?: string;
}

const classes: ClassData[] = [
  {
    number: "01",
    subtitle: "Explora Tu Fuerza",
    title: "Pesas",
    description:
      "Zona completa de pesas libres, máquinas y equipos para que entrenes a tu ritmo. Desde principiantes hasta avanzados.",
    schedule: "Lun-Vie 5AM-12AM | Sáb 6AM-2PM",
    icon: Dumbbell,
    whatsappMessage:
      "Hola Roca Gimnasio, quiero información sobre la membresía de pesas",
  },
  {
    number: "02",
    subtitle: "Baila Y Quema",
    title: "Zumba",
    description:
      "Clases de zumba con el Instructor Willy. Quema calorías mientras te diviertes al ritmo de la música.",
    schedule: "Miércoles 7:30 AM | Jueves 6:00 PM",
    icon: Music,
    whatsappMessage:
      "Hola Roca Gimnasio, quiero información sobre las clases de Zumba",
    image: "/images/zumba.jpg",
  },
  {
    number: "03",
    subtitle: "Disciplina Pura",
    title: "Boxeo",
    description:
      "Clases con Coach Mangu Valera, Campeón Mundial. Más que una clase de boxeo, un santuario de disciplina.",
    schedule: "Adultos: Jueves 8:00 PM (RD$2,000/mes) | Niños: Sábado 9:00 AM (RD$1,500/mes)",
    icon: Swords,
    whatsappMessage:
      "Hola Roca Gimnasio, quiero información sobre las clases de Boxeo",
  },
  {
    number: "04",
    subtitle: "Transfórmate",
    title: "Reto 21 Días",
    description:
      "Programa intensivo de 21 días que combina entrenamiento funcional, nutrición guiada y actividades al aire libre. Transforma tu cuerpo y tu mente.",
    schedule: "Próximo reto: Consultar fechas",
    icon: Trophy,
    whatsappMessage:
      "Hola Roca Gimnasio, quiero información sobre el Reto 21 Días",
    image: "/images/reto-group.jpg",
  },
  {
    number: "05",
    subtitle: "Eleva Tu Ritmo",
    title: "Cardio",
    description:
      "Zona de cardio con caminadoras, elípticas y bicicletas estáticas. Complementa tu rutina de pesas con sesiones cardiovasculares.",
    schedule: "Disponible en horario del gym",
    icon: Heart,
    whatsappMessage:
      "Hola Roca Gimnasio, quiero información sobre la zona de Cardio",
  },
  {
    number: "06",
    subtitle: "Demuestra Tu Fuerza",
    title: "Careo de Pesas",
    description:
      "Eventos de levantamiento de pesas donde hombres y mujeres demuestran de qué están hechos. Ambiente competitivo y motivador.",
    schedule: "Eventos especiales — Consultar fechas",
    icon: Medal,
    whatsappMessage:
      "Hola Roca Gimnasio, quiero información sobre el Careo de Pesas",
    image: "/images/event-pesas.jpg",
  },
];

// Checkerboard: alternating text and image cells
// Row 1: text, image, text
// Row 2: image, text, image
function isImageCell(index: number): boolean {
  const row = Math.floor(index / 3);
  const col = index % 3;
  // Row 0: col 1 is image; Row 1: col 0, 2 are images
  if (row % 2 === 0) return col === 1;
  return col !== 1;
}

export default function ClassesSection() {
  return (
    <section id="clases" className="bg-roca-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-white sm:text-5xl lg:text-6xl">
              Nuestras{" "}
              <span className="text-roca-red">Clases</span>
            </h2>
            <p className="mt-4 text-roca-text">
              Encuentra la clase perfecta para ti
            </p>
          </div>
        </ScrollReveal>

        {/* Checkerboard Grid */}
        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls, index) =>
            isImageCell(index) ? (
              <ScrollReveal key={cls.number} delay={index * 0.1}>
                <div className="group relative h-full min-h-[400px] overflow-hidden bg-roca-black">
                  {cls.image ? (
                    <Image
                      src={cls.image}
                      alt={cls.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-roca-red/20 to-roca-black">
                      <cls.icon className="h-20 w-20 text-roca-red/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-roca-black/40 transition-colors group-hover:bg-roca-red/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <cls.icon className="mx-auto mb-3 h-10 w-10 text-white" />
                      <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold uppercase text-white">
                        {cls.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ) : (
              <ClassCard
                key={cls.number}
                number={cls.number}
                subtitle={cls.subtitle}
                title={cls.title}
                description={cls.description}
                schedule={cls.schedule}
                icon={cls.icon}
                delay={index * 0.1}
                whatsappMessage={cls.whatsappMessage}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
