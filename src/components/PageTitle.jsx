import { useEffect } from 'react'

// Componente invisível que atualiza o título da aba do navegador (<title>) conforme a página ativa.
// Usa useEffect para definir o título ao montar e restaurar o padrão ao desmontar.
// Props:
//   title — nome da página atual (ex.: "História do basquete")
export default function PageTitle({ title }) {
  useEffect(() => {
    document.title = `${title} — Basquete Inclusivo`
    return () => {
      document.title = 'Basquete Inclusivo — Basquete acessível para todas as pessoas'
    }
  }, [title])
  return null
}
