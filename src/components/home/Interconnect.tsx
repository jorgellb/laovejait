import { SectionFrame } from "@/components/graphics/SectionFrame";
import {
  DiagramFigure,
  SystemStack,
  VerticalSteps,
} from "@/components/graphics/system-diagrams";
import { CyberButton } from "@/components/ui/CyberButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stack = [
  "Hardware",
  "Red",
  "Identidad",
  "Almacenamiento",
  "Datos",
  "Seguridad",
  "IA",
  "Automatización",
];

export function Interconnect() {
  return (
    <SectionFrame
      id="infraestructura"
      tone="cyan"
      className="scroll-mt-28"
      channel="03"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div>
          <SectionHeading
            eyebrow="INFRAESTRUCTURA + IA"
            title="La IA empieza mucho antes del modelo."
            description="Si los datos están desordenados, las copias no funcionan, la red falla o nadie sabe quién puede acceder a qué, añadir un modelo de lenguaje no arregla el problema."
          />
          <p className="mt-6 max-w-xl text-muted">
            Construimos desde la base. Cada capa de la pila tiene página
            propia; aquí se ve por qué van juntas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CyberButton href="/infraestructura-ti">Infraestructura TI</CyberButton>
            <CyberButton href="/inteligencia-artificial" variant="secondary">
              Capa de IA
            </CyberButton>
          </div>
        </div>
        <DiagramFigure
          title="STACK SECTION"
          caption="Hardware, red, identidad, almacenamiento, datos y seguridad sostienen la IA y la automatización. No es una ilustración comercial: es el orden de trabajo."
        >
          <div className="hidden sm:block">
            <SystemStack />
          </div>
          <VerticalSteps className="sm:hidden" items={stack} />
        </DiagramFigure>
      </div>
    </SectionFrame>
  );
}
