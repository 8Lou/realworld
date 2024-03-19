module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {},
      backgroundColor: {},
      borderColor: {},
      fontFamily: {},
    },
  },
  plugins: [require("flowbite/plugin")],
};
