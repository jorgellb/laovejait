import { CircuitLines, TechGrid } from "@/components/graphics/overlays";
import { TechSectionDivider } from "@/components/graphics/TechSectionDivider";
import { cn } from "@/lib/utils";

type Tone = "cyan" | "violet" | "neutral";

export function SectionFrame({
  children,
  id,
  aliasId,
  className,
  tone = "neutral",
  divider = true,
  channel,
}: {
  children: React.ReactNode;
  id?: string;
  aliasId?: string;
  className?: string;
  tone?: Tone;
  divider?: boolean;
  channel?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden border-b border-border scroll-mt-28",
        tone === "cyan" && "section-veil-cyan",
        tone === "violet" && "section-veil-violet",
        tone === "neutral" && "section-veil-neutral",
        className,
      )}
    >
      {aliasId ? (
        <span
          id={aliasId}
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 size-px scroll-mt-28"
        />
      ) : null}
      <TechGrid className="text-cyan" />
      {divider ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 text-cyan/70">
          <TechSectionDivider
            variant={tone === "violet" ? "SIGNAL" : tone === "cyan" ? "NETWORK" : "DATA_LINE"}
            channel={channel}
          />
        </div>
      ) : null}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 text-cyan/25"
      >
        <CircuitLines />
      </div>
      <div className="relative px-4 py-20 sm:px-6">{children}</div>
    </section>
  );
}
