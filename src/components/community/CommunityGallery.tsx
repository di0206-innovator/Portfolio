"use client";

import { useState } from "react";
import { 
  Camera, 
  Calendar, 
  MapPin, 
  Tag, 
  ExternalLink, 
  Award, 
  Users, 
  FolderCheck, 
  CheckCircle2, 
  HelpCircle
} from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import { EVENT_REGISTRY, EventRecord } from "@/data/events";
import { RECOGNITIONS, RecognitionItem } from "@/data/recognition";

export default function CommunityGallery() {
  const [activeTab, setActiveTab] = useState<"timeline" | "recognition" | "stills">("timeline");
  const [eventCategoryFilter, setEventCategoryFilter] = useState<string>("All");
  const [eventPage, setEventPage] = useState<number>(0);
  const pageSize = 3;
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventRecord | null>(null);

  const eventCategories = ["All", "Organized & Hosted", "Participated & Selected", "Campus & Culture"];

  const filteredEvents = eventCategoryFilter === "All"
    ? EVENT_REGISTRY
    : EVENT_REGISTRY.filter(ev => ev.category === eventCategoryFilter);

  const totalPages = Math.ceil(filteredEvents.length / pageSize);
  const paginatedEvents = filteredEvents.slice(eventPage * pageSize, (eventPage + 1) * pageSize);

  return (
    <section id="community" className="pt-48 pb-72 sm:pt-60 sm:pb-80 bg-[#0A0E1A] text-white border-b-2 border-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/20">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#F5B700] font-bold block mb-2">
              SECTION 04 · COMMUNITY ARCHIVE
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white">
              People, Places & Momentum
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-serif italic text-2xl text-amber-300 max-w-sm leading-tight">
            Collegiate density. Genuine ownership.
          </p>
        </div>

        {/* 3 Main View Switchers */}
        <div className="flex flex-wrap items-center gap-3 mb-8 font-mono text-xs uppercase font-bold">
          <button
            onClick={() => { setActiveTab("timeline"); setEventPage(0); }}
            className={`px-4 py-2 border transition-all flex items-center gap-2 ${
              activeTab === "timeline"
                ? "bg-[#1434FF] text-white border-white/60 shadow-brutal-white font-bold"
                : "bg-white/5 text-white/80 border-white/20 hover:border-white/50"
            }`}
          >
            <Calendar className="w-4 h-4 text-[#F5B700]" />
            <span>Timeline</span>
          </button>

          <button
            onClick={() => setActiveTab("recognition")}
            className={`px-4 py-2 border transition-all flex items-center gap-2 ${
              activeTab === "recognition"
                ? "bg-[#1434FF] text-white border-white/60 shadow-brutal-white font-bold"
                : "bg-white/5 text-white/80 border-white/20 hover:border-white/50"
            }`}
          >
            <Award className="w-4 h-4 text-[#FDE047]" />
            <span>Recognition</span>
          </button>

          <button
            onClick={() => setActiveTab("stills")}
            className={`px-4 py-2 border transition-all flex items-center gap-2 ${
              activeTab === "stills"
                ? "bg-[#1434FF] text-white border-white/60 shadow-brutal-white font-bold"
                : "bg-white/5 text-white/80 border-white/20 hover:border-white/50"
            }`}
          >
            <Camera className="w-4 h-4 text-emerald-400" />
            <span>Film Stills</span>
          </button>
        </div>

        {/* TAB 1: Events & Community Registry Timeline */}
        {activeTab === "timeline" && (
          <div className="space-y-6">
            {/* Filter Sub-pills */}
            <div className="flex flex-wrap gap-2">
              {eventCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setEventCategoryFilter(cat); setEventPage(0); }}
                  className={`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-all border ${
                    eventCategoryFilter === cat
                      ? "bg-white text-[#0A0E1A] border-white font-bold"
                      : "bg-white/5 text-white/70 border-white/10 hover:border-white/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Events Grid: 3 cards per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedEvents.map((ev) => (
                <div
                  key={ev.id}
                  onClick={() => setSelectedEvent(ev)}
                  className="bg-white/5 border border-white/20 hover:border-white/50 p-5 flex flex-col justify-between transition-all duration-200 hover:translate-y-[-2px] space-y-3 cursor-pointer group"
                >
                  <div>
                    {/* Top Status & Date */}
                    <div className="flex items-center justify-between font-mono text-xs text-white/60 pb-2 border-b border-white/10 mb-2">
                      <span className="flex items-center gap-1.5 text-white font-bold uppercase text-[11px]">
                        {ev.roleConfirmed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                        )}
                        <span>{ev.date}</span>
                      </span>
                      <span className="px-2 py-0.5 bg-black text-amber-300 font-mono text-xs uppercase border border-amber-300 font-bold">
                        {ev.statusBadge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-black text-xl text-white mb-1.5 leading-snug group-hover:text-amber-300 transition-colors">
                      {ev.title}
                    </h3>

                    {/* Role */}
                    <div className="font-mono text-xs text-amber-300 font-semibold mb-2">
                      Role: {ev.role}
                    </div>

                    {/* Scale Tag */}
                    {ev.scale && (
                      <div className="font-mono text-xs text-white/80 bg-white/5 p-2 border border-white/10">
                        {ev.scale}
                      </div>
                    )}
                  </div>

                  {/* Highlights and Links Footer */}
                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between font-mono text-xs gap-2">
                    <span className="text-white/60 flex items-center gap-1 text-[11px]">
                      <MapPin className="w-3 h-3 text-[#F5B700]" />
                      {ev.location}
                    </span>

                    <span className="text-amber-300 font-bold hover:underline">
                      Inspect Event →
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs">
                <span className="text-white/60">
                  {eventPage + 1} / {totalPages}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEventPage(p => Math.max(0, p - 1))}
                    disabled={eventPage === 0}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-white border border-white/20 font-bold uppercase whitespace-nowrap"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={() => setEventPage(p => Math.min(totalPages - 1, p + 1))}
                    disabled={eventPage >= totalPages - 1}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-white border border-white/20 font-bold uppercase whitespace-nowrap"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Speaking, Recognition & Earlier Honors */}
        {activeTab === "recognition" && (
          <div className="space-y-6">
            <div className="p-4 bg-white/5 border border-white/20 font-mono text-xs text-white/80 flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-amber-300">
                SPEAKING ENGAGEMENTS & DOCUMENTED RECOGNITION (2019 – PRESENT)
              </span>
              <span className="text-white/60">
                Maintained with authentic citations; no inflated credentials.
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RECOGNITIONS.map((rec) => (
                <div
                  key={rec.id}
                  className="p-5 bg-white/5 border border-white/20 hover:border-white/50 flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-white/60 pb-2 border-b border-white/10 mb-2">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#FDE047]" />
                        <span className="font-bold uppercase text-white">{rec.category}</span>
                      </div>
                      <span className="text-amber-300 font-bold">{rec.date}</span>
                    </div>

                    <h3 className="font-display font-black text-xl text-white mb-1.5 leading-snug">
                      {rec.title}
                    </h3>

                    <div className="font-mono text-xs text-white/70 mb-2">
                      {rec.organization} · {rec.location}
                    </div>

                    <p className="text-xs sm:text-sm text-white/85 font-sans leading-relaxed">
                      {rec.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 font-mono text-[11px] text-white/60">
                    <span className="text-amber-400 font-semibold block mb-0.5">SOURCE RECORD:</span>
                    {rec.citationNotes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Documentary Stills */}
        {activeTab === "stills" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group bg-white/5 border border-white/20 hover:border-white/60 p-6 flex flex-col justify-between transition-all duration-200 hover:translate-y-[-2px] cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-white/70 pb-3 border-b border-white/10 mb-4">
                    <span className="flex items-center gap-1.5 text-white font-semibold uppercase">
                      <Tag className="w-3.5 h-3.5 text-[#F5B700]" />
                      {item.category}
                    </span>
                    <span>{item.location}</span>
                  </div>

                  <div className="relative aspect-[4/3] w-full bg-white/10 border border-white/20 mb-5 flex items-center justify-center p-4 overflow-hidden group-hover:bg-white/15 transition-colors">
                    <Camera className="w-8 h-8 text-white/50 group-hover:text-white/80 transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#F5B700] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/60">
                  <span>{item.date}</span>
                  <span className="text-[#7096FF] font-bold">Inspect Still →</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-[#0A0E1A] text-white border-2 border-white/30 max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex justify-between items-start border-b border-white/20 pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#F5B700] block mb-1">
                  {selectedEvent.category} · {selectedEvent.location}
                </span>
                <h3 className="font-display font-black text-2xl text-white">
                  {selectedEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-1 hover:bg-white/20 text-white font-mono text-xs border border-white/40"
              >
                ESC / CLOSE
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="text-amber-300 font-bold text-sm">
                CONFIRMED ROLE: {selectedEvent.role}
              </div>
              {selectedEvent.scale && (
                <div className="p-3 bg-white/5 border border-white/10 text-white/90">
                  {selectedEvent.scale}
                </div>
              )}
            </div>

            <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed">
              {selectedEvent.description}
            </p>

            <div className="space-y-1.5 font-mono text-xs text-white/80 border-t border-white/10 pt-4">
              <span className="text-[#7096FF] font-bold uppercase block mb-1">VERIFIED HIGHLIGHTS:</span>
              {selectedEvent.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-amber-400">·</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs">
              {selectedEvent.driveFolderUrl ? (
                <a
                  href={selectedEvent.driveFolderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#1434FF] hover:bg-blue-600 text-white font-bold uppercase flex items-center gap-1.5 border border-white/20"
                >
                  <FolderCheck className="w-4 h-4 text-amber-300" />
                  <span>Open Google Drive Archive ↗</span>
                </a>
              ) : (
                <span className="text-white/60">No Drive Folder Attached</span>
              )}

              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold uppercase"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Documentary Still Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-[#0A0E1A] text-white border-2 border-white/30 max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex justify-between items-start border-b border-white/20 pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#F5B700]">
                  {selectedItem.category} · {selectedItem.location}
                </span>
                <h3 className="font-display font-black text-2xl text-white mt-1">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1 hover:bg-white/20 text-white font-mono text-xs border border-white/40"
              >
                ESC / CLOSE
              </button>
            </div>

            <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed">
              {selectedItem.caption}
            </p>

            <div className="bg-white/5 p-4 border border-white/10 font-mono text-xs text-white/80 space-y-1">
              <div>TIMELINE: {selectedItem.date}</div>
              <div>LOCATION: {selectedItem.location}</div>
              <div>ARCHIVE NOTE: Local photography slot ready. Connected to Drive backup.</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
