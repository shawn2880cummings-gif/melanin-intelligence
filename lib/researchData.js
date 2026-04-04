// Research Portal Data

export const RESEARCH_PAPERS = [
  {
    id: 'melanin-code',
    title: 'The Melanin Code',
    subtitle: 'A Foundational Work Exploring the Unified System of Melanin, Neuromelanin, and the Biofield',
    description: 'The landmark work that precedes and informs Collapse Recursion, establishing the biological and field architecture of the melanin system in rigorous detail.',
    tags: ['Melanin', 'Neuromelanin', 'Biofield', 'Biology'],
    url: 'https://shawnbrown12.academia.edu/',
    featured: true,
  },
  {
    id: 'architecture-categorization',
    title: 'Architecture of Human Categorization',
    subtitle: 'A Forensic Analysis of Racial and Geographic Taxonomies',
    description: 'A forensic analysis of how racial and geographic categories were constructed as instruments of colonial power — the linguistic architecture of erasure.',
    tags: ['History', 'Colonial Law', 'Taxonomy', 'Language'],
    url: 'https://shawnbrown12.academia.edu/',
    featured: true,
  },
  {
    id: 'bound-labor',
    title: 'Architecture of Bound Labor',
    subtitle: 'Economic Systems as Distortion Structures',
    description: 'Examining the recursive distortion patterns embedded in economic systems of forced labor and their continuing structural echoes in contemporary economics.',
    tags: ['Economics', 'History', 'Law', 'Distortion'],
    url: 'https://shawnbrown12.academia.edu/',
    featured: false,
  },
  {
    id: 'great-law',
    title: 'Great Law of Peace Research',
    subtitle: 'Indigenous Confederacy and Natural Law Architecture',
    description: 'Research on the Haudenosaunee Great Law of Peace as a living example of natural law operating at civilizational scale — and its documented influence on Western governance.',
    tags: ['Indigenous Law', 'Natural Law', 'History', 'Governance'],
    url: 'https://shawnbrown12.academia.edu/',
    featured: false,
  },
];

export const KEY_FRAMEWORKS = [
  {
    id: 'way-of-9',
    title: 'The Way of 9',
    icon: '⑨',
    description: 'The universal operating system. Every process, when traced to completion, returns to 9 — the source number, the completion, the spiral back. Not numerology but pattern recognition at the level of mathematics, biology, and consciousness.',
    chapter: 1,
  },
  {
    id: 'cre',
    title: 'Collapse Recursion Engine',
    icon: '◎',
    description: 'The CRE is both a logical tool and an embodied practice. Five stages: Observe, Identify, Test, Collapse, Return. Applied to any statement, belief, or system, it locates the fracture point and recovers the coherent truth underneath.',
    chapter: 4,
  },
  {
    id: 'melanin-code',
    title: 'The Melanin Code',
    icon: '◈',
    description: 'Melanin is not pigment — it is a broadband biological antenna built on fractal carbon geometry. Neuromelanin in the deep brain structures serves as capacitor, receiver, and field processor. High melanin concentration equals expanded field sensitivity.',
    chapter: 5,
  },
  {
    id: 'phi-pi-psi',
    title: 'Pi + Phi = Psi',
    icon: '∞',
    description: 'Phi (φ) is the electric, expansive, projective force. Pi (π) is the magnetic, receptive, inward compression. Together they produce Psi (Ψ) — the total consciousness field. Civilization\'s distortion is Phi without Pi: endless expansion without return.',
    chapter: 22,
  },
];

export const CROSS_REFERENCE = [
  { topic: 'Neuromelanin Biology', chapters: [5, 10, 11], papers: ['melanin-code'] },
  { topic: 'Natural Law', chapters: [16], papers: ['great-law'] },
  { topic: 'Historical Distortion', chapters: [18], papers: ['architecture-categorization', 'bound-labor'] },
  { topic: 'Consciousness & Field Theory', chapters: [10, 20], papers: ['melanin-code'] },
  { topic: 'The Way of 9', chapters: [1, 4, 8, 22], papers: ['melanin-code'] },
];
