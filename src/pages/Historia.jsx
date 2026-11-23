import SpeakButton from '../components/a11y/SpeakButton'
import Page from '../components/layout/Page'
import Figure from '../components/ui/Figure'
import Section from '../components/ui/Section'
import Timeline from '../components/ui/Timeline'
import { MEDIA } from '../data/media'
import { TIMELINE } from '../data/timeline'

// História: origem, evolução, expansão mundial, chegada ao Brasil e linha do tempo.
export default function Historia() {
  return (
    <Page
      tabTitle="História do basquete"
      kicker="Linha do tempo do esporte"
      title="História do basquete"
      lede="O basquete nasceu em uma aula de educação física, no inverno de 1891, e virou um dos esportes mais praticados do mundo."
      speakText="História do basquete. O basquete nasceu em uma aula de educação física, no inverno de 1891, e virou um dos esportes mais praticados do mundo."
    >
      <Section id="origem" title="Origem do basquete">
        <div className="split">
          <div className="prose">
            <p>
              O professor canadense <strong>James Naismith</strong> trabalhava em Springfield, Massachusetts, nos
              Estados Unidos. O inverno dificultava as atividades ao ar livre.
            </p>
            <p>
              Ele precisava de um jogo indoor, seguro e coletivo. Pregou cestos de pêssego nas paredes de um ginásio
              e criou 13 regras. A bola não podia ser carregada: era preciso passá-la ou quicá-la.
            </p>
            <SpeakButton text="O professor canadense James Naismith criou o basquete em Springfield, Massachusetts, nos Estados Unidos, em 1891, com 13 regras e cestos de pêssego." />
          </div>
          <Figure image={MEDIA.naismith} ratio="4 / 5" />
        </div>
      </Section>

      <Section id="evolucao" title="Como o esporte evoluiu">
        <ul className="check-list">
          <li>Os cestos de pêssego deram lugar a aros de metal com rede.</li>
          <li>A bola ficou maior e com o desenho clássico de gomos.</li>
          <li>Surgiram o drible, o relógio de posse e a linha de três pontos.</li>
          <li>O jogo feminino e o basquete em cadeira de rodas ganharam estrutura própria.</li>
        </ul>
      </Section>

      <Section id="mundo" title="Expansão mundial">
        <div className="split">
          <div className="prose">
            <p>
              Associações cristãs, escolas e universidades levaram o jogo para outros países. Em 1932 foi fundada a
              FIBA. Em 1936 o basquete masculino estreou nas Olimpíadas. A NBA se consolidou como a liga profissional
              mais visível do planeta.
            </p>
          </div>
          <Figure image={MEDIA.crowd} ratio="16 / 10" />
        </div>
      </Section>

      <Section id="brasil" title="Chegada do basquete ao Brasil">
        <div className="prose">
          <p>
            No Brasil, o basquete se organizou em clubes, escolas e federações ao longo do século XX. A seleção
            brasileira conquistou títulos sul-americanos e resultados históricos em mundiais e Olimpíadas. Nomes como
            Oscar, Hortência, Paula e Janeth tornaram o esporte popular.
          </p>
          <p>
            Em 2008 surgiu o NBB, a liga profissional nacional. O basquete escolar e universitário continua formando
            novas gerações.
          </p>
        </div>
      </Section>

      <Section
        id="linha"
        title="Linha do tempo visual"
        intro="Cada acontecimento tem texto, imagem com descrição alternativa e botão para ouvir. A ordem é cronológica, do nascimento do esporte até a liga brasileira."
      >
        <Timeline items={TIMELINE} />
      </Section>
    </Page>
  )
}
