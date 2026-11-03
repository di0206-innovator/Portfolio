export interface BudgetItem {
  id: string;
  name: string;
  category: string;
  specs: string;
  price: number;
  qty: number;
  phase: "core" | "conditional";
  businessPurpose: string;
  growthObjective: "Product Education" | "Distribution" | "Acquisition" | "Interviews" | "Voice Sprints" | "Feedback & QA";
  redundancyOrSubstitutions: string;
}

export const SETUP_CATEGORIES = [
  "Professional Audio Capture",
  "Portable Video & Stabilization",
  "Lighting & Production Rigging",
  "High-Speed Storage & Power",
  "Campus Activations & Field Testing",
  "Production & Distribution Software",
] as const;

export const BUDGET_ITEMS: BudgetItem[] = [
  // CORE SETUP ($2,529.00)
  {
    id: "dji-mic-2",
    name: "DJI Mic 2 (2 TX + 1 RX + Case)",
    category: "Professional Audio Capture",
    specs: "32-bit float internal, 250m range, 18-hr battery",
    price: 349.0,
    qty: 1,
    phase: "core",
    businessPurpose: "Clean dual-channel audio capture in chaotic hackathons & campus floors where mobile mics clip or muffle.",
    growthObjective: "Voice Sprints",
    redundancyOrSubstitutions: "Internal 32-bit float backup guarantees zero clipped dialogue even if wireless receiver drops.",
  },
  {
    id: "shure-mv7-plus",
    name: "Shure MV7+ Broadcast Microphone",
    category: "Professional Audio Capture",
    specs: "USB-C/XLR hybrid, onboard DSP auto-leveling & denoiser",
    price: 279.0,
    qty: 1,
    phase: "core",
    businessPurpose: "Broadcast-grade desktop commentary for 12+ deep-dive Wispr Flow live build sessions and remote podcasts.",
    growthObjective: "Product Education",
    redundancyOrSubstitutions: "Direct USB-C into laptop avoids needing a separate $150 XLR audio interface.",
  },
  {
    id: "dji-pocket-3",
    name: "DJI Osmo Pocket 3 Creator Combo",
    category: "Portable Video & Stabilization",
    specs: "1\" CMOS sensor, 4K/120fps, mechanical 3-axis gimbal",
    price: 669.0,
    qty: 1,
    phase: "core",
    businessPurpose: "Rapid solo documentary filming of student builders, hackathons, and over-the-shoulder coding demonstrations.",
    growthObjective: "Distribution",
    redundancyOrSubstitutions: "Replaces heavy mirrorless camera bodies and separate bulky gimbal stabilizer; native vertical 9:16 crop.",
  },
  {
    id: "amaran-mc-pro",
    name: "Aputure Amaran MC Pro RGBWW Panel",
    category: "Lighting & Production Rigging",
    specs: "IP65 weather-proof, magnetic mount, full HSI",
    price: 149.0,
    qty: 1,
    phase: "core",
    businessPurpose: "Ultra-compact magnetic key light for dimly lit student computer labs, auditoriums, and evening hackathons.",
    growthObjective: "Interviews",
    redundancyOrSubstitutions: "Magnets mount directly to lab whiteboard frames or metal pillars without light stands.",
  },
  {
    id: "smallrig-tripod",
    name: "SmallRig Carbon Travel Tripod",
    category: "Lighting & Production Rigging",
    specs: "Carbon fiber legs, 360° fluid ball head, 1.3kg",
    price: 129.0,
    qty: 1,
    phase: "core",
    businessPurpose: "Locked-off over-the-shoulder coding screen recordings and hands-free studio interview setups.",
    growthObjective: "Product Education",
    redundancyOrSubstitutions: "Substitutable with standard aluminum tripod if baggage weight allows, but carbon fiber survives daily transit.",
  },
  {
    id: "sandisk-ssd",
    name: "SanDisk 2TB Extreme PRO Portable SSD",
    category: "High-Speed Storage & Power",
    specs: "2000 MB/s NVMe, IP65 aluminum chassis",
    price: 199.0,
    qty: 1,
    phase: "core",
    businessPurpose: "Instant on-set offloading and scratch editing disk for multi-camera 4K Pro-Res/D-Log footage.",
    growthObjective: "Distribution",
    redundancyOrSubstitutions: "Can substitute standard 1050 MB/s drive if needed; Extreme PRO prevents export throttle bottlenecks.",
  },
  {
    id: "anker-737",
    name: "Anker 737 Power Bank (PowerCore 24K)",
    category: "High-Speed Storage & Power",
    specs: "24,000mAh, 140W bi-directional fast charging",
    price: 119.0,
    qty: 1,
    phase: "core",
    businessPurpose: "Continuous power for phone, Pocket 3, DJI transmitters, and laptop during 24-hour campus hackathon marathons.",
    growthObjective: "Voice Sprints",
    redundancyOrSubstitutions: "Powers both laptop and video gear simultaneously in venues with overcrowded wall sockets.",
  },
  {
    id: "lexar-sd-cards",
    name: "2× Lexar 256GB Professional microSDXC",
    category: "High-Speed Storage & Power",
    specs: "160 MB/s read, V30 rating for 4K recording",
    price: 28.0,
    qty: 2,
    phase: "core",
    businessPurpose: "Dual high-speed media cards ensuring unstopped rolling and instant swap-out during all-day field shoots.",
    growthObjective: "Distribution",
    redundancyOrSubstitutions: "Essential redundancy: primary card stays in Osmo Pocket 3, secondary card backs up audio/B-roll.",
  },
  {
    id: "activation-kits",
    name: "Campus Voice-Sprint Activation Kits",
    category: "Campus Activations & Field Testing",
    specs: "Challenge prompt decks, voice sprint cheatsheets, stickers",
    price: 250.0,
    qty: 1,
    phase: "core",
    businessPurpose: "Tangible friction-reducing physical kits for 3+ on-campus builder voice challenges and student onboarding.",
    growthObjective: "Acquisition",
    redundancyOrSubstitutions: "Direct activation spend: converts passive spectators into active Wispr Flow users on the spot.",
  },
  {
    id: "descript-license",
    name: "Descript Creator License (1 Year)",
    category: "Production & Distribution Software",
    specs: "AI text-based voice/video editing, studio sound denoise",
    price: 144.0,
    qty: 1,
    phase: "core",
    businessPurpose: "Fast-turnaround text-driven transcript editing to publish 24-36 short-form clips within 24 hours of shoots.",
    growthObjective: "Distribution",
    redundancyOrSubstitutions: "Automated filler word removal and sound cleanup cuts post-production cycle by ~60%.",
  },
  {
    id: "riverside-license",
    name: "Riverside.fm Standard (1 Year)",
    category: "Production & Distribution Software",
    specs: "Separate uncompressed 4K video & 48kHz audio tracks",
    price: 186.0,
    qty: 1,
    phase: "core",
    businessPurpose: "High-fidelity remote founder and AI researcher interviews with zero internet compression degradation.",
    growthObjective: "Interviews",
    redundancyOrSubstitutions: "Essential for interviewing remote Bengaluru, Delhi, and global AI leaders who cannot meet in Pune.",
  },

  // CONDITIONAL UPGRADES ($471.00)
  {
    id: "zhiyun-smooth-5s",
    name: "Zhiyun Smooth 5S AI Pro Gimbal",
    category: "Portable Video & Stabilization",
    specs: "Magnetic AI visual tracker, built-in 650-lux fill light",
    price: 199.0,
    qty: 1,
    phase: "conditional",
    businessPurpose: "Conditional upgrade: secondary phone tracking stabilizer when running dual-camera multi-angle setups.",
    growthObjective: "Distribution",
    redundancyOrSubstitutions: "Optional: can be deferred if Pocket 3 covers single-operator needs. Recommended for 2-person shoots.",
  },
  {
    id: "ulanzi-vl110",
    name: "Ulanzi VL110 Magnetic RGB Tube Wand",
    category: "Lighting & Production Rigging",
    specs: "Handheld RGB wand, 2500K-9000K, 2600mAh battery",
    price: 45.0,
    qty: 1,
    phase: "conditional",
    businessPurpose: "Conditional upgrade: colored rim lighting to separate subjects from dark hackathon backgrounds.",
    growthObjective: "Interviews",
    redundancyOrSubstitutions: "Optional aesthetic enhancement; Amaran MC Pro can act as key light first.",
  },
  {
    id: "smallrig-cage",
    name: "SmallRig Mobile Video Rig Cage",
    category: "Lighting & Production Rigging",
    specs: "Dual silicone handles, cold shoe mounts for mic + light",
    price: 49.0,
    qty: 1,
    phase: "conditional",
    businessPurpose: "Conditional upgrade: provides two-handed stability when shooting walk-and-talk phone footage in crowds.",
    growthObjective: "Voice Sprints",
    redundancyOrSubstitutions: "Can be substituted by mounting phone to tripod handle in Phase 1.",
  },
  {
    id: "rode-lav-go",
    name: "Rode Lavalier GO Lapel Mic",
    category: "Professional Audio Capture",
    specs: "Omnidirectional 4.5mm miniature capsule, Kevlar cable",
    price: 79.0,
    qty: 1,
    phase: "conditional",
    businessPurpose: "Conditional upgrade: ultra-discreet lapel profile when clipping a transmitter block looks intrusive on camera.",
    growthObjective: "Interviews",
    redundancyOrSubstitutions: "DJI Mic 2 transmitters can be clipped directly onto collars without this lavalier if required.",
  },
  {
    id: "soundcore-headphones",
    name: "Anker Soundcore Space One ANC",
    category: "Campus Activations & Field Testing",
    specs: "LDAC Hi-Res audio, 2X voice reduction ANC",
    price: 99.0,
    qty: 1,
    phase: "conditional",
    businessPurpose: "Conditional upgrade: clean closed-back audio monitoring during chaotic on-stage hackathon sound checks.",
    growthObjective: "Feedback & QA",
    redundancyOrSubstitutions: "Standard existing wired in-ear monitors can be used initially if conserving Phase 2 buffer.",
  },
];

export const CORE_BUDGET = BUDGET_ITEMS.filter((i) => i.phase === "core").reduce(
  (acc, item) => acc + item.price * item.qty,
  0
); // Exactly $2,529.00 USD

export const CONDITIONAL_BUDGET = BUDGET_ITEMS.filter((i) => i.phase === "conditional").reduce(
  (acc, item) => acc + item.price * item.qty,
  0
); // Exactly $471.00 USD

export const TOTAL_BUDGET = CORE_BUDGET + CONDITIONAL_BUDGET; // Exactly $3,000.00 USD

export interface ContentPillar {
  letter: "A" | "B" | "C" | "D" | "E";
  title: string;
  tagline: string;
  description: string;
  outputFormat: string;
  targetAudience: string;
  kpiTieIn: string;
}

export const CONTENT_PILLARS: ContentPillar[] = [
  {
    letter: "A",
    title: "VOICE TO BUILD",
    tagline: "Building production software at the speed of thought.",
    description:
      "Live demonstrations building complete web applications, database pipelines, and agent systems using spoken natural language via Wispr Flow coupled with Cursor, Claude Code, and GitHub Copilot. Proving voice input is 3-4x faster than mechanical typing for software architecture.",
    outputFormat: "Long-Form Deep Dives (12-18 min) + Fast Vertical Reels (45-60s)",
    targetAudience: "Engineers, Full-Stack Devs, AI Hackers",
    kpiTieIn: "Developer tool adoption, workflow replication, daily active minutes",
  },
  {
    letter: "B",
    title: "INDIA'S BUILDER STORIES",
    tagline: "Unfiltered conversations with the founders coding India's future.",
    description:
      "In-depth documentary interviews with collegiate founders, hackathon victors, open-source contributors, and emerging tech leaders across Pune, Bengaluru, and Mumbai. Examining their tech stacks, operational friction, and how voice-first thinking accelerates their shipping tempo.",
    outputFormat: "Sit-Down Studio / Remote Riverside Pods (25-40 min) + Highlight Shorts",
    targetAudience: "Early-Stage Founders, Product Thinkers, Tech Students",
    kpiTieIn: "Ecosystem trust, founder referrals, high-retention community engagement",
  },
  {
    letter: "C",
    title: "VOICE SPRINT",
    tagline: "High-intensity collegiate voice-first build challenges.",
    description:
      "Hands-on hackathon speed runs and campus breakout sprints where developers ditch their physical keyboards to spec, architect, and debug software exclusively using voice. Documenting the authentic learning curve, sudden 'aha!' moments, and breakthrough speeds.",
    outputFormat: "Energetic Hackathon Recaps (8-12 min) + Viral Reaction Shorts",
    targetAudience: "College CS Cohorts, Hackathon Participants, Campus Clubs",
    kpiTieIn: "Direct on-campus activations, referral code distribution, brand recall",
  },
  {
    letter: "D",
    title: "FLOW IN REAL LIFE",
    tagline: "Voice-driven everyday productivity in messy environments.",
    description:
      "Field tests showcasing Wispr Flow beyond clean code terminals: drafting founder investor updates in noisy Pune cafes, dictating complex legal/academic research summaries while walking campus corridors, and executing multi-step voice workflows on low-friction setups.",
    outputFormat: "Short-Form Vertical Shorts / Reels (30-60s) + LinkedIn Carousels",
    targetAudience: "Founders, Content Creators, Researchers, Knowledge Workers",
    kpiTieIn: "Organic viral reach, broad non-coding sign-ups, feature discovery",
  },
  {
    letter: "E",
    title: "COMMUNITY & DISTRIBUTION",
    tagline: "Uniting grassroot builder circles into a permanent voice wave.",
    description:
      "Strategic cross-pollination across Google Developer Groups (GDG), collegiate AI clubs, hackerhouses (Forge Goa, etc.), and indie tech creator networks. Transforming passive social viewers into an active cohort of voice-first power users.",
    outputFormat: "Workshops, Keynote Talks, Cohort Community Challenges, Monthly Reports",
    targetAudience: "GDG Organizers, Student Club Leads, Startup Hub Directors",
    kpiTieIn: "Campus ambassador networks, organic grassroots word-of-mouth loops",
  },
];

export interface ExecutionMilestone {
  month: string;
  focus: string;
  deliverables: string[];
  kpis: string[];
}

export const EXECUTION_ROADMAP: ExecutionMilestone[] = [
  {
    month: "Month 1 (Days 1–30)",
    focus: "Foundation, Benchmark Sprints & Initial Pipeline",
    deliverables: [
      "2 Long-Form 'Voice to Build' deep-dives (Wispr Flow + Cursor/Claude setup & architecture)",
      "8-12 High-density vertical shorts (speed comparisons, prompt techniques)",
      "4 Wispr Flow workflow demonstrations (PR reviews, spec drafting, bug logs)",
      "1 In-depth founder interview (collegiate AI builder journey)",
      "1 On-campus pilot Voice Sprint workshop at ADYPU/Pune campus circle",
      "Month 1 Growth & Product Feedback Report with telemetry & friction points",
    ],
    kpis: [
      "Target: 250+ Qualified Wispr Flow Sign-ups",
      "Target: >45% Video Retention on Long-Form; 100k+ aggregate impressions",
      "Initial 20+ item UX feedback and local pronunciation catalog submitted to Wispr",
    ],
  },
  {
    month: "Month 2 (Days 31–60)",
    focus: "Scale, Multi-Campus Activations & Founder Series",
    deliverables: [
      "2 Long-Form Videos (Hackathon buildathon recap + Cross-platform voice stack)",
      "10-12 Vertical reels (real-life cafe dictation, bilingual vocabulary handling)",
      "4 Wispr Flow workflow demonstrations (academic thesis synthesis, schema design)",
      "2 Founder/Tech Leader interviews (covering AI tooling & velocity)",
      "1 Multi-college Voice Sprint challenge with custom prompt kits",
      "Month 2 Comprehensive Retention, Referral & Friction Analysis Report",
    ],
    kpis: [
      "Target: 500+ Cumulative Qualified Activations",
      "Target: 25%+ 14-day user dictation retention rate among onboarded students",
      "Cost per qualified activation tracked against initial $3,000 infrastructure",
    ],
  },
  {
    month: "Month 3 (Days 61–90)",
    focus: "Ecosystem Synthesis, Hackathon Integrations & Playbook",
    deliverables: [
      "2 Long-Form Videos (The 90-Day Voice-Only Build Experiment + Documentary)",
      "10-12 Vertical shorts (rapid micro-tips, high-impact founder quotes)",
      "4 Advanced workflow demonstrations (multi-agent orchestration via voice)",
      "2-3 Builder interviews (hackathon winners and regional dev leads)",
      "1 Flagship Hackathon Voice Sprint activation (during major regional hackathon)",
      "Month 3 Final India Growth Engine Playbook & Executive Expansion Dossier",
    ],
    kpis: [
      "Target: 1,000+ Cumulative Qualified Activations",
      "Target: ₹0 marginal equipment cost per future video produced",
      "Proven blueprint for scaling Wispr Flow campus ambassador teams across India",
    ],
  },
];
