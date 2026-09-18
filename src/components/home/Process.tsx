import { SectionFrame } from "@/components/graphics/SectionFrame";
import {
  DiagramFigure,
  ProcessCycle,
  VerticalSteps,
} from "@/components/graphics/system-diagrams";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    index: "01",
    code: "SCAN",
    title: "ANALIZAMOS",
    body: "Infraestructura, procesos, riesgos y objetivos. Inventario de lo que hay, no un catálogo de lo que se podría vender.",
  },
  {
    index: "02",
    code: "ARCHITECT",
    title: "DISEÑAMOS",
    body: "Arquitectura adecuada al negocio: local, híbrida o nube controlada, con límites claros de datos y de alcance.",
  },
  {
    index: "03",
    code: "DEPLOY",
    title: "DESPLEGAMOS",
    body: "Infraestructura, automatización o solución de IA. Documentamos lo instalado para que no dependa de memoria oral.",
  },
  {
    index: "04",
    code: "MONITOR",
    title: "MONITORIZAMOS",
    body: "Seguimiento y mantenimiento. La incidencia se atiende; el patrón se corrige.",
  },
  {
    index: "05",
    code: "IMPROVE",
    title: "MEJORAMOS",
    body: "Ajustes a partir de lo medido. Improve vuelve a Scan: es un ciclo, no un embudo.",
  },
];

export function Process() {
  return (
    <SectionFrame channel="09">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="PROCESO"
          title="Un pipeline técnico, no un embudo de ventas."
        />
        <div className="mt-10">
          <DiagramFigure
            title="SCAN → IMPROVE → SCAN"
            caption="La salida de Improve alimenta de nuevo el análisis. No hay etapa final de «cerrar la venta»."
          >
            <ProcessCycle />
            <VerticalSteps
              className="mt-4 md:hidden"
              items={steps.map((step) => `${step.code} — ${step.title}`)}
            />
          </DiagramFigure>
        </div>
        <ol className="mt-8 grid gap-4 md:grid-cols-5">
          {steps.map((step) => (
            <li key={step.index} className="border border-border bg-background-panel/90 p-4">
              <p className="font-mono text-sm tracking-[0.2em] text-cyan">
                {step.index} {"//"} {step.code}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </SectionFrame>
  );
}
