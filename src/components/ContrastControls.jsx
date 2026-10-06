import { THEMES, useAccessibility } from '../context/AccessibilityContext'
import AccessibleButton from './AccessibleButton'

export default function ContrastControls({ ghost = false }) {
  const { settings, update } = useAccessibility()
  const variant = ghost ? 'ghost' : 'secondary'

  return (
    <div className="speak-row" role="group" aria-label="Temas de cor e contraste">
      {THEMES.map((theme) => (
        <AccessibleButton
          key={theme.id}
          variant={variant}
          ariaPressed={settings.theme === theme.id}
          onClick={() => update({ theme: theme.id })}
          ariaLabel={`${theme.label}. ${theme.description}`}
        >
          {theme.label}
        </AccessibleButton>
      ))}
    </div>
  )
}
