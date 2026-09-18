"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { CyberButton } from "@/components/ui/CyberButton";
import {
  navGroups,
  primaryNav,
  type NavGroup,
} from "@/data/site-nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [openFor, setOpenFor] = useState<string | null>(null);
  const [compact, setCompact] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const open = openFor === pathname;

  function close() {
    setOpenFor(null);
    setMobileGroup(null);
    document.body.style.overflow = "";
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  function toggleMenu() {
    setOpenFor((current) => (current === pathname ? null : pathname));
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onScroll() {
      setCompact(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-[#030712]/80 backdrop-blur-md transition-[padding] duration-200",
      )}
    >
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-cyan focus:px-3 focus:py-2 focus:text-[#031014]"
      >
        Saltar al contenido
      </a>
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6",
          compact ? "py-2" : "py-3",
        )}
      >
        <Link href="/" className="flex items-center gap-3" onClick={close} scroll>
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

        <nav
          className="hidden items-center gap-1 xl:flex"
          aria-label="Principal"
        >
          {navGroups
            .filter((group) => group.id !== "cobertura")
            .map((group) => (
              <DesktopGroup
                key={group.id}
                group={group}
                pathname={pathname}
                onNavigate={close}
              />
            ))}
          <Link
            href={primaryNav.iaPorSector.href}
            scroll
            className="whitespace-nowrap px-3 py-2 text-sm text-cyan transition-colors hover:text-foreground"
            onClick={close}
          >
            {primaryNav.iaPorSector.label}
          </Link>
          {navGroups
            .filter((group) => group.id === "cobertura")
            .map((group) => (
              <DesktopGroup
                key={group.id}
                group={group}
                pathname={pathname}
                onNavigate={close}
              />
            ))}
          <Link
            href={primaryNav.contacto.href}
            scroll
            className="whitespace-nowrap px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            onClick={close}
          >
            {primaryNav.contacto.label}
          </Link>
        </nav>

        <div className="hidden items-center md:flex">
          <CyberButton
            href={primaryNav.diagnostico.href}
            variant="secondary"
            onClick={close}
          >
            {primaryNav.diagnostico.label}
          </CyberButton>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-border xl:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={toggleMenu}
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
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background-secondary xl:hidden"
        >
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Móvil">
            <Link href="/" scroll className="px-2 py-3 text-foreground" onClick={close}>
              Inicio
            </Link>
            {navGroups
              .filter((group) => group.id !== "cobertura")
              .map((group) => {
                const expanded = mobileGroup === group.id;
                return (
                  <div key={group.id} className="border-b border-border/70">
                    <button
                      type="button"
                      className="flex w-full min-h-11 items-center justify-between px-2 py-3 text-left text-foreground"
                      aria-expanded={expanded}
                      aria-controls={`mobile-${group.id}`}
                      onClick={() =>
                        setMobileGroup((current) =>
                          current === group.id ? null : group.id,
                        )
                      }
                    >
                      <span>{group.label}</span>
                      <span className="font-mono text-cyan" aria-hidden="true">
                        {expanded ? "−" : "+"}
                      </span>
                    </button>
                    {expanded ? (
                      <ul id={`mobile-${group.id}`} className="pb-3 pl-3">
                        <li>
                          <Link
                            href={group.href}
                            scroll
                            className="block min-h-11 px-2 py-2 text-sm text-cyan"
                            onClick={close}
                          >
                            Ver {group.label.toLowerCase()}
                          </Link>
                        </li>
                        {group.items.map((item) => (
                          <li key={`${group.id}-${item.href}-${item.label}`}>
                            <Link
                              href={item.href}
                              scroll
                              className="block min-h-11 px-2 py-2 text-sm text-muted"
                              onClick={close}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            <Link
              href={primaryNav.iaPorSector.href}
              scroll
              className="px-2 py-3 text-cyan"
              onClick={close}
            >
              {primaryNav.iaPorSector.label}
            </Link>
            <Link
              href="/cobertura"
              scroll
              className="px-2 py-3 text-foreground"
              onClick={close}
            >
              Cobertura
            </Link>
            <Link
              href={primaryNav.contacto.href}
              scroll
              className="px-2 py-3 text-foreground"
              onClick={close}
            >
              {primaryNav.contacto.label}
            </Link>
            <div className="mt-3">
              <CyberButton
                href={primaryNav.diagnostico.href}
                className="w-full"
                onClick={close}
              >
                {primaryNav.diagnostico.label}
              </CyberButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function DesktopGroup({
  group,
  pathname,
  onNavigate,
}: {
  group: NavGroup;
  pathname: string;
  onNavigate: () => void;
}) {
  const panelId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [openFor, setOpenFor] = useState<string | null>(null);
  const columns = group.id === "cobertura" ? "sm:grid-cols-2 min-w-[22rem]" : "min-w-[16rem]";
  const open = openFor === pathname;

  function closePanel() {
    setOpenFor(null);
    onNavigate();
  }

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpenFor(pathname)}
      onMouseLeave={() => setOpenFor(null)}
      onFocus={() => setOpenFor(pathname)}
      onBlur={(event) => {
        if (!wrapRef.current?.contains(event.relatedTarget as Node)) {
          setOpenFor(null);
        }
      }}
    >
      <Link
        href={group.href}
        scroll
        className="inline-flex items-center gap-1 whitespace-nowrap px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={closePanel}
      >
        {group.label}
        <span aria-hidden="true" className="font-mono text-[0.6rem] text-cyan">
          ▼
        </span>
      </Link>
      <div
        id={panelId}
        className={cn(
          "absolute top-full left-0 z-50 pt-2 transition duration-150",
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
        )}
      >
        <ul
          className={cn(
            "grid gap-1 border border-border bg-background-secondary p-3 shadow-[0_18px_40px_rgba(0,0,0,0.45)]",
            columns,
          )}
        >
          {group.items.map((item) => (
            <li key={`${item.href}-${item.label}`}>
              <Link
                href={item.href}
                scroll
                className="block px-3 py-2 text-sm text-muted transition-colors hover:bg-cyan/5 hover:text-cyan"
                onClick={closePanel}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
