"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-group.jpg"
          alt="Comunidad Roca Gimnasio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content — bottom left */}
      <div className="relative flex min-h-screen items-end">
        <div className="mx-auto w-full max-w-6xl px-8 pb-24 lg:pb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-[family-name:var(--font-oswald)] text-xs uppercase tracking-widest text-roca-orange backdrop-blur-sm"
          >
            Nutrición &middot; Sport &middot; Y Más
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 max-w-3xl font-[family-name:var(--font-oswald)] text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Eleva Tu{" "}
            <span className="text-roca-orange">Fitness</span>{" "}
            Con Roca
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-10 max-w-lg text-lg leading-relaxed text-white/90"
          >
            El gimnasio de tu comunidad. Fuerza que se respeta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://wa.me/18098205103?text=Hola%20Roca%20Gimnasio,%20quiero%20inscribirme"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-roca-orange px-10 py-4 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-roca-orange-hover"
            >
              Inscríbete Ahora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
