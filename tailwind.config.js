module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#529B03",

          "secondary": "#D75050",

          "accent": "#51A800",

          "neutral": "#836B5D",

          "base-100": "#F2F2F2",

          "info": "#42AEBD",

          "success": "#489380",

          "warning": "#4b5563",

          "error": "#E01A2E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

