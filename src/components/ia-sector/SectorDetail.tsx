import Link from "next/link";
import { FAQ } from "@/components/home/FAQ";
import { SectorBlueprintFigure } from "@/components/ia-sector/SectorBlueprintFigure";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CyberButton } from "@/components/ui/CyberButton";
import { TechPanel } from "@/components/ui/GlowBorder";
import { technicianHref } from "@/config/company";
import {
  getRelatedSectors,
  iaContactHref,
  iaSectorPath,
  type IaSector,
} from "@/data/ia-sectors";
import { iaSectorGraph } from "@/lib/schema";

export function SectorDetail({ sector }: { sector: IaSector }) {
  const related = getRelatedSectors(sector);
  const contact = iaContactHref({
    sector: sector.slug,
    cta: "sector-hero",
    source: iaSectorPath(sector.slug),
  });
  const finalContact = iaContactHref({
    sector: sector.slug,
    cta: "sector-final",
    source: iaSectorPath(sector.slug),
  });

  return (
    <>
      <JsonLd data={iaSectorGraph(sector)} />
      <article className="border-b border-border px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Inteligencia Artificial", href: "/#ia" },
              { name: "IA por sector", href: "/ia-por-sector" },
              { name: sector.name },
            ]}
          />
          <p className="tech-label mt-8">
            MODELO SECTORIAL {"// "}
            {String(sector.hubOrder).padStart(2, "0")}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {sector.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted">{sector.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CyberButton href={contact}>
              Analizar un proceso de mi empresa
            </CyberButton>
            <CyberButton href="#esquema" variant="secondary">
              Ver esquema completo
            </CyberButton>
          </div>
        </div>
      </article>

      <section
        id="esquema"
        className="scroll-mt-28 border-b border-border px-4 py-12 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <SectorBlueprintFigure sector={sector} priority />
        </div>
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <TechPanel>
            <p className="tech-label">EL PROBLEMA</p>
            <h2 className="mt-3 text-2xl font-semibold">
              Dónde suele perder tiempo este tipo de empresa.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {sector.problem}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              {sector.problemItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 bg-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </TechPanel>
          <div className="grid gap-6">
            <TechPanel>
              <p className="tech-label">DATOS QUE YA EXISTEN</p>
              <h2 className="mt-3 text-2xl font-semibold">Fuentes reales del proceso</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {sector.dataSources.map((item) => (
                  <li
                    key={item}
                    className="border border-border px-2 py-1 font-mono text-[0.62rem] tracking-[0.12em] text-muted uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </TechPanel>
            <TechPanel>
              <p className="tech-label">INTEGRACIONES</p>
              <h2 className="mt-3 text-2xl font-semibold">
                Categorías de sistema, no marcas no verificadas
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {sector.systems.map((item) => (
                  <li
                    key={item}
                    className="border border-border px-2 py-1 font-mono text-[0.62rem] tracking-[0.12em] text-muted uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </TechPanel>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="tech-label">CAPA DE IA</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Qué puede interpretar, proponer o automatizar
          </h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {sector.aiLayer.map((item, index) => (
              <li key={item} className="border border-border bg-background-panel/70 px-4 py-4">
                <p className="font-mono text-[0.58rem] tracking-[0.16em] text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm text-muted sm:text-base">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="tech-label">WORKFLOW</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Del dato a la acción medida
          </h2>
          <ol className="mt-8 grid gap-3 md:grid-cols-2 lg:flex lg:flex-wrap">
            {sector.workflow.map((step, index) => (
              <li
                key={step}
                className="flex min-w-[9rem] flex-1 items-center gap-3 border border-border bg-background-panel/70 px-4 py-3"
              >
                <span className="font-mono text-[0.62rem] text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="tech-label">SOLUCIONES</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Módulos sobre el proceso real
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sector.solutions.map((item, index) => (
              <li key={item.title} className="border border-border bg-background-panel/80 p-5">
                <p className="font-mono text-[0.62rem] tracking-[0.16em] text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <TechPanel>
            <p className="tech-label">PUEDE AUTOMATIZARSE</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {sector.automatable.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 bg-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </TechPanel>
          <TechPanel>
            <p className="tech-label">REQUIERE CONFIRMACIÓN</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {sector.needsConfirmation.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 bg-violet" />
                  {item}
                </li>
              ))}
            </ul>
          </TechPanel>
          <TechPanel>
            <p className="tech-label">HUMAN IN THE LOOP</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {sector.humanControl.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </TechPanel>
        </div>
        {sector.riskNotes.length > 0 ? (
          <div className="mx-auto mt-6 max-w-7xl border border-border px-4 py-4 text-sm text-muted">
            {sector.riskNotes.map((note) => (
              <p key={note} className="mt-2 first:mt-0">
                {note}
              </p>
            ))}
          </div>
        ) : null}
        <p className="mx-auto mt-6 max-w-7xl text-sm text-muted">
          La arquitectura se diseña teniendo en cuenta control de acceso,
          permisos, registro de uso, separación de datos y aprobación humana.
          No afirmamos certificaciones genéricas ni un nivel de seguridad
          absoluto.
        </p>
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div>
            <p className="tech-label">QUÉ MEDIRÍAMOS</p>
            <h2 className="mt-3 text-2xl font-semibold">
              Indicadores posibles, no resultados inventados
            </h2>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {sector.kpis.map((item) => (
                <li key={item} className="border border-border px-4 py-3 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="tech-label">CÓMO EMPEZARÍAMOS</p>
            <h2 className="mt-3 text-2xl font-semibold">Un piloto acotado</h2>
            <ol className="mt-6 space-y-3">
              {sector.startNotes.map((item, index) => (
                <li key={item} className="flex gap-3 text-sm text-muted sm:text-base">
                  <span className="font-mono text-[0.62rem] text-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FAQ
        items={sector.faqs}
        eyebrow={`FAQ · ${sector.shortName.toUpperCase()}`}
        title="Preguntas sobre este modelo"
      />

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="tech-label">MODELOS RELACIONADOS</p>
          <h2 className="mt-3 text-2xl font-semibold">Otros procesos cercanos</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={iaSectorPath(item.slug)}
                  scroll
                  className="sector-card flex h-full flex-col border border-border bg-background-panel/80 p-5"
                >
                  <p className="font-mono text-[0.62rem] tracking-[0.16em] text-cyan">
                    {String(item.hubOrder).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
                  <p className="mt-3 text-sm text-muted">{item.hubPhrase}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl border border-border bg-background-panel/70 px-5 py-10 sm:px-8">
          <p className="tech-label">SIGUIENTE PASO</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            No empieces por la IA. Empieza por un proceso.
          </h2>
          <p className="mt-5 max-w-3xl text-muted">
            Cuéntanos qué tarea consume tiempo, dónde se producen errores o qué
            información cuesta encontrar. Revisaremos el proceso, los datos
            disponibles y los sistemas implicados antes de proponer una arquitectura.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CyberButton href={finalContact}>Analizar este proceso</CyberButton>
            <CyberButton href={technicianHref()} variant="secondary">
              Hablar con un técnico
            </CyberButton>
          </div>
        </div>
      </section>
    </>
  );
}
