<template>
	<button class="app-btn">
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
	border: none;

	cursor: pointer;
	color: $white;
	font-size: 1.5rem;
	letter-spacing: 0.1rem;
	font-weight: 400;

}
</style>