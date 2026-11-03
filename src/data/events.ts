export interface EventRecord {
  id: string;
  title: string;
  category: "Organized & Hosted" | "Participated & Selected" | "Campus & Culture";
  tier: "Organized / Led" | "Selected / Participated" | "Campus Initiative (Role to confirm)";
  date: string;
  location: string;
  role: string;
  roleConfirmed: boolean;
  scale?: string;
  description: string;
  highlights: string[];
  driveFolderUrl?: string;
  relatedLink?: string;
  statusBadge: string;
}

export const EVENT_REGISTRY: EventRecord[] = [
  // --- ORGANISED / HOSTED / LED ---
  {
    id: "promptwars-adypu",
    title: "PromptWars × ADYPU",
    category: "Organized & Hosted",
    tier: "Organized / Led",
    date: "1 September 2026",
    location: "ADYPU Campus, Pune",
    role: "Organizer & Campus Outreach Lead",
    roleConfirmed: true,
    scale: "~250 registrations · ~150 attendees",
    description:
      "Campus AI buildathon and prompt engineering tournament bringing student builders together to compete under tight clock constraints. Led campus outreach and operational execution.",
    highlights: [
      "Orchestrated student outreach generating over 250 verified builder registrations",
      "Managed tournament floor logistics and multi-round competitive prompt judging",
      "Internal tracking: ~142–160 physical participants on event floor",
    ],
    driveFolderUrl: "https://drive.google.com/drive/folders/1ZftschdpsKNsFc7wL8pczh240loTLGMZ",
    statusBadge: "Verified Community Event",
  },
  {
    id: "promptwars-alta",
    title: "PromptWars × ALTA Pune",
    category: "Organized & Hosted",
    tier: "Organized / Led",
    date: "23 October 2026",
    location: "Alta School of Technology, Pune",
    role: "Event Host & MC",
    roleConfirmed: true,
    scale: "8-Hour Buildathon · Top 3 Awarded",
    description:
      "Hosted an intensive 8-hour AI buildathon. Participants hacked on generative AI toolchains for 4–5 hours, followed by top 10 live presentations before an evaluation panel.",
    highlights: [
      "Hosted on-stage walkthroughs, countdown pacing, and final judging announcements",
      "Coordinated with student mentor squads to unblock technical deployment hurdles",
      "Cultivated high-energy builder culture with live prototype demos",
    ],
    driveFolderUrl: "https://drive.google.com/drive/folders/1RA28TDbLb_iqxmaVDbrTRqRE4_1uX00B",
    statusBadge: "Verified Event Host",
  },
  {
    id: "sih-2026-internal",
    title: "SIH 2026 Internal Hackathon",
    category: "Organized & Hosted",
    tier: "Organized / Led",
    date: "5 September 2026",
    location: "Alta School of Technology, Pune",
    role: "Co-Operations & Competitor",
    roleConfirmed: true,
    scale: "27 Competing Teams · 2nd Place Finish",
    description:
      "Smart India Hackathon 2026 internal qualifying round. Co-led event operations and logistics with teammate Sahil Mane while simultaneously competing with team Brainworks, securing 2nd place.",
    highlights: [
      "Managed room operations, mentor scheduling, and final pitch evaluation for 27 teams",
      "Simultaneously engineered Brainworks (SIH26007: mining safety in zero visibility)",
      "Team finished in 2nd place overall, qualifying for national evaluation stages",
    ],
    statusBadge: "Dual Execution · 2nd Place",
  },
  {
    id: "hackwarts-hackathon",
    title: "Hackwarts 24-Hour Hackathon",
    category: "Organized & Hosted",
    tier: "Organized / Led",
    date: "Academic Season",
    location: "Pune, India",
    role: "Organizer",
    roleConfirmed: true,
    scale: "24-Hour Overnight Sprint",
    description:
      "24-hour collegiate hackathon focused on rapid prototyping and cross-functional team engineering under strict time limits.",
    highlights: [
      "Coordinated venue logistics, overnight hacker hospitality, and sponsor mentoring tracks",
      "Facilitated team formation for solo builders entering the arena",
    ],
    statusBadge: "Verified Hackathon Organizer",
  },
  {
    id: "gdg-android-study-jam",
    title: "Android Study Jam — GDG on Campus ADYPU",
    category: "Organized & Hosted",
    tier: "Organized / Led",
    date: "15 January 2025",
    location: "ADYPU Campus, Pune",
    role: "Management Lead",
    roleConfirmed: true,
    scale: "Campus-Wide Developer Workshop Series",
    description:
      "Official Google Developer Groups on Campus developer study jam covering modern Android development fundamentals, Jetpack Compose, and Kotlin.",
    highlights: [
      "Officially listed as Management Lead in GDG Community platform records",
      "Facilitated peer coding sessions, lab setups, and developer badges",
    ],
    relatedLink: "https://gdg.community.dev/events/details/google-gdg-on-campus-ajeenkya-dy-patil-university-pune-india-presents-android-study-jam/",
    statusBadge: "Official GDG Lead Record",
  },
  {
    id: "gdg-agents-workshop",
    title: "Building Agents using Python & AI — GDG ADYPU",
    category: "Organized & Hosted",
    tier: "Organized / Led",
    date: "2025 – 2026",
    location: "Pune, India",
    role: "Community Management & Technical Execution",
    roleConfirmed: true,
    scale: "Technical Hands-on Lab",
    description:
      "Hands-on workshop guiding students through multi-agent orchestration, tool calling, and local Python LLM setups.",
    highlights: [
      "Curated lab prerequisites and sample agent repositories for junior developers",
      "Assisted attendees in debugging API keys and environment configurations",
    ],
    statusBadge: "GDG Workshop Series",
  },
  {
    id: "gdg-framer-design",
    title: "Design Info Session & Hands-on Framer — GDG ADYPU",
    category: "Organized & Hosted",
    tier: "Organized / Led",
    date: "2025",
    location: "Pune, India",
    role: "Event Management & Design Operations",
    roleConfirmed: true,
    scale: "Design & Interaction Lab",
    description:
      "Bridging design and engineering: hands-on session introducing student developers to interaction design, responsive breakpoints, and Framer prototyping.",
    highlights: [
      "Coordinated speaker presentation and live portfolio critique circle",
      "Introduced modern visual ergonomics to aspiring frontend engineers",
    ],
    statusBadge: "GDG Design Series",
  },

  // --- PARTICIPATED / SELECTED ---
  {
    id: "claude-code-meetup",
    title: "Claude Code Community Meetup — Pune",
    category: "Participated & Selected",
    tier: "Selected / Participated",
    date: "2026",
    location: "Pune, India",
    role: "Selected Builder & Attendee",
    roleConfirmed: true,
    scale: "170 Builders Selected from 2,000+ Registrations",
    description:
      "Curated builder meetup bringing together top AI engineers and prompt designers in Pune. Selected through competitive application among 170 final attendees.",
    highlights: [
      "Engaged in technical roundtables on autonomous coding agent architectures and tool execution",
      "Exchanged RAG and local inference workflows with regional startup engineers",
    ],
    driveFolderUrl: "https://drive.google.com/drive/folders/1xXWeX4x6spTzewClgIBBVpS_IsWcqXPy",
    statusBadge: "Competitive Selection (170 / 2,000+)",
  },
  {
    id: "hackerhouse-goa",
    title: "HackerHouse Goa '26",
    category: "Participated & Selected",
    tier: "Selected / Participated",
    date: "28 – 31 October 2026",
    location: "Goa, India",
    role: "Builder & Product Submitter (Forge Goa)",
    roleConfirmed: true,
    scale: "In-Person Builder Residency & Submission",
    description:
      "In-person builder cohort in Goa. Built and submitted Forge Goa—an interactive identity and squad-formation web experience celebrating hackerhouse culture.",
    highlights: [
      "Engineered full interactive builder passport generation on Next.js",
      "Validated community-first mechanics for multi-day builder residencies",
    ],
    relatedLink: "https://hhgoa26-eta.vercel.app/",
    statusBadge: "Project Submission",
  },
  {
    id: "amd-ryzen-ai",
    title: "AMD Ryzen AI Slingshot",
    category: "Participated & Selected",
    tier: "Selected / Participated",
    date: "April 2026",
    location: "National / Online",
    role: "Competition Participant",
    roleConfirmed: true,
    scale: "National Hardware-Accelerated AI Challenge",
    description:
      "Explored on-device neural processing and hardware-accelerated NPU inference workflows on modern AMD Ryzen architectures.",
    highlights: [
      "Experimented with local quantized model runtimes on client silicon",
      "Analyzed latency trade-offs between CPU, GPU, and dedicated NPU execution",
    ],
    statusBadge: "Innovation Challenge",
  },
  {
    id: "samsung-solve-for-tomorrow",
    title: "Samsung Solve for Tomorrow",
    category: "Participated & Selected",
    tier: "Selected / Participated",
    date: "May 2025",
    location: "National Programme",
    role: "Innovation Programme Participant",
    roleConfirmed: true,
    scale: "National Social Innovation Challenge",
    description:
      "National youth innovation competition focusing on applying technology, science, and community empathy to solve pressing local societal challenges.",
    highlights: [
      "Developed problem-framing documentation for rural access challenges",
      "Synthesized technical prototypes with community feedback mechanisms",
    ],
    statusBadge: "National Programme",
  },
  {
    id: "newtons-tekron",
    title: "Newton's Tekron 24-Hour Hackathon",
    category: "Participated & Selected",
    tier: "Selected / Participated",
    date: "Academic Season",
    location: "Pune, India",
    role: "Hackathon Participant",
    roleConfirmed: true,
    scale: "24-Hour Intensive Build",
    description:
      "Competitive 24-hour coding sprint building full-stack applications under strict judging rubrics.",
    highlights: [
      "Collaborated in sprint team to deliver functional prototype in 24 hours",
    ],
    statusBadge: "Hackathon Participant",
  },
  {
    id: "scratch-the-code",
    title: "Scratch the Code — Vedam's Noesis",
    category: "Participated & Selected",
    tier: "Selected / Participated",
    date: "Academic Season",
    location: "Pune, India",
    role: "8-Hour Hackathon Participant",
    roleConfirmed: true,
    scale: "8-Hour High-Speed Sprint",
    description:
      "Fast-paced 8-hour competitive algorithmic and rapid product prototyping tournament.",
    highlights: [
      "Solved live coding constraints and built rapid web prototype under time pressure",
    ],
    statusBadge: "Sprint Participant",
  },
  {
    id: "business-plan-challenge",
    title: "Inter-Collegiate Business Plan Challenge",
    category: "Participated & Selected",
    tier: "Selected / Participated",
    date: "Academic Season",
    location: "Pune, India",
    role: "Venture Competition Participant",
    roleConfirmed: true,
    scale: "Venture Pitch Competition",
    description:
      "Presented early-stage product thesis, unit economics, and go-to-market distribution models before faculty and venture evaluators.",
    highlights: [
      "Honed pitch storytelling, customer acquisition logic, and business defensibility",
    ],
    statusBadge: "Venture Competition",
  },

  // --- CAMPUS CELEBRATIONS & DOCUMENTATION (ROLE TO CONFIRM) ---
  {
    id: "ganesh-chaturthi",
    title: "Ganesh Chaturthi Campus Celebration",
    category: "Campus & Culture",
    tier: "Campus Initiative (Role to confirm)",
    date: "Campus Calendar",
    location: "Alta Campus, Pune",
    role: "Campus Event Documentation / Club President",
    roleConfirmed: false,
    description:
      "Large-scale traditional cultural celebration uniting student cohorts, faculty, and student clubs across campus. Visual documentation archived.",
    highlights: [
      "Photographic documentation of cultural festivities and student gatherings",
      "Supported community coordination as Community Club President",
    ],
    driveFolderUrl: "https://drive.google.com/drive/folders/1kBXVO7H_nZ7cGryvpvwEh_liEamctHxw",
    statusBadge: "Campus Culture · Role to Confirm",
  },
  {
    id: "teachers-day",
    title: "Teacher's Day Celebration",
    category: "Campus & Culture",
    tier: "Campus Initiative (Role to confirm)",
    date: "Campus Calendar",
    location: "Alta Campus, Pune",
    role: "Campus Event Support / Club Lead",
    roleConfirmed: false,
    description:
      "Institutional celebration honoring academic faculty and research mentors, featuring student presentations and community ceremonies.",
    highlights: [
      "Coordinated student participation and stage documentation",
      "Delivered appreciation addresses on behalf of student builder clubs",
    ],
    driveFolderUrl: "https://drive.google.com/drive/folders/1F3qs_jxX-2IpzHtOdejeIax72jsgPJd_",
    statusBadge: "Campus Culture · Role to Confirm",
  },
  {
    id: "janmashtami",
    title: "Janmashtami Campus Celebration",
    category: "Campus & Culture",
    tier: "Campus Initiative (Role to confirm)",
    date: "Campus Calendar",
    location: "Alta Campus, Pune",
    role: "Campus Event Support & Media",
    roleConfirmed: false,
    description:
      "Traditional campus festival bringing together student residential hostels and university leadership for dahi handi and cultural rituals.",
    highlights: [
      "Community cohesion and event photography archive",
    ],
    driveFolderUrl: "https://drive.google.com/drive/folders/1Ec-y-tRZVbuoO-EEYmK0Z6WYPSCAoSCq",
    statusBadge: "Campus Culture · Role to Confirm",
  },
  {
    id: "manu-agarwal-session",
    title: "Manu Agarwal Guest Lecturer & Industry Session",
    category: "Campus & Culture",
    tier: "Campus Initiative (Role to confirm)",
    date: "Campus Calendar",
    location: "Alta School of Technology Auditorium",
    role: "Session Attendee / Event Operations Support",
    roleConfirmed: false,
    description:
      "Distinguished guest lecture and executive interaction session with Manu Agarwal on startup scaling, engineering leadership, and venture building.",
    highlights: [
      "Attended executive lecture and facilitated student Q&A interactions",
      "Archived session documentation for community knowledge base",
    ],
    driveFolderUrl: "https://drive.google.com/drive/folders/10CXbz2UvnRwO_ipHsGb2HFrqvdMmN8P2",
    statusBadge: "Distinguished Lecture · Role to Confirm",
  },
];
