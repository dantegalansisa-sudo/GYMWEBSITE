"use client";

import Image from "next/image";
import { Dumbbell, Music, Swords, Trophy, Heart, Medal, Clock, LucideIcon } from "lucide-react";
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
    number: "01", subtitle: "Explora Tu Fuerza", title: "Pesas",
    description: "Zona completa de pesas libres, máquinas y equipos para que entrenes a tu ritmo. Desde principiantes hasta avanzados.",
    schedule: "Lun-Vie 5AM-12AM | Sáb 6AM-2PM", icon: Dumbbell,
    whatsappMessage: "Hola Roca Gimnasio, quiero información sobre la membresía de pesas",
  },
  {
    number: "02", subtitle: "Baila Y Quema", title: "Zumba",
    description: "Clases de zumba con el Instructor Willy. Quema calorías mientras te diviertes al ritmo de la música.",
    schedule: "Miércoles 7:30 AM | Jueves 6:00 PM", icon: Music,
    whatsappMessage: "Hola Roca Gimnasio, quiero información sobre las clases de Zumba",
    image: "/images/zumba.jpg",
  },
  {
    number: "03", subtitle: "Disciplina Pura", title: "Boxeo",
    description: "Clases con Coach Mangu Valera, Campeón Mundial. Más que una clase de boxeo, un santuario de disciplina.",
    schedule: "Adultos: Jueves 8PM | Niños: Sábado 9AM", icon: Swords,
    whatsappMessage: "Hola Roca Gimnasio, quiero información sobre las clases de Boxeo",
    image: "/images/boxing.jpg",
  },
  {
    number: "04", subtitle: "Transfórmate", title: "Reto 21 Días",
    description: "Programa intensivo de 21 días que combina entrenamiento funcional, nutrición guiada y actividades al aire libre.",
    schedule: "Próximo reto: Consultar fechas", icon: Trophy,
    whatsappMessage: "Hola Roca Gimnasio, quiero información sobre el Reto 21 Días",
    image: "/images/reto-group.jpg",
  },
  {
    number: "05", subtitle: "Eleva Tu Ritmo", title: "Cardio",
    description: "Zona de cardio con caminadoras, elípticas y bicicletas estáticas. Complementa tu rutina de pesas.",
    schedule: "Disponible en horario del gym", icon: Heart,
    whatsappMessage: "Hola Roca Gimnasio, quiero información sobre la zona de Cardio",
  },
  {
    number: "06", subtitle: "Demuestra Tu Fuerza", title: "Careo de Pesas",
    description: "Eventos de levantamiento de pesas donde hombres y mujeres demuestran de qué están hechos.",
    schedule: "Eventos especiales — Consultar fechas", icon: Medal,
    whatsappMessage: "Hola Roca Gimnasio, quiero información sobre el Careo de Pesas",
    image: "/images/event-pesas.jpg",
  },
];

export default function ClassesSection() {
  return (
    <section id="clases" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-roca-black sm:text-5xl lg:text-6xl">
              Nuestras <span className="text-roca-orange">Clases</span>
            </h2>
            <p className="mt-4 text-roca-gray">Encuentra la clase perfecta para ti</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls, index) => (
            <ScrollReveal key={cls.number} delay={index * 0.1}>
              <div className="group h-full overflow-hidden rounded-2xl border border-roca-gray-border bg-white transition-all duration-300 hover:border-roca-orange hover:shadow-lg hover:shadow-roca-orange/10">
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  {cls.image ? (
                    <Image src={cls.image} alt={cls.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-roca-orange-light to-roca-cream">
                      <cls.icon className="h-16 w-16 text-roca-orange/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-roca-orange-light">
                    <cls.icon className="h-5 w-5 text-roca-orange" />
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-oswald)] text-xl font-bold uppercase text-roca-black">
                    {cls.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-roca-gray">{cls.description}</p>
                  <p className="mb-4 flex items-center gap-2 text-xs text-roca-gray-dark">
                    <Clock className="h-3.5 w-3.5 text-roca-orange" /> {cls.schedule}
                  </p>
                  <a
                    href={`https://wa.me/18098205103?text=${encodeURIComponent(cls.whatsappMessage)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-roca-orange px-4 py-2 font-[family-name:var(--font-oswald)] text-xs font-semibold uppercase tracking-wider text-roca-orange transition-colors hover:bg-roca-orange hover:text-white"
                  >Inscríbete &rarr;</a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
