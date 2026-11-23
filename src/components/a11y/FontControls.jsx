import { useAccessibility } from '../../context/AccessibilityContext'
import Button from '../ui/Button'

// Tamanho da fonte: diminuir, voltar ao padrão e aumentar (de 87,5% a 175%).
// compact: versão da barra do topo, com "A−", "A" e "A+".
export default function FontControls({ compact = false }) {
  const { increaseFont, decreaseFont, resetFont, settings } = useAccessibility()
  const percent = Math.round(settings.fontScale * 100)
  const size = compact ? 'sm' : 'md'

  return (
    <div className="control-group" role="group" aria-label="Tamanho da fonte">
      <Button size={size} onClick={decreaseFont} label="Diminuir fonte" disabled={settings.fontScale <= 0.875}>
        {compact ? 'A−' : 'A− Diminuir'}
      </Button>
      <Button size={size} onClick={resetFont} label="Fonte no tamanho padrão">
        {compact ? 'A' : 'A Padrão'}
      </Button>
      <Button size={size} onClick={increaseFont} label="Aumentar fonte" disabled={settings.fontScale >= 1.75}>
        {compact ? 'A+' : 'A+ Aumentar'}
      </Button>
      <span className="chip" aria-live="polite">
        <span className="sr-only">Tamanho atual da fonte: </span>
        {percent}%
      </span>
    </div>
  )
}
