import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { companyConfig, mailHref } from "@/config/company";
import { documentMetadata } from "@/lib/metadata";

export const metadata: Metadata = documentMetadata(
  "/cookies",
  "Política de cookies",
  "Política de cookies de La Oveja IT basada en las cookies y servicios realmente utilizados en laoveja.es.",
);

export default function CookiesPage() {
  return (
    <LegalDocument
      eyebrow="COOKIES"
      title="Política de cookies"
      updated={companyConfig.legalUpdated}
    >
      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio puede guardar en el
        dispositivo del usuario para hacer funcionar la página, recordar
        preferencias o medir el uso. Esta política describe únicamente lo que
        hace {companyConfig.url} según el código y las dependencias actuales.
      </p>

      <h2>2. Inventario real</h2>
      <p>
        El código de esta web <strong>no instala cookies propias</strong> de
        analítica, publicidad, redes sociales ni personalización comercial. No
        hay Google Analytics, Meta Pixel, Hotjar, Plausible, Google Maps
        embebido ni banners de marketing.
      </p>
      <p>
        Las fuentes tipográficas se sirven de forma autohospedada mediante el
        sistema de fuentes de Next.js. No se carga Google Fonts en el
        navegador del visitante.
      </p>
      <p>Sí pueden existir cookies o almacenamientos <strong>técnicos</strong> ajenos al contenido editorial:</p>
      <ul>
        <li>
          Cookies o identificadores que el alojamiento (Vercel) pueda fijar
          para entregar la página, equilibrar la carga, proteger el
          despliegue o gestionar sesiones de previsualización. Son propias
          de la infraestructura, no de una campaña de medición definida por{" "}
          {companyConfig.legalName}.
        </li>
        <li>
          Datos técnicos de sesión del navegador estrictamente necesarios
          para mostrar el sitio.
        </li>
      </ul>
      <p>
        El formulario de contacto no establece cookies de seguimiento. El
        envío se procesa en el servidor; si el correo está configurado, se
        utiliza Resend como proveedor de entrega, sin insertar un script de
        seguimiento en el navegador.
      </p>

      <h2>3. Categorías</h2>
      <ul>
        <li>
          <strong>Técnicas / necesarias:</strong> posibles cookies de
          infraestructura del hosting. Base: interés legítimo en prestar el
          servicio de la web de forma segura.
        </li>
        <li>
          <strong>Preferencias:</strong> no se utilizan.
        </li>
        <li>
          <strong>Analíticas:</strong> no se utilizan.
        </li>
        <li>
          <strong>Marketing:</strong> no se utilizan.
        </li>
      </ul>

      <h2>4. Consentimiento</h2>
      <p>
        Al no emplearse cookies no esenciales, este sitio no muestra un
        banner de consentimiento de cookies. Si en el futuro se incorporase
        medición o publicidad, se actualizaría esta política y se solicitaría
        consentimiento previo.
      </p>

      <h2>5. Cómo gestionar cookies en el navegador</h2>
      <p>
        El usuario puede bloquear o eliminar cookies técnicas desde la
        configuración de su navegador. Si se bloquean cookies necesarias del
        hosting, es posible que alguna función de entrega deje de comportarse
        con normalidad.
      </p>

      <h2>6. Más información</h2>
      <p>
        El tratamiento de datos personales se describe en la{" "}
        <Link href="/privacidad">política de privacidad</Link>. Para
        cualquier duda:{" "}
        <a href={mailHref()}>{companyConfig.email}</a>.
      </p>
    </LegalDocument>
  );
}
