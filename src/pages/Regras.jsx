import PageTitle from '../components/PageTitle'
import AudioReader from '../components/AudioReader'
import ContentCard from '../components/ContentCard'
import { MEDIA, RULES } from '../data/content'

export default function Regras() {
  return (
    <main id="conteudo-principal" className="site-main page" tabIndex={-1}>
      <PageTitle title="Regras do basquete" />
      <AudioReader />
      <article>
        <p className="kicker">Como o jogo funciona</p>
        <h1>Regras do basquete</h1>
        <p className="lede">
          As regras existem para o jogo ser justo e seguro. Abaixo está um resumo em linguagem
          simples. Ligas diferentes podem ter detalhes próprios, mas a base é a mesma.
        </p>

        <section aria-labelledby="quadra-regras">
          <h2 id="quadra-regras">A quadra</h2>
          <figure>
            <img src={MEDIA.court.src} alt={MEDIA.court.alt} />
            <figcaption>
              A quadra tem duas cestas, um círculo central, linhas laterais, linha de três pontos e a
              área do garrafão. Sair com a bola além das linhas laterais ou de fundo é lateral.
            </figcaption>
          </figure>
        </section>

        <section aria-labelledby="cards-regras">
          <h2 id="cards-regras">Regras principais</h2>
          <div className="grid grid-2">
            {RULES.map((rule) => (
              <ContentCard key={rule.title} icon={rule.icon} title={rule.title} text={rule.text} />
            ))}
          </div>
        </section>

        <section className="callout" aria-labelledby="lembrar">
          <h2 id="lembrar">O que lembrar em uma frase</h2>
          <p>
            Cinco contra cinco, pontos na cesta, sem correr com a bola na mão, faltas geram lances
            livres, e o time que soma mais pontos vence.
          </p>
        </section>
      </article>
    </main>
  )
}
