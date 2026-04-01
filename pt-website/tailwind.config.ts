import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0D9488",
          "primary-dark": "#0F766E",
          secondary: "#F59E0B",
          "secondary-dark": "#D97706",
          dark: "#0F172A",
          light: "#F8FAFC",
          gray: "#64748B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
