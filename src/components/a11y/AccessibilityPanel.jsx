import { useEffect, useId, useRef } from 'react'
import { useAccessibility } from '../../context/AccessibilityContext'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import AudioReader from './AudioReader'
import FontControls from './FontControls'
import ThemePicker from './ThemePicker'

// Painel completo de acessibilidade num <dialog> nativo:
// o navegador já prende o foco dentro dele, fecha com Escape e devolve o foco ao botão que abriu.
export default function AccessibilityPanel({ open, onClose }) {
  const ref = useRef(null)
  const titleId = useId()
  const { settings, update, resetAll } = useAccessibility()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  // Clique no fundo escurecido (fora do conteúdo) fecha o painel
  const onClick = (e) => {
    if (e.target === ref.current) onClose()
  }

  const toggles = [
    { key: 'highlightLinks', label: 'Destacar links', hint: 'Sublinha e realça todos os links.' },
    { key: 'highlightFocus', label: 'Destacar foco', hint: 'Contorno amarelo e preto em volta do item focado pelo teclado.' },
    { key: 'reduceMotion', label: 'Reduzir animações', hint: 'Desliga transições e rolagem suave.' },
  ]

  return (
    <dialog ref={ref} className="a11y-panel" aria-labelledby={titleId} onClose={onClose} onClick={onClick}>
      <div className="a11y-panel-inner">
        <header className="a11y-panel-head">
          <span className="a11y-panel-badge" aria-hidden="true">
            <Icon name="accessibility" size={22} />
          </span>
          <div>
            <h2 id={titleId}>Painel de acessibilidade</h2>
            <p>Tudo funciona pelo teclado. Pressione Esc para fechar. As escolhas ficam salvas neste navegador.</p>
          </div>
          <Button icon="close" variant="ghost" iconOnly onClick={onClose}>
            Fechar painel
          </Button>
        </header>

        <section className="a11y-block" aria-labelledby={`${titleId}-voz`}>
          <h3 id={`${titleId}-voz`}>Leitura em voz alta</h3>
          <AudioReader />
        </section>

        <section className="a11y-block" aria-labelledby={`${titleId}-fonte`}>
          <h3 id={`${titleId}-fonte`}>Tamanho da fonte</h3>
          <FontControls />
        </section>

        <section className="a11y-block" aria-labelledby={`${titleId}-tema`}>
          <h3 id={`${titleId}-tema`}>Cores e contraste</h3>
          <ThemePicker />
        </section>

        <section className="a11y-block" aria-labelledby={`${titleId}-extra`}>
          <h3 id={`${titleId}-extra`}>Leitura e movimento</h3>
          <div className="toggle-list">
            {toggles.map((t) => (
              <button
                key={t.key}
                type="button"
                className="toggle"
                aria-pressed={settings[t.key]}
                onClick={() => update({ [t.key]: !settings[t.key] })}
              >
                <span className="toggle-track" aria-hidden="true">
                  <span className="toggle-thumb" />
                </span>
                <span>
                  <strong>{t.label}</strong>
                  <small>{t.hint}</small>
                </span>
              </button>
            ))}
          </div>
        </section>

        <footer className="a11y-panel-foot">
          <Button icon="reset" variant="ghost" onClick={resetAll}>
            Restaurar padrão
          </Button>
          <Button variant="primary" onClick={onClose}>
            Pronto
          </Button>
        </footer>
      </div>
    </dialog>
  )
}
