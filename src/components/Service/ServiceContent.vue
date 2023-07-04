<script setup lang="ts">
defineProps<{ data: any }>()
</script>

<template>
	<section class="service-content" >
		<SanityContent :blocks="data" />
	</section>
</template>

<style lang="scss" >
.service-content{
	width: 100%;
	max-width: 70rem;
	h3{
		font-size: 1.5rem;
		line-height: 1.5rem;
		letter-spacing: 0.1rem;
		margin-bottom: 1.5rem;
	}
	p{
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 1.5rem;
	}
	ul{
		margin: 0 0 1.5rem 1rem;
		li{
			font-size: 1rem;
			line-height: 2rem;
		}
	}
}
</style>



