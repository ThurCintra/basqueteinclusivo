import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '../../data/navigation'

const YEAR = new Date().getFullYear()

// Rodapé: sobre o projeto, páginas e créditos das imagens.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h2>Basquete Inclusivo</h2>
          <p>
            Projeto educativo sobre basquete com foco em acessibilidade digital para pessoas com
            deficiência. Conteúdo didático, navegação por teclado e leitura em voz alta.
          </p>
          <p>Contato: contato@basqueteinclusivo.org.br</p>
        </section>
        <section>
          <h2>Páginas</h2>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Créditos</h2>
          <ul>
            <li>Fotos: Unsplash e sites de esporte (uso educativo)</li>
            <li>Retrato de James Naismith: Wikimedia Commons</li>
            <li>Ícones: Lucide</li>
          </ul>
        </section>
      </div>
      <p className="container footer-legal">
        © {YEAR} Basquete Inclusivo. Conteúdo educativo.
      </p>
    </footer>
  )
}
