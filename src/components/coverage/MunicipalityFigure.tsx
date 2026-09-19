import Image from "next/image";
import { BlueprintLightbox } from "@/components/ia-sector/BlueprintLightbox";
import {
  coverageStillCaption,
  type Municipality,
} from "@/data/municipalities";
import { cn } from "@/lib/utils";

export function MunicipalityFigure({
  municipality,
  priority = false,
}: {
  municipality: Municipality;
  priority?: boolean;
}) {
  if (!municipality.image) return null;

  const media = (
    <Image
      src={municipality.image.src}
      alt={`Ilustración conceptual de mantenimiento informático e IA para empresas en ${municipality.name}.`}
      width={municipality.image.width}
      height={municipality.image.height}
      sizes="(min-width: 1280px) 1120px, 100vw"
      className="h-auto w-full object-contain"
    />
  );

  return (
    <figure className="border border-border bg-[#050914]">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2.5">
        <p className="tech-label">
          FICHA VISUAL {"// "}
          {municipality.name.toUpperCase()}
        </p>
        <p className="hidden font-mono text-[0.58rem] tracking-[0.14em] text-muted sm:block">
          STILL_{municipality.slug.replace(/-/g, "_").toUpperCase()}
        </p>
      </div>
      <div className="relative p-3 sm:p-4">
        <span className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t border-l border-cyan/70" />
        <span className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t border-r border-cyan/70" />
        <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-violet/50" />
        <span className="pointer-events-none absolute right-3 bottom-3 h-3 w-3 border-r border-b border-violet/50" />
        <Image
          src={municipality.image.src}
          alt={`Ilustración conceptual de mantenimiento informático e IA para empresas en ${municipality.name}.`}
          width={municipality.image.width}
          height={municipality.image.height}
          sizes="(min-width: 1280px) 1120px, 100vw"
          priority={priority}
          loading={priority ? undefined : "lazy"}
          decoding="async"
          className={cn("h-auto w-full object-contain")}
        />
      </div>
      <figcaption className="flex flex-col gap-4 border-t border-border px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-5">
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          {coverageStillCaption}
        </p>
        <div className="shrink-0">
          <BlueprintLightbox title={municipality.name} actionLabel="Ampliar ficha">
            {media}
          </BlueprintLightbox>
        </div>
      </figcaption>
    </figure>
  );
}
