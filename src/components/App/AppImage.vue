<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
const props = defineProps<{
	src: string,
	width: number,
	height: number,
	alt: string,
	hotspot?:{
		x: string,
		y: string,
	}
	overlay?: boolean,
	iconName?: string,
	mobile?: boolean,
}>()

const emits = defineEmits<{
	(e: 'imgLoaded', imgLoaded: true): void 
}>()

const lazyOptions = reactive({
	src: props.src,
	lifecycle: {
		loaded: (el:HTMLImageElement) => {
			emits('imgLoaded', true)
		}
	}
})

const isMobile = useMediaQuery('(max-width: 700px)')
</script>

<template>
	<div class="image">
		<div v-if="overlay" class="overlay" />
		<template v-if="mobile && isMobile">
			<SanityImage 
			:asset-id="src" 
			:w="height" 
			:h="width" 
			auto="format"
			fit="crop"
			crop="focalpoint" 
			:fp-x="hotspot?.x" 
			:fp-y="hotspot?.y"
		>
			<template #default="{ src }">
				<img 
					v-lazy="{src: src, lifecycle: lazyOptions.lifecycle}" 
					:width="height" 
					:height="width" 
					:alt="alt"
				/>
			</template>
		</SanityImage>
		</template>
		<template v-else>
			<SanityImage 
			:asset-id="src" 
			:w="width" 
			:h="height" 
			auto="format"
			fit="crop"
			crop="focalpoint" 
			:fp-x="hotspot?.x" 
			:fp-y="hotspot?.y"
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
		</template>

		<Icon class="image-icon" v-if="iconName" :name="iconName" />
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

	.image-icon{
		z-index: 2;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: 3rem;
		height: 3rem;
		stroke: $white;
		fill: none;
		opacity: 0;

		transition: all 0.3s ease;
	}

	&:hover{
		.overlay{
			opacity: 0.5;
		}

		.icon{
			opacity: 1;
		}
	}
}
</style>