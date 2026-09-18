import Image from "next/image";
import type { IaSector } from "@/data/ia-sectors";
import { cn } from "@/lib/utils";
import { SectorBlueprintFallback } from "@/components/ia-sector/SectorBlueprintFallback";

export function SectorBlueprintMedia({
  sector,
  priority = false,
  sizes,
  className,
}: {
  sector: IaSector;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  if (!sector.image.src) {
    return (
      <SectorBlueprintFallback
        sector={sector}
        className={cn("h-auto w-full", className)}
      />
    );
  }

  return (
    <Image
      src={sector.image.src}
      alt={sector.alt}
      width={sector.image.width}
      height={sector.image.height}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      decoding="async"
      className={cn("h-auto w-full object-contain", className)}
    />
  );
}

export function SectorCardMedia({
  sector,
  priority = false,
}: {
  sector: IaSector;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-video overflow-hidden bg-[#050914]">
      {sector.image.src ? (
        <Image
          src={sector.image.src}
          alt={sector.alt}
          width={sector.image.width}
          height={sector.image.height}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          priority={priority}
          loading={priority ? undefined : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-contain p-2"
        />
      ) : (
        <SectorBlueprintFallback
          sector={sector}
          className="absolute inset-0 h-full w-full object-contain"
        />
      )}
    </div>
  );
}
