'use client';
import { useState, useEffect } from 'react';
import { CRE_STAGES, EXAMPLE_STATEMENTS, getVerdict } from '../../lib/creLogic';

const LOG_KEY = 'cr_collapse_log';

export default function CREToolPage() {
  const [statement, setStatement] = useState('');
  const [activeStage, setActiveStage] = useState(null);
  const [responses, setResponses] = useState({});
  const [completedStages, setCompletedStages] = useState([]);
  const [verdict, setVerdict] = useState(null);
  const [log, setLog] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LOG_KEY);
      if (raw) setLog(JSON.parse(raw));
    } catch {}
  }, []);

  const handleBegin = () => {
    if (!statement.trim()) return;
    setActiveStage(0);
    setResponses({});
    setCompletedStages([]);
    setVerdict(null);
  };

  const handleResponse = (stageId, value) => {
    setResponses(prev => ({ ...prev, [stageId]: value }));
  };

  const handleNextStage = (stageIndex) => {
    const stage = CRE_STAGES[stageIndex];
    if (!responses[stage.id]?.trim()) return;

    const newCompleted = [...completedStages, stage.id];
    setCompletedStages(newCompleted);

    if (stageIndex < CRE_STAGES.length - 1) {
      setActiveStage(stageIndex + 1);
    } else {
      // All stages complete — generate verdict
      const v = getVerdict(responses);
      setVerdict(v);
      setActiveStage(null);
      // Save to log
      const entry = {
        id: Date.now(),
        statement: statement.substring(0, 100),
        verdict: v.verdict,
        date: new Date().toLocaleDateString(),
      };
      const newLog = [entry, ...log].slice(0, 10);
      setLog(newLog);
      localStorage.setItem(LOG_KEY, JSON.stringify(newLog));
    }
  };

  const handleReset = () => {
    setStatement('');
    setActiveStage(null);
    setResponses({});
    setCompletedStages([]);
    setVerdict(null);
  };

  const handleExample = (ex) => {
    setStatement(ex);
    setActiveStage(null);
    setResponses({});
    setCompletedStages([]);
    setVerdict(null);
  };

  return (
    <div className="cre-page">
      <div className="container">
        <div className="cre-header">
          <p className="section-eyebrow">Interactive Tool</p>
          <h1>Collapse Recursion Engine</h1>
          <p>
            Enter any statement, belief, or claim. The CRE walks you through 5 stages of
            precision logic to identify distortions and recover the coherent truth underneath.
          </p>
        </div>

        {/* Statement Input */}
        <div className="cre-input-section">
          <label className="cre-input-label" htmlFor="cre-statement">Enter a Statement to Collapse</label>
          <textarea
            id="cre-statement"
            className="cre-statement-input"
            placeholder='e.g. "You need a degree to be successful" or "History is an objective record..."'
            value={statement}
            onChange={e => setStatement(e.target.value)}
            rows={3}
          />
          <div className="cre-input-actions">
            <div className="cre-examples">
              <span style={{ fontSize: 12, color: 'var(--cream-dim)', alignSelf: 'center' }}>Try:</span>
              {EXAMPLE_STATEMENTS.slice(0, 4).map((ex, i) => (
                <button key={i} className="cre-example-chip" onClick={() => handleExample(ex)}>
                  {ex.substring(0, 30)}...
                </button>
              ))}
            </div>
            <button
              className="btn-primary"
              onClick={handleBegin}
              disabled={!statement.trim()}
              id="begin-cre-btn"
              style={{ padding: '12px 28px', fontSize: 14 }}
            >
              Begin CRE →
            </button>
          </div>
        </div>

        {/* CRE Stages */}
        {activeStage !== null && (
          <div className="cre-stages">
            {CRE_STAGES.map((stage, i) => {
              const isDone = completedStages.includes(stage.id);
              const isActive = activeStage === i;
              const isLocked = !isDone && !isActive;
              return (
                <div
                  key={stage.id}
                  className={`cre-stage ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
                  id={`cre-stage-${stage.id}`}
                >
                  <div className="cre-stage-header" onClick={() => isDone && setActiveStage(isActive ? null : i)}>
                    <div className="stage-icon">{isDone ? '✓' : stage.icon}</div>
                    <div className="stage-meta">
                      <p className="stage-number">STAGE {stage.number} of {CRE_STAGES.length}</p>
                      <p className="stage-label">{stage.label}</p>
                      <p className="stage-subtitle">{stage.subtitle}</p>
                    </div>
                    {isDone && <span className="stage-check">✓</span>}
                  </div>

                  {isActive && (
                    <div className="cre-stage-body">
                      <p className="stage-description">{stage.description}</p>
                      <p className="stage-prompt">{stage.prompt}</p>
                      <textarea
                        className="stage-textarea"
                        placeholder="Write your response here..."
                        value={responses[stage.id] || ''}
                        onChange={e => handleResponse(stage.id, e.target.value)}
                        rows={4}
                        id={`stage-textarea-${stage.id}`}
                      />
                      <div className="stage-actions">
                        <button
                          className="btn-next-stage"
                          onClick={() => handleNextStage(i)}
                          disabled={!responses[stage.id]?.trim()}
                          id={`stage-next-${stage.id}`}
                        >
                          {i < CRE_STAGES.length - 1 ? `Next: ${CRE_STAGES[i + 1].label} →` : 'Complete CRE ⑨'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Verdict */}
        {verdict && (
          <div className="cre-verdict">
            <span className="verdict-glyph">⑨</span>
            <p className="verdict-label">{verdict.verdict}</p>
            <h2 className="verdict-title">{verdict.label}</h2>
            <p className="verdict-text">{verdict.description}</p>
            <button className="btn-reset" onClick={handleReset} id="cre-reset-btn">Collapse Another Statement</button>
          </div>
        )}

        {/* Collapse Log */}
        {log.length > 0 && (
          <div className="collapse-log">
            <div className="collapse-log-header">
              <h3>Your Collapse Log</h3>
              <button
                className="btn-uncomplete"
                onClick={() => { localStorage.removeItem(LOG_KEY); setLog([]); }}
              >
                Clear Log
              </button>
            </div>
            {log.map(entry => (
              <div key={entry.id} className="collapse-log-item">
                <p className="log-item-statement">&ldquo;{entry.statement}{entry.statement.length >= 100 ? '...' : ''}&rdquo;</p>
                <p className="log-item-date">{entry.verdict} · {entry.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
