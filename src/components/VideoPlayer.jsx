import { useEffect, useId, useRef, useState } from 'react'
import AccessibleButton from './AccessibleButton'

// Player de vídeo acessível com controles personalizados.
// Suporta dois modos:
//   - YouTube: exibe um iframe da API youtube-nocookie (sem cookies de rastreamento)
//   - Vídeo nativo: exibe <video> com controles customizados (play/pause, seek, volume, tela cheia)
// Sempre exibe uma transcrição textual colapsável para acessibilidade.
// Props:
//   video — objeto com: type, title, description, transcript
//           Se type === 'youtube': id (ID do vídeo YouTube)
//           Se tipo nativo: src, mime, poster, captions
export default function VideoPlayer({ video }) {
  const vidRef = useRef(null) // Referência ao elemento <video> nativo
  const id = useId()          // ID único para os labels de progresso e volume

  // Estado dos controles do player nativo
  const [playing, setPlaying] = useState(false) // Se o vídeo está reproduzindo
  const [muted, setMuted] = useState(false)      // Se o áudio está silenciado
  const [progress, setProgress] = useState(0)   // Progresso em % (0–100)
  const [volume, setVolume] = useState(1)        // Volume de 0 a 1

  // Detecta o tipo de vídeo para escolher o modo de renderização
  const isYoutube = video.type === 'youtube'

  // Sincroniza o estado de progresso e play/pause com os eventos do elemento <video>.
  // Não roda para vídeos YouTube (controlados pelo iframe do YouTube).
  useEffect(() => {
    const el = vidRef.current
    if (!el) return undefined
    // Atualiza a barra de progresso conforme o vídeo avança
    const onTime = () => {
      if (el.duration) setProgress((el.currentTime / el.duration) * 100)
    }
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    el.addEventListener('timeupdate', onTime)
    el.addEventListener('play', onPlay)
    el.addEventListener('pause', onPause)
    // Limpa os listeners ao desmontar para evitar vazamento de memória
    return () => {
      el.removeEventListener('timeupdate', onTime)
      el.removeEventListener('play', onPlay)
      el.removeEventListener('pause', onPause)
    }
  }, [isYoutube])

  // Alterna entre reproduzir e pausar o vídeo
  const togglePlay = () => {
    const el = vidRef.current
    if (!el) return
    if (el.paused) el.play()
    else el.pause()
  }

  // Pula para a posição correspondente ao valor da barra de progresso (0–100)
  const seek = (value) => {
    const el = vidRef.current
    if (!el?.duration) return
    el.currentTime = (Number(value) / 100) * el.duration
  }

  // Ajusta o volume (0–1) e silencia automaticamente quando volume = 0
  const changeVolume = (value) => {
    const el = vidRef.current
    const v = Number(value)
    setVolume(v)
    if (el) {
      el.volume = v
      el.muted = v === 0
      setMuted(v === 0)
    }
  }

  // Alterna mudo/com áudio sem alterar o nível de volume configurado
  const toggleMute = () => {
    const el = vidRef.current
    if (!el) return
    el.muted = !el.muted
    setMuted(el.muted)
  }

  // Entra ou sai do modo tela cheia usando o container do vídeo
  const fullscreen = () => {
    const wrap = vidRef.current?.parentElement
    if (!wrap) return
    if (document.fullscreenElement) document.exitFullscreen()
    else wrap.requestFullscreen?.()
  }

  // Avança ou retrocede o vídeo em um número de segundos, respeitando os limites [0, duração]
  const skip = (seconds) => {
    const el = vidRef.current
    if (!el) return
    el.currentTime = Math.max(0, Math.min(el.duration || 0, el.currentTime + seconds))
  }

  return (
    <figure className="video-player">
      <div className="video-frame">
        {isYoutube ? (
          <iframe
            title={video.title}
            src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&cc_load_policy=1&modestbranding=1`}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <video ref={vidRef} controls={false} preload="metadata" poster={video.poster}>
            <source src={video.src} type={video.mime || 'video/mp4'} />
            {video.captions ? (
              <track kind="captions" srcLang="pt-BR" src={video.captions} label="Português" default />
            ) : null}
            Seu navegador não reproduz vídeo. Use a transcrição abaixo.
          </video>
        )}
      </div>
      <figcaption>
        <strong>{video.title}</strong>
        <p>{video.description}</p>
      </figcaption>
      {!isYoutube ? (
        <div className="video-controls" role="group" aria-label={`Controles do vídeo ${video.title}`}>
          <AccessibleButton icon={playing ? '⏸️' : '▶'} onClick={togglePlay}>
            {playing ? 'Pausar' : 'Assistir vídeo'}
          </AccessibleButton>
          <AccessibleButton icon="⏪" onClick={() => skip(-5)} ariaLabel="Voltar 5 segundos">
            -5 s
          </AccessibleButton>
          <AccessibleButton icon="⏩" onClick={() => skip(5)} ariaLabel="Avançar 5 segundos">
            +5 s
          </AccessibleButton>
          <label htmlFor={`${id}-progress`}>
            Progresso
            <input
              id={`${id}-progress`}
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => seek(e.target.value)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
            />
          </label>
          <AccessibleButton icon={muted ? '🔇' : '🔊'} onClick={toggleMute}>
            {muted ? 'Ativar som' : 'Silenciar'}
          </AccessibleButton>
          <label htmlFor={`${id}-vol`}>
            Volume
            <input
              id={`${id}-vol`}
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => changeVolume(e.target.value)}
            />
          </label>
          <AccessibleButton icon="⛶" onClick={fullscreen}>
            Tela cheia
          </AccessibleButton>
        </div>
      ) : (
        <p>
          O player do YouTube inclui play, pausa, volume, barra de progresso, tela cheia e legendas quando
          disponíveis. O vídeo não inicia automaticamente.
        </p>
      )}
      <details className="transcript">
        <summary>Transcrição textual do vídeo</summary>
        <p>{video.transcript}</p>
      </details>
    </figure>
  )
}
