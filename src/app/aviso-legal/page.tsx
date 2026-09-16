import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Aviso legal provisional de La Oveja. Pendiente de datos fiscales y redacción jurídica.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/aviso-legal" },
};

export default function LegalPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="tech-label">INFORMACIÓN PROVISIONAL</p>
      <h1 className="mt-4 text-4xl font-semibold">Aviso legal</h1>
      <p className="mt-6 text-muted">
        Faltan razón social, CIF, domicilio y datos de inscripción. Este aviso
        no sustituye la información legal obligatoria cuando el sitio se publique
        con actividad económica.
      </p>
      <p className="mt-4 text-muted">
        El dominio de referencia es https://laoveja.es. El resto de datos
        identificativos se añadirán cuando el propietario los facilite.
      </p>
      <p className="mt-8">
        <Link href="/" className="text-cyan hover:underline">
          Volver al inicio
        </Link>
      </p>
    </section>
  );
}
