/**
 * PROJETOS DO PORTFÓLIO
 *
 * Os quatro itens abaixo são EXEMPLOS DEMONSTRATIVOS (demo: true): mostram o formato
 * dos cards, não projetos reais. O site avisa isso aos visitantes automaticamente.
 *
 * Para publicar um projeto real:
 *   1. coloque a imagem em /public/projects/ (ex.: loja.webp)
 *   2. troque demo para false e preencha image, imageAlt e url
 *   3. quando nenhum item for demo, o aviso some sozinho
 *
 * art: desenho de apoio usado enquanto não há imagem ('loja' | 'cardapio' | 'institucional' | 'evento')
 */
export const projects = [
  {
    id: 'exemplo-loja',
    demo: true,
    title: 'Loja virtual',
    type: 'Exemplo de e-commerce',
    description: 'Catálogo com filtros, carrinho e finalização do pedido.',
    tags: ['Catálogo', 'Carrinho', 'Pedido'],
    art: 'loja',
    image: null,
    imageAlt: '',
    url: null,
    size: 'wide',
  },
  {
    id: 'exemplo-cardapio',
    demo: true,
    title: 'Sistema para lanchonete',
    type: 'Exemplo de sistema de pedidos',
    description: 'Cardápio digital, pedidos no balcão e controle do dia.',
    tags: ['Cardápio', 'Pedidos'],
    art: 'cardapio',
    image: null,
    imageAlt: '',
    url: null,
    size: 'narrow',
  },
  {
    id: 'exemplo-institucional',
    demo: true,
    title: 'Site institucional',
    type: 'Exemplo de site de apresentação',
    description: 'Apresentação do negócio, serviços e botão direto para contato.',
    tags: ['Serviços', 'Contato'],
    art: 'institucional',
    image: null,
    imageAlt: '',
    url: null,
    size: 'narrow',
  },
  {
    id: 'exemplo-evento',
    demo: true,
    title: 'Página de evento',
    type: 'Exemplo de página de campanha',
    description: 'Data, local, programação e inscrição em uma única página.',
    tags: ['Inscrição', 'Programação'],
    art: 'evento',
    image: null,
    imageAlt: '',
    url: null,
    size: 'wide',
  },
]
