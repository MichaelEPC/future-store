import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mb: "500px",
      // => @media (min-width: 550px) { ... }

      sm: "652px",
      // => @media (min-width: 640px) { ... }

      md: "880px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      pd: "1500px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1700px",
      // => @media (min-width: 1520px) { ... }
    },

    extend: {
      colors: {
        "principal-color": "#2b879e",
        "second-color": "#3ec9a7",
        "third-color": "#616668",
        "text-color": "#707070",
        "ligh-gray": "#DDDDDD",
        "green-light": "#a4cb6a",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
