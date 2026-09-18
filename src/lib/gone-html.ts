import { companyConfig, siteUrl } from "@/config/company";

export function goneHtml(): string {
  const home = siteUrl;
  const services = `${siteUrl}/#servicios`;
  const contact = `${siteUrl}/contacto`;
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow, nocache" />
    <title>Contenido retirado | ${companyConfig.legalName}</title>
    <style>
      :root { color-scheme: dark; }
      body {
        margin: 0;
        min-height: 100vh;
        background: #030712;
        color: #f8fafc;
        font-family: ui-sans-serif, system-ui, sans-serif;
        line-height: 1.6;
      }
      main { max-width: 48rem; margin: 0 auto; padding: 6rem 1.25rem; }
      .label {
        font-family: ui-monospace, monospace;
        font-size: 0.7rem;
        letter-spacing: 0.22em;
        color: #00f0ff;
        text-transform: uppercase;
      }
      h1 { font-size: 2rem; font-weight: 600; margin: 1rem 0; }
      p { color: #94a3b8; }
      .actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.75rem; }
      a {
        color: #00f0ff;
        text-decoration: none;
        border: 1px solid #00f0ff;
        padding: 0.7rem 1.1rem;
        font-family: ui-monospace, monospace;
        font-size: 0.72rem;
        letter-spacing: 0.16em;
        text-transform: uppercase;
      }
      a.secondary { background: transparent; }
      a.primary { background: #00f0ff; color: #031014; }
    </style>
  </head>
  <body>
    <main>
      <p class="label">HTTP 410</p>
      <h1>Este contenido ya no está disponible</h1>
      <p>
        La URL solicitada pertenecía a una actividad anterior de este dominio
        (desarrollo y diseño web, WordPress, ecommerce u otros servicios
        digitales) que ${companyConfig.legalName} ya no presta. No existe un
        equivalente en la web actual.
      </p>
      <div class="actions">
        <a class="primary" href="${home}">Inicio</a>
        <a class="secondary" href="${services}">Servicios actuales</a>
        <a class="secondary" href="${contact}">Contacto</a>
      </div>
    </main>
  </body>
</html>`;
}
