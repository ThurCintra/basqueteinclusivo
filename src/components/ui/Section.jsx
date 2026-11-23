// Seção de conteúdo com título (h2) ligado por aria-labelledby.
// tone="callout" destaca a seção num bloco colorido.
export default function Section({ id, title, intro, tone, children }) {
  return (
    <section className={`section${tone ? ` section--${tone}` : ''}`} aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
      {children}
    </section>
  )
}
