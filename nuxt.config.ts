// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  mode: "static",
  router: {
    base: "/https://8lou.github.io/realworld/",
  },
  buildModules: ["@nuxtjs/tailwindcss"],
  target: "static",
  ssr: false,

  typescript: { strict: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/global.css"],
});
