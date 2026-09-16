import type { Metadata } from "next";
import { CircuitLines } from "@/components/graphics/overlays";
import { ContactForm } from "@/components/contact/ContactForm";
import { CyberButton } from "@/components/ui/CyberButton";
import {
  companyConfig,
  mailHref,
  phoneHref,
  technicianHref,
} from "@/config/company";
import { absoluteUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Contacto y diagnóstico informático",
  description:
    "Solicita un diagnóstico de infraestructura, redes, ciberseguridad o un proyecto de IA para tu empresa en el Levante Almeriense.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    url: absoluteUrl("/contacto"),
    title: "Contacto y diagnóstico informático | La Oveja",
    description:
      "Cuéntanos qué falla o qué quieres automatizar. Analizamos el entorno y proponemos una solución concreta.",
  },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 text-cyan/20">
        <CircuitLines />
      </div>
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_minmax(0,28rem)]">
      <div>
        <p className="tech-label">CONTACTO</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Solicitar diagnóstico
        </h1>
        <p className="mt-5 max-w-xl text-muted">
          Cuéntanos qué necesitas mejorar: servidores, red, seguridad, soporte
          técnico o automatización mediante inteligencia artificial. Analizaremos
          el problema y plantearemos una solución adecuada a tu entorno.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-muted">
          <li>
            Teléfono:{" "}
            <a href={phoneHref()} className="text-cyan hover:underline">
              {companyConfig.phone}
            </a>
          </li>
          <li>
            Correo:{" "}
            <a href={mailHref()} className="text-cyan hover:underline">
              {companyConfig.email}
            </a>
          </li>
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CyberButton href={technicianHref()} variant="secondary">
            Hablar con un técnico
          </CyberButton>
        </div>
      </div>
      <ContactForm />
      </div>
    </section>
  );
}
