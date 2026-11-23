// Páginas do site, na ordem do menu. Usado pelo cabeçalho, pelo rodapé e pelos atalhos da página inicial.
// "icon" é o nome de um ícone (veja components/ui/Icon.jsx) e "summary" aparece nos cards da página inicial.
export const NAV_ITEMS = [
  { to: '/', label: 'Início', icon: 'home', summary: 'O que é o basquete e como o site funciona.' },
  { to: '/historia', label: 'História', icon: 'book', summary: 'Da aula de 1891 à liga brasileira, em linha do tempo.' },
  { to: '/regras', label: 'Regras', icon: 'scroll', summary: 'Jogadores, tempo, pontuação, faltas e violações.' },
  { to: '/fundamentos', label: 'Fundamentos', icon: 'dribble', summary: 'Drible, passe, arremesso, rebote, defesa e mais.' },
  { to: '/jogadores', label: 'Jogadores e Competições', icon: 'trophy', summary: 'Nomes históricos, atuais, brasileiros e os torneios.' },
  { to: '/acessibilidade', label: 'Basquete e Inclusão', icon: 'accessibility', summary: 'Basquete em cadeira de rodas e esporte para todos.' },
]
