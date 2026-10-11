import { projects } from '../data/projects'
import { whatsappLink, whatsappMessages } from '../config/site'
import ProjectCard from './ProjectCard.jsx'
import { WhatsAppIcon } from './Icons.jsx'
import './Portfolio.css'

export default function Portfolio() {
  const hasDemo = projects.some((p) => p.demo)
  return (
    <section className="section portfolio" id="portfolio" aria-labelledby="portfolio-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="portfolio-title">{hasDemo ? 'Exemplos do que posso criar' : 'Projetos recentes'}</h2>
          <p>
            {hasDemo
              ? 'Estes cards são ilustrações do formato de cada tipo de projeto, não trabalhos entregues. Os projetos reais entram aqui conforme forem publicados.'
              : 'Sites reais, já publicados, criados para profissionais e pequenos negócios. Abra qualquer um para ver como ficou.'}
          </p>
        </div>
        <div className="portfolio__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="portfolio__cta">
          <div>
            <h3>Quer um site assim para o seu negócio?</h3>
            <p>
              Me conte sobre o seu projeto. Você recebe escopo, prazo e valor antes de qualquer
              compromisso.
            </p>
          </div>
          <div className="portfolio__cta-actions">
            <a className="btn btn--primary" href="#contato">
              Solicitar orçamento
            </a>
            <a
              className="btn btn--whatsapp"
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Chamar no WhatsApp
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
