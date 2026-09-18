import Link from "next/link";
import { CircuitLines } from "@/components/graphics/overlays";
import {
  companyConfig,
  formatPostalAddress,
  mailHref,
  phoneHref,
  whatsappHref,
} from "@/config/company";
import { footerPrioritySectors, iaSectorPath } from "@/data/ia-sectors";
import { contactHref, serviceLinks } from "@/data/site-nav";

const coveragePriority = [
  { href: "/servicios-informaticos/vera", label: "Vera" },
  { href: "/servicios-informaticos/mojacar", label: "Mojácar" },
  { href: "/servicios-informaticos/huercal-overa", label: "Huércal-Overa" },
  { href: "/servicios-informaticos/pulpi", label: "Pulpí" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background-secondary">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 text-cyan/20">
        <CircuitLines />
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5">
        <div>
          <p className="font-mono text-[0.62rem] tracking-[0.28em] text-cyan">
            {companyConfig.legalName.toUpperCase()}
          </p>
          <p className="mt-4 max-w-sm text-sm text-muted">
            {companyConfig.tagline}
          </p>
        </div>

        <div>
          <p className="tech-label">Servicios</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/inteligencia-artificial" scroll className="text-muted hover:text-cyan">
                Inteligencia artificial
              </Link>
            </li>
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} scroll className="text-muted hover:text-cyan">
                  {item.label.replace(", Wi-Fi y TPV", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="tech-label">IA por sector</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/ia-por-sector" scroll className="text-muted hover:text-cyan">
                Todos los modelos
              </Link>
            </li>
            {footerPrioritySectors.map((item) => (
              <li key={item.slug}>
                <Link
                  href={iaSectorPath(item.slug)}
                  scroll
                  className="text-muted hover:text-cyan"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="tech-label">Cobertura</p>
          <ul className="mt-4 space-y-2 text-sm">
            {coveragePriority.map((item) => (
              <li key={item.href}>
                <Link href={item.href} scroll className="text-muted hover:text-cyan">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/cobertura" scroll className="text-cyan hover:underline">
                Más municipios →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="tech-label">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={phoneHref()} className="hover:text-cyan">
                {companyConfig.phone}
              </a>
            </li>
            <li>
              <a href={mailHref()} className="hover:text-cyan">
                {companyConfig.email}
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
              <Link
                href={contactHref({ cta: "footer", origen: "/" })}
                scroll
                className="hover:text-cyan"
              >
                Diagnóstico
              </Link>
            </li>
            <li className="pt-4">{formatPostalAddress()}</li>
            <li>
              <Link href="/aviso-legal" className="hover:text-cyan">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="hover:text-cyan">
                Privacidad
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-cyan">
                Cookies
              </Link>
            </li>
            <li>
              <Link href="/terminos-y-condiciones" className="hover:text-cyan">
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {companyConfig.copyrightYear} {companyConfig.legalName}
          </p>
          <p>
            Infraestructura informática, seguridad e inteligencia artificial
            para empresas del Levante Almeriense.
          </p>
        </div>
      </div>
    </footer>
  );
}
