import { useEffect, useState } from 'react'
import { nav } from '../config/site'
import Logo from './Logo.jsx'
import { MenuIcon } from './Icons.jsx'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="header">
      <div className="wrap header__bar">
        <Logo />
        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
          <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
        </button>
        <nav id="menu-principal" className={`header__nav${open ? ' is-open' : ''}`} aria-label="Principal">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary btn--sm" href="#contato" onClick={() => setOpen(false)}>
            Pedir orçamento
          </a>
        </nav>
      </div>
    </header>
  )
}
