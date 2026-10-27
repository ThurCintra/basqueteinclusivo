import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

// Armazena as preferências do usuário em localStorage para manter a acessibilidade entre visitas.
const STORAGE_KEY = 'basquete-inclusivo-a11y'
const WELCOME_KEY = 'basquete-inclusivo-welcome'

// Lista de temas visuais disponíveis no site.
// Cada tema ajusta a paleta de cores para melhorar legibilidade e contraste.

export const THEMES = [
  { id: 'default', label: 'Tema padrão', description: 'Cores originais do site, com fundo claro e laranja de basquete.' },
  { id: 'dark', label: 'Modo escuro', description: 'Fundo escuro e texto claro para reduzir ofuscamento.' },
  { id: 'high-contrast', label: 'Alto contraste', description: 'Texto preto em fundo branco, com amarelo nos destaques.' },
  { id: 'high-contrast-bw', label: 'Alto contraste preto', description: 'Fundo preto e texto branco, máximo contraste.' },
  { id: 'grayscale', label: 'Escala de cinza', description: 'Todas as cores em tons de cinza.' },
]

const DEFAULTS = {
  fontScale: 1,
  theme: 'default',
  highlightLinks: false,
  highlightFocus: false,
  reduceMotion: false,
}

// Carrega as preferências salvas do localStorage.
// Retorna os valores padrão mesclados com qualquer configuração salva pelo usuário.
function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULTS } // Sem dados salvos: usa padrões
    return { ...DEFAULTS, ...JSON.parse(raw) } // Mescla padrões com dados salvos
  } catch {
    return { ...DEFAULTS } // Ignore erro de parse/quota e usa padrões
  }
}

// Aplica as configurações de acessibilidade diretamente no elemento <html>.
// Usa data-theme para trocas de paleta via CSS, --font-scale como variável CSS
// e classes CSS para destacar links/foco e reduzir movimento.
function applyDocument(settings) {
  const root = document.documentElement
  root.lang = 'pt-BR'  // Garante que o idioma da página está correto para leitores de tela
  root.dataset.theme = settings.theme  // Ex.: 'dark', 'high-contrast'
  root.style.setProperty('--font-scale', String(settings.fontScale))  // Controla escala global de fonte
  root.classList.toggle('highlight-links', settings.highlightLinks)   // Destaca todos os links
  root.classList.toggle('highlight-focus', settings.highlightFocus)   // Destaca o foco do teclado
  root.classList.toggle('reduce-motion', settings.reduceMotion)       // Desativa animações
}

const AccessibilityContext = createContext(null)

// Provider global que concentra toda a lógica de acessibilidade do projeto.
// Ele controla fonte, contraste, leitura em voz alta, foco visual e preferências persistentes.
export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(loadSettings)
  const [speechStatus, setSpeechStatus] = useState('idle')
  const [welcomeOpen, setWelcomeOpen] = useState(() => {
    try {
      return localStorage.getItem(WELCOME_KEY) !== 'dismissed'
    } catch {
      return true
    }
  })
  const utteranceRef = useRef(null)

  // Sempre que as configurações mudam: aplica no DOM e persiste no localStorage
  useEffect(() => {
    applyDocument(settings)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch {
      /* ignore quota */ // Em modo privado ou storage cheio, ignora silenciosamente
    }
  }, [settings])

  // Respeita a preferência do sistema operacional para reduzir movimento.
  // Se o usuário configurou "Prefer reduced motion" no SO, ativa a classe automaticamente.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const applyPref = () => {
      if (mq.matches) {
        document.documentElement.classList.add('reduce-motion')
      }
    }
    applyPref()
    mq.addEventListener('change', applyPref) // Atualiza se o usuário mudar a preferência do SO
    return () => mq.removeEventListener('change', applyPref)
  }, [])

  // Inicializa e limpa a síntese de voz ao montar/desmontar o provider.
  // Cancela qualquer fala em andamento quando o componente desmonta.
  useEffect(() => {
    const onEnd = () => setSpeechStatus('idle')
    window.speechSynthesis?.addEventListener?.('voiceschanged', () => {})
    return () => {
      window.speechSynthesis?.cancel() // Para qualquer áudio ao sair da página
      window.speechSynthesis?.removeEventListener?.('voiceschanged', onEnd)
    }
  }, [])

  // Atualiza um subset das configurações sem sobrescrever as demais
  const update = useCallback((patch) => {
    setSettings((prev) => ({ ...prev, ...patch }))
  }, [])

  // Aumenta a fonte em passos de 12,5%, até o máximo de 175%
  const increaseFont = useCallback(() => {
    setSettings((prev) => ({ ...prev, fontScale: Math.min(1.75, Number((prev.fontScale + 0.125).toFixed(3))) }))
  }, [])

  // Diminui a fonte em passos de 12,5%, até o mínimo de 87,5%
  const decreaseFont = useCallback(() => {
    setSettings((prev) => ({ ...prev, fontScale: Math.max(0.875, Number((prev.fontScale - 0.125).toFixed(3))) }))
  }, [])

  // Restaura a escala da fonte para 100% (padrão)
  const resetFont = useCallback(() => {
    setSettings((prev) => ({ ...prev, fontScale: 1 }))
  }, [])

  // Restaura todas as preferências de acessibilidade aos valores padrão e para o áudio
  const resetAll = useCallback(() => {
    window.speechSynthesis?.cancel()
    setSpeechStatus('idle')
    setSettings({ ...DEFAULTS })
  }, [])

  // Seleciona a melhor voz em português disponível no navegador.
  // Prioriza pt-BR, depois qualquer voz pt, e retorna null se nenhuma for encontrada.
  const pickVoice = useCallback(() => {
    const voices = window.speechSynthesis?.getVoices?.() ?? []
    return (
      voices.find((v) => v.lang?.toLowerCase().startsWith('pt-br')) ||
      voices.find((v) => v.lang?.toLowerCase().startsWith('pt')) ||
      null
    )
  }, [])

  // Para imediatamente a leitura em voz alta e limpa a fila da Web Speech API
  const stopSpeech = useCallback(() => {
    window.speechSynthesis?.cancel()
    utteranceRef.current = null
    setSpeechStatus('idle')
  }, [])

  // Lê um texto específico em voz alta usando a Web Speech API.
  // Limpa espaços extras, verifica disponibilidade do navegador,
  // seleciona a voz em português e configura callbacks de fim/erro.
  const speak = useCallback(
    (text) => {
      const clean = (text || '').replace(/\s+/g, ' ').trim()
      if (!clean) return // Ignora texto vazio
      if (!window.speechSynthesis) {
        setSpeechStatus('unavailable') // Navagador não suporta Web Speech API
        return
      }
      window.speechSynthesis.cancel() // Para qualquer leitura anterior antes de começar
      const utt = new SpeechSynthesisUtterance(clean)
      utt.lang = 'pt-BR'
      utt.rate = 1
      const voice = pickVoice()
      if (voice) utt.voice = voice // Usa voz em pt-BR se disponível
      utt.onend = () => setSpeechStatus('idle')
      utt.onerror = () => setSpeechStatus('idle')
      utteranceRef.current = utt
      setSpeechStatus('speaking')
      window.speechSynthesis.speak(utt)
    },
    [pickVoice],
  )

  // Coleta o texto do conteúdo principal da página e narra tudo em sequência.
  // Exclui botões, elementos de vídeo e navegação para evitar repetições.
  const speakPage = useCallback(() => {
    const main = document.getElementById('conteudo-principal')
    if (!main) return
    const parts = []
    // Seleciona títulos, parágrafos, itens de lista e legendas
    main.querySelectorAll('h1, h2, h3, p, li, figcaption, [data-speak]').forEach((el) => {
      if (el.closest('button, .video-frame, nav')) return // Ignora elementos de interação
      const t = el.textContent?.replace(/\s+/g, ' ').trim()
      if (t) parts.push(t)
    })
    speak(parts.join('. '))
  }, [speak])

  // Pausa a leitura se estiver em andamento
  const pauseSpeech = useCallback(() => {
    if (window.speechSynthesis?.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause()
      setSpeechStatus('paused')
    }
  }, [])

  // Retoma a leitura se estiver pausada
  const resumeSpeech = useCallback(() => {
    if (window.speechSynthesis?.paused) {
      window.speechSynthesis.resume()
      setSpeechStatus('speaking')
    }
  }, [])

  const dismissWelcome = useCallback(() => {
    setWelcomeOpen(false)
    try {
      localStorage.setItem(WELCOME_KEY, 'dismissed')
    } catch {
      /* ignore */
    }
  }, [])

  const value = useMemo(
    () => ({
      settings,
      update,
      increaseFont,
      decreaseFont,
      resetFont,
      resetAll,
      speak,
      speakPage,
      pauseSpeech,
      resumeSpeech,
      stopSpeech,
      speechStatus,
      welcomeOpen,
      dismissWelcome,
    }),
    [
      settings,
      update,
      increaseFont,
      decreaseFont,
      resetFont,
      resetAll,
      speak,
      speakPage,
      pauseSpeech,
      resumeSpeech,
      stopSpeech,
      speechStatus,
      welcomeOpen,
      dismissWelcome,
    ],
  )

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext)
  if (!ctx) throw new Error('useAccessibility deve ser usado dentro de AccessibilityProvider')
  return ctx
}
