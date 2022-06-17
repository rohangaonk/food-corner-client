module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // Some useful comment
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#3B25C0",
        secondary: "#77FFAD",
        inputBg: "#FFFFFF",
        text: "#131313",
        highlight: "#F04D43",
        lightbg: "#F8F8F8",
        hoverSolid: "#5340C1",
        hoverOpaque: "#E5E5E5",
      },
      fontSize: {
        "font-20": "20px",
        "font-18": "18px",
        "font-16": "16px",
        "font-14": "14px",
        "font-12": "12px",
        "font-24": "24px",
        "font-30": "30px",
        "font-36": "36px",
      },
    },
  },
  plugins: [],
};
