import { useEffect, useId, useRef, useState } from 'react'
import { THEMES, useAccessibility } from '../context/AccessibilityContext'
import AccessibleButton from './AccessibleButton'
import AudioReader from './AudioReader'
import FontControls from './FontControls'

export default function AccessibilityPanel() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const buttonRef = useRef(null)
  const titleId = useId()
  const { settings, update, resetAll } = useAccessibility()

  useEffect(() => {
    if (!open) return undefined
    const panel = panelRef.current
    const focusables = panel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    first?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
        return
      }
      if (e.key !== 'Tab' || !first || !last) return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    panel.addEventListener('keydown', onKey)
    return () => panel.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    if (!open) buttonRef.current?.focus()
  }, [open])

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="btn a11y-fab"
        aria-expanded={open}
        aria-controls="painel-acessibilidade"
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true">♿</span>
        <span>{open ? 'Fechar acessibilidade' : 'Acessibilidade'}</span>
      </button>
      {open ? (
        <>
          <div className="panel-backdrop" onClick={() => setOpen(false)} />
          <div
            id="painel-acessibilidade"
            className="a11y-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            ref={panelRef}
          >
            <h2 id={titleId}>Painel de acessibilidade</h2>
            <p>Todas as opções também funcionam pelo teclado. Pressione Escape para fechar.</p>
            <h3>Leitura em voz alta</h3>
            <AudioReader />
            <h3>Tamanho da fonte</h3>
            <FontControls />
            <h3>Cores e contraste</h3>
            <div className="panel-group">
              {THEMES.map((theme) => (
                <AccessibleButton
                  key={theme.id}
                  icon={theme.id === 'dark' ? '🌙' : theme.id.includes('high') ? '◐' : '🎨'}
                  ariaPressed={settings.theme === theme.id}
                  onClick={() => update({ theme: theme.id })}
                >
                  {theme.label}
                </AccessibleButton>
              ))}
            </div>
            <h3>Leitura e movimento</h3>
            <div className="panel-group">
              <AccessibleButton
                ariaPressed={settings.highlightLinks}
                onClick={() => update({ highlightLinks: !settings.highlightLinks })}
              >
                Destacar links
              </AccessibleButton>
              <AccessibleButton
                ariaPressed={settings.highlightFocus}
                onClick={() => update({ highlightFocus: !settings.highlightFocus })}
              >
                Destacar foco
              </AccessibleButton>
              <AccessibleButton
                ariaPressed={settings.reduceMotion}
                onClick={() => update({ reduceMotion: !settings.reduceMotion })}
              >
                Reduzir animações
              </AccessibleButton>
              <AccessibleButton variant="primary" onClick={resetAll}>
                Restaurar configurações
              </AccessibleButton>
            </div>
            <AccessibleButton onClick={() => setOpen(false)}>Fechar painel</AccessibleButton>
          </div>
        </>
      ) : null}
    </>
  )
}
