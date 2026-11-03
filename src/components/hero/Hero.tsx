"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, ArrowDown, Mic, ShieldAlert, Activity, Share2 } from "lucide-react";

interface HeroProps {
  onOpenVideo: () => void;
  onExploreBuilds: () => void;
}

export default function Hero({ onOpenVideo, onExploreBuilds }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
      className="relative min-h-[90vh] lg:min-h-screen pt-20 pb-8 flex flex-col justify-between overflow-x-clip paper-texture border-b-2 border-[#0A0E1A]"
    >
      {/* Main hero typography & floating cards container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6 sm:py-8">
        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-5xl sm:text-7xl lg:text-[5.5rem] tracking-tighter text-[#0A0E1A] leading-[0.94] mb-5"
          >
            You&apos;ve seen what I build.
            <br />
            <span className="font-serif italic font-normal text-[#1434FF] block mt-1.5 text-6xl sm:text-8xl lg:text-[6.5rem]">
              Now see what I can make happen.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg lg:text-xl text-[#0A0E1A] max-w-2xl font-sans leading-relaxed mb-6 font-medium"
          >
            I build products, communities and experiences at the intersection of technology, creativity and growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <button
              onClick={onOpenVideo}
              className="px-6 py-3.5 bg-[#1434FF] hover:bg-[#0A0E1A] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-bold border-2 border-[#0A0E1A] shadow-brutal flex items-center gap-2.5 transition-all hover:translate-x-[-1px] hover:translate-y-[-1px]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Watch the 3-Minute Pitch</span>
            </button>

            <button
              onClick={onExploreBuilds}
              className="px-6 py-3.5 bg-white hover:bg-[#E8E7DF] text-[#0A0E1A] font-mono text-xs sm:text-sm uppercase tracking-wider font-bold border-2 border-[#0A0E1A] shadow-brutal flex items-center gap-2 transition-all hover:translate-x-[-1px] hover:translate-y-[-1px]"
            >
              <span>Explore 9 Shipped Builds</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Floating Parallax Evidence Cards (Desktop Only) */}
        <figure data-slot="visual" className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
          {/* Card 1: NyaySaathi Clause Redline Preview */}
          <motion.div
            style={{
              transform: `translate(${mousePos.x * -16}px, ${mousePos.y * -16}px)`,
            }}
            className="absolute top-0 right-8 w-72 bg-[#0A0E1A] text-white p-3.5 border-2 border-[#374151] shadow-brutal pointer-events-auto z-20"
          >
            <div className="flex items-center justify-between font-mono text-xs text-[#E63946] border-b border-[#374151] pb-2 mb-2">
              <span className="flex items-center gap-1.5 font-bold">
                <ShieldAlert className="w-3.5 h-3.5 text-[#E63946]" />
                NYAYSAATHI · REDLINE
              </span>
              <span className="px-1.5 py-0.5 bg-[#E63946]/20 text-[#E63946] border border-[#E63946]/40 text-xs">
                DELTA +40 HIGH
              </span>
            </div>
            <p className="font-mono text-xs text-white/90 leading-tight">
              &quot;Deposit refund extended 7d → 60d with 20% unilateral painting deduction.&quot;
            </p>
            <div className="mt-2 text-xs font-mono text-white/70 flex justify-between">
              <span>BNS 2023 GROUNDED</span>
              <span>STRICT PROVENANCE</span>
            </div>
          </motion.div>

          {/* Card 2: Stratify Graph Card */}
          <motion.div
            style={{
              transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 18}px)`,
            }}
            className="absolute top-36 right-0 w-64 bg-white p-3 border-2 border-[#0A0E1A] shadow-brutal pointer-events-auto z-20"
          >
            <div className="flex items-center justify-between font-mono text-xs text-[#0A0E1A] border-b border-[#0A0E1A]/15 pb-1.5 mb-2">
              <span className="font-bold flex items-center gap-1">
                <Share2 className="w-3.5 h-3.5 text-[#1434FF]" />
                STRATIFY · LIVE GRAPH
              </span>
              <span className="text-[#0A0E1A] bg-[#C6F24F] px-1.5 py-0.5 font-bold text-xs">SYNCED</span>
            </div>
            <div className="h-12 bg-[#F8F7F2] border border-[#0A0E1A]/15 flex items-center justify-center font-mono text-xs text-[#474E5D] font-bold">
              12 Nodes · 28 Ecosystem Edges
            </div>
          </motion.div>

          {/* Card 3: MerchantPulse EV Terminal */}
          <motion.div
            style={{
              transform: `translate(${mousePos.x * -24}px, ${mousePos.y * 20}px)`,
            }}
            className="absolute bottom-2 right-24 w-80 bg-[#0D1B2A] text-white p-3.5 border-2 border-[#1E3A8A] shadow-brutal pointer-events-auto z-20"
          >
            <div className="flex items-center justify-between font-mono text-xs text-amber-300 border-b border-[#1E3A8A] pb-1.5 mb-2">
              <span className="font-bold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                MERCHANTPULSE · EV STATE
              </span>
              <span className="text-xs">PAISE-PRECISION</span>
            </div>
            <div className="font-mono text-xs space-y-1">
              <div className="flex justify-between text-white/90">
                <span>Webhook Signature:</span>
                <span className="text-emerald-400 font-bold">HMAC-SHA256 OK</span>
              </div>
              <div className="flex justify-between text-white/90">
                <span>EV Calculated:</span>
                <span className="text-amber-300 font-bold">+₹412.50 (POSITIVE)</span>
              </div>
              <div className="flex justify-between text-white/90">
                <span>Action:</span>
                <span className="text-cyan-300 font-bold">GEMINI_RETRY_DISPATCH</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Wispr Flow Voice Process Badge */}
          <motion.div
            style={{
              transform: `translate(${mousePos.x * 14}px, ${mousePos.y * -20}px)`,
            }}
            className="absolute top-1/2 right-[25rem] w-64 bg-[#F5B700] p-3 border-2 border-[#0A0E1A] shadow-brutal pointer-events-auto z-20"
          >
            <div className="flex items-center justify-between font-mono text-xs text-[#0A0E1A] font-bold pb-1 border-b border-[#0A0E1A]/20">
              <span className="flex items-center gap-1">
                <Mic className="w-3.5 h-3.5" />
                WISPR FLOW VELOCITY
              </span>
              <span>154 WPM</span>
            </div>
            <p className="font-mono text-xs text-[#0A0E1A] mt-1.5 leading-snug font-medium">
              &quot;Architected and validated MerchantPulse recovery state machine via voice in 28s.&quot;
            </p>
          </motion.div>
        </figure>
      </div>

      {/* Hero Bottom Credo Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#0A0E1A]/15 font-mono text-xs">
          <div>
            <span className="block text-[#474E5D] text-xs uppercase font-bold">Execution Record</span>
            <span className="font-bold text-[#0A0E1A] text-sm">9 Functional Web Builds</span>
          </div>
          <div>
            <span className="block text-[#474E5D] text-xs uppercase font-bold">Community Directorship</span>
            <span className="font-bold text-[#0A0E1A] text-sm">GDG ADYPU & Alta Club</span>
          </div>
          <div>
            <span className="block text-[#474E5D] text-xs uppercase font-bold">Central Mantra</span>
            <span className="font-bold text-[#0A0E1A] text-sm">Momentum Into Action</span>
          </div>
          <div>
            <span className="block text-[#474E5D] text-xs uppercase font-bold">Mission</span>
            <span className="font-bold text-[#1434FF] text-sm">Wispr Flow India Challenge</span>
          </div>
        </div>
      </div>
    </section>
  );
}
