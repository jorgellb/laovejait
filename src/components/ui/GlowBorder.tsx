import { cn } from "@/lib/utils";

export function GlowBorder({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative border border-border bg-background-panel/80",
        "shadow-[0_0_0_1px_rgba(0,240,255,0.04),0_20px_80px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t border-l border-cyan/70" />
      <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t border-r border-cyan/70" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-violet/50" />
      <span className="pointer-events-none absolute right-0 bottom-0 h-3 w-3 border-r border-b border-violet/50" />
      {children}
    </div>
  );
}

export function TechPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <GlowBorder className={cn("p-5 sm:p-6", className)}>{children}</GlowBorder>
  );
}
