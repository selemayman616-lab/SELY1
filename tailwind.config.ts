import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  "#fefaec",
          100: "#fdf0c4",
          200: "#fce085",
          300: "#f9c63c",
          400: "#f7ae1a",
          500: "#d4a843",
          600: "#b8880d",
          700: "#92680e",
          800: "#785213",
          900: "#664415",
          950: "#3a2407",
        },
        dark: {
          50:  "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#0a0a0a",
        },
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "Arial", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #d4a843 0%, #f0c86a 50%, #d4a843 100%)",
        "dark-gradient": "linear-gradient(180deg, #0a0a0a 0%, #111111 100%)",
        "glass": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        "gold": "0 0 30px rgba(212, 168, 67, 0.3)",
        "gold-sm": "0 0 10px rgba(212, 168, 67, 0.2)",
        "glass": "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "card": "0 4px 24px rgba(0,0,0,0.5)",
        "card-hover": "0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,168,67,0.2)",
      },
      animation: {
        "shimmer": "shimmer 2s linear infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "slide-up": "slide-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "pulse-gold": { "0%,100%": { boxShadow: "0 0 0 0 rgba(212,168,67,0.4)" }, "50%": { boxShadow: "0 0 0 10px rgba(212,168,67,0)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        "slide-up": { "0%": { transform: "translateY(20px)", opacity: "0" }, "100%": { transform: "translateY(0)", opacity: "1" } },
      },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [],
};
export default config;
