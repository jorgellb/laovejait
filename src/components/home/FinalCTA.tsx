import { CircuitLines } from "@/components/graphics/overlays";
import { SectionFrame } from "@/components/graphics/SectionFrame";
import { ContactForm } from "@/components/contact/ContactForm";
import { CyberButton } from "@/components/ui/CyberButton";
import { technicianHref } from "@/config/company";

export function FinalCTA({
  showForm = true,
}: {
  showForm?: boolean;
}) {
  return (
    <SectionFrame id="contacto" className="scroll-mt-28" divider={false}>
      <div className="pointer-events-none absolute inset-x-0 top-8 h-24 text-cyan/15">
        <CircuitLines />
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_minmax(0,28rem)]">
        <div>
          <p className="tech-label">SIGUIENTE PASO</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Tu infraestructura no debería frenar a tu empresa.
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            Cuéntanos qué necesitas mejorar: servidores, red, seguridad, soporte
            técnico o automatización mediante inteligencia artificial.
            Analizaremos el problema y plantearemos una solución adecuada a tu
            entorno.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CyberButton href="/contacto">Solicitar diagnóstico</CyberButton>
            <CyberButton href={technicianHref()} variant="secondary">
              Hablar con un técnico
            </CyberButton>
          </div>
        </div>
        {showForm ? <ContactForm /> : null}
      </div>
    </SectionFrame>
  );
}
