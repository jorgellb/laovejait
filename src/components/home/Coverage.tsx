import { CoverageLegend, CoverageMap } from "@/components/graphics/CoverageMap";
import { RadarPulse } from "@/components/graphics/overlays";
import { SectionFrame } from "@/components/graphics/SectionFrame";
import { CyberButton } from "@/components/ui/CyberButton";
import { MunicipalityLink } from "@/components/ui/MunicipalityLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechPanel } from "@/components/ui/GlowBorder";
import { municipalities } from "@/data/municipalities";

export function Coverage() {
  return (
    <SectionFrame id="cobertura" tone="cyan" className="scroll-mt-28" channel="07">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="COBERTURA"
          title="Servicio informático en todo el Levante Almeriense"
          description="Atendemos empresas de Vera, Mojácar, Garrucha, Huércal-Overa, Cuevas del Almanzora, Pulpí, Carboneras, Antas, Turre, Bédar, Lubrín y Los Gallardos. El soporte remoto cubre el día a día; las visitas se programan cuando hay que tocar rack, cableado o equipos en sede."
        />
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)]">
          <TechPanel className="overflow-visible p-3 sm:p-4 lg:-mr-2">
            <CoverageMap />
          </TechPanel>
          <div className="flex flex-col gap-5">
            <TechPanel>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="tech-label">RED TERRITORIAL</p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    Presencia local en la comarca, no un call center lejano.
                  </h3>
                </div>
                <span className="size-16 shrink-0 text-cyan/70">
                  <RadarPulse />
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Cada nodo del mapa es una landing local. Elige tu municipio para
                ver el enfoque de Vera, un hotel de Mojácar o una nave de Pulpí:
                no es el mismo proyecto.
              </p>
              <div className="mt-4">
                <CoverageLegend />
              </div>
              <div className="mt-6">
                <CyberButton href="/contacto">
                  Diagnosticar mi sede
                </CyberButton>
              </div>
            </TechPanel>
            <p className="hidden font-mono text-[0.62rem] tracking-[0.16em] text-muted sm:block">
              Landings municipales
            </p>
            <div className="flex flex-wrap gap-2" aria-label="Municipios de cobertura">
              {municipalities.map((item) => (
                <MunicipalityLink
                  key={item.slug}
                  slug={item.slug}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
