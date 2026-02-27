"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Clock, Dumbbell } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="inicio" className="bg-white pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[85vh] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-roca-orange/30 bg-roca-orange-light px-4 py-2 font-[family-name:var(--font-oswald)] text-xs uppercase tracking-widest text-roca-orange"
            >
              Nutrición &middot; Sport &middot; Y Más
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6 font-[family-name:var(--font-oswald)] text-5xl font-bold uppercase leading-[1] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              <span className="text-roca-gray">Eleva Tu</span>
              <br />
              <span className="text-roca-orange">Fitness</span>
              <br />
              <span className="text-roca-black">Con Roca</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8 max-w-md text-base leading-relaxed text-roca-gray sm:text-lg"
            >
              El gimnasio de ustedes. Cada día brindamos un servicio especial de
              calidad. Pesas, boxeo, zumba y más en Km 13, Autopista Duarte.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="https://wa.me/18098205103?text=Hola%20Roca%20Gimnasio,%20quiero%20inscribirme"
                target="_blank" rel="noopener noreferrer"
                className="rounded-full bg-roca-orange px-8 py-4 text-center font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-roca-orange-hover"
              >
                Inscríbete Ahora
              </a>
              <a
                href="#clases"
                className="rounded-full border-2 border-roca-gray-border px-8 py-4 text-center font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-roca-gray-dark transition-colors hover:border-roca-orange hover:text-roca-orange"
              >
                Ver Clases
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap items-center gap-6 text-sm text-roca-gray"
            >
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-roca-orange" />
                <span><strong className="text-roca-black">3,400+</strong> Miembros</span>
              </div>
              <div className="h-4 w-px bg-roca-orange/30" />
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-roca-orange" />
                <span><strong className="text-roca-black">10+</strong> Años</span>
              </div>
              <div className="h-4 w-px bg-roca-orange/30" />
              <div className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-roca-orange" />
                <span><strong className="text-roca-black">5</strong> Clases</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-[3/4]">
              <Image
                src="/images/hero-group.jpg"
                alt="Comunidad Roca Gimnasio"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-roca-orange/30 lg:-bottom-6 lg:-right-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
