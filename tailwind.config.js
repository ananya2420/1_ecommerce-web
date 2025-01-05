import { ChainId, Token, TokenAmount, Pair, Trade, TradeType, Route } from '@uniswap/sdk'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#fea928",
        secondary:"#ed8900",
      },
      container:{
        center: true,
       padding:{
        DEFAULT: "1rem",
        sm:"3rem",
       }, 
      },
    },
  },
  plugins: [],
}

