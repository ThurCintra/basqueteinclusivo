import { SpeakButton } from './AudioReader'

// Card de conteúdo genérico reutilizado em várias páginas.
// Exibe ícone, título, texto, imagem opcional e um botão para ouvir o conteúdo em voz alta.
// Props:
//   icon     — emoji ou símbolo exibido antes do título (opcional)
//   title    — título principal do card
//   text     — descrição textual
//   image    — objeto { src, alt } para exibir uma imagem (opcional)
//   children — conteúdo adicional renderizado após o texto
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
