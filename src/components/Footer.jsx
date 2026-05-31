export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)', padding: '1.5rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '0.75rem',
    }}>
      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
        © 2026 Niwahereza Trust
      </span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[
          ['GitHub', 'https://github.com/Niwahereza-Trust'],
          ['LinkedIn', 'https://linkedin.com/in/niwahereza-trust'],
          ['Email', 'mailto:niwaherezatrust6@gmail.com'],
        ].map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" style={{
            fontSize: '0.75rem', color: 'var(--muted)',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >{label}</a>
        ))}
      </div>
    </footer>
  )
}
