import { BlueprintLightbox } from "@/components/ia-sector/BlueprintLightbox";
import { SectorBlueprintMedia } from "@/components/ia-sector/SectorBlueprintMedia";
import { conceptualCaption, type IaSector } from "@/data/ia-sectors";

export function SectorBlueprintFigure({
  sector,
  priority = false,
}: {
  sector: IaSector;
  priority?: boolean;
}) {
  const media = (
    <SectorBlueprintMedia
      sector={sector}
      sizes="(min-width: 1280px) 1120px, 100vw"
    />
  );

  return (
    <figure className="border border-border bg-[#050914]">
      <div className="relative p-3 sm:p-4">
        <span className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t border-l border-cyan/70" />
        <span className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t border-r border-cyan/70" />
        <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-violet/50" />
        <span className="pointer-events-none absolute right-3 bottom-3 h-3 w-3 border-r border-b border-violet/50" />
        <SectorBlueprintMedia
          sector={sector}
          priority={priority}
          sizes="(min-width: 1280px) 1120px, 100vw"
        />
      </div>
      <figcaption className="flex flex-col gap-4 border-t border-border px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-5">
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          {conceptualCaption}
          {sector.image.brandHold ? (
            <>
              {" "}
              El esquema visual de esta página es una versión neutra: la ilustración
              original contiene marcas de terceros y no se publica como caso de
              cliente.
            </>
          ) : null}
        </p>
        <div className="shrink-0">
          <BlueprintLightbox title={sector.name}>{media}</BlueprintLightbox>
        </div>
      </figcaption>
    </figure>
  );
}
