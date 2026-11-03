export interface FieldNote {
  id: string;
  title: string;
  platform: "Dev.to" | "LinkedIn";
  url: string;
  shortUrl?: string;
  category: "Technical Deep-Dive" | "Founder Journey" | "Sprint Reflection" | "Event Operations" | "Product Philosophy";
  publishedDate?: string;
  readTime: string;
  excerpt: string;
  takeaways: string[];
  relatedProjectId?: string;
  accentColor: string;
}

export const FIELD_NOTES: FieldNote[] = [
  {
    id: "notesgpt-devto",
    title: "Building NotesGPT: An Offline-Capable AI Study Assistant with RAG, Local LLMs, and WebGPU",
    platform: "Dev.to",
    url: "https://dev.to/divyanshu_sinha_72e579e28/building-notesgpt-an-offline-capable-ai-study-assistant-with-rag-local-llms-and-webgpu-3l22",
    category: "Technical Deep-Dive",
    readTime: "7 min read",
    excerpt:
      "Exam season in an engineering hostel PG with spotty, unreliable Wi-Fi makes you realize cloud AI is fragile. NotesGPT was born from a simple need: how do we run source-grounded RAG locally on student laptops using WebLLM and Ollama, without hallucinations or cloud dependencies?",
    takeaways: [
      "Two-stage vector search: embeddings/metadata searched first before pulling heavy full-text chunks",
      "Single structured prompt optimization reduced generation time from ~60s down to <15s with 1 call",
      "In-browser WebLLM via WebGPU provides true zero-network inference with client-cached weights",
      "Strict citation grounding ensures answers quote verifiable paragraphs and textbook page numbers",
    ],
    relatedProjectId: "notesgpt",
    accentColor: "#1434FF",
  },
  {
    id: "stratify-founder-questions",
    title: "The Founder Questions That Led from KrishiSetu to Stratify",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/posts/divyanshu-sinha-46074126b_stratify-buildinpublic-startups-ugcPost-7488096918762569728-X1av/",
    shortUrl: "https://lnkd.in/p/duupiZnH",
    category: "Founder Journey",
    readTime: "4 min read",
    excerpt:
      "KrishiSetu was the first startup idea I seriously poured my nights into. But trying to build in isolation exposed how fragmented early-stage ecosystems really are. That friction became the catalyst for Stratify—mapping the startup economy as a living knowledge graph.",
    takeaways: [
      "Early-stage builders waste months navigating disconnected investor, accelerator, and grant databases",
      "Interactive graph models reveal syndicate clusters and proof-of-work relationships across institutions",
      "Product validation begins with mapping the human actors before building automated workflows",
    ],
    relatedProjectId: "stratify",
    accentColor: "#C6F24F",
  },
  {
    id: "healthify-agentic-food",
    title: "Healthify: Understanding What Goes into the Food We Eat",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/posts/divyanshu-sinha-46074126b_ai-agenticai-buildinpublic-ugcPost-7466022185028050945-KSzM/",
    shortUrl: "https://lnkd.in/p/dKeuAV9B",
    category: "Sprint Reflection",
    readTime: "4 min read",
    excerpt:
      "We consume dozens of ultra-processed ingredients every single day without knowing what they do to our bodies. Healthify is an experiment in agentic consumer AI—scanning ingredients against FSSAI databases to give real clarity in grocery aisles.",
    takeaways: [
      "Nutritional labels are designed to obfuscate additives with chemical aliases and hidden emulsifiers",
      "Agentic workflows must handle noisy, wrinkled OCR packaging scans with robust error fallbacks",
      "Consumer software must maintain strict informational boundaries without pretending to offer medical advice",
    ],
    relatedProjectId: "healthify",
    accentColor: "#FFCC00",
  },
  {
    id: "climbit-12hr-sprint",
    title: "Climbit: From a Late PromptWars Idea to a Climate Decision Engine in <12 Hours",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/posts/divyanshu-sinha-46074126b_promptwars-buildinpublic-aiengineering-ugcPost-7474685219451637760-eUaQ/",
    shortUrl: "https://lnkd.in/p/daV8a-y4",
    category: "Sprint Reflection",
    readTime: "5 min read",
    excerpt:
      "Starting PromptWars Challenge 3 with fewer than 12 hours remaining, building another passive footprint tracker felt pointless. We separated deterministic carbon physics from probabilistic LLM negotiation, strictly validated responses with Zod, and climbed 28,000+ ranks to #449 on the leaderboard.",
    takeaways: [
      "Separation of concerns: keep mathematical calculations deterministic in TypeScript; use AI for empathy and dialogue",
      "Strict Zod schema enforcement over LLM outputs eliminates numerical hallucinations",
      "High-tempo competitive hackathons are won through relentless prioritization, not sprawling scopes",
    ],
    relatedProjectId: "climbit",
    accentColor: "#34D399",
  },
  {
    id: "sih-2026-dual-execution",
    title: "Running the SIH 2026 Internal Hackathon While Competing in It",
    platform: "LinkedIn",
    url: "https://lnkd.in/p/dYGmpf7M",
    category: "Event Operations",
    readTime: "4 min read",
    excerpt:
      "Balancing the logistics of 27 hackathon teams, mentor tracks, and judging rounds while writing edge TinyML code for mine vehicle collision safety taught me one thing: extreme ownership means keeping the room running without dropping your own code quality.",
    takeaways: [
      "Simultaneous execution: running an institutional hackathon while pitching your own project requires radical clarity",
      "Mining vehicle safety in zero-visibility open-cast pits requires radar sensing where optical vision fails",
      "Team discipline with Sahil Mane secured a 2nd place finish among 27 competing builder teams",
    ],
    relatedProjectId: "brainworks",
    accentColor: "#F59E0B",
  },
  {
    id: "ai-builders-shift-reflection",
    title: "The AI Builder's Shift: From 'Can I build this?' to 'Should this exist?'",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/divyanshu-sinha-46074126b/",
    category: "Product Philosophy",
    readTime: "5 min read",
    excerpt:
      "In an era where AI can scaffold an entire full-stack app in five minutes, technical capability is no longer the bottleneck. The real discipline of modern engineering is product judgement—discovering whether a workflow actually earns a place in a user's daily life.",
    takeaways: [
      "Velocity without problem conviction produces polished software that nobody needs",
      "The best AI features are invisible: removing friction rather than forcing conversational interfaces",
      "True product execution happens at the intersection of technology, distribution, and human momentum",
    ],
    accentColor: "#E63946",
  },
  {
    id: "promptwars-alta-hosting",
    title: "PromptWars × ALTA: Hosting an 8-Hour AI Buildathon Under Pressure",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/divyanshu-sinha-46074126b/",
    category: "Event Operations",
    readTime: "4 min read",
    excerpt:
      "Putting 100+ student builders into a single room with live APIs, a ticking countdown, and instant judging criteria creates a unique energy. Watching junior engineers go from blank terminals to deployed prototypes in 5 hours is why community matters.",
    takeaways: [
      "Short build sprints (4–5 hours) force builders to kill feature creep and ship working demos",
      "Live pitching in front of peers builds communication grit that no classroom lecture can match",
      "Community infrastructure is built through shared deadlines and high-agency peer culture",
    ],
    accentColor: "#1434FF",
  },
];

