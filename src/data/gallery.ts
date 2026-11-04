export interface GalleryItem {
  id: string;
  title: string;
  category: "Community" | "Hackathon" | "Media & Studio" | "Field & Nature";
  date: string;
  location: string;
  caption: string;
  aspectRatio: "landscape" | "portrait" | "square";
  accentColor: string;
  image?: string;
  driveUrl?: string;
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
    image: "/images/events/gdg-adypu-1.jpg",
    driveUrl: "https://drive.google.com/file/d/1U0m-BQ-h5qggHxrQnj5kUhi2gorsVKtU/view?usp=drivesdk",
  },
  {
    id: "promptwars-arena",
    title: "PromptWars × ALTA Pune",
    category: "Hackathon",
    date: "2026",
    location: "Alta School of Technology, Pune",
    caption:
      "Hosting the high-tempo 8-hour AI buildathon and prompt engineering tournament at Alta School of Technology, Pune, where teams hacked on generative toolchains under tight clock constraints.",
    aspectRatio: "landscape",
    accentColor: "#F5B700",
    image: "/images/events/promptwars-alta-1.jpg",
    driveUrl: "https://drive.google.com/file/d/1-IAfTQEhKzzzZuP48iPW8DZ8zzdpZ4lJ/view?usp=drivesdk",
  },
  {
    id: "alta-youtube-production",
    title: "Alta events",
    category: "Media & Studio",
    date: "2026 – Present",
    location: "Studio Floor, Pune",
    caption:
      "Behind the lens: framing conversations with student engineers, structuring narratives, and turning raw project demos into broadcast-ready episodes.",
    aspectRatio: "portrait",
    accentColor: "#E63946",
    image: "/images/events/manu-agarwal-1.jpg",
    driveUrl: "https://drive.google.com/file/d/1Jmo1hNGKr2sh8MK1xuVjOUJ2OC9ZHVFK/view?usp=drivesdk",
  },
  {
    id: "alta-demo-day",
    title: "PromptWars × ADYPU",
    category: "Community",
    date: "2026",
    location: "ADYPU Campus, Pune",
    caption:
      "Campus AI buildathon and prompt tournament bringing over 150 student builders together at ADYPU Campus under tight clock constraints.",
    aspectRatio: "square",
    accentColor: "#166534",
    image: "/images/events/promptwars-adypu-1.jpg",
    driveUrl: "https://drive.google.com/file/d/1GgglZsx0f6u9OvuN5Fdy0wADMGzbET1X/view?usp=drivesdk",
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
    image: "/images/projects/forgegoa.jpg",
    driveUrl: "https://hhgoa26-eta.vercel.app/",
  },
  {
    id: "nature-visual-storytelling",
    title: "Campus Festivities & Community Bonding",
    category: "Field & Nature",
    date: "Ongoing",
    location: "Alta Campus, Pune",
    caption:
      "Capturing community energy, culture, and collective momentum across university cohorts through a documentary lens.",
    aspectRatio: "portrait",
    accentColor: "#0A0E1A",
    image: "/images/events/janmashtami-1.jpg",
    driveUrl: "https://drive.google.com/file/d/15u0y9YR416g6ARGy_uo0qe2GC8ungbkz/view?usp=drivesdk",
  },
];
