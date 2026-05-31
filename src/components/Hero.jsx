export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '80px 2rem 2rem',
      background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249,115,22,0.07) 0%, transparent 70%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '48px 48px', opacity: 0.25, pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.3rem 0.75rem', border: '1px solid var(--border)',
          borderRadius: '999px', fontSize: '0.72rem', color: 'var(--muted)',
          marginBottom: '1.5rem',
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          Open to work · Kampala, Uganda
        </div>

        <h1 style={{
          fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 800,
          lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1rem',
        }}>
          Niwahereza Trust<br />
          <span style={{ color: 'var(--accent)' }}>Full Stack</span> Developer
        </h1>

        <p style={{
          fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.7,
          maxWidth: '480px', marginBottom: '2rem',
        }}>
          Building web applications with React, Node.js & PostgreSQL.
          Passionate about scalable backends and clean APIs.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            padding: '0.65rem 1.5rem', background: 'var(--accent)', color: '#000',
            fontWeight: 600, fontSize: '0.85rem', borderRadius: '5px',
          }}>View Projects</a>
          <a href="#contact" style={{
            padding: '0.65rem 1.5rem', border: '1px solid var(--border)',
            color: 'var(--text)', fontSize: '0.85rem', borderRadius: '5px',
          }}>Contact Me</a>
          <a href="https://github.com/Niwahereza-Trust" target="_blank" rel="noreferrer" style={{
            padding: '0.65rem 1.5rem', border: '1px solid var(--border)',
            color: 'var(--muted)', fontSize: '0.85rem', borderRadius: '5px',
          }}>GitHub ↗</a>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex', gap: '2rem', marginTop: '3rem',
          paddingTop: '2rem', borderTop: '1px solid var(--border)',
          flexWrap: 'wrap',
        }}>
          {[['3+', 'Projects'], ['5+', 'Technologies'], ['2025', 'Refactory Cohort']].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{n}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.1rem' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
