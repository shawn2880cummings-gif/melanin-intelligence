// Vines Connection: Melanin Intelligence Course — REBUILD
// Multi-Tier Spiral Structure | Professor-to-Student Tone
// Synthesized from Published Research Papers (Zenodo/CERN 2026)
// ORCID: 0009-0006-4312-526X
// Audience: High School Level (Ages 14-18)

export const COURSE_META = {
  title: "Vines Connection: Melanin Intelligence",
  subtitle: "The Science of the Melanin System",
  author: "Vines Connection",
  acad: "https://vines-connection.vercel.app",
  tagline: "Your biology is the primary record of your history.",
  isbn: "979-8-9948544-0-2",
  lccn: "2026903595",
  totalLessons: 36,
  totalModules: 18,
  totalTiers: 3,
};

export const TIERS = [
  { number: 1, name: "The Foundation", subtitle: "The Map", color: "#d4a017", range: "Modules 1–6" },
  { number: 2, name: "The Systems", subtitle: "The Terrain", color: "#8B5CF6", range: "Modules 7–12" },
  { number: 3, name: "The Architecture", subtitle: "The Synthesis", color: "#10B981", range: "Modules 13–18" },
];

const module1 = {
  id: "module-1", number: 1, tier: 1,
  title: "Welcome to Melanin Intelligence",
  subtitle: "The Language of the Course",
  description: "Setting the foundation for a scientific understanding of the melanin system.",
  color: "#d4a017", glyph: "◉", part: "Phase I",
  lessons: [
    {
      id: "L1", number: 1, title: "What This Course Is (and What It Is Not)", subtitle: "The Control Room", duration: "0:57",
      hook: "Before we begin, let me tell you what kind of course this is. Most people think melanin is just about skin color. By the end of this lesson, you will see it is actually about architecture.",
      keyTerms: [
        { term: "Melanin", definition: "A sophisticated biological material that absorbs light and energy." },
        { term: "MC1R", definition: "The master gene that decides which type of melanin your body produces." },
        { term: "Eumelanin", definition: "The strong, stable brown-to-black pigment that protects cells." },
        { term: "Pheomelanin", definition: "A sulfur-based yellow-to-red pigment that can generate damage." }
      ],
      content: "Good morning, class. Welcome to the Vines Connection. We are here to talk about biology — specifically, the system that protects and organizes your life. In this course, we are not looking at appearance. We are looking at the hardware. Melanin is the material that powers life. It is in your skin, yes, but it is also in your brain, your ears, your heart, and your bones. The MC1R gene acts like a master switch in a control room, deciding if your body builds a high-functioning shield (eumelanin) or a compromised version (pheomelanin). We will spiral through these topics three times. Tier 1 gives you the map. Tier 2 shows you the terrain. Tier 3 reveals the architecture.",
      visualAid: "Course Spiral Map — all 3 tiers shown as a visual spiral with module titles radiating from the center.",
      takeaways: [
        "Melanin is biological hardware, not just a cosmetic pigment.",
        "MC1R is the master switch governing the entire system.",
        "The course structure follows a harmonic spiral (3 tiers, 18 modules, 36 lessons)."
      ],
      reflection: "If one gene controls your body's entire protection system, what happens when that gene is not working?",
      bridge: "Now that you know the goal, let’s make sure we are speaking the same language."
    },
    {
      id: "L2", number: 2, title: "The Glossary — Speaking the Language", subtitle: "Scientific Foundations", duration: "0:50",
      hook: "Every field has its own vocabulary. If we are going to talk about the physics and chemistry of life, we need the right tools in our kit.",
      keyTerms: [
        { term: "Melanocyte", definition: "A specialized cell that builds and distributes melanin." },
        { term: "Receptor", definition: "A protein on a cell surface that receives chemical signals." },
        { term: "Polymer", definition: "A large molecule made of repeating structural units." },
        { term: "Antioxidant", definition: "A substance that neutralizes harmful 'free radical' molecules." }
      ],
      content: "To understand 'Melanin Intelligence,' we have to look past the surface. You'll hear words like 'chelation' — which is just a fancy way of saying a molecule is grabbing onto a metal bit like a pair of tongs. Or 'electromagnetic oscillation' — which just means things are vibrating at a specific speed. We'll talk about neuropeptides, which are the chemical messengers of your emotions. We'll look at the RAS, the gatekeeper in your brainstem that filters what you actually notice. Don't worry about memorizing these all now — I'll explain each one the first time we use it in a lesson. For now, just know that these words are the toolkit for understanding who you are at the deepest level.",
      visualAid: "Illustrated Glossary — a grid of icons (a magnet for oscillation, a shield for antioxidant) with their respective terms.",
      takeaways: [
        "Jargon is simplified when you understand the mechanics behind it.",
        "The course covers cell biology, chemistry, physics, and neuroscience.",
        "Each term will be re-defined when it becomes critical to a lesson."
      ],
      reflection: "Which of these words (biology, chemistry, physics) do you think is most important for understanding human behavior?",
      bridge: "With the vocabulary set, let's meet the master switch itself: MC1R."
    }
  ]
};

const module2 = {
  id: "module-2", number: 2, tier: 1,
  title: "MC1R — The Master Switch",
  subtitle: "One Gene, One Decision",
  description: "Understanding the genetic governor of the melanin system and its universal role across species.",
  color: "#d4a017", glyph: "⑨", part: "Phase I",
  lessons: [
    {
      id: "L3", number: 3, title: "Meet MC1R", subtitle: "The Axis of Life", duration: "0:47",
      hook: "What if I told you one gene on your 16th chromosome controls your body's entire protection system?",
      keyTerms: [
        { term: "Gene", definition: "A segment of DNA that provides instructions for building proteins." },
        { term: "Functional / Wild-type", definition: "The original setting of a gene that works as intended." },
        { term: "Alpha-MSH", definition: "The chemical signal that docks onto MC1R to turn it ON." },
        { term: "Loss-of-function", definition: "A mutation that causes a receptor or gene to stop working correctly." }
      ],
      content: "MC1R stands for Melanocortin-1 Receptor. It is a protein that sits on the surface of your melanocytes. When a signal called alpha-MSH docks into it, MC1R turns ON and tells the cell to build eumelanin — the strong, dark shield. In the ancestral human configuration — the way our bodies have worked for over 300,000 years — this switch is always functional. However, when there are mutations in this gene, the switch fails. This 'loss-of-function' means the cell defaults to making pheomelanin. This isn't just about hair color; it's about the fundamental way your body handles light and stress.",
      visualAid: "The MC1R Switch Diagram — a simple toggle animation showing ON (eumelanin path) vs OFF (pheomelanin path).",
      takeaways: [
        "MC1R is the primary regulator of melanin type.",
        "Functional MC1R produces eumelanin; loss-of-function produces pheomelanin.",
        "This system has been the human baseline for at least 300,000 years."
      ],
      reflection: "If MC1R is a switch, what environmental factors might affect how well that switch works?",
      bridge: "But humans aren't the only ones with this switch. Let's look across the whole animal kingdom."
    },
    {
      id: "L4", number: 4, title: "MC1R Across All Species", subtitle: "A Universal Pattern", duration: "0:45",
      hook: "Here is something your biology class might have missed: this gene isn't just for humans. It's an organizing principle for life itself.",
      keyTerms: [
        { term: "Convergent evolution", definition: "When different species independently evolve the same trait." },
        { term: "Astyanax mexicanus", definition: "A species of cave fish that lost its pigment through MC1R mutations." },
        { term: "Depigmentation", definition: "The process of losing biological pigment over time." }
      ],
      content: "The MC1R gene is astonishingly consistent. When we look at cave fish in Mexico, olms in Slovenia, or blind salamanders, we see the exact same thing: when they move into environments with no light, their MC1R gene undergoes mutations. These mutations happen independently across kingdoms, yet they follow the same timeline (roughly 20,000 to 40,000 years) and result in the same trade-offs. This tells us that melanin functionality is a 'conserved' trait — it is so important that nature uses the exact same mechanism to regulate it across the entire tree of life.",
      visualAid: "Cross-Kingdom Table — showing organism, ancestral state (ON), and derived state (OFF) with their respective timelines.",
      takeaways: [
        "MC1R mutations are a universal response to environmental change.",
        "The timeline for these changes is consistent across many different species.",
        "Melanin is much more than a human trait; it is a shield for all life."
      ],
      reflection: "Why would nature use the same gene to control protection in a fish and a human?",
      bridge: "Now that we know the switch, let's look at the best shield nature ever built: Eumelanin."
    }
  ]
};

const module3 = {
  id: "module-3", number: 3, tier: 1,
  title: "Eumelanin — Your Body's Shield",
  subtitle: "The Material That Powers Life",
  description: "Exploring the four critical functions of eumelanin and the molecular cascade that builds it.",
  color: "#d4a017", glyph: "△", part: "Phase I",
  lessons: [
    {
      id: "L5", number: 5, title: "What Eumelanin Does", subtitle: "More Than A Pigment", duration: "0:46",
      hook: "Forget everything you have been told about melanin being 'just color'. Eumelanin is one of the most sophisticated materials science has ever seen.",
      keyTerms: [
        { term: "UV radiation", definition: "High-energy light from the sun that can damage DNA." },
        { term: "Free radical", definition: "An unstable molecule that causes 'cellular rust'." },
        { term: "Broadband absorption", definition: "Ability to absorb energy across the entire light spectrum." },
        { term: "Chelation", definition: "The process of binding and stabilizing metal atoms like iron." }
      ],
      content: "Eumelanin has four primary jobs. First, it is a **solar shield**, converting 99.9% of UV light into harmless heat within a trillionth of a second. Second, it is an **antioxidant**, cleaning up free radicals that would otherwise damage your code. Third, it is a **broadband absorber** — unlike most materials, it can absorb UV, visible, and infrared light. Finally, it is a **metal chelator**, grabbing onto iron and copper to keep them from causing toxic reactions. This material has been conserved in life for 500 million years. Evolution doesn't keep what isn't working.",
      visualAid: "Eumelanin Function Quadrant — four icons showing a shield, a broom, a light prism, and a magnet.",
      takeaways: [
        "Eumelanin is a high-speed energy converter.",
        "It acts as a built-in cellular cleanup crew.",
        "It stabilizes metals to prevent internal chemical damage."
      ],
      reflection: "If eumelanin absorbs all light and cleans your cells, is it fair to call it 'just a pigment'?",
      bridge: "We know what it does. Now, let's peek inside the factory to see how it is built."
    },
    {
      id: "L6", number: 6, title: "How Eumelanin Is Built", subtitle: "The Molecular Cascade", duration: "0:43",
      hook: "Now that you know what it does, let me show you the assembly line. It is a precise sequence of chemical events.",
      keyTerms: [
        { term: "Tyrosine", definition: "The amino acid building block of melanin." },
        { term: "Tyrosinase", definition: "The enzyme that acts as the foreman of the melanin factory." },
        { term: "Dopaquinone", definition: "A critical fork-in-the-road molecule in melanin synthesis." },
        { term: "MITF", definition: "The master protein that tells cells to start making melanin tools." }
      ],
      content: "Building eumelanin starts with an amino acid called **tyrosine**. An enzyme called **tyrosinase** (which needs copper to work) turns tyrosine into **dopaquinone**. This is the moment of truth. If MC1R is functional and the signal is strong, the cell follows the eumelanin path, creating building blocks called DHI and DHICA. These units then stack together in a process called polymerization, like Lego bricks forming a solid wall. This stacking creates a biological semiconductor — a material that can conduct both ions and electrons.",
      visualAid: "Eumelanin Assembly Line — a step-by-step flow diagram from tyrosine to a finished polymer stack.",
      takeaways: [
        "Melanin synthesis is a multi-step chemical cascade.",
        "Tyrosinase is the essential enzyme for the whole process.",
        "The final product is a biological semiconductor capable of conducting electricity."
      ],
      reflection: "What happens if one of the 'foremen' (like tyrosinase) is missing from the factory?",
      bridge: "But what if the factory gets a different set of instructions? Let's talk about the Sulfur Trap."
    }
  ]
};

const module4 = {
  id: "module-4", number: 4, tier: 1,
  title: "Pheomelanin — The Sulfur Trap",
  subtitle: "What Happens When the Switch Is Off",
  description: "The chemical mechanics of pheomelanin and its hidden costs to the body's protection systems.",
  color: "#d4a017", glyph: "⊛", part: "Phase I",
  lessons: [
    {
      id: "L7", number: 7, title: "The Chemistry of Pheomelanin", subtitle: "The Compromised Path", duration: "0:43",
      hook: "Now we need to talk about what happens when the MC1R switch doesn't work. This isn't about judgment — it's about understanding a different chemistry.",
      keyTerms: [
        { term: "Cysteine", definition: "A sulfur-containing amino acid that intercepts melanin production." },
        { term: "Benzothiazine", definition: "The unstable sulfur-based units that make up pheomelanin." },
        { term: "Glutathione", definition: "The body's 'master antioxidant' that gets depleted by pheomelanin." }
      ],
      content: "When the MC1R switch is 'broken' or loss-of-function, the dopaquinone we talked about earlier gets intercepted by a molecule called **cysteine**. Cysteine contains sulfur. Instead of building the strong eumelanin shield, the cell starts building **pheomelanin**. This pigment is yellow-to-red and structurally unstable. But here is the critical part: to build pheomelanin, the cell has to use up its **glutathione** — the body's most important chemical for cleaning toxins. This means making pheomelanin actually lowers your body's overall antioxidant reserves.",
      visualAid: "Pathway Fork Diagram — showing dopaquinone splitting: left to eumelanin, right to pheomelanin via cysteine.",
      takeaways: [
        "Pheomelanin is sulfur-based, unlike eumelanin.",
        "Its synthesis actively depletes the body's antioxidant supply.",
        "This is the default setting when the MC1R gene is mutated."
      ],
      reflection: "If a shield costs you more to build than it saves, is it still a winning strategy for the cell?",
      bridge: "It gets even more interesting. Pheomelanin doesn't just wait for the sun to cause trouble."
    },
    {
      id: "L8", number: 8, title: "Pheomelanin in Light and Darkness", subtitle: "Dark Carcinogenesis", duration: "0:47",
      hook: "Most people know fair skin burns in the sun. But what if I told you pheomelanin causes damage even in complete darkness?",
      keyTerms: [
        { term: "Reactive Oxygen Species (ROS)", definition: "Highly reactive molecules that physically rip apart DNA." },
        { term: "Triplet excited state", definition: "A high-energy state where a molecule stays 'hot' and dangerous." },
        { term: "Dark carcinogenesis", definition: "A process where cancer starts without any light exposure." }
      ],
      content: "In 2012, Nature published a study by Mitra and colleagues that changed everything. They found that pheomelanin is not just a 'weak' shield — it is an active source of damage. When pheomelanin absorbs light, it enters a 'triplet excited state' and stays there, spitting out ROS. But even more shocking, they proved it keeps generating ROS even in **complete darkness**. It also releases iron under stress, triggering something called the **Fenton reaction** which shreds DNA. This is a double hit: more damage being caused, and less MC1R-driven DNA repair to fix it.",
      visualAid: "Light vs Dark Comparison — Panel 1: UV hitting pheomelanin. Panel 2: Pheomelanin sparking damage in the dark.",
      takeaways: [
        "Pheomelanin is chemically active even when you aren't in the sun.",
        "It releases iron which catalyzes destructive chemical reactions.",
        "Loss-of-function MC1R also impairs the body's built-in DNA repair tools."
      ],
      reflection: "How does knowing that damage can happen in the dark change how we protect ourselves?",
      bridge: "Let's zoom out. Melanin isn't just in humans or even just in animals. It's a universal code."
    }
  ]
};

const module5 = {
  id: "module-5", number: 5, tier: 1,
  title: "The Melanin Family — Universal Substrate",
  subtitle: "Earth's Carbon Code",
  description: "Discovering melanin as a fundamental building block across all five kingdoms of life and its geometric connection to carbon.",
  color: "#d4a017", glyph: "⚙", part: "Phase I",
  lessons: [
    {
      id: "L9", number: 9, title: "Melanin Across All Life", subtitle: "The Original Battery", duration: "0:44",
      hook: "Melanin is not a human invention. It is billions of years old and found in every kingdom of life on this planet.",
      keyTerms: [
        { term: "Radiotrophic", definition: "Organisms that 'eat' radiation for energy." },
        { term: "Chlorophyll", definition: "The green molecule in plants that functions as 'green melanin'." },
        { term: "Mitochondria", definition: "The energy factory of your cells, which inherited melanin tools." }
      ],
      content: "Bacteria use melanin to survive extreme radiation. In 1991, scientists found fungi inside the destroyed Chernobyl reactor that were actually growing toward the most radioactive areas. These **radiotrophic fungi** use melanin to convert deadly gamma radiation into biological energy. In plants, **chlorophyll** is functionally nothing more than 'green melanin' — it does the same job of harvesting light. Even your own mitochondria have a melanin-like inheritance. Across all life, melanin is the bridge between environmental energy and biological power.",
      visualAid: "Kingdom of Life Map — showing melanin's role in bacteria, fungi, plants, and animals.",
      takeaways: [
        "Melanin is one of the oldest survival molecules on Earth.",
        "It can convert ionizing radiation (like gamma rays) into food.",
        "Chlorophyll is functionally a variant of the melanin energetic system."
      ],
      reflection: "If melanin turns light into energy in plants, what might it be doing with the light that reaches your skin?",
      bridge: "To understand why melanin is so good at this, we have to look at the element it is built from: Carbon."
    },
    {
      id: "L10", number: 10, title: "Carbon-12 — The Geometry of Life", subtitle: "The Harmonic Lattice", duration: "0:49",
      hook: "Carbon is the element of life. But did you know the structure of Carbon-12 is mathematically tied to the harmony of this course?",
      keyTerms: [
        { term: "Carbon-12", definition: "The most common form of carbon, with 6 protons, 6 neutrons, and 6 electrons." },
        { term: "Tetrahedral bonding", definition: "A geometric shape (a pyramid) that creates 3D strength." },
        { term: "Conjugated resonance", definition: "A molecular arrangement that allows energy to flow easily." }
      ],
      content: "Carbon-12 is the heart of melanin. It has 6 protons, 6 neutrons, and 6 electrons — total 18. 1 plus 8 collapses to **9**, which is our harmonic number for this course. Carbon bonds in two ways: tetrahedral (creating strong backbones) and conjugated ring (allowing energy to resonate). Melanin combines both. It is a stable geometric lattice that acts as an antenna for electromagnetism. This is why melanin turns up in coal, graphite, and diamonds as carbon becomes more organized. Melanin is carbon organized for life's interface with energy.",
      visualAid: "Carbon Architecture Diagram — showing the 6-6-6 structure and how it forms the aromatic rings of melanin.",
      takeaways: [
        "Carbon-12 provides the geometric foundation for the melanin system.",
        "Melanin uses 'resonance' to handle light and electricity without breaking.",
        "The number 9 is physically encoded in the very element melanin is built from."
      ],
      reflection: "Does it feel differently to know that your protection is built from the same geometry as a diamond?",
      bridge: "We've looked at the chemistry and the geometry. Now let's look at the whole system map."
    }
  ]
};

const module6 = {
  id: "module-6", number: 6, tier: 1,
  title: "The Big Picture — How It All Connects",
  subtitle: "Tier 1 Synthesis",
  description: "Reviewing the foundation and preparing to transition from the map to the terrain in Tier 2.",
  color: "#d4a017", glyph: "✧", part: "Phase I",
  lessons: [
    {
      id: "L11", number: 11, title: "The Melanin System Map", subtitle: "The Full Body Network", duration: "0:48",
      hook: "You now have the vocabulary and the major pieces. Let me show you how they fit together into one unified system.",
      keyTerms: [
        { term: "Architecture", definition: "The overall design and organization of a system." },
        { term: "Cascade", definition: "A series of events where each one triggers the next." },
        { term: "Coherence", definition: "A state where all parts of a system work together harmoniously." }
      ],
      content: "Think of your melanin system as an electrical grid. At the top is the **MC1R gene**, the governor. Below it is the fork between eumelanin (shield/battery) and pheomelanin (source of stress). This system reaches Every part of you. In your skin, it handles light. In your brain (as neuromelanin), it manages motivation and protection. In your blood, it regulates iron and magnetic states. It even connects to your hormones through a molecule called POMC. You are not a collection of parts; you are one unified architectural project, and melanin is the wiring.",
      visualAid: "The Master System Map — a human figure showing the connection from gene (top) to all organ systems.",
      takeaways: [
        "Melanin connects pigmentation to brain function and blood health.",
        "MC1R status affects more than just what you see in the mirror.",
        "Understanding individual pieces is the first step to seeing the whole."
      ],
      reflection: "If everything is connected, how might changing one part of your lifestyle affect your entire system?",
      bridge: "You have the map. Now, it is time to walk the terrain."
    },
    {
      id: "L12", number: 12, title: "Preparing for the Deep Dive", subtitle: "Transition to Tier 2", duration: "0:43",
      hook: "We have finished our first pass through the spiral. Take a breathe. It’s about to get much deeper.",
      keyTerms: [
        { term: "Spiral curriculum", definition: "A teaching method where you revisit topics at deeper levels." },
        { term: "Terrain", definition: "The detailed physical reality of a system." },
        { term: "Scaffolding", definition: "Building complex knowledge on top of simple foundations." }
      ],
      content: "Congratulations. You have completed Tier 1, 'The Foundation'. You know WHAT the melanin system is. In Tier 2, we are going to learn exactly HOW it works in every system. We will dedicate entire modules to neuromelanin in your brain, the magnet inside your head, your magnetic blood, and the chemicals that control your habits. We will use the vocabulary we've built, so don't worry if it felt fast. Each topic is coming back around, but this time, we are bringing the full weight of the research papers with us. Are you ready?",
      visualAid: "The 3-Tier Spiral — a focused view showing the student emerging from the Gold Tier and entering the Purple Tier.",
      takeaways: [
        "Tier 1 gave you the vocabulary and big picture.",
        "Tier 2 will provide technical depth for each individual system.",
        "Tier 3 will synthesize it all into a way to live."
      ],
      reflection: "Which topic from Tier 1 are you most excited to see again in more detail?",
      bridge: "Welcome to Tier 2. Let’s start with the brain’s dark architecture: Neuromelanin."
    }
  ]
};

const module7 = {
  id: "module-7", number: 7, tier: 2,
  title: "Neuromelanin — The Brain's Dark Architecture",
  subtitle: "The Pigment That Runs Your Mind",
  description: "Diving deep into the brainstem structures that use melanin for protection and neurochemical management.",
  color: "#8B5CF6", glyph: "◉", part: "Phase II",
  lessons: [
    {
      id: "L13", number: 13, title: "Where Neuromelanin Lives", subtitle: "The Brainstem Engine", duration: "0:45",
      hook: "Did you know you have melanin inside your brain? It is concentrated in the very structures that decide if you are focused or alert.",
      keyTerms: [
        { term: "Substantia nigra", definition: "A brainstem structure (Latin for 'black substance') that produces dopamine." },
        { term: "Locus coeruleus", definition: "The 'blue spot' in the brainstem that produces norepinephrine." },
        { term: "Dopamine", definition: "The chemical messenger for motivation, movement, and reward." },
        { term: "Norepinephrine", definition: "The chemical that controls alertness and the fight-or-flight response." }
      ],
      content: "Neuromelanin is found in the substantia nigra (SN) and the locus coeruleus (LC). These are the most critical nuclei in your brainstem. The SN produces dopamine, which is why it looks dark — it’s packed with neuromelanin. The LC produces norepinephrine, controlling your 'arousal switch'. Neuromelanin’s job here is high-stakes: it chelates (binds) iron to keep it safe, manages the dopamine supply, and protects these neurons from wearing out. When we look at Parkinson's disease, we see the results of these neurons losing their melanin integrity.",
      visualAid: "Brainstem Anatomy Diagram — highlighting the SN and LC with output arrows for Dopamine and Norepinephrine.",
      takeaways: [
        "Neuromelanin is concentrated in the SN and LC of the brainstem.",
        "These structures govern motivation, reward, and alertness.",
        "Neuromelanin acts as a neuroprotective shield for these vital cells."
      ],
      reflection: "If the structures that run your motivation are built on melanin, how might your biology affect your drive?",
      bridge: "Now let's see how that 'dark architecture' is actually built and what happens when it breaks."
    },
    {
      id: "L14", number: 14, title: "How Neuromelanin Is Made (and What Happens When It Fails)", subtitle: "The Lifecycle of the Pigment", duration: "0:53",
      hook: "Neuromelanin isn't built the same way as skin pigment. It is built as a byproduct of your own brain's activity.",
      keyTerms: [
        { term: "Dopamine oxidation", definition: "The chemical breakdown of dopamine that creates neuromelanin." },
        { term: "Lipid component", definition: "The fats that are layered into the melanin structure in the brain." },
        { term: "Fenton reaction", definition: "A destructive chemical reaction triggered by free iron." },
        { term: "Parkinson's disease", definition: "A condition caused by the death of dopamine neurons in the brain." }
      ],
      content: "Unlike skin melanin, neuromelanin is made from the oxidation of dopamine and norepinephrine. It accumulates throughout your life, creating a layered, onion-like structure with fats and pigments. It captures excess iron safely. But here is the vulnerability: research (Tell-Marti et al., 2015) shows that if your MC1R gene is variant, your brain builds a 'pheomelanin-core' neuromelanin. This version is unstable. Under stress, it releases iron instead of holding it. This triggers Fenton reactions that kill the neurons. This is why MC1R-variant individuals have a 2-3x higher risk of Parkinson's.",
      visualAid: "Neuromelanin Lifecycle — showing formation, accumulation, and then the split between healthy chelation vs. iron release.",
      takeaways: [
        "Neuromelanin accumulation is a lifelong process of 'chemical memory'.",
        "Proper structure requires functional MC1R for stable iron management.",
        "Melanin degradation is the primary driver of certain neurodegenerative diseases."
      ],
      reflection: "If your brain uses a pigment to record its own activity over a lifetime, what kind of 'record' are you building?",
      bridge: "Melanin manages iron. And where there is iron, there is magnetism. Let's meet the magnet in your head."
    }
  ]
};

const module8 = {
  id: "module-8", number: 8, tier: 2,
  title: "Brainstem Magnetite — The Biological Antenna",
  subtitle: "The Magnet in Your Brain",
  description: "Exploring the biogenic magnets your body builds and how they connect you to the Earth's field.",
  color: "#8B5CF6", glyph: "⑨", part: "Phase II",
  lessons: [
    {
      id: "L15", number: 15, title: "Biogenic Magnetite in the Human Brain", subtitle: "The Inner Compass", duration: "0:41",
      hook: "You have actual magnetic crystals inside your head. And your body builds them on purpose.",
      keyTerms: [
        { term: "Magnetite (Fe3O4)", definition: "A naturally occurring magnetic mineral." },
        { term: "Biogenic", definition: "Produced by a living organism rather than by geologic processes." },
        { term: "Ferrimagnetic", definition: "A type of magnetism used in compasses and data storage." },
        { term: "Single-domain crystal", definition: "A crystal that behaves as one single, strong magnet." }
      ],
      content: "In 1992, Joseph Kirschvink proved that the human brain contains roughly 5 million magnetite crystals per gram. In 2018, Bauer showed that these crystals are twice as concentrated in the brainstem as anywhere else in the brain — exactly where the neuromelanin-dense SN and LC are located. We have even found four gene modules in humans that are ancestral descendants of the system bacteria use to make 'magnetosomes'. Your brain isn't just processing signals; it is physically built to respond to magnetic fields.",
      visualAid: "Brain Magnetite Heat Map — showing the highest concentration glowing in the brainstem areas.",
      takeaways: [
        "The human brain contains millions of biogenic magnetite crystals.",
        "Concentration is highest in the neuromelanin-dense brainstem.",
        "This system evolved from ancient bacterial 'magneto-sensors'."
      ],
      reflection: "If you have magnets in your brain, what does that mean for your relationship to the Earth's magnetic field?",
      bridge: "How do the melanin and the magnets work together? That is the cascade."
    },
    {
      id: "L16", number: 16, title: "The Neuromelanin-Magnetite Cascade", subtitle: "The Connection Point", duration: "0:44",
      hook: "The melanin manages the iron, and the iron builds the magnet. It is a perfect architectural chain.",
      keyTerms: [
        { term: "Iron pool", definition: "The supply of iron within a cell available for building structures." },
        { term: "Schumann resonance", definition: "The Earth's electromagnetic frequency at 7.83 Hz." },
        { term: "Alpha brainwaves", definition: "The brain's frequency state (8-12 Hz) associated with calm focus." },
        { term: "Entrainment", definition: "When a biological system synchronizes its rhythm to an external signal." }
      ],
      content: "Here is the circuit: Neuromelanin chelates (grabs) iron. This creates an 'iron pool' that feeds the growth of magnetite crystals. Because magnetite is ferrimagnetic, it responds to external fields — like the Earth's Schumann resonance at 7.83 Hz. This frequency sits right at the edge of your alpha brainwave state. This means your brainstem may function as a biological antenna, coupling your nervous system directly to the planet's pulse. Functional MC1R ensures enough melanin is there to manage the iron that builds the antenna.",
      visualAid: "The Cascade Chain — MC1R → Neuromelanin → Iron Pool → Magnetite → EM Field Response.",
      takeaways: [
        "Neuromelanin regulates the iron used to build brain magnetite.",
        "Magnetite allows the brain to receive planetary electromagnetic signals.",
        "This system enables the nervous system to 'tune' into the environment."
      ],
      reflection: "How would it change your day if you felt 'tuned' into the planet's natural frequency?",
      bridge: "This circuit needs fuel. Let's look at the chemical that connects your gut to your brain melanin."
    }
  ]
};

const module9 = {
  id: "module-9", number: 9, tier: 2,
  title: "Serotonin — The Gut-Brain-Melanin Circuit",
  subtitle: "The Chemical That Connects Everything",
  description: "Tracing the tryptophan pathway from gut production to skin receptor activation.",
  color: "#8B5CF6", glyph: "△", part: "Phase II",
  lessons: [
    {
      id: "L17", number: 17, title: "The Tryptophan Pathway", subtitle: "The Fork in the Road", duration: "0:35",
      hook: "What if I told you that 95% of your mood chemical is made in your gut, not your head? And that it’s directly tied to your melanin?",
      keyTerms: [
        { term: "Tryptophan", definition: "The essential amino acid from food used to build serotonin and melanin." },
        { term: "5-HTP", definition: "The halfway molecule between food and serotonin." },
        { term: "Serotonin (5-HT)", definition: "The chemical for mood, sleep, and melanin regulation." },
        { term: "Kynurenine pathway", definition: "The 'stress path' tryptophan takes during inflammation." }
      ],
      content: "Tryptophan is the shared precursor for serotonin, melatonin, and melanin. Most of it is made in your gut. But here’s the rub: when you are stressed or inflamed, your body diverts tryptophan into the 'kynurenine pathway' to help your immune system. This 'robs' the melanin system of its raw materials. Chronic stress doesn't just make you unhappy; it literally steals the bricks you need to build your protective melanin infrastructure.",
      visualAid: "Tryptophan Fork Diagram — showing Tryptophan splitting into Serotonin (Healthy) or Kynurenine (Stressed).",
      takeaways: [
        "Serotonin and melanin share the same starting material: tryptophan.",
        "The gut is the primary factory for the serotonin branch.",
        "Stress and inflammation divert resources away from this melanin circuit."
      ],
      reflection: "If stress 'steals' the raw material for your protection, how can we better prioritize peace?",
      bridge: "Serotonin doesn't just stay in the brain or gut. It speaks directly to your skin."
    },
    {
      id: "L18", number: 18, title: "Serotonin Receptors in Your Skin", subtitle: "The Communication Axis", duration: "0:47",
      hook: "Your skin isn't just waiting for the sun. It's listening to your serotonin levels right now.",
      keyTerms: [
        { term: "5-HT2A", definition: "The primary serotonin receptor in the skin and the 'psychedelic' receptor in the brain." },
        { term: "Melanogenesis", definition: "The biological process of building melanin particles." },
        { term: "Neural crest", definition: "The embryonic group that gave birth to both your brain and your skin." },
        { term: "Bidirectional axis", definition: "A two-way street where two systems talk back and forth." }
      ],
      content: "Your melanocytes (the melanin builders) express 6 different types of serotonin receptors. The most important is 5-HT2A. When serotonin docks here, it tells the cell to build more melanin. This is the same receptor family that handles psychedelic experiences in the brain! Because skin cells and brain cells both come from the same 'neural crest' in the womb, they are siblings. Research shows that chronic stress reduces serotonin, which then causes measurable 'depigmentation' in the skin. Your mental state and your melanin are in a constant, two-way conversation.",
      visualAid: "Serotonin Receptor Map — a melanocyte cell with labeled receptors acting like ears for serotonin signals.",
      takeaways: [
        "Melanocytes have receptors specifically designed to 'hear' serotonin.",
        "Serotonin directly triggers melanin production (melanogenesis).",
        "The skin and brain are developmental siblings through the neural crest."
      ],
      reflection: "If your skin 'hears' your mood through serotonin, what color are your thoughts today?",
      bridge: "At night, this serotonin transforms again. Let's follow it into the Pineal gland."
    }
  ]
};

const module10 = {
  id: "module-10", number: 10, tier: 2,
  title: "Melatonin — The Pineal Signal",
  subtitle: "Your Body's Clock and Light Processor",
  description: "Understanding how melatonin protects your cells and synchronizes you to the planet's rhythm.",
  color: "#8B5CF6", glyph: "⊛", part: "Phase II",
  lessons: [
    {
      id: "L19", number: 19, title: "How Melatonin Is Made", subtitle: "From Serotonin to Sleep", duration: "0:39",
      hook: "Melatonin is often called the 'sleep hormone', but it’s actually a full member of the melanin family — 'Mela-tonin'.",
      keyTerms: [
        { term: "Pineal gland", definition: "A small, light-sensitive gland in the center of the brain." },
        { term: "AANAT / ASMT", definition: "The two enzymes that turn serotonin into melatonin at night." },
        { term: "Circadian rhythm", definition: "The internal 24-hour cycle that tells you when to wake and sleep." },
        { term: "MC1R double hit", definition: "When a mutation reduces BOTH skin melanin AND pineal melatonin." }
      ],
      content: "As darkness falls, your pineal gland uses two enzymes (AANAT and ASMT) to convert serotonin into melatonin. Melatonin is a powerhouse antioxidant that can cross the blood-brain barrier to protect your neurons while you sleep. But here is the MC1R connection: if your master switch is variant, you often produce less serotonin in your melanocytes AND less melatonin in your brain. This 'double hit' means your whole system has less antioxidant protection during the day and less deep-tissue cleanup at night.",
      visualAid: "Melatonin Pathway Animation — Serotonin transforming into Melatonin as a sun icon changes to a moon.",
      takeaways: [
        "Melatonin is built from serotonin in the pineal gland during darkness.",
        "It is one of the most powerful cellular protectors in the human body.",
        "MC1R variants can impact both daytime and nighttime protection systems."
      ],
      reflection: "If melatonin is 'melanin for the night', are you giving your body enough darkness to build its shield?",
      bridge: "This system doesn't just help you sleep — it connects you to the architecture of time."
    },
    {
      id: "L20", number: 20, title: "The Circadian Architecture", subtitle: "Light as Information", duration: "0:44",
      hook: "Your body is an electromagnetic device synchronized to the rotation of the Earth. And your pineal gland is the bridge.",
      keyTerms: [
        { term: "Cortisol", definition: "The hormone that peaks in the morning to wake you up (and responds to stress)." },
        { term: "Blue light", definition: "Short-wavelength light from screens that tells the brain it is 'daytime'." },
        { term: "Pineal calcification", definition: "Hardening of the pineal gland, which reduces melatonin output." }
      ],
      content: "Your body runs on a 'seesaw' between melatonin (at night) and cortisol (during the day). This rhythm isn't just about sleep; it’s a synchronization to the planet's light-dark cycle. When you look at a screen at 11 PM, the blue light hits retinal receptors that tell your pineal gland 'it's still noon!' This suppresses melatonin and causes chaos in your melanin system. Over time, things like calcification and blue light disruption degrade this architecture, leading to inflammation and cellular stress. Protecting your relationship with light is essential for your melanin intelligence.",
      visualAid: "The Circadian Seesaw — a graph showing Melatonin rising as Cortisol falls, inversely matching the sun.",
      takeaways: [
        "The circadian rhythm is an electromagnetic synchronization event.",
        "Blue light from technology disrupts the melanin-cycle messengers.",
        "Natural light in the day and total darkness at night are biological requirements."
      ],
      reflection: "How many hours of artificial light does your body encounter after the sun goes down?",
      bridge: "We've looked at the brain and the glands. Now let's look at the circuit and the liquid: your blood."
    }
  ]
};

const module11 = {
  id: "module-11", number: 11, tier: 2,
  title: "The Blood Circuit — Iron, Magnets, and Frequency",
  subtitle: "The Electromagnetic Wiring",
  description: "Exploring the physics of magnetic blood and how melanin regulates the body's largest circuit.",
  color: "#8B5CF6", glyph: "⚙", part: "Phase II",
  lessons: [
    {
      id: "L21", number: 21, title: "Pauling's Discovery — Your Blood Is Magnetic", subtitle: "The Physics of Flow", duration: "0:47",
      hook: "Have you ever wondered how an MRI machine can see inside you? It's because your blood is magnetic and switches its state with every heartbeat.",
      keyTerms: [
        { term: "Hemoglobin", definition: "The iron-containing protein in red blood cells that carries oxygen." },
        { term: "Paramagnetic", definition: "Attracted to magnets (happens when blood releases oxygen)." },
        { term: "Diamagnetic", definition: "Repelled by magnets (happens when blood carries oxygen)." },
        { term: "BOLD signal", definition: "The magnetic signature that fMRI machines measure to track brain activity." }
      ],
      content: "In 1936, Linus Pauling proved that blood has two magnetic states. In your arteries (with oxygen), it's diamagnetic. In your veins (without oxygen), it's paramagnetic because the iron atoms have 'unpaired' electrons. This means your blood oscillates between magnetic states every single minute of your life. Every red blood cell contains four iron atoms, cycling between states like a million tiny switches. Charge oscillation IS vibration. When we say 'raise your vibration,' we are talking about the coherence of this physical, magnetic flow.",
      visualAid: "Blood Magnetic Oscillation — Arteries (Blue repel arrow) vs Veins (Red attract arrow) cycling.",
      takeaways: [
        "Blood is a magnetic fluid that changes state as it moves through the body.",
        "MRI technology works by measuring this specific magnetic oscillation.",
        "Life is a process of constant electromagnetic charge cycling."
      ],
      reflection: "If every heartbeat is a magnetic event, how does the frequency of your heart affect your field?",
      bridge: "Iron is magnetic, but it's also dangerous if loose. That's why the melanin-iron system exists."
    },
    {
      id: "L22", number: 22, title: "The Melanin-Iron Regulatory System", subtitle: "The Coherence Mechanism", duration: "0:47",
      hook: "Melanocytes built the factory where your blood is made. They did it to protect the most important circuit you have.",
      keyTerms: [
        { term: "Hematopoietic niche", definition: "The specific 'shelter' in the bone marrow where blood cells are born." },
        { term: "Harvard/Zon Study", definition: "Research showing fish blood stem cells hide under melanin shielding." },
        { term: "Stability", definition: "The ability of a system to maintain its state under pressure." }
      ],
      content: "Harvard researchers proved that blood stem cells migrated to bone marrow specifically because melanocytes were there to provide UV shielding. The melanocyte built the shelter for the blood factory. Why? Because loose iron in blood is a 'fire hazard'. Eumelanin chelates (holds) iron stably, preventing the Fenton reaction. But pheomelanin (the OFF switch) releases iron under stress. This causes 'chaos in the circuit' — where the iron triggers damage instead of maintaining magnetic coherence. Functional MC1R is the key to keeping the blood circuit clean and coherent.",
      visualAid: "The Blood Niche — a diagram showing melanocytes creating a protective 'tent' over new blood cells.",
      takeaways: [
        "Melanin provides the structural defense for blood production.",
        "Eumelanin keeps the magnetic iron circuit stable and safe.",
        "The melanin-blood connection is one integrated electromagnetic system."
      ],
      reflection: "If your 'blood shelter' is compromised, what happens to the quality of the life-force you produce?",
      bridge: "This circuit links to behavior through a molecule that handles both protection and pleasure."
    }
  ]
};

const module12 = {
  id: "module-12", number: 12, tier: 2,
  title: "POMC & The Melanin-Sexual Axis",
  subtitle: "The Molecule That Connects Biology to Behavior",
  description: "Decoding the mother molecule POMC and how melanin is wired into reward and arousal.",
  color: "#8B5CF6", glyph: "✧", part: "Phase II",
  lessons: [
    {
      id: "L23", number: 23, title: "POMC — The Mother Molecule", subtitle: "One Source, Many Messages", duration: "0:43",
      hook: "What if the chemical that makes your melanin also makes your body's natural painkillers and pleasure chemicals?",
      keyTerms: [
        { term: "POMC", definition: "Pro-opiomelanocortin, a large precursor protein that gets chopped into active signals." },
        { term: "Beta-endorphin", definition: "Your body's natural opioid for pleasure and pain relief." },
        { term: "ACTH", definition: "The stress hormone that triggers cortisol release." },
        { term: "Cleavage", definition: "The process of cutting a large protein into smaller, functional pieces." }
      ],
      content: "POMC is the father of all melanin messengers. Your body takes this one long protein and chops it into Alpha-MSH (which activates melanin), Beta-endorphin (which makes you feel pleasure and suppresses pain), and ACTH (which handles stress). They are siblings! Your capacity for melanin production and your capacity for joy come from the exact same source. This is why the melanin system is fundamentally wired into your reward circuitry, your pain management, and your emotional regulation. It is all one architecture.",
      visualAid: "POMC Cleavage Map — showing the parent molecule being cut into labeled chunks like a puzzle.",
      takeaways: [
        "Melanin signals and pleasure signals share the same parent molecule (POMC).",
        "The system for protection (melanin) is linked to the system for reward (endorphins).",
        "This architectural link connects biology directly to behavior and mood."
      ],
      reflection: "Does it change your view of 'pleasure' to know it is a sibling to your 'protection'?",
      bridge: "This axis goes even deeper into how we connect with others. Let's look at the Sexual Axis."
    },
    {
      id: "L24", number: 24, title: "The Autonomic Triad and MC4R", subtitle: "The Desire Receptor", duration: "0:50",
      hook: "The signal that turns on your melanin also turns on the brain's sexual arousal system. It's a single master pathway.",
      keyTerms: [
        { term: "MC4R", definition: "The Melanocortin-4 Receptor, which governs hunger and sexual arousal in the brain." },
        { term: "Bremelanotide", definition: "An FDA-approved drug for sexual arousal that works by activating melanocortins." },
        { term: "Autonomic Triad", definition: "The team of brainstem centers (LC, SN, NTS) that run your involuntary life." },
        { term: "NTS", definition: "Nucleus Tractus Solitarius — the center for vagal (resting) input in the brainstem." }
      ],
      content: "Alpha-MSH doesn't just bind to MC1R in your skin. It also binds to MC4R in your brain. This receptor is the primary engine for central sexual arousal. In fact, modern drugs like Bremelanotide work entirely by mimicking this melanin signal. The 'Autonomic Triad' — the LC (alertness), SN (reward/melanin), and NTS (vagal rest) — are all concentrated with melanin. This means the entire arousal and reward signal routes through the melanin structures of the brainstem. If the melanin hardware is compromised, the reward and connection architecture is recalibrated body-wide.",
      visualAid: "The Autonomic Triad Diagram — showing the LC, SN, and NTS labeled with arrows of convergence.",
      takeaways: [
        "Arousal and melanin activation use the same molecular messengers.",
        "The brainstem's melanin-dense nuclei are the transit points for reward signals.",
        "This axis connects biological protection to the drive for reproduction and connection."
      ],
      reflection: "If reward and reproduction are built on melanin, how might 'coherence' affect our relationships?",
      bridge: "We've walked the terrain of every system. Now, let's look at the Architecture of the whole."
    }
  ]
};

const module13 = {
  id: "module-13", number: 13, tier: 3,
  title: "The Toroidal Being — Three Centers",
  subtitle: "The Geometry of the Human Field",
  description: "Synthesizing the melanin circuit into a unified electromagnetic architecture of gut, heart, and brain.",
  color: "#10B981", glyph: "◉", part: "Phase III",
  lessons: [
    {
      id: "L25", number: 25, title: "The Three-Center Architecture", subtitle: "The Unified Field", duration: "0:39",
      hook: "You are not just a brain in a jar. You are a toroidal field generated by three distinct centers of intelligence.",
      keyTerms: [
        { term: "Toroid", definition: "A doughnut-shaped geometric volume that is the most efficient shape in the universe for energy flow." },
        { term: "Vagus nerve", definition: "The 'highway of information' that threads through the gut, heart, and brain." },
        { term: "Biofield", definition: "The electromagnetic field produced by a living organism." }
      ],
      content: "The human being is organized around a central toroidal vortex. This architecture has three poles: the gut (receptive), the brain (projective), and the heart (reconciling). The vagus nerve, the largest nerve in your body, threads these three centers together like a needle. Melanin is the material that allows these centers to communicate at high speed. When these three centers are aligned, your field is 'coherent' — meaning your energy isn't being wasted; it is being focused.",
      visualAid: "Toroidal Human Diagram — showing a person inside a doughnut-shaped field with the 3 centers glowing.",
      takeaways: [
        "Human biology follows a toroidal (doughnut-shaped) energy geometry.",
        "The gut, heart, and brain are the three poles of this system.",
        "Coherence is the state where all three centers work together efficiency."
      ],
      reflection: "When you feel 'scattered', which of the three centers (gut, heart, or brain) feels most offline?",
      bridge: "Let's look at where it all begins: the Receptive Pole."
    },
    {
      id: "L26", number: 26, title: "The Vagus Thread", subtitle: "The Communication Highway", duration: "0:36",
      hook: "There is a literal physical wire that connects your 'gut feeling' to your 'rational thought' via your heartbeat.",
      keyTerms: [
        { term: "Afferent", definition: "Signals traveling UP from the body to the brain." },
        { term: "Efferent", definition: "Signals traveling DOWN from the brain to the body." },
        { term: "Vagal tone", definition: "The strength and efficiency of your vagus nerve communication." }
      ],
      content: "The vagus nerve is 80% afferent — meaning 80% of the information is traveling UP from your body to your brain. Your gut is 'telling' your brain what to think far more than your brain is telling your gut what to do. Melanin in the brainstem acts as the 'switching station' for these signals. High vagal tone means your body can switch quickly from stress back to calm focus. This 'vagal thread' is what makes the 3-center architecture a single, recursive system.",
      visualAid: "The Vagus Highway — a diagram showing the 80/20 split of information flow between body and brain.",
      takeaways: [
        "The body sends more information to the brain than the brain sends to the body.",
        "The vagus nerve is the physical architecture of the 'gut-brain axis'.",
        "Vagal tone is a measure of your system's resilience and switching capacity."
      ],
      reflection: "If 80% of your thoughts originate as body signals, how important is it to keep your body calm?",
      bridge: "We begin at the bottom of the vortex. Let's study the Magnetic Pole."
    }
  ]
};

const module14 = {
  id: "module-14", number: 14, tier: 3,
  title: "The Magnetic Pole — Receptive Causality",
  subtitle: "The Gut center",
  description: "The science of how your gut reads the environment before you even have a thought.",
  color: "#10B981", glyph: "⑨", part: "Phase III",
  lessons: [
    {
      id: "L27", number: 27, title: "The Magnetic/Receptive Center", subtitle: "Cause Enters the System", duration: "0:36",
      hook: "Perception doesn't start in your eyes. It starts in your gut. This is the feminine, receptive pole of your biology.",
      keyTerms: [
        { term: "Enteric Nervous System (ENS)", definition: "The 'second brain' in your gut containing 500 million neurons." },
        { term: "Magnetic pole", definition: "The part of a system that pulls information inward (reception)." },
        { term: "Causality", definition: "The relationship between an event (cause) and its result (effect)." }
      ],
      content: "In the toroidal model, the gut is the magnetic pole — the compressive force that draws information inward from the external field. Cause enters your system here. With 500 million neurons, your gut is 'reading' the chemistry and frequency of everything you encounter. This is why we call it the 'Receptive' pole. It doesn't analyze; it just absorbs. This serotonin-mediated function is the first step in the cycle of consciousness.",
      visualAid: "The Magnetic Inflow — an animation showing energy being 'pulled' into the gut center from the environment.",
      takeaways: [
        "The gut functions as the magnetic, receptive input for the human system.",
        "Perception is a biological 'pull' of information from the environment.",
        "This is the entry point for all 'cause' before it becomes 'effect'."
      ],
      reflection: "What kind of 'information' are you feeding your magnetic pole through your environment?",
      bridge: "Once the signal is in, it has to pass through the center of the vortex."
    },
    {
      id: "L28", number: 28, title: "Serotonin Logic in the Gut", subtitle: "The Primary Signal", duration: "0:41",
      hook: "Your gut uses serotonin to 'translate' the world into a language your brain can understand.",
      keyTerms: [
        { term: "Transduction", definition: "Converting one form of energy (like chemical) into another (like electrical)." },
        { term: "Mucosal serotonin", definition: "The serotonin produced in the lining of the gut for field reading." },
        { term: "Intuition", definition: "Direct knowledge from the body that bypasses analytical thought." }
      ],
      content: "We've seen that 95% of serotonin is in the gut. But here is why: serotonin is the chemical medium for 'reading the field'. When your gut receives a signal, it uses serotonin to transduce that into a vagal pulse. This is 'Serotonin Logic' — a fast, non-verbal way of knowing if an environment is safe or threatening. If your serotonin is depleted or your gut is inflamed, your 'reading' of the world becomes noisy and inaccurate. Health in the gut center is the foundation of clear intuition.",
      visualAid: "Serotonin Translation — showing a chemical signal hitting a receptor and becoming an electrical spark in the vagus nerve.",
      takeaways: [
        "Serotonin is the primary 'translator' for bodily perception.",
        "Clear gut health is required for accurate intuitive processing.",
        "The magnetic pole provides the 'raw data' for the rest of the architecture."
      ],
      reflection: "If your gut is the 'antenna' for your intuition, is your antenna currently clean or cluttered?",
      bridge: "Now the signal moves to the center: the Heart."
    }
  ]
};

const module15 = {
  id: "module-15", number: 15, tier: 3,
  title: "The Reconciling Vortex — The Heart Field",
  subtitle: "The Center of the Architecture",
  description: "The physics of the heart's electromagnetic field and its role as the system integrator.",
  color: "#10B981", glyph: "△", part: "Phase III",
  lessons: [
    {
      id: "L29", number: 29, title: "The Reconciling Force", subtitle: "The Neutralizing Pole", duration: "0:43",
      hook: "Your heart is not a pump. It is a reconciling vortex that unifies your body's forces into a single field.",
      keyTerms: [
        { term: "Reconciling", definition: "Bringing two opposing forces together to create a new, third result." },
        { term: "Electromagnetic amplitude", definition: "The strength of a field (the heart's is 60x stronger than the brain's)." },
        { term: "Toroidal vortex", definition: "The movement of energy spiraling around a center." }
      ],
      content: "The heart sits at the geometric center of your torso. It generates the strongest EM field in the body — detectable several feet away. In our model, the heart is the **Reconciling Force**. It takes the 'ascending' signal from the gut (magnetic) and the 'descending' signal from the brain (electrical) and unifies them. It is the neutralizing pole. When the heart is 'in coherence', it broadcasts a smooth sinusoidal wave that organizes every other system in the body. The heart tells the rest of the architecture how to behave.",
      visualAid: "The Heart Vortex — showing two waves (one up, one down) meeting in the heart and becoming a single pulse.",
      takeaways: [
        "The heart is the strongest electromagnetic generator in the human body.",
        "Its primary function is to reconcile body signals with brain signals.",
        "Heart coherence provides the 'pacing signal' for the entire organism."
      ],
      reflection: "If your heart is broadcasting to the whole room, what 'message' is it currently sending?",
      bridge: "This function is built into the heart's very physical shape. Let's look at the Torrent-Guasp band."
    },
    {
      id: "L30", number: 30, title: "The Torrent-Guasp Architecture", subtitle: "The Spiral Muscle", duration: "0:37",
      hook: "If you unrolled your heart, it would be a single long band of muscle. Its shape IS a spiral.",
      keyTerms: [
        { term: "Torrent-Guasp band", definition: "The discovery that the heart is one continuous muscle fiber coiled in a spiral." },
        { term: "Helical geometry", definition: "A 3D spiral shape like a DNA strand or a whirlpool." },
        { term: "Myocardial architecture", definition: "The physical design and structure of the heart muscle." }
      ],
      content: "For centuries, we thought the heart was a four-chambered pump. But Francisco Torrent-Guasp proved it is actually one single continuous 'helical ventricular myocardial band'. It is one long muscle coiling upon itself in a toroidal geometry. This means the heart is physically built to handle spiraling, vortex flow. It isn't just an organ; it is a physical instantiation of the spiral curriculum we are studying. The heart's shape is the geometry of the course.",
      visualAid: "The Unrolled Heart — showing the heart uncoiling into a single long band, then coiling back into a spiral.",
      takeaways: [
        "The heart is a single helical band, not a collection of separate parts.",
        "Its physical structure matches the toroidal geometry of the biofield.",
        "The heart's design is optimized for handles vortex energy flow."
      ],
      reflection: "Does it help to know that your center of 'reconciliation' is built in the shape of a spiral?",
      bridge: "Finally, the energy reaches the top: the Projective Pole."
    }
  ]
};

const module16 = {
  id: "module-16", number: 16, tier: 3,
  title: "The Electrical Pole — Projective Expression",
  subtitle: "The Brain Center",
  description: "How the brain acts as the projective interface, turning internal states into outward action.",
  color: "#10B981", glyph: "⊛", part: "Phase III",
  lessons: [
    {
      id: "L31", number: 31, title: "The Electrical/Projective Center", subtitle: "Effect Exits the System", duration: "0:42",
      hook: "The brain is the finish line, not the starting line. It is the masculine, projective pole of your biology.",
      keyTerms: [
        { term: "Projective", definition: "Sending energy or information outward from a center." },
        { term: "Electrical pole", definition: "The part of a system that emits response (expression)." },
        { term: "Effect", definition: "The result or output of a causal chain." }
      ],
      content: "The brain (specifically the cortex) is the electrical pole of the toroid. It is the expansive force that emits response outward into the field. This is where 'Effect' exits the system. The brain analyzes, categorizes, and constructs language to express what the gut received and the heart reconciled. If the brain center is over-active, we become 'top-heavy' and rationalistic. If it's under-active, we can't manifest our purpose. Alignment means the brain is projecting what the heart has cleared.",
      visualAid: "The Electrical Outflow — an animation showing energy radiating from the brain center outward into the field.",
      takeaways: [
        "The brain functions as the electrical, projective output for the system.",
        "It is the center for expression, action, and analytical thought.",
        "Expression is the final stage of the biological recursion cycle."
      ],
      reflection: "Is your brain currently 'projecting' your truth or just 'reflecting' your fears?",
      bridge: "This projection is powered by the same chemicals we saw in our melanin factory."
    },
    {
      id: "L32", number: 32, title: "Dopamine Logic and Expression", subtitle: "The Fuel for Action", duration: "0:42",
      hook: "The same chemical that creates your brain's melanin is the one that drives you to achieve your goals.",
      keyTerms: [
        { term: "Prefrontal Cortex (PFC)", definition: "The 'CEO' of the brain responsible for planning and focus." },
        { term: "Dopamine Logic", definition: "The drive to move, act, and resolve tension in the environment." },
        { term: "Manifestation", definition: "The physical result of a sustained biological projection." }
      ],
      content: "Dopamine is the 'Dopamine Logic' of the PROJECTIVE pole. It provides the fuel for focus and movement. Remember: Neuromelanin in the substantia nigra is built from dopamine oxidation. This means your capacity for sustained action (projection) is physically buffered by your melanin hardware. If your melanin is degraded, your dopamine becomes 'noisy' and destructive, leading to ADHD or movement disorders. A strong melanin architecture in the brainstem is what allows for powerful, coherent manifestation in the world.",
      visualAid: "Dopamine focus — a beam of light from the PFC showing how focus turns intentions into results.",
      takeaways: [
        "Dopamine powers the brain's outward projective expression.",
        "Neuromelanin integrity is required to manage 'clean' dopamine flow.",
        "Biological expression is a high-energy event that requires a functional shield."
      ],
      reflection: "How much 'clean' focus do you have available for your projects today?",
      bridge: "But what happens when the signals don't pass through the heart? That is the Collapse."
    }
  ]
};

const module17 = {
  id: "module-17", number: 17, tier: 3,
  title: "The Heart Bypass & Inscription",
  subtitle: "The Science of Chronic Trauma",
  description: "Exploring the structural consequence of trauma and the 'peptide prison' of the body.",
  color: "#10B981", glyph: "⚙", part: "Phase III",
  lessons: [
    {
      id: "L33", number: 33, title: "The Heart Bypass Mechanism", subtitle: "Toroidal Collapse", duration: "0:45",
      hook: "Trauma isn't just an emotion. It is a structural event where energy skips the heart and shorts out the brain.",
      keyTerms: [
        { term: "Heart Bypass", definition: "When a signal jumps directly from gut to amygdala, skipping the heart's reconciliation." },
        { term: "Amygdala", definition: "The brain's fear and threat processing center." },
        { term: "Collapse", definition: "When a toroidal field loses its center and becomes fragmented." }
      ],
      content: "When you encounter a major threat, you don't have time for the heart to 'reconcile'. The signal skips the heart and jumps from gut to amygdala in 12 milliseconds. This is efficient for survival. But **Chronic Trauma** is when this bypass stays open. The energy keeps skipping the center. This causes a 'toroidal collapse'. Instead of a smooth field, your biofield becomes jagged and fragmented. Over time, this constant flooding of stress chemicals actually degrades the melanin in your brainstem. Trauma physically erodes the hardware that would allow you to heal.",
      visualAid: "Bypass Diagram — showing the red 'short circuit' line bypassing the heart center.",
      takeaways: [
        "Trauma causes an architectural 'short circuit' in the biofield.",
        "The Heart Bypass is a survival mechanism that becomes a pathology if it stays ON.",
        "Chronic bypass leads to the physical degradation of neuromelanin (the Observer's substrate)."
      ],
      reflection: "Can you feel where in your body you might be 'skipping' the center and jumping to reactivity?",
      bridge: "This short circuit is locked in by the body's own chemical messengers."
    },
    {
      id: "L34", number: 34, title: "Neuropeptides and the Peptide Prison", subtitle: "Body-Wide Inscription", duration: "0:43",
      hook: "Your cells are not just remembering your history; they are becoming addicted to the chemistry of your past.",
      keyTerms: [
        { term: "Neuropeptide", definition: "A chemical string of amino acids that carries emotional information." },
        { term: "G-Protein Coupled Receptor (GPCR)", definition: "The receptors on every cell in your body that catch neuropeptides." },
        { term: "Inscription", definition: "The physical 'writing' of a pattern into the body's cellular receptors." },
        { term: "Peptide Prison", definition: "The state where cells demand certain stress chemicals to maintain their 'status quo'." }
      ],
      content: "Candace Pert's research proved that neuropeptide receptors are on every cell in your body. When the heart bypass fires, a flood of 'trauma peptides' is released. These peptides bind to your cells and physically change them. Over time, your cells become structurally configured to expect that stress. This is the **Peptide Prison**. You aren't choosing to be stressed; your cells are demanding the stress chemistry because that is what they've been 'inscribed' with. This body-wide memory is why 'just thinking positive' doesn't work for deep trauma.",
      visualAid: "Cell Receptor Inscription — a cell wall changing shape to fit a specific neuropeptide 'key'.",
      takeaways: [
        "Emotion is a body-wide event inscribed at the receptor level.",
        "Cells develop a 'chemical dependency' on common emotional patterns.",
        "The 'Peptide Prison' is a physical, not just psychological, state of confinement."
      ],
      reflection: "If your cells are 'addicted' to your past, what new 'chemistry' can you introduce today?",
      bridge: "Now, we reach the final realization. Let's see how the cycle closes."
    }
  ]
};

const module18 = {
  id: "module-18", number: 18, tier: 3,
  title: "Collapse Recursion — The Logic of Coherence",
  subtitle: "Tier 3 Synthesis",
  description: "Closing the spiral by understanding the Observer's hardware and the path back to architectural integrity.",
  color: "#10B981", glyph: "✧", part: "Phase III",
  lessons: [
    {
      id: "L35", number: 35, title: "Neuromelanin as the Observer's Substrate", subtitle: "The Internal Hardware", duration: "0:45",
      hook: "The 'Observer' is not a mystery. It is a biological function powered by your brain's dark substrate.",
      keyTerms: [
        { term: "The Observer", definition: "The part of your consciousness that can watch your own thoughts and feelings." },
        { term: "Substrate", definition: "The physical material on which a process (like consciousness) runs." },
        { term: "Attentional Gatekeeper", definition: "The RAS function in the brainstem that decides what you notice." }
      ],
      content: "We have come full circle. Melanin in your brainstem (SN/LC) is the hardware of the **Observer**. It is the antenna that unifies the THREE centers. When this melanin is intact and functional ( Wild-type MC1R), you have a 'buffer' that allows you to pause before reacting. You can observe the impulse without being for being captured by it. This is 'Melanin Intelligence'. It is the biological capacity to remain coherent even in the face of pressure. You aren't just your genes; you are the architect of the field they operate within.",
      visualAid: "The Observer's Toggle — a visual showing the brainstem as a glowing 'hub' connecting all three centers.",
      takeaways: [
        "The ability to 'observe' is dependent on the integrity of brainstem melanin.",
        "Melanin intelligence is the biological buffer between impulse and action.",
        "Your architecture is the 'hardware' of your spiritual and mental freedom."
      ],
      reflection: "How does it feel to know that your 'inner peace' has a physical, biological foundation?",
      bridge: "Finally, we close the loop on the entire course."
    },
    {
      id: "L36", number: 36, title: "Collapse Recursion — Closing the Spiral", subtitle: "The Path of Awakening", duration: "0:48",
      hook: "You have walked the 18 modules. You have seen the 36 lessons. Now, the spiral collapses into a single point of realization.",
      keyTerms: [
        { term: "Collapse Recursion", definition: "When a complex system simplifies into its most fundamental truth." },
        { term: "Brainstem-to-Brainstem Entrainment", definition: "The ability for one coherent system to organize another through field interaction." },
        { term: "Awakening", definition: "The biological restoration of the full 3-center toroidal architecture." }
      ],
      content: "Class, we have finished. Melanin is the universal carbon code that organizes energy into life. By understanding your MC1R switch, your magnetic blood, and your toroidal biofield, you have reclaimed the blueprint of your own existence. To 'Awaken' is to restore the heart's reconciling vortex and dissolve the heart bypass. One coherent person can regulate an entire room through brainstem entrainment. You are now an architect of your own field. Your biology is the primary record of your history — and you are the one who decides how the next chapter is written. Welcome to Melanin Intelligence.",
      visualAid: "The Final Collapse — a dramatic animation of the course spiral collapsing into a single, brilliant point of light.",
      takeaways: [
        "Melanin intelligence is the mastery of your biological architecture.",
        "Coherence allows you to organize your own field and impact others.",
        "The course is a loop: you are the beginning and the end of the science of you."
      ],
      reflection: "Now that you have the full architecture, what is the first thing you will build with it?",
      bridge: "The course is complete. Go forth and live with intelligence."
    }
  ]
};

export const modules = [
  module1, module2, module3, module4, module5, module6,
  module7, module8, module9, module10, module11, module12,
  module13, module14, module15, module16, module17, module18
];

export function getAllChapters() {
  return modules.flatMap(mod => mod.lessons.map(lesson => ({
    ...lesson,
    moduleId: mod.id,
    moduleTitle: mod.title,
    color: mod.color,
    tier: mod.tier
  })));
}

export function getLessonById(lessonId) {
  return modules.flatMap((mod) => mod.lessons).find((l) => l.id === lessonId) || null;
}

export function getModuleByLessonId(lessonId) {
  return modules.find((mod) => mod.lessons.some((l) => l.id === lessonId)) || null;
}

export function getNextLesson(currentId) {
  const all = modules.flatMap((mod) => mod.lessons);
  const idx = all.findIndex((l) => l.id === currentId);
  return idx !== -1 && idx < all.length - 1 ? all[idx + 1] : null;
}

export function getPrevLesson(currentId) {
  const all = modules.flatMap((mod) => mod.lessons);
  const idx = all.findIndex((l) => l.id === currentId);
  return idx > 0 ? all[idx - 1] : null;
}

export function getModuleById(moduleId) {
  return modules.find((m) => m.id === moduleId) || null;
}

export function getModulesByTier(tierNumber) {
  return modules.filter((m) => m.tier === tierNumber);
}

export function getTotalLessons() {
  return modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
}

export function getTotalLessonsByTier(tierNumber) {
  return modules
    .filter(m => m.tier === tierNumber)
    .reduce((acc, mod) => acc + mod.lessons.length, 0);
}
