import { SectionFrame } from "@/components/graphics/SectionFrame";
import { ServiceScene } from "@/components/graphics/ServiceScenes";
import { ServiceCard } from "@/components/home/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mainServices } from "@/data/services";

const spans: Record<string, string> = {
  "inteligencia-artificial": "md:col-span-4 md:row-span-2",
  infraestructura: "md:col-span-2",
  ciberseguridad: "md:col-span-2",
  redes: "md:col-span-3",
  soporte: "md:col-span-3",
};

const specs: Record<string, string> = {
  "inteligencia-artificial": "RAG · LLM · AGENTES",
  infraestructura: "WIN · LINUX · NAS",
  ciberseguridad: "FW · MFA · BACKUP",
  redes: "VLAN · WIFI · TPV",
  soporte: "REMOTO + LOCAL",
};

const statuses: Record<string, string | undefined> = {
  "inteligencia-artificial": "AI_PIPELINE",
};

export function ServiceGrid() {
  return (
    <SectionFrame id="servicios" className="scroll-mt-28" channel="03">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="SERVICIOS"
          title="Infraestructura sólida. Inteligencia aplicada."
          description="La tecnología de una PYME debe reducir incidencias, proteger los datos y automatizar trabajo repetido. No añadir otra capa de complejidad que nadie administra."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {mainServices.map((service) => (
            <div
              key={service.id}
              id={service.id === "inteligencia-artificial" ? undefined : service.id}
              className={`scroll-mt-28 ${spans[service.id]}`}
            >
              <ServiceCard
                index={service.index}
                title={service.title}
                description={service.description}
                features={service.features}
                spec={specs[service.id]}
                status={statuses[service.id]}
                scene={<ServiceScene id={service.id} />}
                className="min-h-full"
              />
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted">
          No todos los proyectos de IA requieren ejecutar un modelo completamente
          en local. La arquitectura se elige según privacidad, coste, rendimiento
          y las necesidades reales del negocio.
        </p>
      </div>
    </SectionFrame>
  );
}
