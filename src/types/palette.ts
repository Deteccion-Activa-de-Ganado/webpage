export const PALETTE_TOKENS = [
  "bg-main",
  "primary",
  "secondary",
  "brand",
  "text-primary",
  "text-muted",
  "text-subtle",
  "border-default",
  "surface",
  "cta-hover",
] as const;

export type PaletteToken = (typeof PALETTE_TOKENS)[number];

export type Palette = Partial<Record<PaletteToken, string>>;

export type ParsedPaletteConfig = {
  active: string;
  palettes: Record<string, Palette>;
};
