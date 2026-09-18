import Link from "next/link";
import { municipalityHref } from "@/data/municipalities";
import { cn } from "@/lib/utils";

export function MunicipalityLink({
  slug,
  name,
  className,
}: {
  slug: string;
  name: string;
  className?: string;
}) {
  return (
    <Link
      href={municipalityHref(slug)}
      scroll
      className={cn(
        "border border-border bg-background-panel px-3 py-2 font-mono text-xs tracking-wide text-foreground transition-colors duration-300 hover:border-cyan hover:text-cyan",
        className,
      )}
    >
      {name}
    </Link>
  );
}
