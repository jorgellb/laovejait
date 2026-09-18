import type { Metadata } from "next";
import Link from "next/link";
import {
  DiagramFigure,
  ServiceMatrix,
  ServiceMatrixMobile,
} from "@/components/graphics/system-diagrams";
import {
  CopyBlock,
  PageFaqs,
  PageHero,
  RelatedSystems,
} from "@/components/pages/PageChrome";
import { CyberButton } from "@/components/ui/CyberButton";
import { TechPanel } from "@/components/ui/GlowBorder";
import { serviciosFaqs } from "@/data/faqs";
import { mainServices } from "@/data/services";
import { contactHref } from "@/data/site-nav";
import { documentMetadata } from "@/lib/metadata";
import { servicePageGraph } from "@/lib/schema";

const path = "/servicios";

export const metadata: Metadata = documentMetadata(
  path,
  "Servicios tecnológicos para empresas | La Oveja",
  "Infraestructura, seguridad, conectividad, soporte e inteligencia artificial gestionados como partes de un mismo sistema en el Levante Almeriense.",
  { absolute: true },
);

const areas = [
  {
    index: "01",
    href: "/infraestructura-ti",
    title: "Infraestructura TI",
    problem:
      "Servidores sin inventario, copias que nadie ha restaurado y un único equipo del que depende toda la oficina.",
    do: "Diagnosticar, mantener, virtualizar cuando aporta, documentar y migrar con un plan de vuelta atrás.",
    dont: "Montar hardware sin monitorización ni responsables. Un rack sin documentación es otra improvisación.",
    arch: "Host, VMs, almacenamiento, identidad y backup como capas visibles, no como «el PC de contabilidad».",
    tech: "Windows Server, Linux, NAS, hipervisor, Active Directory, monitorización.",
    signals: "Uptime del host, espacio, jobs de copia, actualizaciones pendientes, accesos privilegiados.",
  },
  {
    index: "02",
    href: "/ciberseguridad",
    title: "Ciberseguridad",
    problem:
      "Mismo usuario para todo el mundo, Wi-Fi abierta al almacén y copias en el mismo disco que los datos vivos.",
    do: "Reducir superficie de ataque y mejorar recuperación: MFA, perímetro, endpoint, segmentación y backups probados.",
    dont: "Vender miedo ni un producto único que «ya cubre todo». La seguridad es un sistema de capas.",
    arch: "Internet → firewall → identidad → red → puesto → datos → copia externa.",
    tech: "Firewall, MFA, hardening, endpoint, VLAN, copias automatizadas.",
    signals: "Cuentas privilegiadas, parches, restauraciones de prueba, eventos de acceso anómalo.",
  },
  {
    index: "03",
    href: "/redes-wifi-tpv",
    title: "Redes y Wi-Fi",
    problem:
      "Invitados, TPV, oficina e IoT en el mismo dominio de broadcast. Un fallo de radio tumba la caja.",
    do: "Diseñar cobertura, VLAN, roaming y cableado alrededor del uso real: hotel, restaurante, oficina o nave.",
    dont: "Resolver un hotel con un único punto de acceso de consumo y esperar que aguante agosto.",
    arch: "WAN, firewall, core, VLAN 10/20/30/40, APs y switches gestionables.",
    tech: "Switching, Wi-Fi profesional, VLAN, guest, TPV, IoT, cableado.",
    signals: "Cobertura, reasociación, saturación, separación de tráfico, disponibilidad de caja.",
  },
  {
    index: "04",
    href: "/soporte-tecnico",
    title: "Soporte técnico",
    problem:
      "Incidencias que se «apañan» sin causa raíz. El mismo corte vuelve cada lunes.",
    do: "Diagnosticar el sistema —puesto, servidor, red, software—, resolver y documentar para que no se repita.",
    dont: "Cerrar tickets sin dejar rastro. Si no está escrito, la empresa vuelve a depender de memoria oral.",
    arch: "Detectar → clasificar → diagnosticar → resolver → documentar → prevenir.",
    tech: "Remoto, presencial en comarca, PCs, servidores, red, software de gestión.",
    signals: "Tiempo hasta diagnóstico, recurrencia, cambios documentados, backlog de mantenimiento.",
  },
  {
    index: "05",
    href: "/inteligencia-artificial",
    title: "Inteligencia artificial",
    problem:
      "Añadir un modelo sobre carpetas caóticas, permisos abiertos o un ERP al que nadie puede consultar con reglas.",
    do: "Conectar consulta, asistencia y, con límites, ejecución. RAG, agentes, automatización documental e integraciones.",
    dont: "Prometer un agente autónomo el primer día. Primero fuentes, permisos y un proceso que se pueda medir.",
    arch: "Fuentes → ingestión → índice → recuperación → modelo → aprobación → acción.",
    tech: "RAG, LLMs local/híbrido/cloud, agentes, APIs, ERP/CRM, human in the loop.",
    signals: "Fuentes indexadas, citas, errores, acciones aprobadas, tiempo ahorrado en un proceso concreto.",
  },
];

export default function ServiciosPage() {
  const contact = contactHref({
    cta: "servicios-hero",
    origen: path,
  });
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Servicios" },
        ]}
        eyebrow="CATÁLOGO DEL SISTEMA"
        title="Servicios tecnológicos para empresas"
        lead="Infraestructura, seguridad, conectividad, soporte e inteligencia artificial gestionados como partes de un mismo sistema."
        primaryHref={contact}
        secondaryHref="#matriz"
        secondaryLabel="Ver matriz"
        diagram={
          <DiagramFigure
            title="SERVICE MATRIX"
            caption="Usuarios, sistemas, red, seguridad, datos e IA se diseñan juntos. Si una capa falla, el resto hereda el problema."
          >
            <ServiceMatrix />
            <ServiceMatrixMobile className="mt-2" />
          </DiagramFigure>
        }
      />

      <CopyBlock index="00" title="Por qué no trabajamos cada pieza aislada">
        <p>
          Una empresa no nota «el servidor» o «la IA» por separado: nota si se
          puede facturar, si se abre el almacén, si un hotel da Wi-Fi o si un
          documento se encuentra sin llamar a tres personas. Por eso
          diagnosticamos el conjunto: hardware, red, identidad, copias, datos y,
          cuando hay un proceso claro, automatización.
        </p>
        <p>
          El orden no es comercial. Si las copias no se pueden restaurar, no
          tiene sentido entrenar un índice. Si la red de invitados comparte
          dominio con el TPV, el agente de correo puede esperar. Priorizamos lo
          que evita parar la operativa y lo que permite recuperar.
        </p>
      </CopyBlock>

      <section id="matriz" className="scroll-mt-28 border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="tech-label">ÁREAS</p>
          <h2 className="mt-3 text-3xl font-semibold">Cinco capas, un sistema</h2>
          <div className="mt-10 grid gap-6">
            {areas.map((area) => (
              <TechPanel key={area.href} className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div>
                  <p className="font-mono text-sm tracking-[0.2em] text-cyan">
                    {area.index}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{area.title}</h3>
                  <p className="mt-4 text-sm text-muted">{area.problem}</p>
                  <div className="mt-6">
                    <CyberButton href={area.href} variant="secondary">
                      Abrir {area.title.toLowerCase()}
                    </CyberButton>
                  </div>
                </div>
                <dl className="grid gap-3 text-sm">
                  <div>
                    <dt className="tech-label">Qué hacemos</dt>
                    <dd className="mt-1 text-muted">{area.do}</dd>
                  </div>
                  <div>
                    <dt className="tech-label">Qué no hacemos</dt>
                    <dd className="mt-1 text-muted">{area.dont}</dd>
                  </div>
                  <div>
                    <dt className="tech-label">Arquitectura habitual</dt>
                    <dd className="mt-1 text-muted">{area.arch}</dd>
                  </div>
                  <div>
                    <dt className="tech-label">Tecnologías</dt>
                    <dd className="mt-1 text-muted">{area.tech}</dd>
                  </div>
                  <div>
                    <dt className="tech-label">Indicadores que revisamos</dt>
                    <dd className="mt-1 text-muted">{area.signals}</dd>
                  </div>
                </dl>
              </TechPanel>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Vista compacta:{" "}
            {mainServices.map((item, index) => (
              <span key={item.href}>
                <Link href={item.href} className="text-cyan hover:underline">
                  {item.title.replace(" para Empresas", "")}
                </Link>
                {index < mainServices.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>
      </section>

      <RelatedSystems path={path} />
      <PageFaqs
        items={serviciosFaqs}
        jsonLd={servicePageGraph({
          path,
          name: "Servicios tecnológicos para empresas",
          description:
            "Infraestructura, seguridad, redes, soporte e inteligencia artificial como un mismo sistema.",
          crumbs: [
            { name: "Inicio", path: "/" },
            { name: "Servicios", path },
          ],
          faqs: serviciosFaqs,
        })}
        origen={path}
        cta="servicios-final"
      />
    </>
  );
}
