import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    index: "01",
    title: "ANALIZAMOS",
    body: "Infraestructura, procesos, riesgos y objetivos. Inventario de lo que hay, no un catálogo de lo que se podría vender.",
  },
  {
    index: "02",
    title: "DISEÑAMOS",
    body: "Arquitectura técnica adecuada al negocio: local, híbrida o en nube controlada, con límites claros de datos y de alcance.",
  },
  {
    index: "03",
    title: "DESPLEGAMOS",
    body: "Infraestructura, automatización o solución de IA. Documentamos lo instalado para que no dependa de memoria oral.",
  },
  {
    index: "04",
    title: "MONITORIZAMOS",
    body: "Seguimiento, mantenimiento y mejora. La incidencia se atiende; el patrón se corrige para que no vuelva cada mes.",
  },
];

export function Process() {
  return (
    <section className="border-b border-border px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="PROCESO"
          title="Un pipeline técnico, no un embudo de ventas."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.index}
              className="relative border border-border bg-background-panel p-5"
            >
              <p className="font-mono text-sm tracking-[0.2em] text-cyan">
                {step.index}
                {" // "}
                {step.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
              {index < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-7 -right-2 hidden h-px w-4 bg-cyan/40 md:block"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
