"use client";

import { useEffect } from "react";
import { X, Play, Volume2, Sparkles, AlertCircle } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string | null;
}

export default function VideoModal({ isOpen, onClose, videoUrl = null }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0A0E1A] text-white border-2 border-white/30 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/20 bg-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <span id="video-modal-title" className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              3-MINUTE PITCH · WISPR FLOW INDIA HIRING CHALLENGE
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-white/70 hover:text-white border border-white/20 hover:border-white transition-colors"
            aria-label="Close Video Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Player Area */}
        <div className="relative aspect-video w-full bg-black flex flex-col items-center justify-center p-8 text-center">
          {videoUrl ? (
            <iframe
              src={videoUrl}
              title="3-Minute Pitch Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            // Elegant Configurable Video Player Placeholder
            <div className="max-w-md space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#1434FF] text-white flex items-center justify-center mx-auto border-2 border-white shadow-brutal-sm">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>

              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 font-mono text-[11px] uppercase border border-amber-400/40">
                  VIDEO URL CONFIGURABLE SLOT
                </span>
                <h3 className="font-display font-black text-2xl text-white">
                  3-Minute Pitch Ready for Submission Video
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                  This video player is configured to host Divyanshu Sinha&apos;s 3-minute pitch video. Set the <code className="text-amber-300">videoUrl</code> prop or embed your YouTube/Loom/Vimeo link.
                </p>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 font-mono text-xs text-white/60 flex items-center justify-between text-left">
                <span>FORMAT: 1080P / 60FPS</span>
                <span>DURATION: 03:00 MAX</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Metadata */}
        <div className="px-6 py-4 border-t border-white/20 bg-white/5 flex flex-wrap items-center justify-between font-mono text-xs text-white/70 gap-2">
          <span>SPEAKER: DIVYANSHU SINHA (ADYPU, PUNE)</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white text-[#0A0E1A] font-bold uppercase hover:bg-white/90 transition-colors"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
}

