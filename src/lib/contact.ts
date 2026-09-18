import { companyConfig } from "@/config/company";
import {
  serviceInquiryOptions,
  type ServiceInquiryOption,
} from "@/data/services";

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  municipality: string;
  service: string;
  message: string;
  privacy: boolean;
  website?: string;
};

export type ContactResult =
  | { ok: true; delivery: "email" | "logged" }
  | { ok: false; error: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isServiceOption(value: string): value is ServiceInquiryOption {
  return (serviceInquiryOptions as readonly string[]).includes(value);
}

export function validateContactPayload(
  input: ContactPayload,
): ContactResult | { ok: true; data: ContactPayload } {
  if (input.website && input.website.trim() !== "") {
    return { ok: true, delivery: "logged" };
  }

  const name = input.name.trim();
  const company = input.company.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();
  const municipality = input.municipality.trim();
  const service = input.service.trim();
  const message = input.message.trim();

  if (name.length < 2) {
    return { ok: false, error: "Indica un nombre válido." };
  }
  if (company.length < 2) {
    return { ok: false, error: "Indica el nombre de la empresa." };
  }
  if (!emailPattern.test(email)) {
    return { ok: false, error: "Indica un correo electrónico válido." };
  }
  if (phone.length < 9) {
    return { ok: false, error: "Indica un teléfono de contacto." };
  }
  if (!municipality) {
    return { ok: false, error: "Selecciona un municipio." };
  }
  if (!isServiceOption(service)) {
    return { ok: false, error: "Selecciona un servicio." };
  }
  if (message.length < 10) {
    return { ok: false, error: "Describe brevemente qué necesitas." };
  }
  if (!input.privacy) {
    return {
      ok: false,
      error: "Debes aceptar la información de protección de datos.",
    };
  }

  return {
    ok: true,
    data: {
      name,
      company,
      email,
      phone,
      municipality,
      service,
      message,
      privacy: true,
    },
  };
}

export async function deliverContact(payload: ContactPayload): Promise<ContactResult> {
  const validated = validateContactPayload(payload);
  if (!validated.ok) return validated;
  if ("delivery" in validated) return { ok: true, delivery: "logged" };

  const { data } = validated;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? companyConfig.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "La Oveja <noreply@laoveja.es>";

  if (!apiKey || !to) {
    console.info("Contacto recibido (entrega no configurada)", {
      name: data.name,
      company: data.company,
      municipality: data.municipality,
      service: data.service,
    });
    return { ok: true, delivery: "logged" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `[La Oveja] ${data.service} · ${data.company}`,
      text: [
        `Nombre: ${data.name}`,
        `Empresa: ${data.company}`,
        `Email: ${data.email}`,
        `Teléfono: ${data.phone}`,
        `Municipio: ${data.municipality}`,
        `Servicio: ${data.service}`,
        "",
        data.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return {
      ok: false,
      error:
        "No hemos podido enviar el mensaje ahora mismo. Inténtalo de nuevo o llama al teléfono publicado en la web.",
    };
  }

  return { ok: true, delivery: "email" };
}
