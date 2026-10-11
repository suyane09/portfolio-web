/**
 * Projetos do portfólio.
 *
 * Campos:
 * - featured: true destaca o card (usado no Personal Douglas)
 * - size: 'wide' ocupa a linha inteira, 'narrow' ocupa meia largura
 * - image: captura de tela em /public/projects (WebP, 1400px de largura)
 * - url: site publicado; sem url o card não mostra os botões
 * - demo: true marca o card como exemplo demonstrativo (usa um desenho no lugar da imagem)
 */
export const projects = [
  {
    id: 'personal-douglas',
    demo: false,
    featured: true,
    title: 'Personal Douglas',
    type: 'Site para personal trainer',
    description:
      'Site completo para um personal trainer de Aracaju (SE): objetivos, método, planos, dúvidas e agendamento de aulas direto pelo WhatsApp.',
    tags: ['Personal trainer', 'Planos', 'Agendamento'],
    art: 'institucional',
    image: '/projects/personal-douglas.webp',
    imageAlt: 'Captura de tela do site Personal Douglas, com a apresentação do personal trainer e o botão para agendar aula',
    url: 'https://douglaspereira.vercel.app/',
    size: 'wide',
  },
  {
    id: 'acteam',
    demo: false,
    title: 'ACTEAM',
    type: 'Site de consultoria fitness online',
    description: 'Apresentação da consultoria individualizada, com chamada para aplicação e atendimento 100% online.',
    tags: ['Consultoria', 'Online', 'Inscrição'],
    art: 'institucional',
    image: '/projects/acteam.webp',
    imageAlt: 'Captura de tela do site ACTEAM, com o título da consultoria e o botão para aplicar',
    url: 'https://acteamm.vercel.app/',
    size: 'narrow',
  },
  {
    id: 'personal-maurolian',
    demo: false,
    title: 'Personal Maurolian',
    type: 'Site para personal trainer',
    description: 'Atendimento presencial e online apresentado por objetivo, com botões diretos para começar.',
    tags: ['Personal trainer', 'Serviços', 'Contato'],
    art: 'institucional',
    image: '/projects/maurolian.webp',
    imageAlt: 'Captura de tela do site Personal Maurolian, com o título e os botões para começar',
    url: 'https://personalmaurolian.vercel.app/',
    size: 'narrow',
  },
  {
    id: 'erika-larissa',
    demo: false,
    title: 'Erika Larissa Personal',
    type: 'Site para personal trainer',
    description: 'Consultoria personalizada com explicação de como funciona, planos, dúvidas e contato rápido.',
    tags: ['Consultoria', 'Planos', 'Contato'],
    art: 'institucional',
    image: '/projects/erika.webp',
    imageAlt: 'Captura de tela do site Erika Larissa Personal, com a apresentação da consultoria',
    url: 'https://erika-larissa-personal.vercel.app/',
    size: 'narrow',
  },
  {
    id: 'beatriz-reis',
    demo: false,
    title: 'Beatriz Reis Neuropsicóloga',
    type: 'Site para profissional da saúde',
    description: 'Áreas de atuação, como funciona a avaliação e pré-agendamento para facilitar o primeiro contato.',
    tags: ['Psicologia', 'Avaliação', 'Pré-agendamento'],
    art: 'institucional',
    image: '/projects/beatriz.webp',
    imageAlt: 'Captura de tela do site Beatriz Reis Neuropsicóloga, com a apresentação e o botão de pré-agendamento',
    url: 'https://beatrizreisneuropsicologa.vercel.app/',
    size: 'narrow',
  },
]
