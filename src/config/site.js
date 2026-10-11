/**
 * Dados editáveis do site. Altere aqui e todo o conteúdo se atualiza.
 * Itens marcados com TODO são provisórios e precisam ser trocados antes de divulgar.
 */
export const site = {
  name: 'Suyane',
  descriptor: 'estúdio digital',

  // TODO: troque pelo seu número real, só dígitos, com código do país (55) e DDD.
  // Exemplo: 5582912345678. O valor abaixo é FICTÍCIO.
  whatsappNumber: '5582900000000',

  // TODO: opcional. Deixe '' para esconder o e-mail do site.
  email: '',

  // TODO: opcional. Ex.: 'https://instagram.com/seu_perfil'. Deixe '' para esconder.
  instagram: '',
}

export const whatsappLink = (message = '') => {
  const number = site.whatsappNumber.replace(/\D/g, '')
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${number}${text}`
}

export const nav = [
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Como trabalho' },
  { href: '#contato', label: 'Contato' },
]
