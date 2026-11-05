"use client";

import { useState } from "react";
import Preloader from "@/components/arrival/Preloader";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import Capabilities from "@/components/capabilities/Capabilities";
import ProjectGallery from "@/components/projects/ProjectGallery";
import CommunityGallery from "@/components/community/CommunityGallery";
import XRaySection from "@/components/xray/XRaySection";
import GrowthLab from "@/components/growth-lab/GrowthLab";
import Philosophy from "@/components/philosophy/Philosophy";
import AboutPerson from "@/components/about/AboutPerson";
import DictionaryAndSetup from "@/components/setup/DictionaryAndSetup";
import FinalCta from "@/components/footer/FinalCta";
import VideoModal from "@/components/video/VideoModal";
import CustomCursor from "@/components/cursor/CustomCursor";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const scrollToBuilds = () => {
    const el = document.getElementById("selected-work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-[#F8F7F2] text-[#0A0E1A]">
      {/* SECTION 00: THE ARRIVAL (Preloader) */}
      {!loadingComplete && (
        <Preloader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* STICKY EDITORIAL NAVIGATION */}
      <Navbar onOpenVideo={() => setVideoModalOpen(true)} />

      {/* SECTION 01: THE HERO */}
      <Hero
        onOpenVideo={() => setVideoModalOpen(true)}
        onExploreBuilds={scrollToBuilds}
      />

      {/* SECTION 02: WHAT I BRING TO THE TABLE */}
      <Capabilities />

      {/* SECTION 03: SELECTED WORK (7 BUILDS + DEEP-DIVE MODALS) */}
      <ProjectGallery />

      {/* SECTION 04: PEOPLE, PLACES & COMMUNITY */}
      <CommunityGallery />

      {/* SECTION 05: EVERY SURFACE HAS AN UNDERNEATH (X-RAY & VOICE PROCESS) */}
      <XRaySection />

      {/* SECTION 06: THE WISPR FLOW GROWTH LAB */}
      <GrowthLab />

      {/* SECTION 07: WHAT I BELIEVE (PHILOSOPHY) */}
      <Philosophy />

      {/* SECTION 08: OUTSIDE THE PRODUCT, THERE IS A PERSON */}
      <AboutPerson />

      {/* SECTION 09: NAME / DICTIONARY / THE $3,000 SETUP */}
      <DictionaryAndSetup />

      {/* SECTION 10: THE FINAL CTA & WATERMARK FOOTER */}
      <FinalCta onOpenVideo={() => setVideoModalOpen(true)} />

      {/* ACCESSIBLE VIDEO PITCH MODAL */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoUrl="https://drive.google.com/file/d/1zZ9nqLol_Gz395InStT5m8Vvxa-iQ5kH/preview"
      />

      {/* CUSTOM CURSOR FOLLOWER */}
      <CustomCursor />
    </main>
  );
}

