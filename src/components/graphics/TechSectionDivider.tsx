import { cn } from "@/lib/utils";

type Variant = "DATA_LINE" | "SIGNAL" | "GRID_FADE" | "NETWORK";

export function TechSectionDivider({
  variant = "DATA_LINE",
  channel,
  className,
}: {
  variant?: Variant;
  channel?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative flex h-6 w-full items-center text-cyan/70", className)}
    >
      {variant === "GRID_FADE" ? (
        <span className="block h-px w-full bg-gradient-to-r from-transparent via-cyan/25 to-transparent" />
      ) : (
        <svg className="h-6 w-full" viewBox="0 0 1200 24" preserveAspectRatio="none">
          {variant === "NETWORK" ? (
            <>
              <path
                d="M0 12 H1200"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.7"
                opacity="0.35"
              />
              {[80, 260, 520, 780, 1040].map((x) => (
                <circle key={x} cx={x} cy="12" r="2.2" fill="currentColor" opacity="0.7" />
              ))}
            </>
          ) : variant === "SIGNAL" ? (
            <path
              d="M0 12 H80 L92 4 H220 L232 12 H520 L534 6 H680 L694 12 H1120 L1134 18 H1200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.55"
            />
          ) : (
            <>
              <path
                d="M0 12 H1200"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.35"
              />
              <circle cx="180" cy="12" r="2.4" fill="currentColor" />
              <circle cx="640" cy="12" r="2.4" fill="currentColor" />
            </>
          )}
        </svg>
      )}
      {channel ? (
        <span className="pointer-events-none absolute left-4 font-mono text-[0.52rem] tracking-[0.22em] text-cyan/50">
          DATA CHANNEL {"//"} {channel}
        </span>
      ) : null}
    </div>
  );
}
