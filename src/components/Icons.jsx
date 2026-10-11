export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.8-1.2A9.5 9.5 0 1 0 12 2.5z" />
      <path d="M8.9 7.8c-.4.4-.6 1-.4 1.8.6 2.4 3.4 5.2 5.9 5.8.8.2 1.4-.1 1.8-.5l.4-.8-2-1-.8.8c-.5-.1-1.7-.8-2.4-1.5-.7-.7-1.2-1.6-1.3-2l.8-.8-.9-2z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ExternalIcon(props) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M6 3H3.5A1.5 1.5 0 0 0 2 4.5v8A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V10" />
      <path d="M9 2h5v5M14 2 7.5 8.5" />
    </svg>
  )
}

export function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}
