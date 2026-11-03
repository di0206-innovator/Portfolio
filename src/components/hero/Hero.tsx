"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Play,
  ArrowDown,
  Terminal,
  Activity,
  ShieldAlert,
  Share2,
  Gauge,
  Sparkles,
  Users,
  Radar,
  Mic,
  Sprout,
  HeartPulse,
} from "lucide-react";

interface HeroProps {
  onOpenVideo: () => void;
  onExploreBuilds: () => void;
}

interface EvidenceCardData {
  id: string;
  name: string;
  kind: string;
  depth: number;
  // Border perimeter percentages on desktop
  x: number; // percentage
  y: number; // percentage
  w: number; // viewport width percentage (vw)
  r: number; // resting tilt in degrees
  aspect: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    accent: string;
  };
  renderContent: () => React.ReactNode;
}

export default function Hero({ onOpenVideo, onExploreBuilds }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [bloomed, setBloomed] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Center-to-Perimeter Bloom Sequence (Aletheia Stack -> Bloom mechanics)
  useEffect(() => {
    // Start collapsed in the exact center, then bloom outward into borders after 350ms
    const timer = setTimeout(() => {
      setBloomed(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // 10 Rich, Authentic Portfolio Artifact Cards positioned along perimeter borders
  const cards: EvidenceCardData[] = [
    // 1. Top-Left: Climbit Decision Engine
    {
      id: "climbit",
      name: "CLIMBIT",
      kind: "Carbon Decision Engine",
      depth: 0.8,
      x: 2.5,
      y: 7,
      w: 12.5,
      r: -5,
      aspect: "16 / 10",
      colorScheme: {
        bg: "#064E3B",
        border: "#047857",
        text: "#FFFFFF",
        accent: "#34D399",
      },
      renderContent: () => (
        <div className="p-2.5 h-full flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[10px] text-emerald-300 border-b border-emerald-500/30 pb-1">
            <span className="flex items-center gap-1 font-bold">
              <Gauge className="w-3 h-3 text-emerald-400" />
              CLIMBIT · CARBON
            </span>
            <span className="bg-black/40 px-1 py-0.5 rounded text-[9px] font-bold text-emerald-300">
              34 TESTS
            </span>
          </div>
          <p className="text-[10px] text-emerald-100/90 leading-tight my-1">
            Deterministic Math Engine + Zod AI Guardrails
          </p>
          <div className="flex justify-between items-center text-[9px] text-emerald-300/80">
            <span>PromptWars</span>
            <span className="font-bold text-emerald-200">Rank #449</span>
          </div>
        </div>
      ),
    },
    // 2. Top-Center-Left: NotesGPT Local RAG
    {
      id: "notesgpt",
      name: "NOTESGPT",
      kind: "Offline RAG Station",
      depth: 0.6,
      x: 18,
      y: 4,
      w: 14,
      r: 3,
      aspect: "16 / 9.5",
      colorScheme: {
        bg: "#FFFFFF",
        border: "#0A0E1A",
        text: "#0A0E1A",
        accent: "#1434FF",
      },
      renderContent: () => (
        <div className="p-2.5 h-full flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[10px] border-b border-black/10 pb-1">
            <span className="flex items-center gap-1 font-bold text-[#1434FF]">
              <Terminal className="w-3 h-3" />
              NOTESGPT · LOCAL
            </span>
            <span className="bg-[#1434FF] text-white px-1 py-0.5 text-[9px] font-bold">
              WEBGPU
            </span>
          </div>
          <p className="text-[10px] text-slate-700 leading-tight my-1">
            Hostel PG offline revision: Ollama + in-browser inference
          </p>
          <div className="flex justify-between items-center text-[9px] text-slate-500">
            <span>Latency</span>
            <span className="font-bold text-[#1434FF]">&lt;15s kit</span>
          </div>
        </div>
      ),
    },
    // 3. Top-Center: Stratify Graph
    {
      id: "stratify",
      name: "STRATIFY",
      kind: "Startup Intelligence Graph",
      depth: 0.4,
      x: 44,
      y: 3,
      w: 12,
      r: -3,
      aspect: "1",
      colorScheme: {
        bg: "#FAF9F5",
        border: "#0A0E1A",
        text: "#0A0E1A",
        accent: "#C6F24F",
      },
      renderContent: () => (
        <div className="p-2.5 h-full flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[10px] border-b border-black/10 pb-1">
            <span className="flex items-center gap-1 font-bold text-[#0A0E1A]">
              <Share2 className="w-3 h-3 text-[#1434FF]" />
              STRATIFY
            </span>
            <span className="bg-[#C6F24F] text-black px-1 py-0.5 text-[9px] font-bold">
              SYNCED
            </span>
          </div>
          <div className="my-auto py-1 text-center bg-white border border-black/10 rounded">
            <span className="text-[10px] font-bold text-slate-800 block">12 Nodes</span>
            <span className="text-[9px] text-slate-500 block">28 Edges</span>
          </div>
          <span className="text-[9px] text-slate-500 text-center block">Role Switcher</span>
        </div>
      ),
    },
    // 4. Top-Right: NyaySaathi Contract Redline
    {
      id: "nyaysaathi",
      name: "NYAYSAATHI",
      kind: "Sovereign Legal AI",
      depth: 0.9,
      x: 68,
      y: 4,
      w: 14,
      r: 4,
      aspect: "16 / 10",
      colorScheme: {
        bg: "#0A0E1A",
        border: "#374151",
        text: "#FFFFFF",
        accent: "#E63946",
      },
      renderContent: () => (
        <div className="p-2.5 h-full flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[10px] text-rose-400 border-b border-white/10 pb-1">
            <span className="flex items-center gap-1 font-bold">
              <ShieldAlert className="w-3 h-3" />
              NYAYSAATHI · REDLINE
            </span>
            <span className="bg-rose-950/80 border border-rose-500/40 text-rose-300 px-1 py-0.5 text-[9px] font-bold">
              DELTA +40
            </span>
          </div>
          <p className="text-[10px] text-slate-200 leading-tight my-1">
            &quot;Deposit refund 7d → 60d with 20% unilateral cut.&quot;
          </p>
          <div className="flex justify-between items-center text-[9px] text-slate-400">
            <span>BNS 2023</span>
            <span className="text-emerald-400 font-bold">Verified Prov.</span>
          </div>
        </div>
      ),
    },
    // 5. Right-Upper: MerchantPulse EV Terminal
    {
      id: "merchantpulse",
      name: "MERCHANTPULSE",
      kind: "State Machine Recovery",
      depth: 0.7,
      x: 85.5,
      y: 8,
      w: 12.5,
      r: -4,
      aspect: "16 / 10",
      colorScheme: {
        bg: "#0D1B2A",
        border: "#1E3A8A",
        text: "#FFFFFF",
        accent: "#F5B700",
      },
      renderContent: () => (
        <div className="p-2.5 h-full flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[10px] text-amber-300 border-b border-blue-900 pb-1">
            <span className="flex items-center gap-1 font-bold">
              <Activity className="w-3 h-3" />
              MERCHANTPULSE · EV
            </span>
            <span className="text-[9px] text-amber-300 font-semibold">PAISE</span>
          </div>
          <div className="space-y-0.5 text-[9px] text-slate-200 my-1">
            <div className="flex justify-between">
              <span>Webhook:</span>
              <span className="text-emerald-400 font-bold">HMAC OK</span>
            </div>
            <div className="flex justify-between">
              <span>EV Calc:</span>
              <span className="text-amber-300 font-bold">+₹412.50</span>
            </div>
          </div>
          <span className="text-[8px] text-cyan-300 font-bold block text-right">
            GEMINI_RETRY
          </span>
        </div>
      ),
    },
    // 6. Right-Lower: Brainworks SIH '26 Mining Radar
    {
      id: "brainworks",
      name: "BRAINWORKS",
      kind: "SIH '26 2nd Place",
      depth: 0.85,
      x: 85.5,
      y: 42,
      w: 12.5,
      r: 4,
      aspect: "16 / 9.5",
      colorScheme: {
        bg: "#1E293B",
        border: "#334155",
        text: "#FFFFFF",
        accent: "#F59E0B",
      },
      renderContent: () => (
        <div className="p-2.5 h-full flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[10px] text-amber-400 border-b border-white/10 pb-1">
            <span className="flex items-center gap-1 font-bold">
              <Radar className="w-3 h-3 text-amber-400" />
              BRAINWORKS · SIH &apos;26
            </span>
            <span className="bg-amber-400 text-black px-1 py-0.5 text-[9px] font-black">
              2ND PLACE
            </span>
          </div>
          <p className="text-[10px] text-slate-200 leading-tight my-1">
            Radar Sensing in Zero-Visibility Open-Cast Mines
          </p>
          <div className="flex justify-between text-[9px] text-slate-400">
            <span>TinyML Edge</span>
            <span>27 Teams</span>
          </div>
        </div>
      ),
    },
    // 7. Bottom-Right: GDG ADYPU & Alta Club Leadership
    {
      id: "community",
      name: "GDG & ALTA",
      kind: "Community Directorship",
      depth: 0.5,
      x: 64,
      y: 75,
      w: 14,
      r: -3,
      aspect: "16 / 9.5",
      colorScheme: {
        bg: "#FFFFFF",
        border: "#0A0E1A",
        text: "#0A0E1A",
        accent: "#1434FF",
      },
      renderContent: () => (
        <div className="p-2.5 h-full flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[10px] border-b border-black/10 pb-1">
            <span className="flex items-center gap-1 font-bold text-[#1434FF]">
              <Users className="w-3 h-3" />
              GDG ADYPU · LEAD
            </span>
            <span className="bg-[#1434FF] text-white px-1 py-0.5 text-[9px] font-bold">
              250+ BUILDERS
            </span>
          </div>
          <p className="text-[10px] text-slate-700 leading-tight my-1">
            Organizer &amp; President Alta Club: hackathons &amp; community cohorts
          </p>
          <div className="flex justify-between text-[9px] text-slate-500">
            <span>Alta Pune Club</span>
            <span className="font-bold text-[#0A0E1A]">President</span>
          </div>
        </div>
      ),
    },
    // 8. Bottom-Center: Healthify Food AI Scanner
    {
      id: "healthify",
      name: "HEALTHIFY",
      kind: "Food Safety Scanner",
      depth: 0.65,
      x: 22,
      y: 75,
      w: 13.5,
      r: 3,
      aspect: "16 / 10",
      colorScheme: {
        bg: "#FFFDF5",
        border: "#0A0E1A",
        text: "#0A0E1A",
        accent: "#F5B700",
      },
      renderContent: () => (
        <div className="p-2.5 h-full flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[10px] border-b border-black/10 pb-1">
            <span className="flex items-center gap-1 font-bold text-black">
              <HeartPulse className="w-3 h-3 text-[#1434FF]" />
              HEALTHIFY · FOOD AI
            </span>
            <span className="bg-[#F5B700] text-black px-1 py-0.5 text-[9px] font-bold">
              FSSAI
            </span>
          </div>
          <p className="text-[10px] text-slate-700 leading-tight my-1">
            Camera OCR ingredient list scanning &amp; ultra-processed flags
          </p>
          <div className="flex justify-between text-[9px] text-slate-500">
            <span>Additive Index</span>
            <span className="text-emerald-600 font-bold">Safety Verified</span>
          </div>
        </div>
      ),
    },
    // 9. Bottom-Left: KrishiSetu Founder Journey
    {
      id: "krishisetu",
      name: "KRISHISETU",
      kind: "AgriTech Mandi OS",
      depth: 0.75,
      x: 2.5,
      y: 71,
      w: 12.5,
      r: -5,
      aspect: "16 / 10",
      colorScheme: {
        bg: "#166534",
        border: "#000000",
        text: "#FFFFFF",
        accent: "#FDE047",
      },
      renderContent: () => (
        <div className="p-2.5 h-full flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[10px] text-yellow-300 border-b border-green-700 pb-1">
            <span className="flex items-center gap-1 font-bold">
              <Sprout className="w-3 h-3 text-yellow-300" />
              KRISHISETU · AGRI
            </span>
            <span className="bg-yellow-400 text-black px-1 py-0.5 text-[9px] font-black">
              FOUNDER
            </span>
          </div>
          <p className="text-[10px] text-green-100 leading-tight my-1">
            APMC mandi commodity pricing &amp; direct buyer connection
          </p>
          <div className="flex justify-between text-[9px] text-green-200">
            <span>Soil Micro-climate</span>
            <span className="text-yellow-300 font-bold">AgOS Live</span>
          </div>
        </div>
      ),
    },
    // 10. Left-Center: Wispr Flow Velocity Badge
    {
      id: "wisprflow",
      name: "WISPR FLOW",
      kind: "Voice-First Velocity",
      depth: 0.95,
      x: 2.5,
      y: 40,
      w: 12.5,
      r: 6,
      aspect: "16 / 10",
      colorScheme: {
        bg: "#F5B700",
        border: "#0A0E1A",
        text: "#0A0E1A",
        accent: "#1434FF",
      },
      renderContent: () => (
        <div className="p-2.5 h-full flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[10px] border-b border-black/15 pb-1">
            <span className="flex items-center gap-1 font-bold text-black">
              <Mic className="w-3 h-3" />
              WISPR VELOCITY
            </span>
            <span className="bg-black text-white px-1 py-0.5 text-[9px] font-black">
              154 WPM
            </span>
          </div>
          <p className="text-[10px] text-black/90 font-medium leading-tight my-1">
            &quot;Synthesized recovery state machine via voice in 28s.&quot;
          </p>
          <div className="flex justify-between text-[8px] text-black/70">
            <span>Voice-First Orbit</span>
            <span className="font-bold">2.4x Speed</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="hero"
      aria-label="Introduction & Builder Philosophy"
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-20 pb-6 overflow-hidden paper-texture border-b-2 border-[#0A0E1A]"
    >
      {/* ─── DESKTOP PERIMETER EVIDENCE PLAYCARDS ─── */}
      {/* Blooming from middle -> dispersing to every border side, blurred at rest, unblurred on hover */}
      <figure
        data-slot="visual"
        className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible z-10"
        aria-hidden="true"
      >
        {cards.map((card, i) => {
          const isFocused = activeCard === i;
          const isOtherFocused = activeCard !== null && !isFocused;

          // Parallax depth offset
          const px = mousePos.x * -24 * card.depth;
          const py = mousePos.y * -24 * card.depth;

          return (
            <motion.div
              key={card.id}
              initial={{
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
                scale: 0.25,
                opacity: 0,
                filter: "blur(0px)",
                rotate: 0,
              }}
              animate={{
                left: bloomed ? `${card.x}%` : "50%",
                top: bloomed ? `${card.y}%` : "50%",
                x: bloomed ? px : "-50%",
                y: bloomed ? py : "-50%",
                scale: isFocused ? 1.18 : isOtherFocused ? 0.94 : 1,
                opacity: bloomed ? (isFocused ? 1 : isOtherFocused ? 0.65 : 0.88) : 0,
                // Resting state is gently blurred (2.5px), hovered card unblurs (0px), others blur more (4px)
                filter: isFocused
                  ? "blur(0px)"
                  : isOtherFocused
                  ? "blur(4.5px)"
                  : "blur(2.2px)",
                rotate: isFocused ? 0 : card.r,
                zIndex: isFocused ? 30 : 10,
              }}
              transition={{
                duration: bloomed ? (isFocused ? 0.35 : 0.65) : 1.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                width: `${card.w}vw`,
                aspectRatio: card.aspect,
              }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
              className="absolute pointer-events-auto cursor-pointer rounded-none border-2 shadow-brutal select-none"
            >
              <div
                style={{
                  backgroundColor: card.colorScheme.bg,
                  borderColor: card.colorScheme.border,
                  color: card.colorScheme.text,
                }}
                className="w-full h-full relative overflow-hidden transition-colors"
              >
                {card.renderContent()}

                {/* Subtle active highlight badge */}
                {isFocused && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 border-2 border-[#1434FF] pointer-events-none"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </figure>

      {/* ─── CENTRAL HERO CONTENT (Balanced, Breathing & Centered) ─── */}
      <div className="relative max-w-2xl xl:max-w-3xl mx-auto px-4 sm:px-6 w-full my-auto py-6 sm:py-8 z-20 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1434FF] text-white font-mono text-xs uppercase tracking-widest font-bold border-2 border-[#0A0E1A] shadow-brutal-sm mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>WISPR FLOW INDIA HIRING CHALLENGE · 2026</span>
        </motion.div>

        {/* Master Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.6rem] tracking-tighter text-[#0A0E1A] leading-[0.94] mb-4 max-w-2xl"
        >
          You&apos;ve seen what I build.
          <br />
          <span className="font-serif italic font-normal text-[#1434FF] block mt-1.5 text-5xl sm:text-6xl lg:text-[4.8rem] xl:text-[5.5rem]">
            Now see what I can make happen.
          </span>
        </motion.h1>

        {/* Lead Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base lg:text-lg text-[#0A0E1A] max-w-xl font-sans leading-relaxed mb-6 font-medium"
        >
          I build products, communities and experiences at the intersection of technology, creativity and growth.
        </motion.p>

        {/* High-Impact Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3.5"
        >
          <button
            onClick={onOpenVideo}
            className="px-6 py-3 bg-[#1434FF] hover:bg-[#0A0E1A] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-bold border-2 border-[#0A0E1A] shadow-brutal flex items-center gap-2.5 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            <Play className="w-4 h-4 fill-current text-amber-300" />
            <span>Watch the 3-Minute Pitch</span>
          </button>

          <button
            onClick={onExploreBuilds}
            className="px-6 py-3 bg-white hover:bg-[#E8E7DF] text-[#0A0E1A] font-mono text-xs sm:text-sm uppercase tracking-wider font-bold border-2 border-[#0A0E1A] shadow-brutal flex items-center gap-2 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            <span>Explore My Builds</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Mobile / Tablet Compact Evidence Strip (Clean responsive fallback) */}
        <div className="lg:hidden mt-8 pt-4 border-t border-[#0A0E1A]/15 w-full">
          <span className="block font-mono text-[11px] uppercase font-bold text-[#474E5D] tracking-wider mb-2">
            10 VERIFIED WORK ARTIFACTS
          </span>
          <div className="flex flex-wrap justify-center gap-1.5 font-mono text-xs">
            <span className="px-2 py-0.5 bg-[#064E3B] text-emerald-300 font-bold border border-black">
              Climbit · Carbon
            </span>
            <span className="px-2 py-0.5 bg-white text-[#0A0E1A] font-bold border border-black">
              NotesGPT · WebGPU
            </span>
            <span className="px-2 py-0.5 bg-[#FAF9F5] text-black font-bold border border-black">
              Stratify · Graph
            </span>
            <span className="px-2 py-0.5 bg-[#0A0E1A] text-rose-300 font-bold border border-black">
              NyaySaathi · Redline
            </span>
            <span className="px-2 py-0.5 bg-[#0D1B2A] text-amber-300 font-bold border border-black">
              MerchantPulse · EV
            </span>
            <span className="px-2 py-0.5 bg-[#1E293B] text-amber-300 font-bold border border-black">
              Brainworks · SIH &apos;26
            </span>
            <span className="px-2 py-0.5 bg-[#166534] text-white font-bold border border-black">
              KrishiSetu · AgriOS
            </span>
            <span className="px-2 py-0.5 bg-[#FFFDF5] text-black font-bold border border-black">
              Healthify · Food AI
            </span>
            <span className="px-2 py-0.5 bg-[#F5B700] text-black font-bold border border-black">
              Wispr Flow · 154 WPM
            </span>
          </div>
        </div>
      </div>

      {/* ─── BOTTOM EDITORIAL TELEMETRY & STATUS BAR ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-[#0A0E1A]/15 pt-3 z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
          <div>
            <span className="block text-[#474E5D] text-[10px] uppercase font-bold tracking-wider">
              Operational Base
            </span>
            <span className="font-bold text-[#0A0E1A] text-xs sm:text-sm">Pune, India (IST)</span>
          </div>
          <div>
            <span className="block text-[#474E5D] text-[10px] uppercase font-bold tracking-wider">
              Community Directorship
            </span>
            <span className="font-bold text-[#0A0E1A] text-xs sm:text-sm">
              GDG ADYPU &amp; Alta Club
            </span>
          </div>
          <div>
            <span className="block text-[#474E5D] text-[10px] uppercase font-bold tracking-wider">
              Core Discipline
            </span>
            <span className="font-bold text-[#0A0E1A] text-xs sm:text-sm">
              AI Product Engineering
            </span>
          </div>
          <div>
            <span className="block text-[#474E5D] text-[10px] uppercase font-bold tracking-wider">
              Mission
            </span>
            <span className="font-bold text-[#1434FF] text-xs sm:text-sm">
              Wispr Flow India Challenge
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
