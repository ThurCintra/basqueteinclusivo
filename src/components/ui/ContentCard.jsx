import SpeakButton from '../a11y/SpeakButton'
import Figure from './Figure'
import Icon from './Icon'

// Card de conteúdo: ícone opcional, imagem opcional, título, texto e botão Ouvir.
export default function ContentCard({ icon, title, text, image, children }) {
  const speech = `${title}. ${text}${image?.alt ? `. Descrição da imagem: ${image.alt}` : ''}`
  return (
    <article className="card">
      {image ? <Figure image={image} fallbackAlt={title} caption={null} className="card-media" ratio="16 / 10" /> : null}
      <div className="card-body">
        <h3 className="card-title">
          {icon ? (
            <span className="card-icon">
              <Icon name={icon} size={20} />
            </span>
          ) : null}
          {title}
        </h3>
        <p>{text}</p>
        {children}
        <div className="card-foot">
          <SpeakButton text={speech} />
        </div>
      </div>
    </article>
  )
}
