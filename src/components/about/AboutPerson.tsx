"use client";

import { useState } from "react";
import { Camera, Compass, Terminal, Sparkles, BookOpen, GraduationCap, Briefcase, Award, ExternalLink } from "lucide-react";
import { EXPERIENCES } from "@/data/experience";

export default function AboutPerson() {
  const [activeSubTab, setActiveSubTab] = useState<"facets" | "timeline">("facets");

  const facets = [
    {
      icon: Camera,
      title: "Nature & 35mm Prime Photography",
      desc: "Western Ghats mist, raw landscapes, and framing stillness. An observational habit that directly informs my spatial and typographic software design.",
      tag: "OBSERVATION",
      link: {
        url: "https://in.pinterest.com/sinhadeep0206/",
        label: "Visual Boards (@sinhadeep0206)",
      },
    },
    {
      icon: Terminal,
      title: "Emerging Tooling & Voice Runtimes",
      desc: "Voice-first pipelines, local WebLLM inference, and custom desktop hardware. Obsessed with closing the latency gap between thought and terminal execution.",
      tag: "CURIOSITY",
      badge: "⚡ WebGPU · Ollama · 154 WPM",
    },
    {
      icon: Compass,
      title: "Community Architecture",
      desc: "Cultivating collegiate builder density, hackathon guilds, and sustained peer energy. Culture precedes code—getting 350+ builders into one room to ship.",
      tag: "MOMENTUM",
      badge: "🏛️ GDG ADYPU · Alta Club Pres.",
    },
    {
      icon: BookOpen,
      title: "Continuous Synthesis",
      desc: "Connecting principles across APMC mandis, contract law, mining safety radar, and alpine field perspective to solve messy real-world problems.",
      tag: "SYNTHESIS",
      badge: "🌐 AgriTech · FinTech · Legal AI",
    },
  ];

  return (
    <section id="about" className="pt-36 pb-36 sm:pt-48 sm:pb-48 bg-[#F8F7F2] border-b-2 border-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#0A0E1A]/20">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#0A0E1A] font-bold block mb-2">
              SECTION 07 · THE BUILDER PROFILE
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[#0A0E1A] tracking-tight">
              Outside the product, there is a person.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-serif italic text-xl sm:text-2xl text-[#1434FF] max-w-md font-semibold">
            Unscripted curiosities, visual storytelling, and verified foundation.
          </p>
        </div>

        {/* View Switcher: Facets vs. Timeline */}
        <div className="flex flex-wrap items-center gap-3 mb-10 font-mono text-xs uppercase font-bold">
          <button
            onClick={() => setActiveSubTab("facets")}
            className={`px-5 py-2.5 border-2 border-[#0A0E1A] transition-all flex items-center gap-2 ${
              activeSubTab === "facets"
                ? "bg-[#0A0E1A] text-white shadow-brutal"
                : "bg-white text-[#0A0E1A] hover:bg-[#EEEDE7]"
            }`}
          >
            <Compass className="w-4 h-4 text-[#C6F24F]" />
            <span>01 · Creative Facets & Storytelling</span>
          </button>

          <button
            onClick={() => setActiveSubTab("timeline")}
            className={`px-5 py-2.5 border-2 border-[#0A0E1A] transition-all flex items-center gap-2 ${
              activeSubTab === "timeline"
                ? "bg-[#1434FF] text-white shadow-brutal"
                : "bg-white text-[#0A0E1A] hover:bg-[#EEEDE7]"
            }`}
          >
            <Briefcase className="w-4 h-4 text-amber-300" />
            <span>02 · Academic & Professional Record</span>
          </button>
        </div>

        {/* VIEW 1: 4 Facets */}
        {activeSubTab === "facets" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facets.map((facet, idx) => {
              const Icon = facet.icon;
              return (
                <div
                  key={facet.title}
                  className="bg-white p-6 border-2 border-[#0A0E1A] shadow-brutal flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-[#474E5D] mb-4 pb-2 border-b border-[#0A0E1A]/10 font-bold">
                      <span>FACET 0{idx + 1}</span>
                      <span className="text-[#0A0E1A]">{facet.tag}</span>
                    </div>

                    <Icon className="w-6 h-6 text-[#1434FF] mb-4" />

                    <h3 className="font-display font-bold text-xl text-[#0A0E1A] mb-2 leading-snug">
                      {facet.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#0A0E1A] leading-relaxed font-sans mb-4">
                      {facet.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#0A0E1A]/10 font-mono text-[11px]">
                    {facet.link ? (
                      <a
                        href={facet.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#1434FF] hover:text-[#0A0E1A] font-bold hover:underline transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{facet.link.label}</span>
                      </a>
                    ) : (
                      <span className="text-[#474E5D] font-semibold">
                        {facet.badge}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW 2: Verified Timeline */}
        {activeSubTab === "timeline" && (
          <div className="bg-white border-2 border-[#0A0E1A] shadow-brutal p-6 sm:p-8 space-y-6">
            {/* Education Banner */}
            <div className="p-4 bg-[#F8F7F2] border border-[#0A0E1A] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#1434FF] shrink-0" />
                <div>
                  <span className="font-bold text-sm text-[#0A0E1A] block">
                    B.Tech in Artificial Intelligence & Data Science
                  </span>
                  <span className="text-[#474E5D]">
                    Alta School of Technology / Ajeenkya DY Patil University, Pune
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 bg-[#0A0E1A] text-white font-bold shrink-0 self-start sm:self-auto">
                2025 – 2029 (Current Degree)
              </span>
            </div>

            {/* Experience Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="p-4 border border-[#0A0E1A]/20 bg-[#F8F7F2] flex flex-col justify-between space-y-2"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-[#474E5D] mb-1">
                      <span className="font-bold text-[#1434FF] text-[11px] uppercase">{exp.type}</span>
                      <span className="font-semibold text-[#0A0E1A] text-[11px]">{exp.timeline}</span>
                    </div>
                    <h4 className="font-display font-bold text-base text-[#0A0E1A] leading-snug">
                      {exp.role}
                    </h4>
                    <div className="font-mono text-xs text-[#474E5D] font-medium">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#0A0E1A]/10 flex flex-wrap gap-1 font-mono text-[10px]">
                    {exp.skills.slice(0, 3).map((sk) => (
                      <span key={sk} className="px-1.5 py-0.5 bg-white border border-[#0A0E1A]/20 text-[#0A0E1A]">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
