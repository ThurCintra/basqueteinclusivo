import { useEffect, useId, useRef, useState } from 'react'
import { THEMES, useAccessibility } from '../context/AccessibilityContext'
import AccessibleButton from './AccessibleButton'
import AudioReader from './AudioReader'
import FontControls from './FontControls'

// Botão flutuante fixo (FAB) + painel modal de acessibilidade.
// Concentra todas as opções de personalização do site: temas, fonte, leitura em voz alta e movimento.
// Implementa trap de foco e navegação por teclado (Tab, Shift+Tab, Escape) dentro do painel aberto.
export default function AccessibilityPanel() {
  // Controla se o painel está aberto ou fechado
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)   // Referência ao elemento do painel modal
  const buttonRef = useRef(null)  // Referência ao botão FAB para restaurar o foco ao fechar
  const titleId = useId()         // ID único gerado para aria-labelledby do dialog
  const { settings, update, resetAll } = useAccessibility()

  // Trap de foco: mantém o foco dentro do painel enquanto ele está aberto.
  // Ao abrir, move o foco para o primeiro elemento interativo.
  // Escape fecha o painel. Tab e Shift+Tab ciclam apenas dentro do painel.
  useEffect(() => {
    if (!open) return undefined
    const panel = panelRef.current
    // Seleciona todos os elementos focáveis dentro do painel
    const focusables = panel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    first?.focus() // Foca no primeiro item ao abrir

    const onKey = (e) => {
      // Fecha o painel ao pressionar Escape
      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
        return
      }
      if (e.key !== 'Tab' || !first || !last) return
      // Shift+Tab no primeiro elemento pula para o último (ciclo)
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      // Tab no último elemento pula para o primeiro (ciclo)
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    panel.addEventListener('keydown', onKey)
    return () => panel.removeEventListener('keydown', onKey)
  }, [open])

  // Ao fechar o painel, devolve o foco ao botão FAB que abriu o painel
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
          {/* Backdrop semitransparente: clique fora fecha o painel */}
          <div className="panel-backdrop" onClick={() => setOpen(false)} />
          {/* Painel modal com role="dialog" e aria-modal para leitores de tela */}
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

            {/* Seção 1: leitura da página em voz alta via Web Speech API */}
            <h3>Leitura em voz alta</h3>
            <AudioReader />

            {/* Seção 2: controle de escala da fonte global */}
            <h3>Tamanho da fonte</h3>
            <FontControls />

            {/* Seção 3: seleção de tema de cores/contraste */}
            <h3>Cores e contraste</h3>
            <div className="panel-group">
              {THEMES.map((theme) => (
                <AccessibleButton
                  key={theme.id}
                  // Ícone varia conforme o tipo de tema
                  icon={theme.id === 'dark' ? '🌙' : theme.id.includes('high') ? '◐' : '🎨'}
                  ariaPressed={settings.theme === theme.id}
                  onClick={() => update({ theme: theme.id })}
                >
                  {theme.label}
                </AccessibleButton>
              ))}
            </div>

            {/* Seção 4: opções de leitura e redução de movimento */}
            <h3>Leitura e movimento</h3>
            <div className="panel-group">
              {/* Toggle para destacar visualmente todos os links da página */}
              <AccessibleButton
                ariaPressed={settings.highlightLinks}
                onClick={() => update({ highlightLinks: !settings.highlightLinks })}
              >
                Destacar links
              </AccessibleButton>
              {/* Toggle para desativar animações CSS */}
              <AccessibleButton
                ariaPressed={settings.reduceMotion}
                onClick={() => update({ reduceMotion: !settings.reduceMotion })}
              >
                Reduzir animações
              </AccessibleButton>
              {/* Botão para restaurar todas as preferências ao padrão */}
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
