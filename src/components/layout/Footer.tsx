import { Dumbbell, Instagram, Phone, MapPin, Clock, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-roca-gray bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-roca-red" />
              <span className="font-[family-name:var(--font-oswald)] text-xl font-bold uppercase">
                <span className="text-roca-red">Roca</span>{" "}
                <span className="text-white">Gimnasio</span>
              </span>
            </div>
            <p className="mb-2 text-sm text-roca-text">
              Nutrición, Sport y Más
            </p>
            <p className="mb-6 font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-red">
              Fuerza Que Se Respeta
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/rocagimnasio13"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-roca-gray text-roca-text transition-all hover:border-roca-red hover:text-roca-red"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/18098205103"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-roca-gray text-roca-text transition-all hover:border-roca-red hover:text-roca-red"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/Rocagimnasio13"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-roca-gray text-roca-text transition-all hover:border-roca-red hover:text-roca-red"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Classes */}
          <div>
            <h4 className="mb-6 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-widest text-white">
              Clases
            </h4>
            <ul className="flex flex-col gap-3">
              {["Pesas", "Zumba", "Boxeo", "Reto 21 Días", "Cardio", "Careo de Pesas"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#clases"
                      className="text-sm text-roca-text transition-colors hover:text-roca-red"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-6 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-widest text-white">
              Enlaces
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Sobre Nosotros", href: "#nosotros" },
                { label: "Horarios", href: "#horarios" },
                { label: "Equipo", href: "#equipo" },
                { label: "Nutrición", href: "#nutricion" },
                { label: "Contacto", href: "#contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-roca-text transition-colors hover:text-roca-red"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-widest text-white">
              Contacto
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-roca-text">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-roca-red" />
                Km 13, Autopista Duarte, Los Ángeles, Santo Domingo, RD
              </li>
              <li className="flex items-center gap-3 text-sm text-roca-text">
                <Phone className="h-4 w-4 shrink-0 text-roca-red" />
                809-820-5103 | 829-554-4752
              </li>
              <li className="flex items-center gap-3 text-sm text-roca-text">
                <Instagram className="h-4 w-4 shrink-0 text-roca-red" />
                @rocagimnasio13
              </li>
              <li className="flex items-start gap-3 text-sm text-roca-text">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-roca-red" />
                <span>
                  Lun-Vie: 5AM-12AM
                  <br />
                  Sáb: 6AM-2PM
                  <br />
                  Dom: Cerrado
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-roca-gray pt-8 text-center text-xs text-roca-text md:flex-row md:justify-between">
          <p>
            &copy; 2026 Roca Gimnasio. Todos los derechos reservados. Fuerza Que
            Se Respeta.
          </p>
          <p>
            Desarrollado por{" "}
            <span className="font-semibold text-roca-text-light">
              NEXIX Studio
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
