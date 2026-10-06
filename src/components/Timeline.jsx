import { SpeakButton } from './AudioReader'

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
