"use client";

import { useState, useEffect } from "react";
import { Menu, X, Dumbbell, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  {
    label: "Clases",
    href: "#clases",
    dropdown: [
      { label: "Pesas", href: "#clases" },
      { label: "Zumba", href: "#clases" },
      { label: "Boxeo", href: "#clases" },
      { label: "Reto 21 Días", href: "#programas" },
    ],
  },
  { label: "Horarios", href: "#horarios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Nutrición", href: "#nutricion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-roca-gray-border ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#inicio" className="flex items-center gap-2">
          <Dumbbell className="h-7 w-7 text-roca-orange" />
          <span className="font-[family-name:var(--font-oswald)] text-2xl font-bold uppercase tracking-tight">
            <span className="text-roca-red">Roca</span>{" "}
            <span className="text-roca-black">Gimnasio</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-gray-dark transition-colors hover:text-roca-orange"
              >
                {link.label}
                {link.dropdown && <ChevronDown className="h-3 w-3" />}
              </Link>
              {link.dropdown && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full mt-2 w-48 overflow-hidden rounded-xl border border-roca-gray-border bg-white shadow-xl"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-roca-gray-dark transition-colors hover:bg-roca-orange-light hover:text-roca-orange"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+18098205103" className="flex items-center gap-2 text-sm text-roca-gray transition-colors hover:text-roca-black">
            <Phone className="h-4 w-4" /> 809-820-5103
          </a>
          <a
            href="https://wa.me/18098205103?text=Hola%20Roca%20Gimnasio,%20quiero%20inscribirme"
            target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-roca-orange px-6 py-2.5 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-roca-orange-hover"
          >
            Inscríbete
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="text-roca-black lg:hidden" aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-72 border-l border-roca-gray-border bg-white p-6 shadow-2xl lg:hidden"
          >
            <button onClick={() => setIsOpen(false)} className="mb-8 text-roca-black" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link href={link.href} onClick={() => setIsOpen(false)}
                    className="font-[family-name:var(--font-oswald)] text-lg uppercase tracking-wider text-roca-gray-dark transition-colors hover:text-roca-orange"
                  >{link.label}</Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {link.dropdown.map((item) => (
                        <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)}
                          className="text-sm text-roca-gray transition-colors hover:text-roca-orange"
                        >{item.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <hr className="border-roca-gray-border" />
              <a href="tel:+18098205103" className="flex items-center gap-2 text-sm text-roca-gray">
                <Phone className="h-4 w-4" /> 809-820-5103
              </a>
              <a href="https://wa.me/18098205103?text=Hola%20Roca%20Gimnasio,%20quiero%20inscribirme"
                target="_blank" rel="noopener noreferrer"
                className="mt-2 rounded-full bg-roca-orange px-5 py-3 text-center font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white"
              >Inscríbete</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
