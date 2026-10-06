import { SpeakButton } from './AudioReader'

export default function ContentCard({ icon, title, text, image, children }) {
  return (
    <article className="content-card">
      {image ? <img src={image.src} alt={image.alt} /> : null}
      <h3>
        {icon ? <span aria-hidden="true">{icon} </span> : null}
        {title}
      </h3>
      <p>{text}</p>
      <SpeakButton text={`${title}. ${text}${image ? `. Descrição da imagem: ${image.alt}` : ''}`} />
      {children}
    </article>
  )
}
