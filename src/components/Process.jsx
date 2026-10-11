import { steps } from '../data/process'
import { useInView } from '../hooks/useInView'
import './Process.css'

export default function Process() {
  const [ref, visible] = useInView(0.2)
  return (
    <section className="section process" id="processo" aria-labelledby="processo-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="processo-title">Como trabalho</h2>
          <p>Seis etapas, sempre com você por perto. Nada de surpresa no meio do caminho.</p>
        </div>
        <ol ref={ref} className={`process__steps${visible ? ' is-visible' : ''}`}>
          {steps.map((s, i) => (
            <li key={s.title} className="step" style={{ '--i': i }}>
              <span className="step__num" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
