'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getModuleProgress, isModuleUnlocked } from '../lib/progressStore';
import { modules } from '../lib/courseData';

export default function CourseCard({ module, index }) {
  const [progress, setProgress] = useState({ completed: 0, total: 0, percent: 0 });
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setProgress(getModuleProgress(module));
    setUnlocked(isModuleUnlocked(module, modules));
  }, [module]);

  // Locked state
  if (!unlocked) {
    return (
      <div className="course-card locked" style={{ '--module-color': module.color, '--delay': `${index * 0.1}s` }}>
        <div className="course-card-header">
          <span className="module-number">MODULE {module.number}</span>
          <span className="module-glyph lock-icon">🔒</span>
        </div>
        <h3 className="course-card-title">{module.title}</h3>
        <p className="course-card-subtitle">{module.subtitle}</p>
        <div className="course-card-meta">
          <span className="lesson-count">{module.lessons.length} Lessons</span>
        </div>
        <div className="locked-overlay">
          <span>Complete the previous module to unlock</span>
        </div>
      </div>
    );
  }

  // Unlocked state
  return (
    <Link href={`/course/${module.id}`} className="course-card" style={{ '--module-color': module.color, '--delay': `${index * 0.1}s` }}>
      <div className="course-card-glow" />
      <div className="course-card-header">
        <span className="module-number">MODULE {module.number}</span>
        <span className="module-glyph">{module.glyph}</span>
      </div>
      <h3 className="course-card-title">{module.title}</h3>
      <p className="course-card-subtitle">{module.subtitle}</p>
      <div className="course-card-meta">
        <span className="lesson-count">{module.lessons.length} Lessons</span>
        <span className="progress-text">
          {progress.completed}/{progress.total} Complete
        </span>
      </div>
      <div className="progress-bar-wrap">
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${progress.percent}%` }} />
        </div>
        <span className="progress-pct">{progress.percent}%</span>
      </div>
      <div className="course-card-arrow">Explore Module →</div>
    </Link>
  );
}
