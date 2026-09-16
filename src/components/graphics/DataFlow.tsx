import { cn } from "@/lib/utils";

type FlowPathProps = {
  d: string;
  className?: string;
  delay?: string;
};

export function FlowPath({ d, className, delay = "0s" }: FlowPathProps) {
  return (
    <g className={className} aria-hidden="true">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1" opacity="0.22" />
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
        className="flow-line-slow"
        style={{ animationDelay: delay }}
        opacity="0.7"
      />
    </g>
  );
}

export function FlowNode({
  x,
  y,
  label,
  sub,
  accent = false,
  hub = false,
}: {
  x: number;
  y: number;
  label: string;
  sub?: string;
  accent?: boolean;
  hub?: boolean;
}) {
  const r = hub ? 22 : 11;
  return (
    <g transform={`translate(${x} ${y})`} className={accent ? "text-violet" : "text-cyan"}>
      {hub ? (
        <circle r="34" fill="none" stroke="currentColor" className="node-ring" opacity="0.35" />
      ) : null}
      <circle
        r={r}
        fill="#050914"
        stroke="currentColor"
        strokeWidth={hub ? 1.8 : 1.1}
      />
      {hub ? (
        <circle r="6" className="pulse-dot" fill="currentColor" />
      ) : (
        <circle r="3" fill="currentColor" />
      )}
      <text
        y={hub ? 48 : 26}
        textAnchor="middle"
        fill="#f8fafc"
        fontSize={hub ? 11 : 9}
        fontFamily="ui-monospace, monospace"
        letterSpacing="0.12em"
      >
        {label}
      </text>
      {sub ? (
        <text
          y={hub ? 62 : 38}
          textAnchor="middle"
          fill="#94a3b8"
          fontSize="8"
          fontFamily="ui-monospace, monospace"
          letterSpacing="0.08em"
        >
          {sub}
        </text>
      ) : null}
    </g>
  );
}

export function DataFlow({ className, d }: { className?: string; d: string }) {
  return (
    <svg aria-hidden="true" className={cn("overflow-visible", className)} viewBox="0 0 100 12">
      <FlowPath d={d} />
    </svg>
  );
}
