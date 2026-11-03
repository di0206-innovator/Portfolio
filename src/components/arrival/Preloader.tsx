"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<"count" | "words" | "dissolve">("count");
  const [isDone, setIsDone] = useState(false);
  const [gridConfig, setGridConfig] = useState({ cols: 9, rows: 6, total: 54 });

  useEffect(() => {
    // Respect reduced motion or prior session visit
    if (typeof window !== "undefined") {
      const isPortrait = window.innerHeight > window.innerWidth;
      setGridConfig({
        cols: isPortrait ? 5 : 9,
        rows: isPortrait ? 9 : 6,
        total: (isPortrait ? 5 : 9) * (isPortrait ? 9 : 6),
      });

      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        sessionStorage.getItem("ds_visited")
      ) {
        onComplete();
        setIsDone(true);
        return;
      }
      sessionStorage.setItem("ds_visited", "true");
    }

    // Number ticker 0 -> 100 with authentic Aletheia easing snap points
    const snapPoints = [0, 7, 11, 24, 36, 41, 54, 62, 70, 88, 98, 99, 100];
    let snapIndex = 0;

    const interval = setInterval(() => {
      snapIndex++;
      if (snapIndex >= snapPoints.length) {
        clearInterval(interval);
        setProgress(100);

        // Sequence: after count reaches 100%, show words
        setTimeout(() => {
          setStage("words");

          // After words reveal, trigger block grid dissolve
          setTimeout(() => {
            setStage("dissolve");

            // Complete loader callback
            setTimeout(() => {
              setIsDone(true);
              onComplete();
            }, 550);
          }, 1100);
        }, 320);
      } else {
        setProgress(snapPoints[snapIndex]);
      }
    }, 115);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] overflow-hidden select-none"
        aria-hidden="true"
        style={{ color: "#F8F7F2" }}
      >
        {/* Stage: Dissolve Grid (staggered tile disappearance) */}
        {stage === "dissolve" ? (
          <div
            className="absolute inset-0 grid"
            style={{
              gridTemplateColumns: `repeat(${gridConfig.cols}, 1fr)`,
              gridTemplateRows: `repeat(${gridConfig.rows}, 1fr)`,
            }}
          >
            {Array.from({ length: gridConfig.total }).map((_, i) => {
              // Pseudo-random staggered delay based on hash
              const delay = ((i * 37) % gridConfig.total) * 0.009;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 0, scale: 0.86 }}
                  transition={{ duration: 0.42, delay, ease: [0.2, 0.8, 0.2, 1] }}
                  className="bg-[#1434FF]"
                  style={{ boxShadow: "0 0 0 0.6px #1434FF" }}
                />
              );
            })}
          </div>
        ) : (
          /* Solid Cobalt Stage with Counter and Typography Mask */
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#1434FF] flex flex-col justify-between"
            style={{ padding: "clamp(1.1rem, 4.5vw, 5rem)" }}
          >
            {/* Top Meta Bar */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex justify-between items-start font-mono text-[11px] sm:text-xs uppercase tracking-wider text-white/90"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-bold tracking-widest">DIVYANSHU SINHA</span>
                <span className="text-white/60">BUILDER & CREATIVE TECHNOLOGIST</span>
              </div>
              <div className="flex gap-4 text-right font-mono text-[11px] sm:text-xs">
                <span className="hidden sm:inline text-white/60">WISPR FLOW CHALLENGE</span>
                <span className="font-bold">PUNE, INDIA</span>
              </div>
            </motion.div>

            {/* Central Typography Mask: "Hi, I am Divyanshu Sinha" */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-center px-4">
              {stage === "words" && (
                <div className="overflow-hidden py-4">
                  {/* Line 1: Subtitle "Hi, I am" */}
                  <div className="overflow-hidden mb-1 sm:mb-2">
                    <motion.span
                      initial={{ y: "115%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="block font-sans font-medium text-[clamp(1.2rem,2.8vw,2.4rem)] tracking-tight text-white/95"
                    >
                      Hi, I am
                    </motion.span>
                  </div>

                  {/* Line 2: Name "Divyanshu Sinha" in exact Fraunces/Instrument-Serif italic typography */}
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ y: "115%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="font-serif italic font-normal text-[clamp(3.5rem,13vw,12rem)] leading-[0.95] text-white tracking-tight"
                    >
                      Divyanshu Sinha
                    </motion.h1>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Counter: Giant 0 -> 100 tabular numerals with superscript % */}
            <div className="relative z-10">
              {stage === "count" ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ y: "-125%", opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }}
                  className="font-display font-black leading-[0.8] tracking-tighter text-white tabular-nums select-none"
                  style={{
                    fontSize: "clamp(6rem, 24vw, 20rem)",
                    letterSpacing: "-0.05em",
                  }}
                >
                  <span>{progress}</span>
                  <sup
                    className="font-serif italic font-light text-amber-300 ml-1 select-none"
                    style={{ fontSize: "0.28em", verticalAlign: "top" }}
                  >
                    %
                  </sup>
                </motion.div>
              ) : null}
            </div>

            {/* Bottom Progress Line */}
            <div className="w-full pt-4 border-t border-white/20 flex justify-between items-center font-mono text-[10px] sm:text-xs text-white/70 uppercase tracking-widest">
              <span>INITIALIZING SYSTEM ASSETS</span>
              <span>100% PRODUCTION READY</span>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
