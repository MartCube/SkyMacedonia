<script setup lang="ts">

</script>

<template>
	<div class="service-switcher">
		<button class="tandem active">Tandem Flights</button>
		<button class="tour">Paragliding Tours</button>
	</div>
</template>

<style lang="scss" scoped>
.service-switcher{
	display: flex;
	margin-bottom: 4rem;
	gap: 2rem;


	.tandem{
		padding:  0.8rem 4rem 0.8rem 2rem;
		border: 1px solid $secondary;
		border-radius: 1.5rem 0 0 1.5rem;
		background: $white;

		color:$secondary;
		font-size: 1.5rem;
		line-height: 1.5rem;
		letter-spacing: 0.1rem;
		
		clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 100%, 85% 0);

		&.active{
			background: $secondary;
			color: $white;
		}
	}

	.tour{
		padding: 0.8rem 2rem;
		border: 1px solid $secondary;
		border-radius: 1.5rem;
		background: $white;

		color:$secondary;
		font-size: 1.5rem;
		line-height: 1.5rem;
		letter-spacing: 0.1rem;
	}
}
</style>