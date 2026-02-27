import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Roca Gimnasio — Fuerza Que Se Respeta | Santo Domingo",
  description:
    "Roca Gimnasio — Nutrición, Sport y Más. El gimnasio de la comunidad en Km 13, Autopista Duarte, Santo Domingo. Pesas, boxeo, zumba, reto 21 días y suplementos deportivos.",
  keywords: [
    "gimnasio",
    "gym",
    "Santo Domingo",
    "pesas",
    "boxeo",
    "zumba",
    "fitness",
    "Roca Gimnasio",
    "suplementos",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${oswald.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
