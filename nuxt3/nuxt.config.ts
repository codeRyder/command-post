import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	components: ['@/components/app', '@/components/base', '@/components/modules'],
	vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/scss/style.scss";'
            },
        },
    },
}

})
