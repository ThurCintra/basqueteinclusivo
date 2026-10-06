import PageTitle from '../components/PageTitle'
import AudioReader, { SpeakButton } from '../components/AudioReader'
import VideoPlayer from '../components/VideoPlayer'
import { FUNDAMENTALS } from '../data/content'

export default function Fundamentos() {
  return (
    <main id="conteudo-principal" className="site-main page" tabIndex={-1}>
      <PageTitle title="Fundamentos do basquete" />
      <AudioReader />
      <article>
        <p className="kicker">Habilidades do jogo</p>
        <h1>Fundamentos do basquete</h1>
        <p className="lede">
          Fundamentos são os movimentos básicos. Quem treina esses movimentos joga com mais
          segurança, clareza e cooperação.
        </p>

        {FUNDAMENTALS.map((item) => (
          <section key={item.id} aria-labelledby={item.id}>
            <h2 id={item.id}>{item.title}</h2>
            <div className="grid grid-2">
              <div>
                <p>{item.text}</p>
                <SpeakButton
                  text={`${item.title}. ${item.text}. Descrição da imagem: ${item.image.alt}`}
                  label="Ouvir explicação"
                />
              </div>
              <figure>
                <img src={item.image.src} alt={item.image.alt} />
                <figcaption>{item.image.alt}</figcaption>
              </figure>
            </div>
          </section>
        ))}
      </article>
    </main>
  )
}
