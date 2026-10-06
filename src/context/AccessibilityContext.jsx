import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

const STORAGE_KEY = 'basquete-inclusivo-a11y'
const WELCOME_KEY = 'basquete-inclusivo-welcome'

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

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULTS }
    return { ...DEFAULTS, ...JSON.parse(raw) }
  } catch {
    return { ...DEFAULTS }
  }
}

function applyDocument(settings) {
  const root = document.documentElement
  root.lang = 'pt-BR'
  root.dataset.theme = settings.theme
  root.style.setProperty('--font-scale', String(settings.fontScale))
  root.classList.toggle('highlight-links', settings.highlightLinks)
  root.classList.toggle('highlight-focus', settings.highlightFocus)
  root.classList.toggle('reduce-motion', settings.reduceMotion)
}

const AccessibilityContext = createContext(null)

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

  useEffect(() => {
    applyDocument(settings)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch {
      /* ignore quota */
    }
  }, [settings])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const applyPref = () => {
      if (mq.matches) {
        document.documentElement.classList.add('reduce-motion')
      }
    }
    applyPref()
    mq.addEventListener('change', applyPref)
    return () => mq.removeEventListener('change', applyPref)
  }, [])

  useEffect(() => {
    const onEnd = () => setSpeechStatus('idle')
    window.speechSynthesis?.addEventListener?.('voiceschanged', () => {})
    return () => {
      window.speechSynthesis?.cancel()
      window.speechSynthesis?.removeEventListener?.('voiceschanged', onEnd)
    }
  }, [])

  const update = useCallback((patch) => {
    setSettings((prev) => ({ ...prev, ...patch }))
  }, [])

  const increaseFont = useCallback(() => {
    setSettings((prev) => ({ ...prev, fontScale: Math.min(1.75, Number((prev.fontScale + 0.125).toFixed(3))) }))
  }, [])

  const decreaseFont = useCallback(() => {
    setSettings((prev) => ({ ...prev, fontScale: Math.max(0.875, Number((prev.fontScale - 0.125).toFixed(3))) }))
  }, [])

  const resetFont = useCallback(() => {
    setSettings((prev) => ({ ...prev, fontScale: 1 }))
  }, [])

  const resetAll = useCallback(() => {
    window.speechSynthesis?.cancel()
    setSpeechStatus('idle')
    setSettings({ ...DEFAULTS })
  }, [])

  const pickVoice = useCallback(() => {
    const voices = window.speechSynthesis?.getVoices?.() ?? []
    return (
      voices.find((v) => v.lang?.toLowerCase().startsWith('pt-br')) ||
      voices.find((v) => v.lang?.toLowerCase().startsWith('pt')) ||
      null
    )
  }, [])

  const stopSpeech = useCallback(() => {
    window.speechSynthesis?.cancel()
    utteranceRef.current = null
    setSpeechStatus('idle')
  }, [])

  const speak = useCallback(
    (text) => {
      const clean = (text || '').replace(/\s+/g, ' ').trim()
      if (!clean) return
      if (!window.speechSynthesis) {
        setSpeechStatus('unavailable')
        return
      }
      window.speechSynthesis.cancel()
      const utt = new SpeechSynthesisUtterance(clean)
      utt.lang = 'pt-BR'
      utt.rate = 1
      const voice = pickVoice()
      if (voice) utt.voice = voice
      utt.onend = () => setSpeechStatus('idle')
      utt.onerror = () => setSpeechStatus('idle')
      utteranceRef.current = utt
      setSpeechStatus('speaking')
      window.speechSynthesis.speak(utt)
    },
    [pickVoice],
  )

  const speakPage = useCallback(() => {
    const main = document.getElementById('conteudo-principal')
    if (!main) return
    const parts = []
    main.querySelectorAll('h1, h2, h3, p, li, figcaption, [data-speak]').forEach((el) => {
      if (el.closest('button, .video-frame, nav')) return
      const t = el.textContent?.replace(/\s+/g, ' ').trim()
      if (t) parts.push(t)
    })
    speak(parts.join('. '))
  }, [speak])

  const pauseSpeech = useCallback(() => {
    if (window.speechSynthesis?.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause()
      setSpeechStatus('paused')
    }
  }, [])

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
