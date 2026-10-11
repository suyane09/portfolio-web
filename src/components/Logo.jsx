import { site } from '../config/site'

export default function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label={`${site.name}, ${site.descriptor}. Ir para o início`}>
      <svg className="logo__mark" viewBox="0 0 40 40" width="36" height="36" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="var(--ink)" />
        <path d="M5 8h30v10a5 5 0 0 1-10 0 5 5 0 0 1-10 0 5 5 0 0 1-10 0z" fill="#fff" />
        <path d="M5 8h10v10a5 5 0 0 1-10 0zM25 8h10v10a5 5 0 0 1-10 0z" fill="var(--cobalt)" />
        <rect x="10" y="26" width="20" height="6" rx="2" fill="var(--sinal)" />
      </svg>
      <span className="logo__text">
        <strong>{site.name}</strong>
        <span>{site.descriptor}</span>
      </span>
    </a>
  )
}
