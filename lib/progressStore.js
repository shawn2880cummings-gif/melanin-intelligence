// Progress Store — localStorage-based progress tracking

const STORAGE_KEY = 'cr_progress';

export function getProgress() {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function markComplete(lessonId) {
  const progress = getProgress();
  progress[lessonId] = { completedAt: new Date().toISOString() };
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }
}

export function markIncomplete(lessonId) {
  const progress = getProgress();
  delete progress[lessonId];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }
}

export function isComplete(lessonId) {
  return !!getProgress()[lessonId];
}

export function getModuleProgress(module) {
  const progress = getProgress();
  const completed = module.lessons.filter(l => progress[l.id]).length;
  return {
    completed,
    total: module.lessons.length,
    percent: module.lessons.length > 0 ? Math.round((completed / module.lessons.length) * 100) : 0,
  };
}

export function isModuleComplete(module) {
  const progress = getProgress();
  return module.lessons.every(l => progress[l.id]);
}

export function isModuleUnlocked(module, modules) {
  const index = modules.findIndex((m) => m.id === module.id);
  if (index === 0) return true; // First module is always unlocked
  
  // Check if previous module is complete
  const prevModule = modules[index - 1];
  return isModuleComplete(prevModule);
}

export function getOverallProgress(modules) {
  const progress = getProgress();
  const total = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completed = modules.reduce((acc, m) => acc + m.lessons.filter(l => progress[l.id]).length, 0);
  return { completed, total, percent: total > 0 ? Math.round((completed / total) * 100) : 0 };
}
