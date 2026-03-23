import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B1A",
        "primary-hover": "#E55A00",
        "bg-soft": "#F8F8F8",
        "bg-orange": "#FFF4EE",
        "text-main": "#0F0F0F",
        "text-secondary": "#444444",
        "text-tertiary": "#888888",
        border: "#E5E5E5",
        success: "#22C55E",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      animation: {
        shine: "shine 3s linear infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
