# Divyanshu Sinha — Builder & Growth Portfolio

> Multidisciplinary software builder, AI engineer, and community organizer based in Pune, India.  
> Engineered as an editorial, high-performance portfolio application for the **Wispr Flow India Hiring Challenge**.

Live Deployment: [https://portfoliods-livid.vercel.app](https://portfoliods-livid.vercel.app)  
GitHub Repository: [https://github.com/di0206-innovator/Portfolio](https://github.com/di0206-innovator/Portfolio)

---

## 🏗️ Architecture & Tech Stack

This project is built using modern React and Next.js primitives designed for speed, typographic craft, accessibility, and search/LLM visibility:

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Prerendering, Server Components)
- **UI & Styling**: [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/) with a custom brutalist design token system
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/) (Center-to-perimeter playcards bloom, depth blur, tactile spring physics)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Playwright](https://playwright.dev/) End-to-End suite (Desktop, Tablet, Mobile responsive layout validation)
- **Search & Generative Engine Visibility**: Fully compliant Schema.org JSON-LD, Geo Meta headers (Pune, MH), OpenGraph, dynamic `sitemap.xml`, `robots.txt`, and standard `/llms.txt` + `/llms-full.txt` endpoints.

---

## 📁 Clean Codebase Organization

The directory structure is strictly typed and decoupled:

```
├── docs/                   # Full evidence pack, credentials & references
├── public/                 # Static assets, vector diagrams, and LLM text protocols
│   ├── images/
│   │   ├── events/         # Authentic community & event photography
│   │   └── projects/       # Genuine product screenshots (NotesGPT, Stratify, etc.)
│   ├── llms.txt            # AEO/LLM index file for AI search crawlers
│   └── llms-full.txt       # Full context digest for LLMs
├── src/
│   ├── app/                # Next.js App Router (layout, page, sitemap, robots, manifest)
│   ├── components/         # Modular, single-responsibility UI sections
│   │   ├── about/          # Biography, academic background & timeline
│   │   ├── arrival/        # Preloader screen & authentic numerical counter
│   │   ├── capabilities/   # 6 core dimensions of execution
│   │   ├── community/      # Event timeline & photo documentary archive
│   │   ├── cursor/         # Tactile spring cursor follower
│   │   ├── footer/         # Contact terminal & responsive background watermark
│   │   ├── hero/           # Center-to-perimeter bloom & multi-plane parallax depth
│   │   ├── navigation/     # Pinned brutalist navbar & pitch trigger
│   │   ├── philosophy/     # Builder principles & craftsmanship notes
│   │   ├── projects/       # 9 featured case studies, modal simulators & NotesGPT showcase
│   │   ├── seo/            # Rich JSON-LD structured schema
│   │   ├── setup/          # Strategic $3,000 creator infrastructure proposal & ROI engine
│   │   ├── video/          # Accessible 3-Minute pitch video modal
│   │   └── xray/           # Interactive Wispr Flow voice pipeline simulator
│   ├── data/               # Strongly-typed source data (projects, events, setup, notes)
│   └── styles/             # Global CSS, design tokens, and brutalist scanlines
└── tests/                  # Playwright E2E and hero responsive layout test suites
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18.17+ or Node.js 20+
- npm or pnpm

### 1. Clone & Install
```bash
git clone https://github.com/di0206-innovator/Portfolio.git
cd Portfolio
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

### 4. Run Automated End-to-End Tests
```bash
npx playwright test
```

---

## 🎯 Key Sections in This Portfolio

1. **Hero Section**: Dual-headline typography with 10 interactive builder playcards blooming from center to perimeter with resting depth blur and unblur on hover.
2. **Selected Work (9 Projects)**: Deep-dive case studies for **NotesGPT**, **KrishiSetu**, **Stratify**, **MerchantPulse**, **Healthify**, **NyaySaathi**, **Forge Goa**, **Climbit**, and **Brainworks**.
3. **NotesGPT Product Showcase**: Genuine application screenshots, technical architecture flow (PDF.js → OCR → Dual Embeddings → WebGPU Local Inference), and latency metrics.
4. **Wispr Flow India Growth Engine ($3,000 Proposal)**: Evidence-backed investment proposal breaking down Phase 1 (Core) vs Phase 2 (Conditional) equipment allocation with an amortized ROI model.
5. **Community Archive**: Interactive photographic timeline documenting GDG on Campus, PromptWars, SIH 2026, and regional builder circles.
6. **3-Minute Pitch Video**: Directly integrated modal viewer with Google Drive embedded preview and direct fallback links.

---

## 📜 License
MIT © 2026 Divyanshu Sinha. Built with pride in Pune, India.
