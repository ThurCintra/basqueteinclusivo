import SpeakButton from '../a11y/SpeakButton'
import Figure from './Figure'

// Linha do tempo em lista ordenada (<ol>): ano, título, texto, imagem e botão Ouvir em cada marco.
export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.year} className="timeline-item">
          <span className="timeline-dot" aria-hidden="true" />
          <article className="timeline-card">
            <div className="timeline-text">
              <p className="timeline-year">{item.year}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <SpeakButton text={`${item.year}. ${item.title}. ${item.text}.${item.image?.alt ? ` Imagem: ${item.image.alt}` : ''}`} />
            </div>
            {item.image ? <Figure image={item.image} fallbackAlt={item.title} caption={null} ratio="4 / 3" /> : null}
          </article>
        </li>
      ))}
    </ol>
  )
}
