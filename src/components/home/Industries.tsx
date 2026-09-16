import { SectorScene } from "@/components/graphics/ServiceScenes";
import { SectionFrame } from "@/components/graphics/SectionFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechPanel } from "@/components/ui/GlowBorder";

const sectors = [
  {
    title: "Hostelería y turismo",
    places: "Mojácar, Garrucha, Carboneras",
    scene: "tourism" as const,
    body: "Wi-Fi profesional, redes para hoteles, TPV, segmentación de invitados, ciberseguridad de recepción y caja. Cuando hay un canal digital claro, también asistentes sobre información del establecimiento y automatización de consultas repetidas.",
    services: [
      "Wi-Fi y redes de hotel",
      "TPV y segmentación",
      "Asistentes sobre documentación interna",
      "Ciberseguridad de puestos de sala y recepción",
    ],
  },
  {
    title: "Industria, logística y agricultura",
    places: "Vera, Huércal-Overa, Pulpí, Cuevas del Almanzora, Antas",
    scene: "industry" as const,
    body: "Servidores, redes de nave, copias, monitorización y ciberseguridad. Sobre esa base: automatización documental, procesamiento de facturas y albaranes, y consulta de procedimientos con RAG.",
    services: [
      "Servidores y redes de almacén",
      "Backup y recuperación",
      "IA sobre facturas y calidad",
      "Monitorización de infraestructura",
    ],
  },
  {
    title: "Comercio y despachos profesionales",
    places: "Toda la comarca",
    scene: "mixed" as const,
    body: "Puestos de trabajo, redes de oficina, copias, Microsoft 365 u equivalentes cuando corresponda, gestión documental y soporte. La automatización entra cuando hay papeles y correos que hoy se clasifican a mano.",
    services: [
      "Puestos y ofimática",
      "Backup y correo",
      "Gestión documental",
      "Soporte técnico continuo",
    ],
  },
];

export function Industries() {
  return (
    <SectionFrame tone="cyan" channel="06">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="SECTORES"
          title="La misma comarca, problemas distintos."
          description="No tratamos un hotel de Mojácar como un almacén de Pulpí. El diagnóstico parte del negocio, no de un catálogo cerrado."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {sectors.map((sector) => (
            <TechPanel key={sector.title} className="flex h-full flex-col overflow-visible">
              <SectorScene id={sector.scene} />
              <h3 className="text-xl font-semibold">{sector.title}</h3>
              <p className="mt-2 font-mono text-[0.62rem] tracking-[0.16em] text-cyan uppercase">
                {sector.places}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {sector.body}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted">
                {sector.services.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 size-1 shrink-0 bg-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </TechPanel>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
