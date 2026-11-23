import Page from '../components/layout/Page'
import ContentCard from '../components/ui/ContentCard'
import PlayerCard from '../components/ui/PlayerCard'
import Section from '../components/ui/Section'
import { COMPETITIONS, PLAYERS } from '../data/players'

const slug = (text) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')

// Jogadores (históricos, atuais e brasileiros) e as principais competições.
export default function Jogadores() {
  return (
    <Page
      tabTitle="Jogadores e competições"
      kicker="Pessoas e torneios"
      title="Jogadores e competições"
      lede="O basquete é feito de equipes, mas algumas pessoas marcaram gerações. As informações abaixo estão em texto e também podem ser ouvidas. As cores dos cards não são a única forma de identificar cada grupo: use os títulos."
    >
      {PLAYERS.map((group) => (
        <Section key={group.group} id={`grupo-${slug(group.group)}`} title={group.group}>
          <div className="grid grid-3">
            {group.people.map((player) => (
              <PlayerCard key={player.name} player={player} />
            ))}
          </div>
        </Section>
      ))}

      <Section id="competicoes" title="Principais competições">
        <div className="grid grid-2">
          {COMPETITIONS.map((item) => (
            <ContentCard key={item.title} icon="trophy" title={item.title} text={item.text} />
          ))}
        </div>
      </Section>
    </Page>
  )
}
