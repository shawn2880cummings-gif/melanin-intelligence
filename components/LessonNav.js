'use client';
import Link from 'next/link';

export default function LessonNav({ prevLesson, nextLesson, moduleId }) {
  return (
    <div className="lesson-nav">
      <div className="lesson-nav-inner">
        {prevLesson ? (
          <Link href={`/course/${moduleId}/${prevLesson.id}`} className="lesson-nav-btn prev">
            <span className="nav-arrow">←</span>
            <span className="nav-info">
              <span className="nav-label">Previous</span>
              <span className="nav-title">{prevLesson.title.substring(0, 50)}{prevLesson.title.length > 50 ? '...' : ''}</span>
            </span>
          </Link>
        ) : (
          <div />
        )}

        <Link href={`/course/${moduleId}`} className="lesson-nav-module">
          <span>Module Overview</span>
        </Link>

        {nextLesson ? (
          <Link href={`/course/${moduleId}/${nextLesson.id}`} className="lesson-nav-btn next">
            <span className="nav-info">
              <span className="nav-label">Next Lesson</span>
              <span className="nav-title">{nextLesson.title.substring(0, 50)}{nextLesson.title.length > 50 ? '...' : ''}</span>
            </span>
            <span className="nav-arrow">→</span>
          </Link>
        ) : (
          <Link href="/course" className="lesson-nav-btn next complete">
            <span className="nav-info">
              <span className="nav-label">Finished!</span>
              <span className="nav-title">Return to Course Hub</span>
            </span>
            <span className="nav-arrow">⑨</span>
          </Link>
        )}
      </div>
    </div>
  );
}
