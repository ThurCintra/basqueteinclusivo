import { Link } from 'react-router-dom'
import FontControls from './FontControls'
import ContrastControls from './ContrastControls'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/">
          <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="#e85d04" />
            <path
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="2.5"
              d="M2 32h60M32 2c10 12 10 48 0 60M32 2c-10 12-10 48 0 60M8 14c16 8 32 8 48 0M8 50c16-8 32-8 48 0"
            />
          </svg>
          <span className="brand-text">
            Basquete Inclusivo
            <small>Esporte acessível para todas as pessoas</small>
          </span>
        </Link>
        <div className="a11y-toolbar" aria-label="Atalhos de acessibilidade">
          <FontControls ghost />
        </div>
      </div>
      <div className="header-inner" style={{ paddingTop: 0 }}>
        <ContrastControls ghost />
      </div>
    </header>
  )
}
