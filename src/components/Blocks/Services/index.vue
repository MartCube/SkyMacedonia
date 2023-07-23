<script setup lang="ts">
import { ServiceCardsQuery } from "~~/src/queries"
import type { ServiceCard } from "~~/src/types"

// fetch data
const serviceType = ref('tandem')
const { fetch } = useSanity()
const { data, pending } = await useAsyncData<ServiceCard[]>(
	`service cards`,
	() => fetch(ServiceCardsQuery, { serviceType: serviceType.value }))

</script>

<template>
	<section class="services-block">
		<!-- <ServiceSwitcher/> -->
		<template v-if="data && !pending">
			<ul>
				<ServiceCard v-for="item in data" :data="item"/>
			</ul>
		</template>
	</section>
</template>

<style lang="scss" scoped>
.services-block{
	ul{
		display: flex;
		justify-content: space-between;
		li{
			list-style: none;
		}
	}
}

@media (max-width: 1300px) {
	.services-block{
		ul{
			justify-content: space-between;
			flex-wrap: wrap;
			li{
				margin-bottom: 4rem;
				&:last-child{
					margin: 0;
				}
			}
		}
	}
}

@media (max-width: 960px) {
	.services-block{
		ul{
			justify-content: center;
		}
	}
}
</style>