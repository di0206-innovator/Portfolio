"use client";

import { Play, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

interface FinalCtaProps {
  onOpenVideo: () => void;
}

export default function FinalCta({ onOpenVideo }: FinalCtaProps) {
  return (
    <footer id="contact" className="relative bg-[#1434FF] text-white pt-24 pb-12 overflow-hidden border-t-2 border-[#0A0E1A]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA Statement */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-amber-300 font-bold">
            SECTION 09 · CONCLUSION & INITIATION
          </div>
          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
            Have a growth problem worth solving?
          </h2>
          <div className="font-serif italic text-5xl sm:text-7xl lg:text-8xl text-amber-300 leading-[0.95]">
            Let&apos;s speak the answer into existence.
          </div>
          <p className="font-sans text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed pt-2">
            Whether you&apos;re building the future of voice-first computing at Wispr Flow, scaling developer adoption, or exploring ambitious zero-to-one ventures — let&apos;s talk.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenVideo}
              className="px-6 py-4 bg-white text-[#0A0E1A] font-mono text-xs sm:text-sm uppercase tracking-wider font-bold border-2 border-[#0A0E1A] shadow-brutal flex items-center gap-2.5 transition-all hover:bg-[#F5B700] hover:translate-x-[-1px] hover:translate-y-[-1px]"
            >
              <Play className="w-4 h-4 fill-current text-[#1434FF]" />
              <span>Watch 3-Minute Video Pitch</span>
            </button>

            <a
              href="mailto:divyanshu.b.sinha@gmail.com"
              className="px-6 py-4 bg-[#0A0E1A] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-bold border-2 border-white/40 shadow-brutal flex items-center gap-2 transition-all hover:bg-black hover:translate-x-[-1px] hover:translate-y-[-1px]"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch via Email</span>
            </a>
          </div>
        </div>

        {/* Social and Navigation Links Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-white/20 font-mono text-xs">
          <div className="space-y-3">
            <span className="font-bold text-amber-300 uppercase block text-xs">DIRECT CONNECT</span>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/divyanshu-sinha-46074126b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors text-white/90"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
              <a
                href="https://github.com/di0206-innovator"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors text-white/90"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
              <a
                href="https://in.pinterest.com/sinhadeep0206/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors text-white/90"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.053.225-.177.268-.407.16-1.523-.709-2.472-2.938-2.472-4.73 0-3.853 2.799-7.397 8.077-7.397 4.241 0 7.535 3.022 7.535 7.062 0 4.214-2.657 7.608-6.345 7.608-1.239 0-2.404-.644-2.804-1.408l-.763 2.909c-.276 1.056-1.026 2.38-1.526 3.19C9.695 23.818 10.832 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
                <span>Pinterest</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <span className="font-bold text-amber-300 uppercase block text-xs">BUILDS & DEPLOYMENTS</span>
            <div className="space-y-1.5 text-white/90">
              <a href="https://stratify-murex.vercel.app/" target="_blank" rel="noopener noreferrer" className="block hover:underline whitespace-nowrap">
                Stratify · Startup OS
              </a>
              <a href="https://github.com/di0206-innovator/Notes-GPT" target="_blank" rel="noopener noreferrer" className="block hover:underline whitespace-nowrap">
                NotesGPT · Local RAG
              </a>
              <a href="https://krishi-setu-ivory.vercel.app/" target="_blank" rel="noopener noreferrer" className="block hover:underline whitespace-nowrap">
                KrishiSetu · AgriTech
              </a>
              <a href="https://healthify-lyart.vercel.app/" target="_blank" rel="noopener noreferrer" className="block hover:underline whitespace-nowrap">
                Healthify · Food AI
              </a>
              <a href="https://github.com/di0206-innovator/Climbit" target="_blank" rel="noopener noreferrer" className="block hover:underline whitespace-nowrap">
                Climbit · Climate Decision
              </a>
              <a href="https://nyaysaathi-6qcz.vercel.app/" target="_blank" rel="noopener noreferrer" className="block hover:underline whitespace-nowrap">
                NyaySaathi · Legal AI
              </a>
              <a href="https://merchantpulse-psi.vercel.app/" target="_blank" rel="noopener noreferrer" className="block hover:underline whitespace-nowrap">
                MerchantPulse · Razorpay
              </a>
              <a href="https://hhgoa26-eta.vercel.app/" target="_blank" rel="noopener noreferrer" className="block hover:underline whitespace-nowrap">
                Forge Goa · HackerHouse
              </a>
              <a href="https://github.com/manasir747/Brainworks" target="_blank" rel="noopener noreferrer" className="block hover:underline whitespace-nowrap">
                Brainworks · SIH 2026
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <span className="font-bold text-amber-300 uppercase block text-xs">COMMUNITIES</span>
            <div className="space-y-1.5 text-white/90">
              <div>GDG ADYPU · Organizer</div>
              <div>Alta Pune Club · President</div>
              <div>Student Content Lead for Alta YT</div>
            </div>
          </div>

          <div className="space-y-3">
            <span className="font-bold text-amber-300 uppercase block text-xs">SPECIFICATION</span>
            <div className="space-y-1 text-white/80 text-xs">
              <div>Wispr Flow Hiring Challenge</div>
              <div>Engineered with Next.js & TypeScript</div>
              <div>Pune, Maharashtra, India</div>
              <div>© 2026 Divyanshu Sinha</div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Responsive Watermark: DIVYANSHU */}
      <div className="w-full pt-10 pb-2 select-none overflow-hidden pointer-events-none px-4">
        <svg
          viewBox="0 0 1000 130"
          className="w-full max-w-7xl mx-auto h-auto block select-none"
          aria-hidden="true"
        >
          <text
            x="500"
            y="75"
            dominantBaseline="middle"
            textAnchor="middle"
            className="font-display font-black fill-white/10 uppercase tracking-tighter"
            fontSize="105"
            letterSpacing="-0.02em"
          >
            DIVYANSHU
          </text>
        </svg>
      </div>
    </footer>
  );
}
