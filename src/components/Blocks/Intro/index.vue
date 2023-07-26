<script setup lang="ts">
//https://alvarotrigo.com/blog/how-to-create-a-youtube-video-background-with-css/
//https://stackoverflow.com/questions/5001299/how-to-embed-high-quality-video-with-new-youtube-iframe-style-code

defineProps<{
	title: string,
	image: string,
	video: string,
}>()

const startAnim = ref(false)
function imgLoaded(){
	startAnim.value=true
}
</script>

<template>
	<section class="intro-block">
		<div :class="['title', { show: startAnim }]">
			<h1>
				{{ title }}
			</h1>
			<NuxtLink class="book-btn" to="/contact/">
				<AppBtn>
					Book Now
				</AppBtn>
			</NuxtLink>
		</div>
		<AppImage 
			:src="image"
			@img-loaded="imgLoaded()"
			:width="2880" 
			:height="1620" 
			:alt="title"/>
		<div :class="['overlay', { show: startAnim }]" />
	</section>
</template>

<style lang="scss" scoped>
.intro-block{
	width: 100%;
	height: calc(100vh - 80px);
	padding: 0;
	position: relative;
	.title{
		width: 30rem;
		z-index: 3;
		position: absolute;
		top: 50%;
		left: 10%;
		transform: translate(0, -50%);


		display: flex;
		flex-direction: column;
		gap: 2rem;
		h1{
			text-transform: capitalize;
			font-size: 5rem;
			line-height: 5.5rem;
			letter-spacing: 5%;
			color: $white;
		}
		opacity: 0;
		transition: all .25s cubic-bezier(0.55, 0.055, 0.675, 0.19) .25s;
		&.show{
			opacity: 1;
		}
	}
	.overlay{
		z-index: 2;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: $dark;
		opacity: 0;
		transition: all .25s cubic-bezier(0.55, 0.055, 0.675, 0.19);
		&.show{
			opacity: 0.35;
		}
	}
	.image{
		width: 100%;
		height: calc(100vh - 80px);
	}

	@media (max-width: 900px) {
		.title{
			width: 20rem;
			h1{
				text-transform: capitalize;
				font-size: 3rem;
				line-height: 3.5rem;
				letter-spacing: 5%;
				color: $white;
			}
		}
	}
	@media (max-width: 360px) {
		.title{
			width: 18rem;
			h1{
				text-transform: capitalize;
				font-size: 2.5rem;
				line-height: 3rem;
				letter-spacing: 5%;
				color: $white;
			}
		}
	}
}
</style>