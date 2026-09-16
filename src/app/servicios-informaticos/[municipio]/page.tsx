import { notFound } from "next/navigation";
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
  getMunicipality,
  getNearbyMunicipalities,
  municipalities,
} from "@/data/municipalities";
import { municipalityMetadata } from "@/lib/metadata";
import { municipalityGraph } from "@/lib/schema";

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

  return (
    <>
      <JsonLd data={municipalityGraph(data.slug, data.name, faqs)} />
      <article className="border-b border-border px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Servicios informáticos", href: "/#servicios" },
              { name: data.name },
            ]}
          />
          <p className="tech-label mt-8">
            {data.name.toUpperCase()}
            {" // "}
            {data.province.toUpperCase()}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Mantenimiento Informático e Inteligencia Artificial para Empresas en{" "}
            {data.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            {data.heroDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CyberButton href="/contacto">Solicitar diagnóstico</CyberButton>
            <CyberButton href="/#servicios" variant="secondary">
              Ver servicios
            </CyberButton>
          </div>
        </div>
      </article>

      <section className="border-b border-border px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading title={`Trabajo real en ${data.name}`} />
            <p className="mt-6 max-w-3xl text-muted">{data.intro}</p>
            <h2 className="mt-10 text-2xl font-semibold sm:text-3xl">
              {data.sectorHeading}
            </h2>
            <p className="mt-4 max-w-3xl text-muted">{data.sectorBody}</p>
          </div>
          <TechPanel>
            <p className="tech-label">ENFOQUE LOCAL</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
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
