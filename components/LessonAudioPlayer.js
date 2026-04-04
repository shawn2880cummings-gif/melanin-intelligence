'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

function formatTime(secs) {
  if (!secs || isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

const SPEEDS = [0.75, 1, 1.25, 1.5, 1.75, 2];

export default function LessonAudioPlayer({ lessonId, lessonTitle, onComplete }) {
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const fileInputRef = useRef(null);

  const [audioUrl, setAudioUrl] = useState(null);     // blob URL or server URL
  const [fileName, setFileName] = useState('');
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speedIdx, setSpeedIdx] = useState(1);
  const [muted, setMuted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [dragging, setDragging] = useState(false);

  // On mount / lessonId change: reset and try server file
  useEffect(() => {
    // Revoke previous blob URL if any
    if (audioUrl && audioUrl.startsWith('blob:')) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioUrl(null);
    setFileName('');
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setLoaded(false);

    // Check if server has audio for this lesson
    const serverPath = `/audio/vines-connection/${lessonId}.mp3`;
    fetch(serverPath, { method: 'HEAD' })
      .then(r => {
        if (r.ok) {
          setAudioUrl(serverPath);
          setFileName(`${lessonId}.mp3`);
        }
      })
      .catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

  // Sync speed to audio element
  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = SPEEDS[speedIdx];
  }, [speedIdx]);

  // ── File picker handler ────────────────────────────────
  const handleFileSelect = (file) => {
    if (!file || !file.type.startsWith('audio/')) return;
    const url = URL.createObjectURL(file);
    setAudioUrl(url);
    setFileName(file.name);
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setLoaded(false);
  };

  const handleInputChange = (e) => {
    handleFileSelect(e.target.files[0]);
    e.target.value = ''; // reset so same file can be re-selected
  };

  // ── Drag & drop ────────────────────────────────────────
  const handleDragOver = (e) => { e.preventDefault(); setDragging(true); };
  const handleDragLeave = () => setDragging(false);
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFileSelect(e.dataTransfer.files[0]);
  };

  // ── Playback controls ──────────────────────────────────
  const handlePlayPause = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play().then(() => setPlaying(true)).catch(() => {}); }
  }, [playing]);

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoaded = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      audioRef.current.playbackRate = SPEEDS[speedIdx];
      setLoaded(true);
    }
  };

  const handleEnded = () => {
    setPlaying(false);
    setCurrentTime(0);
    if (onComplete) onComplete();
  };

  const handleScrub = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = progressRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const t = (x / rect.width) * duration;
    audioRef.current.currentTime = t;
    setCurrentTime(t);
  };

  const handleSkip = (secs) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(0, Math.min(audioRef.current.currentTime + secs, duration));
  };

  const toggleMute = () => {
    if (audioRef.current) { audioRef.current.muted = !muted; setMuted(!muted); }
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  // ── NO AUDIO STATE (upload prompt) ────────────────────
  if (!audioUrl) {
    return (
      <div
        className={`audio-player audio-upload-zone ${dragging ? 'drag-over' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*"
          style={{ display: 'none' }}
          onChange={handleInputChange}
        />
        <div className="audio-upload-icon">🎙</div>
        <div className="audio-upload-text">
          <p className="audio-upload-title">Audio Narration</p>
          <p className="audio-upload-sub">
            {dragging ? 'Drop audio file here…' : 'Add your narration for this lesson'}
          </p>
        </div>
        <button
          className="audio-upload-btn"
          onClick={() => fileInputRef.current?.click()}
          id={`audio-upload-btn-${lessonId}`}
        >
          + Add Audio
        </button>
      </div>
    );
  }

  // ── FULL PLAYER ────────────────────────────────────────
  return (
    <div className={`audio-player ${playing ? 'is-playing' : ''}`} id={`audio-player-${lessonId}`}>
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoaded}
        onEnded={handleEnded}
        preload="metadata"
      />

      {/* Big orb — click to play/pause */}
      <button
        className="audio-orb"
        onClick={handlePlayPause}
        disabled={!loaded}
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing
          ? <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
          : <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21"/></svg>
        }
      </button>

      <div className="audio-controls">
        {/* Top row */}
        <div className="audio-top-row">
          <span className="audio-label">🎙 {fileName || 'Audio Narration'}</span>
          <div className="audio-meta-controls">
            <button className="audio-speed-btn" onClick={() => setSpeedIdx(i => (i + 1) % SPEEDS.length)}>
              {SPEEDS[speedIdx]}×
            </button>
            <button className="audio-icon-btn" onClick={toggleMute} title={muted ? 'Unmute' : 'Mute'}>
              {muted ? '🔇' : '🔊'}
            </button>
            {/* Swap file */}
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*"
              style={{ display: 'none' }}
              onChange={handleInputChange}
            />
            <button
              className="audio-icon-btn"
              onClick={() => fileInputRef.current?.click()}
              title="Change audio file"
            >
              ↻
            </button>
          </div>
        </div>

        {/* Progress scrubber */}
        <div
          className="audio-progress-track"
          ref={progressRef}
          onClick={handleScrub}
          title="Click to seek"
        >
          <div className="audio-progress-fill" style={{ width: `${progress}%` }} />
          <div className="audio-progress-thumb" style={{ left: `${progress}%` }} />
        </div>

        {/* Bottom row */}
        <div className="audio-bottom-row">
          <span className="audio-time">{formatTime(currentTime)}</span>
          <div className="audio-skip-controls">
            <button className="audio-icon-btn" onClick={() => handleSkip(-15)} title="−15s" style={{ fontSize: 12 }}>⟨15s</button>
            <button className="audio-play-btn" onClick={handlePlayPause} disabled={!loaded}>
              {playing
                ? <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
                : <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><polygon points="6,3 20,12 6,21"/></svg>
              }
            </button>
            <button className="audio-icon-btn" onClick={() => handleSkip(15)} title="+15s" style={{ fontSize: 12 }}>15s⟩</button>
          </div>
          <span className="audio-time">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
