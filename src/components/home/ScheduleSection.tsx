"use client";

import { Clock, AlertTriangle } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

interface ScheduleItem {
  activity: string;
  days: string;
  time: string;
  instructor: string;
}

const schedule: ScheduleItem[] = [
  {
    activity: "Gym / Pesas",
    days: "Lun - Vie",
    time: "5:00 AM - 12:00 AM",
    instructor: "Libre",
  },
  {
    activity: "Gym / Pesas",
    days: "Sábados",
    time: "6:00 AM - 2:00 PM",
    instructor: "Libre",
  },
  {
    activity: "Zumba",
    days: "Miércoles",
    time: "7:30 AM",
    instructor: "Willy",
  },
  {
    activity: "Zumba",
    days: "Jueves",
    time: "6:00 PM",
    instructor: "Willy",
  },
  {
    activity: "Boxeo (Adultos)",
    days: "Jueves",
    time: "8:00 PM",
    instructor: "Coach Mangu",
  },
  {
    activity: "Boxeo (Niños)",
    days: "Sábados",
    time: "9:00 AM",
    instructor: "Coach Mangu",
  },
  {
    activity: "Reto 21 Días",
    days: "Consultar",
    time: "Consultar",
    instructor: "Equipo ROCA",
  },
];

export default function ScheduleSection() {
  return (
    <section id="horarios" className="bg-roca-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-white sm:text-5xl lg:text-6xl">
              <span className="text-roca-red">Horarios</span>
            </h2>
            <p className="mt-4 text-roca-text">
              Planifica tu entrenamiento con nuestro horario semanal
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-lg border border-roca-gray bg-roca-dark">
            {/* Desktop table */}
            <div className="hidden md:block">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-roca-gray bg-roca-black">
                    <th className="px-6 py-4 text-left font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-red">
                      Actividad
                    </th>
                    <th className="px-6 py-4 text-left font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-red">
                      Día(s)
                    </th>
                    <th className="px-6 py-4 text-left font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-red">
                      Horario
                    </th>
                    <th className="px-6 py-4 text-left font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-red">
                      Instructor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, index) => (
                    <tr
                      key={`${item.activity}-${item.days}`}
                      className={`border-b border-roca-gray/50 transition-colors hover:bg-roca-gray/30 ${
                        index % 2 === 0 ? "bg-roca-dark" : "bg-roca-black/50"
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-white">
                        {item.activity}
                      </td>
                      <td className="px-6 py-4 text-roca-text-light">
                        {item.days}
                      </td>
                      <td className="px-6 py-4 text-roca-text-light">
                        <span className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-roca-red" />
                          {item.time}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium text-roca-red">
                        {item.instructor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="flex flex-col gap-4 p-4 md:hidden">
              {schedule.map((item) => (
                <div
                  key={`${item.activity}-${item.days}-mobile`}
                  className="rounded-lg border border-roca-gray bg-roca-black p-4"
                >
                  <h4 className="mb-2 font-[family-name:var(--font-oswald)] text-lg font-bold uppercase text-white">
                    {item.activity}
                  </h4>
                  <div className="flex flex-col gap-1 text-sm">
                    <p className="text-roca-text-light">
                      <span className="text-roca-text">Días:</span>{" "}
                      {item.days}
                    </p>
                    <p className="flex items-center gap-1 text-roca-text-light">
                      <Clock className="h-3 w-3 text-roca-red" />
                      {item.time}
                    </p>
                    <p className="text-roca-red">{item.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Closed notice */}
        <ScrollReveal delay={0.2}>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-roca-text">
            <AlertTriangle className="h-4 w-4 text-roca-red" />
            <span>
              <span className="font-semibold text-white">Domingos:</span>{" "}
              CERRADO
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
