// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  // alias :{
  //   "@": "/",
  // },
  ssr: false,
  devtools: { enabled: true },
  // css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;',
        },
      },
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  app: {
    layoutTransition: {
      name: "slide",
    },
  },
  modules: ["@nuxt/image"],
});
