import { useAccessibility } from '../context/AccessibilityContext'
import AccessibleButton from './AccessibleButton'

// Controle de tamanho da fonte.
// Permite aumentar, diminuir e resetar a escala textual do site.
export default function FontControls({ ghost = false }) {
  const { increaseFont, decreaseFont, resetFont, settings } = useAccessibility()
  const variant = ghost ? 'ghost' : 'secondary'
  const percent = Math.round(settings.fontScale * 100)

  return (
    <div className="speak-row" role="group" aria-label="Controle de tamanho da fonte">
      <AccessibleButton icon="🔎" variant={variant} onClick={decreaseFont} ariaLabel="Diminuir fonte">
        Diminuir fonte
      </AccessibleButton>
      <AccessibleButton icon="Aa" variant={variant} onClick={resetFont} ariaLabel="Fonte normal, tamanho padrão">
        Fonte normal
      </AccessibleButton>
      <AccessibleButton icon="🔍" variant={variant} onClick={increaseFont} ariaLabel="Aumentar fonte">
        Aumentar fonte
      </AccessibleButton>
      <span className="badge" aria-live="polite">
        Tamanho atual: {percent}%
      </span>
    </div>
  )
}
