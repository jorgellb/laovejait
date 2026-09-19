import type { Metadata } from "next";
import { MunicipalityDossierGrid } from "@/components/coverage/MunicipalityDossier";
import { CoverageLegend, CoverageMap } from "@/components/graphics/CoverageMap";
import { PageFaqs, PageHero, RelatedSystems } from "@/components/pages/PageChrome";
import { MunicipalityLink } from "@/components/ui/MunicipalityLink";
import { TechPanel } from "@/components/ui/GlowBorder";
import { coverageFaqs } from "@/data/faqs";
import { municipalities } from "@/data/municipalities";
import { contactHref } from "@/data/site-nav";
import { documentMetadata } from "@/lib/metadata";
import { servicePageGraph } from "@/lib/schema";

const path = "/cobertura";

export const metadata: Metadata = documentMetadata(
  path,
  "Servicio tecnológico en el Levante Almeriense | La Oveja",
  "Cobertura técnica en Vera, Mojácar, Garrucha, Huércal-Overa, Cuevas del Almanzora, Pulpí, Carboneras y el resto de la comarca. Costa, industria, comercio y oficina no se diseñan igual.",
  { absolute: true },
);

const profiles = [
  {
    title: "Costa y hotel",
    body: "Mojácar, Garrucha, Carboneras: cobertura, TPV, invitados y recepción. El pico de temporada es el diseño, no una excepción.",
  },
  {
    title: "Industria y almacén",
    body: "Vera, Pulpí, Huércal-Overa, Cuevas: servidor, NAS, red de nave y copias. La IA documental entra cuando los albaranes ya tienen sitio.",
  },
  {
    title: "Comercio y oficina",
    body: "Puestos, identidad, copias y una red que no mezcla invitado con file server. El soporte presencial cubre lo que el remoto no toca.",
  },
  {
    title: "Interior y mixto",
    body: "Antas, Turre, Bédar, Lubrín, Los Gallardos: menos densidad, mismos sistemas. Se dimensiona al negocio, no al código postal.",
  },
];

export default function CoberturaPage() {
  const contact = contactHref({
    cta: "cobertura-hero",
    origen: path,
  });
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Inicio", href: "/" },
          { name: "Cobertura" },
        ]}
        eyebrow="RED TERRITORIAL"
        title="Servicio tecnológico en el Levante Almeriense."
        lead="Atendemos la comarca con remoto diario y visita cuando hay que tocar rack, cableado o un equipo en sede. El mapa no es un listado: cada nodo tiene un perfil de uso."
        primaryHref={contact}
        secondaryHref="#mapa"
        secondaryLabel="Abrir mapa"
      />

      <section id="mapa" className="scroll-mt-28 border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)]">
          <TechPanel className="overflow-visible p-3 sm:p-4">
            <CoverageMap />
          </TechPanel>
          <div className="flex flex-col gap-4">
            <CoverageLegend />
            <p className="text-sm text-muted">
              Pasa el cursor por un municipio en escritorio o usa el selector en
              el teléfono. Cada ficha enlaza a la landing local: servicios
              frecuentes y CTA propios, sin copiar el mismo párrafo doce veces.
            </p>
            <div className="flex flex-wrap gap-2" aria-label="Municipios">
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
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="tech-label">FICHAS LOCALES</p>
          <h2 className="mt-3 text-3xl font-semibold">Doce nodos, doce landings</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Cada ficha tiene mapa del núcleo urbano. Once municipios tienen
            ilustración propia; Bédar abre igual, sin inventar una foto.
          </p>
          <div className="mt-8">
            <MunicipalityDossierGrid />
          </div>
        </div>
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="tech-label">PERFILES</p>
          <h2 className="mt-3 text-3xl font-semibold">Costa, nave, comercio, interior</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {profiles.map((item) => (
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
        items={coverageFaqs}
        jsonLd={servicePageGraph({
          path,
          name: "Cobertura en el Levante Almeriense",
          description:
            "Servicio tecnológico en doce municipios del Levante Almeriense.",
          crumbs: [
            { name: "Inicio", path: "/" },
            { name: "Cobertura", path },
          ],
          faqs: coverageFaqs,
        })}
        origen={path}
        cta="cobertura-final"
      />
    </>
  );
}
