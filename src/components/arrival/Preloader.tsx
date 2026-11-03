"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"counter" | "welcome" | "dissolve">("counter");

  // 4x4 Grid for Staggered Pixel Grid Dissolve
  const gridCells = Array.from({ length: 16 }, (_, i) => i);

  useEffect(() => {
    // Check prefers-reduced-motion or previously visited
    if (typeof window !== "undefined") {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        sessionStorage.getItem("ds_visited")
      ) {
        onComplete();
        return;
      }
      sessionStorage.setItem("ds_visited", "true");
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase("welcome");
          setTimeout(() => {
            setPhase("dissolve");
            setTimeout(onComplete, 350);
          }, 450);
          return 100;
        }
        const increment = Math.floor(Math.random() * 20) + 12;
        return Math.min(prev + increment, 100);
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 pointer-events-none select-none">
        {phase === "dissolve" ? (
          // STAGGERED PIXEL GRID DISSOLVE
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
            {gridCells.map((idx) => {
              // Deterministic pseudo-random delay based on cell index
              const delay = ((idx * 7) % 16) * 0.03;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay, ease: "easeOut" }}
                  className="bg-[#1434FF] border border-[#1434FF]"
                />
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex flex-col justify-between bg-[#1434FF] text-white p-6 sm:p-12 pointer-events-auto"
          >
            {/* Top metadata */}
            <div className="flex justify-between items-start font-mono text-xs sm:text-sm tracking-wider uppercase opacity-90">
              <div>
                <span className="font-bold">DIVYANSHU SINHA</span>
                <span className="block text-xs opacity-70">PORTFOLIO × WISPR FLOW 2026</span>
              </div>
              <div className="text-right">
                <span className="font-bold">BUILDER / GROWTH / CREATIVE TECH</span>
                <span className="block text-xs opacity-70">PUNE, INDIA</span>
              </div>
            </div>

            {/* Central sequence */}
            <div className="my-auto flex flex-col items-center justify-center text-center">
              {phase === "counter" ? (
                <motion.div
                  key="counter"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center"
                >
                  <span className="font-mono text-7xl sm:text-9xl font-black tracking-tighter">
                    {progress}
                    <span className="text-3xl sm:text-5xl text-amber-300 ml-1 font-normal">%</span>
                  </span>
                  <span className="font-mono text-xs sm:text-sm tracking-widest text-white/70 mt-4 uppercase font-semibold">
                    INITIALIZING ASSETS & ARCHITECTURE
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-2"
                >
                  <p className="font-mono text-sm sm:text-base tracking-widest uppercase text-white/80 font-medium">
                    Welcome to the world of
                  </p>
                  <h1 className="font-serif italic text-7xl sm:text-9xl font-normal tracking-tight text-white">
                    Divyanshu
                  </h1>
                </motion.div>
              )}
            </div>

            {/* Bottom telemetry bar */}
            <div className="w-full space-y-3">
              <div className="w-full bg-white/20 h-1.5 overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.08 }}
                />
              </div>
              <div className="flex justify-between items-center font-mono text-xs opacity-80">
                <span>STATUS: SYSTEM READY</span>
                <span>INPUT: VOICE-FIRST ORBIT</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
