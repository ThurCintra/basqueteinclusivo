import SpeakButton from '../a11y/SpeakButton'
import Figure from './Figure'

// Card de atleta: foto, nome, informação curta (país, posição, títulos), texto e botão Ouvir.
export default function PlayerCard({ player }) {
  const speech = `${player.name}. ${player.info}. ${player.text}. Imagem: ${player.image.alt}`
  return (
    <article className="card player-card">
      <Figure image={player.image} fallbackAlt={player.name} caption={null} className="card-media" ratio="4 / 3" />
      <div className="card-body">
        <h3 className="card-title">{player.name}</h3>
        <p className="player-info">{player.info}</p>
        <p>{player.text}</p>
        <div className="card-foot">
          <SpeakButton text={speech} label="Ouvir informações" />
        </div>
      </div>
    </article>
  )
}
