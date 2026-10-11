import { projects } from '../data/projects'
import ProjectCard from './ProjectCard.jsx'
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
              : 'Alguns dos sites e sistemas que construí para pequenos negócios.'}
          </p>
        </div>
        <div className="portfolio__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
