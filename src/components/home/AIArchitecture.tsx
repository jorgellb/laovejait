import { PipelineDiagram } from "@/components/graphics/PipelineDiagram";
import { NeuralMesh } from "@/components/graphics/overlays";
import { SectionFrame } from "@/components/graphics/SectionFrame";
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
    <SectionFrame
      id="inteligencia-artificial"
      tone="violet"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="IA EMPRESARIAL"
          title="La IA debe trabajar con el conocimiento de tu empresa."
          description="Un modelo genérico no conoce tus tarifas, tus procedimientos ni tus excepciones. El valor está en conectar el lenguaje con los archivos y sistemas que ya usáis."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {blocks.map((block) => (
            <TechPanel key={block.title} className="relative overflow-hidden">
              <span className="pointer-events-none absolute -right-4 -bottom-6 h-24 w-36 text-cyan/15">
                <NeuralMesh />
              </span>
              <p className="tech-label">{block.title}</p>
              <p className="relative mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {block.body}
              </p>
            </TechPanel>
          ))}
        </div>
        <div className="mt-12">
          <p className="tech-label mb-4">FLUJO</p>
          <PipelineDiagram />
        </div>
      </div>
    </SectionFrame>
  );
}
