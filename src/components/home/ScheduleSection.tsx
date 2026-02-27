"use client";

import { Clock, AlertTriangle } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const schedule = [
  { activity: "Gym / Pesas", days: "Lun - Vie", time: "5:00 AM - 12:00 AM", instructor: "Libre" },
  { activity: "Gym / Pesas", days: "Sábados", time: "6:00 AM - 2:00 PM", instructor: "Libre" },
  { activity: "Zumba", days: "Miércoles", time: "7:30 AM", instructor: "Willy" },
  { activity: "Zumba", days: "Jueves", time: "6:00 PM", instructor: "Willy" },
  { activity: "Boxeo (Adultos)", days: "Jueves", time: "8:00 PM", instructor: "Coach Mangu" },
  { activity: "Boxeo (Niños)", days: "Sábados", time: "9:00 AM", instructor: "Coach Mangu" },
  { activity: "Reto 21 Días", days: "Consultar", time: "Consultar", instructor: "Equipo ROCA" },
];

export default function ScheduleSection() {
  return (
    <section id="horarios" className="bg-roca-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-roca-black sm:text-5xl lg:text-6xl">
              <span className="text-roca-orange">Horarios</span>
            </h2>
            <p className="mt-4 text-roca-gray">Planifica tu entrenamiento con nuestro horario semanal</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-roca-gray-border bg-white shadow-sm">
            <div className="hidden md:block">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-roca-gray-border bg-roca-light">
                    <th className="px-6 py-4 text-left font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-orange">Actividad</th>
                    <th className="px-6 py-4 text-left font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-orange">Día(s)</th>
                    <th className="px-6 py-4 text-left font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-orange">Horario</th>
                    <th className="px-6 py-4 text-left font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-orange">Instructor</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, index) => (
                    <tr key={`${item.activity}-${item.days}`}
                      className={`border-b border-roca-gray-border/50 transition-colors hover:bg-roca-orange-light/30 ${index % 2 === 0 ? "bg-white" : "bg-roca-light/50"}`}
                    >
                      <td className="px-6 py-4 font-semibold text-roca-black">{item.activity}</td>
                      <td className="px-6 py-4 text-roca-gray-dark">{item.days}</td>
                      <td className="px-6 py-4 text-roca-gray-dark">
                        <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-roca-orange" />{item.time}</span>
                      </td>
                      <td className="px-6 py-4 font-medium text-roca-orange">{item.instructor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-4 p-4 md:hidden">
              {schedule.map((item) => (
                <div key={`${item.activity}-${item.days}-mobile`} className="rounded-xl border border-roca-gray-border bg-white p-4">
                  <h4 className="mb-2 font-[family-name:var(--font-oswald)] text-lg font-bold uppercase text-roca-black">{item.activity}</h4>
                  <div className="flex flex-col gap-1 text-sm">
                    <p className="text-roca-gray-dark"><span className="text-roca-gray">Días:</span> {item.days}</p>
                    <p className="flex items-center gap-1 text-roca-gray-dark"><Clock className="h-3 w-3 text-roca-orange" />{item.time}</p>
                    <p className="text-roca-orange">{item.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-roca-gray">
            <AlertTriangle className="h-4 w-4 text-roca-orange" />
            <span><span className="font-semibold text-roca-black">Domingos:</span> CERRADO</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
