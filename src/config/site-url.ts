export const CANONICAL_SITE_URL = "https://laoveja.es";

export function resolveSiteUrl(raw: string | undefined): string {
  const trimmed = raw?.trim() ?? "";
  if (!trimmed) {
    return CANONICAL_SITE_URL;
  }

  const candidate = /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const url = new URL(candidate);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return CANONICAL_SITE_URL;
    }
    return url.origin;
  } catch {
    return CANONICAL_SITE_URL;
  }
}
