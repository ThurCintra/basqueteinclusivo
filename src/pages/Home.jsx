import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import AudioReader, { SpeakButton } from '../components/AudioReader'
import ContentCard from '../components/ContentCard'
import VideoPlayer from '../components/VideoPlayer'
import { MEDIA, NAV_ITEMS, VIDEOS } from '../data/content'

export default function Home() {
  return (
    <main id="conteudo-principal" className="site-main page" tabIndex={-1}>
      <PageTitle title="Início" />
      <AudioReader />
      <article>
        <header className="hero">
          <div className="hero-copy">
            <p className="kicker">Basquete para todas as pessoas</p>
            <h1>O que é basquete?</h1>
            <p className="lede">
              Basquete é um esporte coletivo jogado com as mãos. Duas equipes tentam marcar pontos
              colocando a bola na cesta do adversário e, ao mesmo tempo, protegem a própria cesta.
            </p>
            <p>
              O jogo acontece em uma quadra retangular. Cada equipe coloca cinco pessoas em quadra.
              Ganha quem fizer mais pontos no tempo regulamentar.
            </p>
            <div className="actions">
              {NAV_ITEMS.filter((i) => i.to !== '/').map((item) => (
                <Link key={item.to} className="btn btn-primary" to={item.to}>
                  <span aria-hidden="true">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
            <SpeakButton text="O que é basquete? Basquete é um esporte coletivo jogado com as mãos. Duas equipes tentam marcar pontos colocando a bola na cesta do adversário e protegem a própria cesta." />
          </div>
          <figure className="media-frame">
            <img src={MEDIA.hero.src} alt={MEDIA.hero.alt} />
            <figcaption>{MEDIA.hero.alt}</figcaption>
          </figure>
        </header>

        <section aria-labelledby="caracteristicas">
          <h2 id="caracteristicas">Principais características do esporte</h2>
          <div className="grid grid-3">
            <article className="stat-card">
              <span className="stat-value">5</span>
              <h3>Jogadores em quadra</h3>
              <p>Cada time joga com cinco pessoas. Há reservas no banco.</p>
            </article>
            <article className="stat-card">
              <span className="stat-value">2 ou 3</span>
              <h3>Pontos por cesta</h3>
              <p>Perto da cesta vale 2. De trás da linha de três pontos vale 3. Lance livre vale 1.</p>
            </article>
            <article className="stat-card">
              <span className="stat-value">4</span>
              <h3>Quartos</h3>
              <p>A partida é dividida em quatro períodos. Se empatar, joga-se um tempo extra.</p>
            </article>
          </div>
        </section>

        <section aria-labelledby="apresentacao">
          <h2 id="apresentacao">Apresentação breve do esporte</h2>
          <div className="grid grid-2">
            <ContentCard
              icon="🏀"
              title="Objetivo do jogo"
              text="Marcar mais pontos do que o adversário. Os pontos vêm de cestas de 2 ou 3 pontos e de lances livres."
              image={MEDIA.hoop}
            />
            <ContentCard
              icon="🤝"
              title="Esporte de equipe"
              text="Passe, posicionamento e comunicação são tão importantes quanto o arremesso. Ninguém joga sozinho o tempo todo."
              image={MEDIA.team}
            />
          </div>
        </section>

        

        <section className="callout" aria-labelledby="recursos-home">
          <h2 id="recursos-home">Recursos de acessibilidade deste site</h2>
          <ul>
            <li>Aumentar, diminuir e restaurar o tamanho da fonte em todas as páginas.</li>
            <li>Temas: padrão, escuro, alto contraste, alto contraste preto e escala de cinza.</li>
            <li>Botão Ouvir e leitura da página inteira, com pausar, continuar e parar.</li>
            <li>Navegação só com teclado, foco visível e menu acessível no celular.</li>
            <li>Textos alternativos nas imagens e transcrição nos vídeos.</li>
            <li>Destacar links, destacar foco e reduzir animações.</li>
          </ul>
          <p>
            Abra o botão fixo <strong>Acessibilidade</strong> no canto da tela para ver todas as opções.
            As escolhas ficam salvas neste navegador.
          </p>
          <Link className="btn btn-primary" to="/acessibilidade">
            <span aria-hidden="true">♿</span>
            Página de inclusão e acessibilidade
          </Link>
        </section>
      </article>
    </main>
  )
}
