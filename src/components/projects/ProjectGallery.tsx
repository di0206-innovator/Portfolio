"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  ArrowUpRight, 
  ExternalLink, 
  Sparkles, 
  Shield, 
  Cpu, 
  Activity, 
  Sprout, 
  HeartPulse, 
  Compass, 
  Terminal, 
  Gauge, 
  Radar, 
  BookOpen,
  Github,
  CheckCircle2,
  Calendar,
  Clock
} from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import { FIELD_NOTES, FieldNote } from "@/data/fieldNotes";
import ProjectModal from "./ProjectModal";

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryMode, setGalleryMode] = useState<"projects" | "field-notes">("projects");

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "notesgpt":
        return Terminal;
      case "stratify":
        return Cpu;
      case "krishisetu":
        return Sprout;
      case "healthify":
        return HeartPulse;
      case "climbit":
        return Gauge;
      case "nyaysaathi":
        return Shield;
      case "merchantpulse":
        return Activity;
      case "forgegoa":
        return Compass;
      case "brainworks":
        return Radar;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="selected-work" className="pt-36 pb-48 sm:pt-48 sm:pb-64 bg-[#F8F7F2] border-b-2 border-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#0A0E1A]/20">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#0A0E1A] font-bold block mb-2">
              SECTION 03 · SELECTED WORK & FIELD NOTES
            </span>
            <h2 className="font-display font-black text-4xl sm:text-7xl text-[#0A0E1A] tracking-tight">
              Out in the world.
            </h2>
            <p className="font-serif italic text-3xl sm:text-5xl text-[#1434FF] mt-1 font-semibold">
              Not just in a deck.
            </p>
          </div>
          <p className="mt-6 md:mt-0 font-sans text-sm sm:text-base text-[#0A0E1A] max-w-md leading-relaxed font-medium">
            Nine builds & experiments. Seven published field notes. One consistent obsession with turning ideas into functional, deployed outcomes.
          </p>
        </div>

        {/* View Switcher: Builds vs. Field Notes */}
        <div className="flex flex-wrap items-center gap-3 mb-10 font-mono text-xs uppercase font-bold">
          <button
            onClick={() => setGalleryMode("projects")}
            className={`px-5 py-2.5 border-2 border-[#0A0E1A] transition-all flex items-center gap-2 ${
              galleryMode === "projects"
                ? "bg-[#0A0E1A] text-white shadow-brutal"
                : "bg-white text-[#0A0E1A] hover:bg-[#EEEDE7]"
            }`}
          >
            <Cpu className="w-4 h-4 text-[#C6F24F]" />
            <span>01 · 9 Product Builds & Case Studies</span>
          </button>

          <button
            onClick={() => setGalleryMode("field-notes")}
            className={`px-5 py-2.5 border-2 border-[#0A0E1A] transition-all flex items-center gap-2 ${
              galleryMode === "field-notes"
                ? "bg-[#1434FF] text-white shadow-brutal"
                : "bg-white text-[#0A0E1A] hover:bg-[#EEEDE7]"
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>02 · Field Notes & Published Writing (7 Logs)</span>
          </button>
        </div>

        {/* MODE 1: 9 Case Studies Grid */}
        {galleryMode === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 sm:gap-y-24">
            {PROJECTS.map((project, index) => {
              const Icon = getProjectIcon(project.id);
              const isNotesGpt = project.id === "notesgpt";
              const isClimbit = project.id === "climbit";
              const isBrainworks = project.id === "brainworks";

              // Visual styling per project
              let cardBg = "bg-white";
              let textColor = "text-[#0A0E1A]";
              let borderColor = "border-[#0A0E1A]";
              let accentBg = "bg-[#E8E7DF]";

              if (project.id === "nyaysaathi") {
                cardBg = "bg-[#0A0E1A]";
                textColor = "text-white";
                borderColor = "border-[#374151]";
                accentBg = "bg-[#E63946]/20 text-[#E63946]";
              } else if (project.id === "merchantpulse") {
                cardBg = "bg-[#0D1B2A]";
                textColor = "text-white";
                borderColor = "border-[#1E3A8A]";
                accentBg = "bg-amber-400/20 text-amber-300";
              } else if (project.id === "krishisetu") {
                cardBg = "bg-[#1B4332]";
                textColor = "text-white";
                borderColor = "border-[#2D6A4F]";
                accentBg = "bg-[#D4A373]/30 text-[#F8F7F2]";
              } else if (project.id === "forgegoa") {
                cardBg = "bg-[#166534]";
                textColor = "text-white";
                borderColor = "border-[#000000]";
                accentBg = "bg-[#FDE047] text-[#0A0E1A]";
              } else if (project.id === "healthify") {
                cardBg = "bg-white";
                accentBg = "bg-[#FFCC00] text-[#0A0E1A]";
              } else if (project.id === "stratify") {
                cardBg = "bg-[#F8F7F2]";
                accentBg = "bg-[#C6F24F] text-[#0A0E1A]";
              } else if (isNotesGpt) {
                cardBg = "bg-white scanlines md:col-span-2 lg:col-span-3";
                accentBg = "bg-[#1434FF] text-white";
              } else if (isClimbit) {
                cardBg = "bg-[#064E3B]";
                textColor = "text-white";
                borderColor = "border-[#047857]";
                accentBg = "bg-black text-emerald-300 border border-emerald-300";
              } else if (isBrainworks) {
                cardBg = "bg-[#1E293B]";
                textColor = "text-white";
                borderColor = "border-[#334155]";
                accentBg = "bg-black text-amber-300 border border-amber-300";
              }

              return (
                <div
                  key={project.id}
                  className={`${cardBg} ${textColor} border-2 ${borderColor} shadow-brutal flex flex-col justify-between overflow-hidden transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg group`}
                >
                  {/* Card Top Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between font-mono text-xs mb-3">
                      <span className="font-bold flex items-center gap-1.5 opacity-90">
                        <Icon className="w-3.5 h-3.5" />
                        PROJECT 0{index + 1}
                      </span>
                      <span className={`px-2 py-0.5 text-xs uppercase font-bold tracking-wider ${accentBg} border border-current`}>
                        {project.status}
                      </span>
                    </div>

                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="font-display font-black text-2xl sm:text-3xl tracking-tight mb-2 group-hover:text-[#1434FF] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm opacity-90 leading-relaxed font-sans mb-4 line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Card Media Preview Frame */}
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="relative aspect-[16/10] w-full border-y-2 border-inherit bg-black/10 overflow-hidden cursor-pointer"
                  >
                    {isNotesGpt ? (
                      // Featured NotesGPT Preview Card
                      <div className="w-full h-full bg-white p-5 flex flex-col justify-between font-mono text-xs text-[#0A0E1A] select-none">
                        <div className="flex justify-between items-center border-b border-[#0A0E1A]/20 pb-2">
                          <span className="font-bold text-xs">NOTESGPT ACADEMIC RESEARCH WORKSTATION</span>
                          <span className="text-xs px-2 py-0.5 bg-[#1434FF] text-white font-bold">&lt;15s LATENCY / LOCAL INFERENCE</span>
                        </div>
                        <div className="space-y-1 py-2">
                          <div className="font-bold text-sm">Compile textbooks, PDFs & handwritten notes into structured learning kits.</div>
                          <div className="text-[#474E5D] text-xs font-medium">RAG Vector Index · Ollama (deepseek-r1:8b) · WebLLM WebGPU · Gemini 2.0 Flash</div>
                        </div>
                        <div className="flex justify-between items-center text-xs text-[#1434FF] font-bold pt-2 border-t border-[#0A0E1A]/10">
                          <span>Dev.to Architecture Deep-Dive + GitHub Open Source</span>
                          <span className="underline">Inspect 3 Station Views →</span>
                        </div>
                      </div>
                    ) : isClimbit ? (
                      // Climbit Tactical Terminal Preview
                      <div className="w-full h-full bg-[#064E3B] p-5 flex flex-col justify-between font-mono text-xs text-white select-none">
                        <div className="flex justify-between items-center border-b border-emerald-500/30 pb-2">
                          <span className="font-bold text-xs text-emerald-300">CLIMBIT DECISION ENGINE</span>
                          <span className="px-2 py-0.5 bg-black text-emerald-300 border border-emerald-300 font-bold text-xs">RANK #449 SPRINT</span>
                        </div>
                        <div className="space-y-1 py-2">
                          <div className="text-white font-bold text-sm">Deterministic Carbon Math + Zod AI Guidance</div>
                          <div className="text-emerald-200 text-xs">34 Tests · Server Actions · PromptWars</div>
                        </div>
                        <div className="flex justify-between items-center text-xs text-emerald-300 font-bold pt-2 border-t border-emerald-500/30">
                          <span>12h Sprint</span>
                          <span className="underline">Inspect Engine →</span>
                        </div>
                      </div>
                    ) : isBrainworks ? (
                      // Brainworks Mining Safety Radar Preview
                      <div className="w-full h-full bg-[#1E293B] p-5 flex flex-col justify-between font-mono text-xs text-white select-none">
                        <div className="flex justify-between items-center border-b border-amber-500/30 pb-2">
                          <span className="font-bold text-xs text-amber-300">BRAINWORKS · SIH 2026</span>
                          <span className="px-2 py-0.5 bg-black text-amber-300 border border-amber-300 font-bold text-xs">2ND PLACE</span>
                        </div>
                        <div className="space-y-1 py-2">
                          <div className="text-white font-bold text-sm">Radar & Edge TinyML Collision Sensing</div>
                          <div className="text-slate-300 text-xs">SIH26007 · Sahil Mane · Alert Mesh</div>
                        </div>
                        <div className="flex justify-between items-center text-xs text-amber-400 font-bold pt-2 border-t border-amber-500/30">
                          <span>Radar Mesh</span>
                          <span className="underline">Inspect System →</span>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </div>

                  {/* Card Bottom Controls */}
                  <div className="p-4 flex items-center justify-between font-mono text-xs">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="font-bold uppercase tracking-wider flex items-center gap-1 hover:underline text-inherit"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 hover:bg-black/10 transition-colors rounded"
                          title="Open GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 hover:bg-black/10 transition-colors rounded"
                          title="Open Live Deployment"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* MODE 2: 7 Field Notes & Published Writing */}
        {galleryMode === "field-notes" && (
          <div className="space-y-6">
            <div className="p-4 bg-white border-2 border-[#0A0E1A] shadow-brutal font-mono text-xs text-[#0A0E1A] flex flex-wrap items-center justify-between gap-3">
              <span className="font-bold">
                DOCUMENTED IN PUBLIC: Published articles, architecture essays, sprint breakdowns & founder notes.
              </span>
              <span className="text-[#737782]">
                7 Canonical Articles & Posts on Dev.to and LinkedIn
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FIELD_NOTES.map((note) => {
                const relatedProj = note.relatedProjectId 
                  ? PROJECTS.find(p => p.id === note.relatedProjectId) 
                  : null;

                return (
                  <div
                    key={note.id}
                    className="p-6 bg-white border-2 border-[#0A0E1A] shadow-brutal flex flex-col justify-between transition-all hover:translate-y-[-2px]"
                  >
                    <div>
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between font-mono text-xs mb-3 pb-2 border-b border-[#0A0E1A]/10">
                        <div className="flex items-center gap-2">
                          <span 
                            className="px-2 py-0.5 font-bold uppercase text-[10px] text-white border border-[#0A0E1A]"
                            style={{ backgroundColor: note.platform === "Dev.to" ? "#0A0E1A" : "#0A66C2" }}
                          >
                            {note.platform}
                          </span>
                          <span className="text-[#737782] font-semibold">{note.category}</span>
                        </div>
                        <span className="flex items-center gap-1 text-[#737782]">
                          <Clock className="w-3 h-3" />
                          {note.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-black text-xl text-[#0A0E1A] mb-3 leading-snug">
                        {note.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-[#0A0E1A]/85 font-sans leading-relaxed mb-4 italic">
                        &quot;{note.excerpt}&quot;
                      </p>

                      {/* Takeaways List */}
                      <div className="space-y-1.5 pt-2 border-t border-[#0A0E1A]/10 font-mono text-xs">
                        <span className="font-bold text-[#737782] block text-[10px] uppercase">KEY ARCHITECTURAL TAKEAWAYS:</span>
                        {note.takeaways.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#0A0E1A]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1434FF] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Links Bar */}
                    <div className="pt-5 mt-5 border-t border-[#0A0E1A]/15 flex items-center justify-between font-mono text-xs">
                      {relatedProj ? (
                        <button
                          onClick={() => setSelectedProject(relatedProj)}
                          className="text-[#1434FF] font-bold hover:underline flex items-center gap-1"
                        >
                          <span>Inspect {relatedProj.title} Case Study</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      ) : (
                        <span className="text-[#737782]">Builder Philosophy Log</span>
                      )}

                      <a
                        href={note.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 bg-[#0A0E1A] hover:bg-[#1434FF] text-white font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-[#0A0E1A]"
                      >
                        <span>Read on {note.platform}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Case Study Modal with Full Evidence Tabs */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
