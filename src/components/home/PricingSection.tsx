"use client";

import { Check } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const plans = [
  {
    name: "Membresía Gym",
    price: "Consultar",
    period: "Mensual",
    features: [
      "Acceso completo al área de pesas",
      "Zona de cardio",
      "Horario completo Lun-Sáb",
    ],
    buttonText: "Inscríbete",
    whatsappMessage:
      "Hola Roca Gimnasio, quiero información sobre la membresía del gym",
  },
  {
    name: "Boxeo",
    price: "RD$2,000",
    period: "Mensual",
    popular: true,
    features: [
      "Clases con Coach Mangu Valera",
      "Jueves 8:00 PM",
      "Niños: RD$1,500/mes (Sáb 9AM)",
    ],
    buttonText: "Inscríbete",
    whatsappMessage:
      "Hola Roca Gimnasio, quiero inscribirme en las clases de Boxeo",
  },
  {
    name: "Reto 21 Días",
    price: "Consultar",
    period: "21 Días",
    features: [
      "Programa completo de transformación",
      "Rutinas + nutrición + outdoor",
      "Grupo de soporte WhatsApp",
    ],
    buttonText: "Quiero El Reto",
    whatsappMessage:
      "Hola Roca Gimnasio, quiero unirme al Reto 21 Días",
  },
];

export default function PricingSection() {
  return (
    <section className="bg-roca-light py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-roca-black sm:text-5xl lg:text-6xl">
              Planes <span className="text-roca-orange">Y Precios</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid items-stretch gap-10 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.15}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-10 transition-all hover:shadow-lg ${
                  plan.popular
                    ? "border-roca-orange shadow-roca-orange/10 lg:scale-105"
                    : "border-roca-gray-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-roca-orange px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Más Popular
                  </div>
                )}
                <h3 className="mb-4 font-[family-name:var(--font-oswald)] text-xl font-bold uppercase text-roca-black">
                  {plan.name}
                </h3>
                <div className="mb-8">
                  <span className="font-[family-name:var(--font-oswald)] text-4xl font-bold text-roca-orange">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-sm text-roca-gray">
                    / {plan.period}
                  </span>
                </div>
                <ul className="mb-10 flex flex-1 flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-roca-orange" />
                      <span className="text-sm text-roca-gray-dark">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/18098205103?text=${encodeURIComponent(plan.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full rounded-full py-3 text-center font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider transition-colors ${
                    plan.popular
                      ? "bg-roca-orange text-white hover:bg-roca-orange-hover"
                      : "border-2 border-roca-orange text-roca-orange hover:bg-roca-orange hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
