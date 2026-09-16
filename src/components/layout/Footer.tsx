import Link from "next/link";
import { CircuitLines } from "@/components/graphics/overlays";
import {
  companyConfig,
  mailHref,
  phoneHref,
  whatsappHref,
} from "@/config/company";
import { municipalities } from "@/data/municipalities";
import { mainServices } from "@/data/services";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background-secondary">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 text-cyan/20">
        <CircuitLines />
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-mono text-[0.62rem] tracking-[0.28em] text-cyan">
            LA OVEJA
          </p>
          <p className="mt-4 max-w-sm text-sm text-muted">
            {companyConfig.tagline}
          </p>
          <p className="mt-6 flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.16em] text-muted">
            <span className="size-2 bg-cyan" />
            SYSTEM STATUS {"//"} OPERATIONAL
          </p>
        </div>

        <div>
          <p className="tech-label">Servicios</p>
          <ul className="mt-4 space-y-2 text-sm">
            {mainServices.map((service) => (
              <li key={service.id}>
                <Link href={service.href} className="text-muted hover:text-cyan">
                  {service.title.replace(" para Empresas", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="tech-label">Municipios</p>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            {municipalities.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/servicios-informaticos/${item.slug}`}
                  className="text-muted hover:text-cyan"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="tech-label">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link href="/contacto" className="hover:text-cyan">
                Formulario de diagnóstico
              </Link>
            </li>
            <li>
              <a href={phoneHref()} className="hover:text-cyan">
                {companyConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref()}
                className="hover:text-cyan"
                rel="noopener noreferrer"
                target="_blank"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={mailHref()} className="hover:text-cyan">
                {companyConfig.email}
              </a>
            </li>
            <li className="pt-4">
              <Link href="/privacidad" className="hover:text-cyan">
                Privacidad
              </Link>
            </li>
            <li>
              <Link href="/aviso-legal" className="hover:text-cyan">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-cyan">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="tech-label">LEVANTE NETWORK</p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.62rem] tracking-[0.14em] text-muted">
                {municipalities.map((item) => (
                  <li key={item.slug} className="flex items-center gap-2">
                    <span className="size-1.5 bg-cyan/70" aria-hidden="true" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-mono text-[0.62rem] tracking-[0.22em] text-cyan/80">
              INFRASTRUCTURE {"//"} AI {"//"} SECURITY
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {companyConfig.copyrightYear} {companyConfig.name}</p>
          <p>
            Servicios informáticos e integración de inteligencia artificial para
            empresas del Levante Almeriense.
          </p>
        </div>
      </div>
    </footer>
  );
}
