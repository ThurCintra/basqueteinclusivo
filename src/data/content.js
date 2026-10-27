// Arquivo central de dados estáticos do projeto Basquete Inclusivo.
// Todos os conteúdos textuais, imagens e metadados das páginas são definidos aqui,
// mantendo os componentes e páginas limpos e focados na apresentação.

// Itens de navegação usados tanto no Navbar quanto no Footer e na página Home.
// Cada item tem a rota (to), o rótulo de texto (label) e um ícone emoji acessível.
export const NAV_ITEMS = [
  { to: '/', label: 'Início', icon: '🏀' },
  { to: '/historia', label: 'História', icon: '📖' },
  { to: '/regras', label: 'Regras', icon: '📋' },
  { to: '/fundamentos', label: 'Fundamentos', icon: '⛹️' },
  { to: '/jogadores', label: 'Jogadores e Competições', icon: '⭐' },
  { to: '/acessibilidade', label: 'Basquete e Inclusão', icon: '♿' },
]

// Mapa de imagens usadas no projeto.
// Cada chave possui { src, alt } — o 'alt' é sempre descritivo para acessibilidade.
// Imagens de domínio público (Wikimedia), Unsplash (uso editorial educativo) e sites de esporte.
export const MEDIA = {
  hero: {
    src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1400&q=80',
    alt: 'Bola de basquete laranja atravessa a rede branca de uma cesta, com a tabela ao fundo em um ginásio.',
  },
  ball: {
    src: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1000&q=80',
    alt: 'Bola de basquete laranja com linhas pretas apoiada no piso de madeira de uma quadra.',
  },
  dunk: {
    src: 'https://plus.unsplash.com/premium_vector-1729997098159-5aafe3b6882a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Jogador de basquete no ar, com o braço estendido, prestes a enterrar a bola na cesta.',
  },
  court: {
    src: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Vista de uma quadra de basquete vazia, com linhas brancas, cesta ao fundo e arquibancadas.',
  },
  crowd: {
    src: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Estádio lotado durante uma partida de basquete, com a quadra iluminada no centro.',
  },
  team: {
    src: 'https://s2.glbimg.com/rJQhF8kAhf__aRAH8P7MRhUElHc=/0x0:1075x691/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2018/08/09/lebronnba.png',
    alt: 'Grupo de atletas treina passes em uma quadra de basquete, usando uniformes esportivos.',
  },
  defense: {
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80',
    alt: 'Jogador com a bola protegida junto ao corpo enquanto um defensor tenta bloquear o avanço.',
  },
  naismith: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/James%20Naismith.jpg?width=800',
    alt: 'Retrato em preto e branco de James Naismith, professor canadense que criou o basquete em 1891, usando paletó e gravata.',
  },
  historic: {
    src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2ZK63LIs0SJbeAkVTWOgW8KZIRA0qte3Tw0OUy5RmXoWyMZeQ-XFl94k8olpg7AqkBkMuc3OpCHc0AyBiDMAdRTzeUAehrKlRvFMzguS_dZqwPV3pN59w_9j4-QWuA4ue3fArUmoDLGg/s1600/FB_IMG_1516385208081.jpg',
    alt: 'Ginásio esportivo antigo com arquibancada de madeira, evocando as primeiras décadas do basquete indoor.',
  },
  wheelchair: {
    src: 'https://cpb.org.br/wp-content/uploads/2024/09/53317241859_fbf2c16b82_c.jpg',
    alt: 'Atletas de basquete em cadeiras de rodas esportivas disputam a bola sob a cesta, em uma quadra coberta.',
  },
  hoop: {
    src: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&w=1000&q=80',
    alt: 'Cesta de basquete vista de baixo, com a rede branca e a tabela ao fundo.',
  },
}

// Linha do tempo cronológica do basquete usada na página História.
// Cada item tem: year (período), title, text e image (referência ao objeto MEDIA).
export const TIMELINE = [
  {
    year: '1891',
    title: 'Invenção do basquete',
    text: 'James Naismith cria o jogo em Springfield, Massachusetts, com 13 regras e cestos de pêssego.',
    image: MEDIA.naismith,
  },
  {
    year: '1892–1900',
    title: 'Primeiras partidas e regras',
    text: 'O esporte se espalha em escolas e universidades dos Estados Unidos. As tabelas e a bola evoluem.',
    image: MEDIA.historic,
  },
  {
    year: '1932',
    title: 'FIBA é fundada',
    text: 'A Federação Internacional de Basquetebol organiza o esporte no mundo e padroniza regras internacionais.',
    image: MEDIA.ball,
  },
  {
    year: '1936',
    title: 'Basquete nas Olimpíadas',
    text: 'O basquete masculino estreia nos Jogos Olímpicos de Berlim. Décadas depois, o feminino também entra no programa.',
    image: MEDIA.crowd,
  },
  {
    year: '1922–1940',
    title: 'Chegada ao Brasil',
    text: 'O basquete se consolida no Brasil por clubes, escolas e federações. A seleção brasileira torna-se referência na América do Sul.',
    image: MEDIA.team,
  },
  {
    year: '1946–1949',
    title: 'Nascimento da NBA',
    text: 'Ligas profissionais nos Estados Unidos se unem e dão origem à NBA, hoje a principal liga do planeta.',
    image: MEDIA.dunk,
  },
  {
    year: '1960',
    title: 'Basquete em cadeira de rodas nos Jogos Paraolímpicos',
    text: 'O basquete em cadeira de rodas entra nos Jogos de Roma e se torna um dos esportes-símbolo do movimento paralímpico.',
    image: MEDIA.wheelchair,
  },
  {
    year: '2008',
    title: 'NBB no Brasil',
    text: 'Surge o Novo Basquete Brasil, liga profissional que organiza o principal campeonato nacional masculino.',
    image: MEDIA.court,
  },
]

// Regras principais do basquete usadas na página Regras.
// Cada regra tem: icon (emoji), title e text em linguagem simples e acessível.
export const RULES = [
  { icon: '5️⃣', title: 'Número de jogadores', text: 'Cada equipe joga com 5 pessoas em quadra. Há reservas no banco. Trocas são permitidas.' },
  { icon: '⏱️', title: 'Duração da partida', text: 'Na NBA são 4 quartos de 12 minutos. Em regras FIBA, 4 quartos de 10 minutos. Se empatar, há prorrogação.' },
  { icon: '🎯', title: 'Pontuação', text: 'Cesta dentro do garrafão ou próximo vale 2 pontos. De trás da linha de 3 pontos vale 3. Lance livre vale 1 ponto.' },
  { icon: '🚫', title: 'Faltas', text: 'Contato irregular é falta. Faltas em arremesso geram lances livres. Muitas faltas podem desqualificar a pessoa.' },
  { icon: '🏀', title: 'Dribles', text: 'É preciso quicar a bola no chão ao se deslocar. Pegar a bola com as duas mãos e driblar de novo é andada ou drible duplo.' },
  { icon: '🤝', title: 'Passe', text: 'O passe entrega a bola a um companheiro. Pode ser peito, picado, por cima da cabeça ou de ombro.' },
  { icon: '🏹', title: 'Arremesso', text: 'O arremesso envia a bola à cesta. Pode ser com uma ou duas mãos, parado ou em movimento.' },
  { icon: '📐', title: 'Regras da quadra', text: 'A quadra tem linhas laterais, de fundo, círculo central, linha de 3 pontos e garrafão. A bola fora dessas linhas é lateral.' },
  { icon: '⚠️', title: 'Violações', text: 'Exemplos: passos, 3 segundos no garrafão ofensivo, 8 segundos para cruzar o meio, 24 segundos para arremessar (relógio de posse).' },
  { icon: '🛡️', title: 'Defesa e ataque', text: 'No ataque, o time com a bola tenta criar uma cesta. Na defesa, o time sem a bola tenta impedir a cesta e recuperar a bola.' },
]

// Fundamentos (habilidades básicas) do basquete usados na página Fundamentos.
// Cada item tem: id (âncora HTML), title, text descritivo e image { src, alt }.
export const FUNDAMENTALS = [
  {
    id: 'drible',
    title: 'Drible',
    text: 'Quicar a bola no chão com uma mão para se deslocar sem cometer passos. O drible baixo protege a bola. O drible alto é usado em velocidade.',
    image: { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIzJUC8lVVqyp5LuhEMZicWZ998fs7_mTHax8utLD_I0sil2UslU181_U&s=10' }
  },
  {
    id: 'passe',
    title: 'Passe',
    text: 'Entregar a bola a um companheiro com precisão. Um bom passe chega na altura do peito e evita interceptação.',
    image: MEDIA.team,
  },
  {
    id: 'arremesso',
    title: 'Arremesso',
    text: 'Lançar a bola na cesta com equilíbrio, alinhamento do cotovelo e acompanhamento da mão (follow-through).',
    image: { src: 'https://conteudo.imguol.com.br/c/esporte/db/2021/06/23/stephen-curry-em-um-arremesso-livre-durante-partida-do-golden-state-warriors-em-maio-de-2021-1624477974585_v2_1x1.jpg'}
  },
  {
    id: 'rebote',
    title: 'Rebote',
    text: 'Pegar a bola após um arremesso errado. O rebote ofensivo dá uma nova chance. O rebote defensivo recupera a posse.',
    image: {src: "https://media.brainly.com.br/image/rs:fill/w:1080/q:75/plain/https://pt-static.z-dn.net/files/daa/ddca4d511500aae0f4fda930649719a2.jpg"}
  },
  {
    id: 'defesa',
    title: 'Defesa',
    text: 'Posicionar o corpo entre a bola e a cesta, usar as mãos ativas sem agarrar e comunicar com a equipe.',
    image: { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMldOsPEwlrjUQdHRPS3AOBHvCB4SqOcZ3TqeTJx3ZVe5hVCX5HV3jQM&s=10'}
  },
  {
    id: 'bandeja',
    title: 'Bandeja',
    text: 'Arremesso em movimento próximo à cesta, geralmente após dois passos. É um fundamento de finalização.',
    image: { src: 'https://media.gettyimages.com/id/91495670/pt/foto/african-basketball-player-scoring.jpg?s=612x612&w=gi&k=20&c=gnQ5ARcrk6rweC-ZFqrgPh5OHT-6esogXicD1iZd6sI='}
  },
  {
    id: 'enterrada',
    title: 'Enterrada',
    text: 'Encaixar a bola na cesta com a mão acima do aro. Exige impulsão. Não é obrigatória: muitos pontos vêm de arremessos simples.',
    image: {src: 'https://s2.glbimg.com/ESNwPB1xVhTQTNVOysDyWwKiZ_s=/0x0:1024x1159/924x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2014/02/18/vincecarter_get.jpg'}
  },
  {
    id: 'movimentacao',
    title: 'Movimentação',
    text: 'Correr, cortar, bloquear (pick) e ocupar espaços. Sem a bola, o movimento cria linhas de passe e arremesso.',
    image: { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeeY2QG89p5rtjuRFgC072ZxvPKAnE-2f-N3O-0MDwQ&s=10'}
  },
]

// Jogadores de referência, agrupados por categoria (históricos, atuais, brasileiros).
// Cada pessoa tem: name, info (posição/títulos), text biográfico e image { src, alt }.
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

// Principais competições de basquete mencionadas na página de Jogadores.
// Cada item tem: title (nome da competição) e text (descrição breve).
export const COMPETITIONS = [
  { title: 'NBA', text: 'Principal liga profissional dos Estados Unidos e Canadá. Tem temporada regular, playoffs e finais. A WNBA é a liga feminina correspondente.' },
  { title: 'NBB', text: 'Novo Basquete Brasil: principal campeonato profissional masculino do país, organizado pela LNB.' },
  { title: 'Olimpíadas', text: 'O torneio olímpico reúne seleções. O Brasil tem tradição, especialmente no feminino nas décadas de 1990 e 2000.' },
  { title: 'Copa do Mundo de Basquete', text: 'Torneio da FIBA com seleções nacionais. Substituiu o antigo Campeonato Mundial e classifica países para as Olimpíadas em alguns ciclos.' },
]
