// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // alias :{
  //   "@": "/",
  // },
  ssr: false,
  devtools: { enabled: true },
  css : [ "~/assets/scss/main.scss"],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "~/assets/scss/main.scss" as *;'
  //       }
  //     }
  //   }
  // },
  postcss : {  
    plugins: {
      autoprefixer: {},
    }
  },
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    }
  },
})
