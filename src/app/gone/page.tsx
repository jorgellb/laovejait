import type { Metadata } from "next";
import Link from "next/link";
import { CyberButton } from "@/components/ui/CyberButton";

export const metadata: Metadata = {
  title: "Contenido retirado",
  description:
    "Esta URL correspondía a un servicio que ya no se ofrece en laoveja.es.",
  robots: { index: false, follow: false, nocache: true },
};

export default function GonePage() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-24 sm:px-6">
      <p className="tech-label">HTTP 410</p>
      <h1 className="text-4xl font-semibold">Este contenido ya no está disponible</h1>
      <p className="text-muted">
        La URL solicitada pertenecía a una actividad anterior de este dominio
        (desarrollo y diseño web, WordPress, ecommerce u otros servicios
        digitales) que La Oveja IT ya no presta. No existe un equivalente en
        la web actual.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <CyberButton href="/">Inicio</CyberButton>
        <CyberButton href="/servicios" variant="secondary">
          Servicios actuales
        </CyberButton>
        <Link href="/contacto" className="px-3 py-3 text-sm text-cyan hover:underline">
          Contacto
        </Link>
      </div>
    </section>
  );
}
