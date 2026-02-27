"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-group.jpg"
        alt="Comunidad Roca Gimnasio"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-roca-black via-roca-black/50 to-roca-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-roca-black/80 via-roca-black/40 to-transparent" />

      {/* Decorative arrows */}
      <button
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 p-3 text-white/40 transition-colors hover:border-roca-red hover:text-roca-red lg:left-8"
        aria-label="Previous"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 p-3 text-white/40 transition-colors hover:border-roca-red hover:text-roca-red lg:right-8"
        aria-label="Next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-24 lg:pb-32">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-roca-red/30 bg-roca-red/10 px-4 py-2"
          >
            <span className="text-lg">💪</span>
            <span className="font-[family-name:var(--font-oswald)] text-xs uppercase tracking-widest text-roca-red">
              Nutrición &middot; Sport &middot; Y Más
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 max-w-4xl font-[family-name:var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Fuerza Que
            <br />
            Se <span className="text-roca-red">Respeta</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-8 max-w-xl text-base leading-relaxed text-roca-text-light sm:text-lg"
          >
            El gimnasio de ustedes. Cada día brindamos un servicio especial de
            calidad. Pesas, boxeo, zumba y más en Km 13, Autopista Duarte.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="https://wa.me/18098205103?text=Hola%20Roca%20Gimnasio,%20quiero%20inscribirme"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-roca-red px-8 py-4 text-center font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-roca-red-hover"
            >
              Inscríbete Ahora
            </a>
            <a
              href="#clases"
              className="rounded border border-white/30 px-8 py-4 text-center font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Ver Clases
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
