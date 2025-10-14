"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Wrench, Cog, Ruler, Mail, Phone, MapPin, CheckCircle2, Hammer, Layers,
  Sparkles, ShieldCheck, Bolt, MessageCircle
} from "lucide-react";

export default function Page() {
  const [open, setOpen] = useState(false);

  const servicios = [
    { icon: <Wrench className="w-6 h-6" />, title: "Torno", desc: "Maquinado de alta precisión en piezas cilíndricas." },
    { icon: <Ruler className="w-6 h-6" />, title: "Fresadora", desc: "Cavidades, caras planas, chaflanes y contornos complejos." },
    { icon: <Cog className="w-6 h-6" />, title: "CNC", desc: "Producción repetible con tolerancias estrechas." },
    { icon: <Bolt className="w-6 h-6" />, title: "EDM Wire", desc: "Corte por hilo para geometrías imposibles por arranque convencional." },
    { icon: <Bolt className="w-6 h-6" />, title: "RAM EDM", desc: "Erosión por penetración para detalles finos en moldes y dados." },
    { icon: <Layers className="w-6 h-6" />, title: "Water Jet", desc: "Corte por chorro de agua en múltiples materiales." },
    { icon: <Sparkles className="w-6 h-6" />, title: "Laser Mark / Engraving", desc: "Marcado y grabado láser (logos, códigos, series)." },
    { icon: <Hammer className="w-6 h-6" />, title: "Tratamientos Térmicos", desc: "Temple, revenido, normalizado, nitrurado y más." },
  ];

  const materiales = [
    "A2", "D2", "4140 Prehardened", "4140 Cold Roll", "Acero 1018", "Aluminio 6061", "Delrin Negro", "Delrin Blanco", "Acetal",
    "Inoxidable 303", "Inoxidable 304", "Inoxidable 316", "12L14", "Latón", "Bronce", "Cobre", "Carbón", "Vaquelita", "G-10", "O1", "Acero S7",
  ];

  const capacidades = [
    "Tolerancias típicas ±0.01 mm (según diseño y material)",
    "Acabados: Ra 1.6–3.2 μm (mejorables bajo solicitud)",
    "Prototipo, tirajes cortos y producción",
    "Inspección dimensional y reportes de calidad",
    "Documentación y trazabilidad bajo pedido",
  ];

  return (
    <div className="min-h-screen w-full bg-semmuli-graybg text-semmuli-dark relative">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-semmuli-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/LOGO_SEMMULI.jpg" alt="Logo SEMMULI PRECISIÓN" width={44} height={44} className="rounded-full" />
            <a href="#home" className="font-black tracking-tight text-xl md:text-2xl text-semmuli-dark">SEMMULI <span className="text-semmuli-primary">PRECISIÓN</span></a>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-semmuli-dark">
            <a href="#servicios" className="hover:text-semmuli-primary">Servicios</a>
            <a href="#materiales" className="hover:text-semmuli-primary">Materiales</a>
            <a href="#calidad" className="hover:text-semmuli-primary">Calidad</a>
            <a href="#contacto" className="hover:text-semmuli-primary">Contacto</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center px-3 py-2 rounded-lg border border-semmuli-light">
            <span className="sr-only">Abrir menú</span>
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M3 5h14M3 10h14M3 15h14"/></svg>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-semmuli-light via-white to-semmuli-graybg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Maquinados industriales con <span className="text-semmuli-primary">precisión</span> y <span className="text-semmuli-primary">confianza</span>
            </h1>
            <p className="mt-4 text-lg text-semmuli-dark/80 max-w-xl">
              Torno, fresado, CNC, EDM (Wire & RAM), water jet, láser y tratamientos térmicos. Calidad consistente para moldes, herramentales y componentes de producción.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contacto" className="px-5 py-3 rounded-2xl bg-semmuli-primary text-white font-medium shadow hover:bg-semmuli-dark transition">Cotiza tu proyecto</a>
              <a href="#servicios" className="px-5 py-3 rounded-2xl border border-semmuli-primary text-semmuli-primary font-medium hover:bg-semmuli-light/30">Ver servicios</a>
            </div>
            <div className="mt-6 grid gap-2 text-sm">
              <div className="flex items-center gap-3 text-semmuli-dark/80"><ShieldCheck className="w-5 h-5 text-semmuli-primary" /> ISO-like workflow · Inspección · Entregas puntuales</div>
              <div className="flex items-center gap-3 text-semmuli-dark/80"><MapPin className="w-5 h-5 text-semmuli-primary" /> Cd. Juárez, Chihuahua · <span className="font-semibold text-semmuli-dark">Envíos nacionales e internacionales</span></div>
            </div>
          </div>
          <div className="relative grid place-items-center">
            <Image src="/LOGO_SEMMULI.jpg" alt="Logo SEMMULI PRECISIÓN" width={300} height={300} className="rounded-full shadow-lg border border-semmuli-light" />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-16 md:py-20 border-t border-semmuli-light bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="text-semmuli-primary font-bold">SERVICIOS</span>
            <div className="h-px flex-1 bg-semmuli-light" />
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">Capacidades de manufactura</h2>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((s, i) => (
              <div key={i} className="rounded-3xl border border-semmuli-light bg-white p-5 shadow-card hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-semmuli-light text-semmuli-dark grid place-items-center mb-3">
                  {s.icon}
                </div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-semmuli-dark/80 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-semmuli-dark/60">*Sujeto a complejidad, material y carga de producción.</div>
        </div>
      </section>

      {/* MATERIALES */}
      <section id="materiales" className="py-16 md:py-20 border-t border-semmuli-light bg-semmuli-graybg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="text-semmuli-primary font-bold">MATERIALES</span>
            <div className="h-px flex-1 bg-semmuli-light" />
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">Experiencia en múltiples materiales</h2>

          <ul className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {materiales.map((m, i) => (
              <li key={i} className="flex items-center gap-2 text-sm bg-white border border-semmuli-light rounded-2xl px-3 py-2 shadow-card">
                <CheckCircle2 className="w-4 h-4 text-semmuli-primary" /> {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CALIDAD */}
      <section id="calidad" className="py-16 md:py-20 border-t border-semmuli-light bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="text-semmuli-primary font-bold">CALIDAD</span>
            <div className="h-px flex-1 bg-semmuli-light" />
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">Compromiso con la precisión</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-3xl border border-semmuli-light p-6 shadow-card">
              <h3 className="font-semibold flex items-center gap-2 text-semmuli-dark"><ShieldCheck className="w-5 h-5 text-semmuli-primary"/> Procesos</h3>
              <ul className="mt-3 space-y-2 text-sm text-semmuli-dark/90 list-disc list-inside">
                {capacidades.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-semmuli-light p-6 shadow-card">
              <h3 className="font-semibold flex items-center gap-2 text-semmuli-dark"><Sparkles className="w-5 h-5 text-semmuli-primary"/> Sectores atendidos</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-semmuli-dark/90">
                {["Automotriz","Moldes y troqueles","Electrónica","Alimentos","Dispositivos médicos","Maquinaria"].map((s,i)=> (
                  <li key={i} className="bg-semmuli-graybg border border-semmuli-light rounded-xl px-3 py-2">{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16 md:py-20 border-t border-semmuli-light bg-semmuli-graybg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-semmuli-primary font-bold">CONTACTO</span>
                <div className="h-px flex-1 bg-semmuli-light" />
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">¿Listo para cotizar?</h2>
              <p className="mt-3 text-semmuli-dark/80">Comparte tu dibujo, tolerancias, material y cantidad. Te respondemos con tiempos y precio estimado.</p>

              <div className="mt-6 space-y-3">
                <a href="mailto:semmuli@outlook.es" className="flex items-center gap-3 rounded-2xl border border-semmuli-light p-4 bg-white shadow-card hover:shadow-md">
                  <Mail className="w-5 h-5 text-semmuli-primary"/> semmuli@outlook.es
                </a>
                <a href="https://wa.me/526563290226?text=Hola%2C%20estoy%20interesado%20en%20una%20cotizaci%C3%B3n%20con%20SEMMULI%20PRECISI%C3%93N." target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-semmuli-light p-4 bg-green-50 shadow-card hover:shadow-md">
                  <Phone className="w-5 h-5 text-green-600"/> WhatsApp: +52 656 329 0226
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-semmuli-light p-4 bg-white">
                  <MapPin className="w-5 h-5 text-semmuli-primary"/> Cd. Juárez, Chihuahua — <span className="font-medium">Envíos nacionales e internacionales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/526563290226?text=Hola%2C%20estoy%20interesado%20en%20una%20cotizaci%C3%B3n%20con%20SEMMULI%20PRECISI%C3%93N."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 z-50"
        title="Contáctanos por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
