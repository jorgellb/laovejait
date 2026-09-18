import type { Metadata } from "next";
import { KnowledgePipeline } from "@/components/graphics/KnowledgePipeline";
import {
  AgentFlowDesktop,
  DiagramFigure,
  HumanLoop,
  RagMini,
  VerticalSteps,
} from "@/components/graphics/system-diagrams";
import {
  CopyBlock,
  PageFaqs,
  PageHero,
  RelatedSystems,
  SplitSection,
} from "@/components/pages/PageChrome";
import { CyberButton } from "@/components/ui/CyberButton";
import { TechPanel } from "@/components/ui/GlowBorder";
import { iaFaqs } from "@/data/faqs";
import { contactHref } from "@/data/site-nav";
import { documentMetadata } from "@/lib/metadata";
import { servicePageGraph } from "@/lib/schema";

const path = "/inteligencia-artificial";

export const metadata: Metadata = documentMetadata(
  path,
  "Inteligencia Artificial para Empresas | RAG y Agentes IA | La Oveja",
  "Sistemas de IA conectados a documentos, ERP y procesos reales: RAG empresarial, asistentes internos, agentes con aprobación humana e integraciones.",
  { absolute: true },
);

const loopLevels = [
  {
    index: "01",
    title: "ADVISE",
    body: "La IA recomienda. Una persona decide. Útil cuando el coste de un error es alto y el proceso aún no está cerrado.",
  },
  {
    index: "02",
    title: "PREPARE",
    body: "La IA prepara la acción: extrae campos, redacta el borrador, rellena el asiento. Alguien valida antes de escribir.",
  },
  {
    index: "03",
    title: "EXECUTE",
    body: "La IA ejecuta solo dentro de permisos definidos: clasificar, etiquetar, mover a carpeta, crear un ticket. Nunca «todo el ERP».",
  },
];

export default function InteligenciaArtificialPage() {
  const contact = contactHref({
    servicio: "ia",
    cta: "ia-hero",
    origen: path,
  });
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Inteligencia Artificial" },
        ]}
        eyebrow="IA CONECTADA AL PROCESO"
        title="Inteligencia artificial conectada a tu empresa."
        lead="No añadimos un chatbot encima de procesos rotos. Diseñamos sistemas capaces de consultar información, asistir a personas y ejecutar tareas dentro de límites controlados."
        primaryHref={contact}
        secondaryHref="#pipeline"
        secondaryLabel="Ver pipeline"
        id="pipeline"
        diagram={
          <DiagramFigure
            title="AI KNOWLEDGE PIPELINE"
            caption="Las fuentes existentes se ingieren, se indexan y se consultan. La acción, si existe, pasa por un umbral de aprobación."
          >
            <KnowledgePipeline />
          </DiagramFigure>
        }
      />

      <CopyBlock
        index="01"
        id="problema"
        title="Qué problema resuelve"
      >
        <p>
          El cuello de botella no suele ser «faltaba un modelo». Suele ser que
          las tarifas están en un PDF, el procedimiento en la cabeza de una
          persona y el ERP no se consulta sin cinco clics. La IA sirve cuando
          acorta esa distancia: recuperar contexto, clasificar lo repetido y
          preparar una acción que alguien ya hacía a mano.
        </p>
        <p>
          No sustituye infraestructura. Si los datos están desordenados, las
          copias no funcionan o nadie sabe quién puede acceder a qué, el modelo
          solo acelera el error.
        </p>
      </CopyBlock>

      <SplitSection
        index="02"
        id="rag"
        title="Que la IA pueda consultar conocimiento real."
        body={
          <>
            <p>
              Un RAG recupera fragmentos de vuestra base —manuales, tarifas,
              catálogos, contratos, procedimientos, fichas técnicas, facturas—
              y los entrega al modelo como contexto. La respuesta se puede citar.
              Si la fuente no está, el sistema no debería inventar.
            </p>
            <p>
              Tiene sentido cuando hay volumen documental y consultas repetidas.
              No lo tiene si el conocimiento vive solo en WhatsApp o si los
              permisos del file server están abiertos a toda la empresa.
            </p>
            <p>
              Las fuentes se actualizan; el índice también. Un procedimiento de
              2019 no debería seguir respondiendo en 2026.
            </p>
          </>
        }
        visual={
          <DiagramFigure
            title="QUERY → SOURCES"
            caption="Pregunta, recuperación, contexto y respuesta con fuentes. Sin recuperación no hay RAG: hay un chat genérico."
          >
            <RagMini />
          </DiagramFigure>
        }
      />

      <CopyBlock index="03" title="Asistentes internos">
        <p>
          Un asistente interno responde a quien ya trabaja en la empresa:
          recepción, calidad, administración, almacén. Consulta lo que esa
          persona podría ver. No es un canal público ni un sustituto de
          formación: es un índice hablable con límites de rol.
        </p>
      </CopyBlock>

      <section id="agentes" className="scroll-mt-28 border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm tracking-[0.2em] text-cyan">04</p>
          <h2 className="mt-3 text-3xl font-semibold">No solo responder. También ejecutar.</h2>
          <p className="mt-6 max-w-3xl text-muted">
            Un agente clasifica un correo, extrae datos, consulta el ERP y
            propone el siguiente paso. La escritura en el sistema espera a una
            persona, salvo las acciones que hayáis autorizado de forma explícita.
          </p>
          <div className="mt-8">
            <AgentFlowDesktop />
            <VerticalSteps
              className="mt-4 lg:hidden"
              items={[
                "Entra un email",
                "Clasifica",
                "Extrae datos",
                "Consulta ERP",
                "Propone acción",
                "Persona aprueba",
                "ERP actualizado",
                "Respuesta",
              ]}
            />
          </div>
        </div>
      </section>

      <CopyBlock index="05" id="automatizacion" title="Automatización documental">
        <p>
          Facturas, albaranes, pedidos y partes se clasifican y se extraen hacia
          carpetas o campos de gestión. El valor no es «IA de documentos»: es
          dejar de teclear lo que el papel ya contiene, con revisión cuando el
          campo es sensible.
        </p>
      </CopyBlock>

      <CopyBlock index="06" id="integraciones" title="Integraciones">
        <p>
          ERP, CRM, correo, SQL y APIs internas son las herramientas del
          agente. Si el sistema no tiene API, se documenta el límite: no
          prometemos un conector que no existe. La IA entra en el proceso
          actual; no pide un universo paralelo.
        </p>
      </CopyBlock>

      <CopyBlock index="07" title="LLMs privados, híbridos o cloud">
        <p>
          El modelo se elige después de saber qué datos pueden salir de la
          organización. Local o entorno controlado cuando el contenido no debe
          viajar; cloud cuando el riesgo y el contrato lo permiten. Coste y
          latencia entran en la misma conversación que la privacidad.
        </p>
      </CopyBlock>

      <section id="hitl" className="scroll-mt-28 border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm tracking-[0.2em] text-cyan">08</p>
          <h2 className="mt-3 text-3xl font-semibold">Human in the loop</h2>
          <p className="mt-6 max-w-3xl text-muted">
            El umbral de aprobación es parte de la arquitectura, no un texto
            legal al final. Tres niveles, de menos a más autonomía:
          </p>
          <div className="mt-8">
            <HumanLoop />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {loopLevels.map((item) => (
              <TechPanel key={item.index}>
                <p className="font-mono text-sm tracking-[0.2em] text-cyan">
                  {item.index} {"//"} {item.title}
                </p>
                <p className="mt-4 text-sm text-muted">{item.body}</p>
              </TechPanel>
            ))}
          </div>
        </div>
      </section>

      <CopyBlock index="09" title="Seguridad">
        <p>
          Permisos del índice = permisos de origen. Un comercial no recupera
          nóminas porque el chat sea «interno». MFA, registro de consultas y
          separación de entornos forman parte del diseño, igual que en el resto
          de la infraestructura.
        </p>
      </CopyBlock>

      <CopyBlock index="10" title="Evaluación">
        <p>
          Medimos si el proceso concreto mejora: tiempo de búsqueda, errores de
          extracción, acciones aprobadas frente a rechazadas, fuentes citadas.
          Sin esa línea base, no hay implantación: hay una demo permanente.
        </p>
      </CopyBlock>

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm tracking-[0.2em] text-cyan">11</p>
          <h2 className="mt-3 text-3xl font-semibold">IA por sector</h2>
          <p className="mt-6 max-w-3xl text-muted">
            Un agente de nave industrial no trabaja con los mismos datos ni toma
            las mismas acciones que uno de clínica, comercializadora eléctrica o
            empresa agrícola. Los catorce modelos están en el hub sectorial.
          </p>
          <div className="mt-8">
            <CyberButton href="/ia-por-sector">Explorar IA por sector</CyberButton>
          </div>
        </div>
      </section>

      <CopyBlock index="12" title="Proceso de implantación">
        <p>
          Inventario de fuentes y sistemas. Un proceso piloto con entrada,
          salida y responsable. Índice, permisos y umbral de aprobación.
          Medición. Solo entonces se ensancha el alcance. SCAN → ARCHITECT →
          DEPLOY → MONITOR → IMPROVE.
        </p>
      </CopyBlock>

      <RelatedSystems path={path} />
      <PageFaqs
        items={iaFaqs}
        jsonLd={servicePageGraph({
          path,
          name: "Inteligencia artificial para empresas",
          description:
            "RAG, agentes, automatización documental e integraciones con aprobación humana.",
          crumbs: [
            { name: "Inicio", path: "/" },
            { name: "Inteligencia Artificial", path },
          ],
          faqs: iaFaqs,
        })}
        defaultService="Proyecto de IA"
        origen={path}
        cta="ia-final"
      />
    </>
  );
}
