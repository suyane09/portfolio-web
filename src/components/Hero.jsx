import { whatsappLink } from '../config/site'
import './Hero.css'

const kinds = ['Sites institucionais', 'Lojas virtuais', 'Sistemas para restaurantes', 'Páginas de eventos']

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="awning-wrap" aria-hidden="true">
        <div className="awning" />
      </div>

      <div className="sign" aria-hidden="true">
        <div className="sign__swing">
          <span className="sign__string" />
          <span className="sign__string" />
          <div className="sign__board">
            <strong>Aberto</strong>
            <span>24h na internet</span>
          </div>
        </div>
      </div>

      <img className="hero__orbit" src="/logo-mark-large.png" alt="" width="720" height="720" aria-hidden="true" />

      <div className="wrap hero__inner">
        <h1 id="hero-title">
          <span className="line"><span>Seu negócio</span></span>
          <span className="line"><span>com a porta aberta</span></span>
          <span className="line"><span>na internet.</span></span>
        </h1>
        <p className="hero__lede">
          Crio sites, lojas virtuais e sistemas sob medida para pequenos negócios brasileiros,
          do primeiro rascunho até a publicação.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contato">
            Solicitar orçamento
          </a>
          <a className="btn btn--ghost" href="#portfolio">
            Ver exemplos
          </a>
          <a className="hero__wa" href={whatsappLink('Olá! Vim pelo site e gostaria de conversar sobre um projeto.')} target="_blank" rel="noopener noreferrer">
            ou chame no WhatsApp
          </a>
        </div>
        <ul className="hero__kinds" aria-label="O que eu crio">
          {kinds.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}