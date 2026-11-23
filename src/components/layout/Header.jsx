import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_ITEMS } from '../../data/navigation'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

// Logo: bola de basquete em SVG (decorativa, o nome do site vem logo ao lado)
function BallMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="30" fill="var(--ball)" />
      <path
        fill="none"
        stroke="rgba(0,0,0,.38)"
        strokeWidth="2.4"
        strokeLinecap="round"
        d="M2 32h60M32 2c10 12 10 48 0 60M32 2c-10 12-10 48 0 60M8 14c16 8 32 8 48 0M8 50c16-8 32-8 48 0"
      />
    </svg>
  )
}

// Cabeçalho fixo: marca + menu principal numa linha só.
// No celular o menu vira uma lista que abre pelo botão "Menu" (fecha com Esc ou ao trocar de página).
export default function Header() {
  const { pathname } = useLocation()
  // Guarda em qual página o menu foi aberto: ao navegar para outra, ele já aparece fechado
  const [openOn, setOpenOn] = useState(null)
  const open = openOn === pathname
  const toggle = () => setOpenOn(open ? null : pathname)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpenOn(null)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link className="brand" to="/">
          <BallMark />
          <span className="brand-text">
            <strong>Basquete Inclusivo</strong>
            <small>Esporte acessível para todas as pessoas</small>
          </span>
        </Link>

        <Button
          className="menu-toggle"
          variant="ghost"
          icon={open ? 'close' : 'menu'}
          expanded={open}
          controls="menu-principal"
          onClick={toggle}
        >
          Menu
        </Button>

        <nav aria-label="Menu principal" className={`site-nav${open ? ' is-open' : ''}`}>
          <ul id="menu-principal">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'}>
                  <Icon name={item.icon} size={17} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
