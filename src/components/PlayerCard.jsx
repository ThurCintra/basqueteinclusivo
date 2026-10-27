import { SpeakButton } from './AudioReader'

// Card de jogador/atleta exibido na página de Jogadores.
// Mostra foto, nome, informações e um botão de leitura em voz alta com o texto completo do card.
// Props:
//   player — objeto com { name, info, text, image: { src, alt } }
export default function PlayerCard({ player }) {
  // Monta o texto completo do card para ser narrado pela Web Speech API
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
