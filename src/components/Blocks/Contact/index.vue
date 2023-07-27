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
		max-width: 32rem;
		height: 37rem;
		border-radius: 1.5rem;
		img{
			width: 100%;
			border-radius: 1.5rem;
		}
	}

	@media (max-width: 1200px) {
		flex-direction: column-reverse;
		align-items: center;
		gap: 4rem;
		.image{
			height: 28rem;
		}
		form{
			height: fit-content;
		}
	}
	@media (max-width: 900px) {
		.image{
			height: 22rem;
		}
	}
}
</style>