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

function ServiceMark({ id }: { id: string }) {
  return (
    <span
      aria-hidden="true"
      className="service-icon grid size-5 grid-cols-2 gap-px"
      data-mark={id}
    >
      <span className="bg-cyan" />
      <span className="border border-cyan" />
      <span className="border border-current opacity-70" />
      <span className="bg-current opacity-80" />
    </span>
  );
}

export function ServiceGrid() {
  return (
    <section
      id="servicios"
      className="scroll-mt-24 border-b border-border px-4 py-20 sm:px-6"
    >
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
              id={service.id}
              className={`scroll-mt-24 ${spans[service.id]}`}
            >
              <ServiceCard
                index={service.index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={<ServiceMark id={service.id} />}
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
    </section>
  );
}
