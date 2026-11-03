"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced-motion
    if (typeof window === "undefined") return;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasFinePointer || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("cursor-pointer") ||
          window.getComputedStyle(target).cursor === "pointer")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {/* Outer Follower Ring */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: pos.x - (hovered ? 24 : 14),
          y: pos.y - (hovered ? 24 : 14),
          width: hovered ? 48 : 28,
          height: hovered ? 48 : 28,
          borderColor: hovered ? "#1434FF" : "#0A0E1A",
          backgroundColor: hovered ? "rgba(20, 52, 255, 0.08)" : "transparent",
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.4,
        }}
        className="fixed top-0 left-0 rounded-full border-2 border-[#0A0E1A] will-change-transform mix-blend-multiply"
      />
      {/* Central Precision Dot */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: hovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 500,
          mass: 0.1,
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#1434FF] will-change-transform"
      />
    </div>
  );
}

