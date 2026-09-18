import type { Metadata } from "next";
import {
  DiagramFigure,
  InfraTopology,
  VerticalSteps,
} from "@/components/graphics/system-diagrams";
import {
  CopyBlock,
  PageFaqs,
  PageHero,
  RelatedSystems,
} from "@/components/pages/PageChrome";
import { TechPanel } from "@/components/ui/GlowBorder";
import { infraFaqs } from "@/data/faqs";
import { contactHref } from "@/data/site-nav";
import { documentMetadata } from "@/lib/metadata";
import { servicePageGraph } from "@/lib/schema";

const path = "/infraestructura-ti";

export const metadata: Metadata = documentMetadata(
  path,
  "Infraestructura TI para Empresas | Servidores y Sistemas | La Oveja",
  "Servidores, virtualización, almacenamiento, identidad, monitorización, backup y migraciones para que la operativa no dependa de improvisaciones.",
  { absolute: true },
);

const sections = [
  {
    index: "01",
    title: "Diagnóstico",
    body: "Inventario de hosts, servicios, copias, identidades y puntos únicos de fallo. Sin ese mapa, cualquier ampliación es un apéndice más.",
  },
  {
    index: "02",
    title: "Servidor",
    body: "Windows Server o Linux según lo que sostenga la empresa. Un servidor no es un PC potente: es un servicio con copias, actualizaciones y alguien que sabe restaurarlo.",
  },
  {
    index: "03",
    title: "Virtualización",
    body: "VM01, VM02, VM03 cuando hay que aislar cargas o recuperar sin apagar toda la oficina. Si hay una sola carga clara, a veces un host bien mantenido es más honesto.",
  },
  {
    index: "04",
    title: "Almacenamiento",
    body: "NAS y pools con propósito: datos vivos, copias y archivo. Mezclarlos en el mismo disco convierte un fallo mecánico en pérdida de negocio.",
  },
  {
    index: "05",
    title: "Identidad",
    body: "Active Directory u origen de identidad equivalente. Cuentas nominativas, grupos y privilegios mínimos. El usuario «admin» compartido es un incidente aplazado.",
  },
  {
    index: "06",
    title: "Monitorización",
    body: "Espacio, servicios, temperatura, jobs. Enterarse el viernes a las 18:00 de que el disco está lleno no es mantenimiento: es suerte agotada.",
  },
  {
    index: "07",
    title: "Backup",
    body: "Copias automatizadas y, cuando el riesgo lo pide, copia externa. Se prueba la restauración. Un job en verde que nadie ha abierto no cuenta.",
  },
  {
    index: "08",
    title: "Migraciones",
    body: "De un host a otro, de un NAS viejo, de un directorio mal planteado. Con ventana, rollback y lista de lo que la empresa no puede perder esa mañana.",
  },
  {
    index: "09",
    title: "Mantenimiento",
    body: "Parches, inventario vivo y documentación. El sistema se mantiene para que el siguiente cambio no dependa de quien «se acordaba de la contraseña».",
  },
  {
    index: "10",
    title: "Escenarios reales",
    body: "Oficina con un único servidor de archivos, nave con NAS y TPV, despacho con directorio y portátiles. Alta disponibilidad solo cuando el coste de parar justifica el segundo camino.",
  },
];

export default function InfraestructuraPage() {
  const contact = contactHref({
    servicio: "infraestructura",
    cta: "infra-hero",
    origen: path,
  });
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Servicios", href: "/servicios" },
          { name: "Infraestructura TI" },
        ]}
        eyebrow="CAPA BASE"
        title="Infraestructura que no depende de improvisaciones."
        lead="Diseñamos y mantenemos servidores, almacenamiento, identidad y copias para que la operativa diaria no cuelgue de un equipo sin documentar."
        primaryHref={contact}
        secondaryHref="#topologia"
        secondaryLabel="Ver topología"
        diagram={
          <DiagramFigure
            title="INFRASTRUCTURE TOPOLOGY"
            caption="Internet, firewall y core. A partir de ahí: servidores, NAS, backup, oficina, almacén, Wi-Fi, VPN y nube."
          >
            <InfraTopology />
            <VerticalSteps
              className="mt-4 lg:hidden"
              items={[
                "Internet",
                "Firewall",
                "Core switch",
                "Servidores / VMs",
                "NAS y pools",
                "Backup",
                "Oficina y Wi-Fi",
                "Almacén, VPN y nube",
              ]}
            />
          </DiagramFigure>
        }
      />

      <CopyBlock index="00" id="topologia" title="El problema que evita">
        <p>
          Cuando el servidor es «el de siempre», nadie sabe qué hay instalado ni
          cómo volver atrás. Un disco que muere se lleva facturación, albaranes
          y el correo de tres personas. Ordenar la base —host, identidad, datos
          y copia— reduce ese riesgo antes de hablar de IA o de una app nueva.
        </p>
      </CopyBlock>

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2">
            {sections.map((item) => (
              <TechPanel key={item.index}>
                <p className="font-mono text-sm tracking-[0.2em] text-cyan">
                  {item.index} {"//"} {item.title.toUpperCase()}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
              </TechPanel>
            ))}
          </div>
        </div>
      </section>

      <RelatedSystems path={path} />
      <PageFaqs
        items={infraFaqs}
        jsonLd={servicePageGraph({
          path,
          name: "Infraestructura TI para empresas",
          description:
            "Servidores, virtualización, almacenamiento, identidad, monitorización y backup.",
          crumbs: [
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
            { name: "Infraestructura TI", path },
          ],
          faqs: infraFaqs,
        })}
        defaultService="Servidores"
        origen={path}
        cta="infra-final"
      />
    </>
  );
}
