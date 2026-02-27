"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 3400, suffix: "+", label: "Miembros" },
  { value: 10, suffix: "+", label: "Años" },
  { value: 5, suffix: "", label: "Clases" },
  { value: 3, suffix: "", label: "Entrenadores" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-0 lg:divide-x lg:divide-roca-orange/20">
          {stats.map((stat) => (
            <div key={stat.label} className="px-10 text-center lg:px-16">
              <p className="font-[family-name:var(--font-oswald)] text-4xl font-bold text-roca-orange sm:text-5xl">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-roca-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
