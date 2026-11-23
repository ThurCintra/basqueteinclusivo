import SpeakButton from '../components/a11y/SpeakButton'
import Page from '../components/layout/Page'
import Figure from '../components/ui/Figure'
import { FUNDAMENTALS } from '../data/fundamentals'

// Fundamentos: índice com âncoras e uma seção por habilidade (texto, imagem e botão Ouvir).
export default function Fundamentos() {
  return (
    <Page
      tabTitle="Fundamentos do basquete"
      kicker="Habilidades do jogo"
      title="Fundamentos do basquete"
      lede="Fundamentos são os movimentos básicos. Quem treina esses movimentos joga com mais segurança, clareza e cooperação."
    >
      <nav className="toc" aria-label="Fundamentos nesta página">
        <ul>
          {FUNDAMENTALS.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {FUNDAMENTALS.map((item, i) => (
        <section key={item.id} className={`section feature${i % 2 ? ' feature--flip' : ''}`} aria-labelledby={item.id}>
          <div className="prose">
            <p className="feature-number" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </p>
            <h2 id={item.id}>{item.title}</h2>
            <p>{item.text}</p>
            <SpeakButton
              text={`${item.title}. ${item.text}.${item.image?.alt ? ` Descrição da imagem: ${item.image.alt}` : ''}`}
              label="Ouvir explicação"
            />
          </div>
          <Figure image={item.image} fallbackAlt={`Foto ilustrando o fundamento: ${item.title}`} caption={null} ratio="4 / 3" />
        </section>
      ))}
    </Page>
  )
}
