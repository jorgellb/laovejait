# La Oveja

Web de servicios informáticos e integración de IA generativa para empresas del Levante Almeriense.

- Producción: [https://laoveja.es](https://laoveja.es)
- Repositorio: [https://github.com/jorgellb/laovejait.git](https://github.com/jorgellb/laovejait.git)

## Stack

Next.js (App Router), React, TypeScript, Tailwind CSS y Framer Motion.

## Desarrollo local

```bash
npm install
npm run dev
```

Scripts:

```bash
npm run lint
npm run typecheck
npm run build
```

## Variables de entorno

Copia `.env.example` a `.env.local`. En Vercel, define las mismas claves en Project Settings → Environment Variables.

| Clave | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canónica. En producción: `https://laoveja.es` |
| `RESEND_API_KEY` | Opcional. Envío del formulario de contacto |
| `CONTACT_TO_EMAIL` | Opcional. Buzón de destino |
| `CONTACT_FROM_EMAIL` | Opcional. Remitente (dominio verificado en Resend) |

Sin `RESEND_API_KEY` y `CONTACT_TO_EMAIL`, el formulario valida los datos pero no entrega el mensaje a un buzón.

## Despliegue en Vercel

1. Sube el código a `https://github.com/jorgellb/laovejait.git`.
2. En Vercel: Add New Project → Import ese repositorio.
3. Framework preset: Next.js. Build command: `npm run build`. Output: el default de Next.
4. Environment variables: `NEXT_PUBLIC_SITE_URL=https://laoveja.es`.
5. Domains: añade `laoveja.es` y `www.laoveja.es`. Redirige `www` a apex (o al revés) en el panel de Vercel.
6. En el DNS del dominio, apunta según te indique Vercel (normalmente registros A/ALIAS para apex y CNAME para `www`).

No hace falta `vercel.json` de framework: Next.js se detecta solo. El `vercel.json` del repo solo añade cabeceras de seguridad.

## Datos pendientes del negocio

Teléfono/WhatsApp (`+34 623 808 058`) y correo (`info@laoveja.es`) ya están en `src/config/company.ts` y en el JSON-LD. Pendientes: dirección, CIF, coordenadas, horarios y redes sociales.

Las páginas `/privacidad`, `/aviso-legal` y `/cookies` son marcadores jurídicos, no textos legales definitivos.
