<script setup lang="ts">
import type { ServiceCard } from "~~/src/types"

defineProps<{
	data: ServiceCard,
}>()

const startAnim = ref(false)
function imgLoaded(){
	startAnim.value=true
}
</script>

<template>
	<li class="service-card">
		<NuxtLink :to="`/paragliding/${data.link}/`">
			<AppImage 
				:src="data.image" 
				@img-loaded="imgLoaded()"
				:width="600" 
				:height="400"  
				:alt="data.title"
			/>
			<div class="info" :class="{ show: startAnim}">
				<h2 class="title">{{ data.title }}</h2>
				<p class="description">{{ data.description }}</p>
				<span>read more</span>
			</div>
		</NuxtLink>
	</li>
</template>

<style lang="scss" >
.service-card{
	width: 20rem;
	height: 100%;
	min-height: 28rem;
	cursor: pointer;

	.image{
		height: 14rem;
		border-radius: 1.5rem 1.5rem 0 0;
		overflow: hidden;

		img{
			border-radius: 1.5rem 1.5rem 0 0;
			transform: all 0.75 ease;
		}
	}
	position: relative;


	.info{
		height: 14rem;
		border: 1px solid $text;
		border-radius: 0 0 1.5rem 1.5rem;
		border-top: none;
		padding: 1.5rem;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.title{
			font-size: 1.5rem;
			line-height: 1.8rem;
			letter-spacing: 0.1rem;
		}
		
		.description{
			font-size: 1rem;
			line-height: 1.2rem;
		}

		span{
			color: $text;
			text-transform: uppercase;
			transition: all .25s cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}

		opacity: 0;
		transition: all .25s cubic-bezier(0.55, 0.055, 0.675, 0.19);
		&.show{
			opacity: 1;
		}
	}

	&:hover{
		.image img{
			transform: scale(1.2);
		}
		.info span{
			color: $secondary;
		}

	}

	@media (max-width: 1300px) {
		width: 100%;
		max-width: 24rem;

		.image{
			width: 100%;
			max-width: 24rem;
		}
	}

	@media (max-width: 600px) {
		.info{
			height: fit-content;
			.description{
				margin: 1rem 0;
			}
		}
	}
}
</style>