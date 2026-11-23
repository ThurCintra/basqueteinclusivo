import { useAccessibility } from '../../context/AccessibilityContext'
import Button from '../ui/Button'

const STATUS = {
  speaking: 'Lendo o conteúdo em voz alta.',
  paused: 'Leitura pausada.',
  unavailable: 'Leitura em voz alta não está disponível neste navegador.',
  idle: 'Leitura parada.',
}

// Controles de leitura da página inteira (Web Speech API): ler, pausar, continuar e parar.
// compact: versão da barra do topo (só ícones, com o nome acessível de cada botão).
export default function AudioReader({ compact = false }) {
  const { speakPage, pauseSpeech, resumeSpeech, stopSpeech, speechStatus } = useAccessibility()
  const size = compact ? 'sm' : 'md'

  return (
    <div className="control-group" role="group" aria-label="Leitura em voz alta">
      <Button icon="volume" variant="primary" size={size} onClick={speakPage}>
        {compact ? 'Ler página' : 'Ler página inteira'}
      </Button>
      <Button icon="pause" size={size} iconOnly={compact} onClick={pauseSpeech} disabled={speechStatus !== 'speaking'}>
        Pausar
      </Button>
      <Button icon="play" size={size} iconOnly={compact} onClick={resumeSpeech} disabled={speechStatus !== 'paused'}>
        Continuar
      </Button>
      <Button icon="stop" size={size} iconOnly={compact} onClick={stopSpeech} disabled={speechStatus === 'idle'}>
        Parar
      </Button>
      <p className={compact ? 'sr-only' : 'status-text'} aria-live="polite">
        {STATUS[speechStatus] ?? STATUS.idle}
      </p>
    </div>
  )
}
