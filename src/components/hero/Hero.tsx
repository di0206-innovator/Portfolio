"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Play, 
  ArrowDown, 
  Mic, 
  ShieldAlert, 
  Activity, 
  Share2, 
  Terminal, 
  Gauge, 
  HeartPulse, 
  Sprout, 
  Radar, 
  Users 
} from "lucide-react";

interface HeroProps {
  onOpenVideo: () => void;
  onExploreBuilds: () => void;
}

export default function Hero({ onOpenVideo, onExploreBuilds }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Gentle parallax scaling (-1 to 1 normalized)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Introduction & Builder Philosophy"
      className="relative min-h-[82vh] flex flex-col justify-between pt-16 sm:pt-20 pb-4 overflow-hidden paper-texture border-b-2 border-[#0A0E1A]"
    >
      {/* Main hero typography & floating cards container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-4 lg:py-6 lg:min-h-[540px]">
        {/* DEDICATED TEXT-SAFE ZONE: High stacking context, bounded width */}
        <div className="relative z-20 max-w-2xl lg:max-w-[440px] xl:max-w-[560px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-5xl sm:text-7xl lg:text-[4.5rem] xl:text-[5.1rem] tracking-tighter text-[#0A0E1A] leading-[0.94] mb-4"
          >
            You&apos;ve seen what I build.
            <br />
            <span className="font-serif italic font-normal text-[#1434FF] block mt-1.5 text-6xl sm:text-8xl lg:text-[5.25rem] xl:text-[6rem]">
              Now see what I can make happen.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg lg:text-xl text-[#0A0E1A] max-w-xl font-sans leading-relaxed mb-5 font-medium"
          >
            I build products, communities and experiences at the intersection of technology, creativity and growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onOpenVideo}
              className="px-6 py-3.5 bg-[#1434FF] text-white font-mono text-xs uppercase tracking-wider font-bold border-2 border-[#0A0E1A] shadow-brutal flex items-center gap-2.5 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <Play className="w-4 h-4 fill-current text-[#F5B700]" />
              <span>Watch the 3-Minute Pitch</span>
            </button>

            <button
              onClick={onExploreBuilds}
              className="px-6 py-3.5 bg-white text-[#0A0E1A] font-mono text-xs uppercase tracking-wider font-bold border-2 border-[#0A0E1A] shadow-brutal flex items-center gap-2 transition-all hover:bg-[#F8F7F2] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <span>Explore My Builds</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Mobile / Tablet Compact Builder Badges Rack */}
          <div className="lg:hidden mt-6 pt-4 border-t border-[#0A0E1A]/15">
            <span className="block font-mono text-[11px] uppercase font-bold text-[#474E5D] tracking-wider mb-2">
              10 BUILDER ARTIFACTS &amp; FOCUS AREAS
            </span>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              <span className="px-2 py-0.5 bg-[#0A0E1A] text-white font-bold border border-black">NotesGPT · Local RAG</span>
              <span className="px-2 py-0.5 bg-white text-[#0A0E1A] font-bold border border-black">Stratify · Graph</span>
              <span className="px-2 py-0.5 bg-[#064E3B] text-emerald-300 font-bold border border-black">Climbit · Carbon</span>
              <span className="px-2 py-0.5 bg-[#F5B700] text-black font-bold border border-black">Wispr Flow · 154 WPM</span>
              <span className="px-2 py-0.5 bg-[#0D1B2A] text-amber-300 font-bold border border-black">MerchantPulse · EV</span>
              <span className="px-2 py-0.5 bg-[#1E293B] text-amber-300 font-bold border border-black">Brainworks · SIH &apos;26</span>
              <span className="px-2 py-0.5 bg-[#166534] text-white font-bold border border-black">KrishiSetu · Mandi</span>
              <span className="px-2 py-0.5 bg-[#FFFDF5] text-black font-bold border border-black">Healthify · Food AI</span>
              <span className="px-2 py-0.5 bg-white text-[#1434FF] font-bold border border-black">GDG ADYPU · Lead</span>
              <span className="px-2 py-0.5 bg-[#0A0E1A] text-rose-400 font-bold border border-black">NyaySaathi · Redline</span>
            </div>
          </div>
        </div>

        {/* FLOATING ASYMMETRIC EVIDENCE CARDS (10 Verified Portfolio Artifacts) */}
        {/* Constellation is strictly positioned outside the text-safe zone */}
        <figure data-slot="visual" className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible">
          {/* --- COLUMN 1: INNER STAGGERED COLUMN (right: 235px, width: 210px) --- */}

          {/* 1. Climbit — Carbon Decision Engine (PromptWars Sprint) */}
          <motion.div
            style={{
              transform: `translate(${mousePos.x * 4}px, ${mousePos.y * -4}px)`,
            }}
            className="absolute top-0 right-[235px] w-[210px] bg-[#064E3B] text-white p-2 border-2 border-[#047857] shadow-brutal pointer-events-auto z-10 rotate-1 transition-transform duration-200 hover:scale-105 hover:z-30"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-emerald-300 border-b border-emerald-500/30 pb-0.5 mb-1">
              <span className="flex items-center gap-1 font-bold">
                <Gauge className="w-2.5 h-2.5 text-emerald-400" />
                CLIMBIT · CARBON
              </span>
              <span className="px-1 bg-[#0A0E1A] text-white text-[9px] font-bold border border-black">
                34 TESTS
              </span>
            </div>
            <p className="font-mono text-[10px] text-white/95 leading-tight">
              Deterministic TS Math + Zod Validation
            </p>
            <div className="mt-1 text-[9px] font-mono text-emerald-200/80 flex justify-between">
              <span>PromptWars Sprint</span>
              <span>Rank #449</span>
            </div>
          </motion.div>

          {/* 2. NotesGPT — Local RAG / WebGPU (Hostel PG Research Station) */}
          <motion.div
            style={{
              transform: `translate(${mousePos.x * -4}px, ${mousePos.y * 4}px)`,
            }}
            className="absolute top-[108px] right-[235px] w-[215px] bg-white text-[#0A0E1A] p-2 border-2 border-[#0A0E1A] shadow-brutal pointer-events-auto z-10 -rotate-1 transition-transform duration-200 hover:scale-105 hover:z-30"
          >
            <div className="flex items-center justify-between font-mono text-[10px] border-b border-[#0A0E1A]/15 pb-0.5 mb-1">
              <span className="flex items-center gap-1 font-bold text-[#1434FF]">
                <Terminal className="w-2.5 h-2.5" />
                NOTESGPT · LOCAL RAG
              </span>
              <span className="px-1 bg-[#1434FF] text-white text-[9px] font-bold">
                WEBGPU
              </span>
            </div>
            <p className="font-mono text-[10px] text-[#0A0E1A] leading-tight font-medium">
              Offline Academic Research Station
            </p>
            <div className="mt-1 text-[9px] font-mono text-[#474E5D] flex justify-between font-bold">
              <span>Ollama · WebLLM</span>
              <span>&lt;15s Inference</span>
            </div>
          </motion.div>

          {/* 3. Wispr Flow Velocity (Voice-Driven Building) */}
          <motion.div
            style={{
              transform: `translate(${mousePos.x * 5}px, ${mousePos.y * -4}px)`,
            }}
            className="absolute top-[216px] right-[235px] w-[215px] bg-[#F5B700] p-2 border-2 border-[#0A0E1A] shadow-brutal pointer-events-auto z-10 rotate-1 transition-transform duration-200 hover:scale-105 hover:z-30"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-[#0A0E1A] font-bold pb-0.5 border-b border-[#0A0E1A]/20 mb-1">
              <span className="flex items-center gap-1">
                <Mic className="w-2.5 h-2.5" />
                WISPR FLOW VELOCITY
              </span>
              <span className="bg-[#0A0E1A] text-white px-1 text-[9px] font-bold border border-black">154 WPM</span>
            </div>
            <p className="font-mono text-[10px] text-[#0A0E1A] leading-tight font-semibold">
              &quot;State machine dictated &amp; validated in 28s.&quot;
            </p>
            <div className="mt-1 text-[9px] font-mono text-[#0A0E1A]/80 font-bold">
              Voice-First Build Velocity
            </div>
          </motion.div>

          {/* 4. Brainworks — SIH 2026 Mining Safety (Sahil Mane Collaboration) */}
          <motion.div
            style={{
              transform: `translate(${mousePos.x * -5}px, ${mousePos.y * 4}px)`,
            }}
            className="absolute top-[324px] right-[235px] w-[215px] bg-[#1E293B] text-white p-2 border-2 border-[#334155] shadow-brutal pointer-events-auto z-10 -rotate-1.5 transition-transform duration-200 hover:scale-105 hover:z-30"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-amber-300 border-b border-slate-700 pb-0.5 mb-1">
              <span className="flex items-center gap-1 font-bold">
                <Radar className="w-2.5 h-2.5 text-amber-400" />
                BRAINWORKS · SIH &apos;26
              </span>
              <span className="px-1 bg-[#0A0E1A] text-white border border-[#0A0E1A] text-[9px] font-bold">
                2ND PLACE
              </span>
            </div>
            <p className="font-mono text-[10px] text-white/90 leading-tight">
              Radar &amp; Edge TinyML Mine Safety
            </p>
            <div className="mt-1 text-[9px] font-mono text-slate-300 flex justify-between">
              <span>Low-Latency Alert</span>
              <span>27 Teams</span>
            </div>
          </motion.div>

          {/* 5. GDG ADYPU — Community Leadership & Directorship */}
          <motion.div
            style={{
              transform: `translate(${mousePos.x * 4}px, ${mousePos.y * -5}px)`,
            }}
            className="absolute top-[432px] right-[235px] w-[210px] bg-white text-[#0A0E1A] p-2 border-2 border-[#0A0E1A] shadow-brutal pointer-events-auto z-10 rotate-1 transition-transform duration-200 hover:scale-105 hover:z-30"
          >
            <div className="flex items-center justify-between font-mono text-[10px] border-b border-[#0A0E1A]/15 pb-0.5 mb-1">
              <span className="flex items-center gap-1 font-bold text-[#1434FF]">
                <Users className="w-2.5 h-2.5" />
                GDG ADYPU · CAMPUS
              </span>
              <span className="bg-[#1434FF] text-white px-1 text-[9px] font-bold">
                LEAD
              </span>
            </div>
            <p className="font-mono text-[10px] text-[#0A0E1A] leading-tight font-medium">
              250+ Builder Registrations
            </p>
            <div className="mt-1 text-[9px] font-mono text-[#474E5D] flex justify-between font-bold">
              <span>Collegiate DevRel</span>
              <span>150+ Attended</span>
            </div>
          </motion.div>

          {/* --- COLUMN 2: OUTER STAGGERED COLUMN (right: 10px, width: 215px) --- */}

          {/* 6. NyaySaathi — Sovereign Legal AI & Clause Redline */}
          <motion.div
            style={{
              transform: `translate(${mousePos.x * -5}px, ${mousePos.y * -4}px)`,
            }}
            className="absolute top-[26px] right-[10px] w-[215px] bg-[#0A0E1A] text-white p-2.5 border-2 border-[#374151] shadow-brutal pointer-events-auto z-10 -rotate-1 transition-transform duration-200 hover:scale-105 hover:z-30"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-[#E63946] border-b border-[#374151] pb-0.5 mb-1">
              <span className="flex items-center gap-1 font-bold">
                <ShieldAlert className="w-2.5 h-2.5 text-[#E63946]" />
                NYAYSAATHI · REDLINE
              </span>
              <span className="px-1 bg-[#E63946]/20 text-[#E63946] border border-[#E63946]/40 text-[9px] font-bold">
                DELTA +40
              </span>
            </div>
            <p className="font-mono text-[10px] text-white/95 leading-tight">
              &quot;Deposit refund 7d → 60d unilateral cut.&quot;
            </p>
            <div className="mt-1 text-[9px] font-mono text-white/70 flex justify-between">
              <span>BNS GROUNDED</span>
              <span>PROVENANCE</span>
            </div>
          </motion.div>

          {/* 7. Stratify — Startup Ecosystem Graph */}
          <motion.div
            style={{
              transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 4}px)`,
            }}
            className="absolute top-[134px] right-[10px] w-[210px] bg-white p-2 border-2 border-[#0A0E1A] shadow-brutal pointer-events-auto z-10 rotate-1.5 transition-transform duration-200 hover:scale-105 hover:z-30"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-[#0A0E1A] border-b border-[#0A0E1A]/15 pb-0.5 mb-1">
              <span className="font-bold flex items-center gap-1">
                <Share2 className="w-2.5 h-2.5 text-[#1434FF]" />
                STRATIFY · LIVE GRAPH
              </span>
              <span className="text-[#0A0E1A] bg-[#C6F24F] px-1 text-[9px] font-bold">
                SYNCED
              </span>
            </div>
            <div className="py-0.5 px-1 bg-[#F8F7F2] border border-[#0A0E1A]/15 text-center font-mono text-[10px] text-[#474E5D] font-bold">
              12 Nodes · 28 Ecosystem Edges
            </div>
          </motion.div>

          {/* 8. Healthify — Food Safety & Ingredient Intelligence */}
          <motion.div
            style={{
              transform: `translate(${mousePos.x * -4}px, ${mousePos.y * 4}px)`,
            }}
            className="absolute top-[242px] right-[10px] w-[210px] bg-[#FFFDF5] text-[#0A0E1A] p-2 border-2 border-[#0A0E1A] shadow-brutal pointer-events-auto z-10 -rotate-1 transition-transform duration-200 hover:scale-105 hover:z-30"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-[#0A0E1A] border-b border-[#0A0E1A]/15 pb-0.5 mb-1">
              <span className="font-bold flex items-center gap-1 text-[#0A0E1A]">
                <HeartPulse className="w-2.5 h-2.5 text-rose-500" />
                HEALTHIFY · FOOD AI
              </span>
              <span className="bg-[#F5B700] text-black px-1 text-[9px] font-bold">
                FSSAI
              </span>
            </div>
            <p className="font-mono text-[10px] text-[#0A0E1A] leading-tight font-medium">
              Ingredient Label &amp; Additive Scanner
            </p>
            <div className="mt-1 text-[9px] font-mono text-[#474E5D] font-bold flex justify-between">
              <span>Hazard Classification</span>
              <span>Safe Food</span>
            </div>
          </motion.div>

          {/* 9. KrishiSetu — AgriTech Mandi Operating System */}
          <motion.div
            style={{
              transform: `translate(${mousePos.x * 4}px, ${mousePos.y * -4}px)`,
            }}
            className="absolute top-[350px] right-[10px] w-[215px] bg-[#166534] text-white p-2 border-2 border-black shadow-brutal pointer-events-auto z-10 rotate-1 transition-transform duration-200 hover:scale-105 hover:z-30"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-emerald-200 border-b border-emerald-600 pb-0.5 mb-1">
              <span className="font-bold flex items-center gap-1">
                <Sprout className="w-2.5 h-2.5 text-emerald-300" />
                KRISHISETU · AGRITECH
              </span>
              <span className="bg-emerald-950 text-emerald-300 px-1 text-[9px] font-bold border border-emerald-400">
                MANDI
              </span>
            </div>
            <p className="font-mono text-[10px] text-white leading-tight">
              Connected Mandi Price Discovery
            </p>
            <div className="mt-1 text-[9px] font-mono text-emerald-200/90 font-medium">
              Hyperlocal Agricultural Intel
            </div>
          </motion.div>

          {/* 10. MerchantPulse — Paise-Precision EV Payment Recovery */}
          <motion.div
            style={{
              transform: `translate(${mousePos.x * -5}px, ${mousePos.y * 5}px)`,
            }}
            className="absolute top-[458px] right-[10px] w-[215px] bg-[#0D1B2A] text-white p-2.5 border-2 border-[#1E3A8A] shadow-brutal pointer-events-auto z-10 -rotate-1 transition-transform duration-200 hover:scale-105 hover:z-30"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-amber-300 border-b border-[#1E3A8A] pb-0.5 mb-1">
              <span className="font-bold flex items-center gap-1">
                <Activity className="w-2.5 h-2.5" />
                MERCHANTPULSE · EV
              </span>
              <span className="text-[9px]">PAISE-PRECISION</span>
            </div>
            <div className="font-mono text-[10px] space-y-0.5">
              <div className="flex justify-between text-white/90">
                <span>Webhook Signature:</span>
                <span className="text-emerald-400 font-bold">HMAC OK</span>
              </div>
              <div className="flex justify-between text-white/90">
                <span>EV Calculated:</span>
                <span className="text-amber-300 font-bold">+₹412.50</span>
              </div>
              <div className="flex justify-between text-white/90">
                <span>Action:</span>
                <span className="text-cyan-300 font-bold">GEMINI_RETRY</span>
              </div>
            </div>
          </motion.div>
        </figure>
      </div>

      {/* Credo & Status Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-[#0A0E1A]/10 pt-3 mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
          <div>
            <span className="block text-[#474E5D] text-xs uppercase font-bold">Operational Base</span>
            <span className="font-bold text-[#0A0E1A] text-sm">Pune, India (IST)</span>
          </div>
          <div>
            <span className="block text-[#474E5D] text-xs uppercase font-bold">Community Directorship</span>
            <span className="font-bold text-[#0A0E1A] text-sm">GDG ADYPU &amp; Alta Club</span>
          </div>
          <div>
            <span className="block text-[#474E5D] text-xs uppercase font-bold">Central Mantra</span>
            <span className="font-bold text-[#0A0E1A] text-sm">&quot;Code. Ship. Measure. Repeat.&quot;</span>
          </div>
          <div>
            <span className="block text-[#474E5D] text-xs uppercase font-bold">Candidate Focus</span>
            <span className="font-bold text-[#1434FF] text-sm">Growth × Product Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
