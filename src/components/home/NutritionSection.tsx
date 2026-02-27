"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const products = [
  {
    name: "Proteínas",
    description: "Whey, Isolate, Plant-based",
    image: "/images/proteinas.jpg",
  },
  {
    name: "Pre-Entrenos",
    description: "Energía y rendimiento",
    image: "/images/pre-entreno.jpg",
  },
  {
    name: "Creatina",
    description: "Recuperación y fuerza",
    image: "/images/creatina.jpg",
  },
  {
    name: "Snacks & Barras",
    description: "Nutrición on-the-go",
    image: "/images/snacks.jpg",
  },
];

export default function NutritionSection() {
  return (
    <section id="nutricion" className="bg-roca-light py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-roca-black sm:text-5xl lg:text-6xl">
              Roca <span className="text-roca-orange">Nutrition</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-10">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 0.1}>
              <a
                href={`https://wa.me/18098205103?text=${encodeURIComponent(`Hola, quiero información sobre ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border border-roca-gray-border bg-white p-6 transition-all hover:border-roca-orange hover:shadow-lg hover:shadow-roca-orange/10"
              >
                <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-xl bg-roca-orange-light">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h4 className="mb-1 text-center font-[family-name:var(--font-oswald)] text-sm font-bold uppercase text-roca-black">
                  {product.name}
                </h4>
                <p className="mb-3 text-center text-xs text-roca-gray">
                  {product.description}
                </p>
                <p className="text-center text-xs font-medium text-roca-orange transition-colors group-hover:text-roca-orange-hover">
                  Consultar &rarr;
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <a
              href="https://instagram.com/rocanutritionoficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-roca-gray-dark transition-colors hover:text-roca-orange"
            >
              <Instagram className="h-5 w-5" /> @rocanutritionoficial
            </a>
            <a
              href="https://wa.me/18098205103?text=Hola,%20quiero%20información%20sobre%20los%20productos%20de%20Roca%20Nutrition"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-roca-orange px-8 py-4 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-roca-orange-hover"
            >
              Ver Todos Los Productos
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
