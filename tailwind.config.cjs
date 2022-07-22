/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a17fff",

          secondary: "#7a6cd1",

          accent: "#f4024b",

          neutral: "#2B232E",

          "base-100": "#2F2D43",

          info: "#2D74D7",

          success: "#74ECB2",

          warning: "#BA9D0D",

          error: "#FC5331",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
