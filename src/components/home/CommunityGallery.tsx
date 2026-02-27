"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const images = [
  { src: "/images/hero-group.jpg", alt: "Comunidad Roca Gimnasio" },
  { src: "/images/reto-group.jpg", alt: "Reto 21 Días" },
  { src: "/images/reto-exercise.jpg", alt: "Ejercicio al aire libre" },
  { src: "/images/gym-community.jpg", alt: "Comunidad del gym" },
];

export default function CommunityGallery() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <ScrollReveal key={img.src} delay={index * 0.1}>
              <div className="group relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="https://instagram.com/rocagimnasio13"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-gray-dark transition-colors hover:text-roca-orange"
            >
              <Instagram className="h-5 w-5" /> Síguenos &rarr;
              @rocagimnasio13
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
