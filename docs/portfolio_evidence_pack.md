# Divyanshu Sinha — Portfolio Evidence & Content Pack

**Prepared:** 3 November 2026  
**Purpose:** Source-backed content for the existing Antigravity portfolio workspace, especially the Projects, Builder's Log, Community, Timeline and About sections.

> IMPORTANT FOR THE IDE: This is a content/evidence pack, not permission to rewrite the existing design. Preserve the current Aletheia-inspired visual system, existing interactions and working implementation. Integrate the material into the existing project. Do not invent facts to fill gaps.

---

## 1. Source and evidence rules

Use this evidence hierarchy:

1. The user's supplied project links, published articles, GitHub repositories and event-photo folders.
2. The public project README/source code and public LinkedIn/Dev.to articles.
3. Previously saved user-provided portfolio/profile documents available in the ChatGPT Library.
4. Earlier conversation context, only where consistent with the above.

For every content item, preserve:
- Source URL, where one exists.
- Publication/event date only when known.
- The user's role only when supported.
- Whether the item is a product, prototype, team project, event, competition, recognition or personal interest.

Never turn an event attendee into an organiser, a host into the sole organiser, a team project into an individual project, or a prototype into a launched business. Use labels such as `Built`, `Team project`, `Prototype`, `Concept`, `Hosted`, `Co-organised`, `Attended`, `Participated`, `Recognition`, or `Role to confirm` as appropriate.

Some LinkedIn and Google Drive sources may require sign-in or sharing permission. Keep their links as source links but do not claim their media/content was inspected if inaccessible. The Google Drive folder URLs below were supplied by the user; they could not be fetched by the web research environment, so Antigravity should use downloaded local assets if the user places them in the repository.

---

# 2. Project registry

## 2.1 NotesGPT / Campus Study GPT

**Category:** EdTech · Retrieval-Augmented Generation · Local AI · Multimodal document understanding  
**Status:** Public GitHub repository; deployed experience/demo status to be confirmed.  
**Positioning:** An AI-powered, offline-capable study companion that turns course materials into source-grounded learning and exam-preparation resources.

**Problem and motivation**
The project grew from the user's own exam-preparation workflow: textbooks, PDFs, lecture slides, handwritten notes and unreliable internet access in a PG. The engineering question was how to make uploaded learning material searchable, how to retrieve the right passages from long documents, and whether the same study workflow could continue locally when cloud access is unavailable.

**Main goals**
- Understand PDFs, lecture notes, handwritten notes and scanned textbooks.
- Answer questions using uploaded material rather than generic model knowledge.
- Support cloud and local execution modes.
- Generate revision notes, flashcards, question banks, mock exams and interactive Q&A from the same knowledge source.

**RAG pipeline**
`Documents → Text extraction / OCR → Chunking → Embeddings → Vector storage / local index → Similarity retrieval → Retrieved context → LLM generation → Notes / flashcards / chat / exams`

**Document and OCR paths**
- Browser extraction: PDF.js.
- Browser OCR: Tesseract.js.
- Server PDF parsing: `pdf-parse`.
- Office parsing: OfficeParser.
- Cloud vision/OCR: Gemini Generative Vision / Gemini Vision.

**Inference modes**
- Cloud: Gemini 2.0 Flash (`gemini-2.0-flash`) through Vercel AI SDK; Firestore-backed cloud vector search.
- Local desktop/server: Ollama (`deepseek-r1:8b`, `gemma2:2b`).
- Browser: WebLLM using WebGPU, cached browser model weights.
- Browser-native experiment: Chrome `window.ai` / Gemini Nano (experimental / browser-dependent).

**Storage and retrieval**
- Cloud vector collections: Firestore.
- Client storage: IndexedDB.
- Local search index: TF-IDF.
- Two-stage retrieval: embeddings/metadata first, calculate similarity, fetch full text for top chunks.
- Source traceability & grounding: explicit citations.

**Published optimisation claim**
Study-kit generation changed from 4 sequential LLM requests to 1 structured request. Project-reported benchmark: ~60s before down to <15s after, API calls reduced from 4+ to 1.

**Tech stack**
- Next.js 16 App Router; React 19.
- Tailwind CSS 4; Framer Motion; Lucide Icons.
- Gemini 2.0 Flash via Vercel AI SDK.
- Ollama; WebLLM; Chrome `window.ai` experiment.
- Firestore vector collections; IndexedDB; TF-IDF local search.
- PDF.js; `pdf-parse`; OfficeParser.
- Tesseract.js; Gemini Generative Vision.
- Firebase Authentication (guest sessions and email signups).

**Required links**
- Dev.to article: https://dev.to/divyanshu_sinha_72e579e28/building-notesgpt-an-offline-capable-ai-study-assistant-with-rag-local-llms-and-webgpu-3l22
- LinkedIn post: https://www.linkedin.com/posts/divyanshu-sinha-46074126b_ai-rag-generativeai-ugcPost-7470318914133028864-vMpF/
- Shortlink: https://lnkd.in/p/dUJPb2AG
- GitHub: https://github.com/di0206-innovator/Notes-GPT

---

## 2.2 Stratify

**Category:** Startup ecosystem intelligence · Founder operating system  
**Live URL:** https://stratify-murex.vercel.app/  
**LinkedIn post:** https://www.linkedin.com/posts/divyanshu-sinha-46074126b_stratify-buildinpublic-startups-ugcPost-7488096918762569728-X1av/  
**Shortlink:** https://lnkd.in/p/duupiZnH  

**Source-backed story**
KrishiSetu was the first startup idea seriously worked on. Working through founder questions surfaced the broader ecosystem problem Stratify explores: connecting founders, funding, tech stack, competitors, accelerators, angels, universities, government/grants, and mentors into a living startup graph.

---

## 2.3 Healthify

**Category:** Consumer AI · Food/ingredient intelligence  
**Live URL:** https://healthify-lyart.vercel.app/  
**LinkedIn post:** https://www.linkedin.com/posts/divyanshu-sinha-46074126b_ai-agenticai-buildinpublic-ugcPost-7466022185028050945-KSzM/  
**Shortlink:** https://lnkd.in/p/dKeuAV9B  

**Source-backed story**
AI-powered food safety scanner to help people understand what is in food consumed. Born from experimenting with agentic AI systems, learning, failing, and rebuilding. Regional context (FSSAI). Informational product concept, not medical advice.

---

## 2.4 Climbit Decision Engine

**Category:** Climate technology · Deterministic decision engine + AI assistance  
**GitHub:** https://github.com/di0206-innovator/Climbit  
**LinkedIn post:** https://www.linkedin.com/posts/divyanshu-sinha-46074126b_promptwars-buildinpublic-aiengineering-ugcPost-7474685219451637760-eUaQ/  
**Shortlink:** https://lnkd.in/p/daV8a-y4  

**Source-backed story**
PromptWars Challenge 3 project started with <12 hours remaining. In 6–9 hours, evolved from basic carbon calculator into an AI-assisted climate decision engine.
Key innovation: separation of concerns. Deterministic TypeScript calculations and ROI ranking; AI assists with personalized explanation and negotiation, validated strictly with Zod.
Reported sprint outcome: Moved from rank 28,897 to rank 449 in a 12-hour sprint. 34 passing tests, PWA, accessibility.

---

## 2.5 KrishiSetu (Flagship Founder Journey)

**Category:** AgriTech · Founder-led product exploration · AI agricultural operating system  
**Live URL:** https://krishi-setu-ivory.vercel.app/  
**GitHub:** https://github.com/di0206-innovator/Krishi-Setu  

**Founder narrative**
First startup idea seriously built. Explores a connected agricultural lifecycle: farmer onboarding, farm records, crop cultivation advisory, weather/soil intelligence, harvest planning, cold-storage, APMC market info, dynamic bidding, agri-credit concepts. Distinguish demonstrated UI/workflows from future roadmap ambitions.

---

## 2.6 NyaySaathi

**Category:** Legal AI · Contract intelligence  
**Live URL:** https://nyaysaathi-6qcz.vercel.app/  
**Product capabilities:** Clause redlining, agreement extraction, risk escalation scoring, matter-based legal action framing, document Q&A. Legal workflow intelligence, not a substitute for a lawyer.

---

## 2.7 MerchantPulse

**Category:** FinTech · AI-assisted payment recovery  
**Live URL:** https://merchantpulse-psi.vercel.app/  
**Live URL:** https://merchantpulse-psi.vercel.app/  
**Architecture:** Observe → Decide → Act → Reconcile. Failed payment ingestion (UPI, card, net-banking), webhook verification, expected-value calculation, bounded AI recovery, idempotent dispatch, human-in-the-loop escalation.

---

## 2.8 Forge Goa / HackerHouse Goa Submission

**Category:** Community experience · Builder identity · Interactive event product  
**Live URL:** https://hhgoa26-eta.vercel.app/  
**Story:** HackerHouse Goa '26 submission prototype. Builder archetypes, squad mode, forge passport identity flow.

---

## 2.9 Brainworks — SIH Mining Safety Project (SIH 2026)

**Category:** Team project · Edge AI · Mining safety / low-visibility vehicle awareness  
**Repository:** https://github.com/manasir747/Brainworks  
**Problem:** SIH26007 challenge on safer vehicle movement in dense fog / low visibility in open-cast iron ore mines.  
**Solution:** Radar sensing + Edge AI / TinyML for near-vehicle processing, proximity and collision alerts, fleet intelligence.  
**Role & Context:** Team project with teammate Sahil Mane while co-leading internal hackathon operations; finished second place in the internal round.

---

# 3. Published Writing / External Project Articles

| Title / Story | Platform | Link |
|---|---|---|
| Building NotesGPT: Offline-capable AI Study Assistant | Dev.to | https://dev.to/divyanshu_sinha_72e579e28/building-notesgpt-an-offline-capable-ai-study-assistant-with-rag-local-llms-and-webgpu-3l22 |
| NotesGPT Build Story | LinkedIn | https://www.linkedin.com/posts/divyanshu-sinha-46074126b_ai-rag-generativeai-ugcPost-7470318914133028864-vMpF/ |
| Stratify: The Startup Economy Graph | LinkedIn | https://www.linkedin.com/posts/divyanshu-sinha-46074126b_stratify-buildinpublic-startups-ugcPost-7488096918762569728-X1av/ |
| Healthify: Food Safety & Agentic AI | LinkedIn | https://www.linkedin.com/posts/divyanshu-sinha-46074126b_ai-agenticai-buildinpublic-ugcPost-7466022185028050945-KSzM/ |
| Climbit: 12-Hour PromptWars Sprint | LinkedIn | https://www.linkedin.com/posts/divyanshu-sinha-46074126b_promptwars-buildinpublic-aiengineering-ugcPost-7474685219451637760-eUaQ/ |
| SIH 2026 Internal Hackathon & Brainworks | LinkedIn | https://www.linkedin.com/posts/divyanshu-sinha-46074126b/ |
| AI Builder's Reflection: "Should this exist?" | LinkedIn | https://www.linkedin.com/in/divyanshu-sinha-46074126b/ |

---

# 4. Event & Community Registry

## Organised / Hosted / Led
1. **PromptWars × ADYPU** (1 Sep 2026): Organiser / campus outreach. ~250 registrations, ~150 attendees. Drive: `https://drive.google.com/drive/folders/1ZftschdpsKNsFc7wL8pczh240loTLGMZ`
2. **PromptWars × ALTA School of Technology** (23 Oct 2026): Host. 8-hour AI buildathon. Drive: `https://drive.google.com/drive/folders/1RA28TDbLb_iqxmaVDbrTRqRE4_1uX00B`
3. **SIH 2026 Internal Hackathon — Alta School of Technology** (5 Sep 2026): Co-led ops with Sahil Mane while competing; 27 teams, 8 finalists, 2nd place.
4. **Hackwarts — 24-hour Hackathon**: Organiser (Google Student Researcher portfolio).
5. **GDG on Campus ADYPU**: Management Lead / Organizer (from Nov 2025). Android Study Jam (15 Jan 2025), Agents using Python & AI, Hands-on Framer.

## Participated / Selected
1. **Claude Code Community Meetup — Pune**: Selected participant (170 selected from 2,000+ applicants). Drive: `https://drive.google.com/drive/folders/1xXWeX4x6spTzewClgIBBVpS_IsWcqXPy`
2. **Newton's Tekron**: 24-hour hackathon participant.
3. **HackerHouse Goa / Forge Goa '26**: Builder & submission (28–31 Oct 2026).
4. **AMD Ryzen AI Slingshot**: April 2026 participant.
5. **Samsung Solve for Tomorrow**: May 2025 innovation programme participant.
6. **Scratch the Code — Vedam's Noesis**: 8-hour hackathon participant.
7. **Business Plan Challenge**: Venture competition participant.

## Campus & Celebrations (Role to confirm)
- Ganesh Chaturthi celebration (Drive: `1kBXVO7H_nZ7cGryvpvwEh_liEamctHxw`)
- Teacher's Day (Drive: `1F3qs_jxX-2IpzHtOdejeIax72jsgPJd_`)
- Janmashtami (Drive: `1Ec-y-tRZVbuoO-EEYmK0Z6WYPSCAoSCq`)
- Manu Agarwal guest session (Drive: `10CXbz2UvnRwO_ipHsGb2HFrqvdMmN8P2`)

---

# 5. Speaking & Recognition

- **Guest Speaker — Career Guidance on AI & Emerging Tech** (July 2025): Invited speaker at own school.
- **Public Speaking — Dept of Planning & Statistics, DNH & DD** (June 2024): Selected among 40 students as emerging speaker.
- **Best Anchor Award — Vaatsalya School Sports Event** (Nov 2024).
- **Inter-School Quiz — Indian Coast Guard** (Jan 2024).
- **INSPIRE MANAK National Workshop & Mentorship** (Feb 2020): Mentorship for graphene smart-helmet prototype at age 13.
- **Swachhta Action Plan — IITTM** (Nov 2019).

