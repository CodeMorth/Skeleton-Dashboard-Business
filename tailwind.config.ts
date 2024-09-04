import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-own":"#0F59D6",
        "blue-own-2":"#94B2E4",
        "blue-own-3":"#F5F7FB",
        "blue-own-4":"#73BEE9",
        "hover-color":"#B9FAC7",
        "white-own":"#FFFFFF",
        "red-own-1":"#EF9A94",
        "red-own-2":"#ff0000",
        "yellow-own-1":"#E0CE90",
        "yellow-own-2":"#FFC300",
        "lead-own-1":"#F3F3F3",
        "lead-own-2":"#D9D9D9",
        "purple-own-1":"#B9B9FA"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        phone: '414px',
        phonelg: '568px',
        tablet: '768px',
        tabletlg: '960px',
        tabletxl: '1024px',
        laptop: '1200px',
        laptoplg: '1400px',
        desktop: '1700px',
      },
    },
  },
  plugins: [],
};
export default config;
