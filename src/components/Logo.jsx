import { site } from '../config/site'

export default function Logo() {
  const [first, second] = site.nameParts ?? [site.name, '']
  return (
    <a className="logo" href="#inicio" aria-label={`${site.name}, ${site.descriptor}. Ir para o início`}>
      <img className="logo__mark" src="/logo-mark.png" alt="" width="44" height="44" aria-hidden="true" />
      <span className="logo__text">
        <strong>
          {first}
          <span className="logo__web">{second}</span>
        </strong>
        <span>{site.descriptor}</span>
      </span>
    </a>
  )
}