<script setup lang="ts">
import { AppQuery } from "~~/src/queries"
import type { App } from "~~/src/types"
import type { Link } from '~/types'


const links: Link[] = [
	{
		value: "/",
		label: "home",
	},
	{
		value: "/",
		label: "tandems",
	},
	{
		value: "/",
		label: "tours",
	},
	{
		value: "/contact",
		label: "contact",
	},
]

// fetch data
const { data, pending } = await useSanityQuery<App>(AppQuery)
</script>

<template>
	<footer>
		<template v-if="data && !pending">
			<Logo />
			<nav class="contacts">
				<ul>
					<li class="link" v-for="contact in data.contacts">
						<NuxtLink :to="contact.link">
							<!-- <Icon :name="contact.icon" /> -->
							{{ contact.value }}
						</NuxtLink>
					</li>
				</ul>
			</nav>
			<nav class="smedias">
				<ul>
					<li class="link" v-for="media in data.smedias">
						<NuxtLink :to="media.link">
							<!-- <Icon :name="media.icon" /> -->
							{{ media.name }}
						</NuxtLink>
					</li>
				</ul>
			</nav>
			<nav class="links">
				<ul>
					<li class="link" v-for="link in links">
						<NuxtLink :to="link.value">
							{{ link.label }}
						</NuxtLink>
					</li>
				</ul>
			</nav>
		</template>
	</footer>
</template>

<style lang="scss" >
footer {
	width: 100%;
	height: 320px;
	background: $secondary;
	padding: 64px 10%;

	display: flex;
	justify-content: space-between;
	gap: 4rem;

	.logo {
		height: 100px;

		path {
			fill: $white;

			&.secondary {
				fill: $white;
			}
		}
	}

	.contacts ul,
	.smedias ul,
	.links ul {
		list-style: none;

		display: flex;
		flex-direction: column;
		gap: 20px;
	}


}
</style>