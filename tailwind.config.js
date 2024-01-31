module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_7f: "#ffffff7f", A700_a2: "#ffffffa2", A700: "#ffffff" },
        deep_orange: { 50: "#fdeae7" },
        blue: {
          50: "#e3f1ff",
          A400_01: "#1877f2",
          A400: "#2072f3",
          A200: "#4285f4",
        },
        deep_purple: { 900: "#1f0d8c", A400: "#4328ea" },
        red: {
          50: "#fde7f3",
          500: "#ea4335",
          600: "#ea3f28",
          900: "#a82210",
          "600_33": "#eb402833",
        },
        pink: {
          400: "#ea2891",
          900: "#8c0d51",
          "400_01": "#eb2891",
          "400_33": "#eb289133",
        },
        light_blue: {
          400: "#18bffb",
          900: "#0058aa",
          A700: "#0084ff",
          A700_33: "#0084ff33",
        },
        green: { 50: "#dbfbdc", 600: "#34a853", A700: "#00a424" },
        gray: {
          50: "#f5f3ff",
          100: "#f4f7fa",
          500: "#a4a4a4",
          900: "#172026",
          "900_87": "#17202687",
          "900_7f": "#1720267f",
        },
        black: { 900: "#000000" },
        blue_gray: { 500: "#5f7795", 800: "#35485c" },
        amber: { 500: "#fbbc05" },
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#18bffb,#2072f3)",
        gradient1: "linear-gradient(90deg ,#ea2891,#fde7f3)",
        gradient2: "linear-gradient(90deg ,#0084ff,#e3f1ff)",
        gradient3: "linear-gradient(90deg ,#ea3f28,#fdeae7)",
        gradient4: "linear-gradient(90deg ,#4328ea,#f5f3ff)",
      },
      fontFamily: { inter: "Inter" },
      boxShadow: {
        bs1: "0px 32px  64px -56px #0084ff33",
        bs: "0px 32px  64px -56px #eb289133",
        bs2: "0px 32px  64px -56px #eb402833",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
