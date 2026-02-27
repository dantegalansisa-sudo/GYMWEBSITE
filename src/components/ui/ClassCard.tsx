"use client";

import { LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ClassCardProps {
  number: string;
  subtitle: string;
  title: string;
  description: string;
  schedule: string;
  icon: LucideIcon;
  delay?: number;
  whatsappMessage: string;
}

export default function ClassCard({
  number,
  subtitle,
  title,
  description,
  schedule,
  icon: Icon,
  delay = 0,
  whatsappMessage,
}: ClassCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="group relative flex h-full min-h-[400px] flex-col justify-between overflow-hidden bg-roca-black p-8 transition-all duration-300 hover:bg-roca-gray">
        {/* Large background number */}
        <span className="pointer-events-none absolute -right-4 -top-4 font-[family-name:var(--font-oswald)] text-[180px] font-bold leading-none text-white/[0.03]">
          {number}
        </span>

        <div className="relative z-10">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-roca-red/10">
            <Icon className="h-6 w-6 text-roca-red" />
          </div>
          <p className="mb-2 font-[family-name:var(--font-oswald)] text-sm uppercase tracking-widest text-roca-red">
            {subtitle}
          </p>
          <h3 className="mb-4 font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase text-white">
            {title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-roca-text">
            {description}
          </p>
          <p className="text-xs text-roca-text-light">
            <span className="text-roca-red">&#9679;</span> {schedule}
          </p>
        </div>

        <a
          href={`https://wa.me/18098205103?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-wider text-roca-red transition-colors hover:text-white"
        >
          Inscríbete <span>&rarr;</span>
        </a>
      </div>
    </ScrollReveal>
  );
}
