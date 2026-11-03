/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--bg-cream)",
        cobalt: "var(--bg-cobalt)",
        amber: "var(--bg-amber)",
        obsidian: "var(--bg-obsidian)",
        coral: "var(--accent-coral)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "surface-white": "var(--surface-white)",
        "surface-muted": "var(--surface-muted)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Syne", "sans-serif"],
        serif: ["var(--font-serif)", "Instrument Serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #0A0E1A",
        "brutal-lg": "8px 8px 0px 0px #0A0E1A",
        "brutal-sm": "2px 2px 0px 0px #0A0E1A",
        "brutal-white": "4px 4px 0px 0px #FFFFFF",
      },
    },
  },
  plugins: [],
};

