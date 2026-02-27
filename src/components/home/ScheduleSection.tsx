"use client";

import { Clock, Ban } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function ScheduleSection() {
  return (
    <section id="horarios" className="bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-roca-orange sm:text-5xl lg:text-6xl">
              Horarios
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-roca-orange/20 bg-white p-12 shadow-lg">
            <div className="flex flex-col gap-10">
              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-roca-orange-light">
                  <Clock className="h-6 w-6 text-roca-orange" />
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-oswald)] text-lg font-bold uppercase tracking-wider text-roca-black">
                  Lunes A Viernes
                </h3>
                <p className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-roca-gray-dark">
                  5:00 AM — 12:00 AM
                </p>
              </div>

              <div className="mx-auto h-px w-24 bg-roca-orange/20" />

              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-roca-orange-light">
                  <Clock className="h-6 w-6 text-roca-orange" />
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-oswald)] text-lg font-bold uppercase tracking-wider text-roca-black">
                  Sábados
                </h3>
                <p className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-roca-gray-dark">
                  6:00 AM — 2:00 PM
                </p>
              </div>

              <div className="mx-auto h-px w-24 bg-roca-orange/20" />

              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-roca-light">
                  <Ban className="h-6 w-6 text-roca-gray" />
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-oswald)] text-lg font-bold uppercase tracking-wider text-roca-black">
                  Domingos
                </h3>
                <p className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-roca-gray">
                  Cerrado
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-roca-gray">
            Consulta horarios de clases especiales por{" "}
            <a
              href="https://wa.me/18098205103?text=Hola%20Roca%20Gimnasio,%20quiero%20saber%20los%20horarios%20de%20clases"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-roca-orange hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
