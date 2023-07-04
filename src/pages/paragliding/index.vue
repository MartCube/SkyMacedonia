<script setup lang="ts">
import { PageQuery } from "~~/src/queries"
import type { Page } from "~~/src/types"

// fetch data
const { data, pending } = await useSanityQuery<Page>(PageQuery, { uid: 'paragliding' })
</script>

<template>
	<div class="page">
		<template v-if="data && !pending">
			<AppContent :content="data.content" />
		</template>
	</div>
</template>

<style lang="scss" >
.page {
	height: 100%;
	min-height: 20vh;
}
</style>