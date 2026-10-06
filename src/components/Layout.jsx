import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AccessibilityPanel from './AccessibilityPanel'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import WelcomeBanner from './WelcomeBanner'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    const main = document.getElementById('conteudo-principal')
    if (main) main.focus({ preventScroll: true })
    window.scrollTo({ top: 0, left: 0, behavior: document.documentElement.classList.contains('reduce-motion') ? 'auto' : 'smooth' })
  }, [pathname])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo principal
      </a>
      <WelcomeBanner />
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
      <AccessibilityPanel />
    </div>
  )
}
