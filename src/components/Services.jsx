import { services } from '../data/services'
import './Services.css'

export default function Services() {
  return (
    <section className="section services" id="servicos" aria-labelledby="servicos-title">
      <div className="wrap services__layout">
        <div className="services__intro">
          <h2 id="servicos-title">Serviços</h2>
          <p>
            Cada projeto começa pela rotina do seu negócio. O site ou sistema é desenhado para
            resolver o que você precisa hoje e crescer depois.
          </p>
          <a className="btn btn--primary" href="#contato">
            Solicitar orçamento
          </a>
        </div>
        <ul className="services__list">
          {services.map((s) => (
            <li key={s.id} className="service">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="service__items">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
