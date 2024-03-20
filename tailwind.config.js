module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,ts}",
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
