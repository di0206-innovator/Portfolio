export interface GrowthCampaign {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  audience: string;
  consumerInsight: string;
  creativeHook: string;
  channelStrategy: string;
  executionPlan: string[];
  resourceRequirements: string[];
  successMetrics: {
    kpi: string;
    targetHypothesis: string;
  }[];
  experimentHypothesis: string;
  funnelStage: "Awareness" | "Participation" | "Product Trial" | "Activation" | "Retention" | "Advocacy";
}

export const GROWTH_CAMPAIGNS: GrowthCampaign[] = [
  {
    id: "campaign-01",
    number: "01",
    title: "SAY IT. SHIP IT.",
    tagline: "The Voice-First 45-Minute Campus Build Challenge",
    badge: "SPECULATIVE CAMPAIGN CONCEPT — NOT YET EXECUTED",
    audience: "Collegiate engineering students, hackathon participants, and indie campus builders across Tier 1 & Tier 2 tech institutes.",
    consumerInsight:
      "Builders get throttled by the typing friction of translating mental velocity into code and architecture. They conceive ideas at 150 WPM but type at 45 WPM.",
    creativeHook: "Build and deploy a functional web utility without typing your prompt — dictate your intent directly to an AI agent.",
    channelStrategy: "GDG campus chapters, hackathon Discord/WhatsApp channels, college coding clubs, and developer X/LinkedIn circles.",
    executionPlan: [
      "Partner with 5 prominent campus developer clubs to host synchronized 45-minute sprint sessions.",
      "Provide participants with a standardized Wispr Flow prompt template and a pre-configured starter sandbox.",
      "Students record their screen as they dictate specs in real time, ship the live deployment, and post with #SayItShipIt.",
      "Live leaderboards celebrating fastest idea-to-URL velocity and most creative dictation prompt engineering.",
    ],
    resourceRequirements: [
      "Wispr Flow trial / challenge access tokens for participants",
      "Standardized screen recording guidelines and prompt templates",
      "Campus club partnership micro-grants / community swag perks",
    ],
    successMetrics: [
      { kpi: "Participant Signup & Activation", targetHypothesis: "250+ active participants across 5 campus clusters in Sprint 1" },
      { kpi: "End-to-End Workflow Completion", targetHypothesis: "70%+ of participants successfully ship a live URL within 45 mins" },
      { kpi: "Social Share & Virality Coefficient", targetHypothesis: "1.35x viral loop via LinkedIn/X screen-recording posts" },
    ],
    experimentHypothesis:
      "If campus builders experience the visceral thrill of dictating an entire software component 3x faster than typing, 40%+ will retain Wispr Flow as their default desktop assistant during competitive hackathons.",
    funnelStage: "Participation",
  },
  {
    id: "campaign-02",
    number: "02",
    title: "WORK OUT LOUD",
    tagline: "Real Builders. Zero Keyboard. Everyday Workflows Captured in 45s.",
    badge: "SPECULATIVE CAMPAIGN CONCEPT — NOT YET EXECUTED",
    audience: "Tech professionals, product managers, designers, founders, and high-output knowledge workers seeking cognitive speed.",
    consumerInsight:
      "People assume voice dictation is just for sending WhatsApp voice notes or hands-free driving text messages; they do not realize voice is a high-bandwidth thought-partner for professional work.",
    creativeHook: "Side-by-side split screen: The Typing Grunt vs. The Voice Commander executing an identical complex product workflow.",
    channelStrategy: "Vertical short-form video (YouTube Shorts, Instagram Reels, LinkedIn Video, X clips) featuring relatable high-tempo creators.",
    executionPlan: [
      "Record 10 authentic 30–60 second micro-case studies showcasing real everyday professional tasks: drafting PRDs, debugging error logs, authoring legal replies, synthesizing meeting action items.",
      "Raw 'over-the-shoulder' documentary camera style with clear audio capture of conversational dictation turning instantly into structured output.",
      "Distribute weekly episodes across Wispr Flow official feeds and co-collaborate with the featured builders' personal audiences.",
      "Include a direct 'Try this exact prompt workflow' call-to-action in pinned comments.",
    ],
    resourceRequirements: [
      "Mobile creator audio/video rig (wireless lavalier, anamorphic lens, portable stabilizer)",
      "Collaborator honorariums and editorial post-production turnaround",
      "Content distribution scheduling software",
    ],
    successMetrics: [
      { kpi: "Short-Form Video Watch-Through Rate", targetHypothesis: "55%+ 30s completion rate across YouTube Shorts & Reels" },
      { kpi: "Bio Link CTR to Download", targetHypothesis: "8.5%+ click-through rate from video captions" },
      { kpi: "Cost Per Activated User", targetHypothesis: "Sub-₹120 CAC through organic creator co-posting" },
    ],
    experimentHypothesis:
      "Documenting unedited, real-time voice workflows in bite-sized vertical formats creates an irresistible 'I need that superpower tomorrow morning' visceral trigger for busy knowledge workers.",
    funnelStage: "Awareness",
  },
  {
    id: "campaign-03",
    number: "03",
    title: "THE VOICE-FIRST CAMPUS NETWORK",
    tagline: "Decentralized Student Builder Guilds Driving Viral Peer Adoption",
    badge: "SPECULATIVE CAMPAIGN CONCEPT — NOT YET EXECUTED",
    audience: "High-agency student tech influencers, club presidents, hackathon organizers, and open-source contributors across top Indian universities.",
    consumerInsight:
      "College students adopt tools through high-status peer demonstration inside late-night hack rooms, not through corporate sponsored ads.",
    creativeHook: "The 'Secret Weapon' badge — empower respected campus leads with insider early access and host privileges.",
    channelStrategy: "Campus WhatsApp student hubs, college developer discords, offline lab hack nights, and peer referral loops.",
    executionPlan: [
      "Select and onboard 20 elite Student Leads across premier engineering campuses (Pune, Bengaluru, Hyderabad, Delhi NCR).",
      "Provide each lead with a unique invite cohort code granting their peers extended trial benefits and custom community perks.",
      "Host weekly 'Midnight Voice Sprints' in college labs where members tackle competitive assignments and project documentation using voice.",
      "Bi-weekly community feedback roundtables directly connecting campus leads with Wispr Flow's product team to report local UX nuances and Indian accent calibration.",
    ],
    resourceRequirements: [
      "Ambassador welcome packages and exclusive community merchandise",
      "Leaderboard tracking dashboard to measure attributed onboardings and weekly active dictations",
      "Monthly incentive pool for top-performing campus clusters",
    ],
    successMetrics: [
      { kpi: "Campus Hub Onboardings", targetHypothesis: "50+ verified student signups per active campus lead per month" },
      { kpi: "Day-28 Retention", targetHypothesis: "35%+ active weekly usage after initial onboarding" },
      { kpi: "Qualitative Feedback Loops", targetHypothesis: "15+ verified UX and accent telemetry reports submitted monthly" },
    ],
    experimentHypothesis:
      "Grassroots campus distribution rooted in existing developer community trust networks generates higher lifetime retention and lower churn than paid performance marketing campaigns.",
    funnelStage: "Activation",
  },
  {
    id: "campaign-04",
    number: "04",
    title: "THE 60-SECOND WORKFLOW",
    tagline: "One Meaningful Task. 60 Seconds. 100% Voice.",
    badge: "SPECULATIVE CAMPAIGN CONCEPT — NOT YET EXECUTED",
    audience: "Broad tech ecosystem: students, freelance creators, software developers, educators, and product leaders.",
    consumerInsight:
      "Users get intimidated by complex software overhauls. They want to know: 'What is the one immediate problem this solves for me right now?'",
    creativeHook: "A stopwatch timer in the top-right corner ticking down from 60.0 to 0.0 seconds while a daunting task is completely solved by voice.",
    channelStrategy: "Social UGC challenge hashtag campaign (#Wispr60sWorkflow) with weekly community spotlight re-shares.",
    executionPlan: [
      "Kick off the challenge by demonstrating 5 distinct 60-second micro-tasks: (1) Filing a complete bug ticket, (2) Generating an email proposal, (3) Outlining a blog post, (4) Dictating meeting notes into Notion, (5) Writing a LinkedIn retrospective.",
      "Invite the community to record and submit their own 60-second workflow videos.",
      "Curate the best weekly entries into an open community showcase and award weekly gear perks.",
      "Package top community workflows into downloadable prompt-and-voice preset recipe cards.",
    ],
    resourceRequirements: [
      "Weekly community prize budget (tech accessories, high-fidelity microphones, app credits)",
      "Standardized submission landing page and review process",
      "Template graphic overlays (timer HUD, soundwave graphic) for creators",
    ],
    successMetrics: [
      { kpi: "UGC Video Submissions", targetHypothesis: "75+ organic video submissions in the first 4 weeks" },
      { kpi: "Organic Reach & Impressions", targetHypothesis: "250,000+ targeted impressions across tech social circles" },
      { kpi: "Community Advocacy Conversion", targetHypothesis: "22% of challenge participants actively invite at least 1 peer" },
    ],
    experimentHypothesis:
      "A laser-focused 60-second micro-challenge dramatically lowers barrier to entry, transforming passive observers into active power advocates.",
    funnelStage: "Advocacy",
  },
];

