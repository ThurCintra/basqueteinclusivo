import { useAccessibility } from '../context/AccessibilityContext'
import AccessibleButton from './AccessibleButton'

// Banner de boas-vindas exibido na primeira visita ao site.
// Informa ao usuário sobre os recursos de acessibilidade disponíveis.
// Após clicar em "Entendi", a preferência é salva no localStorage e o banner não aparece mais.
export default function WelcomeBanner() {
  const { welcomeOpen, dismissWelcome } = useAccessibility()
  // Não renderiza nada se o banner já foi dispensado
  if (!welcomeOpen) return null

  return (
    <div className="welcome-banner" role="region" aria-label="Mensagem de acessibilidade">
      <div className="welcome-inner">
        <p>
          Este site possui recursos para facilitar sua navegação. Você pode aumentar o tamanho da
          fonte, ativar o alto contraste, ouvir os conteúdos e navegar utilizando apenas o teclado.
          Nada é reproduzido automaticamente.
        </p>
        <AccessibleButton variant="primary" onClick={dismissWelcome}>
          Entendi
        </AccessibleButton>
      </div>
    </div>
  )
}
