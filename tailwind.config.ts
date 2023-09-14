import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        tablet: "48rem",
        desktop: "80rem",
      },
      colors: {
        white: "#fff",
        "white-dark": "#f4f4f4",
        "gray-light": "#7A7A7A",
        "gray-dark": "#383838",
        "gray-border": "#d6d6d6",
        "blue-light": "#1a6baf",
        "blue-dark": "#15568c",
        "blue-wavy": "#0bf",
        "green-light": "#7fc243",
        "green-dark": "#669b36",
        "orange-light": "#f78931",
        "orange-dark": "#ef8129",
        "red-light": "#c55a5a",
        "red-dark": "#c55a5a",
      },
    },
  },
  plugins: [],
};
export default config;
