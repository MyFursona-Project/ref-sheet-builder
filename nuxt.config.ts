// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
  app: {
    head: {
      link: [
        {
          rel: "shortcut icon",
          href: "./favicon.ico",
        },
        {
          rel: "manifest",
          href: "./manifest.json",
        },
      ],
    },
  },
  css: ["~/assets/css/main.scss"],
  webpack: {
    optimizeCSS: true,
  },
  typescript: {
    strict: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
