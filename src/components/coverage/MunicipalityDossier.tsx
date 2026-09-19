import Image from "next/image";
import Link from "next/link";
import {
  businessProfileLabel,
  municipalities,
  municipalityHref,
} from "@/data/municipalities";
import { formatGeoReadout } from "@/lib/web-mercator";

export function MunicipalityDossierGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {municipalities.map((item) => (
        <li key={item.slug}>
          <Link
            href={municipalityHref(item.slug)}
            scroll
            className="sector-card group block border border-border bg-background-panel"
          >
            <div className="relative aspect-video overflow-hidden bg-[#050914]">
              {item.image ? (
                <Image
                  src={item.image.src}
                  alt={`Ilustración conceptual de servicio informático en ${item.name}.`}
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-full flex-col justify-between bg-[linear-gradient(180deg,rgba(0,240,255,0.06),transparent_42%),repeating-linear-gradient(90deg,rgba(148,163,184,0.08)_0,rgba(148,163,184,0.08)_1px,transparent_1px,transparent_28px)] p-4">
                  <p className="font-mono text-[0.58rem] tracking-[0.16em] text-cyan">
                    NODO SIN STILL
                  </p>
                  <p className="font-mono text-[0.62rem] tracking-[0.14em] text-muted">
                    {formatGeoReadout(item.map.lat, item.map.lon)}
                  </p>
                </div>
              )}
              <span className="pointer-events-none absolute top-2 left-2 h-2.5 w-2.5 border-t border-l border-cyan/70" />
              <span className="pointer-events-none absolute right-2 bottom-2 h-2.5 w-2.5 border-r border-b border-violet/50" />
            </div>
            <div className="border-t border-border p-4">
              <p className="tech-label">{item.name}</p>
              <p className="mt-2 text-sm text-muted">
                {businessProfileLabel[item.businessProfile]}
              </p>
              <p className="mt-3 font-mono text-[0.58rem] tracking-[0.16em] text-cyan">
                ABRIR FICHA →
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
