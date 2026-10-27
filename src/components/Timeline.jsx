import { SpeakButton } from './AudioReader'

// Linha do tempo cronológica de eventos históricos do basquete.
// Renderiza uma lista ordenada (<ol>) de eventos, cada um com ano, título, texto e imagem opcional.
// Cada item possui um botão para ouvir o conteúdo em voz alta.
// Props:
//   items — array de { year, title, text, image?: { src, alt } }
export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.year} className="timeline-item">
          <article>
            <header>
              <p className="year">{item.year}</p>
              <h3>{item.title}</h3>
            </header>
            <p>{item.text}</p>
            {item.image ? (
              <figure>
                <img src={item.image.src} alt={item.image.alt} />
                <figcaption>{item.image.alt}</figcaption>
              </figure>
            ) : null}
            <SpeakButton
              text={`${item.year}. ${item.title}. ${item.text}. ${item.image ? `Imagem: ${item.image.alt}` : ''}`}
            />
          </article>
        </li>
      ))}
    </ol>
  )
}
