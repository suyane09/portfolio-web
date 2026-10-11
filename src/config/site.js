/**
 * Dados editáveis do site.
 * Altere aqui e todo o conteúdo se atualiza.
 */
export const site = {
  name: 'Orbit Web',
  descriptor: 'Estúdio digital',

  whatsappNumber: '5582982143150',

  email: '',

  instagram: 'https://www.instagram.com/orbitweb_/',
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