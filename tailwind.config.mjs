/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        background: "var(--background)", 
        foreground: "var(--foreground)",
        
        primary: {
          DEFAULT: "var(--primary)",
        },
                border: "var(--border)",
        muted: "var(--muted)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};