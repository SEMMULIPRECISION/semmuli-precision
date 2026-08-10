ChatGPT Plus





615aa230-f6af-46ec-aae5-7530579564f9.png

5773435a-0dc6-4cf1-9710-1f69d2b80ad5.png

0154db14-ecf8-4f45-a75f-e743a6a1bb28.png


Pasted text.txt
Document
CORRIGELO CON LOS CAMBIOS QUE ME SUGERISTE ANTERIORMENTE PARA HACERLO VER DE MANERA MAS PROFESIONAL EN INGLES, LAS CORRECCIONES TAMBIEN DE CERTIFICADOS TIPO ISO 

3d697fa7-7c2e-426c-ada1-407a41708912.png
ahora se ve asi github 

702c9d7a-0c1d-4227-ba58-642e273ebec6.png
estoy aqui pero sigue sin reconocerme como un creador 

51b8a65d-ebec-481f-9798-1441688b360e.png
 ESTO APARECIO EN COMMIT CHANGE EN GLOBAL.CSS

4da83f26-2e74-49b5-aa06-3e680f211f47.png

10b2e4c7-f3ae-4fad-be31-3409367f92dc.png

segundo LOGO_SEMMULI.jpg

Generated image: Semmuli Precision Brand Identity System

Edit


b2575ef0-66b7-4817-bfb8-1d9d66e5afba.png
quita el punto seleccionado rojo, la variante negra con fondos claros para logo en facturas impresas me gusta, me gusta el logo en la parte superior como lo generaste, el fondo oscuro letras blancas no me parece ayudame a generar algo diferente 

Generated image: Semmuli Precision Branding Board


Edit


Generated image: Semmuli Precision Brand Identity Board


Edit



Pasted markdown.md
File
 agregalo todo aqui entonces 

Edited image
fdb21b1d-9630-4a67-83b1-ed1057f78583.png
quiero esta que tu creaste 

Generated image: Semmuli Precision Manufacturing Homepage


Edit


Generated image: Precision Manufacturing Built for Industry


Edit



Pasted text(2).txt
Document
ahora genera los tadots para crearla  asi y mete todo aqui, añade las imagenes 

Worked for 26s
Listo. Ya te dejé todo integrado en un solo paquete para que la página quede mucho más cercana al diseño que aprobaste, manteniendo el selector bilingüe, las correcciones de calidad/ISO y la estructura existente. Tomé como base tu page.tsx actual. 


Descargar paquete completo SEMMULI_WEB_READY.zip

Dentro vienen page.tsx, globals.css, semmuli-logo.png, hero-cnc.jpg y un README-UPLOAD.txt con las instrucciones. También puedes bajar los archivos por separado: page.tsx, globals.css, semmuli-logo.png y hero-cnc.jpg.

La nueva versión incluye el encabezado blanco con el logo horizontal, Hero oscuro con imagen CNC, Precision Manufacturing / Built for Industry, panel de capacidades, bloque de Precision / Innovation / Reliability / Quality, sección oscura de industrias y barra inferior con los dos teléfonos comerciales, correo, ubicación y botón Request a Quote. En español todo cambia automáticamente.

Para subirlo, hazlo en este orden: primero public/semmuli-logo.png y public/hero-cnc.jpg; después reemplaza app/page.tsx; finalmente reemplaza app/globals.css. Usa un commit como Rebuild SEMMULI industrial homepage with bilingual hero and brand system. Vercel debería desplegarlo automáticamente. 








Generated image

Edit


8d2f4133-bb51-4b8c-af57-80aba24f27df.png
tengo estos archivos en public 


Pasted markdown(1).md
File
agregalo a esto porfavor ya que no lo encuentro 

a9a7b70d-2697-4b73-8965-167c3bf22ef3.png
esta es la version que me aparece ahorita, como los corrijo 

3688b2e7-514a-4d83-9437-3bc720a487e3.png
tengo este problema 

1c2dda01-e9f3-4394-89b1-fce693ad38c9.png
no me aparece nada 

a3ca3d83-fcc9-49b3-8ab2-b5bd5035aceb.png

354a14be-5fc0-4377-8a34-99b02e493716.png
3032abab-f828-44d4-9f4e-d617dffcec68.png

7c7b17cf-6795-4629-bf27-51c4370a9125.png

95f86500-7179-421b-b481-7b9bac44a890.png

Entonces ya tenemos el diagnóstico exacto: tu editor de GitHub está correcto, pero Vercel todavía está publicando una versión anterior del page.tsx.

Acabo de revisar directamente la página que está en producción. El sitio actual sigue intentando cargar:

/semmuli-logo.png
a través de Next.js:

/_next/image?...url=%2Fsemmuli-logo.png...
y Vercel responde 400 Bad Request. Por eso ves el icono de imagen rota. 

Así que no sigas buscando semmuli-logo.png en el código. Si ya no existe ninguna coincidencia en main, el problema es que ese cambio todavía no es el deployment que está sirviendo producción.

Haz ahora esto:

En el page.tsx que tienes abierto en GitHub, arriba a la derecha pulsa Commit changes…

Mensaje:
Fix SEMMULI logo path

Deja:
Commit directly to the main branch

Pulsa Commit changes.

Después ve a Vercel → Deployments. El primer deployment de semmuli-precision debe aparecer con ese mensaje nuevo y finalmente cambiar a:

● Ready — Production

No abras todavía la página hasta que aparezca Ready.

Cuando esté listo, entra a:

semmuli-precision.vercel.app

y haz:

Ctrl + Shift + R

Eso fuerza una recarga completa.

Hay otra comprobación muy importante
En Vercel, cuando aparezca el deployment nuevo, asegúrate de que la columna del proyecto diga:

semmuli-precision

porque tienes también el proyecto duplicado:

semmuli-precision-main

y no quiero que terminemos actualizando uno mientras estás visitando la URL del otro.

En este momento, la página pública todavía está usando el código antiguo del logo. 

Haz el Commit y mándame una captura de Vercel → Deployments. Ahí podremos ver exactamente cuál versión está en Production y resolverlo sin seguir modificando código innecesariamente.


e6006bcf-3cc8-4a40-b82d-e478044fa0f4.png

Ahí está el problema. La captura lo confirma claramente: los últimos tres cambios de page.tsx están fallando en Vercel.

Por eso no ves las correcciones del logo. Vercel sigue mostrando el último deployment que sí compiló correctamente, que es Add files via upload — Ready.

No cambiemos nada más del código todavía.

Haz clic en el primer Update page.tsx que dice Error 6s (commit 98f7de9).

Se abrirá el detalle del deployment. Busca la sección Build Logs o el mensaje rojo del error.

Ahí probablemente veremos algo parecido a:

Failed to compile
o:

Type error
con el archivo y número de línea:

./app/page.tsx:XXX:XX
Mándame una captura de ese error completo. Con esa información corregimos exactamente la línea que impide el deployment.

Lo importante es que ya sabemos que el problema del logo es consecuencia de que tus cambios nuevos nunca llegaron a producción, no de que el PNG esté mal. No necesitamos seguir modificando rutas de imágenes hasta solucionar primero el error de compilación.


14:29:51.193
 
Failed to compile.
14:29:51.194
 
14:29:51.195
 
./app/page.tsx
14:29:51.197
 
Error:
14:29:51.197
 
x Expected ';', '}' or <eof>
14:29:51.197
 
,-[/vercel/path0/app/page.tsx:1:1]
14:29:51.198
 
1 | ,-> ```
14:29:51.198
 
2 | | "use client";
14:29:51.198
 
3 | |
14:29:51.198
 
4 | | import Image from "next/image";


Ya encontramos el error exacto.

Vercel está fallando porque en tu page.tsx quedó pegada literalmente esta línea al inicio:


Eso es un marcador de Markdown, **no código TypeScript**, y por eso Vercel marca:

`Expected ';', '}' or <eof>`

También normalmente queda otro:

```text

al final del archivo.

Tu `page.tsx` debe empezar directamente con:

```tsx
"use client";
y terminar con la última llave } del código, sin ningún ``` antes ni después.

Ya te limpié el archivo completo y además dejé corregida la ruta del logo para usar:

/logo-semmuli-horizontal.png
Puedes usar este archivo directamente:

Descargar page-clean-no-fences.tsx

En GitHub haz app → page.tsx → Edit, selecciona todo con Ctrl + A, bórralo y pega únicamente el contenido del archivo limpio. Después haz Commit directly to main.

El primer renglón debe verse exactamente:

"use client";
Después del commit, Vercel debería volver a compilar. Si aparece otro error, ya será uno distinto y mucho más fácil de corregir. 




Library
/
page-clean-no-fences.tsx


"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bolt,
  CheckCircle2,
  Cog,
  Crosshair,
  Factory,
  Globe2,
  Hammer,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
  Utensils,
  HeartPulse,
  Car,
  Cpu,
  Box,
  Images,
  X,
  Upload,
  FileText,
  Building2,
  User,
  MapPinned,
} from "lucide-react";

type Language = "en" | "es";

type PortfolioItem = {
  image: string;
  titleEn: string;
  titleEs: string;
  processEn: string;
  processEs: string;
  material: string;
  descriptionEn: string;
  descriptionEs: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    image: "/portfolio/cnc-milling-01.jpg",
    titleEn: "Precision CNC Machined Component",
    titleEs: "Componente Maquinado CNC de Precisión",
    processEn: "3-Axis CNC Milling",
    processEs: "Fresado CNC 3 Ejes",
    material: "Aluminum 6061",
    descriptionEn:
      "Example production component manufactured from customer drawing with dimensional inspection.",
    descriptionEs:
      "Ejemplo de componente fabricado desde dibujo del cliente con inspección dimensional.",
  },
  {
    image: "/portfolio/cnc-turning-01.jpg",
    titleEn: "Precision Turned Component",
    titleEs: "Componente Torneado de Precisión",
    processEn: "CNC Turning",
    processEs: "Torneado CNC",
    material: "AISI 4140",
    descriptionEn:
      "Turned component with critical diameters, shoulders and threaded features.",
    descriptionEs:
      "Componente torneado con diámetros críticos, hombros y características roscadas.",
  },
  {
    image: "/portfolio/wire-edm-01.jpg",
    titleEn: "Wire EDM Profile",
    titleEs: "Perfil por Wire EDM",
    processEn: "Wire EDM",
    processEs: "Wire EDM",
    material: "Tool Steel",
    descriptionEn:
      "Precision profile cut by wire EDM for hardened tooling and complex geometry.",
    descriptionEs:
      "Perfil de precisión cortado por Wire EDM para herramental endurecido y geometría compleja.",
  },
  {
    image: "/portfolio/sinker-edm-01.jpg",
    titleEn: "EDM Cavity Detail",
    titleEs: "Detalle de Cavidad EDM",
    processEn: "Sinker EDM",
    processEs: "Sinker EDM",
    material: "AISI D2",
    descriptionEn:
      "Cavity and fine-detail EDM work for tooling, molds and dies.",
    descriptionEs:
      "Trabajo EDM de cavidad y detalle fino para herramentales, moldes y troqueles.",
  },
  {
    image: "/portfolio/grinding-01.jpg",
    titleEn: "Precision Ground Surface",
    titleEs: "Superficie Rectificada de Precisión",
    processEn: "Precision Grinding",
    processEs: "Rectificado de Precisión",
    material: "Hardened Steel",
    descriptionEn:
      "Grinding operation used to control flatness, size and final surface condition.",
    descriptionEs:
      "Operación de rectificado para controlar planitud, dimensión y condición superficial final.",
  },
  {
    image: "/portfolio/tooling-01.jpg",
    titleEn: "Custom Tooling & Fixture",
    titleEs: "Herramental y Fixture Especial",
    processEn: "Tooling & Fixtures",
    processEs: "Herramentales & Fixtures",
    material: "Mixed Materials",
    descriptionEn:
      "Custom manufacturing support for production tooling, workholding and dedicated fixtures.",
    descriptionEs:
      "Soporte de manufactura para herramentales, sujeción y fixtures dedicados de producción.",
  },
];

const copy = {
  en: {
    nav: {
      capabilities: "Capabilities",
      portfolio: "Portfolio",
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
      view: "View Capabilities",
      quality:
        "Documented quality procedures · Dimensional inspection · Traceability upon request",
      location:
        "Ciudad Juárez, Chihuahua, Mexico · National & international shipping",
    },
    values: [
      { title: "PRECISION", text: "Tight tolerances and dimensional inspection to meet customer specifications." },
      { title: "INNOVATION", text: "Continuous improvement in processes, technology and manufacturing solutions." },
      { title: "RELIABILITY", text: "Consistent quality, communication and delivery focus throughout every project." },
      { title: "QUALITY", text: "Documented manufacturing and inspection practices based on customer requirements." },
    ],
    core: [
      "3-Axis CNC Milling",
      "CNC Turning",
      "Wire EDM",
      "Sinker EDM",
      "Precision Grinding",
      "Tooling & Fixtures",
    ],
    portfolio: {
      label: "PORTFOLIO",
      title: "Selected Manufacturing Work",
      subtitle:
        "Examples of machining, EDM, tooling and precision manufacturing work. Customer-sensitive information and proprietary dimensions are not displayed.",
      view: "View Project",
      process: "Process",
      material: "Material",
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
      ["CNC Milling", "3-axis CNC milling for precision components, tooling, fixtures and production parts."],
      ["CNC Turning", "Precision turning for shafts, bushings, threaded components and cylindrical geometries."],
      ["Conventional Machining", "Manual milling and turning for repair work, one-offs, modifications and support operations."],
      ["Wire EDM", "Precision wire electrical discharge machining for intricate profiles, hardened materials and tight features."],
      ["Sinker EDM", "Ram / sinker EDM for cavities, fine details, molds, dies and hard-to-machine features."],
      ["Precision Grinding", "Grinding operations for dimensional control, flatness and improved surface finish."],
      ["Laser Marking & Engraving", "Permanent part identification, logos, serial numbers, codes and industrial marking."],
      ["Special Processes", "Heat treatment, anodizing, black oxide, painting, waterjet and other processes available according to project requirements."],
    ],
    materials: {
      label: "MATERIALS",
      title: "Experience Across Engineering Materials",
      subtitle:
        "Material availability and exact grade are confirmed during quotation and technical review.",
    },
    materialList: [
      "AISI A2 Tool Steel","AISI D2 Tool Steel","AISI O1 Tool Steel","AISI S7 Tool Steel",
      "AISI 4140 Alloy Steel","4140 Pre-Hardened","AISI 1018 Carbon Steel","12L14 Free-Machining Steel",
      "Aluminum 6061","Stainless Steel 303","Stainless Steel 304","Stainless Steel 316 / 316L",
      "Delrin® / Acetal","UHMW / Engineering Plastics","G-10","Bakelite / Phenolic",
      "Brass","Bronze","Copper","Carbon / Graphite",
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
      certTitle: "Certification Statement",
      cert:
        "SEMMULI Precision does not represent itself as ISO 9001 certified unless a valid certification is formally issued and current. Customer-specific quality requirements, inspection plans and documentation are reviewed during quotation.",
      note:
        "Specific tolerances, inspection levels, certificates and special-process documentation must be defined on the drawing, purchase order or quotation.",
    },
    industries: {
      title: "INDUSTRIES WE SUPPORT",
      items: ["Automotive","Tooling, Molds & Dies","Industrial Equipment","Electronics","Food Processing Equipment","Medical & Precision Components"],
    },
    contact: {
      quote: "Request a Quote",
      rfq: "RFQ Email",
      location: "Ciudad Juárez, Chihuahua, Mexico",
      shipping: "National & international shipping",
      commercial1: "Commercial 1",
      commercial2: "Commercial 2",
      whatsappText: "Hello, I would like to request a quotation from SEMMULI Precision.",
    },
    rfqForm: {
      label: "REQUEST FOR QUOTE",
      title: "Tell Us About Your Project",
      subtitle:
        "Share your project information and technical files. Our team will review your requirements and contact you with questions, lead time and quotation details.",
      name: "Full Name",
      company: "Company",
      email: "Business Email",
      country: "Country",
      city: "City",
      postal: "Postal / ZIP Code",
      message: "Project Details",
      messagePlaceholder:
        "Describe the part, quantity, material, tolerances, required delivery date, special processes or any other important requirements.",
      files: "Technical Files",
      filesHelp:
        "Attach drawings and 3D files. Accepted formats: PDF, STEP, STP, DWG and DXF.",
      submit: "Submit RFQ",
      privacy:
        "Your technical information is treated as confidential and used only to review your quotation request.",
      required: "Required",
    },
  },

  es: {
    nav: {
      capabilities: "Capacidades",
      portfolio: "Portafolio",
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
      view: "Ver Capacidades",
      quality:
        "Procedimientos documentados de calidad · Inspección dimensional · Trazabilidad bajo solicitud",
      location:
        "Ciudad Juárez, Chihuahua, México · Envíos nacionales e internacionales",
    },
    values: [
      { title: "PRECISIÓN", text: "Tolerancias cerradas e inspección dimensional para cumplir especificaciones del cliente." },
      { title: "INNOVACIÓN", text: "Mejora continua en procesos, tecnología y soluciones de manufactura." },
      { title: "CONFIABILIDAD", text: "Enfoque en calidad consistente, comunicación y cumplimiento durante cada proyecto." },
      { title: "CALIDAD", text: "Prácticas documentadas de manufactura e inspección según los requisitos del cliente." },
    ],
    core: ["Fresado CNC 3 Ejes","Torneado CNC","Wire EDM","Sinker EDM","Rectificado de Precisión","Herramentales & Fixtures"],
    portfolio: {
      label: "PORTAFOLIO",
      title: "Trabajos de Manufactura Seleccionados",
      subtitle:
        "Ejemplos de maquinado, EDM, herramentales y manufactura de precisión. No se muestran dimensiones propietarias ni información sensible del cliente.",
      view: "Ver Proyecto",
      process: "Proceso",
      material: "Material",
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
      ["Fresado CNC", "Fresado CNC de 3 ejes para componentes de precisión, herramentales, fixtures y piezas de producción."],
      ["Torneado CNC", "Torneado de precisión para flechas, bujes, componentes roscados y geometrías cilíndricas."],
      ["Maquinado Convencional", "Fresado y torneado convencional para reparaciones, piezas únicas, modificaciones y operaciones de soporte."],
      ["Wire EDM", "Electroerosión por hilo para perfiles complejos, materiales endurecidos y características de precisión."],
      ["Sinker EDM", "Electroerosión por penetración para cavidades, detalles finos, moldes, dados y geometrías difíciles."],
      ["Rectificado de Precisión", "Operaciones de rectificado para control dimensional, planitud y mejora de acabado superficial."],
      ["Marcado y Grabado Láser", "Identificación permanente de piezas, logotipos, números de serie, códigos y marcado industrial."],
      ["Procesos Especiales", "Tratamientos térmicos, anodizado, black oxide, pintura, waterjet y otros procesos disponibles según los requisitos del proyecto."],
    ],
    materials: {
      label: "MATERIALES",
      title: "Experiencia en Materiales de Ingeniería",
      subtitle:
        "La disponibilidad y grado exacto del material se confirman durante la cotización y revisión técnica.",
    },
    materialList: [
      "Acero Herramienta AISI A2","Acero Herramienta AISI D2","Acero Herramienta AISI O1","Acero Herramienta AISI S7",
      "Acero Aleado AISI 4140","4140 Pre-Endurecido","Acero al Carbono AISI 1018","Acero 12L14",
      "Aluminio 6061","Acero Inoxidable 303","Acero Inoxidable 304","Acero Inoxidable 316 / 316L",
      "Delrin® / Acetal","UHMW / Plásticos de Ingeniería","G-10","Baquelita / Fenólico",
      "Latón","Bronce","Cobre","Carbón / Grafito",
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
      certTitle: "Declaración sobre Certificación",
      cert:
        "SEMMULI Precision no se presenta como empresa certificada ISO 9001 mientras no exista una certificación formal, vigente y verificable. Los requisitos específicos de calidad, planes de inspección y documentación del cliente se revisan durante la cotización.",
      note:
        "Las tolerancias, niveles de inspección, certificados y documentación de procesos especiales deben definirse en el dibujo, orden de compra o cotización.",
    },
    industries: {
      title: "INDUSTRIAS QUE ATENDEMOS",
      items: ["Automotriz","Herramentales, Moldes y Troqueles","Equipo Industrial","Electrónica","Equipo para Procesamiento de Alimentos","Componentes Médicos y de Precisión"],
    },
    contact: {
      quote: "Solicitar Cotización",
      rfq: "Correo de Cotizaciones",
      location: "Ciudad Juárez, Chihuahua, México",
      shipping: "Envíos nacionales e internacionales",
      commercial1: "Comercial 1",
      commercial2: "Comercial 2",
      whatsappText: "Hola, me gustaría solicitar una cotización con SEMMULI Precision.",
    },
    rfqForm: {
      label: "SOLICITUD DE COTIZACIÓN",
      title: "Cuéntanos Sobre tu Proyecto",
      subtitle:
        "Comparte la información de tu proyecto y los archivos técnicos. Nuestro equipo revisará los requisitos y te contactará con preguntas, tiempo de entrega y detalles de cotización.",
      name: "Nombre Completo",
      company: "Compañía",
      email: "Correo Empresarial",
      country: "País",
      city: "Ciudad",
      postal: "Código Postal",
      message: "Detalles del Proyecto",
      messagePlaceholder:
        "Describe la pieza, cantidad, material, tolerancias, fecha requerida, procesos especiales o cualquier otro requisito importante.",
      files: "Archivos Técnicos",
      filesHelp:
        "Adjunta dibujos y archivos 3D. Formatos aceptados: PDF, STEP, STP, DWG y DXF.",
      submit: "Enviar Solicitud",
      privacy:
        "Tu información técnica se trata como confidencial y se utiliza únicamente para revisar tu solicitud de cotización.",
      required: "Obligatorio",
    },
  },
};

const serviceIcons = [Cog, Wrench, Ruler, Bolt, Bolt, Crosshair, Sparkles, Hammer];
const valueIcons = [Crosshair, Lightbulb, ShieldCheck, CheckCircle2];
const industryIcons = [Car, Box, Factory, Cpu, Utensils, HeartPulse];

export default function Page() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("semmuli-language");
    if (saved === "en" || saved === "es") setLanguage(saved);
  }, []);

  const chooseLanguage = (lang: Language) => {
    window.localStorage.setItem("semmuli-language", lang);
    setLanguage(lang);
    setMenuOpen(false);
  };

  if (!language) {
    return (
      <main className="min-h-screen bg-[#020b18] text-white flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero-cnc.jpg" alt="" fill priority className="object-cover object-right opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b18] via-[#020b18]/95 to-[#020b18]/55" />
        </div>

        <div className="relative z-10 w-full max-w-3xl text-center">
          <div className="mx-auto max-w-xl rounded-3xl border border-sky-500/30 bg-[#031426]/90 p-6 shadow-2xl backdrop-blur">
            <Image src="/logo-semmuli-horizontal.png" alt="SEMMULI Precision" width={900} height={600} priority className="mx-auto h-auto w-full max-w-md" />
          </div>

          <p className="mt-8 text-xs md:text-sm tracking-[0.28em] text-sky-400 font-bold">
            PRECISION MANUFACTURING · CIUDAD JUÁREZ, MEXICO
          </p>

          <div className="mt-10">
            <p className="text-xl font-bold">Select your language</p>
            <p className="mt-1 text-slate-400">Selecciona tu idioma</p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              ["en", "English", "United States / International"],
              ["es", "Español", "México / Latinoamérica"],
            ].map(([lang, title, subtitle]) => (
              <button
                key={lang}
                onClick={() => chooseLanguage(lang as Language)}
                className="group rounded-2xl border border-sky-500/25 bg-white/[0.06] hover:bg-sky-500/10 px-6 py-5 text-left transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-black">{title}</div>
                    <div className="text-sm text-slate-400">{subtitle}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-sky-400 group-hover:translate-x-1 transition" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    );
  }

  const t = copy[language];
  const whatsappHref = `https://wa.me/526563290226?text=${encodeURIComponent(t.contact.whatsappText)}`;

  return (
    <div className="min-h-screen bg-white text-[#061326]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-[88px] max-w-[1500px] items-center justify-between px-5 md:px-10">
          <a href="#home">
            <Image src="/logo-semmuli-horizontal.png" alt="SEMMULI Precision" width={430} height={260} priority className="h-[72px] w-auto object-contain" />
          </a>

          <nav className="hidden xl:flex items-center gap-8 text-sm font-bold">
            <a href="#capabilities" className="hover:text-sky-600">{t.nav.capabilities}</a>
            <a href="#portfolio" className="hover:text-sky-600">{t.nav.portfolio}</a>
            <a href="#materials" className="hover:text-sky-600">{t.nav.materials}</a>
            <a href="#quality" className="hover:text-sky-600">{t.nav.quality}</a>
            <a href="#industries" className="hover:text-sky-600">{t.nav.industries}</a>
            <a href="#contact" className="hover:text-sky-600">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => chooseLanguage(language === "en" ? "es" : "en")} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold hover:border-sky-400 hover:text-sky-700">
              <Globe2 className="h-4 w-4" />
              {language === "en" ? "ES" : "EN"}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="xl:hidden rounded-xl border border-slate-200 p-2.5" aria-label="Menu">
              <span className="block w-5 h-0.5 bg-current mb-1.5" />
              <span className="block w-5 h-0.5 bg-current mb-1.5" />
              <span className="block w-5 h-0.5 bg-current" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-5 py-5">
            <div className="grid gap-4 font-semibold">
              <a href="#capabilities" onClick={() => setMenuOpen(false)}>{t.nav.capabilities}</a>
              <a href="#portfolio" onClick={() => setMenuOpen(false)}>{t.nav.portfolio}</a>
              <a href="#materials" onClick={() => setMenuOpen(false)}>{t.nav.materials}</a>
              <a href="#quality" onClick={() => setMenuOpen(false)}>{t.nav.quality}</a>
              <a href="#industries" onClick={() => setMenuOpen(false)}>{t.nav.industries}</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-[#020b18] text-white">
        <div className="absolute inset-0">
          <Image src="/hero-cnc.jpg" alt="CNC precision machining" fill priority className="object-cover object-center opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b18] via-[#020b18]/72 to-[#020b18]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020b18]/45 via-transparent to-black/15" />
        </div>

        <div className="relative mx-auto grid max-w-[1500px] lg:grid-cols-[0.9fr_1.1fr] gap-10 px-5 md:px-10 py-16 md:py-20 items-center">
          <div className="relative z-10">
            <p className="text-xs md:text-base tracking-[0.08em] text-[#1aa4ff] font-black">{t.hero.eyebrow}</p>
            <h1 className="mt-7 text-4xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[0.98]">
              {t.hero.title1}
              <span className="block mt-3 text-[#168fff]">{t.hero.title2}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-8 text-slate-200">{t.hero.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#rfq" className="inline-flex items-center gap-3 rounded-xl bg-[#178ff0] hover:bg-[#2aa5ff] px-6 py-4 font-black transition">
                {t.hero.quote}<ArrowRight className="h-5 w-5" />
              </a>
              <a href="#capabilities" className="rounded-xl border border-[#178ff0]/70 bg-black/25 px-6 py-4 font-bold hover:bg-white/10 transition">
                {t.hero.view}
              </a>
            </div>

            <div className="mt-8 space-y-4 text-sm text-slate-200">
              <div className="flex items-start gap-3"><ShieldCheck className="h-5 w-5 shrink-0 text-[#169bff]" /><span>{t.hero.quality}</span></div>
              <div className="flex items-start gap-3"><MapPin className="h-5 w-5 shrink-0 text-[#169bff]" /><span>{t.hero.location}</span></div>
            </div>
          </div>

          <div className="relative z-10 lg:ml-auto w-full max-w-2xl">
            <div className="rounded-3xl border border-sky-400/35 bg-[#021326]/90 shadow-2xl backdrop-blur overflow-hidden">
              <div className="px-7 pt-6 pb-5">
                <Image src="/logo-semmuli-horizontal.png" alt="SEMMULI Precision" width={800} height={520} className="mx-auto h-auto w-full max-w-[500px]" />
              </div>
              <div className="mx-6 h-px bg-sky-400/25" />
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
                {t.core.map((item, index) => {
                  const Icon = [Cog, Wrench, Bolt, Bolt, Crosshair, Ruler][index];
                  return (
                    <div key={item} className="min-h-[124px] px-3 py-5 text-center border-r border-t border-sky-400/20 last:border-r-0">
                      <Icon className="mx-auto h-7 w-7 text-[#38aaff]" />
                      <div className="mt-3 text-xs font-bold leading-5">{item}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-b border-slate-200 bg-[#f5f7fa]">
        <div className="mx-auto grid max-w-[1500px] md:grid-cols-2 xl:grid-cols-4 px-5 md:px-10">
          {t.values.map((value, index) => {
            const Icon = valueIcons[index];
            return (
              <div key={value.title} className="flex gap-5 px-4 md:px-7 py-7 border-b md:border-b-0 xl:border-r border-slate-300 last:border-r-0">
                <Icon className="mt-1 h-11 w-11 shrink-0 text-[#0878d7]" strokeWidth={1.7} />
                <div><h3 className="text-sm font-black">{value.title}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{value.text}</p></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading label={t.capabilities.label} title={t.capabilities.title} subtitle={t.capabilities.subtitle} />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.services.map(([title, desc], i) => {
              const Icon = serviceIcons[i];
              return (
                <article key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-sky-50 text-[#0878d7]"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-4 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                </article>
              );
            })}
          </div>
          <p className="mt-7 text-sm text-slate-500">{t.capabilities.disclaimer}</p>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-[#020b18] py-20 text-white">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="flex items-center gap-3">
            <Images className="h-5 w-5 text-[#1aa4ff]" />
            <span className="text-sm font-black tracking-[0.16em] text-[#1aa4ff]">{t.portfolio.label}</span>
            <div className="h-px flex-1 bg-sky-400/20" />
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight">{t.portfolio.title}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">{t.portfolio.subtitle}</p>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <article key={item.image} className="group overflow-hidden rounded-2xl border border-sky-400/15 bg-[#06182b] shadow-xl">
                <button onClick={() => setSelectedProject(item)} className="block w-full text-left">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                    <Image src={item.image} alt={language === "en" ? item.titleEn : item.titleEs} fill className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020b18]/75 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 rounded-full border border-sky-400/25 bg-black/55 px-3 py-1.5 text-xs font-bold text-sky-300 backdrop-blur">
                      {language === "en" ? item.processEn : item.processEs}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-black">{language === "en" ? item.titleEn : item.titleEs}</h3>
                    <p className="mt-2 text-sm text-slate-400">{item.material}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{language === "en" ? item.descriptionEn : item.descriptionEs}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#38aaff]">
                      {t.portfolio.view}<ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="border-y border-slate-200 bg-[#f5f7fa] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading label={t.materials.label} title={t.materials.title} subtitle={t.materials.subtitle} />
          <div className="mt-9 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {t.materialList.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0878d7]" />{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section id="quality" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading label={t.quality.label} title={t.quality.title} subtitle={t.quality.intro} />
          <div className="mt-10 grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 rounded-2xl border border-slate-200 p-7 shadow-sm">
              <h3 className="flex items-center gap-3 text-xl font-black"><ShieldCheck className="h-6 w-6 text-[#0878d7]" />{t.quality.processTitle}</h3>
              <ul className="mt-6 space-y-3">
                {t.quality.processes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#0878d7]" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="lg:col-span-2 rounded-2xl bg-[#031426] p-7 text-white shadow-xl">
              <h3 className="flex items-center gap-3 text-xl font-black"><ShieldCheck className="h-6 w-6 text-[#38aaff]" />{t.quality.certTitle}</h3>
              <p className="mt-5 text-sm leading-7 text-slate-300">{t.quality.cert}</p>
              <p className="mt-6 border-t border-white/10 pt-6 text-xs leading-6 text-slate-400">{t.quality.note}</p>
            </aside>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="bg-gradient-to-r from-[#020b18] via-[#03172b] to-[#020b18] py-12 text-white">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <h2 className="text-center text-lg md:text-xl font-black tracking-wide text-[#1899ff]">{t.industries.title}</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {t.industries.items.map((item, index) => {
              const Icon = industryIcons[index];
              return (
                <div key={item} className="px-4 py-5 text-center border-b md:border-r border-white/10 xl:border-b-0 last:border-r-0">
                  <Icon className="mx-auto h-10 w-10 text-[#1899ff]" strokeWidth={1.7} />
                  <div className="mt-3 text-sm font-medium leading-5">{item}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RFQ FORM */}
      <section id="rfq" className="bg-[#f5f7fa] py-20 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
            <div>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-[#0878d7]" />
                <span className="text-sm font-black tracking-[0.16em] text-[#0878d7]">
                  {t.rfqForm.label}
                </span>
                <div className="h-px flex-1 bg-slate-300" />
              </div>

              <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight">
                {t.rfqForm.title}
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-600">
                {t.rfqForm.subtitle}
              </p>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-black text-lg">
                  {language === "en" ? "What to include" : "Qué información incluir"}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {(
                    language === "en"
                      ? [
                          "2D drawing or PDF with dimensions and tolerances",
                          "STEP / STP model when available",
                          "Material specification and quantity",
                          "Required delivery date",
                          "Surface finish or special-process requirements",
                        ]
                      : [
                          "Dibujo 2D o PDF con dimensiones y tolerancias",
                          "Modelo STEP / STP cuando esté disponible",
                          "Especificación de material y cantidad",
                          "Fecha requerida de entrega",
                          "Acabado superficial o requisitos de procesos especiales",
                        ]
                  ).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0878d7]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-2xl bg-[#031426] p-6 text-white">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-[#38aaff]" />
                  <div>
                    <h3 className="font-black">
                      {language === "en" ? "Confidential Project Information" : "Información Confidencial del Proyecto"}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {t.rfqForm.privacy}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form
              className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  language === "en"
                    ? "RFQ form is ready. Next step: connect secure file upload and email delivery."
                    : "El formulario está listo. El siguiente paso es conectar la carga segura de archivos y el envío por correo."
                );
              }}
            >
              <div className="grid md:grid-cols-2 gap-5">
                <FormField
                  icon={<User className="h-4 w-4" />}
                  label={t.rfqForm.name}
                  name="name"
                  required
                />
                <FormField
                  icon={<Building2 className="h-4 w-4" />}
                  label={t.rfqForm.company}
                  name="company"
                  required
                />
                <FormField
                  icon={<Mail className="h-4 w-4" />}
                  label={t.rfqForm.email}
                  name="email"
                  type="email"
                  required
                />
                <FormField
                  icon={<Globe2 className="h-4 w-4" />}
                  label={t.rfqForm.country}
                  name="country"
                  required
                />
                <FormField
                  icon={<MapPinned className="h-4 w-4" />}
                  label={t.rfqForm.city}
                  name="city"
                  required
                />
                <FormField
                  icon={<MapPin className="h-4 w-4" />}
                  label={t.rfqForm.postal}
                  name="postal"
                  required
                />
              </div>

              <div className="mt-5">
                <label className="text-sm font-black text-slate-800">
                  {t.rfqForm.message}
                  <span className="ml-1 text-sky-600">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder={t.rfqForm.messagePlaceholder}
                  className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                />
              </div>

              <div className="mt-5">
                <label className="text-sm font-black text-slate-800">
                  {t.rfqForm.files}
                </label>

                <label className="mt-2 flex min-h-[150px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50/60 px-6 py-8 text-center transition hover:border-sky-500 hover:bg-sky-50">
                  <Upload className="h-9 w-9 text-[#0878d7]" />
                  <div className="mt-3 font-black text-slate-800">
                    {language === "en"
                      ? "Click to select technical files"
                      : "Haz clic para seleccionar archivos técnicos"}
                  </div>
                  <div className="mt-2 max-w-md text-xs leading-5 text-slate-500">
                    {t.rfqForm.filesHelp}
                  </div>
                  <input
                    type="file"
                    name="files"
                    multiple
                    accept=".pdf,.step,.stp,.dwg,.dxf,application/pdf"
                    className="hidden"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs leading-5 text-slate-500 max-w-lg">
                  {t.rfqForm.privacy}
                </p>

                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#178ff0] px-7 py-4 font-black text-white shadow-lg transition hover:bg-[#2aa5ff]"
                >
                  {t.rfqForm.submit}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#020b18] text-white border-t border-white/10">
        <div className="mx-auto grid max-w-[1500px] md:grid-cols-2 xl:grid-cols-[1fr_1fr_1.1fr_1.45fr_auto]">
          <ContactItem icon={<Phone className="h-7 w-7" />} title="+52 656 360 3600" subtitle={t.contact.commercial1} href="tel:+526563603600" />
          <ContactItem icon={<Phone className="h-7 w-7" />} title="+52 656 329 0226" subtitle={t.contact.commercial2} href="tel:+526563290226" />
          <ContactItem icon={<Mail className="h-7 w-7" />} title="semmuli@outlook.es" subtitle={t.contact.rfq} href="mailto:semmuli@outlook.es" />
          <ContactItem icon={<MapPin className="h-7 w-7" />} title={t.contact.location} subtitle={t.contact.shipping} />
          <div className="flex items-center justify-center p-5">
            <a href="mailto:semmuli@outlook.es?subject=RFQ%20-%20SEMMULI%20Precision" className="inline-flex whitespace-nowrap items-center gap-3 rounded-xl bg-[#178ff0] hover:bg-[#2aa5ff] px-6 py-4 font-black transition">
              {t.contact.quote}<ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black px-5 py-5 text-center text-xs text-slate-500">
        SEMMULI PRECISION · A MECHANOVA COMPANY · CIUDAD JUÁREZ, CHIHUAHUA, MEXICO
      </footer>

      <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-xl transition hover:scale-110 hover:bg-emerald-400">
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* PORTFOLIO MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-sky-400/20 bg-[#041325] text-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/70 text-white hover:bg-black">
              <X className="h-5 w-5" />
            </button>
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[360px] lg:min-h-[520px]">
                <Image src={selectedProject.image} alt="" fill className="object-cover" />
              </div>
              <div className="p-7 md:p-10">
                <div className="text-xs font-black tracking-[0.16em] text-[#38aaff]">{language === "en" ? selectedProject.processEn : selectedProject.processEs}</div>
                <h3 className="mt-3 text-3xl font-black">{language === "en" ? selectedProject.titleEn : selectedProject.titleEs}</h3>
                <div className="mt-6 grid gap-4 text-sm">
                  <div><span className="text-slate-400">{t.portfolio.process}: </span><span className="font-bold">{language === "en" ? selectedProject.processEn : selectedProject.processEs}</span></div>
                  <div><span className="text-slate-400">{t.portfolio.material}: </span><span className="font-bold">{selectedProject.material}</span></div>
                </div>
                <p className="mt-6 leading-7 text-slate-300">{language === "en" ? selectedProject.descriptionEn : selectedProject.descriptionEs}</p>
                <a href="#contact" onClick={() => setSelectedProject(null)} className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#178ff0] px-6 py-4 font-black hover:bg-[#2aa5ff]">
                  {t.contact.quote}<ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionHeading({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-black tracking-[0.16em] text-[#0878d7]">{label}</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
      <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 max-w-3xl leading-7 text-slate-600">{subtitle}</p>}
    </div>
  );
}


function FormField({
  icon,
  label,
  name,
  type = "text",
  required = false,
}: {
  icon: React.ReactNode;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-black text-slate-800">
        {label}
        {required && <span className="ml-1 text-sky-600">*</span>}
      </label>
      <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 transition focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-500/10">
        <span className="text-slate-400">{icon}</span>
        <input
          type={type}
          name={name}
          required={required}
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
      </div>
    </div>
  );
}

function ContactItem({ icon, title, subtitle, href }: { icon: React.ReactNode; title: string; subtitle: string; href?: string }) {
  const body = (
    <div className="flex items-center gap-4">
      <div>{icon}</div>
      <div><div className="font-bold">{title}</div><div className="mt-1 text-sm text-slate-400">{subtitle}</div></div>
    </div>
  );
  return href
    ? <a href={href} className="border-b md:border-r border-white/10 p-5 hover:bg-white/[0.04] transition">{body}</a>
    : <div className="border-b md:border-r border-white/10 p-5">{body}</div>;
}
