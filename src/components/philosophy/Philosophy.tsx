"use client";

import { useState } from "react";
import { Sparkles, Check, ArrowRight } from "lucide-react";

export default function Philosophy() {
  const [activeSide, setActiveSide] = useState<"creativity" | "ownership">("ownership");

  return (
    <section id="philosophy" className="py-36 sm:py-48 bg-[#F5B700] text-[#0A0E1A] border-b border-[#0A0E1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <span className="font-mono text-xs uppercase tracking-widest bg-[#0A0E1A] text-white px-3 py-1 font-bold">
            SECTION 06 · OPERATING PHILOSOPHY
          </span>

          {/* Dynamic Switchable Typography */}
          <div className="space-y-4">
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
              Creativity earns attention.
            </h2>
            <div className="font-serif italic text-6xl sm:text-8xl lg:text-9xl text-[#0A0E1A] leading-[0.9]">
              Ownership earns trust.
            </div>
          </div>

          <p className="font-sans text-lg sm:text-2xl font-medium text-[#0A0E1A]/90 max-w-2xl leading-relaxed">
            &ldquo;I enjoy the intersection of engineering and creativity. The best ideas are not just presented well.
            They are built, tested, challenged and improved.&rdquo;
          </p>

          {/* Interactive Dual-Core Dialectic */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 text-left">
            <div 
              onClick={() => setActiveSide("creativity")}
              className={`p-6 sm:p-8 border-2 border-[#0A0E1A] transition-all cursor-pointer ${
                activeSide === "creativity" ? "bg-white shadow-brutal translate-y-[-2px]" : "bg-white/40 hover:bg-white/70"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs font-bold mb-4">
                <span className="flex items-center gap-1.5 uppercase text-[#1434FF]">
                  <Sparkles className="w-4 h-4" />
                  THE CREATIVE SPARK
                </span>
                <span>ATTENTION</span>
              </div>
              <h3 className="font-display font-black text-2xl text-[#0A0E1A] mb-2">
                Bold Hooks & Storytelling
              </h3>
              <p className="text-sm text-[#0A0E1A]/80 font-sans leading-relaxed">
                Capturing mindshare requires visual poetry, unvarnished curiosity, and human warmth. Ideas must make someone stop scrolling.
              </p>
            </div>

            <div 
              onClick={() => setActiveSide("ownership")}
              className={`p-6 sm:p-8 border-2 border-[#0A0E1A] transition-all cursor-pointer ${
                activeSide === "ownership" ? "bg-white shadow-brutal translate-y-[-2px]" : "bg-white/40 hover:bg-white/70"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs font-bold mb-4">
                <span className="flex items-center gap-1.5 uppercase text-[#0A0E1A]">
                  <Check className="w-4 h-4" />
                  THE BUILDER CRAFT
                </span>
                <span>EXECUTION</span>
              </div>
              <h3 className="font-display font-black text-2xl text-[#0A0E1A] mb-2">
                Unforgiving Execution
              </h3>
              <p className="text-sm text-[#0A0E1A]/80 font-sans leading-relaxed">
                Attention fades in 3 seconds if the underlying product is vaporware. True trust is earned through deterministic code and delivered outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

