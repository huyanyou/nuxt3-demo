// 使用第三方组件vueqr
import { defineNuxtPlugin } from '#app'
import VueQr from 'vue-qr/src/packages/vue-qr.vue'
export default defineNuxtPlugin((nuxt) => {
    nuxt.vueApp.component('VueQr', VueQr)
})
