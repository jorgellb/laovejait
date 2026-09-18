import type { Metadata } from "next";
import Link from "next/link";
import { CyberButton } from "@/components/ui/CyberButton";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-24 sm:px-6">
      <p className="tech-label">ERROR 404</p>
      <h1 className="text-4xl font-semibold">Ruta no encontrada</h1>
      <p className="text-muted">
        Esa URL no existe en este sitio. Vuelve al inicio, consulta los
        servicios actuales o abre el formulario de contacto.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <CyberButton href="/">Inicio</CyberButton>
        <CyberButton href="/servicios" variant="secondary">
          Servicios
        </CyberButton>
        <Link href="/contacto" className="px-3 py-3 text-sm text-cyan hover:underline">
          Contacto
        </Link>
      </div>
    </section>
  );
}
