<template>
	<div class="content">
		<SanityContent :blocks="content" :serializers="serializers" />
	</div>
</template>

<script setup lang="ts">
import { resolveComponent } from 'vue'

defineProps<{ content: any }>()

const serializers = {
	types: {
		intro: resolveComponent('LazyIntro'),
		services: resolveComponent('LazyServices'),
		contact: resolveComponent('LazyContact'),
	},

}
</script>

<style lang="scss" scoped>
.content {
	width: 100%;
	height: 100%;
	min-height: 100vh;
	// .v-enter-active,
	// .v-leave-active {
	// 	transition: all .35s ease;
	// }

	// .v-enter-from,
	// .v-leave-to {
	// 	opacity: 0
	// }
}
</style>