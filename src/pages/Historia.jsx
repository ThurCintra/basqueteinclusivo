import PageTitle from '../components/PageTitle'
import AudioReader, { SpeakButton } from '../components/AudioReader'
import Timeline from '../components/Timeline'
import VideoPlayer from '../components/VideoPlayer'
import { MEDIA, TIMELINE } from '../data/content'

// Página de história do basquete.
// Conta a origem do esporte, sua evolução, expansão mundial, chegada ao Brasil
// e exibe uma linha do tempo cronológica visual com suporte a leitura em voz alta.
export default function Historia() {
  return (
    <main id="conteudo-principal" className="site-main page" tabIndex={-1}>
      <PageTitle title="História do basquete" />
      <AudioReader />
      <article>
        <p className="kicker">Linha do tempo do esporte</p>
        <h1>História do basquete</h1>
        <p className="lede">
          O basquete nasceu em uma aula de educação física, no inverno de 1891, e virou um dos
          esportes mais praticados do mundo.
        </p>
        <SpeakButton text="História do basquete. O basquete nasceu em uma aula de educação física, no inverno de 1891, e virou um dos esportes mais praticados do mundo." />

        <section aria-labelledby="origem">
          <h2 id="origem">Origem do basquete</h2>
          <div className="grid grid-2">
            <div>
              <p>
                O professor canadense <strong>James Naismith</strong> trabalhava em Springfield,
                Massachusetts, nos Estados Unidos. O inverno dificultava as atividades ao ar livre.
              </p>
              <p>
                Ele precisava de um jogo indoor, seguro e coletivo. Pregou cestos de pêssego nas
                paredes de um ginásio e criou 13 regras. A bola não podia ser carregada: era preciso
                passá-la ou quicá-la.
              </p>
              <SpeakButton text="O professor canadense James Naismith criou o basquete em Springfield, Massachusetts, nos Estados Unidos, em 1891, com 13 regras e cestos de pêssego." />
            </div>
            <figure>
              <img src={MEDIA.naismith.src} alt={MEDIA.naismith.alt} />
              <figcaption>{MEDIA.naismith.alt}</figcaption>
            </figure>
          </div>
        </section>

        <section aria-labelledby="evolucao">
          <h2 id="evolucao">Como o esporte evoluiu</h2>
          <ul>
            <li>Os cestos de pêssego deram lugar a aros de metal com rede.</li>
            <li>A bola ficou maior e com o desenho clássico de gomos.</li>
            <li>Surgiram o drible, o relógio de posse e a linha de três pontos.</li>
            <li>O jogo feminino e o basquete em cadeira de rodas ganharam estrutura própria.</li>
          </ul>
        </section>

        <section aria-labelledby="mundo">
          <h2 id="mundo">Expansão mundial</h2>
          <p>
            Associações cristãs, escolas e universidades levaram o jogo para outros países. Em 1932
            foi fundada a FIBA. Em 1936 o basquete masculino estreou nas Olimpíadas. A NBA se
            consolidou como a liga profissional mais visível do planeta.
          </p>
          <figure>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySOjnZJ8Jsguoe3roH1vFgmzEreyOg2fToRgiB4TjkrOVpPurqp_uEXY&s=10"} alt={MEDIA.crowd.alt} />
            <figcaption>{MEDIA.crowd.alt}</figcaption>
          </figure>
        </section>

        <section aria-labelledby="brasil">
          <h2 id="brasil">Chegada do basquete ao Brasil</h2>
          <p>
            No Brasil, o basquete se organizou em clubes, escolas e federações ao longo do século XX.
            A seleção brasileira conquistou títulos sul-americanos e resultados históricos em mundiais
            e Olimpíadas. Nomes como Oscar, Hortência, Paula e Janeth tornaram o esporte popular.
          </p>
          <p>
            Em 2008 surgiu o NBB, a liga profissional nacional. O basquete escolar e universitário
            continua formando novas gerações.
          </p>
        </section>


        <section aria-labelledby="linha">
          <h2 id="linha">Linha do tempo visual</h2>
          <p>
            Cada acontecimento tem texto, imagem com descrição alternativa e botão para ouvir.
            A ordem é cronológica, do nascimento do esporte até a liga brasileira.
          </p>
          <Timeline items={TIMELINE} />
        </section>
      </article>
    </main>
  )
}
