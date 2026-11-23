import AudioReader from '../a11y/AudioReader'
import FontControls from '../a11y/FontControls'
import { QuickThemeToggle } from '../a11y/ThemePicker'
import Button from '../ui/Button'

// Barra de atalhos de acessibilidade, logo abaixo do cabeçalho, igual em todas as páginas:
// ler a página, tamanho da fonte, modo escuro e o botão que abre o painel completo.
export default function A11yBar({ onOpenPanel, panelOpen }) {
  return (
    <div className="a11y-bar" role="region" aria-label="Atalhos de acessibilidade">
      <div className="container a11y-bar-row">
        <AudioReader compact />
        <span className="a11y-bar-sep" aria-hidden="true" />
        <FontControls compact />
        <span className="a11y-bar-sep" aria-hidden="true" />
        <QuickThemeToggle />
        <Button
          className="a11y-bar-more"
          icon="accessibility"
          variant="primary"
          size="sm"
          expanded={panelOpen}
          controls="painel-acessibilidade"
          onClick={onOpenPanel}
        >
          Mais opções
        </Button>
      </div>
    </div>
  )
}
