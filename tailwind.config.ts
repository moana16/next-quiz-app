import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      main : '#A5D8FA',
      mint: '#00DBA3',
      rate: '#47B1AA',
      raspberry: '#FE5868',
      mango: '#FFA811',
      white: '#ffffff',
      black: '#000000',
      bg : '#A5D8FA',
      border : {
        DEFAULT :'#1EA4FF',
        sub : '#87CEFA '
      },
      text : {
        DEFAULT: '#15181e',
        primary : '#FF7DB4 ',
      
      }
    },
    extend: {
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
