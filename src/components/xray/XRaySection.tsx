"use client";

import { useState } from "react";
import { 
  Eye, 
  Terminal, 
  Cpu, 
  Share2, 
  Mic, 
  Volume2, 
  Code2, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  Radio
} from "lucide-react";
import { VOICE_PROCESS_WORKFLOW } from "@/data/voiceProcess";

export default function XRaySection() {
  const [activeShowcase, setActiveShowcase] = useState<"engineer" | "growth">("engineer");
  const [activeVoiceStep, setActiveVoiceStep] = useState(0);
  const [xrayRevealed, setXrayRevealed] = useState(true);

  return (
    <section id="xray" className="pt-36 pb-32 sm:pt-48 sm:pb-40 bg-[#0A0E1A] text-white border-b-2 border-[#0A0E1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/20">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#7096FF] font-bold block mb-2">
              SECTION 05 · THE INTERACTIVE X-RAY
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white">
              Every surface has an underneath.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-serif italic text-xl sm:text-2xl text-white/80 max-w-md">
            &ldquo;What you see is the interface. What matters is everything that makes it work.&rdquo;
          </p>
        </div>

        {/* Showcase Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 border border-white/20 p-1 bg-white/5">
            <button
              onClick={() => setActiveShowcase("engineer")}
              className={`px-3 sm:px-4 py-2 font-mono text-xs uppercase font-bold tracking-wider transition-colors whitespace-nowrap ${
                activeShowcase === "engineer"
                  ? "bg-[#1434FF] text-white shadow-brutal-sm"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <span className="hidden sm:inline">Showcase A: </span>Product Engineer
            </button>
            <button
              onClick={() => setActiveShowcase("growth")}
              className={`px-3 sm:px-4 py-2 font-mono text-xs uppercase font-bold tracking-wider transition-colors whitespace-nowrap ${
                activeShowcase === "growth"
                  ? "bg-[#1434FF] text-white shadow-brutal-sm"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <span className="hidden sm:inline">Showcase B: </span>Growth Operator
            </button>
          </div>

          <button
            onClick={() => setXrayRevealed(!xrayRevealed)}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 font-mono text-xs uppercase tracking-wider text-amber-300 whitespace-nowrap"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{xrayRevealed ? "Lens: Underneath Active" : "Toggle X-Ray Lens"}</span>
          </button>
        </div>

        {/* Interactive X-Ray Canvas */}
        <div data-slot="xray-canvas" className="relative border-2 border-white/30 bg-[#0D1B2A] p-6 sm:p-10 mb-20 shadow-2xl overflow-hidden">
          {activeShowcase === "engineer" ? (
            // SHOWCASE A: MERCHANT PULSE / NYAYSAATHI ARCHITECTURE
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: What the user sees (Interface Layer) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-white/10 text-white/70">
                  <span>SURFACE: USER INTERFACE</span>
                  <span className="text-emerald-400 font-semibold">STATE: LIVE TELEMETRY</span>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono text-amber-300">
                    <span className="font-bold">MERCHANTPULSE · RECOVERY ENGINE</span>
                    <span className="px-1.5 py-0.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px]">
                      ID: pay_Okj89a
                    </span>
                  </div>
                  <div className="text-xl font-display font-bold text-white">
                    Razorpay Payment Failure: ₹4,850.00
                  </div>
                  <div className="text-xs text-white/80 font-mono">
                    Gateway Error: <code className="text-rose-400">GATEWAY_TIMEOUT (HDFC UPI)</code>
                  </div>
                  <div className="p-3 bg-black/40 border border-white/10 font-mono text-xs space-y-1">
                    <div className="flex justify-between text-white/70">
                      <span>Calculated EV:</span>
                      <span className="text-emerald-400 font-bold">+₹412.50 INR</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Action Selected:</span>
                      <span className="text-cyan-300 font-bold">DISPATCH_WHATSAPP_LINK</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: The Underneath (X-Ray Code & Mechanics) */}
              <div className="lg:col-span-7 bg-[#050811] p-6 border border-white/20 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[#7096FF] font-bold flex items-center gap-1.5">
                    <Terminal className="w-4 h-4" />
                    <span>DETERMINISTIC STATE MACHINE & EV FORMULA</span>
                  </span>
                  <span className="text-xs text-white/60">PAISE-PRECISION</span>
                </div>

                <div className="space-y-3 text-xs text-white/85">
                  <p className="text-white/70">
                    {"// Expected Value (EV) decision formula balancing recovery probability against gateway cost"}
                  </p>
                  <pre className="p-3.5 bg-black/60 border border-white/10 text-emerald-400 overflow-x-auto leading-relaxed text-xs">
{`function computeExpectedValue(orderPaise, bankHealthScore, gatewayFeePaise) {
  const pRecovery = bankHealthScore * 0.88; // Historical benchmark
  const frictionCostPaise = 500; // 5 INR customer fatigue penalty
  const expectedReturn = pRecovery * orderPaise;
  const totalCost = gatewayFeePaise + frictionCostPaise;
  
  return Math.round(expectedReturn - totalCost);
}`}
                  </pre>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-white/5 border border-white/10">
                      <span className="text-[#7096FF] font-bold block mb-1">POLICY GATE GUARDS</span>
                      <span className="text-xs text-white/70 leading-relaxed block">
                        Max 3 retries, min 15-min exponential backoff, customer notification velocity cap.
                      </span>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/10">
                      <span className="text-emerald-400 font-bold block mb-1">IDEMPOTENT WEBHOOKS</span>
                      <span className="text-xs text-white/70 leading-relaxed block">
                        HMAC SHA256 timing-safe signature comparison + atomic Redis key reservation.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // SHOWCASE B: BUILDER AND GROWTH OPERATOR WORKFLOW
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Surface Event */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-white/10 text-white/70">
                  <span>SURFACE: COMMUNITY CONVENING</span>
                  <span className="text-amber-400 font-semibold">STATUS: CROWDED ROOM</span>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 space-y-3">
                  <div className="font-mono text-xs font-bold text-[#F5B700]">
                    PROMPTWARS · GDG CAMPUS SPRINT
                  </div>
                  <div className="text-2xl font-display font-bold text-white">
                    350+ Collegiate Builders Live
                  </div>
                  <p className="text-xs text-white/80 font-sans leading-relaxed">
                    A packed auditorium of student engineers competing in synchronized 45-minute generative build sprints.
                  </p>
                </div>
              </div>

              {/* Right Column: Growth Architecture Underneath */}
              <div className="lg:col-span-7 bg-[#050811] p-6 border border-white/20 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[#F5B700] font-bold flex items-center gap-1.5">
                    <Share2 className="w-4 h-4" />
                    <span>GROWTH ENGINE & DISTRIBUTION FLYWHEEL</span>
                  </span>
                  <span className="text-xs text-white/60">VIRAL CO-EFFICIENT: 1.35x</span>
                </div>

                <div className="space-y-3 text-xs text-white/85">
                  <div className="p-3 bg-black/60 border border-white/10 space-y-1.5">
                    <span className="text-[#F5B700] font-bold block">1. THE COGNITIVE HOOK</span>
                    <span className="text-white/80 block leading-relaxed">
                      Don&apos;t run another dry lecture. Turn prompt engineering into an esports-style live bracket where audience members vote on functional web outputs.
                    </span>
                  </div>

                  <div className="p-3 bg-black/60 border border-white/10 space-y-1.5">
                    <span className="text-[#7096FF] font-bold block">2. THE DISTRIBUTION ENGINE</span>
                    <span className="text-white/80 block leading-relaxed">
                      Every participant must post their working deployment URL and prompt transcript to claim their certificate — creating organic peer-to-peer distribution loops across campus networks.
                    </span>
                  </div>

                  <div className="p-3 bg-black/60 border border-white/10 space-y-1.5">
                    <span className="text-emerald-400 font-bold block">3. THE RETENTION BRIDGE</span>
                    <span className="text-white/80 block leading-relaxed">
                      Convert hackathon energy into permanent weekly study cohorts (Alta Club & GDG tracks) so builders keep shipping long after the trophy is handed out.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* VOICE PROCESS SHOWCASE (WISPR FLOW INTEGRATION) */}
        <div data-slot="voice-engine" className="border-2 border-white/30 bg-[#050811] p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/20 gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#F5B700] uppercase font-bold mb-1">
                <Radio className="w-4 h-4 text-rose-500 animate-pulse" />
                <span>WISPR FLOW VOICE PROCESS SHOWCASE · MENTAL VELOCITY IN ACTION</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
                Speaking Ideas into Shipped Outcomes
              </h3>
            </div>
            <div className="font-mono text-xs bg-white/5 border border-white/20 p-2 text-white/70">
              <span className="text-amber-300 font-bold block">NOTE ON HISTORICAL FIDELITY:</span>
              Explicit example reconstruction demonstrating voice-to-code velocity.
            </div>
          </div>

          {/* Voice Step Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {VOICE_PROCESS_WORKFLOW.map((step, idx) => (
              <button
                key={step.stepNumber}
                onClick={() => setActiveVoiceStep(idx)}
                className={`p-3 text-left border font-mono text-xs transition-all ${
                  activeVoiceStep === idx
                    ? "bg-[#1434FF] text-white border-[#1434FF] shadow-brutal-sm"
                    : "bg-white/5 text-white/80 border-white/15 hover:border-white/40"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold">PHASE {step.stepNumber}</span>
                  <span className="text-xs text-white/60">{step.phase}</span>
                </div>
                <div className="text-xs font-sans font-medium line-clamp-1">
                  {step.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Voice Step Detail Display */}
          <div className="bg-white/5 border border-white/20 p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 font-mono text-xs">
              <div className="flex items-center gap-2 text-amber-300">
                <Mic className="w-4 h-4" />
                <span className="font-bold">DICTATED SPEECH STREAM</span>
              </div>
              <div className="flex items-center gap-4 text-white/70 text-xs">
                <span>DURATION: {VOICE_PROCESS_WORKFLOW[activeVoiceStep].spokenDuration}</span>
                <span>VELOCITY: {VOICE_PROCESS_WORKFLOW[activeVoiceStep].wpm} WPM</span>
              </div>
            </div>

            {/* Dictated Prompt Text with Voice Waveform Visual */}
            <div className="p-4 sm:p-6 bg-black/50 border border-white/15 rounded relative">
              <p className="font-serif italic text-lg sm:text-xl text-white/95 leading-relaxed">
                {VOICE_PROCESS_WORKFLOW[activeVoiceStep].voicePrompt}
              </p>
            </div>

            {/* Code / Generated Output Artifact */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-white/70">
                <span className="flex items-center gap-1.5 text-white font-bold">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>SYNTHESIZED IMPLEMENTATION</span>
                </span>
                <span>STATUS: VERIFIED GROUNDED</span>
              </div>
              <pre className="p-4 bg-black/70 border border-white/15 font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
                {VOICE_PROCESS_WORKFLOW[activeVoiceStep].codeOrArtifactSnippet}
              </pre>
            </div>

            {/* Iterations and Key Takeaway */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-[#F5B700] font-bold block mb-1">CORRECTIONS & NUANCE:</span>
                <ul className="list-disc list-inside space-y-1 text-white/80 text-xs">
                  {VOICE_PROCESS_WORKFLOW[activeVoiceStep].correctionsMade.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-[#7096FF] font-bold block mb-1">COGNITIVE VELOCITY INSIGHT:</span>
                <p className="text-white/80 text-xs leading-relaxed">
                  {VOICE_PROCESS_WORKFLOW[activeVoiceStep].keyInsight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
