<script setup lang="ts">
//https://alvarotrigo.com/blog/how-to-create-a-youtube-video-background-with-css/
//https://stackoverflow.com/questions/5001299/how-to-embed-high-quality-video-with-new-youtube-iframe-style-code

defineProps<{
	image: string,
	video: string,
}>()

</script>

<template>
	<section class="intro-block">
		<AppImage :src="image" :width="5000" :height="3333" />
	</section>
</template>

<style lang="scss" scoped>
.intro-block{
	width: 100%;
	height: 100%;
	max-height: calc(100vh - 80px);
	padding: 0;
	margin-bottom: 8rem;
	.image{
		width: 100%;
		height: calc(100vh - 80px);;
	}

}
</style>