"use client";

import { useState, useEffect } from "react";
import { Play, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenVideo: () => void;
}

export default function Navbar({ onOpenVideo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Builds", href: "#selected-work" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Community", href: "#community" },
    { label: "The Process", href: "#xray" },
    { label: "Growth Lab", href: "#growth-lab" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8F7F2]/95 backdrop-blur-md border-b-2 border-[#0A0E1A] py-2.5 shadow-sm"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-[#0A0E1A] focus-visible:ring-2 focus-visible:ring-[#1434FF]"
          >
            <div className="w-8 h-8 bg-[#0A0E1A] text-white flex items-center justify-center font-mono font-bold text-sm tracking-tighter border-2 border-[#0A0E1A] group-hover:bg-[#1434FF] transition-colors">
              DS
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-sm tracking-tight leading-none text-[#0A0E1A]">
                DIVYANSHU SINHA
              </span>
              <span className="font-mono text-xs text-[#474E5D] font-semibold tracking-wider uppercase leading-tight mt-0.5">
                Builder × Growth
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-xs font-mono uppercase tracking-wider text-[#0A0E1A] font-semibold hover:text-[#1434FF] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenVideo}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 bg-[#1434FF] text-white text-xs font-mono font-bold tracking-wide uppercase hover:bg-[#0A0E1A] transition-colors border-2 border-[#0A0E1A] shadow-brutal-sm whitespace-nowrap"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>3-Min Pitch</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0A0E1A] hover:bg-[#E8E7DF] border-2 border-[#0A0E1A] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F8F7F2] pt-24 px-6 pb-8 lg:hidden flex flex-col justify-between border-b-2 border-[#0A0E1A]">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl font-bold text-[#0A0E1A] flex items-center justify-between border-b border-[#0A0E1A]/10 pb-3"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-[#474E5D]" />
              </a>
            ))}
          </nav>

          <div className="space-y-3 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVideo();
              }}
              className="w-full py-3.5 bg-[#1434FF] text-white font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-brutal border-2 border-[#0A0E1A]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Watch 3-Minute Pitch Video</span>
            </button>
            <div className="font-mono text-xs text-[#474E5D] text-center uppercase tracking-widest font-semibold">
              Wispr Flow India Hiring Challenge
            </div>
          </div>
        </div>
      )}
    </>
  );
}
