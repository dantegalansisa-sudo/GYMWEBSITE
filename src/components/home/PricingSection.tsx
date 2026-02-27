"use client";

import { Check, Phone } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

interface PlanProps {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  buttonText: string;
  whatsappMessage: string;
}

const plans: PlanProps[] = [
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
      "Clases con Coach Mangu Valera (Campeón Mundial)",
      "Jueves 8:00 PM",
      "Guantes y equipo disponible",
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
      "Rutinas + nutrición + actividades outdoor",
      "Grupo de soporte WhatsApp",
      "Camiseta oficial",
    ],
    buttonText: "Quiero El Reto",
    whatsappMessage:
      "Hola Roca Gimnasio, quiero unirme al Reto 21 Días",
  },
];

export default function PricingSection() {
  return (
    <section className="bg-roca-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-white sm:text-5xl lg:text-6xl">
              Planes{" "}
              <span className="text-roca-red">Y Precios</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.15}>
              <div
                className={`relative flex h-full flex-col rounded-lg border p-8 transition-all hover:shadow-lg ${
                  plan.popular
                    ? "border-roca-red bg-roca-dark shadow-roca-red/10 lg:scale-105"
                    : "border-roca-gray bg-roca-dark"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-roca-red px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Más Popular
                  </div>
                )}

                {/* Plan name */}
                <h3 className="mb-4 font-[family-name:var(--font-oswald)] text-xl font-bold uppercase text-white">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="font-[family-name:var(--font-oswald)] text-4xl font-bold text-roca-red">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-sm text-roca-text">
                    / {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="mb-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-roca-red" />
                      <span className="text-sm text-roca-text-light">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <a
                  href={`https://wa.me/18098205103?text=${encodeURIComponent(plan.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full rounded py-3 text-center font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider transition-colors ${
                    plan.popular
                      ? "bg-roca-red text-white hover:bg-roca-red-hover"
                      : "border border-roca-red text-roca-red hover:bg-roca-red hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-roca-text">
            <Phone className="h-4 w-4 text-roca-red" />
            Para precios actualizados y promociones especiales, contáctanos por
            WhatsApp:{" "}
            <a
              href="https://wa.me/18098205103"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-roca-red hover:underline"
            >
              809-820-5103
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
