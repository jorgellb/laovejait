import { SectionFrame } from "@/components/graphics/SectionFrame";
import { DefenceDepth } from "@/components/graphics/system-diagrams";
import { CyberButton } from "@/components/ui/CyberButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SecurityTeaser() {
  return (
    <SectionFrame id="ciberseguridad" className="scroll-mt-28" channel="07">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="mx-auto w-full max-w-xs lg:order-2">
          <DefenceDepth />
        </div>
        <div className="lg:order-1">
          <SectionHeading
            eyebrow="SEGURIDAD"
            title="Capas visibles. Recuperación real."
            description="Identidad, perímetro, puesto, datos y copias que se pueden restaurar. El tráfico esperado pasa; lo que no debe, se detiene. El detalle está en la página de ciberseguridad."
          />
          <div className="mt-8">
            <CyberButton href="/ciberseguridad">Abrir ciberseguridad</CyberButton>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
