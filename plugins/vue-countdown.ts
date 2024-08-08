/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { defineNuxtPlugin } from '#app'
import VueCountdown from '@chenfengyuan/vue-countdown'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueCountdown', VueCountdown)
})
