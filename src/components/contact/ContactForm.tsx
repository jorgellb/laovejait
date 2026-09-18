"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitContact } from "@/app/contacto/actions";
import { CyberButton } from "@/components/ui/CyberButton";
import { GlowBorder } from "@/components/ui/GlowBorder";
import { municipalities } from "@/data/municipalities";
import { serviceInquiryOptions } from "@/data/services";

const initialState = { ok: false, error: "", success: "" };

export function ContactForm({
  defaultService = "",
  sector = "",
  sectorLabel = "",
  cta = "",
  origen = "",
}: {
  defaultService?: string;
  sector?: string;
  sectorLabel?: string;
  cta?: string;
  origen?: string;
}) {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );
  const processLabel = sector
    ? "Proceso que quieres mejorar"
    : "Mensaje";

  return (
    <GlowBorder className="relative p-5 sm:p-6">
      <p className="tech-label">SOLICITUD</p>
      <h3 className="mt-3 text-xl font-semibold">Diagnóstico inicial</h3>
      {sectorLabel ? (
        <p className="mt-2 font-mono text-[0.62rem] tracking-[0.16em] text-cyan uppercase">
          Modelo {"//"} {sectorLabel}
        </p>
      ) : null}
      <form action={formAction} className="mt-6 grid gap-4">
        <input type="hidden" name="sector" value={sector} />
        <input type="hidden" name="cta" value={cta} />
        <input type="hidden" name="origen" value={origen} />
        <input type="hidden" name="source_url" value={origen} />
        <input type="hidden" name="source_page" value={origen} />
        <input type="hidden" name="cta_position" value={cta} />
        <label className="grid gap-1 text-sm">
          Nombre
          <input
            name="name"
            required
            autoComplete="name"
            className="border border-border bg-background px-3 py-2 text-foreground"
          />
        </label>
        <label className="grid gap-1 text-sm">
          Empresa
          <input
            name="company"
            required
            autoComplete="organization"
            className="border border-border bg-background px-3 py-2 text-foreground"
          />
        </label>
        <label className="grid gap-1 text-sm">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="border border-border bg-background px-3 py-2 text-foreground"
          />
        </label>
        <label className="grid gap-1 text-sm">
          Teléfono
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="border border-border bg-background px-3 py-2 text-foreground"
          />
        </label>
        <label className="grid gap-1 text-sm">
          Municipio
          <select
            name="municipality"
            required
            className="border border-border bg-background px-3 py-2 text-foreground"
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona
            </option>
            {municipalities.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
            <option value="Otro">Otro</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          Servicio
          <select
            name="service"
            required
            className="border border-border bg-background px-3 py-2 text-foreground"
            defaultValue={defaultService}
          >
            <option value="" disabled>
              Selecciona
            </option>
            {serviceInquiryOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          {processLabel}
          <textarea
            name="message"
            required
            rows={5}
            className="border border-border bg-background px-3 py-2 text-foreground"
          />
        </label>
        <div aria-hidden="true" className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden">
          <input name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <label className="flex items-start gap-3 text-sm text-muted">
          <input name="privacy" type="checkbox" value="on" required className="mt-1" />
          <span>
            He leído y acepto la{" "}
            <Link href="/privacidad" className="text-cyan underline-offset-2 hover:underline">
              política de privacidad
            </Link>
            .
          </span>
        </label>
        {state.error ? (
          <p className="text-sm text-red-300" role="alert">
            {state.error}
          </p>
        ) : null}
        {state.success ? (
          <p className="text-sm text-cyan" role="status">
            {state.success}
          </p>
        ) : null}
        <CyberButton type="submit" disabled={pending}>
          {pending ? "Enviando…" : "Solicitar diagnóstico"}
        </CyberButton>
      </form>
    </GlowBorder>
  );
}
