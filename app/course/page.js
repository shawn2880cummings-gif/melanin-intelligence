'use client';
import { useEffect, useState } from 'react';
import CourseCard from '../../components/CourseCard';
import ProgressSpiral from '../../components/ProgressSpiral';
import { modules, getAllChapters, TIERS, COURSE_META } from '../../lib/courseData';
import { getProgress } from '../../lib/progressStore';

export default function CourseHubPage() {
  const [completedIds, setCompletedIds] = useState(new Set());

  useEffect(() => {
    const progress = getProgress();
    setCompletedIds(new Set(Object.keys(progress)));
  }, []);

  const allChapters = getAllChapters(); 

  return (
    <div className="course-hub">
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
        <div className="course-hub-header">
          <p className="section-eyebrow">The Curriculum</p>
          <h1 style={{ fontSize: '3.5rem', letterSpacing: '-0.02em', background: 'linear-gradient(to right, #d4a017, #fff, #d4a017)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Melanin Intelligence
          </h1>
          <p style={{ marginTop: 12, fontSize: '1.2rem', maxWidth: 700, margin: '16px auto 0', opacity: 0.9, fontWeight: 300 }}>
            {COURSE_META.totalLessons} Lessons. {COURSE_META.totalModules} Research Modules. {COURSE_META.totalTiers} Tier Spiral. The Science of the Melanin System.
          </p>
        </div>

        {/* Overall progress spiral */}
        <div className="overall-progress" style={{ margin: '60px 0' }}>
          <ProgressSpiral
            chapters={allChapters}
            completedIds={completedIds}
            tiers={TIERS}
            size={400}
          />
        </div>

        {/* Tier sections */}
        {TIERS.map((tier) => {
          const tierModules = modules.filter(m => m.tier === tier.number);
          return (
            <div key={tier.number} className="tier-section">
              <div className="tier-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                  <span className="tier-badge" style={{ borderColor: tier.color, color: tier.color }}>
                    Tier {tier.number}
                  </span>
                  <span style={{ fontSize: '0.8rem', opacity: 0.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {tier.range}
                  </span>
                </div>
                <h2 className="tier-title">{tier.name}</h2>
                <p className="tier-subtitle">{tier.subtitle}</p>
              </div>
              <div className="course-modules-grid">
                {tierModules.map((mod, i) => (
                  <CourseCard key={mod.id} module={mod} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
