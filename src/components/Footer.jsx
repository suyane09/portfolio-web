import { nav, site } from '../config/site'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <img className="footer__logo" src="/logo.png" alt={site.name} width="900" height="568" loading="lazy" />
          <p className="footer__sub">{site.descriptor}</p>
        </div>
        <nav aria-label="Rodapé">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer__legal">© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}