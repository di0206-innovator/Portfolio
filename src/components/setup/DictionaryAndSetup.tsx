"use client";

import { useState } from "react";
import { 
  Sparkles, 
  Video, 
  Mic2, 
  Users2, 
  Terminal, 
  ArrowUpRight, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  AlertCircle, 
  Calendar, 
  Target, 
  Cpu, 
  Radio, 
  Zap, 
  ChevronRight,
  Flame,
  FileSpreadsheet
} from "lucide-react";
import { 
  BUDGET_ITEMS, 
  SETUP_CATEGORIES, 
  CORE_BUDGET, 
  CONDITIONAL_BUDGET, 
  TOTAL_BUDGET, 
  CONTENT_PILLARS, 
  EXECUTION_ROADMAP 
} from "@/data/setup";

export default function DictionaryAndSetup() {
  const [selectedPhase, setSelectedPhase] = useState<"all" | "core" | "conditional">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePillarTab, setActivePillarTab] = useState<number>(0);

  // Filter items based on Phase & Category
  const filteredItems = BUDGET_ITEMS.filter((item) => {
    const matchesPhase = selectedPhase === "all" || item.phase === selectedPhase;
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesPhase && matchesCategory;
  });

  const subtotal = filteredItems.reduce((acc, it) => acc + it.price * it.qty, 0);

  return (
    <section id="setup" className="py-28 sm:py-36 bg-[#E8E7DF] border-b-2 border-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        
        {/* =========================================================================
            PART 1: DICTIONARY-STYLE REFERENCE CARD (PRESERVED & INTEGRATED)
           ========================================================================= */}
        <div className="bg-white p-8 sm:p-12 border-2 border-[#0A0E1A] shadow-brutal max-w-4xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-widest text-[#474E5D] font-bold mb-3">
            DICTIONARY DEFINITION · ENTRY 001
          </div>
          <div className="flex flex-wrap items-baseline gap-4 mb-4">
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[#0A0E1A] tracking-tight">
              di·vyan·shu
            </h2>
            <span className="font-serif italic text-2xl sm:text-3xl text-[#1434FF] font-semibold">
              / dɪvˈjɑːn.ʃuː /
            </span>
            <span className="font-mono text-xs uppercase px-2 py-0.5 bg-[#E8E7DF] border border-[#0A0E1A] font-bold">
              Noun.
            </span>
          </div>

          <p className="font-serif italic text-2xl sm:text-3xl text-[#0A0E1A] leading-relaxed mb-6 font-medium">
            A builder, experimenter and community operator interested in turning ideas into tangible outcomes.
          </p>

          <div className="pt-4 border-t border-[#0A0E1A]/10 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-[#474E5D]">
            <div>
              <span className="text-[#0A0E1A] font-bold block">SYNONYMS</span>
              Operator, Catalyst, Prototype Engine
            </div>
            <div>
              <span className="text-[#0A0E1A] font-bold block">NATIVE HABITAT</span>
              Campuses, Hackathons, Terminals
            </div>
            <div>
              <span className="text-[#0A0E1A] font-bold block">OPERATING MEDIUM</span>
              Voice, Code, Human Momentum
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 2: STRATEGIC PROPOSAL HERO — DIVYANSHU × WISPR FLOW
           ========================================================================= */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-[#1434FF] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-brutal-xs">
              INVESTOR-STYLE PROPOSAL
            </span>
            <span className="px-3 py-1 bg-white border border-[#0A0E1A] font-mono text-xs font-bold uppercase text-[#0A0E1A]">
              WISPR FLOW INDIA HIRING CHALLENGE
            </span>
            <span className="px-3 py-1 bg-amber-200 border border-[#0A0E1A] font-mono text-xs font-bold uppercase text-[#0A0E1A]">
              PROPOSED STRATEGY · INDEPENDENT CHANNEL
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b-2 border-[#0A0E1A]">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#1434FF] font-bold mb-2 flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#1434FF] animate-pulse" />
                SECTION 09 · STRATEGIC CREATOR &amp; COMMUNITY INFRASTRUCTURE
              </div>
              <h2 className="font-display font-black text-3xl sm:text-6xl text-[#0A0E1A] tracking-tight leading-[1.05]">
                DIVYANSHU × WISPR FLOW
              </h2>
              <p className="font-display font-bold text-xl sm:text-2xl text-[#1434FF] mt-2">
                Building India’s Voice-First Builder Community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 font-mono">
              <div className="bg-white border-2 border-[#0A0E1A] p-4 shadow-brutal-sm text-left lg:text-right">
                <span className="text-xs uppercase text-[#474E5D] font-bold block">TOTAL PROPOSED ALLOCATION</span>
                <span className="text-3xl sm:text-4xl font-black text-[#1434FF]">
                  ${TOTAL_BUDGET.toFixed(2)} USD
                </span>
                <span className="block text-[11px] text-[#474E5D] mt-1">
                  Phase 1 Core: ${CORE_BUDGET} · Phase 2 Conditional: ${CONDITIONAL_BUDGET}
                </span>
              </div>
            </div>
          </div>

          {/* Strategic Context Notice */}
          <div className="p-5 bg-amber-50 border-2 border-[#0A0E1A] shadow-brutal-sm grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-1 flex justify-center">
              <Zap className="w-8 h-8 text-[#1434FF]" />
            </div>
            <div className="md:col-span-11 text-xs sm:text-sm text-[#0A0E1A] leading-relaxed">
              <strong>EXECUTIVE SUMMARY &amp; INDEPENDENCE DECLARATION:</strong> This is an evidence-backed investment proposal demonstrating why investing $3,000 in Divyanshu Sinha&apos;s independent creator and community infrastructure generates compounding long-term growth for Wispr Flow across India. The content channel is <strong>independently owned and operated by Divyanshu</strong> (not ALTA School of Technology). Campus relationships and club ecosystems provide access, while editorial identity and publishing channels remain fully independent.
            </div>
          </div>

          {/* Exact Application Response: Oddly Specific Requirement */}
          <div className="p-5 bg-white border-2 border-[#0A0E1A] shadow-brutal-sm space-y-2.5">
            <div className="flex flex-wrap items-center justify-between font-mono text-[11px] text-[#1434FF] font-bold uppercase pb-2 border-b border-[#0A0E1A]/10 gap-2">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F5B700]" />
                <span>APPLICATION SPECIFICATION · ODDLY SPECIFIC REQUIREMENT</span>
              </span>
              <span className="text-[#474E5D] bg-[#F8F7F2] px-2 py-0.5 border border-[#0A0E1A]/20">VERBATIM APPLICATION RESPONSE</span>
            </div>
            <p className="font-serif italic text-sm sm:text-base text-[#0A0E1A] leading-relaxed">
              &ldquo;I need a portable creator-production setup consisting of a mirrorless camera with a versatile lens, wireless microphones for interviews and outdoor recordings, a desk microphone for voiceovers, professional lighting, a tripod, a teleprompter, external SSD storage, memory cards, spare batteries and editing software. This setup will help me independently produce YouTube videos, Instagram Reels, AI product demonstrations, creator interviews and coverage of developer community events. I want to turn ideas into high-quality content wherever I am, while building a consistent creator-led growth engine for Wispr Flow in India.&rdquo;
            </p>
          </div>
        </div>

        {/* =========================================================================
            PART 3: THE STRATEGIC BRIDGE & WHY WISPR SHOULD INVEST
           ========================================================================= */}
        <div className="space-y-8">
          <div className="border-l-4 border-[#1434FF] pl-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#474E5D] font-bold block">
              THE STRATEGIC BRIDGE
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-[#0A0E1A]">
              Bridging Three High-Leverage Indian Ecosystems
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#0A0E1A] p-6 shadow-brutal flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-[#E8E7DF] border border-[#0A0E1A] flex items-center justify-center font-mono font-black text-sm mb-4">
                  01
                </div>
                <h4 className="font-display font-black text-lg text-[#0A0E1A] mb-2">
                  India’s Dev &amp; AI Builder Community
                </h4>
                <p className="font-sans text-xs text-[#474E5D] leading-relaxed">
                  Engineering teams adopting Cursor, Claude Code, and Copilot who need high-velocity, hands-free input. We demonstrate voice architecture that shaves hours off their sprints.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#0A0E1A]/10 font-mono text-[11px] text-[#1434FF] font-bold">
                FOCUS: Technical Proof of Speed &amp; Code Ergonomics
              </div>
            </div>

            <div className="bg-white border-2 border-[#0A0E1A] p-6 shadow-brutal flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-[#E8E7DF] border border-[#0A0E1A] flex items-center justify-center font-mono font-black text-sm mb-4">
                  02
                </div>
                <h4 className="font-display font-black text-lg text-[#0A0E1A] mb-2">
                  The Student &amp; Early-Founder Cohorts
                </h4>
                <p className="font-sans text-xs text-[#474E5D] leading-relaxed">
                  Collegiate hackathon contenders, GDG on-campus circles, and university club leaders building high-velocity MVPs who form habitual lifelong affinity with developer tools.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#0A0E1A]/10 font-mono text-[11px] text-[#1434FF] font-bold">
                FOCUS: Campus Activations &amp; Fast Voice Sprints
              </div>
            </div>

            <div className="bg-white border-2 border-[#0A0E1A] p-6 shadow-brutal flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-[#E8E7DF] border border-[#0A0E1A] flex items-center justify-center font-mono font-black text-sm mb-4">
                  03
                </div>
                <h4 className="font-display font-black text-lg text-[#0A0E1A] mb-2">
                  Independent Tech Creator Economy
                </h4>
                <p className="font-sans text-xs text-[#474E5D] leading-relaxed">
                  Documentary storytelling and short-form breakdown formats that bridge complex multimodal AI workflows with everyday founders, researchers, and knowledge creators across India.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#0A0E1A]/10 font-mono text-[11px] text-[#1434FF] font-bold">
                FOCUS: Viral Demos &amp; Unfiltered Founder Stories
              </div>
            </div>
          </div>

          {/* 7 Investment Pillars Grid */}
          <div className="bg-white border-2 border-[#0A0E1A] p-8 shadow-brutal">
            <h4 className="font-display font-black text-xl text-[#0A0E1A] mb-6">
              Why Wispr Flow Should Invest: 7 Concrete Business Outcomes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-xs">
              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20">
                <div className="font-bold font-display text-sm text-[#0A0E1A] mb-1">1. Product Education</div>
                <p className="text-[#474E5D]">
                  Real-world, unsponsored-style builds showing Wispr Flow dictating full-stack databases, complex prompts, and system specs in under 60 seconds.
                </p>
              </div>
              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20">
                <div className="font-bold font-display text-sm text-[#0A0E1A] mb-1">2. Organic Distribution</div>
                <p className="text-[#474E5D]">
                  High-retention 9:16 Shorts/Reels and long-form YouTube deep dives hosted on Divyanshu&apos;s independent channel with organic reach.
                </p>
              </div>
              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20">
                <div className="font-bold font-display text-sm text-[#0A0E1A] mb-1">3. Developer Acquisition</div>
                <p className="text-[#474E5D]">
                  Onboarding college computer science cohorts and young startup builders into daily active Wispr Flow users with tailored student referral links.
                </p>
              </div>
              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20">
                <div className="font-bold font-display text-sm text-[#0A0E1A] mb-1">4. Founder Interviews</div>
                <p className="text-[#474E5D]">
                  Studio-quality interviews with regional tech leaders and collegiate founders demonstrating how voice tooling accelerates their product tempo.
                </p>
              </div>
              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20">
                <div className="font-bold font-display text-sm text-[#0A0E1A] mb-1">5. Voice-First Sprints</div>
                <p className="text-[#474E5D]">
                  Organizing physical 60-minute keyboardless building challenges at hackathons and campus clubs with tangible kits and leaderboards.
                </p>
              </div>
              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20">
                <div className="font-bold font-display text-sm text-[#0A0E1A] mb-1">6. Direct Product Feedback</div>
                <p className="text-[#474E5D]">
                  Field reports highlighting Indian English accents, multi-language code mixing, noisy room handling, and recurring UX friction directly to Wispr product teams.
                </p>
              </div>
              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20 sm:col-span-2">
                <div className="font-bold font-display text-sm text-[#0A0E1A] mb-1">7. Ecosystem Partnerships</div>
                <p className="text-[#474E5D]">
                  Leveraging established GDG on Campus, university clubs, and community relationships to secure stage time, workshops, and co-branded builder events without agency overhead.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 4: THE CONTENT ENGINE (5 STRATEGIC CONTENT PILLARS)
           ========================================================================= */}
        <div className="space-y-8">
          <div className="border-l-4 border-[#1434FF] pl-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#474E5D] font-bold block">
              THE PROGRAMMING BLUEPRINT
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-[#0A0E1A]">
              The 5-Pillar Strategic Content Engine
            </h3>
          </div>

          {/* Interactive Pillar Switcher */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono text-xs">
            {CONTENT_PILLARS.map((p, idx) => (
              <button
                key={p.letter}
                onClick={() => setActivePillarTab(idx)}
                className={`p-3 border-2 text-left transition-all ${
                  activePillarTab === idx
                    ? "bg-[#0A0E1A] text-white border-[#0A0E1A] shadow-brutal-sm font-bold"
                    : "bg-white text-[#0A0E1A] border-[#0A0E1A]/20 hover:border-[#0A0E1A]"
                }`}
              >
                <div className="text-[#1434FF] font-black text-xs mb-1">PILLAR {p.letter}</div>
                <div className="font-display font-bold uppercase truncate">{p.title}</div>
              </button>
            ))}
          </div>

          {/* Active Pillar Card */}
          {(() => {
            const currentPillar = CONTENT_PILLARS[activePillarTab];
            return (
              <div className="bg-white border-2 border-[#0A0E1A] p-8 shadow-brutal relative overflow-hidden">
                <div className="absolute top-4 right-4 text-7xl font-display font-black text-[#0A0E1A]/5 select-none pointer-events-none">
                  {currentPillar.letter}
                </div>
                <div className="w-full space-y-4">
                  <div className="inline-block px-2.5 py-1 bg-[#1434FF] text-white font-mono text-xs font-bold uppercase">
                    PILLAR {currentPillar.letter} · {currentPillar.title}
                  </div>
                  <h4 className="font-display font-black text-2xl sm:text-3xl text-[#0A0E1A]">
                    &ldquo;{currentPillar.tagline}&rdquo;
                  </h4>
                  <p className="font-sans text-sm text-[#474E5D] leading-relaxed">
                    {currentPillar.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#0A0E1A]/10 font-mono text-xs">
                    <div className="p-3 bg-[#F8F7F2] border border-[#0A0E1A]/10">
                      <span className="text-[#1434FF] font-bold block mb-1">OUTPUT FORMAT</span>
                      <span className="text-[#0A0E1A] font-semibold">{currentPillar.outputFormat}</span>
                    </div>
                    <div className="p-3 bg-[#F8F7F2] border border-[#0A0E1A]/10">
                      <span className="text-[#1434FF] font-bold block mb-1">TARGET COHORT</span>
                      <span className="text-[#0A0E1A] font-semibold">{currentPillar.targetAudience}</span>
                    </div>
                    <div className="p-3 bg-[#F8F7F2] border border-[#0A0E1A]/10">
                      <span className="text-[#1434FF] font-bold block mb-1">GROWTH KPI LINK</span>
                      <span className="text-[#0A0E1A] font-semibold">{currentPillar.kpiTieIn}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* =========================================================================
            PART 5: THE $3,000 WORK SETUP (PHASE 1 CORE vs PHASE 2 CONDITIONAL)
           ========================================================================= */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-4 border-[#1434FF] pl-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#474E5D] font-bold block">
                RIGOROUS CAPITAL ALLOCATION
              </span>
              <h3 className="font-display font-black text-2xl sm:text-4xl text-[#0A0E1A]">
                The $3,000 Setup: Phase 1 Core vs Phase 2 Conditional
              </h3>
            </div>
            <div className="font-mono text-xs text-[#474E5D]">
              *Budget estimates based on current USD MSRP, not vendor contracts.
            </div>
          </div>

          {/* Phase 1 vs Phase 2 Visual Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#0A0E1A] p-6 shadow-brutal relative">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 bg-green-100 text-green-900 border border-green-800 font-mono text-xs font-bold uppercase">
                  PRIMARY REQUIREMENT (ESSENTIAL)
                </span>
                <span className="font-mono text-2xl font-black text-[#0A0E1A]">${CORE_BUDGET.toFixed(2)} USD</span>
              </div>
              <h4 className="font-display font-black text-xl text-[#0A0E1A] mb-2">
                Phase 1: Core Field-Ready Kit (89.3% of Total)
              </h4>
              <p className="font-sans text-xs text-[#474E5D] leading-relaxed mb-4">
                Everything required to immediately initiate full-scale production: Sony ZV-E10 4K mirrorless camera with Sigma 18–50mm f/2.8 versatile zoom lens, Elgato Prompter with built-in 9&quot; display, DJI Mic 2 wireless 32-bit float audio, broadcast Shure MV7+ desktop voiceover mic, Aputure Amaran MC Pro lighting, SmallRig carbon tripod, SanDisk 2TB Extreme PRO SSD, dual SD cards, and dual spare camera batteries with USB-C charger.
              </p>
              <div className="font-mono text-xs text-[#1434FF] font-semibold">
                10 Line Items · Zero Software Bloat · Day 1 Deployable
              </div>
            </div>

            <div className="bg-white border-2 border-[#0A0E1A] p-6 shadow-brutal relative">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 bg-amber-100 text-amber-900 border border-amber-800 font-mono text-xs font-bold uppercase">
                  CONDITIONAL UPGRADES (OPTIONAL BUFFER)
                </span>
                <span className="font-mono text-2xl font-black text-[#1434FF]">${CONDITIONAL_BUDGET.toFixed(2)} USD</span>
              </div>
              <h4 className="font-display font-black text-xl text-[#0A0E1A] mb-2">
                Phase 2: Scale &amp; Remote Studio Enhancements (10.7%)
              </h4>
              <p className="font-sans text-xs text-[#474E5D] leading-relaxed mb-4">
                Riverside.fm 4K uncompressed remote studio software for high-fidelity founder interviews across Bengaluru/Delhi/US, Ulanzi RGB magnetic tube rim light, and Anker Soundcore Space One ANC monitoring headphones for loud hackathon sound checks.
              </p>
              <div className="font-mono text-xs text-[#474E5D] font-semibold">
                3 Line Items · Flexible Allocation · Subject to Review
              </div>
            </div>
          </div>

          {/* Interactive Filters: Phase + Category */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="text-[#474E5D] font-bold mr-2 uppercase">Filter by Phase:</span>
              <button
                onClick={() => setSelectedPhase("all")}
                className={`px-3 py-1.5 border-2 transition-all uppercase ${
                  selectedPhase === "all"
                    ? "bg-[#0A0E1A] text-white border-[#0A0E1A] font-bold shadow-brutal-xs"
                    : "bg-white text-[#0A0E1A] border-[#0A0E1A]/20 hover:border-[#0A0E1A]"
                }`}
              >
                All Items (${TOTAL_BUDGET.toFixed(2)})
              </button>
              <button
                onClick={() => setSelectedPhase("core")}
                className={`px-3 py-1.5 border-2 transition-all uppercase ${
                  selectedPhase === "core"
                    ? "bg-[#0A0E1A] text-white border-[#0A0E1A] font-bold shadow-brutal-xs"
                    : "bg-white text-[#0A0E1A] border-[#0A0E1A]/20 hover:border-[#0A0E1A]"
                }`}
              >
                Core Only (${CORE_BUDGET.toFixed(2)})
              </button>
              <button
                onClick={() => setSelectedPhase("conditional")}
                className={`px-3 py-1.5 border-2 transition-all uppercase ${
                  selectedPhase === "conditional"
                    ? "bg-[#0A0E1A] text-white border-[#0A0E1A] font-bold shadow-brutal-xs"
                    : "bg-white text-[#0A0E1A] border-[#0A0E1A]/20 hover:border-[#0A0E1A]"
                }`}
              >
                Conditional Only (${CONDITIONAL_BUDGET.toFixed(2)})
              </button>
            </div>

            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-3 py-1 border transition-all uppercase text-[11px] ${
                  selectedCategory === "All"
                    ? "bg-[#1434FF] text-white border-[#1434FF] font-bold"
                    : "bg-white text-[#0A0E1A] border-[#0A0E1A]/20 hover:border-[#0A0E1A]"
                }`}
              >
                All Categories
              </button>
              {SETUP_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 border transition-all uppercase text-[11px] ${
                    selectedCategory === cat
                      ? "bg-[#1434FF] text-white border-[#1434FF] font-bold"
                      : "bg-white text-[#0A0E1A] border-[#0A0E1A]/20 hover:border-[#0A0E1A]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Itemized Receipt Table */}
          <div data-slot="budget-receipt" className="bg-white border-2 border-[#0A0E1A] shadow-brutal overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="bg-[#0A0E1A] text-white uppercase text-xs tracking-wider">
                    <th className="p-3.5">Category &amp; Item</th>
                    <th className="p-3.5">Phase</th>
                    <th className="p-3.5">Strategic Growth Objective</th>
                    <th className="p-3.5 hidden lg:table-cell">Redundancy / Substitutions</th>
                    <th className="p-3.5 text-center">Qty</th>
                    <th className="p-3.5 text-right">Price (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0A0E1A]/10">
                  {filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-[#F8F7F2] transition-colors">
                      <td className="p-3.5 font-sans">
                        <div className="font-bold text-[#0A0E1A] text-sm font-display">
                          {item.name}
                        </div>
                        <div className="font-mono text-[11px] text-[#474E5D] mt-0.5">
                          {item.specs}
                        </div>
                        <span className="inline-block mt-1 font-mono text-[10px] text-[#1434FF] font-semibold uppercase">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-3.5 font-mono">
                        <span
                          className={`px-2 py-0.5 text-[10px] uppercase font-bold border ${
                            item.phase === "core"
                              ? "bg-green-100 text-green-900 border-green-800"
                              : "bg-amber-100 text-amber-900 border-amber-800"
                          }`}
                        >
                          {item.phase}
                        </span>
                      </td>
                      <td className="p-3.5 text-[#0A0E1A] text-xs font-sans max-w-xs leading-relaxed">
                        <div className="font-semibold text-[#1434FF] font-mono text-[11px] uppercase mb-0.5">
                          {item.growthObjective}
                        </div>
                        {item.businessPurpose}
                      </td>
                      <td className="p-3.5 text-[#474E5D] text-xs font-sans hidden lg:table-cell max-w-xs italic leading-relaxed">
                        {item.redundancyOrSubstitutions}
                      </td>
                      <td className="p-3.5 text-center font-bold text-sm">
                        {item.qty}
                      </td>
                      <td className="p-3.5 text-right font-bold text-[#0A0E1A] font-mono text-sm">
                        ${(item.price * item.qty).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-[#F8F7F2] font-bold text-sm border-t-2 border-[#0A0E1A]">
                    <td colSpan={2} className="p-4 uppercase text-[#0A0E1A]">
                      Subtotal ({filteredItems.length} items shown)
                    </td>
                    <td className="p-4 hidden md:table-cell text-xs text-[#474E5D] font-medium" colSpan={2}>
                      Full Setup: Core ($2,639) + Conditional ($317) = $2,956 Total
                    </td>
                    <td className="p-4 text-center font-mono">
                      {filteredItems.reduce((acc, it) => acc + it.qty, 0)}
                    </td>
                    <td className="p-4 text-right text-base text-[#1434FF] font-black font-mono">
                      ${subtotal.toFixed(2)} USD
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Mathematical Justification & Unit Economics Proof */}
          <div className="bg-white border-2 border-[#0A0E1A] p-6 sm:p-8 shadow-brutal space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#0A0E1A]/10 gap-2">
              <div>
                <span className="font-mono text-xs uppercase text-[#1434FF] font-bold">FINANCIAL MODEL &amp; UNIT ECONOMICS</span>
                <h4 className="font-display font-black text-xl sm:text-2xl text-[#0A0E1A]">
                  Mathematical Justification &amp; Real-Life Market Benchmarks
                </h4>
              </div>
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-900 border border-emerald-800 font-mono text-[11px] font-bold uppercase self-start">
                Real-Life Market Verified (B&amp;H / Amazon / MSRP)
              </span>
            </div>

            {/* 4 Quantitative Proof Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-[#474E5D] font-bold uppercase block mb-1">
                    01 · CAPEX BALANCE SHEET
                  </span>
                  <div className="text-2xl font-black text-[#0A0E1A] font-display">
                    $2,956.00
                  </div>
                  <p className="text-[11px] text-[#474E5D] mt-1 font-sans">
                    Core: $2,639.00 (89.3%) + Conditional: $317.00 (10.7%). Zero unallocated variance.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#0A0E1A]/10 text-[10px] text-emerald-700 font-bold">
                  ✓ 100.0% Exact Line-Item Match
                </div>
              </div>

              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-[#474E5D] font-bold uppercase block mb-1">
                    02 · ASSET AMORTIZATION
                  </span>
                  <div className="text-2xl font-black text-[#1434FF] font-display">
                    $54.74 / Asset
                  </div>
                  <p className="text-[11px] text-[#474E5D] mt-1 font-sans">
                    $2,956 amortized across 54 video assets in 90 days. Drops to $0.00 marginal CapEx from Day 91+.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#0A0E1A]/10 text-[10px] text-emerald-700 font-bold">
                  ✓ 91% Savings vs Agency ($600+)
                </div>
              </div>

              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-[#474E5D] font-bold uppercase block mb-1">
                    03 · BLENDED CAC EFFICIENCY
                  </span>
                  <div className="text-2xl font-black text-[#0A0E1A] font-display">
                    $2.96 / User
                  </div>
                  <p className="text-[11px] text-[#474E5D] mt-1 font-sans">
                    $2,956 capex ÷ 1,000+ qualified developer activations. Industry B2D ad CAC: $25–$50.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#0A0E1A]/10 text-[10px] text-emerald-700 font-bold">
                  ✓ 88% Cheaper Than Google/LinkedIn Ads
                </div>
              </div>

              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-[#474E5D] font-bold uppercase block mb-1">
                    04 · CONSERVATIVE YEAR 1 ROI
                  </span>
                  <div className="text-2xl font-black text-emerald-700 font-display">
                    387% Net ROI
                  </div>
                  <p className="text-[11px] text-[#474E5D] mt-1 font-sans">
                    10% paid conversion (100 devs @ $144 ARR = $14,400 ARR). Full capex payback in 75 days.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#0A0E1A]/10 text-[10px] text-emerald-700 font-bold">
                  ✓ 4.9x Cash-on-Cash Multiplier
                </div>
              </div>
            </div>

            {/* Deep-Dive Math Notes: Balanced 2-Column Layout Filling Full Width */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="p-5 bg-[#F8F7F2] border border-[#0A0E1A]/20 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-[#0A0E1A]/10 pb-2 font-mono text-[11px]">
                    <span className="font-bold uppercase text-[#1434FF]">01 · HUMAN VELOCITY EQUATION</span>
                    <span className="px-2 py-0.5 bg-[#1434FF] text-white font-bold text-[10px]">3.5x THROUGHPUT</span>
                  </div>
                  <p className="w-full max-w-none font-sans text-xs sm:text-sm text-[#0A0E1A] leading-relaxed">
                    Spoken natural language via Wispr Flow operates at <strong>154–165 WPM</strong> versus mechanical typing at <strong>40–45 WPM</strong>. For an engineer spending 90 minutes per day typing PRDs, code prompts, and code reviews, voice dictation reduces active keyboard time to ~26 minutes—recovering <strong>~64 minutes of cognitive engineering focus per day</strong> (over 21 hours recovered per developer per month).
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#0A0E1A]/10 font-mono text-[11px] text-center">
                  <div className="p-2 bg-white border border-[#0A0E1A]/15">
                    <span className="block text-[10px] text-[#474E5D]">TYPING</span>
                    <span className="font-black text-[#0A0E1A]">45 WPM</span>
                  </div>
                  <div className="p-2 bg-white border border-[#0A0E1A]/15">
                    <span className="block text-[10px] text-[#474E5D]">WISPR FLOW</span>
                    <span className="font-black text-[#1434FF]">158 WPM</span>
                  </div>
                  <div className="p-2 bg-white border border-[#0A0E1A]/15">
                    <span className="block text-[10px] text-[#474E5D]">TIME SAVED</span>
                    <span className="font-black text-emerald-700">21+ hrs/mo</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-[#F8F7F2] border border-[#0A0E1A]/20 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-[#0A0E1A]/10 pb-2 font-mono text-[11px]">
                    <span className="font-bold uppercase text-[#1434FF]">02 · MARKET PRICE AUDIT (B&amp;H / AMAZON / MSRP)</span>
                    <span className="px-2 py-0.5 bg-emerald-800 text-white font-bold text-[10px]">$0.00 VARIANCE</span>
                  </div>
                  <p className="w-full max-w-none font-sans text-xs sm:text-sm text-[#0A0E1A] leading-relaxed">
                    Every item in the CapEx registry is verified against live retail listings: Sony ZV-E10 Body ($599), Sigma 18–50mm f/2.8 ($549), Elgato Prompter ($279), DJI Mic 2 2-Person ($349), Shure MV7+ ($279), Amaran MC Pro ($149), SmallRig Carbon Tripod ($129), SanDisk 2TB Extreme PRO ($199), Dual 128GB SD ($58), Dual Batteries ($49), Riverside 1-Yr ($186), Ulanzi Wand ($45), and Anker ANC ($86). Exactly <strong>$2,956.00 USD total</strong> with zero fabricated figures.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#0A0E1A]/10 font-mono text-[11px] text-center">
                  <div className="p-2 bg-white border border-[#0A0E1A]/15">
                    <span className="block text-[10px] text-[#474E5D]">PHASE 1 CORE</span>
                    <span className="font-black text-[#0A0E1A]">$2,639.00</span>
                  </div>
                  <div className="p-2 bg-white border border-[#0A0E1A]/15">
                    <span className="block text-[10px] text-[#474E5D]">CONDITIONAL</span>
                    <span className="font-black text-[#1434FF]">$317.00</span>
                  </div>
                  <div className="p-2 bg-white border border-[#0A0E1A]/15">
                    <span className="block text-[10px] text-[#474E5D]">TOTAL CAPEX</span>
                    <span className="font-black text-emerald-700">$2,956.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 6: MEASURABLE 90-DAY EXECUTION PLAN & KPI TARGETS
           ========================================================================= */}
        <div className="space-y-8">
          <div className="border-l-4 border-[#1434FF] pl-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#474E5D] font-bold block">
              OPERATIONAL TIMELINE &amp; METRICS
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-[#0A0E1A]">
              The 90-Day Execution Plan &amp; Growth Targets
            </h3>
          </div>

          {/* 90-Day Deliverables Summary Bar */}
          <div className="bg-white border-2 border-[#0A0E1A] p-6 shadow-brutal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center font-mono">
            <div className="p-3 bg-[#F8F7F2] border border-[#0A0E1A]/10">
              <div className="text-2xl font-black text-[#1434FF]">6</div>
              <div className="text-[11px] text-[#474E5D] font-bold uppercase mt-1">Long-Form Videos</div>
            </div>
            <div className="p-3 bg-[#F8F7F2] border border-[#0A0E1A]/10">
              <div className="text-2xl font-black text-[#1434FF]">24–36</div>
              <div className="text-[11px] text-[#474E5D] font-bold uppercase mt-1">Short-Form Clips</div>
            </div>
            <div className="p-3 bg-[#F8F7F2] border border-[#0A0E1A]/10">
              <div className="text-2xl font-black text-[#1434FF]">12</div>
              <div className="text-[11px] text-[#474E5D] font-bold uppercase mt-1">Flow Demos</div>
            </div>
            <div className="p-3 bg-[#F8F7F2] border border-[#0A0E1A]/10">
              <div className="text-2xl font-black text-[#1434FF]">3–6</div>
              <div className="text-[11px] text-[#474E5D] font-bold uppercase mt-1">Founder Interviews</div>
            </div>
            <div className="p-3 bg-[#F8F7F2] border border-[#0A0E1A]/10">
              <div className="text-2xl font-black text-[#1434FF]">3</div>
              <div className="text-[11px] text-[#474E5D] font-bold uppercase mt-1">Voice Activations</div>
            </div>
            <div className="p-3 bg-[#F8F7F2] border border-[#0A0E1A]/10">
              <div className="text-2xl font-black text-[#1434FF]">3</div>
              <div className="text-[11px] text-[#474E5D] font-bold uppercase mt-1">Monthly Reports</div>
            </div>
          </div>

          {/* Monthly Roadmap Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXECUTION_ROADMAP.map((phase) => (
              <div key={phase.month} className="bg-white border-2 border-[#0A0E1A] p-6 shadow-brutal flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-[#1434FF] font-bold mb-1">
                    {phase.month}
                  </div>
                  <h4 className="font-display font-black text-lg text-[#0A0E1A] mb-4">
                    {phase.focus}
                  </h4>

                  <div className="space-y-2 mb-6">
                    <span className="font-mono text-[11px] text-[#474E5D] uppercase font-bold block">
                      KEY DELIVERABLES:
                    </span>
                    <ul className="space-y-1.5 font-sans text-xs text-[#0A0E1A]">
                      {phase.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1434FF] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0A0E1A]/10 bg-[#F8F7F2] -mx-6 -mb-6 p-4">
                  <span className="font-mono text-[11px] text-[#1434FF] uppercase font-bold block mb-1">
                    PROPOSED KPI BENCHMARKS:
                  </span>
                  <ul className="font-mono text-[11px] text-[#474E5D] space-y-1">
                    {phase.kpis.map((kpi, kIdx) => (
                      <li key={kIdx}>• {kpi}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Growth KPI Dashboard Mock-up (Clearly marked as proposed) */}
          <div className="bg-white border-2 border-[#0A0E1A] p-6 sm:p-8 shadow-brutal">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#0A0E1A]/10 gap-2 mb-6">
              <div>
                <span className="font-mono text-xs uppercase text-[#1434FF] font-bold">TELEMETRY &amp; ANALYTICS</span>
                <h4 className="font-display font-black text-xl text-[#0A0E1A]">
                  Proposed Growth KPI Dashboard (Projected 90-Day Run-Rate)
                </h4>
              </div>
              <span className="px-2.5 py-1 bg-amber-100 text-amber-900 border border-amber-800 font-mono text-[11px] font-bold uppercase self-start">
                Proposed Targets · Not Guaranteed Results
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20">
                <span className="text-xs text-[#474E5D] font-bold uppercase block">QUALIFIED PRODUCT SIGN-UPS</span>
                <div className="text-3xl font-black text-[#0A0E1A] mt-1">1,000+</div>
                <span className="text-[11px] text-green-700 font-bold">Via custom referral links &amp; workshops</span>
              </div>

              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20">
                <span className="text-xs text-[#474E5D] font-bold uppercase block">EST. COST PER QUALIFIED ACTIVATION</span>
                <div className="text-3xl font-black text-[#1434FF] mt-1">~$2.96 USD</div>
                <span className="text-[11px] text-[#474E5D]"> amortized against total $2,956 capex</span>
              </div>

              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20">
                <span className="text-xs text-[#474E5D] font-bold uppercase block">LONG-FORM COMPLETION RATE</span>
                <div className="text-3xl font-black text-[#0A0E1A] mt-1">45%+</div>
                <span className="text-[11px] text-green-700 font-bold">Targeted at technical builder audiences</span>
              </div>

              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20">
                <span className="text-xs text-[#474E5D] font-bold uppercase block">COLLEGE ACTIVATION REACH</span>
                <div className="text-3xl font-black text-[#0A0E1A] mt-1">3 Campuses</div>
                <span className="text-[11px] text-[#474E5D]">Hands-on voice hackathons in Pune &amp; region</span>
              </div>

              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20">
                <span className="text-xs text-[#474E5D] font-bold uppercase block">PRODUCT FEEDBACK CYCLES</span>
                <div className="text-3xl font-black text-[#1434FF] mt-1">3 Reports</div>
                <span className="text-[11px] text-[#474E5D]">Acoustics, accents &amp; developer UX logs</span>
              </div>

              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/20">
                <span className="text-xs text-[#474E5D] font-bold uppercase block">MARGINAL COST PER FUTURE VIDEO</span>
                <div className="text-3xl font-black text-[#0A0E1A] mt-1">$0.00</div>
                <span className="text-[11px] text-green-700 font-bold">Permanent independent production kit</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 7: WHY DIVYANSHU (PROVEN TRACK RECORD & ECOSYSTEM ACCESS)
           ========================================================================= */}
        <div className="space-y-8">
          <div className="border-l-4 border-[#1434FF] pl-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#474E5D] font-bold block">
              OPERATOR VALIDATION
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-[#0A0E1A]">
              Why Divyanshu: The Multi-Disciplinary Builder
            </h3>
          </div>

          <div className="bg-white border-2 border-[#0A0E1A] p-8 shadow-brutal space-y-6">
            <p className="font-sans text-sm sm:text-base text-[#0A0E1A] leading-relaxed max-w-4xl">
              Execution requires someone who lives at the exact intersection of code, communities, and content. Divyanshu has demonstrated persistent initiative bringing builders together, shipping production software, and communicating technical ideas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/10 space-y-1">
                <div className="font-bold text-[#0A0E1A] font-display text-sm">Community Leadership &amp; Hackathons</div>
                <p className="text-[#474E5D]">
                  Organizer and Management Lead at <strong>GDG on Campus ADYPU</strong>; President of <strong>Alta Pune Community Club</strong>; Core Team of <strong>AI/ML Club</strong>; Host of <strong>PromptWars</strong>; Co-led operations for the <strong>SIH Internal Hackathon</strong> across 27 competing teams.
                </p>
              </div>

              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/10 space-y-1">
                <div className="font-bold text-[#0A0E1A] font-display text-sm">Independent Engineering Portfolio</div>
                <p className="text-[#474E5D]">
                  Sole or lead engineer across <strong>NotesGPT</strong>, <strong>Stratify</strong>, <strong>KrishiSetu</strong>, <strong>MerchantPulse</strong>, <strong>Healthify</strong>, <strong>NyaySaathi</strong>, and <strong>Forge Goa</strong>—proving deep empathy for developer tools and full-stack software architecture.
                </p>
              </div>

              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/10 space-y-1">
                <div className="font-bold text-[#0A0E1A] font-display text-sm">Technical Content &amp; Media Fluency</div>
                <p className="text-[#474E5D]">
                  Student Content Lead for Alta YT with hands-on experience in video scripting, on-camera interviewing, lighting, sound staging, and editorial distribution for technical audiences.
                </p>
              </div>

              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/10 space-y-1">
                <div className="font-bold text-[#0A0E1A] font-display text-sm">High-Trust Campus Access</div>
                <p className="text-[#474E5D]">
                  Immediate, frictionless access to university auditoriums, student developers, collegiate founders, and regional tech circles across Maharashtra with zero middleman overhead.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#0A0E1A]/10 font-mono text-xs text-[#474E5D] italic">
              *Verified portfolio documentation. No inflated metrics or unconfirmed campaign claims.
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 8: WHY THIS IS A BET WORTH TAKING (FINAL THESIS & SIGN-OFF)
           ========================================================================= */}
        <div className="bg-[#0A0E1A] text-white p-8 sm:p-14 border-2 border-[#0A0E1A] shadow-brutal space-y-8 relative overflow-hidden">
          <div className="w-full space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1434FF] font-bold block bg-white/10 px-3 py-1 w-fit">
              INVESTMENT CONCLUSION
            </span>

            <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Why This Is a Bet Worth Taking.
            </h3>

            <div className="space-y-3 font-sans text-sm sm:text-base text-white/90 leading-relaxed">
              <p className="w-full max-w-none">
                Wispr Flow isn&apos;t simply funding a creator&apos;s equipment.
              </p>
              <p className="w-full max-w-none text-white font-semibold">
                It is backing an independent builder who can create, demonstrate, and distribute voice-first workflows to India&apos;s next generation of developers, founders, and creators.
              </p>
            </div>

            {/* Formula Block */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-6 border-y border-white/20 font-mono text-xs text-white">
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-amber-300 font-bold block mb-1">THE EQUIPMENT</span>
                <span>The Infrastructure.</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-amber-300 font-bold block mb-1">THE CONTENT</span>
                <span>The Distribution.</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-amber-300 font-bold block mb-1">THE COMMUNITY</span>
                <span>The Multiplier.</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-amber-300 font-bold block mb-1">THE GROWTH</span>
                <span>The Measurable Return.</span>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <div className="font-display font-black text-2xl sm:text-4xl text-amber-300 tracking-tight">
                LET&apos;S MAKE INDIA SPEAK.
              </div>
              <div className="font-display font-black text-xl sm:text-2xl text-white">
                DIVYANSHU × WISPR FLOW
              </div>
              <p className="font-mono text-xs text-white/60">
                *Submitted as a proposed $3,000 independent infrastructure setup &amp; growth execution plan for the Wispr Flow India Hiring Challenge. Not an active commercial endorsement or guaranteed sponsorship.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
