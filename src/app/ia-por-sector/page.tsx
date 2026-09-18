import Image from "next/image";
import type { Metadata } from "next";
import { SectorHubGrid } from "@/components/ia-sector/SectorHubGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CyberButton } from "@/components/ui/CyberButton";
import {
  conceptualCaption,
  iaContactHref,
  iaEcosystemImage,
} from "@/data/ia-sectors";
import { iaHubGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute:
      "IA para empresas por sector | Automatización e IA aplicada | La Oveja IT",
  },
  description:
    "Modelos de inteligencia artificial aplicados a procesos reales por sector: industria, logística, agricultura, comercio, salud y servicios. Analizamos un proceso antes de proponer arquitectura.",
  alternates: { canonical: "/ia-por-sector" },
  openGraph: {
    title: "IA para empresas por sector | Automatización e IA aplicada | La Oveja IT",
    description:
      "Modelos conceptuales de IA conectada a datos, personas y sistemas empresariales, por sector.",
    url: "/ia-por-sector",
    images: [{ url: iaEcosystemImage.src, width: iaEcosystemImage.width, height: iaEcosystemImage.height }],
  },
};

const pipeline = [
  { title: "DATOS", body: "Información real de la empresa." },
  { title: "IA", body: "Analiza, recupera contexto y genera recomendaciones." },
  { title: "DECISIÓN", body: "La persona o el sistema valida qué hacer." },
  { title: "ACCIÓN", body: "Se ejecuta sobre las herramientas existentes." },
  { title: "RESULTADO", body: "Se mide y se vuelve a mejorar." },
];

const ecosystemLabels = [
  "DOCUMENTOS",
  "DATOS",
  "ERP",
  "CRM",
  "APIs",
  "IA",
  "PERSONAS",
  "AUTOMATIZACIÓN",
];

export default function IaPorSectorPage() {
  return (
    <>
      <JsonLd data={iaHubGraph()} />
      <article className="border-b border-border px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <Breadcrumbs
              items={[
                { name: "Inicio", href: "/" },
                { name: "Inteligencia Artificial", href: "/inteligencia-artificial" },
                { name: "IA por sector" },
              ]}
            />
            <p className="tech-label mt-8">DATA CHANNEL {"//"} IA APLICADA</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              IA aplicada al negocio real.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Cada empresa genera datos, documentos, decisiones y trabajo
              repetitivo de forma diferente. Estos modelos muestran cómo diseñar
              una capa de inteligencia conectada con los sistemas existentes para
              asistir, automatizar y medir procesos reales.
            </p>
            <p className="mt-4 max-w-2xl text-muted">
              No todas las empresas necesitan el mismo agente, el mismo modelo ni
              la misma automatización. El objetivo es reducir trabajo manual,
              mejorar decisiones y construir procesos mantenibles.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CyberButton href="#sectores">Explorar sectores</CyberButton>
              <CyberButton
                href={iaContactHref({
                  cta: "hub-hero",
                  source: "/ia-por-sector",
                })}
                variant="secondary"
              >
                Analizar mi empresa
              </CyberButton>
            </div>
          </div>
          <figure className="border border-border bg-[#050914]">
            <div className="relative p-4">
              <span className="pointer-events-none absolute top-4 left-4 h-3 w-3 border-t border-l border-cyan/70" />
              <span className="pointer-events-none absolute top-4 right-4 h-3 w-3 border-t border-r border-cyan/70" />
              <span className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-violet/50" />
              <span className="pointer-events-none absolute right-4 bottom-4 h-3 w-3 border-r border-b border-violet/50" />
              <Image
                src={iaEcosystemImage.src}
                alt={iaEcosystemImage.alt}
                width={iaEcosystemImage.width}
                height={iaEcosystemImage.height}
                priority
                sizes="(min-width: 1024px) 520px, 100vw"
                className="h-auto w-full object-contain"
              />
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Capas del ecosistema">
                {ecosystemLabels.map((label) => (
                  <li
                    key={label}
                    className="border border-border px-2 py-1 font-mono text-[0.58rem] tracking-[0.14em] text-cyan uppercase"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <figcaption className="border-t border-border px-4 py-3 text-sm text-muted">
              {conceptualCaption}
            </figcaption>
          </figure>
        </div>
      </article>

      <section className="border-b border-border px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <ol className="grid gap-3 md:grid-cols-5">
            {pipeline.map((step, index) => (
              <li key={step.title} className="border border-border bg-background-panel/70 px-4 py-4">
                <p className="font-mono text-[0.58rem] tracking-[0.16em] text-cyan">
                  {String(index + 1).padStart(2, "0")} {"//"} {step.title}
                </p>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="sectores"
        className="scroll-mt-28 px-4 py-16 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <p className="tech-label">SELECTOR</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Elige el proceso que se parece al tuyo.
          </h2>
          <p className="mt-4 max-w-3xl text-muted">
            Cada ficha es un modelo conceptual. No son casos de cliente ni
            resultados medidos. Sirven para ver dónde podría entrar la IA y dónde
            debe seguir decidiendo una persona.
          </p>
          <div className="mt-10">
            <SectorHubGrid />
          </div>
        </div>
      </section>
    </>
  );
}
