import {
  PALETTE_TOKENS,
  type Palette,
  type PaletteToken,
  type ParsedPaletteConfig,
} from "@/types/palette";

const KNOWN_TOKENS = new Set<string>(PALETTE_TOKENS);

export function parsePaletteConfig(text: string): ParsedPaletteConfig {
  const palettes: Record<string, Palette> = {};
  let active = "";
  let current: string | null = null;

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith(";")) continue;

    if (line.startsWith("active=")) {
      active = line.slice("active=".length).trim();
      continue;
    }

    const sectionMatch = line.match(/^\[palette\s+([^\]]+)\]$/i);
    if (sectionMatch) {
      current = sectionMatch[1].trim();
      palettes[current] ??= {};
      continue;
    }

    const pairMatch = line.match(/^([a-zA-Z0-9-]+)\s*=\s*(.+)$/);
    if (pairMatch && current) {
      const key = pairMatch[1];
      const value = pairMatch[2].trim();
      if (KNOWN_TOKENS.has(key)) {
        palettes[current][key as PaletteToken] = value;
      }
    }
  }

  return { active, palettes };
}

export function applyPalette(palette: Palette): void {
  const root = document.documentElement;
  for (const [token, value] of Object.entries(palette)) {
    if (value) root.style.setProperty(`--${token}`, value);
  }
}

export async function fetchPaletteConfig(
  url = "/palette-config.txt",
): Promise<string> {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to load ${url}: HTTP ${response.status}`);
  }
  return response.text();
}
