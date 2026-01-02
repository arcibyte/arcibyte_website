/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(97% 0.001 106.424)",
        primary: "oklch(26.8% 0.007 34.298)", //texto principal, encabezados
        foreground: "oklch(44.4% 0.011 73.639)", //texto secuandario, UI suave
        accent: "oklch(79.2% 0.209 151.711)", //enfasis visual
        muted: "oklch(86.9% 0.005 56.366)", // bordes
      }, 

    },
  },
  plugins: [require("@tailwindcss/typography")],
};
