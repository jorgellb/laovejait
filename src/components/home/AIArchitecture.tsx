import { AIDataPipeline } from "@/components/graphics/AIDataPipeline";
import { SectionFrame } from "@/components/graphics/SectionFrame";
import { CyberButton } from "@/components/ui/CyberButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactHref } from "@/data/site-nav";

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
          eyebrow="INTELIGENCIA ARTIFICIAL"
          title="La IA debe trabajar con el conocimiento de tu empresa."
          description="Un modelo genérico no conoce tus tarifas ni tus excepciones. El valor está en consultar fuentes reales, asistir a personas y ejecutar solo dentro de límites."
        />
        <div className="mt-10">
          <AIDataPipeline />
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CyberButton href="/inteligencia-artificial">
            Arquitectura de IA
          </CyberButton>
          <CyberButton
            href={contactHref({ servicio: "ia", cta: "home-ia", origen: "/" })}
            variant="secondary"
          >
            Estudiar un proceso
          </CyberButton>
        </div>
      </div>
    </SectionFrame>
  );
}
