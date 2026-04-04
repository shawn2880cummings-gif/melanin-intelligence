'use client';
import { useState } from 'react';

/* =====================================================
   TIER 1 VISUALS (Lessons 1-12)
   ===================================================== */

const VisualL1 = () => (
  <svg viewBox="0 0 400 400" className="visual-svg">
    <defs>
      <radialGradient id="gold-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.2" />
        <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="200" cy="200" r="180" fill="url(#gold-glow)" />
    <path d="M200 200 m-150 0 a150 150 0 1 0 300 0 a150 150 0 1 0 -300 0" fill="none" stroke="var(--gold-dim)" strokeWidth="1" strokeDasharray="5,5" />
    <path d="M200 200 m-100 0 a100 100 0 1 0 200 0 a100 100 0 1 0 -200 0" fill="none" stroke="var(--purple-dim)" strokeWidth="1" strokeDasharray="5,5" />
    <path d="M200 200 m-50 0 a50 50 0 1 0 100 0 a50 50 0 1 0 -100 0" fill="none" stroke="var(--emerald-dim)" strokeWidth="1" strokeDasharray="5,5" />
    <text x="200" y="190" textAnchor="middle" fill="var(--gold)" fontSize="12" fontWeight="700">TIER 1</text>
    <text x="200" y="140" textAnchor="middle" fill="var(--purple)" fontSize="12" fontWeight="700">TIER 2</text>
    <text x="200" y="90" textAnchor="middle" fill="var(--emerald)" fontSize="12" fontWeight="700">TIER 3</text>
    {Array.from({ length: 36 }).map((_, i) => {
      const angle = (i * 10) * (Math.PI / 180);
      const r = 50 + (i * 3.5);
      const x = 200 + r * Math.cos(angle);
      const y = 200 + r * Math.sin(angle);
      const tierColor = i < 12 ? 'var(--gold)' : i < 24 ? 'var(--purple)' : 'var(--emerald)';
      return <circle key={i} cx={x} cy={y} r="2.5" fill={tierColor} opacity="0.8" className="pulse-dot" style={{ animationDelay: `${i * 0.1}s` }} />;
    })}
    <text x="200" y="380" textAnchor="middle" fill="var(--gold)" fontSize="14" fontWeight="600">THE 3-TIER SPIRAL CURRICULUM</text>
  </svg>
);

const VisualL2 = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '400px', margin: '0 auto' }}>
    {[
      { label: 'MAGNETITE', desc: 'Oscillation center', icon: '🧲' },
      { label: 'SHIELD', desc: 'Antioxidant protection', icon: '🛡️' },
      { label: 'POLYMER', desc: 'Structural units', icon: '🧱' },
      { label: 'RECEPTOR', desc: 'Chemical ears', icon: '👂' }
    ].map((item, i) => (
      <div key={i} style={{ padding: '16px', borderRadius: '12px', background: 'var(--gold-dim)', border: '1px solid rgba(212, 160, 23, 0.2)', textAlign: 'center' }}>
        <div style={{ fontSize: '20px', marginBottom: '8px' }}>{item.icon}</div>
        <div style={{ fontSize: '10px', fontWeight: '700', color: 'var(--gold)' }}>{item.label}</div>
        <div style={{ fontSize: '10px', color: 'var(--cream-dim)' }}>{item.desc}</div>
      </div>
    ))}
  </div>
);

const VisualL3 = () => {
  const [on, setOn] = useState(true);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', opacity: on ? 1 : 0.3, transition: '0.3s' }}>
          <div style={{ padding: '20px', borderRadius: '12px', background: 'var(--gold-dim)', border: '1px solid var(--gold)' }}>
            <span style={{ fontSize: '24px' }}>🛡️</span>
            <div style={{ fontSize: '10px', marginTop: '8px', color: 'var(--gold)' }}>EUMELANIN</div>
          </div>
        </div>
        <button onClick={() => setOn(!on)} className="mc1r-switch-btn" style={{ 
          width: '80px', height: '40px', borderRadius: '40px', background: on ? 'var(--gold)' : 'var(--emerald-dim)', 
          border: '1px solid rgba(255,255,255,0.2)', position: 'relative', cursor: 'pointer'
        }}>
          <div style={{ 
            position: 'absolute', top: '4px', left: on ? '44px' : '4px', 
            width: '30px', height: '30px', background: 'white', borderRadius: '50%', transition: '0.2s cubic-bezier(0.4, 0, 0.2, 1)' 
          }} />
        </button>
        <div style={{ textAlign: 'center', opacity: !on ? 1 : 0.3, transition: '0.3s' }}>
          <div style={{ padding: '20px', borderRadius: '12px', background: 'var(--emerald-dim)', border: '1px solid var(--emerald)' }}>
            <span style={{ fontSize: '24px' }}>⚠️</span>
            <div style={{ fontSize: '10px', marginTop: '8px', color: 'var(--emerald)' }}>PHEOMELANIN</div>
          </div>
        </div>
      </div>
      <div style={{ fontSize: '12px', color: 'var(--cream-dim)', textAlign: 'center' }}>
        MC1R Switch: <strong>{on ? 'FUNCTIONAL (ON)' : 'LOSS-OF-FUNCTION (OFF)'}</strong>
        <p style={{ marginTop: '4px', maxWidth: '300px' }}>Click the switch to see the default biological setting change.</p>
      </div>
    </div>
  );
};

const VisualL4 = () => (
  <svg viewBox="0 0 400 150" className="visual-svg">
    <path d="M50 100 L350 100" stroke="var(--gold-dim)" strokeWidth="2" strokeDasharray="5,5" />
    <g transform="translate(80, 80)">
      <circle r="15" fill="var(--gold-dim)" stroke="var(--gold)" />
      <text y="40" textAnchor="middle" fill="var(--gold)" fontSize="9">FISH</text>
    </g>
    <g transform="translate(200, 80)">
      <circle r="20" fill="var(--gold-dim)" stroke="var(--gold)" />
      <text y="40" textAnchor="middle" fill="var(--gold)" fontSize="9">SALAMANDER</text>
    </g>
    <g transform="translate(320, 80)">
      <circle r="25" fill="var(--gold-dim)" stroke="var(--gold)" />
      <text y="40" textAnchor="middle" fill="var(--gold)" fontSize="9">HUMAN</text>
    </g>
    <text x="200" y="20" textAnchor="middle" fill="var(--gold)" fontSize="11" fontWeight="600">CROSS-KINGDOM MC1R</text>
  </svg>
);

const VisualL5 = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '400px', margin: '0 auto' }}>
    {[
      { label: 'SOLAR SHIELD', desc: 'Converts 99.9% of UV to heat', icon: '🛡️' },
      { label: 'ANTIOXIDANT', desc: 'Cellular cleanup crew', icon: '🧹' },
      { label: 'BROADBAND', desc: 'Absorbs the whole spectrum', icon: '🌈' },
      { label: 'CHELATOR', desc: 'Binds and stabilizes metals', icon: '🧲' }
    ].map((item, i) => (
      <div key={i} style={{ padding: '20px', borderRadius: '12px', background: 'var(--gold-dim)', border: '1px solid rgba(212, 160, 23, 0.2)', textAlign: 'center' }}>
        <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
        <div style={{ fontSize: '10px', fontWeight: '700', color: 'var(--gold)', marginBottom: '4px' }}>{item.label}</div>
        <div style={{ fontSize: '11px', color: 'var(--cream-dim)', lineHeight: 1.3 }}>{item.desc}</div>
      </div>
    ))}
  </div>
);

const VisualL6 = () => (
    <svg viewBox="0 0 440 100" className="visual-svg">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="var(--gold)" />
        </marker>
      </defs>
      <g transform="translate(10, 40)">
        <rect width="80" height="30" rx="4" fill="var(--gold-dim)" stroke="var(--gold)" />
        <text x="40" y="20" textAnchor="middle" fill="var(--gold)" fontSize="9">TYROSINE</text>
        <line x1="85" y1="15" x2="105" y2="15" stroke="var(--gold)" markerEnd="url(#arrowhead)" />
      </g>
      <g transform="translate(115, 40)">
        <rect width="90" height="30" rx="4" fill="var(--gold-dim)" stroke="var(--gold)" />
        <text x="45" y="20" textAnchor="middle" fill="var(--gold)" fontSize="9">DOPAQUINONE</text>
        <line x1="95" y1="15" x2="115" y2="15" stroke="var(--gold)" markerEnd="url(#arrowhead)" />
      </g>
      <g transform="translate(240, 40)">
        <rect width="80" height="30" rx="4" fill="var(--gold-dim)" stroke="var(--gold)" />
        <text x="40" y="20" textAnchor="middle" fill="var(--gold)" fontSize="9">DHI/DHICA</text>
        <line x1="85" y1="15" x2="105" y2="15" stroke="var(--gold)" markerEnd="url(#arrowhead)" />
      </g>
      <g transform="translate(345, 40)">
        <rect width="80" height="30" rx="4" fill="var(--gold)" />
        <text x="40" y="20" textAnchor="middle" fill="var(--obsidian)" fontSize="9" fontWeight="700">POLYMER</text>
      </g>
      <text x="220" y="95" textAnchor="middle" fill="var(--gold)" fontSize="11" fontWeight="600">EUMELANIN ASSEMBLY LINE</text>
    </svg>
);

const VisualL7 = () => (
    <svg viewBox="0 0 400 250" className="visual-svg">
      <path d="M200 50 L200 120 L100 200 M200 120 L300 200" stroke="var(--gold)" strokeWidth="3" fill="none" />
      <circle cx="200" cy="50" r="20" fill="var(--gold-dim)" stroke="var(--gold)" />
      <text x="200" y="54" textAnchor="middle" fill="var(--gold)" fontSize="9">DOPAQUINONE</text>
      <g transform="translate(100, 200)">
        <circle r="25" fill="var(--gold-dim)" stroke="var(--gold)" />
        <text y="40" textAnchor="middle" fill="var(--gold)" fontSize="10">EUMELANIN</text>
      </g>
      <g transform="translate(300, 200)">
        <circle r="25" fill="var(--emerald-dim)" stroke="var(--emerald)" />
        <text y="40" textAnchor="middle" fill="var(--emerald)" fontSize="10">PHEOMELANIN</text>
      </g>
      <text x="200" y="10" textAnchor="middle" fill="var(--gold)" fontSize="12" fontWeight="600">THE PATHWAY FORK</text>
    </svg>
);

const VisualL10 = () => (
  <svg viewBox="0 0 400 400" className="visual-svg">
    <g transform="translate(200, 200)">
      <circle r="40" fill="none" stroke="var(--gold)" strokeWidth="1" strokeDasharray="4,4" />
      <g>
        {Array.from({ length: 6 }).map((_, i) => (
          <circle key={`p-${i}`} cx={15 * Math.cos(i * 60 * Math.PI/180)} cy={15 * Math.sin(i * 60 * Math.PI/180)} r="6" fill="var(--gold)" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <circle key={`n-${i}`} cx={10 * Math.cos((i * 60 + 30) * Math.PI/180)} cy={10 * Math.sin((i * 60 + 30) * Math.PI/180)} r="6" fill="var(--cream-dim)" />
        ))}
      </g>
      <circle r="80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <circle r="140" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
    </g>
    <text x="200" y="380" textAnchor="middle" fill="var(--gold)" fontSize="14" fontWeight="600">CARBON-12 (6-6-6)</text>
  </svg>
);

const VisualL11 = () => (
  <svg viewBox="0 0 400 400" className="visual-svg">
    <path d="M200 40 Q215 40 220 55 L225 100 Q250 110 245 160 Q240 220 220 240 L230 380 M200 40 Q185 40 180 55 L175 100 Q150 110 155 160 Q160 220 180 240 L170 380 M180 110 L100 200 M220 110 L300 200" stroke="var(--cream-dim)" strokeWidth="2" fill="none" opacity="0.3" />
    <circle cx="200" cy="65" r="8" fill="var(--gold)" className="pulse-dot" />
    <circle cx="200" cy="130" r="10" fill="var(--gold)" className="pulse-dot" style={{ animationDelay: '0.5s' }} />
    <circle cx="200" cy="180" r="12" fill="var(--gold)" className="pulse-dot" style={{ animationDelay: '1s' }} />
    <text x="215" y="68" fill="var(--gold)" fontSize="10">BRAIN</text>
    <text x="215" y="133" fill="var(--gold)" fontSize="10">HEART</text>
    <text x="215" y="183" fill="var(--gold)" fontSize="10">GUT</text>
    <text x="200" y="380" textAnchor="middle" fill="var(--gold)" fontSize="12" fontWeight="600">UNIFIED MELANIN ARCHITECTURE</text>
  </svg>
);

const VisualL12 = () => (
  <svg viewBox="0 0 400 200" className="visual-svg">
    <g transform="translate(100, 100)">
      <circle r="40" fill="var(--gold-dim)" stroke="var(--gold)" strokeWidth="2" />
      <text textAnchor="middle" y="5" fill="var(--gold)" fontSize="12" fontWeight="700">TIER 1</text>
    </g>
    <path d="M150 100 L250 100" stroke="var(--purple)" strokeWidth="4" strokeDasharray="8,4" />
    <g transform="translate(300, 100)">
      <circle r="40" fill="var(--purple-dim)" stroke="var(--purple)" strokeWidth="2" className="pulse-dot" />
      <text textAnchor="middle" y="5" fill="var(--purple)" fontSize="12" fontWeight="700">TIER 2</text>
    </g>
    <text x="200" y="170" textAnchor="middle" fill="var(--purple)" fontSize="12" fontWeight="600">DESCENDING INTO THE TERRAIN</text>
  </svg>
);

/* =====================================================
   TIER 2 VISUALS (Lessons 13-24)
   ===================================================== */

const VisualL13 = () => (
  <svg viewBox="0 0 400 400" className="visual-svg">
    <path d="M100 100 Q200 50 300 100 Q350 200 300 300 Q200 350 100 300 Q50 200 100 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
    <circle cx="190" cy="275" r="5" fill="var(--purple)" className="pulse-dot" />
    <circle cx="210" cy="275" r="5" fill="var(--purple)" className="pulse-dot" style={{ animationDelay: '0.5s' }} />
    <text x="200" y="390" textAnchor="middle" fill="var(--purple)" fontSize="12" fontWeight="600">BRAINSTEM MELANIN NUCLEI</text>
  </svg>
);

const VisualL14 = () => (
  <svg viewBox="0 0 400 300" className="visual-svg">
    <g transform="translate(50, 150)">
      <circle r="30" fill="var(--purple-dim)" stroke="var(--purple)" />
      <text y="50" textAnchor="middle" fill="var(--purple)" fontSize="9">OXIDATION</text>
    </g>
    <g transform="translate(200, 150)">
      <circle r="35" fill="var(--purple-dim)" stroke="var(--purple)" />
      <text y="55" textAnchor="middle" fill="var(--purple)" fontSize="9">ACCUMULATION</text>
    </g>
    <g transform="translate(350, 150)">
      <circle r="30" fill="var(--emerald-dim)" stroke="var(--emerald)" strokeDasharray="5,3" />
      <text y="50" textAnchor="middle" fill="var(--emerald)" fontSize="9">DEGRADATION</text>
    </g>
    <text x="200" y="30" textAnchor="middle" fill="var(--purple)" fontSize="12" fontWeight="600">LIFECYCLE OF NEUROMELANIN</text>
  </svg>
);

const VisualL15 = () => (
  <svg viewBox="0 0 400 300" className="visual-svg">
    <path d="M150 50 Q200 30 250 50 Q300 80 320 150 Q250 270 200 290 Q150 270 80 150 Q100 80 150 50" fill="none" stroke="rgba(255,255,255,0.1)" />
    <circle cx="200" cy="220" r="20" fill="var(--purple)" className="pulse-dot" />
    <text x="200" y="20" textAnchor="middle" fill="var(--purple)" fontSize="12" fontWeight="600">BRAINSTEM MAGNETITE</text>
  </svg>
);

const VisualL16 = () => (
    <svg viewBox="0 0 400 150" className="visual-svg">
        <g transform="translate(40, 75)">
            <circle r="15" fill="var(--gold-dim)" stroke="var(--gold)" />
            <text y="30" textAnchor="middle" fill="var(--gold)" fontSize="8">MC1R</text>
        </g>
        <path d="M55 75 L105 75" stroke="var(--gold)" strokeWidth="2" />
        <g transform="translate(120, 75)">
            <circle r="15" fill="var(--purple-dim)" stroke="var(--purple)" />
            <text y="30" textAnchor="middle" fill="var(--purple)" fontSize="8">NEUROMELANIN</text>
        </g>
        <path d="M135 75 L185 75" stroke="var(--purple)" strokeWidth="2" />
        <g transform="translate(200, 75)">
            <circle r="15" fill="var(--purple-dim)" stroke="var(--purple)" />
            <text y="30" textAnchor="middle" fill="var(--purple)" fontSize="8">MAGNETITE</text>
        </g>
        <path d="M215 75 L265 75" stroke="var(--purple)" strokeWidth="2" />
        <g transform="translate(280, 75)">
            <circle r="20" fill="var(--emerald-dim)" stroke="var(--emerald)" className="pulse-dot" />
            <text y="35" textAnchor="middle" fill="var(--emerald)" fontSize="8">RESISTANCE</text>
        </g>
        <text x="200" y="20" textAnchor="middle" fill="var(--purple)" fontSize="12" fontWeight="600">THE NEUROMELANIN-MAGNETITE CASCADE</text>
    </svg>
);

const VisualL17 = () => (
  <svg viewBox="0 0 400 250" className="visual-svg">
    <path d="M200 50 L200 120 L100 200 M200 120 L300 200" stroke="var(--purple)" strokeWidth="3" fill="none" />
    <circle cx="200" cy="50" r="20" fill="var(--purple-dim)" stroke="var(--purple)" />
    <text x="200" y="54" textAnchor="middle" fill="var(--purple)" fontSize="8">TRYPTOPHAN</text>
    <g transform="translate(100, 200)">
      <circle r="25" fill="var(--purple-dim)" stroke="var(--purple)" />
      <text y="40" textAnchor="middle" fill="var(--purple)" fontSize="10">SEROTONIN</text>
    </g>
    <g transform="translate(300, 200)">
      <circle r="25" fill="rgba(255,255,255,0.05)" stroke="var(--cream-dim)" />
      <text y="40" textAnchor="middle" fill="var(--cream-dim)" fontSize="10">KYNURENINE</text>
    </g>
  </svg>
);

const VisualL18 = () => (
    <svg viewBox="0 0 400 300" className="visual-svg">
        <circle cx="200" cy="150" r="80" fill="var(--purple-dim)" stroke="var(--purple)" strokeWidth="2" />
        {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 60) * (Math.PI / 180);
            return (
                <g key={i}>
                    <line x1={200 + 80 * Math.cos(angle)} y1={150 + 80 * Math.sin(angle)} x2={200 + 100 * Math.cos(angle)} y2={150 + 100 * Math.sin(angle)} stroke="var(--purple)" strokeWidth="4" strokeLinecap="round" />
                    <circle cx={200 + 110 * Math.cos(angle)} cy={150 + 110 * Math.sin(angle)} r="5" fill="var(--purple)" className="pulse-dot" style={{ animationDelay: `${i * 0.3}s` }} />
                </g>
            )
        })}
        <text x="200" y="155" textAnchor="middle" fill="var(--purple)" fontSize="12" fontWeight="700">MELANOCYTE RECEPTORS (5-HT2A)</text>
    </svg>
);

const VisualL19 = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '32px' }}>☀️</div>
        <div style={{ fontSize: '10px', color: 'var(--gold)', marginTop: '8px' }}>SEROTONIN</div>
      </div>
      <div style={{ fontSize: '24px', opacity: 0.5 }}>➡️</div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '32px' }} className="pulse-dot">🌙</div>
        <div style={{ fontSize: '10px', color: 'var(--purple)', marginTop: '8px' }}>MELATONIN</div>
      </div>
    </div>
  </div>
);

const VisualL20 = () => (
  <svg viewBox="0 0 400 200" className="visual-svg">
    <path d="M40 140 Q100 20 200 140 T360 140" fill="none" stroke="var(--gold)" strokeWidth="2" opacity="0.8" />
    <path d="M40 60 Q100 180 200 60 T360 60" fill="none" stroke="var(--purple)" strokeWidth="2" opacity="0.8" />
    <text x="200" y="190" textAnchor="middle" fill="var(--purple)" fontSize="12" fontWeight="600">THE CIRCADIAN SEESAW</text>
  </svg>
);

const VisualL21 = () => (
  <svg viewBox="0 0 400 200" className="visual-svg">
    <path d="M0 100 Q50 20 100 100 T200 100 T300 100 T400 100" fill="none" stroke="var(--gold)" strokeWidth="3" opacity="0.6">
      <animate attributeName="d" dur="3s" repeatCount="indefinite" values="M0 100 Q50 20 100 100 T200 100 T300 100 T400 100; M0 100 Q50 180 100 100 T200 100 T300 100 T400 100; M0 100 Q50 20 100 100 T200 100 T300 100 T400 100" />
    </path>
    <text x="200" y="105" textAnchor="middle" fill="var(--cream-dim)" fontSize="12" fontWeight="600">THE BLOOD OSCILLATION</text>
  </svg>
);

const VisualL22 = () => (
    <svg viewBox="0 0 400 250" className="visual-svg">
        <path d="M100 200 L150 100 L250 100 L300 200" fill="none" stroke="var(--gold)" strokeWidth="3" strokeDasharray="10,5" />
        <circle cx="200" cy="180" r="40" fill="var(--purple-dim)" stroke="var(--gold)" />
        <text x="200" y="185" textAnchor="middle" fill="var(--gold)" fontSize="10" fontWeight="700">BLOOD FACTORY (SHIELDED)</text>
        <text x="200" y="40" textAnchor="middle" fill="var(--gold)" fontSize="12" fontWeight="600">THE HEMATOPOIETIC NICHE</text>
    </svg>
);

const VisualL23 = () => (
  <svg viewBox="0 0 400 150" className="visual-svg">
    <rect x="50" y="50" width="300" height="30" rx="15" fill="var(--purple-dim)" stroke="var(--purple)" />
    <text x="200" y="70" textAnchor="middle" fill="var(--purple)" fontSize="12" fontWeight="700">POMC</text>
    <text x="85" y="120" textAnchor="middle" fill="var(--gold)" fontSize="10">ACTH</text>
    <text x="170" y="120" textAnchor="middle" fill="var(--purple)" fontSize="10">MSH</text>
    <text x="280" y="120" textAnchor="middle" fill="var(--emerald)" fontSize="10">ENDORPHIN</text>
  </svg>
);

const VisualL24 = () => (
  <svg viewBox="0 0 400 300" className="visual-svg">
    <path d="M200 80 L100 240 L300 240 Z" fill="none" stroke="var(--purple)" strokeWidth="2" strokeDasharray="5,5" />
    <circle cx="200" cy="80" r="30" fill="var(--purple-dim)" stroke="var(--purple)" />
    <circle cx="100" cy="240" r="30" fill="var(--gold-dim)" stroke="var(--gold)" />
    <circle cx="300" cy="240" r="35" fill="var(--emerald-dim)" stroke="var(--emerald)" />
    <text x="200" y="180" textAnchor="middle" fill="var(--purple)" fontSize="14" fontWeight="900">THE AUTONOMIC TRIAD</text>
  </svg>
);

/* =====================================================
   TIER 3 VISUALS (Lessons 25-36)
   ===================================================== */

const VisualL25 = () => (
  <svg viewBox="0 0 400 400" className="visual-svg">
    <defs>
      <radialGradient id="emerald-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--emerald)" stopOpacity="0.3" />
        <stop offset="100%" stopColor="var(--emerald)" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="200" cy="200" r="100" fill="url(#emerald-glow)" />
    <ellipse cx="200" cy="200" rx="150" ry="80" fill="none" stroke="var(--emerald)" strokeWidth="2" opacity="0.6" />
    <text x="200" y="380" textAnchor="middle" fill="var(--emerald)" fontSize="14" fontWeight="600">THE TOROIDAL BIOFIELD</text>
  </svg>
);

const VisualL26 = () => (
    <svg viewBox="0 0 400 400" className="visual-svg">
        <path d="M200 50 L200 350" stroke="var(--emerald-dim)" strokeWidth="2" strokeDasharray="5,5" />
        {/* Afferent flow UP */}
        <path d="M180 320 L180 80" stroke="var(--emerald)" strokeWidth="3" markerEnd="url(#arrowhead-emerald)" opacity="0.8" />
        <text x="170" y="200" textAnchor="end" fill="var(--emerald)" fontSize="12" fontWeight="700">80% AFFERENT (UP)</text>
        {/* Efference flow DOWN */}
        <path d="M220 80 L220 320" stroke="var(--purple)" strokeWidth="2" markerEnd="url(#arrowhead-purple)" opacity="0.6" />
        <text x="230" y="200" textAnchor="start" fill="var(--purple)" fontSize="12" fontWeight="700">20% EFFERENT (DOWN)</text>
        <defs>
            <marker id="arrowhead-emerald" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="var(--emerald)" />
            </marker>
        </defs>
        <text x="200" y="380" textAnchor="middle" fill="var(--emerald)" fontSize="12" fontWeight="600">THE VAGUS THREAD</text>
    </svg>
);

const VisualL27 = () => (
    <svg viewBox="0 0 400 400" className="visual-svg">
        <circle cx="200" cy="200" r="40" fill="var(--emerald-dim)" stroke="var(--emerald)" strokeWidth="2" />
        {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            return (
                <path key={i} d={`M${200 + 150 * Math.cos(angle)} ${200 + 150 * Math.sin(angle)} L${200 + 60 * Math.cos(angle)} ${200 + 60 * Math.sin(angle)}`} stroke="var(--emerald)" strokeWidth="3" markerEnd="url(#arrowhead-emerald)" opacity="0.4">
                     <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                </path>
            )
        })}
        <text x="200" y="205" textAnchor="middle" fill="var(--emerald)" fontSize="10" fontWeight="900">RECEPTIVE POLE</text>
        <text x="200" y="380" textAnchor="middle" fill="var(--emerald)" fontSize="12" fontWeight="600">MAGNETIC INFLOW (GUT)</text>
    </svg>
);

const VisualL29 = () => (
    <svg viewBox="0 0 400 400" className="visual-svg">
        <path d="M100 200 Q200 50 300 200" fill="none" stroke="var(--purple)" strokeWidth="2" opacity="0.5" />
        <path d="M100 200 Q200 350 300 200" fill="none" stroke="var(--emerald)" strokeWidth="2" opacity="0.5" />
        <circle cx="200" cy="200" r="50" fill="rgba(16, 185, 129, 0.1)" stroke="var(--emerald)" strokeWidth="2" className="pulse-dot" />
        <text x="200" y="205" textAnchor="middle" fill="var(--cream)" fontSize="10" fontWeight="900">RECONCILING CENTER</text>
        <text x="200" y="380" textAnchor="middle" fill="var(--emerald)" fontSize="12" fontWeight="600">THE HEART VORTEX</text>
    </svg>
);

const VisualL31 = () => (
    <svg viewBox="0 0 400 400" className="visual-svg">
        <circle cx="200" cy="200" r="40" fill="var(--purple-dim)" stroke="var(--purple)" strokeWidth="2" />
        {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            return (
                <path key={i} d={`M${200 + 50 * Math.cos(angle)} ${200 + 50 * Math.sin(angle)} L${200 + 160 * Math.cos(angle)} ${200 + 160 * Math.sin(angle)}`} stroke="var(--purple)" strokeWidth="2" markerEnd="url(#arrowhead-purple)" opacity="0.4" />
            )
        })}
        <text x="200" y="205" textAnchor="middle" fill="var(--purple)" fontSize="10" fontWeight="900">PROJECTIVE POLE</text>
        <text x="200" y="380" textAnchor="middle" fill="var(--purple)" fontSize="12" fontWeight="600">ELECTRICAL OUTFLOW (BRAIN)</text>
    </svg>
);

const VisualL33 = () => (
    <svg viewBox="0 0 400 400" className="visual-svg">
        <circle cx="200" cy="320" r="20" fill="var(--emerald-dim)" stroke="var(--emerald)" /> {/* Gut */}
        <circle cx="200" cy="200" r="25" fill="none" stroke="rgba(255,255,255,0.1)" strokeDasharray="5,5" /> {/* Heart center bypassed */}
        <circle cx="200" cy="80" r="20" fill="var(--purple-dim)" stroke="var(--purple)" /> {/* Brain */}
        
        <path d="M200 300 Q120 200 200 100" fill="none" stroke="#ff4444" strokeWidth="4" strokeDasharray="8,4" opacity="0.8" markerEnd="url(#arrowhead-red)" />
        <defs>
            <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#ff4444" />
            </marker>
        </defs>
        <text x="130" y="200" textAnchor="middle" fill="#ff4444" fontSize="12" fontWeight="900">BYPASS</text>
        <text x="200" y="380" textAnchor="middle" fill="#ff4444" fontSize="14" fontWeight="600">TOROIDAL COLLAPSE (TRAUMA)</text>
    </svg>
);

const VisualL36 = () => {
  const [complete, setComplete] = useState(false);
  return (
    <div style={{ textAlign: 'center' }}>
      <svg viewBox="0 0 400 400" className="visual-svg" onClick={() => setComplete(!complete)} style={{ cursor: 'pointer' }}>
        <circle cx="200" cy="200" r="150" fill="none" stroke="var(--emerald)" strokeWidth="4" strokeDasharray="10,5" strokeDashoffset={complete ? 0 : 500} style={{ transition: '2.4s ease-in-out' }} />
        <text x="200" y="205" textAnchor="middle" fill="var(--emerald)" fontSize="24" fontWeight="900">
          {complete ? '⑨' : 'COLLAPSE'}
        </text>
      </svg>
      <p style={{ marginTop: '20px', fontSize: '11px', color: 'var(--emerald)', opacity: 0.8, letterSpacing: '0.1em' }}>
        THE END IS THE BEGINNING
      </p>
    </div>
  );
};


/* =====================================================
   REGISTRY & DISPATCHER
   ===================================================== */

const visualComponents = {
  'L1': VisualL1, 'L2': VisualL2, 'L3': VisualL3, 'L4': VisualL4, 'L5': VisualL5,
  'L6': VisualL6, 'L7': VisualL7, 'L10': VisualL10, 'L11': VisualL11, 'L12': VisualL12,
  'L13': VisualL13, 'L14': VisualL14, 'L15': VisualL15, 'L16': VisualL16, 'L17': VisualL17,
  'L18': VisualL18, 'L19': VisualL19, 'L20': VisualL20, 'L21': VisualL21, 'L22': VisualL22,
  'L23': VisualL23, 'L24': VisualL24, 'L25': VisualL25, 'L26': VisualL26, 'L27': VisualL27,
  'L29': VisualL29, 'L31': VisualL31, 'L33': VisualL33, 'L36': VisualL36,
};

export default function VisualAid({ lessonId, description }) {
  const Component = visualComponents[lessonId];

  if (!Component) {
    return (
      <div className="visual-placeholder">
        <p className="placeholder-label">Visual Aid Principle</p>
        <p className="placeholder-text">{description}</p>
        <div className="placeholder-glyph">✧</div>
      </div>
    );
  }

  return (
    <div className="visual-container">
      <Component />
      <style jsx>{`
        .visual-container {
          margin: 48px 0;
          padding: 40px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          min-height: 280px;
        }
        .visual-svg {
          width: 100%;
          max-width: 400px;
          height: auto;
        }
        .visual-placeholder {
          margin: 32px 0;
          padding: 40px;
          background: rgba(255,255,255,0.01);
          border: 1px dashed rgba(201, 168, 76, 0.3);
          border-radius: var(--radius-lg);
          text-align: center;
        }
        .placeholder-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: var(--gold); opacity: 0.6; }
        .placeholder-text { font-size: 0.9rem; color: var(--cream-dim); max-width: 400px; margin: 12px auto; font-style: italic; }
        :global(.pulse-dot) { animation: dot-pulse 2s ease-in-out infinite; }
        @keyframes dot-pulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.3); opacity: 1; } }
      `}</style>
    </div>
  );
}
