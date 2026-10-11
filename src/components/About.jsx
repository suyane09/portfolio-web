import './About.css'

export default function About() {
  return (
    <section className="section about" id="sobre" aria-labelledby="sobre-title">
      <div className="wrap about__layout">
        <div className="about__label">
          <span>POR TRÁS DOS PROJETOS</span>
          <p>Estratégia, design e tecnologia trabalhando juntos.</p>
        </div>

        <div className="about__content">
          <h2 id="sobre-title">
            A Orbit Web transforma ideias em experiências digitais.
          </h2>
          <p>
            Criamos sites profissionais para apresentar negócios, destacar
            serviços e facilitar o contato entre empresas e seus clientes.
          </p>
          <p>
            Cada projeto é pensado de acordo com as necessidades do negócio,
            com atenção à identidade visual, à navegação e à experiência no celular.
          </p>
          <a className="btn btn--primary" href="#contato">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  )
}