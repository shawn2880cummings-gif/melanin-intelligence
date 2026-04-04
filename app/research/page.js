import Link from 'next/link';
import { RESEARCH_PAPERS, KEY_FRAMEWORKS, CROSS_REFERENCE } from '../../lib/researchData';

export const metadata = {
  title: 'Research Portal — Collapse Recursion by Shawn Cummings',
  description: 'Access the full body of research by Shawn Cummings: The Melanin Code, Architecture of Categorization, and more.',
};

export default function ResearchPage() {
  return (
    <div className="research-page">
      <div className="container">
        <div className="research-header">
          <p className="section-eyebrow">Research Portal</p>
          <h1>The Full Body of Work</h1>
          <p style={{ maxWidth: 600, margin: '16px auto 0', fontSize: '1.05rem' }}>
            Collapse Recursion is the synthesis of decades of research. Explore the published
            papers, key frameworks, and chapter cross-references that form its foundation.
          </p>
          <div style={{ marginTop: 24 }}>
            <a
              href="https://shawnbrown12.academia.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="academia-portal-link"
              style={{ display: 'inline-block' }}
            >
              View Full Academia.edu Portal →
            </a>
          </div>
        </div>

        {/* Research Papers */}
        <section style={{ marginBottom: 80 }}>
          <div className="section-header" style={{ textAlign: 'left', marginBottom: 32 }}>
            <p className="section-eyebrow">Published Research</p>
            <h2>Research Papers</h2>
          </div>
          <div className="research-grid">
            {RESEARCH_PAPERS.map(paper => (
              <div key={paper.id} className={`paper-card ${paper.featured ? 'featured' : ''}`} id={`paper-${paper.id}`}>
                {paper.featured && <p className="paper-featured-badge">★ Featured Work</p>}
                <h3 className="paper-title">{paper.title}</h3>
                <p className="paper-subtitle">{paper.subtitle}</p>
                <p className="paper-desc">{paper.description}</p>
                <div className="paper-tags">
                  {paper.tags.map(tag => <span key={tag} className="paper-tag">{tag}</span>)}
                </div>
                <a href={paper.url} target="_blank" rel="noopener noreferrer" className="paper-link">
                  Read on Academia.edu →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Key Frameworks */}
        <section className="frameworks-section">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: 0 }}>
            <p className="section-eyebrow">Core Frameworks</p>
            <h2>Key Concepts at a Glance</h2>
          </div>
          <div className="frameworks-grid">
            {KEY_FRAMEWORKS.map(fw => (
              <div key={fw.id} className="framework-card" id={`framework-${fw.id}`}>
                <span className="framework-icon">{fw.icon}</span>
                <h3 className="framework-title">{fw.title}</h3>
                <p className="framework-desc">{fw.description}</p>
                <p className="framework-chapter">
                  <Link href={`/course/module-${Math.ceil(fw.chapter / 5 > 4 ? 5 : Math.ceil(fw.chapter / 5))}`}
                    style={{ color: 'var(--gold)' }}>
                    See Chapter {fw.chapter} →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-reference */}
        <section className="cross-ref-section">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: 0 }}>
            <p className="section-eyebrow">Index</p>
            <h2>Topic Cross-Reference</h2>
          </div>
          <table className="cross-ref-table">
            <thead>
              <tr>
                <th>Topic</th>
                <th>Chapters</th>
                <th>Related Research</th>
              </tr>
            </thead>
            <tbody>
              {CROSS_REFERENCE.map((row, i) => (
                <tr key={i}>
                  <td style={{ color: 'var(--cream)', fontWeight: 500 }}>{row.topic}</td>
                  <td>
                    {row.chapters.map(ch => (
                      <span key={ch} className="chap-badge">Ch. {ch}</span>
                    ))}
                  </td>
                  <td>
                    {row.papers.map(pid => {
                      const paper = RESEARCH_PAPERS.find(p => p.id === pid);
                      return paper ? (
                        <a key={pid} href={paper.url} target="_blank" rel="noopener noreferrer"
                          style={{ color: 'var(--gold)', fontSize: 13, display: 'block' }}>
                          {paper.title}
                        </a>
                      ) : null;
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', paddingTop: 40 }}>
          <h2 style={{ marginBottom: 16 }}>Ready to Apply the Frameworks?</h2>
          <p style={{ marginBottom: 32 }}>The research comes alive in the course.</p>
          <Link href="/course" className="btn-primary" id="research-to-course-btn">Enter the Course</Link>
        </div>
      </div>
    </div>
  );
}
