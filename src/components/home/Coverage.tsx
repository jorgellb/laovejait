import { MunicipalityLink } from "@/components/ui/MunicipalityLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { municipalities } from "@/data/municipalities";

export function Coverage() {
  return (
    <section
      id="cobertura"
      className="scroll-mt-24 border-b border-border px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="COBERTURA"
          title="Servicio informático en todo el Levante Almeriense"
          description="Atendemos empresas de Vera, Mojácar, Garrucha, Huércal-Overa, Cuevas del Almanzora, Pulpí, Carboneras, Antas, Turre, Bédar, Lubrín y Los Gallardos. El soporte remoto cubre el día a día; las visitas se programan cuando hay que tocar rack, cableado o equipos en sede."
        />
        <div className="mt-10 flex flex-wrap gap-2">
          {municipalities.map((item) => (
            <MunicipalityLink
              key={item.slug}
              slug={item.slug}
              name={`Servicios informáticos en ${item.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
