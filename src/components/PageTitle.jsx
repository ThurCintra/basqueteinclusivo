import { useEffect } from 'react'

export default function PageTitle({ title }) {
  useEffect(() => {
    document.title = `${title} — Basquete Inclusivo`
    return () => {
      document.title = 'Basquete Inclusivo — Basquete acessível para todas as pessoas'
    }
  }, [title])
  return null
}
