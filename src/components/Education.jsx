const education = [
  {
    year: '2025 – Present',
    title: 'Apprenticeship in Software Development',
    institution: 'Refactory Academy',
    location: 'Kampala, Uganda',
    note: 'Full stack web development — React, Node.js, PostgreSQL, Agile',
  },
  {
    year: '2020 – 2024',
    title: 'Uganda Certificate of Education (UCE)',
    institution: "Ntungamo Girls' High School",
    location: 'Ntungamo, Uganda',
    note: null,
  },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '5rem 2rem', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 500 }}>
          Education
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          Background
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {education.map((e, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '140px 1fr',
              gap: '1.5rem', padding: '1.5rem 0',
              borderBottom: i < education.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent)', paddingTop: '0.2rem' }}>{e.year}</div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '0.2rem' }}>{e.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: e.note ? '0.4rem' : 0 }}>
                  {e.institution} · {e.location}
                </div>
                {e.note && <div style={{ fontSize: '0.78rem', color: 'var(--subtle)' }}>{e.note}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
