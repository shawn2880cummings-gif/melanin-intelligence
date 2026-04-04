'use client';

// Archimedean spiral: r = a + b*θ
// Refactored for dynamic tiers (14+12)
// Each tier is a continuous span of the spiral.

function buildSpiralPath(startFrac, endFrac, totalTurns, size, minR, spacing) {
  const cx = size / 2;
  const cy = size / 2;
  const numPts = 32;
  const points = [];
  for (let j = 0; j <= numPts; j++) {
    const t = (startFrac + (j / numPts) * (endFrac - startFrac)) * totalTurns * 2 * Math.PI;
    const r = minR + (spacing / (2 * Math.PI)) * t;
    const x = cx + r * Math.cos(t - Math.PI / 2);
    const y = cy + r * Math.sin(t - Math.PI / 2);
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return 'M ' + points.join(' L ');
}

function getSegmentEndPoint(frac, totalTurns, size, minR, spacing) {
  const cx = size / 2;
  const cy = size / 2;
  const t = frac * totalTurns * 2 * Math.PI;
  const r = minR + (spacing / (2 * Math.PI)) * t;
  return {
    x: cx + r * Math.cos(t - Math.PI / 2),
    y: cy + r * Math.sin(t - Math.PI / 2),
  };
}

export default function ProgressSpiral({
  chapters = [],
  completedIds = new Set(),
  tiers = [],
  size = 360,
}) {
  const TIER_COUNT = tiers.length || 3;
  const totalTurns = TIER_COUNT + 1; // 4 turns for 3 tiers looks better
  const minR = 25;
  const spacing = 28;
  const cx = size / 2;
  const cy = size / 2;

  const totalLessons = chapters.length;
  const TOTAL_SLOTS = totalLessons;

  // Build segments
  const segments = chapters.map((slot, i) => {
    const startFrac = i / TOTAL_SLOTS;
    const endFrac = (i + 1) / TOTAL_SLOTS;
    const d = buildSpiralPath(startFrac, endFrac, totalTurns, size, minR, spacing);
    return { d, slot, index: i };
  });

  // Dynamic Tier boundary positions
  const tierBoundaries = [];
  let currentOffset = 0;
  // We place a marker at the start of each tier EXCEPT the first
  for (let i = 1; i < tiers.length; i++) {
    // Find how many chapters are in previous tiers
    const prevTierLessons = chapters.filter(c => c.tier < (i + 1)).length;
    const frac = prevTierLessons / TOTAL_SLOTS;
    tierBoundaries.push({
      ...getSegmentEndPoint(frac, totalTurns, size, minR, spacing),
      tierNum: i + 1,
    });
  }

  // Progress calc
  const completed = chapters.filter(s => completedIds.has(s.id)).length;
  const pct = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

  return (
    <div className="spiral-wrap" style={{ width: size, height: size, position: 'relative' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
        style={{ overflow: 'visible', display: 'block' }}>
        <defs>
          {tiers.map(t => (
            <filter key={t.number} id={`glow-t${t.number}`} x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feFlood floodColor={t.color} floodOpacity="0.55" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          ))}
        </defs>

        {/* Track */}
        {segments.map((seg, i) => (
          <path key={`track-${i}`} d={seg.d} fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={6} strokeLinecap="round" />
        ))}

        {/* Completed segments */}
        {segments.map(seg => {
          const { slot } = seg;
          if (!completedIds.has(slot.id)) return null;
          const tierIdx = (slot.tier || 1) - 1;
          const tier = tiers[tierIdx] || tiers[0];
          return (
            <path key={`fill-${slot.id}`} d={seg.d} fill="none"
              stroke={tier.color} strokeWidth={6} strokeLinecap="round"
              filter={`url(#glow-t${slot.tier || 1})`}
              style={{ transition: 'opacity 0.6s ease' }} />
          );
        })}

        {/* Tier boundary markers */}
        {tierBoundaries.map((pt, i) => (
          <g key={`boundary-${i}`}>
            <circle cx={pt.x} cy={pt.y} r={5} fill="#0a0a0f"
              stroke={tiers[pt.tierNum - 1]?.color || '#c9a84c'}
              strokeWidth={2} opacity={0.9} />
            <text x={pt.x} y={pt.y + 16} textAnchor="middle"
              fill={tiers[pt.tierNum - 1]?.color || '#c9a84c'}
              fontSize="8" fontFamily="Inter, sans-serif"
              letterSpacing="0.12em" fontWeight="600">
              TIER {pt.tierNum}
            </text>
          </g>
        ))}

        {/* Center — 9 glyph (Branding) */}
        <circle cx={cx} cy={cy} r={22} fill="rgba(201,168,76,0.07)"
          stroke="rgba(201,168,76,0.2)" strokeWidth={1} />
        <text x={cx} y={cy + 9} textAnchor="middle" fill="#c9a84c"
          fontSize="24" fontFamily="Cinzel, serif" fontWeight="700"
          style={{ filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.8))' }}>
          9
        </text>

        {/* Progress label */}
        <text x={cx} y={size - 4} textAnchor="middle"
          fill="rgba(232,220,200,0.6)" fontSize="11"
          fontFamily="Inter, sans-serif" letterSpacing="0.2em" fontWeight="300">
          {pct}% COLLAPSED
        </text>
      </svg>

      {/* Tier legend */}
      <div className="spiral-legend" style={{ color: 'rgba(232,220,200,0.7)' }}>
        {tiers.map(t => {
          const tierChapters = chapters.filter(c => c.tier === t.number);
          const tierDone = tierChapters.filter(s => completedIds.has(s.id)).length;
          return (
            <div key={t.number} className="spiral-legend-item" style={{ marginBottom: '8px' }}>
              <span className="legend-dot" style={{ background: t.color, boxShadow: `0 0 10px ${t.color}` }} />
              <span className="legend-label">Tier {t.number}: {t.name}</span>
              <span className="legend-count" style={{ color: '#fff', fontWeight: 600 }}>{tierDone}/{tierChapters.length}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
