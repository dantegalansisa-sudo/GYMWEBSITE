"use client";

import {
  MapPin,
  Phone,
  Instagram,
  Clock,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-roca-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-white sm:text-5xl lg:text-6xl">
              <span className="text-roca-red">Encuéntranos</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — Info */}
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-roca-red/10">
                  <MapPin className="h-5 w-5 text-roca-red" />
                </div>
                <div>
                  <h4 className="mb-1 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white">
                    Dirección
                  </h4>
                  <p className="text-sm text-roca-text">
                    Km 13, Autopista Duarte, Los Ángeles, Santo Domingo, RD
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-roca-red/10">
                  <Phone className="h-5 w-5 text-roca-red" />
                </div>
                <div>
                  <h4 className="mb-1 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white">
                    Teléfonos
                  </h4>
                  <p className="text-sm text-roca-text">
                    <a
                      href="tel:+18098205103"
                      className="transition-colors hover:text-roca-red"
                    >
                      809-820-5103
                    </a>{" "}
                    |{" "}
                    <a
                      href="tel:+18295544752"
                      className="transition-colors hover:text-roca-red"
                    >
                      829-554-4752
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-roca-red/10">
                  <Instagram className="h-5 w-5 text-roca-red" />
                </div>
                <div>
                  <h4 className="mb-1 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white">
                    Instagram
                  </h4>
                  <a
                    href="https://instagram.com/rocagimnasio13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-roca-text transition-colors hover:text-roca-red"
                  >
                    @rocagimnasio13
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-roca-red/10">
                  <Clock className="h-5 w-5 text-roca-red" />
                </div>
                <div>
                  <h4 className="mb-1 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white">
                    Horarios
                  </h4>
                  <div className="text-sm text-roca-text">
                    <p>Lun-Vie: 5:00 AM - 12:00 AM</p>
                    <p>Sáb: 6:00 AM - 2:00 PM</p>
                    <p>Dom: Cerrado</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/18098205103?text=Hola%20Roca%20Gimnasio,%20quiero%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded bg-whatsapp px-8 py-4 font-[family-name:var(--font-oswald)] text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp: 809-820-5103
              </a>
            </div>
          </ScrollReveal>

          {/* Right — Map */}
          <ScrollReveal direction="right">
            <div className="overflow-hidden rounded-lg border border-roca-gray">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8!2d-69.95!3d18.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzAwLjAiTiA2OcKwNTcnMDAuMCJX!5e0!3m2!1ses!2sdo!4v1700000000000!5m2!1ses!2sdo"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Roca Gimnasio"
                className="grayscale"
              />
              <a
                href="https://maps.google.com/?q=Km+13+Autopista+Duarte+Santo+Domingo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-roca-black py-4 text-sm text-roca-text-light transition-colors hover:text-roca-red"
              >
                <ExternalLink className="h-4 w-4" />
                Abrir en Google Maps
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
