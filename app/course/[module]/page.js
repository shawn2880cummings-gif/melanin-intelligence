'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { getModuleById, modules } from '../../../lib/courseData';
import { getModuleProgress, isComplete, isModuleUnlocked } from '../../../lib/progressStore';

export default function ModulePage({ params }) {
  const { module: moduleId } = params;
  const router = useRouter();
  const mod = getModuleById(moduleId);
  if (!mod) notFound();

  const [progress, setProgress] = useState({ completed: 0, total: 0, percent: 0 });
  const [completedIds, setCompletedIds] = useState({});
  const [unlocked, setUnlocked] = useState(true);

  useEffect(() => {
    const isUnlocked = isModuleUnlocked(mod, modules);
    setUnlocked(isUnlocked);
    if (!isUnlocked) {
      router.push('/course');
      return;
    }
    setProgress(getModuleProgress(mod));
    const ids = {};
    mod.lessons.forEach(l => { ids[l.id] = isComplete(l.id); });
    setCompletedIds(ids);
  }, [mod, router]);

  if (!unlocked) return null;

  const firstIncomplete = mod.lessons.find(l => !completedIds[l.id]);
  const nextLesson = firstIncomplete || mod.lessons[0];

  // Find prev/next modules by array index
  const modIdx = modules.findIndex(m => m.id === mod.id);
  const prevMod = modIdx > 0 ? modules[modIdx - 1] : null;
  const nextMod = modIdx < modules.length - 1 ? modules[modIdx + 1] : null;

  return (
    <div className="module-page">
      <div className="module-page-hero" data-glyph={mod.glyph}
        style={{ background: `linear-gradient(135deg, ${mod.color}22, transparent)` }}>
        <div className="container">
          <p className="module-breadcrumb">
            <Link href="/course">Course</Link> / Module {mod.number}
          </p>
          <p className="module-number" style={{ color: mod.color, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 600 }}>
            MODULE {mod.number}
          </p>
          <h1 className="module-page-title">{mod.title}</h1>
          <p className="module-page-subtitle">{mod.subtitle}</p>
          <p className="module-page-desc">{mod.description}</p>
          <div className="module-progress-bar">
            <p className="module-progress-label">{progress.completed} of {progress.total} lessons complete</p>
            <div className="module-progress-track">
              <div className="module-progress-fill" style={{ width: `${progress.percent}%`, background: `linear-gradient(90deg, ${mod.color}, #c9a84c)` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div style={{ padding: '32px 0 8px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <Link href={`/course/${moduleId}/${nextLesson.id}`} className="btn-primary" id={`start-module-${mod.number}`}>
            {progress.completed === 0 ? 'Begin Module' : progress.completed === progress.total ? 'Review Module' : 'Continue →'}
          </Link>
          {progress.percent > 0 && (
            <span style={{ fontSize: 13, color: 'var(--gold)' }}>{progress.percent}% complete</span>
          )}
        </div>
      </div>

      <div className="lessons-section">
        <div className="container">
          <h2 style={{ marginBottom: 32, fontSize: '1.2rem' }}>Lessons</h2>
          <div className="lessons-list">
            {mod.lessons.map((lesson) => {
              const done = completedIds[lesson.id];
              return (
                <Link key={lesson.id} href={`/course/${moduleId}/${lesson.id}`}
                  className={`lesson-item ${done ? 'completed' : ''}`}>
                  <div className="lesson-number-badge">
                    {done ? '✓' : lesson.number}
                  </div>
                  <div className="lesson-info">
                    <div className="lesson-item-title">{lesson.title}</div>
                    <div className="lesson-item-duration">
                      <span className="lesson-item-meta">{lesson.duration}</span>
                      {done && <span className="complete-badge">✓ Complete</span>}
                    </div>
                  </div>
                  <span className="lesson-item-arrow">→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap', gap: 16 }}>
          {prevMod && (
            <Link href={`/course/${prevMod.id}`} className="btn-secondary">
              ← Module {prevMod.number}: {prevMod.title.split(' — ')[0]}
            </Link>
          )}
          <div />
          {nextMod && (
            <Link href={`/course/${nextMod.id}`} className="btn-secondary">
              Module {nextMod.number}: {nextMod.title.split(' — ')[0]} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
