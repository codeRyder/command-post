import { StoryblokVue, apiPlugin } from '@storyblok/vue'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(({ nuxtApp }) => {
	return {
		provide: {
			storyBlok: () => StoryblokVue({ accessToken: process.env.NUXT_STORYBLOK_ACCESS_TOKEN, use: [apiPlugin] }),
		},
	}
})
