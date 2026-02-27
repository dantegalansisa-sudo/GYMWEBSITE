"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const products = [
  { name: "Proteínas", description: "Whey, Isolate, Plant-based", image: "/images/proteinas.jpg" },
  { name: "Pre-Entrenos", description: "Energía y rendimiento", image: "/images/pre-entreno.jpg" },
  { name: "Creatina & Aminoácidos", description: "Recuperación y fuerza", image: "/images/creatina.jpg" },
  { name: "Snacks & Barras", description: "Nutrición on-the-go", image: "/images/snacks.jpg" },
];

export default function NutritionSection() {
  return (
    <section id="nutricion" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-roca-black sm:text-5xl lg:text-6xl">
              Roca <span className="text-roca-orange">Nutrition</span>
            </h2>
            <p className="mt-4 text-roca-gray">Suplementos y nutrición deportiva para maximizar tus resultados</p>
          </div>
        </ScrollReveal>

        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left">
            <div>
              <p className="mb-6 leading-relaxed text-roca-gray">
                Complementa tu entrenamiento con nuestra línea de suplementos
                deportivos. En Roca Nutrition tenemos todo lo que necesitas para
                alcanzar tus metas: proteínas, creatina, pre-entrenos,
                aminoácidos y más.
              </p>
              <div className="mb-6 flex items-center gap-3">
                <Instagram className="h-5 w-5 text-roca-orange" />
                <a href="https://instagram.com/rocanutritionoficial" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-roca-gray-dark transition-colors hover:text-roca-orange">@rocanutritionoficial</a>
              </div>
              <a href="https://wa.me/18098205103?text=Hola,%20quiero%20información%20sobre%20los%20productos%20de%20Roca%20Nutrition"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-roca-orange px-6 py-3 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-roca-orange-hover"
              >Ver Productos &rarr;</a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {products.map((product) => (
                <a key={product.name}
                  href={`https://wa.me/18098205103?text=${encodeURIComponent(`Hola, quiero información sobre ${product.name}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="group overflow-hidden rounded-xl border border-roca-gray-border bg-white transition-all hover:border-roca-orange hover:shadow-lg hover:shadow-roca-orange/10"
                >
                  <div className="relative h-36 w-full overflow-hidden bg-roca-orange-light">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-2 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h4 className="mb-1 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase text-roca-black">{product.name}</h4>
                    <p className="mb-2 text-xs text-roca-gray">{product.description}</p>
                    <span className="text-xs font-medium text-roca-orange transition-colors group-hover:text-roca-orange-hover">Consultar precio &rarr;</span>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
