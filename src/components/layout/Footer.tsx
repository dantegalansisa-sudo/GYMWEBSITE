import { Dumbbell, Instagram, Phone, MapPin, Clock, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-roca-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-roca-orange" />
              <span className="font-[family-name:var(--font-oswald)] text-xl font-bold uppercase">
                <span className="text-roca-red">Roca</span>{" "}
                <span className="text-white">Gimnasio</span>
              </span>
            </div>
            <p className="mb-2 text-sm text-gray-400">Nutrición, Sport y Más</p>
            <p className="mb-6 font-[family-name:var(--font-oswald)] text-sm uppercase tracking-wider text-roca-orange">Fuerza Que Se Respeta</p>
            <div className="flex gap-4">
              {[
                { href: "https://instagram.com/rocagimnasio13", icon: Instagram, label: "Instagram" },
                { href: "https://wa.me/18098205103", icon: Phone, label: "WhatsApp" },
                { href: "https://facebook.com/Rocagimnasio13", icon: Facebook, label: "Facebook" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:border-roca-orange hover:text-roca-orange"
                ><s.icon className="h-5 w-5" /></a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-widest text-white">Clases</h4>
            <ul className="flex flex-col gap-3">
              {["Pesas", "Zumba", "Boxeo", "Reto 21 Días", "Cardio", "Careo de Pesas"].map((item) => (
                <li key={item}><Link href="#clases" className="text-sm text-gray-400 transition-colors hover:text-roca-orange">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-widest text-white">Enlaces</h4>
            <ul className="flex flex-col gap-3">
              {[{ label: "Inicio", href: "#inicio" }, { label: "Sobre Nosotros", href: "#nosotros" },
                { label: "Horarios", href: "#horarios" }, { label: "Equipo", href: "#equipo" },
                { label: "Nutrición", href: "#nutricion" }, { label: "Contacto", href: "#contacto" }
              ].map((item) => (
                <li key={item.label}><Link href={item.href} className="text-sm text-gray-400 transition-colors hover:text-roca-orange">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-widest text-white">Contacto</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-roca-orange" />Km 13, Autopista Duarte, Los Ángeles, Santo Domingo, RD
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4 shrink-0 text-roca-orange" />809-820-5103 | 829-554-4752
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Instagram className="h-4 w-4 shrink-0 text-roca-orange" />@rocagimnasio13
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-roca-orange" />
                <span>Lun-Vie: 5AM-12AM<br />Sáb: 6AM-2PM<br />Dom: Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-gray-800 pt-8 text-center text-xs text-gray-500 md:flex-row md:justify-between">
          <p>&copy; 2026 Roca Gimnasio. Todos los derechos reservados. Fuerza Que Se Respeta.</p>
          <p>Desarrollado por <span className="font-semibold text-gray-400">NEXIX Studio</span></p>
        </div>
      </div>
    </footer>
  );
}
