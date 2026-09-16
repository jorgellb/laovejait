import type { Metadata } from "next";
import Link from "next/link";
import { legalPlaceholders, mailHref } from "@/config/company";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Información provisional sobre protección de datos de La Oveja. Texto jurídico pendiente de revisión.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="tech-label">{legalPlaceholders.privacyPolicy}</p>
      <h1 className="mt-4 text-4xl font-semibold">Política de privacidad</h1>
      <p className="mt-6 text-muted">
        Este texto es un marcador. Falta confirmar el responsable del
        tratamiento ({legalPlaceholders.dataController}), los datos fiscales y
        la redacción jurídica definitiva. No debe tomarse como política
        publicada.
      </p>
      <p className="mt-4 text-muted">
        Contacto actual:{" "}
        <a href={mailHref()} className="text-cyan hover:underline">
          info@laoveja.es
        </a>
        . El formulario de contacto recogerá nombre, empresa, email, teléfono,
        municipio, servicio y mensaje únicamente para atender la solicitud.
        Hasta que exista base legal y un encargado de tratamiento definidos,
        no se debe usar el formulario como canal de datos sensibles.
      </p>
      <p className="mt-8">
        <Link href="/contacto" className="text-cyan hover:underline">
          Volver a contacto
        </Link>
      </p>
    </section>
  );
}
