const projects = [
  {
    num: '01',
    title: 'Grocery Buddy',
    period: 'Oct 2024 – Nov 2024',
    description: 'Full-stack grocery management app with RESTful APIs for inventory and product management. PostgreSQL database integration with Git/GitHub collaboration.',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'REST API', 'Git'],
    github: 'https://github.com/Niwahereza-Trust/GRORECYBUDDY',
  },
  {
    num: '02',
    title: 'Beyond Sports Platform',
    period: 'Feb 2026 – Present',
    description: 'Sports digital platform with scalable backend architecture. Designing REST APIs and responsive features using Agile practices and GitHub workflows.',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Agile'],
    github: 'https://github.com/BEYOND-SPORTS-UNIFIED-CORPORATE',
  },
  {
    num: '03',
    title: 'Mayondo Wood & Furniture',
    period: 'Jun 2025 – Sept 2025',
    description: 'Inventory and operations management system supporting business operations, customer records, and internal workflows.',
    tech: ['Web Development', 'Inventory Management'],
    github: 'https://github.com/Niwahereza-Trust/final-MWF-project',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 500 }}>
          Projects
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          My Work
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {projects.map(p => (
            <div key={p.num} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '6px', padding: '1.5rem',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--subtle)', fontWeight: 600 }}>{p.num}</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.01em' }}>{p.title}</h3>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{p.period}</span>
              </div>

              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                {p.description}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      fontSize: '0.68rem', padding: '0.2rem 0.55rem',
                      border: '1px solid var(--border)', borderRadius: '999px',
                      color: 'var(--muted)',
                    }}>{t}</span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" style={{
                  fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 500,
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                }}>
                  GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
