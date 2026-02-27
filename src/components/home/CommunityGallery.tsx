"use client";

import Image from "next/image";
import { Instagram, Camera } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const images = [
  { src: "/images/hero-group.jpg", alt: "Comunidad Roca Gimnasio" },
  { src: "/images/reto-group.jpg", alt: "Reto 21 Días" },
  { src: "/images/reto-exercise.jpg", alt: "Ejercicio al aire libre" },
  { src: "/images/gym-community.jpg", alt: "Comunidad del gym" },
];

export default function CommunityGallery() {
  return (
    <section className="bg-roca-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-roca-black sm:text-5xl lg:text-6xl">
              Team <span className="text-roca-orange">Roca</span>
            </h2>
            <p className="mt-4 text-roca-gray">Más que un gym, una familia</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          <ScrollReveal className="md:col-span-2 md:row-span-2">
            <div className="group relative h-full min-h-[300px] overflow-hidden rounded-2xl md:min-h-[500px]">
              <Image src={images[0].src} alt={images[0].alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-roca-orange/0 transition-colors group-hover:bg-roca-orange/20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-10 w-10 text-white" />
              </div>
            </div>
          </ScrollReveal>

          {images.slice(1, 3).map((img, index) => (
            <ScrollReveal key={img.src} delay={index * 0.1}>
              <div className="group relative h-60 overflow-hidden rounded-2xl md:h-full md:min-h-[240px]">
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-roca-orange/0 transition-colors group-hover:bg-roca-orange/20" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.2} className="md:col-span-2">
            <div className="group relative h-60 overflow-hidden rounded-2xl md:h-64">
              <Image src={images[3].src} alt={images[3].alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-roca-orange/0 transition-colors group-hover:bg-roca-orange/20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-10 w-10 text-white" />
              </div>
            </div>
          </ScrollReveal>

          {[1, 2].map((i) => (
            <ScrollReveal key={i} delay={0.3}>
              <div className="flex h-60 items-center justify-center rounded-2xl border border-roca-gray-border bg-white md:h-64">
                <div className="text-center">
                  <Camera className="mx-auto mb-2 h-8 w-8 text-roca-gray-border" />
                  <p className="text-xs text-roca-gray">Próximamente</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <a href="https://instagram.com/rocagimnasio13" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-gray-dark transition-colors hover:text-roca-orange"
            ><Instagram className="h-5 w-5" /> Síguenos &rarr; @rocagimnasio13</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
