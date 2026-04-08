export function parseConfig(text) {
  const lines = text.split(/\r?\n/)
  const palettes = {}
  let active = ''
  let currentPalette = ''

  for (const line of lines) {
    const raw = line.trim()
    if (!raw || raw.startsWith(';')) continue

    if (raw.startsWith('active=')) {
      active = raw.slice(7).trim()
      continue
    }

    const sectionMatch = raw.match(/^\[palette\s+([^\]]+)\]$/i)
    if (sectionMatch) {
      currentPalette = sectionMatch[1].trim()
      palettes[currentPalette] ??= {}
      continue
    }

    const pair = raw.match(/^([a-zA-Z0-9-]+)\s*=\s*(.+)$/)
    if (pair && currentPalette) {
      palettes[currentPalette][pair[1]] = pair[2].trim()
    }
  }

  return { active, palettes }
}

function applyPalette(paletteName, palettes) {
  const palette = palettes[paletteName]
  if (!palette) return

  const root = document.documentElement
  for (const [key, value] of Object.entries(palette)) {
    root.style.setProperty(`--${key}`, value)
  }
  root.setAttribute('data-palette', paletteName)
}

export async function loadAndApplyPalette() {
  try {
    const response = await fetch('/palette-config.txt', { cache: 'no-store' })
    if (!response.ok) throw new Error('Palette config not found')

    const text = await response.text()
    const parsed = parseConfig(text)
    if (parsed.active) {
      applyPalette(parsed.active, parsed.palettes)
    }
  } catch (error) {
    console.warn('[DAG] No se pudo aplicar la paleta desde palette-config.txt', error)
  }
}
