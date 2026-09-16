import Link from "next/link";
import { CyberButton } from "@/components/ui/CyberButton";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-24 sm:px-6">
      <p className="tech-label">ERROR 404</p>
      <h1 className="text-4xl font-semibold">Ruta no encontrada</h1>
      <p className="text-muted">
        Esa URL no existe en este sitio. Vuelve al inicio o abre una landing
        municipal del Levante Almeriense.
      </p>
      <div className="flex gap-3">
        <CyberButton href="/">Inicio</CyberButton>
        <Link href="/#cobertura" className="px-3 py-3 text-sm text-cyan">
          Ver cobertura
        </Link>
      </div>
    </section>
  );
}
