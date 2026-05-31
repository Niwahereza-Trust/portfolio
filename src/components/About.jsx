export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 2rem', maxWidth: '720px', margin: '0 auto' }}>
      <div style={{ fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 500 }}>
        About
      </div>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
        Who I Am
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.92rem' }}>
          I'm a Junior Full Stack Developer currently completing the Software Development Apprenticeship at <strong style={{ color: 'var(--text)' }}>Refactory Academy</strong> in Kampala. I build web applications using React.js, Node.js, Express.js, and PostgreSQL.
        </p>
        <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.92rem' }}>
          I'm passionate about backend systems, scalable APIs, and solving real problems through code. I work well in team environments using Git/GitHub and Agile/Scrum workflows.
        </p>
        <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.92rem' }}>
          I speak <strong style={{ color: 'var(--text)' }}>English</strong> and <strong style={{ color: 'var(--text)' }}>Runyankole</strong> fluently, with basic French and Luganda.
        </p>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px',
        background: 'var(--border)', marginTop: '2.5rem', border: '1px solid var(--border)',
      }}>
        {[
          ['@', 'niwaherezatrust6@gmail.com'],
          ['📞', '+256 771 218 171'],
          ['🔗', 'linkedin.com/in/niwahereza-trust'],
          ['📍', 'Kampala, Uganda'],
        ].map(([icon, val]) => (
          <div key={val} style={{ background: 'var(--card)', padding: '0.9rem 1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '0.8rem' }}>{icon}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{val}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
