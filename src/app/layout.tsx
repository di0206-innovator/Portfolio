import type { Metadata, Viewport } from "next";
import { Syne, Instrument_Serif, JetBrains_Mono, Inter_Tight } from "next/font/google";
import "@/styles/globals.css";
import JsonLd from "@/components/seo/JsonLd";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1434FF",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://divyanshusinha.me"),
  title: {
    default: "Divyanshu Sinha — The Builder Behind the Builds | Wispr Flow India",
    template: "%s | Divyanshu Sinha",
  },
  description:
    "Interactive personal portfolio for Divyanshu Sinha: multidisciplinary builder at the intersection of AI product engineering, developer community leadership, growth strategy, and voice-first interaction design. Built for the Wispr Flow India Hiring Challenge.",
  applicationName: "Divyanshu Sinha Portfolio",
  generator: "Next.js",
  keywords: [
    "Divyanshu Sinha",
    "Wispr Flow",
    "Wispr Flow India Hiring Challenge",
    "Product Engineer",
    "Growth Strategist",
    "GDG ADYPU",
    "Alta Pune Community Club",
    "ALTA School of Technology HQ",
    "NotesGPT",
    "Climbit Decision Engine",
    "Brainworks SIH 2026",
    "Stratify",
    "KrishiSetu",
    "NyaySaathi",
    "MerchantPulse",
    "Healthify",
    "Forge Goa",
    "Pune",
    "AI Product Development",
    "Local LLMs",
    "Voice-First Computing",
  ],
  authors: [{ name: "Divyanshu Sinha", url: "https://divyanshusinha.me" }],
  creator: "Divyanshu Sinha",
  publisher: "Divyanshu Sinha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://divyanshusinha.me",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune, Maharashtra, India",
    "geo.position": "18.5204;73.8567",
    "ICBM": "18.5204, 73.8567",
  },
  openGraph: {
    title: "Divyanshu Sinha — The Builder Behind the Builds",
    description:
      "Interactive personal portfolio and engineering case studies dossier built specifically for the Wispr Flow India Hiring Challenge.",
    url: "https://divyanshusinha.me",
    siteName: "Divyanshu Sinha Portfolio",
    locale: "en_US",
    alternateLocale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://divyanshusinha.me/images/projects/stratify.jpg",
        width: 1200,
        height: 630,
        alt: "Divyanshu Sinha — The Builder Behind the Builds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyanshu Sinha — The Builder Behind the Builds",
    description:
      "I build communities around ideas — and turn momentum into action. Interactive Portfolio × Wispr Flow India Hiring Challenge.",
    images: ["https://divyanshusinha.me/images/projects/stratify.jpg"],
    creator: "@di0206",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${interTight.variable}`}
    >
      <body className="min-h-screen bg-[#F8F7F2] text-[#0A0E1A] antialiased selection:bg-[#1434FF] selection:text-white">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

