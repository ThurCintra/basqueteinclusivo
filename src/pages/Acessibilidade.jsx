import SpeakButton from '../components/a11y/SpeakButton'
import Page from '../components/layout/Page'
import ContentCard from '../components/ui/ContentCard'
import Figure from '../components/ui/Figure'
import Section from '../components/ui/Section'
import { MEDIA } from '../data/media'

// Como pessoas com diferentes deficiências podem participar (no esporte e neste site)
const PATHS = [
  {
    icon: 'accessibility',
    title: 'Deficiência visual',
    text: 'Há modalidades com bola sonora e guias. Neste site: leitura em voz alta, textos alternativos e estrutura clara para leitores de tela.',
  },
  {
    icon: 'volume',
    title: 'Deficiência auditiva',
    text: 'No esporte, sinais visuais e juízes bem posicionados ajudam. Neste site: todo o conteúdo está em texto e nada depende só do som.',
  },
  {
    icon: 'dribble',
    title: 'Deficiência motora',
    text: 'O basquete em cadeira de rodas é o exemplo mais conhecido. Neste site: botões grandes, teclado completo e sem gestos de arrastar obrigatórios.',
  },
  {
    icon: 'book',
    title: 'Deficiência cognitiva',
    text: 'Rotinas estáveis e linguagem simples reduzem a sobrecarga. Neste site: títulos claros, cards, listas e navegação igual em todas as páginas.',
  },
]

// Inclusão no esporte e acessibilidade digital: basquete em cadeira de rodas, adaptações e recursos do site.
export default function Acessibilidade() {
  return (
    <Page
      tabTitle="Acessibilidade e basquete"
      kicker="Esporte e inclusão"
      title="Acessibilidade e basquete"
      lede="Inclusão no esporte significa que pessoas com deficiência possam treinar, competir e assistir com dignidade. Acessibilidade digital significa que este site também possa ser usado sem depender de outra pessoa."
    >
      <Section id="cadeira" title="Basquete em cadeira de rodas">
        <div className="split">
          <div className="prose">
            <p>
              É um esporte paralímpico. As cadeiras são esportivas, leves e com rodas inclinadas para estabilidade. O
              drible é adaptado: a pessoa pode dar dois impulsos na cadeira antes de quicar a bola novamente, conforme o
              regulamento.
            </p>
            <p>
              Classificação funcional equilibra as equipes. Cada atleta recebe uma pontuação segundo o movimento do
              tronco e dos membros. A soma em quadra tem um limite.
            </p>
            <SpeakButton text="Basquete em cadeira de rodas é um esporte paralímpico com cadeiras esportivas, drible adaptado e classificação funcional para equilibrar as equipes." />
          </div>
          <Figure image={MEDIA.wheelchair} ratio="4 / 3" />
        </div>
      </Section>

      <Section id="para" title="Esportes paralímpicos e inclusão">
        <div className="prose">
          <p>
            O movimento paralímpico mostrou que alto rendimento e deficiência não são opostos. Além da cadeira de rodas,
            existem programas escolares, lazer e basquete amador adaptado.
          </p>
          <p>
            Inclusão também é arquitetura: rampa, banheiro acessível, assento para cadeira de rodas na arquibancada,
            informação em libras e audiodescrição nas transmissões.
          </p>
        </div>
      </Section>

      <Section id="adaptacoes" title="Adaptações necessárias">
        <ul className="check-list">
          <li>Equipamento: cadeira esportiva, bola com som, tabelas em altura adequada no lazer.</li>
          <li>Regras: tempo para drible, classificação e contato com a cadeira.</li>
          <li>Comunicação: linguagem simples, sinais visuais e tempo para processar instruções.</li>
          <li>Ambiente: piso regular, contraste nas linhas da quadra e rotas acessíveis.</li>
        </ul>
      </Section>

      <Section id="como-participar" title="Como pessoas com diferentes deficiências podem participar">
        <div className="grid grid-2">
          {PATHS.map((item) => (
            <ContentCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
      </Section>

      <Section id="site-a11y" title="Recursos de acessibilidade deste site" tone="callout">
        <p>
          Use a barra abaixo do menu ou o botão fixo Acessibilidade. As preferências ficam no armazenamento local do
          navegador até você restaurar o padrão.
        </p>
        <ul className="check-list">
          <li>Ler página, pausar, continuar e parar — nenhum áudio começa sozinho.</li>
          <li>Fonte maior, menor ou padrão, sem quebrar o layout em tela estreita.</li>
          <li>Temas de contraste, incluindo fundo preto com texto branco.</li>
          <li>Destacar links e destacar o foco do teclado.</li>
          <li>Reduzir animações, também respeitando a preferência do sistema operacional.</li>
          <li>Menu mobile com Escape, Tab e indicação da página atual.</li>
          <li>Imagens com descrição em texto.</li>
        </ul>
      </Section>
    </Page>
  )
}
