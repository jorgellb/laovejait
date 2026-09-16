export type FieldLogProps = {
  location: string;
  title: string;
  summary: string;
  services: string[];
  imageSrc?: string;
};

export function FieldLog({ imageSrc, summary }: FieldLogProps) {
  if (!imageSrc || !summary) return null;
  return null;
}
