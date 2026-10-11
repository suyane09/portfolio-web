import ProjectArt from './ProjectArt.jsx'
import { ExternalIcon, WhatsAppIcon } from './Icons.jsx'
import { whatsappLink, whatsappMessages } from '../config/site'

export default function ProjectCard({ project }) {
  const { title, type, description, tags, art, image, imageAlt, url, demo, featured, size } = project
  const classes = ['card', `card--${size === 'wide' ? 'wide' : 'narrow'}`, featured ? 'card--featured' : '']
    .filter(Boolean)
    .join(' ')

  const media = image ? (
    <img src={image} alt={imageAlt} loading="lazy" decoding="async" width="1400" height="735" />
  ) : (
    <ProjectArt kind={art} />
  )

  return (
    <article className={classes}>
      <div className="card__media">
        {url ? (
          <a className="card__media-link" href={url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
            {media}
          </a>
        ) : (
          media
        )}
        {featured && <span className="card__badge card__badge--featured">Projeto em destaque</span>}
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
          <div className="card__actions">
            <a className="btn btn--primary btn--sm" href={url} target="_blank" rel="noopener noreferrer">
              Visitar site <ExternalIcon />
              <span className="sr-only"> {title} (abre em nova aba)</span>
            </a>
            <a
              className="btn btn--ghost btn--sm"
              href={whatsappLink(whatsappMessages.project(title))}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon width="18" height="18" /> Quero um site assim
              <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
            </a>
          </div>
        )}
      </div>
    </article>
  )
}
