import {
  CircuitLines,
  SectionDividerTech,
  TechGrid,
} from "@/components/graphics/overlays";
import { cn } from "@/lib/utils";

type Tone = "cyan" | "violet" | "neutral";

export function SectionFrame({
  children,
  id,
  className,
  tone = "neutral",
  divider = true,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  tone?: Tone;
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden border-b border-border",
        tone === "cyan" && "section-veil-cyan",
        tone === "violet" && "section-veil-violet",
        className,
      )}
    >
      <TechGrid className="text-cyan" />
      {divider ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 text-cyan/70">
          <SectionDividerTech />
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
