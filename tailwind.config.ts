import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a0f1a",
          light: "#0d1424",
          dark: "#060a12",
        },
        accent: {
          DEFAULT: "#00e5ff",
          light: "#b2f5fc",
          dark: "#00b8d4",
        },
        surface: {
          DEFAULT: "#111827",
          light: "#1a2332",
          border: "#1e293b",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
