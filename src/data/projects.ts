export interface ProjectArticle {
  title: string;
  platform: "Dev.to" | "LinkedIn" | "GitHub" | "Documentation";
  url: string;
  shortUrl?: string;
  note?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  badge: string;
  url: string | null;
  githubUrl?: string;
  projectType: "Flagship Product" | "Founder Exploration" | "Sprint Project" | "Team Project" | "Interactive Concept";
  status: "Live Production" | "Live Pilot" | "Live Deployment" | "Interactive Demo" | "Active Workspace System";
  confidenceLevel: "Verified Direct Source" | "Published Article" | "Reported Sprint Metric" | "Roadmap / Concept";
  image: string;
  palette: {
    bg: string;
    text: string;
    accent: string;
    border: string;
  };
  overview: string;
  problem: string;
  solution: string;
  roleAndContribution: string;
  keyFeatures: string[];
  techStack: string[];
  designDecisions: string;
  engineeringChallenges: string;
  lessonsLearned: string;
  statusNotes: string;
  articles?: ProjectArticle[];
  demonstratedVsRoadmap?: {
    demonstrated: string[];
    roadmap: string[];
  };
  founderStory?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "krishisetu",
    title: "KrishiSetu",
    tagline: "Connected AI Agricultural Lifecycle Operating System",
    category: "AgriTech · Founder-Led Exploration · AI AgOS",
    badge: "Flagship Founder Journey",
    url: "https://krishi-setu-ivory.vercel.app/",
    projectType: "Founder Exploration",
    status: "Live Deployment",
    confidenceLevel: "Verified Direct Source",
    image: "/images/projects/krishisetu.png",
    palette: {
      bg: "#1B4332",
      text: "#FFFFFF",
      accent: "#D4A373",
      border: "#2D6A4F",
    },
    overview:
      "KrishiSetu is Divyanshu's foundational startup journey—an end-to-end agricultural platform designed to empower Indian farmers with direct APMC mandi intelligence, AI crop advisories, soil micro-climate insights, and dynamic marketplace bidding.",
    problem:
      "Indian agriculture is burdened by multi-layer middlemen markups, opaque APMC mandi price discovery, fragmented cold-storage logistics, and a total absence of unified crop lifecycle data for smallholder farmers.",
    solution:
      "A comprehensive agricultural operating system that bridges farmer onboarding, field telemetry, AI crop health diagnostics, dynamic produce bidding, and future agri-credit scoring.",
    roleAndContribution:
      "Founder, System Architect & Product Designer. Conducted farmer journey mapping, designed the complete multilingual interface, APMC price ticker, and farm intelligence dashboard.",
    keyFeatures: [
      "Live APMC mandi market ticker and commodity price intelligence",
      "AI crop health advisory and vernacular pest diagnostic assistant",
      "Farm profile, soil micro-climate indicators, and yield prediction telemetry",
      "Direct farmer-to-buyer produce discovery and dynamic bidding concepts",
      "Cold-storage reservation and agricultural equipment rental workflows",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AgriData APIs", "Lucide Icons", "Vercel"],
    designDecisions:
      "Deep forest green (#1B4332) grounded with rich agricultural earth tones (#D4A373), high-contrast data cards, and bilingual vernacular typography tailored for rural readability.",
    engineeringChallenges:
      "Modeling the complex agricultural calendar and ensuring data density remains legible and responsive on low-cost Android mobile devices in rural areas.",
    lessonsLearned:
      "Technology adoption in agriculture requires radical trust and simplicity; solving market discovery without solving post-harvest storage and transport leaves the farmer vulnerable.",
    statusNotes:
      "Live deployment features complete core UI, APMC price ticker, farm dashboard, and advisory workflows. Marketplace transactions and credit underwriting remain in roadmap.",
    founderStory:
      "KrishiSetu is where my journey as a serious product builder began. Spending weeks understanding the real lived friction of Indian farmers taught me that software alone is not enough—you must understand distribution, physical logistics, and the human trust barrier before writing a single line of code.",
    demonstratedVsRoadmap: {
      demonstrated: [
        "Farmer onboarding & farm record management",
        "APMC mandi commodity pricing and trend interface",
        "Soil micro-climate and weather intelligence widgets",
        "AI crop advisory interface and disease detection flow",
        "Produce listing and initial bid exploration screens",
      ],
      roadmap: [
        "Live APMC e-Nam dynamic auction bidding gateway",
        "Cold-storage network integration and real-time bay booking",
        "Agri-credit scoring engine powered by crop cycle history",
        "IoT field sensor telemetry and drone imagery ingestion",
        "Carbon-farming incentive tracking and green credits",
      ],
    },
    articles: [
      {
        title: "Building KrishiSetu: The Agricultural Realities That Shaped My Founder Mindset",
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/divyanshu-sinha-46074126b/",
        note: "Reflection on building for Bharat, understanding supply chain intermediaries, and product empathy.",
      },
    ],
  },
  {
    id: "stratify",
    title: "Stratify",
    tagline: "The Operating System for the Startup Economy",
    category: "Startup Intelligence · Founder OS",
    badge: "Startup Ecosystem OS",
    url: "https://stratify-murex.vercel.app/",
    projectType: "Interactive Concept",
    status: "Interactive Demo",
    confidenceLevel: "Verified Direct Source",
    image: "/images/projects/stratify.jpg",
    palette: {
      bg: "#F8F7F2",
      text: "#0A0E1A",
      accent: "#C6F24F",
      border: "#0A0E1A",
    },
    overview:
      "Stratify connects founders, investors, angels, accelerators, and startup institutions into a living graph to drive real-time AI intelligence, capital flow, and verified proof of work.",
    problem:
      "Startup ecosystems are notoriously fragmented across disjointed spreadsheets, closed investor networks, and opaque dealflow channels, preventing early-stage builders from discovering the right capital, collaborators, and mentors.",
    solution:
      "An interactive network graph architecture that models entity relationships, syndicates, and proof-of-work traction into a unified intelligence operating system.",
    roleAndContribution:
      "Product Strategy, System Architecture & Frontend Experience Design. Designed the living graph visualizer, founder/investor role switcher, and core UI.",
    keyFeatures: [
      "Interactive 2D force-directed startup graph linking founders, angels, and accelerators",
      "Dynamic Role Matrix switcher tailored for Founders vs. Investors",
      "Real-time synchronized ecosystem telemetry and live network status",
      "Curated walkthrough booking flow and verified founder credentials",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Canvas / Graph Visualization", "Vercel"],
    designDecisions:
      "Editorial cream canvas (#F8F7F2) paired with high-contrast obsidian typography and electric lime (#C6F24F) accents to evoke financial authority with builder vigor.",
    engineeringChallenges:
      "Rendering interconnected ecosystem nodes smoothly while preserving responsive mobile readability and clean layout bounds.",
    lessonsLearned:
      "Network visualizations become overwhelming without progressive disclosure; grouping entities by archetype unlocks intuitive exploration.",
    statusNotes: "Live interactive concept deployment deployed on Vercel.",
    founderStory:
      "KrishiSetu was the first startup idea I seriously worked on. Working through founder questions—whether the problem is right, who to build with, and how to navigate the startup journey—helped surface the broader ecosystem problem Stratify explores.",
    articles: [
      {
        title: "Stratify: The Founder Questions That Led to an Ecosystem Operating System",
        platform: "LinkedIn",
        url: "https://www.linkedin.com/posts/divyanshu-sinha-46074126b_stratify-buildinpublic-startups-ugcPost-7488096918762569728-X1av/",
        shortUrl: "https://lnkd.in/p/duupiZnH",
        note: "How building KrishiSetu revealed the systemic friction in early-stage founder ecosystems.",
      },
    ],
  },
  {
    id: "notesgpt",
    title: "NotesGPT",
    tagline: "An Offline-Capable AI Study Assistant with RAG, Local LLMs & WebGPU",
    category: "EdTech · RAG · Local AI · Multimodal Understanding",
    badge: "First-Class Flagship Build",
    url: null,
    githubUrl: "https://github.com/di0206-innovator/Notes-GPT",
    projectType: "Flagship Product",
    status: "Active Workspace System",
    confidenceLevel: "Published Article",
    image: "/images/projects/notesgpt.png",
    palette: {
      bg: "#FFFFFF",
      text: "#0A0E1A",
      accent: "#1434FF",
      border: "#0A0E1A",
    },
    overview:
      "NotesGPT compiles textbooks, PDFs, lecture slides, and handwritten notes into source-grounded revision kits, active-recall flashcards, question banks, and interactive exams—with dual cloud and local offline execution modes.",
    problem:
      "During exam season in an engineering hostel PG with spotty, unreliable Wi-Fi, students must navigate dense textbooks, slide decks, and handwritten notes. Generic cloud LLMs hallucinate, lack source citations, and fail completely when offline.",
    solution:
      "A complete multimodal RAG pipeline that extracts and OCRs documents, chunks content, builds embeddings, stores them in local/cloud vector indices, and supports hybrid inference across cloud (Gemini 2.0 Flash) and local hardware (Ollama, in-browser WebLLM via WebGPU, and experimental Chrome window.ai).",
    roleAndContribution:
      "Sole Architecture, Pipeline Engineering & Frontend Implementation. Built the RAG ingestion pipeline, local vector indexing, dual-mode inference switchers, and study kit generator.",
    keyFeatures: [
      "Multimodal document ingestion: PDF.js, pdf-parse, OfficeParser, Tesseract.js OCR, and Gemini Vision",
      "Two-stage vector retrieval: similarity calculated over embeddings/metadata first before fetching heavy text chunks",
      "Tri-mode inference flexibility: Gemini 2.0 Flash (cloud), Ollama (deepseek-r1:8b, gemma2:2b local), WebLLM (in-browser WebGPU)",
      "Single-request study kit generation: reduced generation latency from ~60s down to <15s with 1 structured call (project benchmark)",
      "Strict citation grounding: inline citations link directly back to specific document segments and page numbers",
    ],
    techStack: [
      "Next.js 16 App Router",
      "React 19",
      "Tailwind CSS 4",
      "Gemini 2.0 Flash",
      "Vercel AI SDK",
      "Ollama",
      "WebLLM (WebGPU)",
      "Firestore Vector Collections",
      "IndexedDB",
      "TF-IDF Local Index",
      "PDF.js",
      "Tesseract.js",
      "Firebase Auth",
    ],
    designDecisions:
      "Monochrome high-contrast technical terminal aesthetic with tactile borders, scanlines, and an interactive tri-view workstation interface for landing, study station, and runtime settings.",
    engineeringChallenges:
      "Balancing on-device memory footprints when running local models, optimizing OCR throughput for degraded handwritten notes, and restructuring multi-call prompt chains into a single deterministic structured schema.",
    lessonsLearned:
      "Local AI engineering is less about model selection and more about memory management, vector retrieval latency, and graceful fallbacks when client hardware lacks dedicated GPUs.",
    statusNotes:
      "Public GitHub repository available. Deployed web demo status subject to ongoing model runtime updates.",
    articles: [
      {
        title: "Building NotesGPT: An Offline-Capable AI Study Assistant with RAG, Local LLMs, and WebGPU",
        platform: "Dev.to",
        url: "https://dev.to/divyanshu_sinha_72e579e28/building-notesgpt-an-offline-capable-ai-study-assistant-with-rag-local-llms-and-webgpu-3l22",
        note: "Complete technical architecture deep-dive covering RAG pipeline, WebGPU compilation, and latency reduction.",
      },
      {
        title: "NotesGPT Build Story: Why I Built an Offline Study Companion",
        platform: "LinkedIn",
        url: "https://www.linkedin.com/posts/divyanshu-sinha-46074126b_ai-rag-generativeai-ugcPost-7470318914133028864-vMpF/",
        shortUrl: "https://lnkd.in/p/dUJPb2AG",
        note: "Reflection on solving student exam friction in hostel environments.",
      },
      {
        title: "Notes-GPT Source Repository",
        platform: "GitHub",
        url: "https://github.com/di0206-innovator/Notes-GPT",
        note: "Full codebase with Next.js 16, Vercel AI SDK, Ollama, and WebLLM configs.",
      },
    ],
  },
  {
    id: "healthify",
    title: "Healthify",
    tagline: "AI-Powered Food Safety Scanner & Ingredient Intelligence",
    category: "Consumer AI · Food & Public Health",
    badge: "Consumer Health AI",
    url: "https://healthify-lyart.vercel.app/",
    githubUrl: "https://github.com/di0206-innovator/Healthify",
    projectType: "Interactive Concept",
    status: "Live Deployment",
    confidenceLevel: "Verified Direct Source",
    image: "/images/projects/healthify.png",
    palette: {
      bg: "#FFFFFF",
      text: "#0A0E1A",
      accent: "#FFCC00",
      border: "#0A0E1A",
    },
    overview:
      "Healthify helps consumers understand what is inside the food they eat through instant ingredient scanning, OCR label parsing, additive hazard analysis, and India FSSAI regulatory context.",
    problem:
      "Nutritional labels are intentionally obfuscated with complex chemical names, misleading front-of-pack marketing claims, and hidden ultra-processed additives that the average shopper cannot decipher in grocery aisles.",
    solution:
      "A fast, camera-first food safety scanner that ingests ingredient lists via OCR or text, cross-references additives with regulatory risk indices, and returns plain-language safety scores.",
    roleAndContribution:
      "Product Strategy, UX Architecture & Agentic Workflow Design. Built the ingredient parsing pipeline, FSSAI regulatory rules, and tactile neo-brutalist mobile interface.",
    keyFeatures: [
      "One-click ingredient list scanning with camera photo upload and text ingestion",
      "India (FSSAI) regulatory context selector and additive risk classification",
      "Plain-language health-check verdicts identifying preservatives, emulsifiers, and artificial dyes",
      "Clear informational disclaimer distinguishing safety guidance from medical advice",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vision OCR", "FSSAI Guidelines", "Vercel"],
    designDecisions:
      "Tactile neo-brutalist visual system featuring dotted paper backgrounds, high-contrast black borders, bright warning yellow (#FFCC00), and crisp sans typography.",
    engineeringChallenges:
      "Extracting text reliably from curved, glossy, or wrinkled food packaging and handling complex chemical synonym mappings.",
    lessonsLearned:
      "Consumer trust hinges on transparency: highlighting specific chemical codes (e.g. E-numbers) alongside plain-English explanations creates instant user conviction.",
    statusNotes:
      "Live deployment on Vercel. Designed as an informational consumer food intelligence tool; not a substitute for clinical medical advice.",
    articles: [
      {
        title: "Healthify: Experimenting with Agentic AI to Understand What Goes into Our Food",
        platform: "LinkedIn",
        url: "https://www.linkedin.com/posts/divyanshu-sinha-46074126b_ai-agenticai-buildinpublic-ugcPost-7466022185028050945-KSzM/",
        shortUrl: "https://lnkd.in/p/dKeuAV9B",
        note: "How building and failing with early agentic prototypes led to a focused consumer food safety utility.",
      },
    ],
  },
  {
    id: "climbit",
    title: "Climbit Decision Engine",
    tagline: "Deterministic Carbon Calculations + AI Action Layer",
    category: "ClimateTech · Decision Intelligence · PromptWars Sprint",
    badge: "12-Hour Sprint Build",
    url: null,
    githubUrl: "https://github.com/di0206-innovator/Climbit",
    projectType: "Sprint Project",
    status: "Interactive Demo",
    confidenceLevel: "Reported Sprint Metric",
    image: "/images/projects/climbit.png",
    palette: {
      bg: "#064E3B",
      text: "#FFFFFF",
      accent: "#34D399",
      border: "#047857",
    },
    overview:
      "Built under extreme pressure in a 12-hour PromptWars challenge sprint, Climbit shifts climate software from passive carbon tracking to an actionable, deterministic decision engine that identifies the highest-impact practical next action.",
    problem:
      "Existing carbon footprint apps stop at guilt-inducing footprint tallies without providing practical, financially viable paths to reduction. Meanwhile, relying on probabilistic LLMs for carbon math leads to dangerous numerical hallucinations.",
    solution:
      "A strict separation of concerns: deterministic TypeScript calculation engines handle carbon physics and ROI ranking, while Gemini 2.0 provides contextual personalization, negotiation, and scenario modeling validated via Zod schemas.",
    roleAndContribution:
      "Sole Architecture, Engine Engineering & UI Implementation. Built the deterministic carbon math engine, Zod-validated AI routing via Next.js Server Actions, and PWA integration.",
    keyFeatures: [
      "Strict separation of concerns: deterministic math engine handles carbon calculations; LLM handles qualitative negotiation",
      "Strict Zod schema validation over all LLM responses, eliminating numerical and structural hallucinations",
      "Next.js Server Actions routing ensuring AI operations execute securely server-side with rate limiting",
      "Comprehensive test suite: 34 passing unit tests covering mathematical edge cases and carbon coefficients",
      "PromptWars sprint execution: moved from rank 28,897 to rank 449 on the competition leaderboard in <12 hours",
    ],
    techStack: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API",
      "Zod Validation",
      "Next.js Server Actions",
      "Jest / Testing Library",
      "PWA",
    ],
    designDecisions:
      "Industrial emerald green (#064E3B) and electric mint (#34D399) palette with terminal-grade telemetry readouts, emphasizing mathematical precision over decorative sustainability cliches.",
    engineeringChallenges:
      "Shipping a complete verified decision engine, 34 automated unit tests, and responsive PWA packaging in under 9 hours of active sprint coding time.",
    lessonsLearned:
      "Never let probabilistic AI handle arithmetic. Keep your business logic deterministic and use AI strictly as an empathetic translation and reasoning layer.",
    statusNotes:
      "Public GitHub repository. Ranking improvement (28,897 to 449) verified from reported PromptWars Challenge 3 leaderboard submission.",
    articles: [
      {
        title: "Climbit: From a Late PromptWars Idea to a Climate Decision Engine in <12 Hours",
        platform: "LinkedIn",
        url: "https://www.linkedin.com/posts/divyanshu-sinha-46074126b_promptwars-buildinpublic-aiengineering-ugcPost-7474685219451637760-eUaQ/",
        shortUrl: "https://lnkd.in/p/daV8a-y4",
        note: "Deconstructing the rapid sprint, separation of concerns, and competitive leaderboard ascent.",
      },
      {
        title: "Climbit GitHub Repository",
        platform: "GitHub",
        url: "https://github.com/di0206-innovator/Climbit",
        note: "Open-source codebase with 34 tests, deterministic math engines, and Zod AI schemas.",
      },
    ],
  },
  {
    id: "nyaysaathi",
    title: "NyaySaathi",
    tagline: "Sovereign Legal AI & Clause Redlining Platform",
    category: "Legal AI · Contract Intelligence",
    badge: "Sovereign Legal AI",
    url: "https://nyaysaathi-6qcz.vercel.app/",
    githubUrl: "https://github.com/di0206-innovator/nyaysaathi",
    projectType: "Flagship Product",
    status: "Live Deployment",
    confidenceLevel: "Verified Direct Source",
    image: "/images/projects/nyaysaathi.jpg",
    palette: {
      bg: "#0A0E1A",
      text: "#FFFFFF",
      accent: "#E63946",
      border: "#374151",
    },
    overview:
      "NyaySaathi is a legal intelligence platform designed for Indian consumer disputes, commercial lease redlining, and pre-litigation dossier generation with strict statutory grounding in Bharatiya Nyaya Sanhita (BNS) and the Consumer Protection Act (CPA 2019).",
    problem:
      "Indian contract enforcement and dispute resolution suffer from multi-year backlogs, inaccessible legalese, and unilateral lease revisions that exploit tenants, gig workers, and MSMEs without legal recourse.",
    solution:
      "A sovereign legal AI pipeline that extracts agreement clauses with line-level provenance, performs semantic diffs across revision versions, scores risk escalation, and generates ready-to-file legal notices.",
    roleAndContribution:
      "Product Strategy, Legal Prompt Engineering & Frontend Architecture. Designed the dual-pane clause comparison studio, risk delta scoring, and notice drafting workflows.",
    keyFeatures: [
      "Dual-pane contract redlining comparing original vs. revised clauses with unilateral risk delta scoring",
      "Statutory grounding in Bharatiya Nyaya Sanhita (BNS) and Consumer Protection Act (CPA 2019)",
      "Strict line-by-line provenance: every risk flag cites exact line numbers and verified text excerpts",
      "Pre-litigation matter dossier generator turning landlord/vendor breaches into enforceable legal notices",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Semantic Diff Engines", "BNS Legal Corpora", "Vercel"],
    designDecisions:
      "Obsidian black (#0A0E1A) canvas with high-contrast crimson accents (#E63946), monospace clause metadata, and side-by-side revision typography.",
    engineeringChallenges:
      "Preventing model hallucinations in high-stakes legal workflows by forcing strict token-anchored citations and disallowing non-verbatim extractions.",
    lessonsLearned:
      "In legal tech, speed is secondary to provenance: users and advocates will only trust AI if every flagged phrase points directly to a highlighted line in the source PDF.",
    statusNotes:
      "Live deployment on Vercel. Positioned as legal workflow intelligence; not a substitute for a licensed advocate.",
    articles: [
      {
        title: "NyaySaathi: Sovereign Legal AI and Clause Redlining for Bharat",
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/divyanshu-sinha-46074126b/",
        note: "Why India needs specialized contract intelligence grounded in modern statutory codes.",
      },
    ],
  },
  {
    id: "merchantpulse",
    title: "MerchantPulse",
    tagline: "Autonomous Payment Recovery for Razorpay",
    category: "FinTech · AI Payment Orchestration",
    badge: "FinTech Recovery Engine",
    url: "https://merchantpulse-psi.vercel.app/",
    githubUrl: "https://github.com/di0206-innovator/Merchant-Pulse",
    projectType: "Flagship Product",
    status: "Live Deployment",
    confidenceLevel: "Verified Direct Source",
    image: "/images/projects/merchantpulse.png",
    palette: {
      bg: "#0D1B2A",
      text: "#FFFFFF",
      accent: "#F5B700",
      border: "#1E3A8A",
    },
    overview:
      "MerchantPulse ingests failed Razorpay payment webhooks across UPI, card, and net-banking transactions, computes expected recovery value at paise-level precision, and triggers idempotent, policy-gated recovery flows.",
    problem:
      "Indian digital merchants lose millions in revenue every month due to transient payment failures, UPI timeouts, and network throttling, without an automated system to distinguish salvageable checkouts from abandoned carts.",
    solution:
      "An 'Observe → Decide → Act → Reconcile' orchestration pipeline that computes real-time expected value, assesses failure codes, and dispatches dynamic payment links with idempotent safeguards.",
    roleAndContribution:
      "System Architecture, State Machine Design & Frontend Engineering. Built the failure webhook ingestion state machine, EV calculation models, and operational merchant dashboard.",
    keyFeatures: [
      "Failed transaction webhook ingestion with signature verification and replay attack deduplication",
      "Paise-level Expected Value (EV) calculation balancing merchant recovery upside against communication costs",
      "Dynamic idempotent payment-link dispatch via WhatsApp and SMS with strict frequency capping",
      "Human-in-the-loop escalation gate for enterprise checkouts exceeding threshold ticket sizes",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Razorpay Webhooks", "State Machines", "Vercel"],
    designDecisions:
      "Deep navy cockpit (#0D1B2A) with amber telemetry (#F5B700), real-time status pills, and dense monospace financial tables.",
    engineeringChallenges:
      "Ensuring absolute idempotency across webhook retry storms to prevent duplicate payment links from reaching end-customers.",
    lessonsLearned:
      "In fintech systems, recovery communication must feel like service, not spam: contextual messaging based on exact failure codes yields the highest checkout completion.",
    statusNotes:
      "Live deployment on Vercel with sandbox webhook simulation. Metric lifts are benchmark demonstration values.",
    articles: [
      {
        title: "MerchantPulse: Designing Autonomous Payment Recovery for Indian Checkouts",
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/divyanshu-sinha-46074126b/",
        note: "State machine architecture and expected value calculations for high-volume UPI pipelines.",
      },
    ],
  },
  {
    id: "forgegoa",
    title: "Forge Goa",
    tagline: "HackerHouse Goa 2026 Builder Identity Platform",
    category: "Community Experience · Builder Identity",
    badge: "HackerHouse Goa '26",
    url: "https://hhgoa26-eta.vercel.app/",
    githubUrl: "https://github.com/di0206-innovator/hhgoa26",
    projectType: "Interactive Concept",
    status: "Live Deployment",
    confidenceLevel: "Verified Direct Source",
    image: "/images/projects/forgegoa.jpg",
    palette: {
      bg: "#166534",
      text: "#FFFFFF",
      accent: "#FDE047",
      border: "#000000",
    },
    overview:
      "Forge Goa was created as the official project submission for HackerHouse Goa 2026—an interactive web product that translates hackerhouse culture into builder archetypes, squad formation mechanics, and verified builder passports.",
    problem:
      "Traditional hackathon registration pages are dry form fields that fail to capture squad chemistry, creative builder archetypes, or the cultural electricity of in-person hacker residencies.",
    solution:
      "A high-energy, India-inspired builder identity platform where engineers forge unique builder passports, discover complementary squad partners, and signal their hackathon superpowers.",
    roleAndContribution:
      "Product Concept, Creative Direction & Frontend Development. Conceptualized builder archetypes, squad matchmaking logic, and retro tropical visual design.",
    keyFeatures: [
      "Interactive Forge Passport creator generating personalized builder identity cards",
      "Builder Archetype Quiz categorizing hackers across Hacker, Hustler, Designer, and Synthesizer profiles",
      "4-Person Squad Engine helping solo engineers match into balanced, multidisciplinary teams",
      "Vibrant Goan coastal graphics blending retro brutalism with modern Web animations",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas Graphics", "Framer Motion", "Vercel"],
    designDecisions:
      "Lush jungle green (#166534), radiant yellow (#FDE047), hot pink accents, and Hindi typographic accents ('गोवा') celebrating Indian hacker enthusiasm.",
    engineeringChallenges:
      "Creating dynamic passport generation with smooth client-side canvas rendering across diverse mobile browsers without asset bloat.",
    lessonsLearned:
      "Community software must make the user feel seen: giving builders a distinctive badge of honor drives organic social sharing before an event even starts.",
    statusNotes:
      "Live deployment on Vercel. Submitted as an interactive concept for HackerHouse Goa 2026.",
    articles: [
      {
        title: "Forge Goa: Why Community Culture Must Precede Technical Execution",
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/divyanshu-sinha-46074126b/",
        note: "Designing squad formation mechanics and builder identity for in-person hacker residencies.",
      },
    ],
  },
  {
    id: "brainworks",
    title: "Brainworks — SIH 2026 Mining Safety",
    tagline: "Edge AI & Radar Safety in Zero-Visibility Mines",
    category: "Edge AI · Team Project · Smart India Hackathon 2026",
    badge: "SIH 2026 · 2nd Place",
    url: null,
    githubUrl: "https://github.com/manasir747/Brainworks",
    projectType: "Team Project",
    status: "Interactive Demo",
    confidenceLevel: "Published Article",
    image: "/images/projects/brainworks.png",
    palette: {
      bg: "#1E293B",
      text: "#FFFFFF",
      accent: "#F59E0B",
      border: "#334155",
    },
    overview:
      "Brainworks was engineered for the Smart India Hackathon 2026 (Problem Statement SIH26007)—a safety system designed to prevent heavy vehicle collisions in open-cast iron ore mines during dense fog, dust storms, and extreme zero-visibility conditions.",
    problem:
      "Open-cast mining operations frequently halt or suffer fatal dumper haulage collisions when heavy dust or dense winter fog blinds optical cameras and drivers, where standard computer vision fails completely.",
    solution:
      "A multi-sensor perception pipeline combining millimeter-wave radar telemetry with lightweight Edge AI / TinyML inference deployed directly on haul trucks, providing real-time proximity alerts and situational fleet tracking.",
    roleAndContribution:
      "Team Engineering & Operations Lead (with teammate Sahil Mane). Built edge communication interfaces and co-led internal hackathon operations, finishing 2nd place among 27 competing teams.",
    keyFeatures: [
      "Zero-visibility radar sensing: operates reliably in dense fog and dust where optical cameras are blinded",
      "Edge AI / TinyML inference running near-vehicle to deliver sub-50ms collision alerts without cloud latency",
      "Fleet telemetry mesh sharing haul truck proximity and velocity vectors across active pit corridors",
      "Smart India Hackathon 2026 (Problem SIH26007): finished 2nd place in the institutional internal round",
    ],
    techStack: [
      "Python",
      "TinyML / Edge AI",
      "Radar Sensor Interfaces",
      "Embedded C++",
      "FastAPI",
      "Tailwind CSS",
      "Git / GitHub",
    ],
    designDecisions:
      "Industrial safety cockpit aesthetic using high-visibility warning amber (#F59E0B), radar sweep grids, and high-contrast tactical telemetry readouts.",
    engineeringChallenges:
      "Processing noisy radar point clouds at low power on edge hardware while filtering out non-hazardous dust particles.",
    lessonsLearned:
      "Hardware-software edge engineering requires brutal real-world realism: a safety system that throws false alarms will quickly be disabled by drivers in the field.",
    statusNotes:
      "Team project co-engineered with Sahil Mane. 2nd place in SIH 2026 Internal Hackathon (Alta School of Technology) across 27 competing teams. Public repository available.",
    articles: [
      {
        title: "Running the SIH 2026 Internal Hackathon While Competing in It",
        platform: "LinkedIn",
        url: "https://lnkd.in/p/dYGmpf7M",
        note: "Leading event operations for 27 teams while taking our own mining safety project to second place.",
      },
      {
        title: "Brainworks SIH 2026 GitHub Repository",
        platform: "GitHub",
        url: "https://github.com/manasir747/Brainworks",
        note: "Public repository containing SIH26007 challenge source code.",
      },
    ],
  },
];
