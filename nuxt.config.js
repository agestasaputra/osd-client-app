// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/styles/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
    noImplicitAny: true,
  },
  plugins: ['~/plugins/vueperslides.ts', '~/plugins/dompurify-html.ts'],
  modules: ['@hypernym/nuxt-anime', '@morev/vue-transitions/nuxt'],
})
