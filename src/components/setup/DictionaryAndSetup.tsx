"use client";

import { useState } from "react";
import { 
  Receipt, 
  Volume2, 
  Filter, 
  CheckCircle2, 
  Sparkles,
  Info
} from "lucide-react";
import { BUDGET_ITEMS, SETUP_CATEGORIES, TOTAL_BUDGET } from "@/data/setup";

export default function DictionaryAndSetup() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Professional Audio Capture");

  const filteredItems =
    selectedCategory === "All"
      ? BUDGET_ITEMS
      : BUDGET_ITEMS.filter((item) => item.category === selectedCategory);

  const filteredSubtotal = filteredItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <section id="setup" className="py-36 sm:py-48 bg-[#E8E7DF] border-b-2 border-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dictionary-Style Reference Section */}
        <div className="mb-32 sm:mb-40 bg-white p-8 sm:p-12 border-2 border-[#0A0E1A] shadow-brutal max-w-4xl mx-auto">
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

        {/* THE MOBILE VOICE-FIRST CREATOR & GROWTH LAB ($3,000 SETUP) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#0A0E1A]/20">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#1434FF] font-bold block mb-2">
                SECTION 09 · CHALLENGE HARDWARE PROPOSAL
              </span>
              <h2 className="font-display font-black text-3xl sm:text-6xl text-[#0A0E1A] tracking-tight">
                The Mobile Voice-First Creator & Growth Lab
              </h2>
            </div>
            <div className="mt-4 md:mt-0 font-mono text-right">
              <span className="text-xs uppercase text-[#474E5D] font-bold block">TOTAL PROPOSED BUDGET:</span>
              <span className="text-3xl sm:text-4xl font-bold text-[#1434FF]">
                ${TOTAL_BUDGET.toFixed(2)} USD
              </span>
            </div>
          </div>

          {/* Operational Purpose Manifesto */}
          <div className="mb-10 p-5 bg-white border-2 border-[#0A0E1A] shadow-brutal-sm flex items-start gap-3">
            <Info className="w-5 h-5 text-[#1434FF] shrink-0 mt-0.5" />
            <p className="font-sans text-xs sm:text-sm text-[#0A0E1A] leading-relaxed">
              <strong>OPERATIONAL PURPOSE:</strong> Field-ready creator & growth kit to document builders, capture hackathons, record voice workflows, and execute Wispr Flow campus adoption experiments. <em>(Speculative proposal — items not yet purchased).</em>
            </p>
          </div>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-3.5 py-1.5 border-2 transition-all uppercase ${
                selectedCategory === "All"
                  ? "bg-[#0A0E1A] text-white border-[#0A0E1A] font-bold shadow-brutal-sm"
                  : "bg-white text-[#0A0E1A] border-[#0A0E1A]/20 hover:border-[#0A0E1A]"
              }`}
            >
              All Categories (14 Items)
            </button>
            {SETUP_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 border-2 transition-all uppercase text-xs ${
                  selectedCategory === cat
                    ? "bg-[#0A0E1A] text-white border-[#0A0E1A] font-bold shadow-brutal-sm"
                    : "bg-white text-[#0A0E1A] border-[#0A0E1A]/20 hover:border-[#0A0E1A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Interactive Itemized Receipt Table */}
          <div data-slot="budget-receipt" className="bg-white border-2 border-[#0A0E1A] shadow-brutal overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="bg-[#0A0E1A] text-white uppercase text-xs tracking-wider">
                    <th className="p-3.5">Category & Item</th>
                    <th className="p-3.5 hidden md:table-cell">Key Specifications</th>
                    <th className="p-3.5">Strategic Growth Purpose</th>
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
                        <span className="font-mono text-xs text-[#1434FF] font-semibold uppercase">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-3.5 text-[#474E5D] text-xs hidden md:table-cell max-w-xs font-mono font-medium">
                        {item.specs}
                      </td>
                      <td className="p-3.5 text-[#0A0E1A] text-xs font-sans max-w-sm leading-relaxed">
                        {item.purpose}
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
                      {selectedCategory === "All" ? "Total Exact Allocation" : `Subtotal: ${selectedCategory}`}
                    </td>
                    <td className="p-4 text-center hidden md:table-cell text-xs text-[#474E5D] font-medium">
                      6 Core Strategic Growth Dimensions
                    </td>
                    <td className="p-4 text-center">
                      {filteredItems.reduce((acc, it) => acc + it.qty, 0)}
                    </td>
                    <td className="p-4 text-right text-base text-[#1434FF] font-black">
                      ${filteredSubtotal.toFixed(2)} USD
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
