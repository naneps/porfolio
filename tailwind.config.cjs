/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        myTheme: {
          "primary": "#6419E6",
          
          "secondary": "#D926A9",
                   
          "accent": "#1FB2A6",
                   
          "neutral": "#191D24",
                   
          "base-100": "#2A303C",
                   
          "info": "#3ABFF8",
                   
          "success": "#36D399",
                   
          "warning": "#FBBD23",
                   
          "error": "#F87272",
          'font-gray-100': '#F5F7FA',
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'),],
};
