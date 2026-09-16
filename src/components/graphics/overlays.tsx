import { cn } from "@/lib/utils";

type GraphicProps = {
  className?: string;
};

export function GridOverlay({ className }: GraphicProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-full w-full", className)}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <g stroke="currentColor" strokeWidth="0.15" opacity="0.35">
        {Array.from({ length: 12 }, (_, i) => (
          <line key={`v-${i}`} x1={(i + 1) * 8} y1="0" x2={(i + 1) * 8} y2="100" />
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <line key={`h-${i}`} x1="0" y1={(i + 1) * 8} x2="100" y2={(i + 1) * 8} />
        ))}
      </g>
    </svg>
  );
}

export function CircuitLines({ className }: GraphicProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-full w-full", className)}
      viewBox="0 0 1200 200"
      preserveAspectRatio="none"
    >
      <path
        className="flow-line"
        d="M0 110 H180 L210 80 H420 L460 140 H700 L740 70 H980 L1020 120 H1200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.55"
      />
      <path
        d="M0 150 H260 L300 170 H620 L670 130 H1200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.28"
      />
      {[180, 420, 700, 980].map((x) => (
        <circle key={x} cx={x} cy={x === 700 ? 140 : 80} r="3" fill="currentColor" />
      ))}
    </svg>
  );
}

export function GlowRing({ className }: GraphicProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-full w-full", className)}
      viewBox="0 0 200 200"
    >
      <circle
        cx="100"
        cy="100"
        r="78"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.25"
      />
      <circle
        className="radar-ring"
        cx="100"
        cy="100"
        r="54"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.45"
      />
      <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

export function RadarPulse({ className }: GraphicProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-full w-full", className)}
      viewBox="0 0 160 160"
    >
      <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" opacity="0.15" />
      <circle cx="80" cy="80" r="46" fill="none" stroke="currentColor" opacity="0.25" />
      <path
        d="M80 80 L80 12"
        stroke="currentColor"
        strokeWidth="1.4"
        className="radar-sweep-arm"
      />
      <circle cx="80" cy="80" r="3" fill="currentColor" />
    </svg>
  );
}

export function ScanDecor({ className }: GraphicProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("hud-scan pointer-events-none absolute inset-0", className)}
    />
  );
}

export function SignalLines({ className }: GraphicProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-full w-full", className)}
      viewBox="0 0 320 48"
      preserveAspectRatio="none"
    >
      <polyline
        className="flow-line"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        points="0,30 28,30 40,12 56,36 78,20 110,20 128,8 160,32 190,18 230,18 250,40 320,40"
      />
    </svg>
  );
}

export function NeuralMesh({ className }: GraphicProps) {
  const nodes = [
    [30, 40],
    [90, 22],
    [150, 48],
    [70, 90],
    [130, 86],
    [190, 70],
    [40, 130],
    [110, 140],
    [180, 120],
  ] as const;
  const links = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [2, 5],
    [3, 4],
    [4, 5],
    [3, 6],
    [4, 7],
    [5, 8],
    [6, 7],
    [7, 8],
  ] as const;

  return (
    <svg
      aria-hidden="true"
      className={cn("h-full w-full", className)}
      viewBox="0 0 220 170"
    >
      {links.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.35"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={i === 4 ? 3.4 : 2.1} fill="currentColor" />
      ))}
    </svg>
  );
}

export function VectorFieldDecor({ className }: GraphicProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-full w-full", className)}
      viewBox="0 0 400 120"
      preserveAspectRatio="none"
    >
      {Array.from({ length: 18 }, (_, i) => {
        const x = 12 + i * 21;
        const y = 30 + ((i * 17) % 50);
        return (
          <g key={x} stroke="currentColor" opacity="0.35">
            <line x1={x} y1={y} x2={x + 14} y2={y - 8} strokeWidth="0.8" />
            <polygon points={`${x + 14},${y - 8} ${x + 10},${y - 4} ${x + 12},${y - 10}`} fill="currentColor" />
          </g>
        );
      })}
    </svg>
  );
}

export function SectionDividerTech({ className }: GraphicProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-6 w-full", className)}
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
    >
      <path
        d="M0 12 H80 L92 4 H220 L232 12 H520 L534 6 H680 L694 12 H1120 L1134 18 H1200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      <circle cx="92" cy="4" r="2" fill="currentColor" />
      <circle cx="534" cy="6" r="2" fill="currentColor" />
      <circle cx="1134" cy="18" r="2" fill="currentColor" />
    </svg>
  );
}

export function TechGrid({ className }: GraphicProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.18] text-cyan",
        className,
      )}
    >
      <GridOverlay />
    </div>
  );
}
