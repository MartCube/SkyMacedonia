<script setup lang="ts">
defineProps<{
	secondary?: boolean,
}>()

</script>

<template>
	<button class="app-btn" :class="{ secondary }">
		<slot />
	</button>
</template>

<style lang="scss" >
.app-btn {
	width: fit-content;
	height: 3rem;
	padding: 0 4rem;
	border-radius: 1.5rem;
	background: $secondary;
	border: 1px solid transparent;

	cursor: pointer;
	color: $white;
	font-size: 1.5rem;
	letter-spacing: 0.1rem;
	font-weight: 400;

	&.secondary{
		background: transparent;
		color: $secondary;
		border-color: $secondary;
		transition: all 0.35s ease;
		&:hover{
			background: $secondary;
			color: $white;
			border-color: transparent;
		}
	}

}
</style>