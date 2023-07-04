<script setup lang="ts">
import type { ServiceCard } from "~~/src/types"

defineProps<{
	data: ServiceCard,
}>()
</script>

<template>
	<li class="service-card">
		<NuxtLink :to="`/paragliding/${data.link}/`">
			<AppImage :src="data.image" :width="600" :height="400" />
			<div class="info">
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
	height: 28rem;
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
			color: $secondary;
			text-transform: uppercase;
			transform: all 0.75 ease;
		}
	}

	&:hover{
		.image img{
			transform: scale(1.2);
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

}
</style>