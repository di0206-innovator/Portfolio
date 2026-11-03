export interface RecognitionItem {
  id: string;
  title: string;
  category: "Keynote / Speaker" | "Public Speaking" | "Honor / Award" | "National Mentorship";
  date: string;
  organization: string;
  location: string;
  description: string;
  citationNotes: string;
  verified: boolean;
}

export const RECOGNITIONS: RecognitionItem[] = [
  {
    id: "guest-speaker-school",
    title: "Guest Speaker: Career Guidance on AI & Emerging Tech",
    category: "Keynote / Speaker",
    date: "July 2025",
    organization: "Alma Mater High School",
    location: "Home District",
    description:
      "Invited back to own school as a guest speaker to address senior secondary students on artificial intelligence fundamentals, modern software engineering pathways, and practical project building.",
    citationNotes: "Documented in saved academic profile history. Delivered interactive keynote and student Q&A.",
    verified: true,
  },
  {
    id: "public-speaking-dnh",
    title: "Selected Emerging Speaker — Dept of Planning & Statistics",
    category: "Public Speaking",
    date: "June 2024",
    organization: "Department of Planning and Statistics, DNH & DD",
    location: "DNH & DD, India",
    description:
      "Selected among 40 nominated student orators as an emerging, captivating speaker following rigorous competitive speech and policy presentation rounds.",
    citationNotes: "Selected from 40 student speakers across regional government talent forums.",
    verified: true,
  },
  {
    id: "best-anchor-vaatsalya",
    title: "Best Anchor Award — Annual Athletic & Sports Meet",
    category: "Honor / Award",
    date: "November 2024",
    organization: "Vaatsalya School",
    location: "Campus Arena",
    description:
      "Awarded Best Anchor for exceptional live commentary, crowd pacing, and stage presence across multi-day athletic championships.",
    citationNotes: "Verified institutional award for oratory and live audience engagement.",
    verified: true,
  },
  {
    id: "inter-school-quiz-coast-guard",
    title: "Inter-School Quiz Competitor — Indian Coast Guard",
    category: "Honor / Award",
    date: "January 2024",
    organization: "Indian Coast Guard",
    location: "Regional Station",
    description:
      "Represented school in the prestigious Indian Coast Guard Inter-School General Knowledge, Maritime, and Science Quiz.",
    citationNotes: "Institutional quiz delegation record.",
    verified: true,
  },
  {
    id: "inspire-manak-national",
    title: "INSPIRE MANAK National Workshop & Prototype Mentorship",
    category: "National Mentorship",
    date: "February 2020",
    organization: "Department of Science and Technology (DST), Govt. of India",
    location: "National Mentorship Program",
    description:
      "Selected for national-level innovation mentorship under the prestigious INSPIRE MANAK scheme at age 13 for designing an early graphene-reinforced smart helmet safety prototype.",
    citationNotes: "Department of Science & Technology (DST) national youth innovation initiative record.",
    verified: true,
  },
  {
    id: "swachhta-action-plan-iittm",
    title: "Swachhta Action Plan Youth Delegation",
    category: "Honor / Award",
    date: "November 2019",
    organization: "Indian Institute of Tourism and Travel Management (IITTM)",
    location: "National Forum",
    description:
      "Selected as student youth delegate contributing to sustainability frameworks and civic environmental action initiatives.",
    citationNotes: "IITTM institutional youth delegation record.",
    verified: true,
  },
];

