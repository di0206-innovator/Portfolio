export interface GalleryItem {
  id: string;
  title: string;
  category: "Community" | "Hackathon" | "Media & Studio" | "Field & Nature";
  date: string;
  location: string;
  caption: string;
  aspectRatio: "landscape" | "portrait" | "square";
  accentColor: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gdg-summit-stage",
    title: "GDG ADYPU Flagship Gathering",
    category: "Community",
    date: "2025 – 2026",
    location: "Pune, India",
    caption:
      "Bringing student builders, open-source contributors, and mentors into one high-energy campus room to demystify modern technology stacks.",
    aspectRatio: "landscape",
    accentColor: "#1434FF",
  },
  {
    id: "promptwars-arena",
    title: "PromptWars: Competitive Prompt Engineering",
    category: "Hackathon",
    date: "2025",
    location: "ADYPU Campus, Pune",
    caption:
      "Orchestrating the high-tempo live prompt engineering tournament where teams competed to build generative solutions under tight clock constraints.",
    aspectRatio: "landscape",
    accentColor: "#F5B700",
  },
  {
    id: "alta-youtube-production",
    title: "ALTA HQ YouTube Studio Set",
    category: "Media & Studio",
    date: "2025 – Present",
    location: "Studio Floor, Pune",
    caption:
      "Behind the lens: framing conversations with student engineers, structuring narratives, and turning raw project demos into broadcast-ready episodes.",
    aspectRatio: "portrait",
    accentColor: "#E63946",
  },
  {
    id: "alta-demo-day",
    title: "Alta Pune Builder Demo Circle",
    category: "Community",
    date: "2025",
    location: "Alta Hub, Pune",
    caption:
      "Informal peer critique sessions where founders showcase unpolished early prototypes, test distribution hooks, and receive unvarnished feedback.",
    aspectRatio: "square",
    accentColor: "#166534",
  },
  {
    id: "hackerhouse-goa-squad",
    title: "HackerHouse Goa Ritual",
    category: "Hackathon",
    date: "Oct 2026",
    location: "Goa, India",
    caption:
      "Forging identity and squad chemistry on the ground at HackerHouse Goa — validating that community culture precedes technical execution.",
    aspectRatio: "landscape",
    accentColor: "#FDE047",
  },
  {
    id: "nature-visual-storytelling",
    title: "Silent Horizon / Visual Still",
    category: "Field & Nature",
    date: "Ongoing",
    location: "Western Ghats, Maharashtra",
    caption:
      "Outside the terminal: observing natural light, contrast, and organic composition through a 35mm lens. Patience learned behind the camera carries directly into product craft.",
    aspectRatio: "portrait",
    accentColor: "#0A0E1A",
  },
];

