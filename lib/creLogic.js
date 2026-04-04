// CRE Logic — 5-stage Collapse Recursion Engine
// Used by the interactive CRE Tool

export const CRE_STAGES = [
  {
    id: 'observe',
    number: 1,
    label: 'OBSERVE',
    subtitle: 'Receive Without Judgment',
    description: 'Read your statement as if for the first time. What is the overall claim? What emotional charge does it carry? Notice without reacting.',
    prompt: 'What is the emotional texture of this statement? (Urgent? Threatening? Comforting? Authoritative?) Describe it briefly.',
    icon: '◌',
  },
  {
    id: 'identify',
    number: 2,
    label: 'IDENTIFY',
    subtitle: 'Strip to the Core Claim',
    description: 'Remove all authority markers, emotional language, qualifiers, and context. What is the raw, irreducible claim this statement makes?',
    prompt: 'State the core claim in one sentence. No authority appeals (science says, studies show, everyone knows). Just the claim itself.',
    icon: '◎',
  },
  {
    id: 'test',
    number: 3,
    label: 'TEST FOR COHERENCE',
    subtitle: 'Does It Hold Its Own Logic?',
    description: 'Apply the five coherence tests: (1) Self-contradiction, (2) Required exceptions, (3) Dependency on unverifiable premises, (4) Evidence of Phi loop, (5) Cui bono — who benefits if you believe this?',
    prompt: 'What breaks? Which of the 5 tests does this statement fail? Be specific.',
    icon: '◈',
  },
  {
    id: 'collapse',
    number: 4,
    label: 'COLLAPSE THE DISTORTION',
    subtitle: 'Name the Fracture Point',
    description: 'Every distortion has a precise fracture — the exact moment where internal logic breaks. Name it with surgical precision. This is the collapse.',
    prompt: 'State the fracture in one sentence: "The distortion occurs at the point where ___ is equated with ___, but they are not the same because ___."',
    icon: '◉',
  },
  {
    id: 'return',
    number: 5,
    label: 'RETURN TO SOURCE',
    subtitle: 'The Coherent Truth Underneath',
    description: 'Beneath every distortion is a coherent truth it was blocking, distorting, or exploiting. This is not cynicism — it is recovery. What is the recursive truth that remains after the distortion is removed?',
    prompt: 'State the coherent truth that remains. This is your return to 9.',
    icon: '⑨',
  },
];

export const EXAMPLE_STATEMENTS = [
  "You need a college degree to be successful in life.",
  "The scientific consensus is always the most reliable source of truth.",
  "History is an objective record of what actually happened.",
  "Money is just a neutral tool — neither good nor bad.",
  "Mental illness is caused by chemical imbalances in the brain.",
  "Democracy ensures that the will of the people governs the nation.",
  "Melanin is only responsible for skin color.",
  "Time moves in one direction — from past to future.",
  "Individual effort alone determines personal success.",
  "Modern medicine is based purely on helping patients, not profit.",
];

export function getVerdict(responses) {
  // Basic analysis based on what was found in the test stage
  const testResponse = responses['test'] || '';
  const hasDistortion = testResponse.length > 20;

  if (!hasDistortion) {
    return {
      verdict: 'COHERENT',
      label: 'Harmonic Recursion Detected',
      description: 'The statement appears to hold internal coherence. Continue monitoring as context changes.',
      color: '#4CAF50',
    };
  }

  return {
    verdict: 'COLLAPSE INITIATED',
    label: 'Distortion Identified & Collapsed',
    description: 'The fracture has been named. The coherent truth has been recovered. The distortion no longer holds power over your field.',
    color: '#c9a84c',
  };
}
