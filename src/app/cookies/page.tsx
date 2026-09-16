import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Información provisional sobre cookies de La Oveja. Pendiente de inventario real.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="tech-label">INFORMACIÓN PROVISIONAL</p>
      <h1 className="mt-4 text-4xl font-semibold">Cookies</h1>
      <p className="mt-6 text-muted">
        Esta web no instala, de momento, cookies de analítica ni de publicidad.
        Si más adelante se añade medición, habrá que actualizar este texto y el
        mecanismo de consentimiento.
      </p>
      <p className="mt-4 text-muted">
        Pueden existir cookies técnicas imprescindibles del propio hosting o del
        formulario. El inventario definitivo se publicará cuando esté cerrado.
      </p>
      <p className="mt-8">
        <Link href="/" className="text-cyan hover:underline">
          Volver al inicio
        </Link>
      </p>
    </section>
  );
}
