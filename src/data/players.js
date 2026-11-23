// Jogadores (por grupo) e competições da página Jogadores e competições.
export const PLAYERS = [
  {
    group: 'Jogadores históricos',
    people: [
      {
        name: 'Michael Jordan',
        info: 'Estados Unidos · ala-armador · 6 títulos da NBA',
        text: 'Referência mundial de competitividade e fundamentos. Jogou principalmente pelo Chicago Bulls.',
        image: { src: 'https://cdn.nba.com/headshots/nba/latest/1040x760/893.png', alt: 'Jogador de basquete em uniforme vermelho pula em direção à cesta, em cena que evoca o estilo de jogo de Michael Jordan.' },
      },
      {
        name: 'Magic Johnson',
        info: 'Estados Unidos · armador · Showtime Lakers',
        text: 'Armador de 2,06 m, famoso por passes de visão ampla e liderança. Também atuou na luta contra o HIV com educação pública.',
        image: { src: 'https://s2.glbimg.com/TonGf31_jryxsEwrRz_CPDCClog=/640x424/i.glbimg.com/og/ig/infoglobo1/f/original/2021/11/08/magicj.jpg', alt: 'Jogadores de basquete em treino de passe, ilustrando o jogo coletivo associado a Magic Johnson.' },
      },
      {
        name: 'Oscar Schmidt',
        info: 'Brasil · ala · maior cestinha das Olimpíadas',
        text: 'Ídolo brasileiro. Recusou a NBA para defender a seleção. Famoso pelo arremesso de longa distância.',
        image: { src: 'https://folhadesabara.com.br/images/noticias/56541/1ee69b2368a7895737c717a46ddc08be.webp', alt: 'Quadra de basquete iluminada, representando a carreira internacional de Oscar Schmidt.' },
      },
    ],
  },
  {
    group: 'Jogadores atuais',
    people: [
      {
        name: 'LeBron James',
        info: 'Estados Unidos · ala · múltiplos títulos e MVPs',
        text: 'Atleta de longevidade rara, combina força, passe e leitura de jogo. Também atua em projetos educacionais.',
        image: { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHURNA-gAmRtl3cdZriLpUZUNA2pTxnKJROnJ99JDxrSDmyR8OAh-hBBo&s=10', alt: 'Atleta de basquete salta para uma enterrada, representando o atletismo de LeBron James.' },
      },
      {
        name: 'A’ja Wilson',
        info: 'Estados Unidos · pivô · WNBA',
        text: 'Uma das maiores jogadoras da WNBA, destaque em defesa, rebote e liderança no Las Vegas Aces.',
        image: { src: 'https://www.usab.com/imgproxy/BMYF1vsqEfR4ykyQ_BtsXeOS8Y-LzFj4L6R0nhvY_U0/rs:fit:1200:630:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMjIvYWM0ZDEzZTYtMjQzZS00YTQ5LThhYmEtYWUzZjAzMDFjNTc5LnBuZw.png', alt: 'Jogadora de basquete protege a bola durante uma disputa, ilustrando o basquete feminino de alto nível.' },
      },
      {
        name: 'Luka Dončić',
        info: 'Eslovênia · armador · Euroliga e NBA',
        text: 'Destaca-se por visão de passe, arremesso e controle de ritmo. Começou no basquete europeu profissional muito jovem.',
        image: { src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2025-07/250730-luka-doncic-mb-1424-fa4a00.jpg', alt: 'Bola de basquete em close, símbolo do controle de jogo de armadores como Luka Dončić.' },
      },
    ],
  },
  {
    group: 'Jogadores brasileiros',
    people: [
      {
        name: 'Hortência Marcari',
        info: 'Brasil · armadora · medalha de prata olímpica',
        text: 'Uma das maiores jogadoras da história do Brasil. Liderou gerações do basquete feminino.',
        image: { src: 'https://s2-ge.glbimg.com/Bk4Ai4Nmo3zmMSKo7o5jf2nbAQs=/0x0:1200x1447/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/7/e/gBYLQPTo2XsbgJ9xss6Q/basquete-anos-1990-2-hortencia.jpg', alt: 'Ginásio cheio para uma partida de basquete, representando o impacto popular de Hortência.' },
      },
      {
        name: 'Paula Gonçalves “Magic Paula”',
        info: 'Brasil · armadora · seleção brasileira',
        text: 'Companheira de geração de Hortência. Armadora de leitura rápida e títulos internacionais.',
        image: { src: 'https://admin.cob.org.br/uploads/221_411ca257d7.jpg', alt: 'Equipe de basquete troca passes em treino, ilustrando o jogo coletivo de Magic Paula.' },
      },
      {
        name: 'Nenê Hilário',
        info: 'Brasil · pivô · longa carreira na NBA',
        text: 'Pivô brasileiro com mais de uma década na NBA, conhecido por defesa, rebote e constância.',
        image: { src: 'https://a.espncdn.com/i/headshots/nba/players/full/1713.png', alt: 'Aro e tabela de basquete vistos de baixo, representando a atuação de pivôs próximos à cesta.' },
      },
    ],
  },
]

export const COMPETITIONS = [
  { title: 'NBA', text: 'Principal liga profissional dos Estados Unidos e Canadá. Tem temporada regular, playoffs e finais. A WNBA é a liga feminina correspondente.' },
  { title: 'NBB', text: 'Novo Basquete Brasil: principal campeonato profissional masculino do país, organizado pela LNB.' },
  { title: 'Olimpíadas', text: 'O torneio olímpico reúne seleções. O Brasil tem tradição, especialmente no feminino nas décadas de 1990 e 2000.' },
  { title: 'Copa do Mundo de Basquete', text: 'Torneio da FIBA com seleções nacionais. Substituiu o antigo Campeonato Mundial e classifica países para as Olimpíadas em alguns ciclos.' },
]
