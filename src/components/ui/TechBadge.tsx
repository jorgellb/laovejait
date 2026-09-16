import { cn } from "@/lib/utils";

export function TechBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-border bg-background-panel px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.18em] text-cyan uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function StatusIndicator({
  label,
  value = "ONLINE",
}: {
  label: string;
  value?: string;
}) {
  return (
    <div className="border border-border bg-background-elevated/80 px-3 py-2">
      <p className="font-mono text-[0.58rem] tracking-[0.2em] text-muted uppercase">
        {label}
      </p>
      <p className="mt-1 flex items-center gap-2 font-mono text-xs text-cyan">
        <span className="pulse-dot inline-block size-1.5 rounded-full bg-cyan" />
        {value}
      </p>
    </div>
  );
}
