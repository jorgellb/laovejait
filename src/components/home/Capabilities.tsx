import Link from "next/link";
import { SectionFrame } from "@/components/graphics/SectionFrame";
import { CyberButton } from "@/components/ui/CyberButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactHref } from "@/data/site-nav";

const areas = [
  {
    index: "01",
    title: "INTELIGENCIA ARTIFICIAL",
    href: "/inteligencia-artificial",
    body: "Consultar conocimiento propio, asistir a personas y ejecutar tareas con límites. El modelo entra cuando hay fuentes, permisos y un proceso medible.",
    items: ["RAG sobre documentación interna", "Agentes con aprobación humana", "Integración con ERP, correo y APIs"],
  },
  {
    index: "02",
    title: "INFRAESTRUCTURA",
    href: "/infraestructura-ti",
    body: "Servidores, almacenamiento e identidad para que la oficina no dependa de un equipo sin copias ni inventario.",
    items: ["Windows Server y Linux", "Virtualización y NAS", "Monitorización y migraciones"],
  },
  {
    index: "03",
    title: "CIBERSEGURIDAD",
    href: "/ciberseguridad",
    body: "Menos superficie de ataque y mejor recuperación. Capas visibles: identidad, perímetro, puesto, datos y backup probado.",
    items: ["MFA y control de acceso", "Firewall y endpoint", "Copias recuperables"],
  },
  {
    index: "04",
    title: "REDES",
    href: "/redes-wifi-tpv",
    body: "Separamos oficina, invitados, TPV e IoT. La cobertura se diseña alrededor del uso: hotel, restaurante, nave o comercio.",
    items: ["Wi-Fi profesional", "VLAN y guest", "Cableado y TPV"],
  },
  {
    index: "05",
    title: "SOPORTE",
    href: "/soporte-tecnico",
    body: "Diagnóstico de causa raíz en puesto, servidor, red y software. Remoto cuando basta; visita en la comarca cuando hay que tocar la instalación.",
    items: ["Incidencia y documentación", "PCs, servidor y red", "Mantenimiento preventivo"],
  },
];

export function Capabilities() {
  return (
    <SectionFrame id="capacidades" aliasId="servicios" className="scroll-mt-28" channel="02">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="CAPACIDADES"
          title="Una sola infraestructura. Varias capas de capacidad."
          description="Cada área tiene página propia. Aquí solo el diferencial y el siguiente enlace."
        />
        <div className="mt-12 grid gap-0 border border-border">
          {areas.map((area, index) => (
            <article
              key={area.href}
              className="grid gap-6 border-b border-border p-6 last:border-b-0 lg:grid-cols-[7rem_minmax(0,1fr)_minmax(0,16rem)] lg:items-start"
            >
              <p className="font-mono text-sm tracking-[0.2em] text-cyan">
                {area.index}
              </p>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{area.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {area.body}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="border border-border px-2 py-1 font-mono text-[0.58rem] tracking-[0.14em] text-muted uppercase"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <CyberButton href={area.href} variant="secondary">
                  Abrir capa
                </CyberButton>
                {index === 0 ? (
                  <Link
                    href={contactHref({
                      servicio: "ia",
                      cta: "home-capacidad-ia",
                      origen: "/",
                    })}
                    className="text-sm text-cyan hover:underline"
                  >
                    Diagnosticar un proceso
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <CyberButton href="/servicios">Ver el sistema completo</CyberButton>
        </div>
      </div>
    </SectionFrame>
  );
}
