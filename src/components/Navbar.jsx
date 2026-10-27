import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV_ITEMS } from '../data/content'
import AccessibleButton from './AccessibleButton'

// Menu principal do site.
// Exibe as páginas do basquete e adapta o comportamento para mobile com abertura/fechamento do menu.
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Fecha o menu automaticamente toda vez que a rota muda (navegação entre páginas)
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Permite fechar o menu mobile pressionando a tecla Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey) // Limpa o listener ao desmontar
  }, [])

  return (
    <nav className="site-nav" aria-label="Menu principal">
      <div className={`nav-inner${open ? ' is-open' : ''}`}>
        <AccessibleButton
          className="menu-toggle"
          variant="ghost"
          ariaExpanded={open}
          ariaControls="menu-principal"
          onClick={() => setOpen((v) => !v)}
          icon="☰"
        >
          {open ? 'Fechar menu' : 'Abrir menu'}
        </AccessibleButton>
        <ul id="menu-principal" className="nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === '/'}>
                <span aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
