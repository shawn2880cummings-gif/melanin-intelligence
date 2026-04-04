import Link from 'next/link';
import Image from 'next/image';
import { modules, COURSE_META, TIERS } from '../lib/courseData';

export const metadata = {
  title: 'Vines Connection | Melanin Intelligence — Official Course',
  description: 'The Science of the Melanin System. A 3-tier biological architecture for understanding human protection and performance.',
};

export default function HomePage() {
  const totalLessons = COURSE_META.totalLessons;

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-spiral">⑨</div>
        <div className="hero-content">
          <div className="hero-vine-logo-wrap">
            <Image
              src="/vine-logo.png"
              alt="VINE"
              width={140}
              height={140}
              className="hero-vine-logo"
              priority
            />
          </div>
          <span className="hero-eyebrow">A 3-Tier Bio-Architectural Spiral</span>
          <h1 className="hero-title">
            Vines <span>Connection</span>
            <br />Melanin Intelligence
          </h1>
          <p className="hero-subtitle">
            &ldquo;{COURSE_META.tagline}&rdquo;
          </p>
          <div className="hero-buttons">
            <Link href="/course" className="btn-primary" id="begin-course-cta">Begin the Course</Link>
            <Link href="https://shawnbrown12.academia.edu/" target="_blank" className="btn-secondary" id="try-cre-cta">View Research Portals</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{COURSE_META.totalModules}</span>
              <span className="stat-label">Modules</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{totalLessons}</span>
              <span className="stat-label">Lessons</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{COURSE_META.totalTiers}</span>
              <span className="stat-label">Tiers</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">SCROLL</div>
      </section>

      {/* About */}
      <section className="about-section section">
        <div className="container">
          <div className="about-grid">
            <div>
              <p className="about-label">About The System</p>
              <h2>The master switch.<br />The biological shield.</h2>
              <p className="about-text">
                Most people think of melanin as a cosmetic pigment. In reality, it is a sophisticated biological 
                material that organizes your life, manages energy flow, and protects your cellular hardware.
              </p>
              <p className="about-text">
                <em>Vines Connection: Melanin Intelligence</em> is a 36-lesson deep dive into the science of the 
                human field. From the **MC1R functional axis** to the **toroidal biofield**, this course explains 
                how your biology is the primary record of your history — and how to restore its coherence.
              </p>
            </div>
            <div className="about-quote">
              <blockquote>
                &ldquo;True intelligence is not theoretical; it is biological. When you align your cellular 
                architecture with the planet's pulse, the distortion of the environment collapses into coherence.&rdquo;
              </blockquote>
              <cite>— Vines Connection Research Portal</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Spiral Curriculum Preview */}
      <section className="modules-section section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">The Spiral Curriculum</p>
            <h2>3 Tiers. 18 Modules. Complete Intelligence.</h2>
            <p className="section-desc">
              We return to every topic three times, building complexity from the map to the terrain.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '80px' }}>
            {TIERS.map(tier => (
              <div key={tier.number} style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: `1px solid ${tier.color}33` }}>
                <span className="tier-badge" style={{ borderColor: tier.color, color: tier.color, marginBottom: '16px' }}>TIER {tier.number}</span>
                <h3 style={{ marginBottom: '12px' }}>{tier.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--cream-dim)', marginBottom: '20px' }}>{tier.subtitle}</p>
                <div style={{ fontSize: '0.8rem', opacity: 0.5, letterSpacing: '0.1em' }}>{tier.range}</div>
              </div>
            ))}
          </div>

          <div className="modules-grid">
            {modules.map((mod, i) => (
              <Link key={mod.id} href={`/course/${mod.id}`} className="course-card" style={{ '--module-color': mod.color, '--delay': `${i * 0.1}s` }}>
                <div className="course-card-glow" />
                <div className="course-card-header">
                  <span className="module-number">MODULE {mod.number}</span>
                  <span className="module-glyph">{mod.glyph}</span>
                </div>
                <h3 className="course-card-title">{mod.title}</h3>
                <p className="course-card-subtitle">{mod.subtitle}</p>
                <div className="course-card-meta">
                  <span className="lesson-count">{mod.lessons.length} Lessons</span>
                </div>
                <div className="course-card-arrow">Explore Module →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Author/Source */}
      <section className="author-section section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: 40 }}>
            <p className="section-eyebrow">The Source</p>
            <h2>Centering Vines Connection</h2>
          </div>
          <div className="author-card">
            <div className="author-logo-wrap">
              <Image src="/vine-logo.png" alt="VINE" width={100} height={100} className="author-logo-img" />
            </div>
            <h3 className="author-name">Vines Connection</h3>
            <p className="author-title">Biology · Physics · Forensic Chemistry</p>
            <p className="author-bio">
              The Vines Connection project is dedicated to the study of the Melanin-Iron Regulatory System 
              and the biological framework of human protection.
            </p>
            <p className="author-bio">
              By synthesisng historical forensics with biological chemistry, we provide the necessary keys 
              for understanding the human architecture. Our research focuses on the mechanical link between 
              the biofield and the environmental record.
            </p>
            <a href="https://vines-connection.vercel.app" target="_blank" rel="noopener noreferrer" className="author-link" id="academia-link">
              View Research Portfolio → vines-connection.vercel.app
            </a>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="cta-strip">
        <div className="container">
          <h2>Restoration of the Record</h2>
          <p>The activation begins with the understanding of your own biological switch.</p>
          <div className="hero-buttons">
            <Link href="/course" className="btn-primary" id="footer-begin-cta">Enter the Course</Link>
            <Link href="https://shawnbrown12.academia.edu/" className="btn-secondary" id="footer-research-cta">View Portal</Link>
          </div>
        </div>
      </section>
    </>
  );
}

