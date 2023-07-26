<script setup lang="ts">
defineProps<{
	image: string,
}>()

const startAnim = ref(false)
function imgLoaded(){
	startAnim.value=true
}
</script>

<template>
	<section class="contact-block">
		<ContactForm :class="{ show: startAnim }"/>
		<div class="image">
			<AppImage 
				:src="image"
				@img-loaded="imgLoaded()"
				:width="1080" 
				:height="1200" 
				alt="contact" />
		</div>
	</section>
</template>

<style lang="scss" >
.contact-block {
	width: 100%;
	display: flex;
	justify-content: space-between;

	.image{
		width: 100%;
		max-width: 540px;
		height: 37rem;
		border-radius: 1.5rem;
		img{
			border-radius: 1.5rem;
		}
	}

	@media (max-width: 1200px) {
		flex-direction: column-reverse;
		gap: 4rem;
		.image{
			max-width: initial;
			height: 27rem;
		}
		form{
			height: fit-content;
		}
	}
	@media (max-width: 800px) {
		.image{
			height: 20rem;
		}
	}
}
</style>