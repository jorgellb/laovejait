import Image from "next/image";
import Link from "next/link";
import { SectionFrame } from "@/components/graphics/SectionFrame";
import { CyberButton } from "@/components/ui/CyberButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { conceptualCaption, getIaSector, iaSectorPath } from "@/data/ia-sectors";
import { hubPreviewSectors } from "@/data/site-nav";

export function SectorPreview() {
  const sectors = hubPreviewSectors
    .map((slug) => getIaSector(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <SectionFrame tone="violet" channel="06">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="DATA CHANNEL // IA BY INDUSTRY"
          title="La misma tecnología. Procesos completamente distintos."
          description="Un agente de IA para una nave industrial no trabaja con los mismos datos ni toma las mismas acciones que uno para una clínica, una comercializadora eléctrica o una empresa agrícola."
        />
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <Link
              key={sector.slug}
              href={iaSectorPath(sector.slug)}
              scroll
              className="group relative min-h-44 overflow-hidden bg-background-panel p-5 hover:bg-cyan/5"
            >
              {sector.image.src ? (
                <Image
                  src={sector.image.src}
                  alt=""
                  width={sector.image.width}
                  height={sector.image.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 transition-opacity group-hover:opacity-40"
                />
              ) : null}
              <div className="relative">
                <p className="font-mono text-[0.58rem] tracking-[0.16em] text-cyan">
                  {String(sector.hubOrder).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{sector.shortName}</h3>
                <p className="mt-2 text-sm text-muted">{sector.hubPhrase}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">{conceptualCaption}</p>
        <div className="mt-8">
          <CyberButton href="/ia-por-sector">Explorar los 14 modelos →</CyberButton>
        </div>
      </div>
    </SectionFrame>
  );
}
