<script setup lang="ts">
const props = defineProps<{
	src: string,
	width: number,
	height: number,
	overlay?: boolean,
	alt: string,
}>()

const emits = defineEmits<{
	(e: 'imgLoaded', imgLoaded: true): void 
}>()

const lazyOptions = reactive({
	src: props.src,
	lifecycle: {
		loaded: (el:HTMLImageElement) => {
			// console.log('image loaded', el)
			emits('imgLoaded', true)
		}
	}
})
</script>

<template>
	<div class="image">
		<div v-if="overlay" class="overlay" />
		<SanityImage 
			:asset-id="src" 
			:w="width" 
			:h="height" 
			auto="format"
		>
			<template #default="{ src }">
				<img 
					v-lazy="{src: src, lifecycle: lazyOptions.lifecycle}" 
					:width="width" 
					:height="height" 
					:alt="alt"
				/>
			</template>
		</SanityImage>
	</div>
</template>

<style lang="scss" >
.image {
	display: flex;
	position: relative;

	.overlay{
		z-index: 2;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: $dark;
		border-radius: 1.5rem;
		
		opacity: 0;
		transition: opacity 0.35s ease;
	}

	img {
		width: inherit;
		height: inherit;
		object-fit: cover;
		display: block;

		outline: none;
		border: none;
		opacity: 0;

		// image transition 
		&[lazy=loading] {
			opacity: 0;
		}

		&[lazy=error] {
			opacity: 0;
		}

		&[lazy=loaded] {
			opacity: 1;
			transition: all 0.75s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}

	&:hover{
		.overlay{
			opacity: 0.5;
		}
	}
}
</style>