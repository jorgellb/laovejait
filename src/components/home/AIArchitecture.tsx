import { AIDataPipeline, RagExplain } from "@/components/graphics/AIDataPipeline";
import { NeuralMesh } from "@/components/graphics/overlays";
import { SectionFrame } from "@/components/graphics/SectionFrame";
import { CyberButton } from "@/components/ui/CyberButton";
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
      aliasId="ia"
      tone="violet"
      className="scroll-mt-28"
      channel="04"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="IA EMPRESARIAL"
          title="La IA debe trabajar con el conocimiento de tu empresa."
          description="Un modelo genérico no conoce tus tarifas, tus procedimientos ni tus excepciones. El valor está en conectar el lenguaje con los archivos y sistemas que ya usáis."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-3" aria-label="Lectura empresarial del flujo de IA">
          {[
            { step: "01", title: "DOCUMENTOS", body: "PDFs, correo y procedimientos de la empresa." },
            { step: "02", title: "IA", body: "Consulta, extracción y automatización sobre ese conocimiento." },
            { step: "03", title: "RESPUESTAS", body: "Borradores, clasificación y acciones en ERP, CRM o email." },
          ].map((item) => (
            <div key={item.step} className="border border-border bg-background-panel/80 px-4 py-4">
              <p className="font-mono text-[0.58rem] tracking-[0.16em] text-cyan">
                {item.step} {"//"} {item.title}
              </p>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <AIDataPipeline />
        </div>
        <div className="mt-12 grid items-start gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)]">
          <div className="grid gap-4 md:grid-cols-2">
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
          <TechPanel className="relative overflow-hidden">
            <p className="tech-label mb-3">RAG_LAYER</p>
            <RagExplain />
            <div className="mt-6">
              <CyberButton href="/contacto?motivo=ia">
                Estudiar un proyecto de IA
              </CyberButton>
            </div>
          </TechPanel>
        </div>
        <TechPanel className="mt-8">
          <p className="tech-label">DATA CHANNEL {"//"} IA POR SECTOR</p>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
            La misma tecnología. Procesos completamente distintos.
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            Una empresa industrial, una clínica y una comercializadora eléctrica
            no necesitan la misma arquitectura de IA. Hemos modelado diferentes
            escenarios para mostrar dónde puede intervenir la inteligencia
            artificial, qué información necesita y qué tareas deberían continuar
            bajo supervisión humana.
          </p>
          <div className="mt-6">
            <CyberButton href="/ia-por-sector" variant="secondary">
              Explorar modelos por sector
            </CyberButton>
          </div>
        </TechPanel>
      </div>
    </SectionFrame>
  );
}
