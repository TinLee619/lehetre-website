import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:       "#0D0D0D",
        surface:  "#161616",
        surface2: "#1E1E1E",
        orange:   "#FF5500",
        "orange-dark": "#CC4400",
        muted:    "#A0A0A0",
        divider:  "#2A2A2A",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        logo:    ["var(--font-orbitron)", "sans-serif"],
        body:    ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "diagonal": "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,85,0,0.03) 10px, rgba(255,85,0,0.03) 11px)",
      },
    },
  },
  plugins: [],
};

export default config;
