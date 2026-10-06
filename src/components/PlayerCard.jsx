import { SpeakButton } from './AudioReader'

export default function PlayerCard({ player }) {
  const full = `${player.name}. ${player.info}. ${player.text}. Imagem: ${player.image.alt}`
  return (
    <article className="player-card">
      <img src={player.image.src} alt={player.image.alt} />
      <h3>{player.name}</h3>
      <p>
        <span className="badge">{player.info}</span>
      </p>
      <p>{player.text}</p>
      <SpeakButton text={full} label="Ouvir informações" />
    </article>
  )
}
