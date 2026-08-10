"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Wrench,
  Cog,
  Ruler,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Hammer,
  Layers,
  Sparkles,
  ShieldCheck,
  Bolt,
  MessageCircle,
  Globe2,
  ArrowRight,
} from "lucide-react";

type Language = "en" | "es";

const content = {
  en: {
    languageName: "English",
    nav: {
      capabilities: "Capabilities",
      materials: "Materials",
      quality: "Quality",
      industries: "Industries",
      contact: "Contact",
    },
    hero: {
      eyebrow: "PRECISION MANUFACTURING · CIUDAD JUÁREZ, MEXICO",
      title1: "Precision Manufacturing",
      title2: "Built for Industry.",
      description:
        "CNC machining, conventional machining, Wire EDM, Sinker EDM and value-added manufacturing services for tooling, prototypes and production components.",
      quote: "Request a Quote",
      capabilities: "View Capabilities",
      qualityLine:
        "Documented quality procedures · Dimensional inspection · Traceability upon request",
      locationLine:
        "Ciudad Juárez, Chihuahua, Mexico · National & international shipping",
    },
    capabilities: {
      label: "CAPABILITIES",
      title: "Manufacturing Capabilities",
      subtitle:
        "Flexible manufacturing support for prototypes, tooling, replacement components, short runs and production requirements.",
      disclaimer:
        "* Capability, tolerance and lead time depend on geometry, material, quantity and production availability.",
    },
    services: [
      {
        title: "CNC Milling",
        desc: "3-axis CNC milling for precision components, tooling, fixtures and production parts.",
      },
      {
        title: "CNC Turning",
        desc: "Precision turning for shafts, bushings, threaded components and cylindrical geometries.",
      },
      {
        title: "Conventional Machining",
        desc: "Manual milling and turning for repair work, one-offs, modifications and support operations.",
      },
      {
        title: "Wire EDM",
        desc: "Precision wire electrical discharge machining for intricate profiles, hardened materials and tight features.",
      },
      {
        title: "Sinker EDM",
        desc: "Ram / sinker EDM for cavities, fine details, molds, dies and hard-to-machine features.",
      },
      {
        title: "Precision Grinding",
        desc: "Grinding operations for dimensional control, flatness and improved surface finish.",
      },
      {
        title: "Laser Marking & Engraving",
        desc: "Permanent part identification, logos, serial numbers, codes and industrial marking.",
      },
      {
        title: "Special Processes",
        desc: "Heat treatment, anodizing, black oxide, painting, waterjet and other processes available according to project requirements.",
      },
    ],
    materials: {
      label: "MATERIALS",
      title: "Experience Across Engineering Materials",
      subtitle:
        "Material availability and exact grade are confirmed during quotation and technical review.",
    },
    materialList: [
      "AISI A2 Tool Steel",
      "AISI D2 Tool Steel",
      "AISI O1 Tool Steel",
      "AISI S7 Tool Steel",
      "AISI 4140 Alloy Steel",
      "4140 Pre-Hardened",
      "AISI 1018 Carbon Steel",
      "12L14 Free-Machining Steel",
      "Aluminum 6061",
      "Stainless Steel 303",
      "Stainless Steel 304",
      "Stainless Steel 316 / 316L",
      "Delrin® / Acetal",
      "UHMW / Engineering Plastics",
      "G-10",
      "Bakelite / Phenolic",
      "Brass",
      "Bronze",
      "Copper",
      "Carbon / Graphite",
    ],
    quality: {
      label: "QUALITY",
      title: "Precision, Inspection & Documentation",
      intro:
        "Our quality approach is based on documented manufacturing and inspection practices designed to support customer drawings, specifications and traceability requirements.",
      processTitle: "Quality & Inspection",
      processes: [
        "Dimensional inspection using calibrated measuring equipment as applicable",
        "Inspection records and quality reports available according to project requirements",
        "Material and process documentation available when specified",
        "Lot identification and traceability available upon request",
        "Prototype, short-run and production support",
        "Typical machining tolerances down to ±0.01 mm when geometry, material and process capability allow",
        "Surface finish requirements evaluated per drawing and manufacturing process",
      ],
      certificationTitle: "Certification Statement",
      certificationBody:
        "SEMMULI Precision does not represent itself as ISO 9001 certified unless a valid certification is formally issued and current. Customer-specific quality requirements, inspection plans and documentation are reviewed during quotation.",
      note:
        "Specific tolerances, inspection levels, certificates and special-process documentation must be defined on the drawing, purchase order or quotation.",
    },
    industries: {
      label: "INDUSTRIES",
      title: "Industries We Support",
      items: [
        "Automotive",
        "Tooling, Molds & Dies",
        "Industrial Equipment",
        "Electronics",
        "Food Processing Equipment",
        "Medical & Precision Components",
      ],
    },
    contact: {
      label: "REQUEST A QUOTE",
      title: "Send Us Your Project",
      description:
        "Send your drawing, 3D model, material, quantity, tolerances and required delivery date. Our team will review the project and provide a manufacturing quotation.",
      emailLabel: "RFQ Email",
      whatsappLabel: "WhatsApp",
      location:
        "Ciudad Juárez, Chihuahua, Mexico · National & international shipping",
      whatsappText:
        "Hello, I would like to request a quotation from SEMMULI Precision.",
    },
    footer:
      "SEMMULI PRECISION · Precision Manufacturing · Ciudad Juárez, Chihuahua, Mexico",
  },

  es: {
    languageName: "Español",
    nav: {
      capabilities: "Capacidades",
      materials: "Materiales",
      quality: "Calidad",
      industries: "Industrias",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "MANUFACTURA DE PRECISIÓN · CIUDAD JUÁREZ, MÉXICO",
      title1: "Manufactura de Precisión",
      title2: "para la Industria.",
      description:
        "Maquinado CNC, maquinado convencional, Wire EDM, Sinker EDM y servicios de manufactura de valor agregado para herramentales, prototipos y componentes de producción.",
      quote: "Solicitar Cotización",
      capabilities: "Ver Capacidades",
      qualityLine:
        "Procedimientos documentados de calidad · Inspección dimensional · Trazabilidad bajo solicitud",
      locationLine:
        "Ciudad Juárez, Chihuahua, México · Envíos nacionales e internacionales",
    },
    capabilities: {
      label: "CAPACIDADES",
      title: "Capacidades de Manufactura",
      subtitle:
        "Soporte flexible para prototipos, herramentales, refacciones, tirajes cortos y requerimientos de producción.",
      disclaimer:
        "* La capacidad, tolerancia y tiempo de entrega dependen de la geometría, material, cantidad y disponibilidad de producción.",
    },
    services: [
      {
        title: "Fresado CNC",
        desc: "Fresado CNC de 3 ejes para componentes de precisión, herramentales, fixtures y piezas de producción.",
      },
      {
        title: "Torneado CNC",
        desc: "Torneado de precisión para flechas, bujes, componentes roscados y geometrías cilíndricas.",
      },
      {
        title: "Maquinado Convencional",
        desc: "Fresado y torneado convencional para reparaciones, piezas únicas, modificaciones y operaciones de soporte.",
      },
      {
        title: "Wire EDM",
        desc: "Electroerosión por hilo para perfiles complejos, materiales endurecidos y características de precisión.",
      },
      {
        title: "Sinker EDM",
        desc: "Electroerosión por penetración para cavidades, detalles finos, moldes, dados y geometrías difíciles.",
      },
      {
        title: "Rectificado de Precisión",
        desc: "Operaciones de rectificado para control dimensional, planitud y mejora de acabado superficial.",
      },
      {
        title: "Marcado y Grabado Láser",
        desc: "Identificación permanente de piezas, logotipos, números de serie, códigos y marcado industrial.",
      },
      {
        title: "Procesos Especiales",
        desc: "Tratamientos térmicos, anodizado, black oxide, pintura, waterjet y otros procesos disponibles según los requisitos del proyecto.",
      },
    ],
    materials: {
      label: "MATERIALES",
      title: "Experiencia en Materiales de Ingeniería",
      subtitle:
        "La disponibilidad y grado exacto del material se confirman durante la cotización y revisión técnica.",
    },
    materialList: [
      "Acero Herramienta AISI A2",
      "Acero Herramienta AISI D2",
      "Acero Herramienta AISI O1",
      "Acero Herramienta AISI S7",
      "Acero Aleado AISI 4140",
      "4140 Pre-Endurecido",
      "Acero al Carbono AISI 1018",
      "Acero 12L14",
      "Aluminio 6061",
      "Acero Inoxidable 303",
      "Acero Inoxidable 304",
      "Acero Inoxidable 316 / 316L",
      "Delrin® / Acetal",
      "UHMW / Plásticos de Ingeniería",
      "G-10",
      "Baquelita / Fenólico",
      "Latón",
      "Bronce",
      "Cobre",
      "Carbón / Grafito",
    ],
    quality: {
      label: "CALIDAD",
      title: "Precisión, Inspección y Documentación",
      intro:
        "Nuestro enfoque de calidad se basa en prácticas documentadas de manufactura e inspección diseñadas para cumplir dibujos, especificaciones y requisitos de trazabilidad del cliente.",
      processTitle: "Calidad e Inspección",
      processes: [
        "Inspección dimensional con equipo de medición calibrado según aplique",
        "Registros de inspección y reportes de calidad disponibles según los requisitos del proyecto",
        "Documentación de material y procesos disponible cuando sea especificada",
        "Identificación de lote y trazabilidad disponibles bajo solicitud",
        "Soporte para prototipos, tirajes cortos y producción",
        "Tolerancias típicas de maquinado de hasta ±0.01 mm cuando la geometría, material y capacidad del proceso lo permitan",
        "Requisitos de acabado superficial evaluados conforme al dibujo y proceso de manufactura",
      ],
      certificationTitle: "Declaración sobre Certificación",
      certificationBody:
        "SEMMULI Precision no se presenta como empresa certificada ISO 9001 mientras no exista una certificación formal, vigente y verificable. Los requisitos específicos de calidad, planes de inspección y documentación del cliente se revisan durante la cotización.",
      note:
        "Las tolerancias, niveles de inspección, certificados y documentación de procesos especiales deben definirse en el dibujo, orden de compra o cotización.",
    },
    industries: {
      label: "INDUSTRIAS",
      title: "Industrias que Atendemos",
      items: [
        "Automotriz",
        "Herramentales, Moldes y Troqueles",
        "Equipo Industrial",
        "Electrónica",
        "Equipo para Procesamiento de Alimentos",
        "Componentes Médicos y de Precisión",
      ],
    },
    contact: {
      label: "SOLICITA UNA COTIZACIÓN",
      title: "Envíanos tu Proyecto",
      description:
        "Comparte tu dibujo, modelo 3D, material, cantidad, tolerancias y fecha requerida. Nuestro equipo revisará el proyecto y preparará una cotización de manufactura.",
      emailLabel: "Correo de Cotizaciones",
      whatsappLabel: "WhatsApp",
      location:
        "Ciudad Juárez, Chihuahua, México · Envíos nacionales e internacionales",
      whatsappText:
        "Hola, me gustaría solicitar una cotización con SEMMULI Precision.",
    },
    footer:
      "SEMMULI PRECISION · Manufactura de Precisión · Ciudad Juárez, Chihuahua, México",
  },
};

const serviceIcons = [
  <Cog className="w-6 h-6" key="1" />,
  <Wrench className="w-6 h-6" key="2" />,
  <Ruler className="w-6 h-6" key="3" />,
  <Bolt className="w-6 h-6" key="4" />,
  <Bolt className="w-6 h-6" key="5" />,
  <Layers className="w-6 h-6" key="6" />,
  <Sparkles className="w-6 h-6" key="7" />,
  <Hammer className="w-6 h-6" key="8" />,
];

export default function Page() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("semmuli-language");
    if (saved === "en" || saved === "es") {
      setLanguage(saved);
    }
  }, []);

  const selectLanguage = (lang: Language) => {
    window.localStorage.setItem("semmuli-language", lang);
    setLanguage(lang);
    setMenuOpen(false);
  };

  if (!language) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <div className="mx-auto mb-8 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border border-white/15 shadow-2xl">
            <Image
              src="/LOGO_SEMMULI.jpg"
              alt="SEMMULI Precision"
              width={180}
              height={180}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-xs md:text-sm tracking-[0.3em] text-sky-300 font-semibold">
            PRECISION MANUFACTURING · CIUDAD JUÁREZ, MEXICO
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-tight">
            SEMMULI <span className="text-sky-400">PRECISION</span>
          </h1>

          <p className="mt-3 text-sm md:text-base tracking-[0.22em] text-slate-300 uppercase">
            A Mechanova Company
          </p>

          <div className="mt-12">
            <p className="text-lg md:text-xl font-semibold">Select your language</p>
            <p className="mt-1 text-slate-400">Selecciona tu idioma</p>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <button
              onClick={() => selectLanguage("en")}
              className="group rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-5 transition flex items-center justify-between"
            >
              <div className="text-left">
                <div className="text-xl font-bold">English</div>
                <div className="text-sm text-slate-400">United States / International</div>
              </div>
              <ArrowRight className="w-5 h-5 text-sky-400 group-hover:translate-x-1 transition" />
            </button>

            <button
              onClick={() => selectLanguage("es")}
              className="group rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-5 transition flex items-center justify-between"
            >
              <div className="text-left">
                <div className="text-xl font-bold">Español</div>
                <div className="text-sm text-slate-400">México / Latinoamérica</div>
              </div>
              <ArrowRight className="w-5 h-5 text-sky-400 group-hover:translate-x-1 transition" />
            </button>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            Engineering Precision for Industry
          </p>
        </div>
      </main>
    );
  }

  const t = content[language];
  const whatsappHref = `https://wa.me/526563290226?text=${encodeURIComponent(
    t.contact.whatsappText
  )}`;

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-950">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 min-h-[72px] flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/LOGO_SEMMULI.jpg"
              alt="SEMMULI Precision"
              width={46}
              height={46}
              className="rounded-full"
            />
            <div>
              <div className="font-black tracking-tight text-lg md:text-xl">
                SEMMULI <span className="text-sky-600">PRECISION</span>
              </div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-slate-500">
                A Mechanova Company
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#capabilities" className="hover:text-sky-600">
              {t.nav.capabilities}
            </a>
            <a href="#materials" className="hover:text-sky-600">
              {t.nav.materials}
            </a>
            <a href="#quality" className="hover:text-sky-600">
              {t.nav.quality}
            </a>
            <a href="#industries" className="hover:text-sky-600">
              {t.nav.industries}
            </a>
            <a href="#contact" className="hover:text-sky-600">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => selectLanguage(language === "en" ? "es" : "en")}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold hover:border-sky-300 hover:text-sky-700 transition"
            >
              <Globe2 className="w-4 h-4" />
              {language === "en" ? "ES" : "EN"}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden inline-flex items-center px-3 py-2 rounded-xl border border-slate-200"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4">
            <div className="grid gap-3 text-sm font-medium">
              <a href="#capabilities" onClick={() => setMenuOpen(false)}>
                {t.nav.capabilities}
              </a>
              <a href="#materials" onClick={() => setMenuOpen(false)}>
                {t.nav.materials}
              </a>
              <a href="#quality" onClick={() => setMenuOpen(false)}>
                {t.nav.quality}
              </a>
              <a href="#industries" onClick={() => setMenuOpen(false)}>
                {t.nav.industries}
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                {t.nav.contact}
              </a>
              <button
                onClick={() => selectLanguage(language === "en" ? "es" : "en")}
                className="text-left text-sky-700 font-bold"
              >
                {language === "en" ? "Cambiar a Español" : "Switch to English"}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-sky-400/30" />
          <div className="absolute top-24 right-24 w-64 h-64 rounded-full border border-sky-400/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs md:text-sm tracking-[0.22em] text-sky-300 font-bold">
              {t.hero.eyebrow}
            </p>

            <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              {t.hero.title1}
              <span className="block text-sky-400">{t.hero.title2}</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition"
              >
                {t.hero.quote}
              </a>
              <a
                href="#capabilities"
                className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 font-semibold transition"
              >
                {t.hero.capabilities}
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span>{t.hero.qualityLine}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span>{t.hero.locationLine}</span>
              </div>
            </div>
          </div>

          <div className="relative grid place-items-center">
            <div className="absolute w-80 h-80 rounded-full bg-sky-500/10 blur-3xl" />
            <Image
              src="/LOGO_SEMMULI.jpg"
              alt="SEMMULI Precision"
              width={330}
              height={330}
              priority
              className="relative rounded-full shadow-2xl border border-white/15"
            />
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="py-18 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading
            label={t.capabilities.label}
            title={t.capabilities.title}
            subtitle={t.capabilities.subtitle}
          />

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.services.map((service, i) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-700 grid place-items-center mb-4">
                  {serviceIcons[i]}
                </div>
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 mt-2">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-7 text-sm text-slate-500">
            {t.capabilities.disclaimer}
          </p>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading
            label={t.materials.label}
            title={t.materials.title}
            subtitle={t.materials.subtitle}
          />

          <ul className="mt-9 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {t.materialList.map((material) => (
              <li
                key={material}
                className="flex items-center gap-3 text-sm bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                {material}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* QUALITY */}
      <section id="quality" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading
            label={t.quality.label}
            title={t.quality.title}
            subtitle={t.quality.intro}
          />

          <div className="mt-10 grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 rounded-2xl border border-slate-200 p-7 shadow-sm">
              <h3 className="font-bold text-xl flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-sky-600" />
                {t.quality.processTitle}
              </h3>

              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-700">
                {t.quality.processes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 rounded-2xl bg-slate-950 text-white p-7 shadow-sm">
              <h3 className="font-bold text-xl flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-sky-400" />
                {t.quality.certificationTitle}
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                {t.quality.certificationBody}
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 text-xs leading-relaxed text-slate-400">
                {t.quality.note}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading
            label={t.industries.label}
            title={t.industries.title}
          />

          <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.industries.items.map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-semibold shadow-sm"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm tracking-[0.18em] text-sky-400 font-bold">
                {t.contact.label}
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight">
                {t.contact.title}
              </h2>
              <p className="mt-5 text-slate-300 leading-relaxed max-w-xl">
                {t.contact.description}
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:semmuli@outlook.es"
                className="flex items-center gap-4 rounded-xl border border-white/10 p-4 bg-white/5 hover:bg-white/10 transition"
              >
                <Mail className="w-5 h-5 text-sky-400" />
                <div>
                  <div className="text-xs text-slate-400">
                    {t.contact.emailLabel}
                  </div>
                  <div className="font-semibold">semmuli@outlook.es</div>
                </div>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 p-4 bg-white/5 hover:bg-white/10 transition"
              >
                <Phone className="w-5 h-5 text-sky-400" />
                <div>
                  <div className="text-xs text-slate-400">
                    {t.contact.whatsappLabel}
                  </div>
                  <div className="font-semibold">+52 656 329 0226</div>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-white/10 p-4 bg-white/5">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">
                  {t.contact.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-slate-500 text-center text-xs px-4 py-6">
        {t.footer}
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110 z-50"
        title="WhatsApp"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-sky-700 text-sm tracking-[0.16em] font-bold">
          {label}
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
