"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CyberButton } from "@/components/ui/CyberButton";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#inteligencia-artificial", label: "Inteligencia Artificial" },
  { href: "/#infraestructura", label: "Infraestructura" },
  { href: "/#ciberseguridad", label: "Ciberseguridad" },
  { href: "/#cobertura", label: "Cobertura" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#030712]/80 backdrop-blur-md">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-cyan focus:px-3 focus:py-2 focus:text-[#031014]"
      >
        Saltar al contenido
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={close}>
          <span aria-hidden="true" className="grid size-8 grid-cols-2 gap-0.5">
            <span className="bg-cyan" />
            <span className="border border-cyan" />
            <span className="border border-violet/80" />
            <span className="bg-violet/80" />
          </span>
          <span className="leading-none">
            <span className="block font-mono text-[0.62rem] tracking-[0.28em] text-cyan">
              CORE
            </span>
            <span className="block text-sm font-semibold tracking-[0.18em]">
              LA OVEJA
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex" aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 2xl:flex">
          <p className="flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.14em] text-muted">
            <span className="pulse-dot size-2 rounded-full bg-cyan" />
            CORE_IA &amp; INFRAESTRUCTURA: ONLINE
          </p>
          <CyberButton href="/contacto" variant="secondary">
            Solicitar asistencia
          </CyberButton>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-border lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn("block h-px w-5 bg-foreground", open && "opacity-0")}
            />
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="menu-movil"
          className="border-t border-border bg-background-secondary lg:hidden"
        >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Móvil">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-2 py-3 text-foreground"
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
          <p className="mt-2 flex items-center gap-2 px-2 font-mono text-[0.62rem] tracking-[0.14em] text-muted">
            <span className="pulse-dot size-2 rounded-full bg-cyan" />
            CORE_IA &amp; INFRAESTRUCTURA: ONLINE
          </p>
          <div className="mt-3">
            <CyberButton href="/contacto" className="w-full">
              Solicitar asistencia
            </CyberButton>
          </div>
        </nav>
      </div>
      ) : null}
    </header>
  );
}
