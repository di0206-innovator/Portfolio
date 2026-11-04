export interface EventPhoto {
  url: string;
  driveUrl: string;
  caption: string;
}

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
  photos?: EventPhoto[];
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
    photos: [
      {
        url: "/images/events/promptwars-adypu-1.jpg",
        driveUrl: "https://drive.google.com/file/d/1GgglZsx0f6u9OvuN5Fdy0wADMGzbET1X/view?usp=drivesdk",
        caption: "PromptWars build arena & participant check-in floor at ADYPU",
      },
      {
        url: "/images/events/promptwars-adypu-2.jpg",
        driveUrl: "https://drive.google.com/file/d/1AH3WERE9fr4OEA7oMuUoabGohhY0tY-2/view?usp=drivesdk",
        caption: "Auditorium tournament briefing & challenge reveal session",
      },
      {
        url: "/images/events/promptwars-adypu-3.jpg",
        driveUrl: "https://drive.google.com/file/d/14zRhO7w3NyEOZdu8n8OIxlWv1MVeTM34/view?usp=drivesdk",
        caption: "Competitive prompt engineering underway across team clusters",
      },
    ],
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
    photos: [
      {
        url: "/images/events/promptwars-alta-1.jpg",
        driveUrl: "https://drive.google.com/file/d/1-IAfTQEhKzzzZuP48iPW8DZ8zzdpZ4lJ/view?usp=drivesdk",
        caption: "Alta 8-hour AI buildathon in progress across campus labs",
      },
      {
        url: "/images/events/promptwars-alta-2.jpg",
        driveUrl: "https://drive.google.com/file/d/15Fw1ANk7ihq-5C85xohH44L7WPs_8kv_/view?usp=drivesdk",
        caption: "Top 10 finalists pitching and live prototype demonstrations",
      },
      {
        url: "/images/events/promptwars-alta-3.jpg",
        driveUrl: "https://drive.google.com/file/d/1btRLr7Ug2PRnj3Ztt7BUCWph84JRtt53/view?usp=drivesdk",
        caption: "Evaluation panel review and winner felicitations",
      },
    ],
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
      "Recorded video archives: Morning Briefing, Floor Walkthrough, and Final Presentations in Drive",
      "Team finished in 2nd place overall, qualifying for national evaluation stages",
    ],
    driveFolderUrl: "https://drive.google.com/drive/folders/1VAylNdW9xft0_ZOz4MaQ-a_SUIxnVFRg",
    photos: [
      {
        url: "/images/events/sih-2026-briefing.jpg",
        driveUrl: "https://drive.google.com/file/d/1SZsKWLZ6SAmjig4swtq4SLVgQNhqKAxK/view?usp=drivesdk",
        caption: "Alta Tech Club SIH Internal Hackathon opening briefing & challenge reveal",
      },
      {
        url: "/images/events/sih-2026-group.jpg",
        driveUrl: "https://drive.google.com/file/d/1XyREvzzLCu92KlLhzXy0x54dcEO1gHhx/view?usp=drivesdk",
        caption: "Official group photo of 27 competing teams, finalists, and operations leads",
      },
      {
        url: "/images/events/sih-2026-hall.jpg",
        driveUrl: "https://drive.google.com/file/d/1WmCV11rbfyai49vEbdHBFU8u-bYJizPp/view?usp=drivesdk",
        caption: "Packed classroom of student engineering teams during the internal qualifying rounds",
      },
    ],
    statusBadge: "Dual Execution · 2nd Place",
  },
  {
    id: "hackwarts-hackathon",
    title: "Hackwarts 24-Hour Hackathon",
    category: "Organized & Hosted",
    tier: "Organized / Led",
    date: "11 – 12 April 2026",
    location: "Alta School of Technology, Pune",
    role: "Organizer",
    roleConfirmed: true,
    scale: "24-Hour Non-Stop Sprint · 25+ Teams · 300+ Students",
    description:
      "24-hour agentic AI hackathon hosted at Alta School of Technology, themed around Wizarding World Harry Potter ('Hackwarts'). Over 300 student builders across 60 teams competed non-stop across checkpoints, code evaluations, and live project demos.",
    highlights: [
      "Led overall organizing, sponsor acquisition, and overnight hacker hospitality for 300+ attendees",
      "Engineered immersive Harry Potter theme: Sorting Hat ceremony, Marauder's Map art wall, and Daily Prophet boards",
      "Maintained live 24-hour countdown timer display (hackwarts-one.vercel.app) and 3 progressive checkpoint reviews",
    ],
    driveFolderUrl: "https://drive.google.com/file/d/10IyQXrxOacXLRYqOJHltHYpDFz2MiaEs/view?usp=drivesdk",
    relatedLink: "https://hackwarts-one.vercel.app/",
    photos: [
      {
        url: "/images/events/hackwarts-1.jpg",
        driveUrl: "https://drive.google.com/file/d/1UTwmb6rgI3LhhXw1aOAwxImJqYZUVBo5/view?usp=drivesdk",
        caption: "Sorting Hat, 50,000 prize pool banner & Welcome to Hackwarts installation",
      },
      {
        url: "/images/events/hackwarts-2.jpg",
        driveUrl: "https://drive.google.com/file/d/1kLWjcGZ0Gv2iPP5wur2Sl_OKFS_CJlXF/view?usp=drivesdk",
        caption: "Official countdown timer display: { Build. Break. Dominate. The ultimate 24-hour hackathon. }",
      },
      {
        url: "/images/events/hackwarts-3.jpg",
        driveUrl: "https://drive.google.com/file/d/1cl9oNZqkbXc2K2D-sgNBhl40RC4uBEq_/view?usp=drivesdk",
        caption: "Daily Prophet bulletin board installation with fairy lights & wanted posters",
      },
    ],
    statusBadge: "Verified Hackathon Organizer",
  },
  {
    id: "aagaz-fest",
    title: "Aagaz 2026 — Annual Cultural Fest",
    category: "Organized & Hosted",
    tier: "Organized / Led",
    date: "25 April 2026",
    location: "Alta Campus & Turf Arena, Pune",
    role: "Lead MC & On-Ground Operations Lead",
    roleConfirmed: true,
    scale: "350+ Attendees · Night Turf Cultural Showcase",
    description:
      "Annual flagship cultural festival uniting Alta School of Technology and Sunstone cohorts. Hosted on stage as the primary Master of Ceremonies (MC) and directed on-ground event operations across student performances, night turf activities, and partner activations.",
    highlights: [
      "Anchored main stage proceedings as official MC across music, dance, and stand-up showcases",
      "Managed crowd flow, artist scheduling, and on-ground operations for 350+ student attendees",
      "Coordinated night turf activations, Red Bull student partnerships, and stage transitions",
    ],
    driveFolderUrl: "https://drive.google.com/drive/folders/1mVt4a4qbhs_pswzG4I-IjaSlIqZI4xTN",
    photos: [
      {
        url: "/images/events/aagaz-1.jpg",
        driveUrl: "https://drive.google.com/file/d/1ElftTEDGv2sHluaBx_CAaX33WHjPYr6X/view?usp=drivesdk",
        caption: "Aagaz 2026 stage banner & audience gathering: 'Sunstone Annual Fest — It's Your Place to Shine'",
      },
      {
        url: "/images/events/aagaz-2.jpg",
        driveUrl: "https://drive.google.com/file/d/1eP_eiHwySGtgtFsYzH9zYLSeJO534j8g/view?usp=drivesdk",
        caption: "Night turf dance performances and student cohort celebrations",
      },
      {
        url: "/images/events/aagaz-3.jpg",
        driveUrl: "https://drive.google.com/file/d/1ajR8ssrnEtts1TC9Q_2IS2tghi2CJz9h/view?usp=drivesdk",
        caption: "On-ground operations and community coordination during the festival",
      },
    ],
    statusBadge: "Lead MC & Ops · 350+ Attendees",
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
    driveFolderUrl: "https://drive.google.com/drive/folders/1UohvfFa-bQ9WsWYbepQkifUlgna77okN",
    photos: [
      {
        url: "/images/events/gdg-adypu-1.jpg",
        driveUrl: "https://drive.google.com/file/d/1U0m-BQ-h5qggHxrQnj5kUhi2gorsVKtU/view?usp=drivesdk",
        caption: "Google Developer Groups on Campus ADYPU app development workshop",
      },
      {
        url: "/images/events/gdg-adypu-2.jpg",
        driveUrl: "https://drive.google.com/file/d/1FfJbBZwx09p9PK3CkWq7TQ61AaFzj-I_/view?usp=drivesdk",
        caption: "Live developer quiz & interactive leaderboard",
      },
      {
        url: "/images/events/gdg-adypu-3.jpg",
        driveUrl: "https://drive.google.com/file/d/1ZBo7ZIt8nnD8QWnB0NZqAegr4Rc44jCO/view?usp=drivesdk",
        caption: "Hands-on coding lab and Compose state architectures",
      },
    ],
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
    driveFolderUrl: "https://drive.google.com/drive/folders/1UohvfFa-bQ9WsWYbepQkifUlgna77okN",
    photos: [
      {
        url: "/images/events/gdg-adypu-3.jpg",
        driveUrl: "https://drive.google.com/file/d/1ZBo7ZIt8nnD8QWnB0NZqAegr4Rc44jCO/view?usp=drivesdk",
        caption: "Hands-on Python agent toolchains & API debugging lab",
      },
      {
        url: "/images/events/gdg-adypu-1.jpg",
        driveUrl: "https://drive.google.com/file/d/1U0m-BQ-h5qggHxrQnj5kUhi2gorsVKtU/view?usp=drivesdk",
        caption: "Technical lab session at ADYPU Campus, Pune",
      },
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
    driveFolderUrl: "https://drive.google.com/drive/folders/1UohvfFa-bQ9WsWYbepQkifUlgna77okN",
    photos: [
      {
        url: "/images/events/gdg-adypu-2.jpg",
        driveUrl: "https://drive.google.com/file/d/1FfJbBZwx09p9PK3CkWq7TQ61AaFzj-I_/view?usp=drivesdk",
        caption: "Design info session and interactive portfolio critique circle",
      },
      {
        url: "/images/events/gdg-adypu-1.jpg",
        driveUrl: "https://drive.google.com/file/d/1U0m-BQ-h5qggHxrQnj5kUhi2gorsVKtU/view?usp=drivesdk",
        caption: "Introducing UI ergonomics to student developer cohorts",
      },
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
    photos: [
      {
        url: "/images/events/claude-meetup-1.jpg",
        driveUrl: "https://drive.google.com/file/d/1i0fMOrAgBjE1ZMe92BFv_dqpb--OWM7_/view?usp=drivesdk",
        caption: "Claude Code Community Meetup attendee group in Pune",
      },
      {
        url: "/images/events/claude-meetup-2.jpg",
        driveUrl: "https://drive.google.com/file/d/1raNRCZfH__5HCWhFXdL_DIY1Vws3XnK4/view?usp=drivesdk",
        caption: "Keynote presentation by Sumeet G. Doshi (First Claude Community Ambassador India)",
      },
      {
        url: "/images/events/claude-meetup-3.jpg",
        driveUrl: "https://drive.google.com/file/d/1Ar5Orte6J_9FjDYzucyxnY3_qdMiJMkL/view?usp=drivesdk",
        caption: "Technical roundtable discussion on autonomous coding workflows",
      },
    ],
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
    driveFolderUrl: "https://hhgoa26-eta.vercel.app/",
    photos: [
      {
        url: "/images/projects/forgegoa.jpg",
        driveUrl: "https://hhgoa26-eta.vercel.app/",
        caption: "Forge Goa builder identity passport generator and squad matching system",
      },
    ],
    statusBadge: "Project Submission",
  },
  {
    id: "amd-ryzen-ai",
    title: "AMD Ryzen AI Slingshot — Ahmedabad",
    category: "Participated & Selected",
    tier: "Selected / Participated",
    date: "31 March – 01 April 2026",
    location: "Ahmedabad, Gujarat, India",
    role: "Selected Competition Participant",
    roleConfirmed: true,
    scale: "National Hardware-Accelerated AI Buildathon",
    description:
      "National hardware-accelerated AI challenge focused on on-device neural processing, edge intelligence, and local model inference on AMD Ryzen AI architectures. Experimented with local quantized model runtimes on client silicon, evaluating inference latency across CPU, integrated Radeon graphics, and dedicated XDNA NPUs.",
    highlights: [
      "Selected participant in regional Ahmedabad cohort of AMD's flagship AI innovation program",
      "Explored quantized model execution and on-device neural inference performance on AMD Ryzen AI hardware",
      "Analyzed throughput, memory bandwidth, and power trade-offs for edge agentic AI workflows",
    ],
    relatedLink: "https://www.linkedin.com/posts/divyanshu-sinha-46074126b_amd-slingshot-ai-ugcPost-7476152813048295424-qwvN/",
    driveFolderUrl: "https://lnkd.in/p/dAd5-y_B",
    photos: [
      {
        url: "/images/events/amd-slingshot-1.png",
        driveUrl: "https://www.linkedin.com/posts/divyanshu-sinha-46074126b_amd-slingshot-ai-ugcPost-7476152813048295424-qwvN/",
        caption: "AMD Ryzen AI Slingshot cohort team posing at the official challenge backdrop",
      },
      {
        url: "/images/events/amd-slingshot-2.png",
        driveUrl: "https://www.linkedin.com/posts/divyanshu-sinha-46074126b_amd-slingshot-ai-ugcPost-7476152813048295424-qwvN/",
        caption: "Event check-in and team arrival outside Block E for the Ahmedabad buildathon",
      },
      {
        url: "/images/events/amd-slingshot-3.png",
        driveUrl: "https://www.linkedin.com/posts/divyanshu-sinha-46074126b_amd-slingshot-ai-ugcPost-7476152813048295424-qwvN/",
        caption: "Official AMD Ryzen AI Slingshot buildathon participant wristbands",
      },
    ],
    statusBadge: "Selected Participant · Ahmedabad",
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
    date: "21 September 2026",
    location: "Alta Campus, Pune",
    role: "Campus Event Documentation / Club President",
    roleConfirmed: false,
    description:
      "Large-scale traditional cultural celebration uniting student cohorts, faculty, and student clubs across campus. Visual documentation archived.",
    highlights: [
      "Photographic documentation of cultural festivities and student gatherings",
      "Traditional modak prasad ceremony and campus rangoli competition",
      "Supported community coordination as Community Club President",
    ],
    driveFolderUrl: "https://drive.google.com/drive/folders/1kBXVO7H_nZ7cGryvpvwEh_liEamctHxw",
    photos: [
      {
        url: "/images/events/ganesh-chaturthi-1.jpg",
        driveUrl: "https://drive.google.com/file/d/1vSiMR3hG8w6Dy8waYWEahwvIX4iyGtg7/view?usp=drivesdk",
        caption: "Students in traditional festive attire celebrating Ganesh Chaturthi on campus",
      },
      {
        url: "/images/events/ganesh-chaturthi-2.jpg",
        driveUrl: "https://drive.google.com/file/d/1Tywj-zk1y3tOrNrnsGysPBK2Y3sSyMyT/view?usp=drivesdk",
        caption: "Faculty member offering traditional modak prasad at Alta Campus",
      },
      {
        url: "/images/events/ganesh-chaturthi-3.jpg",
        driveUrl: "https://drive.google.com/file/d/1RcDqx4PYxvmoj6jD4DBOtKrkrVxqsC14/view?usp=drivesdk",
        caption: "Traditional festive modak prasad ceremony",
      },
    ],
    statusBadge: "Campus Culture · Role to Confirm",
  },
  {
    id: "teachers-day",
    title: "Teacher's Day Celebration",
    category: "Campus & Culture",
    tier: "Campus Initiative (Role to confirm)",
    date: "04 September 2026",
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
    photos: [
      {
        url: "/images/events/campus-events-2.jpg",
        driveUrl: "https://drive.google.com/file/d/1F7BfcUoUEXoTBTSyxeyP18Jp4wvGfDnF/view?usp=drivesdk",
        caption: "Teacher's Day auditorium faculty felicitation ceremony",
      },
      {
        url: "/images/events/campus-events-1.jpg",
        driveUrl: "https://drive.google.com/file/d/1Mdv9ZBhX5DdVKhgqIzXYjBq1v4UPIo9y/view?usp=drivesdk",
        caption: "Student address on behalf of tech clubs",
      },
    ],
    statusBadge: "Campus Culture · Role to Confirm",
  },
  {
    id: "janmashtami",
    title: "Janmashtami Campus Celebration",
    category: "Campus & Culture",
    tier: "Campus Initiative (Role to confirm)",
    date: "04 September 2026",
    location: "Alta Campus, Pune",
    role: "Campus Event Support & Media",
    roleConfirmed: false,
    description:
      "Traditional campus festival bringing together student residential hostels and university leadership for dahi handi and cultural rituals.",
    highlights: [
      "Community cohesion and event photography archive",
      "Dahi handi tournament and student residential celebration",
    ],
    driveFolderUrl: "https://drive.google.com/drive/folders/1Ec-y-tRZVbuoO-EEYmK0Z6WYPSCAoSCq",
    photos: [
      {
        url: "/images/events/janmashtami-1.jpg",
        driveUrl: "https://drive.google.com/file/d/15u0y9YR416g6ARGy_uo0qe2GC8ungbkz/view?usp=drivesdk",
        caption: "Janmashtami campus celebration and student cohort festivities",
      },
      {
        url: "/images/events/janmashtami-2.jpg",
        driveUrl: "https://drive.google.com/file/d/1Iu8hz_Ozz37zBnQSg30aRMKPLoSpGU5Z/view?usp=drivesdk",
        caption: "Dahi handi ritual at Alta Campus, Pune",
      },
      {
        url: "/images/events/janmashtami-3.jpg",
        driveUrl: "https://drive.google.com/file/d/1qsav0ZMTpQND9gubBO_P1NmdXjUk_GKN/view?usp=drivesdk",
        caption: "Cultural community bonding archive",
      },
    ],
    statusBadge: "Campus Culture · Role to Confirm",
  },
  {
    id: "manu-agarwal-session",
    title: "Manu Agarwal Guest Lecturer & Industry Session",
    category: "Campus & Culture",
    tier: "Campus Initiative (Role to confirm)",
    date: "26 September 2026",
    location: "Alta School of Technology Auditorium",
    role: "Session Attendee / Event Operations Support",
    roleConfirmed: false,
    description:
      "Distinguished guest lecture and executive interaction session with Manu Agarwal on startup scaling, engineering leadership, and venture building.",
    highlights: [
      "Attended executive lecture and facilitated student Q&A interactions",
      "Archived session documentation for community knowledge base",
      "Keynote topic: 'Your 4-Year Plan: What to Do Each Year to Graduate Job-Ready'",
    ],
    driveFolderUrl: "https://drive.google.com/drive/folders/10CXbz2UvnRwO_ipHsGb2HFrqvdMmN8P2",
    photos: [
      {
        url: "/images/events/manu-agarwal-1.jpg",
        driveUrl: "https://drive.google.com/file/d/1Jmo1hNGKr2sh8MK1xuVjOUJ2OC9ZHVFK/view?usp=drivesdk",
        caption: "Manu Agarwal guest lecture on startup engineering & scaling at Alta Auditorium",
      },
      {
        url: "/images/events/manu-agarwal-2.jpg",
        driveUrl: "https://drive.google.com/file/d/1RdbIlranKqgLV-ZbeMQnohfRquQFur_J/view?usp=drivesdk",
        caption: "Interactive student Q&A session with Manu Agarwal",
      },
      {
        url: "/images/events/manu-agarwal-3.jpg",
        driveUrl: "https://drive.google.com/file/d/1iw0r3_-iwr9V3tLUT2G7SUdknFCARvG1/view?usp=drivesdk",
        caption: "Event keynote: Becoming job-ready and engineering roadmaps",
      },
    ],
    statusBadge: "Distinguished Lecture · Role to Confirm",
  },
];
