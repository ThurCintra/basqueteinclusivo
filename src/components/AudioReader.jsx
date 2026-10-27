import { useAccessibility } from '../context/AccessibilityContext'
import AccessibleButton from './AccessibleButton'

// Botão reutilizável para ler uma frase específica em voz alta.
// Útil quando o texto é uma explicação curta ou um trecho destacado em uma página.
export function SpeakButton({ text, label = 'Ouvir' }) {
  const { speak } = useAccessibility()
  return (
    <AccessibleButton icon="🔊" variant="secondary" onClick={() => speak(text)} ariaLabel={`${label}: ${text.slice(0, 80)}`}>
      {label}
    </AccessibleButton>
  )
}

// Componente de leitura completa da página.
// Coleta o conteúdo principal e usa a Web Speech API para narrar o texto para o usuário.
export default function AudioReader({ compact = false }) {
  const { speakPage, pauseSpeech, resumeSpeech, stopSpeech, speechStatus } = useAccessibility()
  const statusLabel =
    speechStatus === 'speaking'
      ? 'Lendo o conteúdo em voz alta.'
      : speechStatus === 'paused'
        ? 'Leitura pausada.'
        : speechStatus === 'unavailable'
          ? 'Leitura em voz alta não está disponível neste navegador.'
          : 'Leitura parada.'

  return (
    <div className="speak-row" role="group" aria-label="Controles de leitura em voz alta">
      <AccessibleButton icon="🔊" variant="primary" onClick={speakPage}>
        {compact ? 'Ler página' : 'Ler página inteira'}
      </AccessibleButton>
      <AccessibleButton icon="⏸️" onClick={pauseSpeech} disabled={speechStatus !== 'speaking'}>
        Pausar
      </AccessibleButton>
      <AccessibleButton icon="▶️" onClick={resumeSpeech} disabled={speechStatus !== 'paused'}>
        Continuar
      </AccessibleButton>
      <AccessibleButton icon="⏹️" onClick={stopSpeech} disabled={speechStatus === 'idle'}>
        Parar
      </AccessibleButton>
      <p className="status-live" aria-live="polite">
        {statusLabel}
      </p>
    </div>
  )
}
