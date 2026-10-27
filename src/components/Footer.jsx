import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '../data/content'

// Rodapé do site, exibido em todas as páginas via Layout.
// Contém três seções: sobre o projeto, links de navegação e créditos/acessibilidade.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
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
                <Link to={item.to}>
                  <span aria-hidden="true">{item.icon} </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Acessibilidade e créditos</h2>
          <ul>
            <li>
              <Link to="/acessibilidade">Recursos de acessibilidade do site</Link>
            </li>
            <li>Fotos: Unsplash (uso editorial educativo)</li>
            <li>Retrato de James Naismith: Wikimedia Commons</li>
            <li>Vídeos: YouTube (reprodução sob demanda, sem autoplay)</li>
          </ul>
          <p>© {new Date().getFullYear()} Basquete Inclusivo. Conteúdo educativo. Todos os direitos reservados.</p>
        </section>
      </div>
    </footer>
  )
}
