import ProjectArt from './ProjectArt.jsx'
import { ExternalIcon } from './Icons.jsx'

export default function ProjectCard({ project }) {
  const { title, type, description, tags, art, image, imageAlt, url, demo, size } = project
  return (
    <article className={`card card--${size === 'wide' ? 'wide' : 'narrow'}`}>
      <div className="card__media">
        {image ? (
          <img src={image} alt={imageAlt} loading="lazy" decoding="async" width="1200" height="750" />
        ) : (
          <ProjectArt kind={art} />
        )}
        {demo && <span className="card__badge">Exemplo demonstrativo</span>}
      </div>
      <div className="card__body">
        <p className="card__type">{type}</p>
        <h3>{title}</h3>
        <p className="card__text">{description}</p>
        {tags?.length > 0 && (
          <ul className="card__tags">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        {url && (
          <a className="card__link" href={url} target="_blank" rel="noopener noreferrer">
            Visitar site <ExternalIcon />
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        )}
      </div>
    </article>
  )
}
