<script setup lang="ts">
import { useCycleList, onKeyStroke, onClickOutside } from '@vueuse/core'

const props = defineProps<{
	data: string[],
}>()

const lightboxRef = ref(null)	// lightbox ref
const isOpen = ref(false) // toggle lightbox
const { state, next, prev, index } = useCycleList(props.data)

// open lightbox
function Open(value: number) {
	isOpen.value = true
	index.value = value
}

// close lightbox
onClickOutside(lightboxRef, (event) => {
	isOpen.value = false
})

// onKeyStroke
onKeyStroke(['Escape', 'ArrowLeft', 'ArrowRight'], (e: KeyboardEvent) => {
	if (!isOpen.value) return
	switch (e.key) {
		case 'Escape':
			isOpen.value = false
			break
		case 'ArrowLeft':
			prev()
			break
		case 'ArrowRight':
			next()
			break
	}
})

// TODO
// add swipe
// const { isSwiping, direction } = useSwipe(img)
// TODO
// add loading spinner animation
</script>

<template>
	<section class="service-gallery">
		<h2>Gallery</h2>
		<div class="grid">
			<AppImage 
				v-for="(image, index) in data" 
				:key="index"
				@click="Open(index)"
				:src="image" 
				:width="600" 
				:height="400"
				overlay
			/>
		</div>
		<div v-if="isOpen" class="lightbox">
			<div class="wrapper" ref="lightboxRef">
				<AppImage 
					:src="state" 
					:width="1280" 
					:height="720" 
				/>
				<Icon class="prev" @click="prev()" name="GalleryArrow" />
				<Icon class="next" @click="next()" name="GalleryArrow" />
				<Icon class="close" @click="isOpen = false" name="Close" />
			</div>
		</div>
	</section>
</template>

<style lang="scss" >
.service-gallery {
	width: 100%;
	display: flex;
	flex-direction: column;

	h2{
		color: $text;
		font-size: 2rem;
		line-height: 2rem;
		letter-spacing: 0.1rem;
		margin-bottom: 4rem;
	}

	.lightbox {
		position: fixed;
		z-index: 4;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: $dark;

		display: flex;
		justify-content: center;
		align-items: center;

		.wrapper {
			.image {
				width: 100%;
				max-width: 1280px;
				user-select: none;

				img {
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
			}

			.icon {
				position: absolute;
				width: 3rem;
				height: 3rem;
				stroke: $white;
				fill: none;
				transition: all 0.2s ease;

				&:hover {
					cursor: pointer;
					stroke: $secondary;
				}
			}

			.prev {
				top: 50%;
				left: 1rem;
				transform: rotate(180deg);
			}

			.next {
				top: 50%;
				right: 1rem;
			}

			.close {
				top: 1rem;
				right: 1rem;
			}
		}
	}

	.grid {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 5%;

		.image {
			width: 300px;
			height: 200px;
			margin-bottom: 5%;

			border-radius: 1.5rem;
			img{
				border-radius: 1.5rem;
			}

			&:hover {
				cursor: pointer;
			}
		}
	}
}


@media (max-width: 800px) {
	#gallery {
		.grid {
			justify-content: space-between;

			.image {
				width: 48%;
				margin-right: 0;
			}
		}
	}
}

@media (max-width: 600px) {
	#gallery {
		padding-bottom: 2rem;

		.grid {

			.image {
				width: 100%;
				margin-bottom: 2rem;

			}
		}
	}
}
</style>