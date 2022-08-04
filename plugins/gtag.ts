import VueGtag from 'vue-gtag'
import {defineNuxtPlugin} from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: 'GA_MEASUREMENT_ID'
        }
    })
})
