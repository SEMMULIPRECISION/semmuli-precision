export const metadata = {
  title: "SEMMULI PRECISIÓN | Maquinados industriales",
  description: "Torno, fresado, CNC, EDM, corte por agua, marcado láser y tratamientos térmicos en Cd. Juárez, Chihuahua. Envíos nacionales e internacionales."
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
