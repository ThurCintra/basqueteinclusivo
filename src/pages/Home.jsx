import { Link } from 'react-router-dom'
import Page from '../components/layout/Page'
import ContentCard from '../components/ui/ContentCard'
import Figure from '../components/ui/Figure'
import Icon from '../components/ui/Icon'
import Section from '../components/ui/Section'
import { MEDIA } from '../data/media'
import { NAV_ITEMS } from '../data/navigation'

const STATS = [
  { value: '5', title: 'Jogadores em quadra', text: 'Cada time joga com cinco pessoas. Há reservas no banco.' },
  { value: '2 ou 3', title: 'Pontos por cesta', text: 'Perto da cesta vale 2. De trás da linha de três pontos vale 3. Lance livre vale 1.' },
  { value: '4', title: 'Quartos', text: 'A partida é dividida em quatro períodos. Se empatar, joga-se um tempo extra.' },
]

const FEATURES = [
  'Aumentar, diminuir e restaurar o tamanho da fonte em todas as páginas.',
  'Temas: padrão, escuro, alto contraste, alto contraste preto e escala de cinza.',
  'Botão Ouvir e leitura da página inteira, com pausar, continuar e parar.',
  'Navegação só com teclado, foco visível e menu acessível no celular.',
  'Textos alternativos nas imagens.',
  'Destacar links, destacar foco e reduzir animações.',
]

// Página inicial: o que é o basquete, números do jogo, atalhos para os temas e recursos do site.
export default function Home() {
  return (
    <Page
      tabTitle="Início"
      variant="home"
      kicker="Basquete para todas as pessoas"
      title="O que é basquete?"
      lede="Basquete é um esporte coletivo jogado com as mãos. Duas equipes tentam marcar pontos colocando a bola na cesta do adversário e, ao mesmo tempo, protegem a própria cesta."
      speakText="O que é basquete? Basquete é um esporte coletivo jogado com as mãos. Duas equipes tentam marcar pontos colocando a bola na cesta do adversário e protegem a própria cesta."
      media={<Figure image={MEDIA.hero} caption={null} className="hero-figure" ratio="4 / 3" eager />}
    >
      <p className="intro">
        O jogo acontece em uma quadra retangular. Cada equipe coloca cinco pessoas em quadra. Ganha quem
        fizer mais pontos no tempo regulamentar.
      </p>

      <Section id="caracteristicas" title="Principais características do esporte">
        <div className="grid grid-3">
          {STATS.map((s) => (
            <article key={s.title} className="stat">
              <span className="stat-value">{s.value}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="explorar" title="Explore o site" intro="Escolha um tema. O menu no topo leva às mesmas páginas.">
        <ul className="grid grid-3 topic-list">
          {NAV_ITEMS.filter((i) => i.to !== '/').map((item) => (
            <li key={item.to}>
              <Link className="topic" to={item.to}>
                <span className="topic-icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <span className="topic-text">
                  <strong>{item.label}</strong>
                  <span>{item.summary}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="apresentacao" title="Apresentação breve do esporte">
        <div className="grid grid-2">
          <ContentCard
            icon="target"
            title="Objetivo do jogo"
            text="Marcar mais pontos do que o adversário. Os pontos vêm de cestas de 2 ou 3 pontos e de lances livres."
            image={MEDIA.hoop}
          />
          <ContentCard
            icon="handshake"
            title="Esporte de equipe"
            text="Passe, posicionamento e comunicação são tão importantes quanto o arremesso. Ninguém joga sozinho o tempo todo."
            image={MEDIA.team}
          />
        </div>
      </Section>

      <Section id="recursos-home" title="Recursos de acessibilidade deste site" tone="callout">
        <ul className="check-list">
          {FEATURES.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <p>
          Use a barra logo abaixo do menu ou o botão <strong>Acessibilidade</strong> no canto da tela para ver todas
          as opções. As escolhas ficam salvas neste navegador.
        </p>
        <Link className="btn btn-primary" to="/acessibilidade">
          <Icon name="accessibility" />
          <span>Página de inclusão e acessibilidade</span>
        </Link>
      </Section>
    </Page>
  )
}
