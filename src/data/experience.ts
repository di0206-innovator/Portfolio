export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  timeline: string;
  isCurrent: boolean;
  type: "Community Leadership" | "Developer Relations" | "Content & Media" | "Technical Core" | "Industry Experience";
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "gdg-organizer",
    role: "Organizer",
    organization: "Google Developer Groups (GDG) on Campus ADYPU",
    timeline: "2026 – 2027",
    isCurrent: true,
    type: "Community Leadership",
    location: "Pune, India",
    description:
      "Leading developer community strategy, ecosystem partnerships, flagship hackathons, and technology workshops across campus and the greater Pune developer network.",
    highlights: [
      "Orchestrated campus developer initiatives bringing hundreds of student builders into active open-source and AI tracks",
      "Directed high-tempo competitive hackathons including PromptWars and builder challenge sprints",
      "Curated industry speaker tracks and hands-on developer workshops on modern AI stacks",
    ],
    skills: ["Community Architecture", "Developer Relations", "Event Production", "Ecosystem Strategy"],
  },
  {
    id: "gdg-lead",
    role: "Management Lead",
    organization: "Google Developer Groups (GDG) on Campus ADYPU",
    timeline: "Nov 2025 – 2026",
    isCurrent: false,
    type: "Community Leadership",
    location: "Pune, India",
    description:
      "Spearheaded operational execution, logistics, team coordination, and partner outreach for campus developer summits and technical meetups.",
    highlights: [
      "Managed Android Study Jam (Jan 2025) and student developer labs",
      "Scaled student engagement and managed multi-disciplinary volunteer squads across technical, design, and logistics functions",
    ],
    skills: ["Operations Management", "Team Leadership", "Cross-Functional Coordination"],
  },
  {
    id: "alta-president",
    role: "President, Community Club",
    organization: "Alta School of Technology",
    timeline: "August 2026 – Present",
    isCurrent: true,
    type: "Community Leadership",
    location: "Pune, India",
    description:
      "Presiding over the Alta collegiate community hub, cultivating a dense network of student founders, researchers, and technical builders.",
    highlights: [
      "Fostered collaborative peer learning cohorts focused on practical product engineering and early-stage venturing",
      "Organized regular demo days, builder showcases, and technical deep-dive roundtables",
    ],
    skills: ["Community Building", "Peer Mentorship", "Culture Building", "Public Speaking"],
  },
  {
    id: "flyrank-intern",
    role: "AI Intern",
    organization: "FlyRank AI",
    timeline: "July 2026 – September 2026",
    isCurrent: false,
    type: "Industry Experience",
    location: "Remote / Pune",
    description:
      "Applied AI engineering internship focusing on practical LLM workflows, evaluation frameworks, and generative AI systems.",
    highlights: [
      "Conducted prompt engineering and evaluation benchmarking across commercial LLMs",
      "Assisted in technical data synthesis and retrieval workflow exploration",
    ],
    skills: ["Applied AI", "Prompt Evaluation", "LLM Workflows"],
  },
  {
    id: "alta-youtube",
    role: "Student Content Lead",
    organization: "ALTA School of Technology HQ YouTube",
    timeline: "2026 – Present",
    isCurrent: true,
    type: "Content & Media",
    location: "Pune, India",
    description:
      "Directing content strategy, video production, founder interviews, and storytelling to demystify emerging technologies and celebrate student engineering breakthroughs.",
    highlights: [
      "Led video ideation, scripting, pacing, and visual storytelling for institutional flagship channel releases",
      "Interviewed student founders, hackathon winners, and guest technologists on camera",
      "Bridged deep technical engineering concepts with engaging, accessible digital visual content",
    ],
    skills: ["Content Strategy", "Video Production", "Technical Storytelling", "On-Camera Hosting"],
  },
  {
    id: "aiml-core",
    role: "Core Team Member",
    organization: "AI/ML Club, Alta School of Technology / ADYPU",
    timeline: "September 2026 – Present",
    isCurrent: true,
    type: "Technical Core",
    location: "Pune, India",
    description:
      "Contributing to hands-on artificial intelligence workshops, study groups on neural networks and retrieval architectures, and student hackathon mentorship.",
    highlights: [
      "Assisted in teaching practical machine learning fundamentals and generative AI toolchains to junior cohorts",
      "Collaborated on internal community research demos and prototype builds",
    ],
    skills: ["Applied AI / ML", "Peer Instruction", "Hackathon Mentorship"],
  },
  {
    id: "gsa-ambassador",
    role: "Google Student Ambassador",
    organization: "Google Student Ambassador Program",
    timeline: "August 2025 – January 2026 (Completed Role)",
    isCurrent: false,
    type: "Developer Relations",
    location: "Pune, India",
    description:
      "Served as an on-campus liaison representing developer initiatives, facilitating product feedback loops, and introducing developer tools to aspiring campus engineers.",
    highlights: [
      "Evangelized developer resources, cloud credits, and learning pathways to student builders",
      "Organized study jams and product awareness sessions on Google developer technologies",
    ],
    skills: ["Developer Advocacy", "Campus Outreach", "Program Coordination"],
  },
];
