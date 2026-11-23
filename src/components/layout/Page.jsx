import { useEffect } from 'react'
import SpeakButton from '../a11y/SpeakButton'

const DEFAULT_TITLE = 'Basquete Inclusivo — Basquete acessível para todas as pessoas'

// Moldura de cada página: <main> que recebe o foco, título da aba e cabeçalho da página
// (chamada, título, texto de abertura e botão Ouvir). "media" aparece ao lado do texto no desktop.
export default function Page({ tabTitle, kicker, title, lede, speakText, media, children, variant }) {
  useEffect(() => {
    document.title = tabTitle ? `${tabTitle} — Basquete Inclusivo` : DEFAULT_TITLE
    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [tabTitle])

  return (
    <main id="conteudo-principal" className="site-main" tabIndex={-1}>
      <header className={`page-hero${variant ? ` page-hero--${variant}` : ''}`}>
        <div className={`container page-hero-grid${media ? ' has-media' : ''}`}>
          <div className="page-hero-copy">
            <p className="kicker">{kicker}</p>
            <h1>{title}</h1>
            {lede ? <p className="lede">{lede}</p> : null}
            {speakText ? <SpeakButton text={speakText} label="Ouvir introdução" /> : null}
          </div>
          {media}
        </div>
      </header>
      <div className="container page-body">{children}</div>
    </main>
  )
}
