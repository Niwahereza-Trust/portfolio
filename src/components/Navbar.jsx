import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(9,9,11,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s',
      padding: '0 2rem',
      height: '56px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <span style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em' }}>
        NT<span style={{ color: 'var(--accent)' }}>.</span>
      </span>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '0.25rem', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{
              padding: '0.4rem 0.75rem', fontSize: '0.82rem', color: 'var(--muted)',
              borderRadius: '4px', transition: 'color 0.2s',
              display: 'block',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l}</a>
          </li>
        ))}
      </ul>


    </nav>
  )
}
