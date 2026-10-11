import { useRef, useState } from 'react'
import { site, whatsappLink } from '../config/site'
import { deadlines, projectTypes } from '../data/process'
import { WhatsAppIcon } from './Icons.jsx'

const initial = { name: '', phone: '', type: '', deadline: '', details: '' }

function formatPhone(value) {
  const d = value.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

function validate(v) {
  const errors = {}
  if (v.name.trim().length < 2) errors.name = 'Informe seu nome.'
  const digits = v.phone.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 11) {
    errors.phone = 'Informe seu WhatsApp com DDD. Exemplo: (11) 91234-5678.'
  }
  if (!v.type) errors.type = 'Escolha o tipo de projeto.'
  return errors
}

function buildMessage(v) {
  const lines = [
    `Olá, ${site.name}! Vim pelo site e gostaria de pedir um orçamento.`,
    '',
    `Nome: ${v.name.trim()}`,
    `WhatsApp: ${v.phone}`,
    `Tipo de projeto: ${v.type}`,
  ]
  if (v.deadline) lines.push(`Prazo: ${v.deadline}`)
  if (v.details.trim()) lines.push('', `Detalhes: ${v.details.trim()}`)
  return lines.join('\n')
}

export default function QuoteForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sentLink, setSentLink] = useState('')
  const fields = useRef({})

  const set = (name) => (e) => {
    const value = name === 'phone' ? formatPhone(e.target.value) : e.target.value
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      fields.current[first]?.focus()
      return
    }
    const link = whatsappLink(buildMessage(values))
    setSentLink(link)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const field = (name) => ({
    id: `f-${name}`,
    name,
    value: values[name],
    onChange: set(name),
    ref: (el) => (fields.current[name] = el),
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `e-${name}` : undefined,
  })

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <h3 className="form__title">Pedir orçamento</h3>

      <div className="form__row">
        <label htmlFor="f-name">Seu nome</label>
        <input type="text" autoComplete="name" {...field('name')} />
        {errors.name && <p className="form__error" id="e-name">{errors.name}</p>}
      </div>

      <div className="form__row">
        <label htmlFor="f-phone">Seu WhatsApp</label>
        <input type="tel" inputMode="tel" autoComplete="tel-national" placeholder="(11) 91234-5678" {...field('phone')} />
        {errors.phone && <p className="form__error" id="e-phone">{errors.phone}</p>}
      </div>

      <div className="form__grid">
        <div className="form__row">
          <label htmlFor="f-type">Tipo de projeto</label>
          <select {...field('type')}>
            <option value="">Selecione</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.type && <p className="form__error" id="e-type">{errors.type}</p>}
        </div>
        <div className="form__row">
          <label htmlFor="f-deadline">Prazo desejado <span className="form__opt">(opcional)</span></label>
          <select {...field('deadline')}>
            <option value="">Selecione</option>
            {deadlines.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form__row">
        <label htmlFor="f-details">Conte sobre o projeto <span className="form__opt">(opcional)</span></label>
        <textarea rows="4" {...field('details')} />
      </div>

      <button type="submit" className="btn btn--primary btn--block">
        <WhatsAppIcon /> Enviar pelo WhatsApp
      </button>
      <p className="form__note">
        Ao enviar, o WhatsApp abre com sua mensagem pronta. Seus dados não ficam guardados neste site.
      </p>

      <div className="form__status" role="status" aria-live="polite">
        {sentLink && (
          <p>
            Mensagem pronta! Se o WhatsApp não abriu,{' '}
            <a href={sentLink} target="_blank" rel="noopener noreferrer">toque aqui para abrir</a>.
          </p>
        )}
      </div>
    </form>
  )
}
