"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface TrainerCardProps {
  image: string | null;
  name: string;
  role: string;
  description: string;
  specialties: string[];
  delay?: number;
}

export default function TrainerCard({
  image,
  name,
  role,
  description,
  specialties,
  delay = 0,
}: TrainerCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="group overflow-hidden rounded-lg border border-roca-gray bg-roca-dark transition-all duration-300 hover:border-roca-red hover:shadow-lg hover:shadow-roca-red/10">
        {/* Image */}
        <div className="relative h-72 w-full overflow-hidden bg-gradient-to-b from-roca-red/20 to-roca-black">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-roca-red/20" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-roca-dark via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold uppercase text-white">
            {name}
          </h3>
          <p className="mb-3 font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-red">
            {role}
          </p>
          <p className="mb-4 text-sm leading-relaxed text-roca-text">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((spec) => (
              <span
                key={spec}
                className="rounded-full border border-roca-gray px-3 py-1 text-xs text-roca-text-light"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
