import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AccessibilityPanel from './AccessibilityPanel'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import WelcomeBanner from './WelcomeBanner'

// Layout base do site.
// Todas as páginas são renderizadas dentro deste shell para manter menu, cabeçalho, rodapé e painel de acessibilidade consistentes.
export default function Layout() {
  const { pathname } = useLocation()

  // A cada mudança de rota: move o foco para o conteúdo principal e rola a página para o topo.
  // O comportamento de scroll é instantâneo se o usuário optou por reduzir animações.
  useEffect(() => {
    const main = document.getElementById('conteudo-principal')
    if (main) main.focus({ preventScroll: true }) // Foca sem rolar visualmente
    window.scrollTo({ top: 0, left: 0, behavior: document.documentElement.classList.contains('reduce-motion') ? 'auto' : 'smooth' })
  }, [pathname])

  return (
    <div className="app-shell">
      {/* Link de saltar para o conteúdo: visível apenas ao Tab, para usuários de teclado */}
      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo principal
      </a>
      <WelcomeBanner />   {/* Mensagem inicial de acessibilidade (exibida apenas na 1ª visita) */}
      <Header />           {/* Cabeçalho com logo e controles de fonte/contraste */}
      <Navbar />           {/* Menu principal de navegação */}
      <Outlet />           {/* Conteúdo da página ativa (definido pelas rotas em App.jsx) */}
      <Footer />           {/* Rodapé com links e créditos */}
      <AccessibilityPanel /> {/* Botão FAB + painel modal de acessibilidade */}
    </div>
  )
}
