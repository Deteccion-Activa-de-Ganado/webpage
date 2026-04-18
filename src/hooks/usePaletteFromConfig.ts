import { useEffect } from "react";
import {
  applyPalette,
  fetchPaletteConfig,
  parsePaletteConfig,
} from "@/lib/palette";

export function usePaletteFromConfig(): void {
  useEffect(() => {
    let cancelled = false;

    fetchPaletteConfig()
      .then((text) => {
        if (cancelled) return;
        const { active, palettes } = parsePaletteConfig(text);
        const palette = palettes[active];
        if (palette) {
          applyPalette(palette);
          document.documentElement.setAttribute("data-palette", active);
        }
      })
      .catch((err: unknown) => {
        console.warn("[DAG] Could not load palette-config.txt", err);
      });

    return () => {
      cancelled = true;
    };
  }, []);
}
