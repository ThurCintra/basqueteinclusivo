// Imagem com legenda. Se a imagem não tiver "alt" nos dados, usa fallbackAlt
// (assim nenhuma imagem fica sem descrição para leitores de tela).
export default function Figure({ image, fallbackAlt, caption, className = '', ratio, eager = false }) {
  if (!image?.src) return null
  const alt = image.alt || fallbackAlt || ''
  // caption={null} esconde a legenda; sem caption, a legenda repete o alt
  const text = caption === undefined ? image.alt : caption
  return (
    <figure className={`figure ${className}`.trim()} style={ratio ? { '--ratio': ratio } : undefined}>
      <img src={image.src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" referrerPolicy="no-referrer" />
      {text ? <figcaption>{text}</figcaption> : null}
    </figure>
  )
}
