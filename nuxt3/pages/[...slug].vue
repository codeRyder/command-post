<template>
	<div class="app-wrapper">
		<Header> </Header>
		<div class="app-main"></div>
		<Footer> </Footer>
	</div>
</template>

<script setup>
	const { $storyBlok }  = useNuxtApp();
	console.log($storyBlok)
	const { data } = await $storyBlok('home', { version: 'draft' })
	const state = reactive({ stories: data })
	// onMounted(() => {
	// 	useStoryBridge(id, (story) => (state.story = story))
	// })
</script>

<style />
