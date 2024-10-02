// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      apiBase: 'http://127.0.0.1:8787'
    }
  },

  compatibilityDate: '2024-09-08',
})
