"use client";

import {
  Milk,
  Zap,
  Pill,
  Apple,
  Instagram,
} from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const products = [
  {
    icon: Milk,
    name: "Proteínas",
    description: "Whey, Isolate, Plant-based",
  },
  {
    icon: Zap,
    name: "Pre-Entrenos",
    description: "Energía y rendimiento",
  },
  {
    icon: Pill,
    name: "Creatina & Aminoácidos",
    description: "Recuperación y fuerza",
  },
  {
    icon: Apple,
    name: "Snacks & Barras Saludables",
    description: "Nutrición on-the-go",
  },
];

export default function NutritionSection() {
  return (
    <section id="nutricion" className="bg-roca-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-white sm:text-5xl lg:text-6xl">
              Roca{" "}
              <span className="text-roca-red">Nutrition</span>
            </h2>
            <p className="mt-4 text-roca-text">
              Suplementos y nutrición deportiva para maximizar tus resultados
            </p>
          </div>
        </ScrollReveal>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Text */}
          <ScrollReveal direction="left">
            <div>
              <p className="mb-6 leading-relaxed text-roca-text">
                Complementa tu entrenamiento con nuestra línea de suplementos
                deportivos. En Roca Nutrition tenemos todo lo que necesitas para
                alcanzar tus metas: proteínas, creatina, pre-entrenos,
                aminoácidos y más.
              </p>

              <div className="mb-6 flex items-center gap-3">
                <Instagram className="h-5 w-5 text-roca-red" />
                <a
                  href="https://instagram.com/rocanutritionoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-roca-text-light transition-colors hover:text-roca-red"
                >
                  @rocanutritionoficial
                </a>
              </div>

              <a
                href="https://wa.me/18098205103?text=Hola,%20quiero%20información%20sobre%20los%20productos%20de%20Roca%20Nutrition"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-roca-red px-6 py-3 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-roca-red-hover"
              >
                Ver Productos <span>&rarr;</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right — Products grid */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {products.map((product) => (
                <a
                  key={product.name}
                  href={`https://wa.me/18098205103?text=${encodeURIComponent(`Hola, quiero información sobre ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border border-roca-gray bg-roca-black p-6 transition-all hover:border-roca-red"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-roca-red/10">
                    <product.icon className="h-6 w-6 text-roca-red" />
                  </div>
                  <h4 className="mb-1 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase text-white">
                    {product.name}
                  </h4>
                  <p className="mb-3 text-xs text-roca-text">
                    {product.description}
                  </p>
                  <span className="text-xs font-medium text-roca-red transition-colors group-hover:text-white">
                    Consultar precio &rarr;
                  </span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
