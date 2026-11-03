"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Terminal, 
  Cpu,
  BookOpen,
  Github,
  Compass,
  Radar,
  Gauge,
  Flame,
  Award
} from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "decisions" | "articles">("overview");
  
  // Specific interactive sub-view for NotesGPT
  const [notesGptView, setNotesGptView] = useState<"landing" | "study-station" | "settings">("landing");
  // Interactive simulator state for Climbit
  const [climbitAction, setClimbitAction] = useState<"heat-pump" | "ev-fleet" | "solar">("heat-pump");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isNotesGpt = project.id === "notesgpt";
  const isClimbit = project.id === "climbit";
  const isBrainworks = project.id === "brainworks";
  const isKrishiSetu = project.id === "krishisetu";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-white border-2 border-[#0A0E1A] shadow-brutal-lg max-h-[92vh] flex flex-col overflow-hidden text-[#0A0E1A] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Top Chrome */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-[#0A0E1A] bg-[#F8F7F2]">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#1434FF] border border-[#0A0E1A]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#737782]">
              CASE STUDY ARCHIVE · {project.badge}
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 font-mono text-[10px] bg-white border border-[#0A0E1A]">
              STATUS: {project.status.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-[#0A0E1A] hover:bg-[#1434FF] text-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>Live Deployment</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-[#0A0E1A] hover:bg-[#1434FF] text-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>
            ) : null}

            <button
              onClick={onClose}
              className="p-1.5 bg-white hover:bg-[#E63946] hover:text-white border border-[#0A0E1A] transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Header Block */}
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#1434FF] font-semibold">
              <span>{project.category}</span>
              <span>·</span>
              <span className="text-[#737782]">{project.confidenceLevel}</span>
            </div>
            <h2 id="modal-title" className="font-display font-black text-3xl sm:text-5xl tracking-tight mb-3">
              {project.title}
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-[#737782]">
              {project.tagline}
            </p>
          </div>

          {/* Interactive or Visual Showcase Frame */}
          <div className="relative w-full rounded border-2 border-[#0A0E1A] bg-[#0A0E1A] overflow-hidden shadow-brutal">
            {isNotesGpt ? (
              // Interactive NotesGPT Tri-View Station
              <div className="bg-[#FFFFFF] p-6 text-[#0A0E1A] scanlines">
                <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#0A0E1A] mb-4 gap-2">
                  <div className="font-mono text-xs font-bold uppercase flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#0A0E1A]" />
                    <span>NOTESGPT RESEARCH WORKSTATION · INTERACTIVE PREVIEWS</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-xs">
                    <button
                      onClick={() => setNotesGptView("landing")}
                      className={`px-3 py-1 border border-[#0A0E1A] uppercase ${
                        notesGptView === "landing" ? "bg-[#0A0E1A] text-white" : "bg-white hover:bg-[#EEEDE7]"
                      }`}
                    >
                      1. Ingestion Interface
                    </button>
                    <button
                      onClick={() => setNotesGptView("study-station")}
                      className={`px-3 py-1 border border-[#0A0E1A] uppercase ${
                        notesGptView === "study-station" ? "bg-[#0A0E1A] text-white" : "bg-white hover:bg-[#EEEDE7]"
                      }`}
                    >
                      2. Grounded RAG Shell
                    </button>
                    <button
                      onClick={() => setNotesGptView("settings")}
                      className={`px-3 py-1 border border-[#0A0E1A] uppercase ${
                        notesGptView === "settings" ? "bg-[#0A0E1A] text-white" : "bg-white hover:bg-[#EEEDE7]"
                      }`}
                    >
                      3. Local / WebGPU Config
                    </button>
                  </div>
                </div>

                {/* Sub-view 1: Landing Interface */}
                {notesGptView === "landing" && (
                  <div className="p-6 border border-[#0A0E1A] bg-white space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs text-[#737782] border-b border-[#0A0E1A]/10 pb-2">
                      <span>MODULE: COMPILATION & INGESTION</span>
                      <span className="text-emerald-700 font-bold">LATENCY OPTIMIZED (&lt;15s)</span>
                    </div>
                    <div className="max-w-xl">
                      <h4 className="font-display font-black text-2xl uppercase tracking-tight text-[#0A0E1A]">
                        Compile textbooks & notes. Ace your exams.
                      </h4>
                      <p className="text-sm text-[#0A0E1A]/80 mt-2 font-mono">
                        Drop course syllabi, lecture slide decks, textbook chapters, and handwritten notes.
                        The engine parses tables, diagrams, and formulas into an indexed vector graph.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                      <div className="p-3 bg-[#F8F7F2] border border-[#0A0E1A]">
                        <span className="font-bold block mb-1">01. INGESTION</span>
                        <span className="text-[#737782]">PDF.js, OfficeParser, Tesseract.js OCR</span>
                      </div>
                      <div className="p-3 bg-[#F8F7F2] border border-[#0A0E1A]">
                        <span className="font-bold block mb-1">02. DUAL VECTOR</span>
                        <span className="text-[#737782]">Firestore cloud + IndexedDB local TF-IDF</span>
                      </div>
                      <div className="p-3 bg-[#F8F7F2] border border-[#0A0E1A]">
                        <span className="font-bold block mb-1">03. STUDY KIT</span>
                        <span className="text-[#737782]">1 call: revision sheets, flashcards & exams</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub-view 2: Study Station */}
                {notesGptView === "study-station" && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-[#0A0E1A] p-4 bg-white">
                    <div className="md:col-span-4 border-r border-[#0A0E1A]/20 pr-4 space-y-3 font-mono text-xs">
                      <span className="font-bold uppercase block text-[#0A0E1A] border-b border-[#0A0E1A]/10 pb-1">
                        Indexed Sources (4)
                      </span>
                      <div className="p-2 bg-[#F8F7F2] border border-[#0A0E1A]/40 flex items-center justify-between">
                        <span>Database_Systems_Korth.pdf</span>
                        <span className="text-emerald-600 font-bold">128 Chunks</span>
                      </div>
                      <div className="p-2 bg-[#F8F7F2] border border-[#0A0E1A]/40 flex items-center justify-between">
                        <span>Unit_3_Concurrency_Slides.pptx</span>
                        <span className="text-emerald-600 font-bold">42 Chunks</span>
                      </div>
                      <div className="p-2 bg-[#F8F7F2] border border-[#0A0E1A]/40 flex items-center justify-between">
                        <span>Prof_Handwritten_Notes.pdf</span>
                        <span className="text-emerald-600 font-bold">OCR Indexed</span>
                      </div>
                    </div>

                    <div className="md:col-span-8 space-y-3 font-mono text-xs">
                      <span className="font-bold uppercase block text-[#0A0E1A] border-b border-[#0A0E1A]/10 pb-1">
                        Grounded Study Assistant (RAG Pipeline)
                      </span>
                      <div className="p-3 bg-[#F4F4F0] border border-[#0A0E1A]/30 text-xs leading-relaxed space-y-2">
                        <div className="text-[#737782]">Prompt: Explain Strict 2-Phase Locking (S2PL) vs Rigorous 2PL with citation.</div>
                        <div className="text-[#0A0E1A] font-medium">
                          &quot;Under Strict 2PL (Korth §15.1.2), all exclusive (X) locks held by a transaction must be held until the transaction commits or aborts. In contrast, Rigorous 2PL requires ALL locks (both Shared and Exclusive) to be held until commit, guaranteeing strict serializability.&quot;
                        </div>
                        <div className="text-[10px] text-[#1434FF] font-bold">
                          [GROUNDED CITATION: Database_Systems_Korth.pdf, Page 412, Paragraph 3]
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub-view 3: System Settings */}
                {notesGptView === "settings" && (
                  <div className="p-6 border border-[#0A0E1A] bg-white space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-[#0A0E1A]/10 pb-2">
                      <span className="font-bold uppercase">INFERENCE ENGINE CONFIGURATION</span>
                      <span className="text-emerald-600 font-bold">ACTIVE LOCAL ENGINE</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-3 bg-[#F8F7F2] border border-[#0A0E1A]">
                        <span className="font-bold text-[#0A0E1A] block mb-1">INFERENCE RUNTIME MODE</span>
                        <div className="space-y-1.5 mt-2">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="inference" checked readOnly className="accent-black" />
                            <span>Private Local Inference (Ollama / deepseek-r1:8b, gemma2:2b)</span>
                          </label>
                          <label className="flex items-center gap-2 text-[#737782]">
                            <input type="radio" name="inference" disabled />
                            <span>In-Browser WebLLM (WebGPU Accelerated Weights)</span>
                          </label>
                          <label className="flex items-center gap-2 text-[#737782]">
                            <input type="radio" name="inference" disabled />
                            <span>Cloud Hosted API (Gemini 2.0 Flash via Vercel AI SDK)</span>
                          </label>
                        </div>
                      </div>

                      <div className="p-3 bg-[#F8F7F2] border border-[#0A0E1A] space-y-2">
                        <span className="font-bold text-[#0A0E1A] block">RETRIEVAL PARAMETERS</span>
                        <div className="flex justify-between">
                          <span>Top-K Chunk Limit:</span>
                          <span className="font-bold">k = 5 Chunks</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Temperature Calibrator:</span>
                          <span className="font-bold">0.15 (Strict Determinism)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Endpoint URL:</span>
                          <span className="font-bold">http://localhost:11434 (Ollama)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-[#0A0E1A] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#737782] gap-2">
                  <span className="font-bold text-[#0A0E1A]">RAG PIPELINE:</span>
                  <span>Document Text/OCR</span>
                  <span>→</span>
                  <span>Vector Indexing</span>
                  <span>→</span>
                  <span>Two-Stage Similarity</span>
                  <span>→</span>
                  <span>1-Call Structured Kit</span>
                  <span>→</span>
                  <span>Grounding Verification</span>
                </div>
              </div>
            ) : isClimbit ? (
              // Interactive Climbit Decision Engine Cockpit
              <div className="bg-[#064E3B] text-white p-6 font-mono text-xs">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-emerald-500/30 mb-4 gap-2">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold">
                    <Gauge className="w-4 h-4" />
                    <span>CLIMBIT DECISION ENGINE · DETERMINISTIC CARBON ROI</span>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-400 text-[#064E3B] font-black text-[10px] uppercase">
                    34 Tests Passing · Zod Validated
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div 
                    onClick={() => setClimbitAction("heat-pump")}
                    className={`p-3 border cursor-pointer transition-all ${
                      climbitAction === "heat-pump" ? "bg-emerald-900 border-emerald-300 shadow-brutal-sm" : "bg-emerald-950/60 border-emerald-700/60 opacity-80"
                    }`}
                  >
                    <div className="flex justify-between text-[11px] text-emerald-400">
                      <span>INTERVENTION A</span>
                      <span>ROI: 3.4 yrs</span>
                    </div>
                    <div className="text-white font-bold text-sm mt-1">Commercial Heat Pump</div>
                    <div className="text-emerald-200 text-xs mt-2">-42.8 tCO2e/yr · Math Verified</div>
                  </div>

                  <div 
                    onClick={() => setClimbitAction("ev-fleet")}
                    className={`p-3 border cursor-pointer transition-all ${
                      climbitAction === "ev-fleet" ? "bg-emerald-900 border-emerald-300 shadow-brutal-sm" : "bg-emerald-950/60 border-emerald-700/60 opacity-80"
                    }`}
                  >
                    <div className="flex justify-between text-[11px] text-emerald-400">
                      <span>INTERVENTION B</span>
                      <span>ROI: 2.1 yrs</span>
                    </div>
                    <div className="text-white font-bold text-sm mt-1">Last-Mile EV Transition</div>
                    <div className="text-emerald-200 text-xs mt-2">-88.2 tCO2e/yr · Math Verified</div>
                  </div>

                  <div 
                    onClick={() => setClimbitAction("solar")}
                    className={`p-3 border cursor-pointer transition-all ${
                      climbitAction === "solar" ? "bg-emerald-900 border-emerald-300 shadow-brutal-sm" : "bg-emerald-950/60 border-emerald-700/60 opacity-80"
                    }`}
                  >
                    <div className="flex justify-between text-[11px] text-emerald-400">
                      <span>INTERVENTION C</span>
                      <span>ROI: 4.8 yrs</span>
                    </div>
                    <div className="text-white font-bold text-sm mt-1">Rooftop Solar + Storage</div>
                    <div className="text-emerald-200 text-xs mt-2">-124.0 tCO2e/yr · Math Verified</div>
                  </div>
                </div>

                <div className="p-3 bg-emerald-950 border border-emerald-500/40 text-xs text-emerald-100 space-y-1.5">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span>SEPARATION OF CONCERNS VERIFICATION:</span>
                  </div>
                  <div>Deterministic TS math computed: Net emissions delta, payback timeline, capital expenditure.</div>
                  <div className="text-white/80">Gemini layer provides natural negotiation & grant subsidy synthesis via Next.js Server Actions.</div>
                </div>
              </div>
            ) : isBrainworks ? (
              // Interactive Brainworks Radar & Safety Telemetry Cockpit
              <div className="bg-[#0F172A] text-white p-6 font-mono text-xs">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-amber-500/30 mb-4 gap-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <Radar className="w-4 h-4 animate-spin" />
                    <span>BRAINWORKS · SIH 2026 CHALLENGE SIH26007 · RADAR MESH</span>
                  </div>
                  <span className="px-2 py-0.5 bg-amber-400 text-black font-black text-[10px] uppercase">
                    2nd Place Institutional Finish
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-7 bg-[#1E293B] border border-amber-500/30 p-4 space-y-3">
                    <span className="text-amber-300 font-bold block text-xs">SIMULATED OPEN-CAST MINE PIT RADAR</span>
                    <div className="aspect-[16/9] bg-black/60 border border-amber-400/20 relative flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0,transparent_70%)]" />
                      <div className="w-24 h-24 rounded-full border border-amber-400/30 animate-ping" />
                      <div className="w-48 h-48 rounded-full border border-amber-400/20 absolute" />
                      <div className="text-center z-10 space-y-1">
                        <span className="text-amber-400 font-bold text-xs">DUMPER_HAUL_#04</span>
                        <div className="text-[10px] text-white/70">Distance: 14.2m · Rel Velocity: -8.4 km/h</div>
                        <div className="px-2 py-0.5 bg-red-600 text-white font-bold text-[10px] inline-block animate-pulse">
                          COLLISION ALERT (sub-50ms Edge AI)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-[#1E293B] border border-amber-500/30 p-4 space-y-2">
                    <span className="text-amber-300 font-bold block text-xs">EDGE TINYML SPECIFICATIONS</span>
                    <div className="text-white/80 space-y-1.5 text-xs">
                      <div>· mmWave Radar: penetration through dense iron dust & fog</div>
                      <div>· Inference: On-vehicle TinyML microcontroller model</div>
                      <div>· Latency: Sub-50ms alert trigger without cloud network</div>
                      <div>· Team: Built with Sahil Mane while co-running internal hackathon</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Standard Real Product Screenshot
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            )}
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b-2 border-[#0A0E1A] gap-2 font-mono text-xs uppercase font-bold overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 border-t-2 border-x-2 border-[#0A0E1A] transition-colors whitespace-nowrap ${
                activeTab === "overview" ? "bg-[#0A0E1A] text-white -mb-[2px]" : "bg-[#F8F7F2] hover:bg-[#EEEDE7]"
              }`}
            >
              1. Problem & Solution
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-4 py-2 border-t-2 border-x-2 border-[#0A0E1A] transition-colors whitespace-nowrap ${
                activeTab === "architecture" ? "bg-[#0A0E1A] text-white -mb-[2px]" : "bg-[#F8F7F2] hover:bg-[#EEEDE7]"
              }`}
            >
              2. Technical Architecture
            </button>
            <button
              onClick={() => setActiveTab("decisions")}
              className={`px-4 py-2 border-t-2 border-x-2 border-[#0A0E1A] transition-colors whitespace-nowrap ${
                activeTab === "decisions" ? "bg-[#0A0E1A] text-white -mb-[2px]" : "bg-[#F8F7F2] hover:bg-[#EEEDE7]"
              }`}
            >
              3. Decisions & Lessons
            </button>
            <button
              onClick={() => setActiveTab("articles")}
              className={`px-4 py-2 border-t-2 border-x-2 border-[#0A0E1A] transition-colors whitespace-nowrap ${
                activeTab === "articles" ? "bg-[#0A0E1A] text-white -mb-[2px]" : "bg-[#F8F7F2] hover:bg-[#EEEDE7]"
              }`}
            >
              4. Articles & Citations ({project.articles?.length || 0})
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-[#F8F7F2] border border-[#0A0E1A] space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#E63946] uppercase">
                    <AlertTriangle className="w-4 h-4" />
                    <span>The Problem Being Explored</span>
                  </div>
                  <p className="text-sm text-[#0A0E1A]/85 leading-relaxed font-sans">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 bg-[#F8F7F2] border border-[#0A0E1A] space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1434FF] uppercase">
                    <Lightbulb className="w-4 h-4" />
                    <span>The Product Idea & Execution</span>
                  </div>
                  <p className="text-sm text-[#0A0E1A]/85 leading-relaxed font-sans">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* My Role and Contribution */}
              <div className="p-5 bg-white border border-[#0A0E1A] space-y-2 shadow-brutal-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#737782] block">
                  MY ROLE & PERSONAL CONTRIBUTION:
                </span>
                <p className="text-sm sm:text-base text-[#0A0E1A] font-medium leading-relaxed">
                  {project.roleAndContribution}
                </p>
              </div>

              {/* Demonstrated vs Roadmap (Crucial for KrishiSetu and ambitious projects) */}
              {project.demonstratedVsRoadmap && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 bg-[#F8F7F2] border border-[#0A0E1A]">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase text-emerald-800 block mb-2">
                      DEMONSTRATED IN CURRENT BUILD:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#0A0E1A]">
                      {project.demonstratedVsRoadmap.demonstrated.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-mono text-xs font-bold uppercase text-[#737782] block mb-2">
                      FUTURE ECOSYSTEM ROADMAP:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#737782]">
                      {project.demonstratedVsRoadmap.roadmap.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full border border-[#737782] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#737782] block">
                  DISTINCTIVE FEATURES & CAPABILITIES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3 bg-[#F8F7F2] border border-[#0A0E1A]/20 flex items-start gap-2.5 text-xs text-[#0A0E1A]">
                      <CheckCircle2 className="w-4 h-4 text-[#1434FF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Architecture */}
          {activeTab === "architecture" && (
            <div className="space-y-6">
              <div className="p-5 bg-[#F8F7F2] border border-[#0A0E1A] space-y-4">
                <div className="flex items-center justify-between border-b border-[#0A0E1A]/10 pb-2">
                  <span className="font-mono text-xs font-bold uppercase text-[#0A0E1A] flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#1434FF]" />
                    <span>VERIFIED TECH STACK & ARCHITECTURE</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#737782]">EVIDENCE-BACKED ONLY</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white border border-[#0A0E1A] font-mono text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-white border border-[#0A0E1A] space-y-2 shadow-brutal-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#737782] block">
                  CORE ENGINEERING CHALLENGE:
                </span>
                <p className="text-sm text-[#0A0E1A]/90 leading-relaxed font-mono">
                  {project.engineeringChallenges}
                </p>
              </div>

              <div className="p-4 bg-[#EEEDE7] border border-[#0A0E1A]/30 font-mono text-xs text-[#737782]">
                <span className="font-bold text-[#0A0E1A] block mb-1">FACTUAL DEPLOYMENT NOTE:</span>
                {project.statusNotes}
              </div>
            </div>
          )}

          {/* Tab 3: Decisions */}
          {activeTab === "decisions" && (
            <div className="space-y-6">
              {project.founderStory && (
                <div className="p-5 bg-[#F8F7F2] border-2 border-[#0A0E1A] space-y-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1434FF] block">
                    FOUNDER REFLECTION & ORIGIN STORY:
                  </span>
                  <p className="text-sm sm:text-base text-[#0A0E1A] leading-relaxed font-serif italic">
                    &quot;{project.founderStory}&quot;
                  </p>
                </div>
              )}

              <div className="p-5 bg-[#F8F7F2] border border-[#0A0E1A] space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1434FF] block">
                  DESIGN & VISUAL SYSTEM CHOICES:
                </span>
                <p className="text-sm text-[#0A0E1A]/85 leading-relaxed">
                  {project.designDecisions}
                </p>
              </div>

              <div className="p-5 bg-white border border-[#0A0E1A] space-y-2 shadow-brutal-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E63946] block">
                  CHALLENGES & LESSONS LEARNED:
                </span>
                <p className="text-sm text-[#0A0E1A]/85 leading-relaxed font-sans">
                  {project.lessonsLearned}
                </p>
              </div>
            </div>
          )}

          {/* Tab 4: Articles & Citations */}
          {activeTab === "articles" && (
            <div className="space-y-4">
              <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A]/40 font-mono text-xs text-[#737782]">
                Original published write-ups, Dev.to deep-dives, GitHub repositories, and LinkedIn build-in-public logs backing this project.
              </div>

              {project.articles && project.articles.length > 0 ? (
                <div className="space-y-3">
                  {project.articles.map((art, idx) => (
                    <div 
                      key={idx}
                      className="p-4 bg-white border-2 border-[#0A0E1A] shadow-brutal-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 font-mono text-xs">
                          <span className="px-2 py-0.5 bg-[#0A0E1A] text-white font-bold uppercase text-[10px]">
                            {art.platform}
                          </span>
                          {art.shortUrl && (
                            <span className="text-[#737782]">Shortlink: {art.shortUrl}</span>
                          )}
                        </div>
                        <h4 className="font-display font-bold text-base text-[#0A0E1A]">
                          {art.title}
                        </h4>
                        {art.note && (
                          <p className="text-xs text-[#737782] font-sans">
                            {art.note}
                          </p>
                        )}
                      </div>

                      <a
                        href={art.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#1434FF] hover:bg-[#0A0E1A] text-white font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-[#0A0E1A] shrink-0"
                      >
                        <span>Open Article</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center font-mono text-xs text-[#737782] border border-dashed border-[#0A0E1A]/30">
                  No direct external article published yet for this project.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t-2 border-[#0A0E1A] bg-[#F8F7F2] font-mono text-xs">
          <span className="text-[#737782]">
            Category: <strong className="text-[#0A0E1A]">{project.category}</strong>
          </span>

          <div className="flex items-center gap-3">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#1434FF] hover:bg-[#0A0E1A] text-white font-bold uppercase tracking-wider flex items-center gap-2 transition-colors border border-[#0A0E1A] shadow-brutal-sm"
              >
                <span>Visit Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#0A0E1A] hover:bg-[#1434FF] text-white font-bold uppercase tracking-wider flex items-center gap-2 transition-colors border border-[#0A0E1A] shadow-brutal-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            ) : null}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white hover:bg-[#EEEDE7] border border-[#0A0E1A] uppercase tracking-wider font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
