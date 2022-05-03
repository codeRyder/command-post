import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: true,
	components: ['@/components/app', '@/components/base', '@/components/modules'],
	runtimeConfig: {
		storyblokAccessToken: '',
		app: {
			storyblokContentVersion: '',
		},
	},
	typescript: {
		typeCheck: true,
		shim: true,
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/style.scss";',
				},
			},
		},
	},
})
