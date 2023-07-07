<script setup lang="ts">
import type { ServiceAccommodation } from "~~/src/types"

defineProps<{
	data: ServiceAccommodation,
}>()
</script>

<template>
		<NuxtLink class="accommodation-card" :to="data.link" target="_blank">
			<div class="info">
				<h3 class="title">{{ data.title }}</h3>
				<h4 class="subtitle">{{ data.subtitle }}</h4>
			</div>
			<AppImage 
				:src="data.image" 
				:width="1100" 
				:height="824"
				:alt="data.title"
				/>
			<div class="overlay" />
		</NuxtLink>
</template>

<style lang="scss" scoped>
.accommodation-card{
	width: 45%;
	height: 26rem;
	list-style: none;
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	.overlay{
		z-index: 2;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: $dark;
		border-radius: 1.5rem;
		
		opacity: 0.75;
		transition: opacity 0.35s ease;
	}

	.image{
		width: 100%;
		max-width: 35rem;
		height: 26rem;
		border-radius: 1.5rem;
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		img{
			width: inherit;
			height: inherit;
		}
	}

	.info{
		z-index: 3;
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		opacity: 1;
		.title{
			color: $white;
			font-size: 2rem;
			line-height: 2rem;
			letter-spacing: 0.1rem;
			font-weight: 700;
		}
		.subtitle{
			color: $white;
			font-size: 1.5rem;
			line-height: 1.5rem;
			font-weight: 400;
		}
	}

	@media (max-width: 900px) {
		width: 100%;
		max-width: 30rem;
		height: 20rem;

		.image{
			height: 20rem;
		}
	}
}
</style>
