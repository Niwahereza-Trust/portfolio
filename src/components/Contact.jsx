import { Mail, Phone, Link, GitBranch, MapPin } from 'lucide-react'

const contacts = [
  { label: 'Email', value: 'niwaherezatrust6@gmail.com', href: 'mailto:niwaherezatrust6@gmail.com', icon: Mail },
  { label: 'Phone', value: '+256 771 218 171', href: 'tel:+256771218171', icon: Phone },
 { label: 'LinkedIn', value: 'linkedin.com/in/niwahereza-trust', href: 'www.linkedin.com/in/niwahereza-trust-05b408405', icon: Link },
  { label: 'GitHub', value: 'github.com/Niwahereza-Trust', href: 'https://github.com/Niwahereza-Trust', icon: GitBranch},
  { label: 'Location', value: 'Kampala, Uganda', href: '#', icon: MapPin },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 500 }}>
          Contact
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
          Get In Touch
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginBottom: '2rem' }}>
          Open to software development roles in Kampala. Let's talk.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '6px', overflow: 'hidden' }}>
          {contacts.map(({ label, value, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '0.9rem 1.25rem', background: 'var(--card)',
              transition: 'background 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--card)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                <Icon size={15} color="var(--accent)" />
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500, width: '70px' }}>{label}</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text)' }}>{value}</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}