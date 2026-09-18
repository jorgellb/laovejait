"use server";

import { deliverContact } from "@/lib/contact";

export type ContactFormState = {
  ok: boolean;
  error: string;
  success: string;
};

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const result = await deliverContact({
    name: String(formData.get("name") ?? ""),
    company: String(formData.get("company") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    municipality: String(formData.get("municipality") ?? ""),
    service: String(formData.get("service") ?? ""),
    message: String(formData.get("message") ?? ""),
    privacy: formData.get("privacy") === "on",
    website: String(formData.get("website") ?? ""),
  });

  if (!result.ok) {
    return { ok: false, error: result.error, success: "" };
  }

  return {
    ok: true,
    error: "",
    success: "Solicitud enviada. Te contactaremos con los datos que has facilitado.",
  };
}
