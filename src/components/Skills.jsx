const categories = [
  {
    title: 'Frontend',
    skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'Agile / Scrum'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '5rem 2rem', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 500 }}>
          Skills
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          Technical Stack
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {categories.map(cat => (
            <div key={cat.title} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '6px', padding: '1.25rem',
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {cat.title}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {cat.skills.map(s => (
                  <li key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--muted)' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
