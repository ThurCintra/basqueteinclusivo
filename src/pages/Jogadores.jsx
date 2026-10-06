import PageTitle from '../components/PageTitle'
import AudioReader from '../components/AudioReader'
import ContentCard from '../components/ContentCard'
import PlayerCard from '../components/PlayerCard'
import { COMPETITIONS, PLAYERS } from '../data/content'

export default function Jogadores() {
  return (
    <main id="conteudo-principal" className="site-main page" tabIndex={-1}>
      <PageTitle title="Jogadores e competições" />
      <AudioReader />
      <article>
        <p className="kicker">Pessoas e torneios</p>
        <h1>Jogadores e competições</h1>
        <p className="lede">
          O basquete é feito de equipes, mas algumas pessoas marcaram gerações. As informações
          abaixo estão em texto e também podem ser ouvidas. As cores dos cards não são a única forma
          de identificar cada grupo: use os títulos.
        </p>

        {PLAYERS.map((group) => (
          <section key={group.group} aria-labelledby={`grupo-${group.group}`}>
            <h2 id={`grupo-${group.group}`}>{group.group}</h2>
            <div className="grid grid-3">
              {group.people.map((player) => (
                <PlayerCard key={player.name} player={player} />
              ))}
            </div>
          </section>
        ))}

        <section aria-labelledby="competicoes">
          <h2 id="competicoes">Principais competições</h2>
          <div className="grid grid-2">
            {COMPETITIONS.map((item) => (
              <ContentCard key={item.title} icon="🏆" title={item.title} text={item.text} />
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}
