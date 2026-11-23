import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AccessibilityPanel from '../a11y/AccessibilityPanel'
import Button from '../ui/Button'
import A11yBar from './A11yBar'
import Footer from './Footer'
import Header from './Header'
import WelcomeBanner from './WelcomeBanner'

// Estrutura comum a todas as páginas: aviso inicial, cabeçalho, barra de acessibilidade,
// conteúdo da rota, rodapé, botão flutuante e painel de acessibilidade.
export default function Layout() {
  const { pathname } = useLocation()
  const [panelOpen, setPanelOpen] = useState(false)

  // Ao trocar de página: leva o foco ao conteúdo e volta ao topo (sem animação se o usuário pediu)
  useEffect(() => {
    document.getElementById('conteudo-principal')?.focus({ preventScroll: true })
    const reduce = document.documentElement.classList.contains('reduce-motion')
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }, [pathname])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo principal
      </a>
      <WelcomeBanner />
      <Header />
      <A11yBar panelOpen={panelOpen} onOpenPanel={() => setPanelOpen(true)} />
      <Outlet />
      <Footer />
      <Button
        className="a11y-fab"
        icon="accessibility"
        variant="primary"
        expanded={panelOpen}
        controls="painel-acessibilidade"
        onClick={() => setPanelOpen(true)}
      >
        Acessibilidade
      </Button>
      <div id="painel-acessibilidade">
        <AccessibilityPanel open={panelOpen} onClose={() => setPanelOpen(false)} />
      </div>
    </div>
  )
}
