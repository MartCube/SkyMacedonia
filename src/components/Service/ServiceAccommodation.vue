<script setup lang="ts">
import type { ServiceAccommodation } from "~~/src/types"

defineProps<{
	data: ServiceAccommodation[],
}>()
</script>

<template>
	<section class="service-accommodation">
		<h2>Accommodation</h2>
		<ul>
			<AccommodationCard v-for="item in data" :data="item" />
		</ul>
	</section>
</template>

<style lang="scss" scoped>
.service-accommodation{
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
	ul{
		width: inherit;
		display: flex;
		justify-content: space-between;
	}

	@media (max-width: 900px) {
		align-items: center;
		ul{
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 2rem;

		}
	}
}
</style>