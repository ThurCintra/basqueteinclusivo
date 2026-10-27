import { Link } from 'react-router-dom'
import FontControls from './FontControls'
import ContrastControls from './ContrastControls'

// Cabeçalho da aplicação.
// Exibe a marca do site e os atalhos rápidos de acessibilidade.
export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/">
          {/* Logo SVG de bola de basquete estilizada */}
          <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <defs>
              <radialGradient id="ballGrad" cx="38%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#ff9a3c" />
                <stop offset="60%" stopColor="#e85d04" />
                <stop offset="100%" stopColor="#a83e00" />
              </radialGradient>
              <filter id="ballShadow">
                <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#a83e00" floodOpacity="0.4" />
              </filter>
            </defs>
            <circle cx="32" cy="32" r="30" fill="url(#ballGrad)" filter="url(#ballShadow)" />
            <path
              fill="none"
              stroke="rgba(0,0,0,0.35)"
              strokeWidth="2.2"
              strokeLinecap="round"
              d="M2 32h60M32 2c10 12 10 48 0 60M32 2c-10 12-10 48 0 60M8 14c16 8 32 8 48 0M8 50c16-8 32-8 48 0"
            />
            <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          </svg>
          <span className="brand-text">
            <strong>Basquete Inclusivo</strong>
            <small>Esporte acessível para todas as pessoas</small>
          </span>
        </Link>
        <div className="a11y-toolbar" aria-label="Atalhos de acessibilidade">
          <FontControls ghost />
          <ContrastControls ghost />
        </div>
      </div>
    </header>
  )
}
