import type { Metadata } from "next";
import {
  DiagramFigure,
  NetworkVlans,
  VerticalSteps,
} from "@/components/graphics/system-diagrams";
import {
  CopyBlock,
  PageFaqs,
  PageHero,
  RelatedSystems,
} from "@/components/pages/PageChrome";
import { TechPanel } from "@/components/ui/GlowBorder";
import { networkFaqs } from "@/data/faqs";
import { contactHref } from "@/data/site-nav";
import { documentMetadata } from "@/lib/metadata";
import { servicePageGraph } from "@/lib/schema";

const path = "/redes-wifi-tpv";

export const metadata: Metadata = documentMetadata(
  path,
  "Redes y Wi-Fi Profesional para Empresas | La Oveja",
  "Redes empresariales para hoteles, restaurantes, oficinas, naves y retail: Wi-Fi, VLAN, TPV, IoT, cableado y monitorización.",
  { absolute: true },
);

const cases = [
  {
    title: "Hoteles",
    body: "Cobertura en habitaciones, zonas comunes y staff. Invitados separados de recepción y de caja. Roaming que no corta la videollamada del cliente en el pasillo.",
  },
  {
    title: "Restaurantes",
    body: "TPV en VLAN propia. La terraza no comparte dominio con la caja. El corte de un AP de invitado no tumba el servicio.",
  },
  {
    title: "Oficinas",
    body: "Cable donde el puesto no puede fallar; radio para movilidad. Invitados fuera del file server.",
  },
  {
    title: "Naves y almacenes",
    body: "Cobertura en muelle y pasillos, lectores y terminales de almacén en su propio tráfico, uplink al servidor o NAS.",
  },
  {
    title: "Retail",
    body: "Caja, almacén y Wi-Fi de cliente como tres problemas distintos. Un único SSID para todo es el atajo que más caro sale en temporada.",
  },
];

export default function RedesPage() {
  const contact = contactHref({
    servicio: "redes",
    cta: "redes-hero",
    origen: path,
  });
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Servicios", href: "/servicios" },
          { name: "Redes, Wi-Fi y TPV" },
        ]}
        eyebrow="PLANO DE RED"
        title="Redes empresariales diseñadas alrededor del negocio."
        lead="Separamos tráfico de oficina, invitados, TPV e IoT para reducir exposición innecesaria y evitar que un problema en una red afecte automáticamente al resto."
        primaryHref={contact}
        secondaryHref="#vlans"
        secondaryLabel="Ver VLANs"
        diagram={
          <DiagramFigure
            title="VLAN PLANE"
            caption="WAN, firewall y core. VLAN 10 oficina, 20 TPV, 30 invitados, 40 IoT. El color marca el tráfico, no la estética."
          >
            <NetworkVlans />
            <VerticalSteps
              className="mt-4 lg:hidden"
              items={[
                "WAN",
                "Firewall",
                "Core",
                "VLAN 10 oficina",
                "VLAN 20 TPV",
                "VLAN 30 invitados",
                "VLAN 40 IoT",
              ]}
            />
          </DiagramFigure>
        }
      />

      <CopyBlock index="01" id="vlans" title="Por qué segmentar">
        <p>
          Un hotel, un restaurante o una nave mezclan usos que no deberían verse.
          El invitado no necesita el NAS. El TPV no debería compartir broadcast
          con un sensor. El IoT no necesita llegar a contabilidad. La VLAN y el
          cableado son la forma de hacer eso visible y mantenible.
        </p>
        <p>
          Switching gestionable, roaming y cobertura se dimensionan midiendo,
          no adivinando. Monitorizamos lo que luego hay que explicar: un AP
          saturado, una caja que salta de red, un uplink al límite.
        </p>
      </CopyBlock>

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="tech-label">CASOS</p>
          <h2 className="mt-3 text-3xl font-semibold">El mismo plano, usos distintos</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {cases.map((item) => (
              <TechPanel key={item.title}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </TechPanel>
            ))}
          </div>
        </div>
      </section>

      <RelatedSystems path={path} />
      <PageFaqs
        items={networkFaqs}
        jsonLd={servicePageGraph({
          path,
          name: "Redes y Wi-Fi profesional",
          description:
            "Wi-Fi, VLAN, TPV, IoT, cableado y switching para empresas.",
          crumbs: [
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
            { name: "Redes, Wi-Fi y TPV", path },
          ],
          faqs: networkFaqs,
        })}
        defaultService="Redes / Wi-Fi"
        origen={path}
        cta="redes-final"
      />
    </>
  );
}
