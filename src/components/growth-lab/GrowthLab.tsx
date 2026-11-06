"use client";

import { useState } from "react";
import { 
  Rocket, 
  Target, 
  Lightbulb, 
  Megaphone, 
  CheckCircle2, 
  Activity, 
  Boxes,
  ArrowRight,
  TrendingUp,
  BarChart3
} from "lucide-react";
import { GROWTH_CAMPAIGNS, GrowthCampaign } from "@/data/campaigns";

export default function GrowthLab() {
  const [activeCampaignIdx, setActiveCampaignIdx] = useState(0);
  const [inspectorTab, setInspectorTab] = useState<"strategy" | "execution" | "resources">("strategy");

  const activeCampaign = GROWTH_CAMPAIGNS[activeCampaignIdx];

  const funnelStages = [
    { name: "Awareness", desc: "Work Out Loud vertical micro-content series" },
    { name: "Participation", desc: "Say It. Ship It. 45-minute campus sprints" },
    { name: "Product Trial", desc: "60-Second Workflow single-task challenge" },
    { name: "Activation", desc: "Direct desktop onboarding & keybinding setup" },
    { name: "Retention", desc: "Weekly developer lab rituals & study cohorts" },
    { name: "Advocacy", desc: "The Voice-First Campus Network student guild" },
  ];

  return (
    <section id="growth-lab" className="py-24 bg-[#F8F7F2] border-b-2 border-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0A0E1A]/20">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#1434FF] font-bold block mb-2">
              SECTION 05 · GROWTH & DISTRIBUTION STRATEGY
            </span>
            <h2 className="font-display font-black text-4xl sm:text-7xl text-[#0A0E1A] tracking-tight">
              The Wispr Flow Growth Lab
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-serif italic text-2xl sm:text-3xl text-[#1434FF] max-w-md font-semibold">
            &ldquo;How would I contribute to Wispr Flow India&apos;s growth?&rdquo;
          </p>
        </div>

        {/* Global Mandate Alert */}
        <div className="mb-12 p-4 bg-[#E8E7DF] border-2 border-[#0A0E1A] shadow-brutal-sm flex items-center justify-between font-mono text-xs text-[#0A0E1A]">
          <div className="flex items-center gap-2 font-bold uppercase">
            <Rocket className="w-4 h-4 text-[#1434FF]" />
            <span>MANDATORY GOVERNANCE TAG:</span>
            <span className="px-2 py-0.5 bg-[#0A0E1A] text-white">
              SPECULATIVE CAMPAIGN CONCEPTS — NOT YET EXECUTED
            </span>
          </div>
          <span className="hidden md:inline text-[#474E5D] font-semibold">
            GROUNDED IN CONFIRMED INDIAN CAMPUS & DEVELOPER DYNAMICS
          </span>
        </div>

        {/* 6-Stage Growth Funnel Blueprint */}
        <div data-slot="growth-funnel" className="mb-16 bg-white p-6 sm:p-8 border-2 border-[#0A0E1A] shadow-brutal">
          <div className="flex items-center justify-between pb-4 border-b border-[#0A0E1A]/10 mb-6 font-mono text-xs">
            <span className="font-bold uppercase text-[#0A0E1A] flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#1434FF]" />
              <span>THE COMPLETE 6-STAGE WISPR FLOW ADOPTION FLYWHEEL</span>
            </span>
            <span className="text-[#474E5D] font-semibold">CAMPUS TO HIGH-OUTPUT WORKER</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {funnelStages.map((stage, i) => (
              <div
                key={stage.name}
                className="p-3 bg-[#F8F7F2] border-2 border-[#0A0E1A] flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs text-[#474E5D] font-bold mb-1">
                    STAGE 0{i + 1}
                  </div>
                  <div className="font-display font-bold text-sm text-[#0A0E1A] mb-1">
                    {stage.name}
                  </div>
                </div>
                <div className="font-mono text-xs text-[#474E5D] leading-tight pt-2 border-t border-[#0A0E1A]/10 font-medium">
                  {stage.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Campaign Detail Explorer */}
        <div data-slot="growth-workbench" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Campaign Selectors */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase text-[#0A0E1A] font-bold tracking-wider block mb-2">
              SELECT PROPOSED EXPERIMENT:
            </span>
            {GROWTH_CAMPAIGNS.map((camp, idx) => {
              const isSelected = activeCampaignIdx === idx;
              return (
                <button
                  key={camp.id}
                  onClick={() => setActiveCampaignIdx(idx)}
                  className={`w-full text-left p-4 border-2 transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-[#0A0E1A] shadow-brutal translate-x-1"
                      : "bg-[#F8F7F2] border-[#0A0E1A]/20 hover:border-[#0A0E1A]"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-1.5">
                    <span className="font-bold text-[#1434FF]">
                      CAMPAIGN {camp.number}
                    </span>
                    <span className="px-1.5 py-0.5 bg-[#E8E7DF] border border-[#0A0E1A]/30 text-xs font-semibold">
                      {camp.funnelStage}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0A0E1A] mb-1">
                    {camp.title}
                  </h3>
                  <p className="font-mono text-xs text-[#474E5D] font-medium line-clamp-1">
                    {camp.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Campaign Inspector */}
          <div className="lg:col-span-8 bg-white border-2 border-[#0A0E1A] shadow-brutal p-6 sm:p-10 space-y-8">
            {/* Campaign Header */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#0A0E1A]/10 mb-4 font-mono text-xs">
                <span className="px-2.5 py-1 bg-[#1434FF] text-white font-bold">
                  EXPERIMENT 0{activeCampaign.number} / 04
                </span>
                <span className="text-[#991B1B] font-bold">
                  {activeCampaign.badge}
                </span>
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-[#0A0E1A] tracking-tight">
                {activeCampaign.title}
              </h3>
              <p className="font-serif italic text-xl text-[#474E5D] mt-1 font-semibold">
                {activeCampaign.tagline}
              </p>
            </div>

            {/* Inspector Tab Switcher */}
            <div className="flex flex-wrap gap-2 border-b border-[#0A0E1A]/10 pb-4 font-mono text-xs">
              <button
                onClick={() => setInspectorTab("strategy")}
                className={`px-3.5 py-1.5 border-2 transition-all font-bold uppercase tracking-wider ${
                  inspectorTab === "strategy"
                    ? "bg-[#0A0E1A] text-white border-[#0A0E1A] shadow-brutal-sm"
                    : "bg-[#F8F7F2] text-[#0A0E1A] border-[#0A0E1A]/20 hover:border-[#0A0E1A]"
                }`}
              >
                1. Core Strategy Matrix
              </button>
              <button
                onClick={() => setInspectorTab("execution")}
                className={`px-3.5 py-1.5 border-2 transition-all font-bold uppercase tracking-wider ${
                  inspectorTab === "execution"
                    ? "bg-[#0A0E1A] text-white border-[#0A0E1A] shadow-brutal-sm"
                    : "bg-[#F8F7F2] text-[#0A0E1A] border-[#0A0E1A]/20 hover:border-[#0A0E1A]"
                }`}
              >
                2. Execution Blueprint
              </button>
              <button
                onClick={() => setInspectorTab("resources")}
                className={`px-3.5 py-1.5 border-2 transition-all font-bold uppercase tracking-wider ${
                  inspectorTab === "resources"
                    ? "bg-[#0A0E1A] text-white border-[#0A0E1A] shadow-brutal-sm"
                    : "bg-[#F8F7F2] text-[#0A0E1A] border-[#0A0E1A]/20 hover:border-[#0A0E1A]"
                }`}
              >
                3. Resources & Hypotheses
              </button>
            </div>

            {/* Tab 1: Core Strategy Matrix */}
            {inspectorTab === "strategy" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="p-4 bg-[#F8F7F2] border-2 border-[#0A0E1A] space-y-1.5">
                    <span className="font-bold text-[#1434FF] flex items-center gap-1.5 uppercase">
                      <Target className="w-3.5 h-3.5" />
                      Target Audience
                    </span>
                    <p className="text-[#0A0E1A] font-sans text-xs leading-relaxed font-medium">
                      {activeCampaign.audience}
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8F7F2] border-2 border-[#0A0E1A] space-y-1.5">
                    <span className="font-bold text-[#92400E] flex items-center gap-1.5 uppercase">
                      <Lightbulb className="w-3.5 h-3.5" />
                      Consumer Insight
                    </span>
                    <p className="text-[#0A0E1A] font-sans text-xs leading-relaxed font-medium">
                      {activeCampaign.consumerInsight}
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8F7F2] border-2 border-[#0A0E1A] space-y-1.5">
                    <span className="font-bold text-[#166534] flex items-center gap-1.5 uppercase">
                      <Rocket className="w-3.5 h-3.5" />
                      Creative Hook
                    </span>
                    <p className="text-[#0A0E1A] font-sans text-xs leading-relaxed font-medium">
                      {activeCampaign.creativeHook}
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8F7F2] border-2 border-[#0A0E1A] space-y-1.5">
                    <span className="font-bold text-[#6B21A8] flex items-center gap-1.5 uppercase">
                      <Megaphone className="w-3.5 h-3.5" />
                      Channel Strategy
                    </span>
                    <p className="text-[#0A0E1A] font-sans text-xs leading-relaxed font-medium">
                      {activeCampaign.channelStrategy}
                    </p>
                  </div>
                </div>

                {/* Experiment Hypothesis */}
                <div className="p-4 bg-[#1434FF]/5 border-2 border-[#1434FF] font-mono text-xs space-y-1">
                  <span className="font-bold text-[#1434FF] block uppercase">
                    EXPERIMENT HYPOTHESIS:
                  </span>
                  <p className="text-[#0A0E1A] text-xs font-sans leading-relaxed font-medium">
                    {activeCampaign.experimentHypothesis}
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Execution Plan */}
            {inspectorTab === "execution" && (
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A0E1A] block">
                  STEP-BY-STEP EXECUTION BLUEPRINT:
                </span>
                <div className="space-y-2.5">
                  {activeCampaign.executionPlan.map((step, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-[#F8F7F2] border border-[#0A0E1A]/20 flex items-start gap-3 text-xs text-[#0A0E1A]"
                    >
                      <span className="w-5 h-5 bg-[#0A0E1A] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed font-sans">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Resource Requirements & Success Hypotheses */}
            {inspectorTab === "resources" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 bg-white border-2 border-[#0A0E1A] space-y-2 shadow-brutal-sm">
                  <span className="font-bold uppercase text-[#0A0E1A] flex items-center gap-1.5">
                    <Boxes className="w-3.5 h-3.5 text-[#1434FF]" />
                    Resource Requirements
                  </span>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-[#474E5D] font-sans font-medium">
                    {activeCampaign.resourceRequirements.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white border-2 border-[#0A0E1A] space-y-2 shadow-brutal-sm">
                  <span className="font-bold uppercase text-[#0A0E1A] flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-[#166534]" />
                    Target KPI Hypotheses
                  </span>
                  <div className="space-y-2 text-xs font-mono">
                    {activeCampaign.successMetrics.map((met, i) => (
                      <div key={i} className="flex justify-between border-b border-[#0A0E1A]/10 pb-1.5">
                        <span className="text-[#474E5D] font-semibold">{met.kpi}:</span>
                        <span className="font-bold text-[#0A0E1A] text-right ml-2">{met.targetHypothesis}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
