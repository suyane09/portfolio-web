import { site, whatsappLink, whatsappMessages } from '../config/site'
import QuoteForm from './QuoteForm.jsx'
import { WhatsAppIcon } from './Icons.jsx'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section contact" id="contato" aria-labelledby="contato-title">
      <div className="wrap contact__layout">
        <div className="contact__intro">
          <h2 id="contato-title">Vamos conversar sobre o seu projeto</h2>
          <p>
            Conte o que você precisa. Com as informações do formulário eu monto uma mensagem pronta
            e abro o WhatsApp para você enviar. Se preferir, chame direto.
          </p>
          <a
            className="btn btn--whatsapp"
            href={whatsappLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Chamar no WhatsApp
          </a>
          {(site.email || site.instagram) && (
            <ul className="contact__links">
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              )}
              {site.instagram && (
                <li>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
        <QuoteForm />
      </div>
    </section>
  )
}
