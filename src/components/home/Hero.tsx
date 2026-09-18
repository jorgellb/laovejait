import { CircuitLines, ScanDecor } from "@/components/graphics/overlays";
import { IsoCore } from "@/components/home/IsoCore";
import { CyberButton } from "@/components/ui/CyberButton";
import { TechBadge } from "@/components/ui/TechBadge";
import { technicianHref } from "@/config/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="scanline pointer-events-none absolute inset-0" />
      <ScanDecor />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 text-cyan/20">
        <CircuitLines />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="tech-label">
            SERVICIOS IT {"//"} IA GENERATIVA {"//"} LEVANTE ALMERIENSE
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[4.2rem] lg:leading-[0.95]">
            Infraestructura informática e inteligencia artificial para empresas.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
            Diseñamos, mantenemos y conectamos servidores, redes, seguridad,
            datos y sistemas de inteligencia artificial para que la tecnología
            soporte la operación real de la empresa.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CyberButton href="/contacto">Solicitar diagnóstico</CyberButton>
            <CyberButton href="#capacidades" variant="secondary">
              Explorar capacidades
            </CyberButton>
          </div>
          <p className="mt-4">
            <a
              href={technicianHref()}
              className="text-sm text-cyan hover:underline"
            >
              Hablar con un técnico
            </a>
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <TechBadge>SERVIDORES</TechBadge>
            <TechBadge>REDES</TechBadge>
            <TechBadge>CIBERSEGURIDAD</TechBadge>
            <TechBadge>IA PRIVADA</TechBadge>
            <TechBadge>AUTOMATIZACIÓN</TechBadge>
          </div>
        </div>
        <IsoCore />
      </div>
    </section>
  );
}
