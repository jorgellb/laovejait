import {
  formatGeoReadout,
  osmMapUrl,
  tileWindow,
} from "@/lib/web-mercator";
import type { Municipality } from "@/data/municipalities";
import { cn } from "@/lib/utils";

const COLS = 4;
const ROWS = 3;

export function MunicipalityMap({
  municipality,
  className,
}: {
  municipality: Municipality;
  className?: string;
}) {
  const { lat, lon, zoom } = municipality.map;
  const { tiles, markerX, markerY } = tileWindow(lat, lon, zoom, COLS, ROWS);
  const osm = osmMapUrl(lat, lon, zoom);
  const readout = formatGeoReadout(lat, lon);

  return (
    <figure className={cn("border border-border bg-[#050914]", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2.5">
        <p className="tech-label">
          SITE SCAN {"// "}
          {municipality.name}
        </p>
        <p className="hidden font-mono text-[0.58rem] tracking-[0.14em] text-muted sm:block">
          ESRI DARK GRAY
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="municipality-map-tiles relative aspect-[4/3] w-full"
          role="img"
          aria-label={`Mapa del núcleo urbano de ${municipality.name}`}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
          }}
        >
          {tiles.map((tile) => (
            <div key={`${tile.col}-${tile.row}`} className="relative overflow-hidden">
              {/* Native img: Esri public canvas tiles, no API key. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tile.baseUrl}
                alt=""
                width={256}
                height={256}
                decoding="async"
                loading="lazy"
                className="block h-full w-full object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tile.labelUrl}
                alt=""
                width={256}
                height={256}
                decoding="async"
                loading="lazy"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 scanline" />
        <div className="pointer-events-none absolute inset-0 hud-scan" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030712]/75 via-transparent to-[rgba(0,240,255,0.06)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between px-3 py-2 font-mono text-[0.58rem] tracking-[0.16em] text-cyan/80">
          <span>NODE_{municipality.slug.replace(/-/g, "_").toUpperCase()}</span>
          <span>Z{zoom}</span>
        </div>
        <div
          className="pointer-events-none absolute size-16 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${(markerX * 100).toFixed(3)}%`,
            top: `${(markerY * 100).toFixed(3)}%`,
          }}
        >
          <span className="absolute inset-0 rounded-full border border-cyan/35 node-ring" />
          <span className="absolute top-1/2 left-0 h-px w-full bg-cyan/55" />
          <span className="absolute top-0 left-1/2 h-full w-px bg-cyan/55" />
          <span className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 bg-cyan shadow-[0_0_16px_rgba(0,240,255,0.85)]" />
        </div>
        <span className="pointer-events-none absolute top-2 left-2 h-3 w-3 border-t border-l border-cyan/70" />
        <span className="pointer-events-none absolute top-2 right-2 h-3 w-3 border-t border-r border-cyan/70" />
        <span className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-violet/50" />
        <span className="pointer-events-none absolute right-2 bottom-2 h-3 w-3 border-r border-b border-violet/50" />
        <p className="pointer-events-none absolute bottom-3 left-3 font-mono text-[0.58rem] tracking-[0.14em] text-foreground/90">
          {readout}
        </p>
      </div>
      <figcaption className="flex flex-col gap-3 border-t border-border px-4 py-4">
        <p className="text-sm leading-relaxed text-muted">
          Núcleo urbano de {municipality.name}. El marcador sitúa el municipio en
          el mapa, no una sede de La Oveja. Teselas Esri World Dark Gray, sin
          clave de API. OpenStreetMap abre el mismo punto en un mapa interactivo.
        </p>
        <a
          href={osm}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[0.62rem] tracking-[0.16em] text-cyan hover:underline"
        >
          ABRIR EN OPENSTREETMAP →
        </a>
      </figcaption>
    </figure>
  );
}
