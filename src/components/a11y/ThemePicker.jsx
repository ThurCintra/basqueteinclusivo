import { useAccessibility } from '../../context/AccessibilityContext'
import { THEMES } from '../../data/themes'
import Button from '../ui/Button'

const ICON = { default: 'default', dark: 'dark', 'high-contrast': 'contrast', 'high-contrast-bw': 'contrast', grayscale: 'grayscale' }

// Escolha do tema de cores. Cada botão indica se está ativo (aria-pressed).
export default function ThemePicker() {
  const { settings, update } = useAccessibility()
  return (
    <div className="theme-grid" role="group" aria-label="Tema de cores e contraste">
      {THEMES.map((theme) => (
        <button
          key={theme.id}
          type="button"
          className="theme-option"
          data-preview={theme.id}
          aria-pressed={settings.theme === theme.id}
          onClick={() => update({ theme: theme.id })}
        >
          <span className="theme-swatch" aria-hidden="true" />
          <span className="theme-name">{theme.label}</span>
          <span className="theme-desc">{theme.description}</span>
        </button>
      ))}
    </div>
  )
}

// Botão rápido da barra do topo: alterna entre o tema padrão e o escuro.
export function QuickThemeToggle() {
  const { settings, update } = useAccessibility()
  const dark = settings.theme === 'dark'
  return (
    <Button
      size="sm"
      icon={dark ? 'default' : ICON.dark}
      pressed={dark}
      onClick={() => update({ theme: dark ? 'default' : 'dark' })}
    >
      Modo escuro
    </Button>
  )
}
