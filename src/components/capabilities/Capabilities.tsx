"use client";

import { useState } from "react";
import { 
  Code2, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Video, 
  Compass, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface Capability {
  id: string;
  number: string;
  title: string;
  quote: string;
  description: string;
  icon: any;
  proofPoints: string[];
  projectsLinked: string[];
  themeColor: string;
  tag: string;
}

const CAPABILITIES: Capability[] = [
  {
    id: "product-engineering",
    number: "01",
    title: "Product Engineering",
    quote: "I turn complex problems into working products.",
    description:
      "I architect full-stack applications with deterministic state machines, typed APIs, real databases, and robust client runtimes.",
    icon: Code2,
    proofPoints: [
      "NyaySaathi: Sovereign Indian legal intelligence with line-level provenance.",
      "MerchantPulse: Razorpay revenue recovery with paise-precision EV.",
      "Stratify: Interactive living startup ecosystem graph.",
    ],
    projectsLinked: ["NyaySaathi", "MerchantPulse", "Stratify"],
    themeColor: "#1434FF",
    tag: "Full-Stack Architecture",
  },
  {
    id: "ai-experimentation",
    number: "02",
    title: "AI & Experimentation",
    quote: "I experiment with what software can do next.",
    description:
      "Bridging frontier AI models with deterministic guardrails. I explore bounded generative workflows, semantic retrieval (RAG), local inference via Ollama/WebLLM, and voice-first interaction design.",
    icon: Sparkles,
    proofPoints: [
      "Engineered NotesGPT: Multi-source academic indexing with local & cloud inference choices.",
      "Bounded Gemini 2.5 Flash within deterministic payment recovery state machines.",
      "Built Healthify: Vision OCR and harmful ingredient cross-referencing.",
    ],
    projectsLinked: ["NotesGPT", "Healthify", "MerchantPulse"],
    themeColor: "#E63946",
    tag: "Applied Generative AI",
  },
  {
    id: "community-devrel",
    number: "03",
    title: "Community & DevRel",
    quote: "I bring builders together around ideas.",
    description:
      "Technology adoption is fundamentally human. As GDG Organizer and Alta Club President, I cultivate high-trust environments where engineers and creators build together.",
    icon: Users,
    proofPoints: [
      "Organizer at GDG ADYPU: Leading campus developer summits and builder tracks.",
      "Spearheaded PromptWars: High-velocity live prompt engineering hackathons.",
      "President of Alta Pune Community Club: Scaling peer founder circles.",
    ],
    projectsLinked: ["GDG ADYPU", "PromptWars", "Alta Club"],
    themeColor: "#166534",
    tag: "Developer Ecosystems",
  },
  {
    id: "growth-distribution",
    number: "04",
    title: "Growth & Distribution",
    quote: "I think beyond building. I think about adoption.",
    description:
      "Great software dies in silence without deliberate distribution loops. I design organic viral mechanics, grassroots campus flywheels, and creator-led activations.",
    icon: TrendingUp,
    proofPoints: [
      "Designed the Wispr Flow India Growth Lab: 4 comprehensive go-to-market campaign blueprints.",
      "Architected Forge Goa HackerHouse social rituals with digital Forge Passports.",
      "Engineered viral share loops for hackathon participants and student builders.",
    ],
    projectsLinked: ["Wispr Flow Growth Lab", "Forge Goa"],
    themeColor: "#F5B700",
    tag: "GTM & Distribution",
  },
  {
    id: "content-storytelling",
    number: "05",
    title: "Content & Storytelling",
    quote: "I make technology understandable and interesting.",
    description:
      "Complex architecture needs clear translation. Through the ALTA HQ YouTube initiative, editorial writing, and visual documentary, I communicate the 'why' behind the build.",
    icon: Video,
    proofPoints: [
      "Student Content Lead at ALTA School of Technology HQ YouTube channel.",
      "Scripting, on-camera interviewing, and editing video deep-dives with student founders.",
      "Documenting authentic builder stories and unvarnished behind-the-scenes engineering.",
    ],
    projectsLinked: ["ALTA HQ YouTube", "Founder Interviews"],
    themeColor: "#9333EA",
    tag: "Technical Media",
  },
  {
    id: "extreme-ownership",
    number: "06",
    title: "Extreme Ownership",
    quote: "I take ideas from initiation to execution.",
    description:
      "No waiting for permission or complete specifications. I thrive on ambiguity, turning vague problem spaces into delivered software with clear milestones and personal accountability.",
    icon: Compass,
    proofPoints: [
      "Self-directed execution across 7 distinct products spanning FinTech, Legal, Agri, and EdTech.",
      "Hands-on execution from UX wireframes to Vercel production deployments.",
      "Demonstrated ability to move from voice concept to shipped codebase in minutes.",
    ],
    projectsLinked: ["7 Deployed Builds", "Wispr Flow Challenge"],
    themeColor: "#0A0E1A",
    tag: "End-to-End Execution",
  },
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="capabilities" className="pt-36 pb-24 sm:pt-48 sm:pb-32 bg-[#E8E7DF] border-b-2 border-[#0A0E1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0A0E1A]/20">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#0A0E1A] font-bold block mb-2">
              SECTION 02 · CORE CAPABILITIES
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[#0A0E1A] tracking-tight">
              What I Bring to the Table
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-serif italic text-xl sm:text-2xl text-[#1434FF] max-w-md font-semibold">
            Six dimensions of a multidisciplinary builder who doesn&apos;t stop at code.
          </p>
        </div>

        {/* Desktop Interactive Explorer / Tab Strip */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Capability Nav Cards */}
          <div className="col-span-5 space-y-2.5">
            {CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left px-3.5 py-2.5 border-2 transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-white border-[#0A0E1A] shadow-brutal translate-x-1"
                      : "bg-[#F8F7F2] border-[#0A0E1A]/20 hover:border-[#0A0E1A]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`px-2 py-0.5 border border-[#0A0E1A] font-mono text-xs font-bold ${
                        isActive ? "bg-[#0A0E1A] text-white" : "bg-white text-[#0A0E1A]"
                      }`}
                    >
                      {cap.number}
                    </div>
                    <span className="font-display font-bold text-sm text-[#0A0E1A]">
                      {cap.title}
                    </span>
                  </div>
                  <Icon
                    className="w-4 h-4 transition-transform shrink-0"
                    style={{ color: isActive ? cap.themeColor : "#474E5D" }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Capability Showcase Pane */}
          <div className="col-span-7 bg-white p-8 sm:p-10 border-2 border-[#0A0E1A] shadow-brutal min-h-[500px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#0A0E1A]/10 mb-6 font-mono text-xs">
                <span className="px-2.5 py-1 bg-[#E8E7DF] border border-[#0A0E1A] font-bold text-[#0A0E1A]">
                  DIMENSION {CAPABILITIES[activeTab].number} / 06
                </span>
                <span className="text-[#474E5D] font-semibold uppercase tracking-wider">
                  {CAPABILITIES[activeTab].tag}
                </span>
              </div>

              <h3 className="font-serif italic text-3xl sm:text-4xl text-[#0A0E1A] mb-4 leading-tight">
                &ldquo;{CAPABILITIES[activeTab].quote}&rdquo;
              </h3>

              <p className="text-[#0A0E1A] text-base sm:text-lg leading-relaxed mb-8 max-w-prose">
                {CAPABILITIES[activeTab].description}
              </p>

              <div className="space-y-3 mb-8">
                <span className="font-mono text-xs uppercase text-[#0A0E1A] font-bold tracking-wider block">
                  VERIFIED EVIDENCE & EXECUTION RECORD:
                </span>
                {CAPABILITIES[activeTab].proofPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-[#0A0E1A]">
                    <CheckCircle2 className="w-4 h-4 text-[#1434FF] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#0A0E1A]/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#474E5D] font-semibold">LINKED ARTIFACTS:</span>
                {CAPABILITIES[activeTab].projectsLinked.map((p) => (
                  <span
                    key={p}
                    className="px-2 py-0.5 bg-[#E8E7DF] border border-[#0A0E1A]/30 font-semibold text-[#0A0E1A]"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <a
                href="#selected-work"
                className="inline-flex items-center gap-1.5 text-[#1434FF] font-bold hover:underline"
              >
                <span>View Builds</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Stack */}
        <div className="lg:hidden space-y-6">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                className="bg-white p-6 border-2 border-[#0A0E1A] shadow-brutal space-y-4"
              >
                <div className="flex items-center justify-between font-mono text-xs border-b border-[#0A0E1A]/10 pb-3">
                  <span className="px-2 py-0.5 bg-[#0A0E1A] text-white font-bold">
                    {cap.number}
                  </span>
                  <span className="text-[#474E5D] font-semibold">{cap.tag}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-[#1434FF]" />
                  <h3 className="font-display font-bold text-xl text-[#0A0E1A]">
                    {cap.title}
                  </h3>
                </div>

                <p className="font-serif italic text-xl text-[#1434FF] font-medium">
                  &ldquo;{cap.quote}&rdquo;
                </p>

                <p className="text-sm text-[#0A0E1A] leading-relaxed">
                  {cap.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#0A0E1A]/10">
                  {cap.proofPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#0A0E1A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1434FF] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
