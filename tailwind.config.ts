import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Responsavel por localizar todos os arquivos que contém classes do Tailwind
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem ) 1fr",
      },

      colors: {
        roxo: "#8257e6",
      },
    },
  },
  plugins: [],
};
export default config;
