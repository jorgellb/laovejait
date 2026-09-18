import { cn } from "@/lib/utils";

function Grid({ width, height, step = 28 }: { width: number; height: number; step?: number }) {
  const cols = Math.floor(width / step);
  const rows = Math.floor(height / step);
  return (
    <g opacity="0.1" stroke="currentColor" strokeWidth="0.4" aria-hidden="true">
      {Array.from({ length: cols + 1 }, (_, i) => (
        <line key={`v-${i}`} x1={i * step} y1="0" x2={i * step} y2={height} />
      ))}
      {Array.from({ length: rows + 1 }, (_, i) => (
        <line key={`h-${i}`} x1="0" y1={i * step} x2={width} y2={i * step} />
      ))}
    </g>
  );
}

function Connector({ d, delay = "0s" }: { d: string; delay?: string }) {
  return (
    <g aria-hidden="true">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1" opacity="0.22" />
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="flow-line-slow"
        style={{ animationDelay: delay }}
        opacity="0.75"
      />
    </g>
  );
}

function Block({
  x,
  y,
  w = 108,
  h = 42,
  label,
  sub,
  gate = false,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  sub?: string;
  gate?: boolean;
}) {
  return (
    <g className="arch-node" tabIndex={0}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        className={gate ? "arch-gate" : "arch-block"}
        rx="0"
      />
      <text
        x={x + w / 2}
        y={y + (sub ? h / 2 - 4 : h / 2 + 4)}
        textAnchor="middle"
        fill="#f8fafc"
        fontSize="9"
        fontFamily="ui-monospace, monospace"
        letterSpacing="0.12em"
      >
        {label}
      </text>
      {sub ? (
        <text
          x={x + w / 2}
          y={y + h / 2 + 12}
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

export function DiagramFigure({
  title,
  caption,
  children,
  className,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className={cn("border border-border bg-background-panel/80 p-3 sm:p-4", className)}>
      <p className="mb-3 font-mono text-[0.58rem] tracking-[0.18em] text-muted">{title}</p>
      {children}
      <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

export function SystemStack({ className }: { className?: string }) {
  const layers = [
    "HARDWARE",
    "RED",
    "IDENTIDAD",
    "ALMACENAMIENTO",
    "DATOS",
    "SEGURIDAD",
    "IA",
    "AUTOMATIZACIÓN",
  ];
  return (
    <svg
      className={cn("arch-canvas h-auto w-full text-cyan", className)}
      viewBox="0 0 360 420"
      role="img"
      aria-labelledby="stack-title stack-desc"
    >
      <title id="stack-title">Pila infraestructura + IA</title>
      <desc id="stack-desc">
        La inteligencia artificial se apoya en hardware, red, identidad,
        almacenamiento, datos y seguridad. Sin esa base, el modelo no tiene
        contexto ni control.
      </desc>
      <Grid width={360} height={420} />
      <Connector d="M 180 36 V 390" />
      {layers.map((label, index) => (
        <Block
          key={label}
          x={86}
          y={24 + index * 48}
          w={188}
          h={36}
          label={`${String(index + 1).padStart(2, "0")}  ${label}`}
          gate={label === "SEGURIDAD"}
        />
      ))}
    </svg>
  );
}

export function ServiceMatrix({ className }: { className?: string }) {
  const axes = ["USERS", "SYSTEMS", "NETWORK", "SECURITY", "DATA", "AI"];
  return (
    <svg
      className={cn("arch-canvas hidden h-auto w-full text-cyan md:block", className)}
      viewBox="0 0 640 280"
      role="img"
      aria-labelledby="matrix-title matrix-desc"
    >
      <title id="matrix-title">Matriz de servicios</title>
      <desc id="matrix-desc">
        Usuarios, sistemas, red, seguridad, datos e IA se tratan como un mismo
        sistema, no como catálogos aislados.
      </desc>
      <Grid width={640} height={280} />
      <Connector d="M 40 140 H 600" />
      <Connector d="M 140 48 V 232" delay="0.4s" />
      <Connector d="M 500 48 V 232" delay="0.8s" />
      {axes.map((label, index) => (
        <Block key={label} x={24 + index * 102} y={118} w={92} h={44} label={label} />
      ))}
      <Block x={90} y={36} w={120} h={40} label="SOPORTE" sub="PERSONAS" />
      <Block x={430} y={36} w={120} h={40} label="RAG / LLM" sub="CONOCIMIENTO" />
      <Block x={90} y={204} w={120} h={40} label="BACKUP" sub="RECUPERACIÓN" />
      <Block x={430} y={204} w={120} h={40} label="ERP / API" sub="ACCIÓN" />
    </svg>
  );
}

export function ServiceMatrixMobile({ className }: { className?: string }) {
  const axes = ["USERS", "SYSTEMS", "NETWORK", "SECURITY", "DATA", "AI"];
  return (
    <ol className={cn("grid gap-2 md:hidden", className)}>
      {axes.map((item, index) => (
        <li
          key={item}
          className="flex items-center justify-between border border-border bg-background-panel px-3 py-3 font-mono text-[0.7rem] tracking-[0.16em] text-cyan"
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function RagMini({ className }: { className?: string }) {
  const steps = ["QUERY", "RETRIEVAL", "CONTEXT", "ANSWER + SOURCES"];
  return (
    <svg
      className={cn("arch-canvas h-auto w-full text-cyan", className)}
      viewBox="0 0 640 120"
      role="img"
      aria-labelledby="rag-title rag-desc"
    >
      <title id="rag-title">Consulta RAG</title>
      <desc id="rag-desc">
        La pregunta recupera fragmentos, construye contexto y responde con
        fuentes.
      </desc>
      <Grid width={640} height={120} step={32} />
      <Connector d="M 30 60 H 610" />
      {steps.map((label, index) => (
        <Block key={label} x={18 + index * 156} y={38} w={140} h={44} label={label} />
      ))}
    </svg>
  );
}

export function HumanLoop({ className }: { className?: string }) {
  return (
    <svg
      className={cn("arch-canvas h-auto w-full text-cyan", className)}
      viewBox="0 0 640 160"
      role="img"
      aria-labelledby="hitl-title hitl-desc"
    >
      <title id="hitl-title">Human in the loop</title>
      <desc id="hitl-desc">
        La IA llega a un umbral de aprobación antes de escribir en el sistema.
      </desc>
      <Grid width={640} height={160} />
      <Connector d="M 40 80 H 600" />
      <Block x={24} y={52} w={140} h={56} label="AI" sub="ADVISE / PREPARE" />
      <Block x={250} y={44} w={160} h={72} label="APPROVAL GATE" sub="PERSONA" gate />
      <Block x={476} y={52} w={140} h={56} label="SYSTEM" sub="ERP / API" />
    </svg>
  );
}

export function ProcessCycle({ className }: { className?: string }) {
  const steps = ["SCAN", "ARCHITECT", "DEPLOY", "MONITOR", "IMPROVE"];
  return (
    <svg
      className={cn("arch-canvas hidden h-auto w-full text-cyan md:block", className)}
      viewBox="0 0 720 150"
      role="img"
      aria-labelledby="cycle-title cycle-desc"
    >
      <title id="cycle-title">Ciclo técnico</title>
      <desc id="cycle-desc">
        Analizar, diseñar, desplegar, monitorizar y mejorar. Improve vuelve a
        Scan: no es un embudo.
      </desc>
      <Grid width={720} height={150} />
      <Connector d="M 40 70 H 680" />
      <Connector d="M 650 92 C 650 130 70 130 70 92" delay="0.6s" />
      {steps.map((label, index) => (
        <Block key={label} x={20 + index * 140} y={48} w={120} h={44} label={label} />
      ))}
    </svg>
  );
}

export function InfraTopology({ className }: { className?: string }) {
  return (
    <svg
      className={cn("arch-canvas hidden h-auto w-full text-cyan lg:block", className)}
      viewBox="0 0 760 420"
      role="img"
      aria-labelledby="topo-title topo-desc"
    >
      <title id="topo-title">Topología de infraestructura</title>
      <desc id="topo-desc">
        Internet, firewall y core switch ramifican a servidores, NAS, backup,
        oficina, almacén, Wi-Fi, VPN y nube.
      </desc>
      <Grid width={760} height={420} />
      <Connector d="M 380 40 V 92" />
      <Connector d="M 380 134 V 186" delay="0.3s" />
      <Connector d="M 80 208 H 680" delay="0.6s" />
      <Connector d="M 120 230 V 300" delay="0.2s" />
      <Connector d="M 280 230 V 300" delay="0.4s" />
      <Connector d="M 440 230 V 300" delay="0.7s" />
      <Connector d="M 600 230 V 300" delay="0.9s" />
      <Block x={316} y={18} w={128} h={40} label="INTERNET" />
      <Block x={316} y={92} w={128} h={42} label="FIREWALL" gate />
      <Block x={300} y={186} w={160} h={42} label="CORE SWITCH" />
      <Block x={36} y={300} w={120} h={44} label="SERVERS" sub="VM01–03" />
      <Block x={176} y={300} w={120} h={44} label="NAS" sub="POOLS" />
      <Block x={316} y={300} w={120} h={44} label="BACKUP" sub="OFFSITE" />
      <Block x={456} y={300} w={120} h={44} label="OFFICE" sub="WIFI" />
      <Block x={596} y={300} w={128} h={44} label="WAREHOUSE" sub="VPN · CLOUD" />
    </svg>
  );
}

export function DefenceDepth({ className }: { className?: string }) {
  const layers = [
    "INTERNET",
    "EDGE FIREWALL",
    "IDENTITY + MFA",
    "NETWORK SEGMENTATION",
    "ENDPOINT",
    "APPLICATION",
    "DATA",
    "BACKUP",
  ];
  return (
    <svg
      className={cn("arch-canvas h-auto w-full text-cyan", className)}
      viewBox="0 0 280 510"
      role="img"
      aria-labelledby="defence-title defence-desc"
    >
      <title id="defence-title">Defensa en profundidad</title>
      <desc id="defence-desc">
        Un tráfico esperado atraviesa las capas. Un evento no autorizado se
        detiene en el perímetro.
      </desc>
      <Grid width={280} height={510} />
      <Connector d="M 80 28 V 470" />
      <circle r="4" fill="#00f0ff" className="packet-ok" aria-hidden="true" />
      <circle r="4" fill="#f87171" className="packet-block" aria-hidden="true" />
      {layers.map((label, index) => (
        <Block
          key={label}
          x={46}
          y={18 + index * 60}
          w={188}
          h={40}
          label={label}
          gate={label.includes("FIREWALL") || label.includes("MFA")}
        />
      ))}
    </svg>
  );
}

export function NetworkVlans({ className }: { className?: string }) {
  return (
    <svg
      className={cn("arch-canvas hidden h-auto w-full text-cyan lg:block", className)}
      viewBox="0 0 720 340"
      role="img"
      aria-labelledby="vlan-title vlan-desc"
    >
      <title id="vlan-title">Plano de red por VLAN</title>
      <desc id="vlan-desc">
        WAN, firewall y core. VLAN 10 oficina, 20 TPV, 30 invitados y 40 IoT.
      </desc>
      <Grid width={720} height={340} />
      <Connector d="M 360 28 V 92" />
      <path d="M 80 170 H 640" fill="none" stroke="currentColor" className="vlan-office" opacity="0.4" />
      <path d="M 80 214 H 640" fill="none" stroke="currentColor" className="vlan-tpv" opacity="0.4" />
      <path d="M 80 258 H 640" fill="none" stroke="currentColor" className="vlan-guest" opacity="0.45" />
      <path d="M 80 302 H 640" fill="none" stroke="currentColor" className="vlan-iot" opacity="0.45" />
      <Block x={296} y={12} w={128} h={36} label="WAN" />
      <Block x={296} y={80} w={128} h={40} label="FIREWALL" gate />
      <Block x={280} y={140} w={160} h={36} label="CORE" />
      <Block x={36} y={152} w={150} h={36} label="VLAN 10 OFFICE" />
      <Block x={36} y={196} w={150} h={36} label="VLAN 20 TPV" />
      <Block x={36} y={240} w={150} h={36} label="VLAN 30 GUEST" />
      <Block x={36} y={284} w={150} h={36} label="VLAN 40 IoT" />
      <Block x={534} y={152} w={150} h={36} label="AP / SWITCH" />
      <Block x={534} y={196} w={150} h={36} label="TPV / CAJA" />
      <Block x={534} y={240} w={150} h={36} label="GUEST WIFI" />
      <Block x={534} y={284} w={150} h={36} label="SENSORS" />
    </svg>
  );
}

export function IncidentPipeline({ className }: { className?: string }) {
  const steps = ["DETECT", "TRIAGE", "DIAGNOSE", "RESOLVE", "DOCUMENT", "PREVENT"];
  return (
    <svg
      className={cn("arch-canvas hidden h-auto w-full text-cyan md:block", className)}
      viewBox="0 0 720 130"
      role="img"
      aria-labelledby="incident-title incident-desc"
    >
      <title id="incident-title">Pipeline de incidencia</title>
      <desc id="incident-desc">
        Detectar, clasificar, diagnosticar, resolver, documentar y prevenir.
      </desc>
      <Grid width={720} height={130} />
      <Connector d="M 20 65 H 700" />
      {steps.map((label, index) => (
        <Block key={label} x={16 + index * 118} y={44} w={108} h={42} label={label} />
      ))}
    </svg>
  );
}

export function AgentFlowDesktop({ className }: { className?: string }) {
  const steps = [
    "EMAIL",
    "CLASIFICA",
    "EXTRAE",
    "CONSULTA ERP",
    "PROPONE",
    "APRUEBA",
    "ACTUALIZA",
    "RESPUESTA",
  ];
  return (
    <svg
      className={cn("arch-canvas hidden h-auto w-full text-cyan lg:block", className)}
      viewBox="0 0 760 140"
      role="img"
      aria-labelledby="agent-title agent-desc"
    >
      <title id="agent-title">Flujo de agente</title>
      <desc id="agent-desc">
        Un correo entra, se clasifica, extrae datos, consulta el ERP, propone,
        una persona aprueba y el sistema responde.
      </desc>
      <Grid width={760} height={140} />
      <Connector d="M 16 70 H 744" />
      {steps.map((label, index) => (
        <Block
          key={label}
          x={8 + index * 94}
          y={48}
          w={88}
          h={44}
          label={label}
          gate={label === "APRUEBA"}
        />
      ))}
    </svg>
  );
}

export function VerticalSteps({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ol className={cn("grid gap-2", className)}>
      {items.map((item, index) => (
        <li
          key={item}
          className="flex items-center gap-3 border border-border bg-background-panel px-3 py-3"
        >
          <span className="font-mono text-[0.62rem] tracking-[0.16em] text-cyan">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm">{item}</span>
        </li>
      ))}
    </ol>
  );
}
