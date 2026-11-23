import Page from '../components/layout/Page'
import ContentCard from '../components/ui/ContentCard'
import Figure from '../components/ui/Figure'
import Section from '../components/ui/Section'
import { MEDIA } from '../data/media'
import { RULES } from '../data/rules'

// Regras: a quadra, as regras principais em cards e um resumo em uma frase.
export default function Regras() {
  return (
    <Page
      tabTitle="Regras do basquete"
      kicker="Como o jogo funciona"
      title="Regras do basquete"
      lede="As regras existem para o jogo ser justo e seguro. Abaixo está um resumo em linguagem simples. Ligas diferentes podem ter detalhes próprios, mas a base é a mesma."
    >
      <Section id="quadra-regras" title="A quadra">
        <Figure
          image={MEDIA.court}
          ratio="21 / 9"
          caption="A quadra tem duas cestas, um círculo central, linhas laterais, linha de três pontos e a área do garrafão. Sair com a bola além das linhas laterais ou de fundo é lateral."
        />
      </Section>

      <Section id="cards-regras" title="Regras principais">
        <div className="grid grid-2">
          {RULES.map((rule) => (
            <ContentCard key={rule.title} icon={rule.icon} title={rule.title} text={rule.text} />
          ))}
        </div>
      </Section>

      <Section id="lembrar" title="O que lembrar em uma frase" tone="callout">
        <p className="big-quote">
          Cinco contra cinco, pontos na cesta, sem correr com a bola na mão, faltas geram lances livres, e o time que
          soma mais pontos vence.
        </p>
      </Section>
    </Page>
  )
}
