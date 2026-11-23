import { useAccessibility } from '../../context/AccessibilityContext'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

// Aviso da primeira visita sobre os recursos de acessibilidade.
// Depois de "Entendi", a escolha fica salva e o aviso não volta.
export default function WelcomeBanner() {
  const { welcomeOpen, dismissWelcome } = useAccessibility()
  if (!welcomeOpen) return null

  return (
    <div className="welcome" role="region" aria-label="Aviso sobre acessibilidade">
      <div className="container welcome-row">
        <Icon name="accessibility" size={22} className="welcome-icon" />
        <p>
          Este site possui recursos para facilitar sua navegação. Você pode aumentar o tamanho da fonte,
          ativar o alto contraste, ouvir os conteúdos e navegar utilizando apenas o teclado. Nada é
          reproduzido automaticamente.
        </p>
        <Button variant="primary" size="sm" onClick={dismissWelcome}>
          Entendi
        </Button>
      </div>
    </div>
  )
}
