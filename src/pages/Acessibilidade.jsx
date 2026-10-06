import PageTitle from '../components/PageTitle'
import AudioReader, { SpeakButton } from '../components/AudioReader'
import ContentCard from '../components/ContentCard'
import VideoPlayer from '../components/VideoPlayer'
import { MEDIA, VIDEOS } from '../data/content'

const PATHS = [
  {
    title: 'Deficiência visual',
    text: 'Há modalidades com bola sonora e guias. Neste site: leitura em voz alta, textos alternativos e estrutura clara para leitores de tela.',
  },
  {
    title: 'Deficiência auditiva',
    text: 'No esporte, sinais visuais e juízes bem posicionados ajudam. Neste site: transcrição de vídeos, legendas quando o player oferece, e nada depende só do som.',
  },
  {
    title: 'Deficiência motora',
    text: 'O basquete em cadeira de rodas é o exemplo mais conhecido. Neste site: botões grandes, teclado completo e sem gestos de arrastar obrigatórios.',
  },
  {
    title: 'Deficiência cognitiva',
    text: 'Rotinas estáveis e linguagem simples reduzem a sobrecarga. Neste site: títulos claros, cards, listas e navegação igual em todas as páginas.',
  },
]

export default function Acessibilidade() {
  return (
    <main id="conteudo-principal" className="site-main page" tabIndex={-1}>
      <PageTitle title="Acessibilidade e basquete" />
      <AudioReader />
      <article>
        <p className="kicker">Esporte e inclusão</p>
        <h1>Acessibilidade e basquete</h1>
        <p className="lede">
          Inclusão no esporte significa que pessoas com deficiência possam treinar, competir e
          assistir com dignidade. Acessibilidade digital significa que este site também possa ser
          usado sem depender de outra pessoa.
        </p>

        <section aria-labelledby="cadeira">
          <h2 id="cadeira">Basquete em cadeira de rodas</h2>
          <div className="grid grid-2">
            <div>
              <p>
                É um esporte paralímpico. As cadeiras são esportivas, leves e com rodas inclinadas
                para estabilidade. O drible é adaptado: a pessoa pode dar dois impulsos na cadeira
                antes de quicar a bola novamente, conforme o regulamento.
              </p>
              <p>
                Classificação funcional equilibra as equipes. Cada atleta recebe uma pontuação
                segundo o movimento do tronco e dos membros. A soma em quadra tem um limite.
              </p>
              <SpeakButton text="Basquete em cadeira de rodas é um esporte paralímpico com cadeiras esportivas, drible adaptado e classificação funcional para equilibrar as equipes." />
            </div>
            <figure>
              <img src={MEDIA.wheelchair.src} alt={MEDIA.wheelchair.alt} />
              <figcaption>{MEDIA.wheelchair.alt}</figcaption>
            </figure>
          </div>
        </section>

        <section aria-labelledby="para">
          <h2 id="para">Esportes paralímpicos e inclusão</h2>
          <p>
            O movimento paralímpico mostrou que alto rendimento e deficiência não são opostos. Além
            da cadeira de rodas, existem programas escolares, lazer e basquete amador adaptado.
          </p>
          <p>
            Inclusão também é arquitetura: rampa, banheiro acessível, assento para cadeira de rodas
            na arquibancada, informação em libras e audiodescrição nas transmissões.
          </p>
        </section>

        <section aria-labelledby="adaptacoes">
          <h2 id="adaptacoes">Adaptações necessárias</h2>
          <ul>
            <li>Equipamento: cadeira esportiva, bola com som, tabelas em altura adequada no lazer.</li>
            <li>Regras: tempo para drible, classificação e contato com a cadeira.</li>
            <li>Comunicação: linguagem simples, sinais visuais e tempo para processar instruções.</li>
            <li>Ambiente: piso regular, contraste nas linhas da quadra e rotas acessíveis.</li>
          </ul>
        </section>

        <section aria-labelledby="como-participar">
          <h2 id="como-participar">Como pessoas com diferentes deficiências podem participar</h2>
          <div className="grid grid-2">
            {PATHS.map((item) => (
              <ContentCard key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
        </section>

        <section className="callout" aria-labelledby="site-a11y">
          <h2 id="site-a11y">Recursos de acessibilidade deste site</h2>
          <p>
            Use o botão fixo Acessibilidade. As preferências ficam no armazenamento local do
            navegador até você restaurar o padrão.
          </p>
          <ul>
            <li>Ler página, pausar, continuar e parar — nenhum áudio começa sozinho.</li>
            <li>Fonte maior, menor ou padrão, sem quebrar o layout em tela estreita.</li>
            <li>Temas de contraste, incluindo fundo preto com texto branco.</li>
            <li>Destacar links e destacar o foco do teclado.</li>
            <li>Reduzir animações, também respeitando a preferência do sistema operacional.</li>
            <li>Menu mobile com Escape, Tab e indicação da página atual.</li>
            <li>Imagens com descrição real e vídeos com transcrição.</li>
          </ul>
        </section>
      </article>
    </main>
  )
}
