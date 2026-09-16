import { DataFlow } from "@/components/ui/DataFlow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechPanel } from "@/components/ui/GlowBorder";

const blocks = [
  {
    title: "LLM PRIVADO",
    body: "Modelos utilizados dentro de una arquitectura diseñada según las necesidades de privacidad y control de la empresa. Local, híbrido o en entorno controlado: se decide con datos encima de la mesa.",
  },
  {
    title: "RAG EMPRESARIAL",
    body: "Consulta información procedente de PDFs, procedimientos, manuales, facturas, catálogos, bases documentales y documentación interna, con control de quién puede preguntar qué.",
  },
  {
    title: "AGENTES DE IA",
    body: "Automatización de clasificación documental, extracción de información, gestión inicial de consultas, generación de borradores, análisis y flujos administrativos.",
  },
  {
    title: "INTEGRACIONES",
    body: "Conexión con ERP, CRM, correo, bases de datos, APIs y aplicaciones internas. La IA entra en el proceso existente; no pide un universo paralelo.",
  },
];

export function AIArchitecture() {
  return (
    <section
      id="inteligencia-artificial"
      className="scroll-mt-24 border-b border-border px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="IA EMPRESARIAL"
          title="La IA debe trabajar con el conocimiento de tu empresa."
          description="Un modelo genérico no conoce tus tarifas, tus procedimientos ni tus excepciones. El valor está en conectar el lenguaje con los archivos y sistemas que ya usáis."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {blocks.map((block) => (
            <TechPanel key={block.title}>
              <p className="tech-label">{block.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {block.body}
              </p>
            </TechPanel>
          ))}
        </div>
        <div className="mt-12">
          <p className="tech-label mb-4">FLUJO</p>
          <DataFlow />
        </div>
      </div>
    </section>
  );
}
