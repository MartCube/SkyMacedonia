<script setup lang="ts">
import { ServiceQuery } from "~~/src/queries"
import type { Service } from "~~/src/types"

// fetch data
const { params } = useRoute()
const { data, pending } = await useSanityQuery<Service>(
	ServiceQuery, { uid: params.product }
)

if (!data.value) throw createError({
	statusCode: 404,
	statusMessage: `Page - ${params.product} Not Found`,
	fatal: true
})
</script>

<template>
	<div>
		<template v-if="data && !pending">
			<h1 class="name">{{ data.name }}</h1>
		</template>
	</div>
</template>
