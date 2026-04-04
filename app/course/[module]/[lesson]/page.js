'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { getModuleById, modules } from '../../../../lib/courseData';
import { isComplete, markComplete, markIncomplete, isModuleUnlocked } from '../../../../lib/progressStore';
import LessonNav from '../../../../components/LessonNav';
import LessonAudioPlayer from '../../../../components/LessonAudioPlayer';
import VisualAid from '../../../../components/VisualAid';

function renderContent(content) {
  if (!content) return '<p style="opacity:0.4; font-style:italic;">Content coming soon — this lesson is being prepared.</p>';
  return content
    .split('\n\n')
    .map((block) => {
      if (block.startsWith('**') && block.endsWith('**') && block.split('\n').length === 1) {
        return `<h3>${block.replace(/\*\*/g, '')}</h3>`;
      }
      if (block.startsWith('| ')) {
        const lines = block.trim().split('\n');
        const header = lines[0].split('|').filter(Boolean).map(s => `<th>${s.trim()}</th>`).join('');
        const rows = lines.slice(2).map(r => {
          const cells = r.split('|').filter(Boolean).map(s => `<td>${s.trim()}</td>`).join('');
          return `<tr>${cells}</tr>`;
        }).join('');
        return `<table><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table>`;
      }
      if (block.startsWith('- ')) {
        const items = block.split('\n').map(l => `<li>${l.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`).join('');
        return `<ul>${items}</ul>`;
      }
      return `<p>${block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/\n/g, '<br/>')}</p>`;
    })
    .join('');
}

export default function LessonPage({ params }) {
  const { module: moduleId, lesson: lessonId } = params;
  const router = useRouter();
  const mod = getModuleById(moduleId);
  if (!mod) notFound();

  const lessonIndex = mod.lessons.findIndex(l => l.id === lessonId);
  if (lessonIndex === -1) notFound();

  const lesson = mod.lessons[lessonIndex];
  const prevLesson = lessonIndex > 0 ? mod.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < mod.lessons.length - 1 ? mod.lessons[lessonIndex + 1] : null;

  const [completed, setCompleted] = useState(false);
  const [unlocked, setUnlocked] = useState(true);

  useEffect(() => {
    const isUnlocked = isModuleUnlocked(mod, modules);
    setUnlocked(isUnlocked);
    if (!isUnlocked) { router.push('/course'); return; }
    setCompleted(isComplete(lessonId));
    window.scrollTo(0, 0);
  }, [lessonId, mod, router]);

  if (!unlocked) return null;

  const handleComplete = () => { markComplete(lessonId); setCompleted(true); };
  const handleUncomplete = () => { markIncomplete(lessonId); setCompleted(false); };

  const renderedContent = renderContent(lesson.content);

  return (
    <div className="lesson-page">
      <div className="lesson-page-layout">
        {/* Sidebar */}
        <aside className="lesson-sidebar">
          <div className="sidebar-module-title">
            Module {mod.number}: {mod.title}
          </div>
          {mod.lessons.map((l) => {
            const done = isComplete(l.id);
            const active = l.id === lessonId;
            return (
              <Link key={l.id} href={`/course/${moduleId}/${l.id}`}
                className={`sidebar-lesson-link ${active ? 'active' : ''} ${done ? 'done' : ''}`}>
                <span className="sidebar-num">{done ? '✓' : l.number}</span>
                <span style={{ flex: 1, lineHeight: 1.4 }}>{l.title.split(' — ')[0]}</span>
              </Link>
            );
          })}
        </aside>

        <div>
          <div className="lesson-content-area">
            <div className="lesson-breadcrumb">
              <Link href="/course">Course</Link>
              <span>/</span>
              <Link href={`/course/${moduleId}`}>Module {mod.number}</Link>
              <span>/</span>
              <span>Lesson {lesson.number}</span>
            </div>

            <div className="lesson-header">
              <p className="lesson-chapter-label">Lesson {lesson.number}{lesson.source ? ` — ${lesson.source}` : ''}</p>
              <h1 className="lesson-page-title">{lesson.title}</h1>
              {lesson.subtitle && <p className="lesson-subtitle-tag">{lesson.subtitle}</p>}
              <span className="lesson-duration-tag">⏱ {lesson.duration}</span>
            </div>

            {/* Audio Player */}
            <LessonAudioPlayer
              lessonId={lessonId}
              lessonTitle={lesson.title}
              onComplete={handleComplete}
            />

            {/* 1. Opening Hook */}
            {lesson.hook && (
              <div style={{ fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--gold)', marginBottom: '32px', borderLeft: '2px solid var(--gold)', paddingLeft: '20px' }}>
                "{lesson.hook}"
              </div>
            )}

            {/* 2. Key Terms (Already added above) */}
            {lesson.keyTerms && lesson.keyTerms.length > 0 && (
              <div className="key-concepts-block">
                <span className="key-concepts-label">Key Terms</span>
                <ul className="key-concepts-list">
                  {lesson.keyTerms.map((item, i) => (
                    <li key={i}>
                      <strong>{item.term}:</strong> {item.definition}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 3. Core Content */}
            <div className="lesson-body" dangerouslySetInnerHTML={{ __html: renderedContent }} />

            {/* 4. Visual Aid */}
            {lesson.visualAid && (
              <VisualAid lessonId={lesson.id} description={lesson.visualAid} />
            )}

            {/* 5. Takeaways */}
            {lesson.takeaways && (
              <div style={{ marginTop: '40px', padding: '24px', background: 'rgba(107, 79, 187, 0.05)', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '16px' }}>Key Takeaways</h4>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  {lesson.takeaways.map((point, i) => (
                    <li key={i} style={{ marginBottom: '8px', display: 'flex', gap: '12px' }}>
                      <span style={{ color: 'var(--gold)' }}>◈</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 6. Reflection (Improved styling) */}
            {lesson.reflection && (
              <div className="reflection-block">
                <span className="reflection-label">Collapse Check — Reflection</span>
                <h3 className="reflection-title">Apply Your Intelligence</h3>
                <p className="reflection-prompt">{lesson.reflection}</p>
              </div>
            )}

            {/* 7. Bridge */}
            {lesson.bridge && (
              <div style={{ marginTop: '40px', padding: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'right', fontStyle: 'italic', opacity: 0.8 }}>
                Next: {lesson.bridge}
              </div>
            )}

            {/* Complete Button */}
            <div className="complete-section">
              {!completed ? (
                <button className="btn-complete" onClick={handleComplete} id={`complete-btn-${lessonId}`}>
                  ✓ Mark as Complete
                </button>
              ) : (
                <>
                  <button className="btn-complete is-complete" disabled>✓ Lesson Complete</button>
                  <button className="btn-uncomplete" onClick={handleUncomplete}>Undo</button>
                </>
              )}
            </div>
          </div>

          <LessonNav prevLesson={prevLesson} nextLesson={nextLesson} moduleId={moduleId} />
        </div>
      </div>
    </div>
  );
}
