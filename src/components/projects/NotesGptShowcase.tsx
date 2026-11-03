"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  FileText, 
  Cpu, 
  Layers, 
  Zap, 
  Maximize2, 
  X, 
  ExternalLink, 
  ArrowRight,
  Database,
  Eye,
  CheckCircle2,
  HardDrive
} from "lucide-react";

interface NotesGptScreenshot {
  id: string;
  title: string;
  category: "DOCUMENT INGESTION" | "AI STUDY ASSISTANT" | "STUDY KIT GENERATION" | "LOCAL AI EXECUTION";
  caption: string;
  src: string;
  aspect: string;
}

const NOTESGPT_SCREENSHOTS: NotesGptScreenshot[] = [
  {
    id: "hero-overview",
    title: "NotesGPT Workstation Dashboard",
    category: "AI STUDY ASSISTANT",
    caption: "Full dual-mode academic workspace: document selector, source chunk inspector, and citation-grounded RAG reasoning pane.",
    src: "/images/projects/notesgpt-overview.png",
    aspect: "aspect-[16/9]",
  },
  {
    id: "document-ingestion",
    title: "Multimodal Document Ingestion Pipeline",
    category: "DOCUMENT INGESTION",
    caption: "Multi-source ingest of lecture PDFs, textbook chapters, and handwritten notes via Tesseract OCR and vector segmentation.",
    src: "/images/projects/notesgpt-ingestion.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: "study-kit",
    title: "Single-Pass Study Kit Generation",
    category: "STUDY KIT GENERATION",
    caption: "Single-request compilation of active-recall flashcard decks, comprehensive revision sheets, and self-testing exam simulations.",
    src: "/images/projects/notesgpt-studykit.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: "offline-webgpu",
    title: "Local Offline Inference & WebGPU Engine",
    category: "LOCAL AI EXECUTION",
    caption: "Zero-cloud offline execution via Ollama (deepseek-r1:8b) and in-browser WebLLM hardware acceleration for spotty PG Wi-Fi.",
    src: "/images/projects/notesgpt-offline.jpg",
    aspect: "aspect-[16/10]",
  },
];

export default function NotesGptShowcase() {
  const [activeImage, setActiveImage] = useState<NotesGptScreenshot>(NOTESGPT_SCREENSHOTS[0]);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<NotesGptScreenshot | null>(null);

  const openLightbox = (img: NotesGptScreenshot) => {
    setLightboxImage(img);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full bg-[#FFFFFF] text-[#0A0E1A] p-4 sm:p-7 select-none font-sans">
      {/* 1. Header Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-[#0A0E1A] gap-2 mb-6">
        <div>
          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1434FF] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>FEATURED CASE STUDY · PRODUCT SHOWCASE</span>
          </div>
          <h3 className="font-display font-black text-xl sm:text-2xl text-[#0A0E1A] tracking-tight mt-0.5">
            NOTESGPT ACADEMIC RESEARCH WORKSTATION
          </h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-2.5 py-1 bg-[#1434FF] text-white font-bold tracking-wider shadow-brutal-xs">
            &lt;15s LATENCY
          </span>
          <span className="px-2.5 py-1 bg-[#E8E7DF] border border-[#0A0E1A] text-[#0A0E1A] font-bold">
            LOCAL INFERENCE (WEBGPU)
          </span>
        </div>
      </div>

      {/* 2. Editorial Screenshot Gallery (No Empty Space) */}
      <div className="space-y-4 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Main Primary Product Screenshot */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-[#F8F7F2] border-2 border-[#0A0E1A] shadow-brutal p-3 sm:p-4 group">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#0A0E1A]/10 font-mono text-[11px]">
              <span className="font-bold text-[#1434FF] uppercase tracking-wider">
                {activeImage.category}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openLightbox(activeImage);
                }}
                className="flex items-center gap-1 text-[#474E5D] hover:text-[#0A0E1A] font-bold uppercase text-[10px] bg-white px-2 py-0.5 border border-[#0A0E1A]/20"
                title="Expand screenshot"
              >
                <Maximize2 className="w-3 h-3" />
                <span>Expand View</span>
              </button>
            </div>

            <div 
              onClick={() => openLightbox(activeImage)}
              className="relative w-full aspect-[16/10] bg-black/5 border border-[#0A0E1A] overflow-hidden cursor-zoom-in"
            >
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                priority
                className="object-contain hover:scale-[1.01] transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            <div className="pt-3 font-mono text-xs">
              <div className="font-bold text-[#0A0E1A] font-display text-sm">
                {activeImage.title}
              </div>
              <p className="text-[#474E5D] text-xs font-sans mt-0.5 leading-relaxed">
                {activeImage.caption}
              </p>
            </div>
          </div>

          {/* Secondary Screenshot Deck (Click to switch primary preview) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-xs font-bold uppercase text-[#474E5D] block pb-1 border-b border-[#0A0E1A]/10">
              Interactive View Deck (Click to Inspect)
            </span>
            {NOTESGPT_SCREENSHOTS.map((shot) => {
              const isSelected = shot.id === activeImage.id;
              return (
                <button
                  key={shot.id}
                  onClick={() => setActiveImage(shot)}
                  className={`p-2.5 border-2 text-left transition-all flex items-start gap-3 ${
                    isSelected
                      ? "bg-white border-[#1434FF] shadow-brutal-sm"
                      : "bg-[#F8F7F2] border-[#0A0E1A]/20 hover:border-[#0A0E1A] hover:bg-white"
                  }`}
                >
                  <div className="relative w-20 h-14 bg-black/5 border border-[#0A0E1A] shrink-0 overflow-hidden">
                    <Image
                      src={shot.src}
                      alt={shot.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0 font-mono">
                    <div className="text-[10px] uppercase font-bold text-[#1434FF]">
                      {shot.category}
                    </div>
                    <div className="font-bold text-xs text-[#0A0E1A] truncate font-display mt-0.5">
                      {shot.title}
                    </div>
                    <div className="text-[10px] text-[#474E5D] truncate mt-0.5">
                      Click to switch
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Technical Architecture Strip */}
      <div className="mb-6 p-4 sm:p-5 bg-[#F8F7F2] border-2 border-[#0A0E1A]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#0A0E1A]/10 gap-2 mb-3 font-mono">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1434FF] flex items-center gap-1.5">
            <Cpu className="w-4 h-4" />
            TECHNICAL PIPELINE ARCHITECTURE
          </span>
          <span className="text-[11px] text-[#474E5D]">
            Documented Production Flow (RAG + Local LLM)
          </span>
        </div>

        {/* Pipeline Nodes Flow */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs mb-4">
          {[
            "Document Upload",
            "Text Extraction / OCR",
            "Chunking",
            "Embeddings",
            "Vector Retrieval",
            "LLM Generation",
            "Study Outputs"
          ].map((stage, idx, arr) => (
            <div key={stage} className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-white border border-[#0A0E1A] font-bold text-[11px] text-[#0A0E1A] shadow-brutal-xs">
                {stage}
              </span>
              {idx < arr.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-[#1434FF] shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Documented Tech Badges */}
        <div className="pt-3 border-t border-[#0A0E1A]/10">
          <span className="font-mono text-[10px] uppercase font-bold text-[#474E5D] block mb-2">
            DOCUMENTED TECHNOLOGIES &amp; LOCAL ENGINES:
          </span>
          <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
            {[
              "Next.js 16",
              "React 19",
              "Tailwind CSS 4",
              "Gemini 2.0 Flash",
              "Ollama (deepseek-r1:8b)",
              "WebLLM (WebGPU)",
              "Gemini Nano",
              "Tesseract.js OCR",
              "Gemini Vision",
              "Firestore Vector Collections",
              "IndexedDB (Local TF-IDF)",
              "Firebase Authentication"
            ].map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-white border border-[#0A0E1A]/30 text-[#0A0E1A]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Verified Engineering Metrics & Claims */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
        <div className="p-3.5 bg-white border-2 border-[#0A0E1A] shadow-brutal-xs">
          <span className="text-[10px] text-[#474E5D] uppercase font-bold block mb-1">
            STUDY-KIT LATENCY REDUCTION
          </span>
          <div className="text-2xl font-black text-[#1434FF] font-display">
            ~60s → &lt;15s
          </div>
          <p className="text-[11px] text-[#474E5D] mt-1 font-sans">
            Optimized via single-pass structured JSON generation schema instead of serial agent calls (project benchmark).
          </p>
        </div>

        <div className="p-3.5 bg-white border-2 border-[#0A0E1A] shadow-brutal-xs">
          <span className="text-[10px] text-[#474E5D] uppercase font-bold block mb-1">
            API CALL CONSOLIDATION
          </span>
          <div className="text-2xl font-black text-[#0A0E1A] font-display">
            4+ Calls → 1 Request
          </div>
          <p className="text-[11px] text-[#474E5D] mt-1 font-sans">
            Revision sheets, flashcards, and exam questions synthesized concurrently in 1 structured generation request.
          </p>
        </div>

        <div className="p-3.5 bg-white border-2 border-[#0A0E1A] shadow-brutal-xs">
          <span className="text-[10px] text-[#474E5D] uppercase font-bold block mb-1">
            OFFLINE INFERENCE FLEXIBILITY
          </span>
          <div className="text-2xl font-black text-emerald-700 font-display">
            100% Offline Capable
          </div>
          <p className="text-[11px] text-[#474E5D] mt-1 font-sans">
            Local vector retrieval via IndexedDB + Ollama and in-browser WebLLM with WebGPU hardware acceleration.
          </p>
        </div>
      </div>

      {/* 5. Lightbox Modal */}
      {lightboxOpen && lightboxImage && (
        <div 
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-[#0A0E1A]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white border-2 border-white max-w-5xl w-full p-4 sm:p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[#0A0E1A] font-mono">
              <div>
                <span className="text-xs uppercase text-[#1434FF] font-bold">
                  {lightboxImage.category}
                </span>
                <h4 className="font-display font-black text-lg sm:text-xl text-[#0A0E1A]">
                  {lightboxImage.title}
                </h4>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-1.5 hover:bg-[#F8F7F2] border border-[#0A0E1A] transition-colors"
                title="Close lightbox"
              >
                <X className="w-5 h-5 text-[#0A0E1A]" />
              </button>
            </div>

            <div className="relative w-full aspect-[16/10] bg-black/5 border border-[#0A0E1A] overflow-hidden mb-3">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>

            <div className="font-mono text-xs text-[#474E5D] flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-[#0A0E1A]/10">
              <p className="font-sans text-xs text-[#0A0E1A]">
                {lightboxImage.caption}
              </p>
              <span className="shrink-0 text-[11px] font-bold text-[#1434FF]">
                Press ESC or click outside to dismiss
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
