<script setup lang="ts">
import { ServiceQuery } from "~~/src/queries"
import type { Service } from "~~/src/types"

// fetch data
const { params } = useRoute()
const { fetch } = useSanity()
const { data, pending } = await useAsyncData(
	`service ${params.service}`,
	() => fetch<Service>(ServiceQuery, { uid: params.service }))

// handle error
if (!data.value) throw createError({
	statusCode: 404,
	statusMessage: `${params.service} Not Found`,
	fatal: true
})

useMetaTags(data.value.metaTags)
</script>

<template>
	<div>
		<template v-if="data && !pending">
			<Intro 
				:image="data.image" 
				:video="'test'"/>
			<h1 class="title">
				{{ data.title }}
			</h1>
			<ServiceContent :data="data.description" />
			<ServiceGallery :data="data.gallery"/>
			<ServiceAccommodation 
				v-if="data.accommodations" 
				:data="data.accommodations" />
		</template>
	</div>
</template>

<style lang="scss" >
h1{
	font-size: 2.5rem;
	line-height: 2.5rem;
	letter-spacing: 0.1rem;

	margin: 0 10%;
}
</style>
