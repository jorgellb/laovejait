import { notFound } from "next/navigation";
import { MunicipalityFigure } from "@/components/coverage/MunicipalityFigure";
import { MunicipalityMap } from "@/components/coverage/MunicipalityMap";
import { CoverageMap } from "@/components/graphics/CoverageMap";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CyberButton } from "@/components/ui/CyberButton";
import { MunicipalityLink } from "@/components/ui/MunicipalityLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechPanel } from "@/components/ui/GlowBorder";
import { municipalityFaqs } from "@/data/faqs";
import {
  businessProfileLabel,
  getMunicipality,
  getNearbyMunicipalities,
  municipalities,
} from "@/data/municipalities";
import { contactHref } from "@/data/site-nav";
import { municipalityMetadata } from "@/lib/metadata";
import { municipalityGraph } from "@/lib/schema";
import { formatGeoReadout } from "@/lib/web-mercator";

export const dynamicParams = false;

type MunicipalityPageProps = {
  params: Promise<{ municipio: string }>;
};

export function generateStaticParams() {
  return municipalities.map((item) => ({ municipio: item.slug }));
}

export async function generateMetadata({
  params,
}: MunicipalityPageProps) {
  const { municipio } = await params;
  const data = getMunicipality(municipio);
  if (!data) return {};
  return municipalityMetadata(data);
}

export default async function MunicipalityPage({
  params,
}: MunicipalityPageProps) {
  const { municipio } = await params;
  const data = getMunicipality(municipio);
  if (!data) notFound();

  const faqs = municipalityFaqs(data);
  const nearby = getNearbyMunicipalities(data);
  const path = `/servicios-informaticos/${data.slug}`;
  const contact = contactHref({
    cta: "municipio-hero",
    origen: path,
  });

  return (
    <>
      <JsonLd data={municipalityGraph(data.slug, data.name, faqs)} />
      <article className="border-b border-border px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Cobertura", href: "/cobertura" },
              { name: data.name },
            ]}
          />
          <p className="tech-label mt-8">
            {data.name.toUpperCase()}
            {" // "}
            {data.province.toUpperCase()}
            {" // "}
            {businessProfileLabel[data.businessProfile].toUpperCase()}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Mantenimiento Informático e Inteligencia Artificial para Empresas en{" "}
            {data.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            {data.heroDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CyberButton href={contact}>Solicitar diagnóstico</CyberButton>
            <CyberButton href="#mapa" variant="secondary">
              Ver mapa
            </CyberButton>
          </div>
        </div>
      </article>

      {data.image ? (
        <section
          id="ficha"
          className="scroll-mt-28 border-b border-border px-4 py-12 sm:px-6"
        >
          <div className="mx-auto max-w-7xl">
            <MunicipalityFigure municipality={data} priority />
          </div>
        </section>
      ) : null}

      <section
        id="mapa"
        className="scroll-mt-28 border-b border-border px-4 py-16 sm:px-6"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <MunicipalityMap municipality={data} />
          <TechPanel>
            <p className="tech-label">ENFOQUE LOCAL</p>
            <p className="mt-3 font-mono text-[0.62rem] tracking-[0.14em] text-muted">
              {formatGeoReadout(data.map.lat, data.map.lon)}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {data.localServices.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 bg-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </TechPanel>
        </div>
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={`Trabajo real en ${data.name}`} />
          <p className="mt-6 max-w-3xl text-muted">{data.intro}</p>
          <h2 className="mt-10 text-2xl font-semibold sm:text-3xl">
            {data.sectorHeading}
          </h2>
          <p className="mt-4 max-w-3xl text-muted">{data.sectorBody}</p>
        </div>
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-semibold">Municipios cercanos</h2>
            <p className="mt-3 max-w-2xl text-muted">
              El mismo equipo cubre desplazamientos entre estos núcleos cuando la
              incidencia no se cierra en remoto.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {nearby.map((item) => (
                <MunicipalityLink
                  key={item.slug}
                  slug={item.slug}
                  name={item.name}
                />
              ))}
            </div>
          </div>
          <TechPanel className="overflow-visible p-3">
            <CoverageMap activeSlug={data.slug} />
          </TechPanel>
        </div>
      </section>

      <FAQ
        items={faqs}
        eyebrow={`FAQ · ${data.name.toUpperCase()}`}
        title={`Preguntas sobre informática e IA en ${data.name}`}
      />
      <FinalCTA showForm={false} />
    </>
  );
}
