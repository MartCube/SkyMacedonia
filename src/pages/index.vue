<script setup lang="ts">
import { PageQuery } from "~~/src/queries"
import type { Page } from "~~/src/types"

// fetch data
const { fetch } = useSanity()
const { data, pending } = await useAsyncData(
	`page home`,
	() => fetch<Page>(PageQuery, { uid: 'home' }))

// handle error
if (!data.value) throw createError({
	statusCode: 404,
	statusMessage: `Home Page Not Found`,
	fatal: true,
})

useMetaTags(data.value.metaTags)
</script>

<template>
	<div class="page">
		<template v-if="data && !pending">
			<AppContent :content="data.content" />
		</template>
	</div>
</template>
