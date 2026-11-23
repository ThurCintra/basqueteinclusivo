import { useAccessibility } from '../../context/AccessibilityContext'
import Button from '../ui/Button'

// Lê em voz alta só um trecho (o texto de um card, de uma seção...). Nada toca sozinho.
export default function SpeakButton({ text, label = 'Ouvir' }) {
  const { speak } = useAccessibility()
  return (
    <Button icon="volume" variant="quiet" size="sm" onClick={() => speak(text)} label={`${label}: ${text.slice(0, 80)}`}>
      {label}
    </Button>
  )
}
