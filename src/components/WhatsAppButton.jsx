import { whatsappLink } from '../config/site'
import { WhatsAppIcon } from './Icons.jsx'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={whatsappLink('Olá! Vim pelo site e gostaria de conversar sobre um projeto.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp (abre em nova aba)"
    >
      <WhatsAppIcon width="26" height="26" />
      <span className="wa-float__label">Falar no WhatsApp</span>
    </a>
  )
}
