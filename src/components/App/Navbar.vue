<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import type { Link } from '~/types'

const [menuValue, menuToggle] = useToggle()

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
</script>

<template>
	<header>
		<Logo />
		<nav class="links">
			<ul>
				<li class="link" v-for="link in links">
					<NuxtLink :to="link.value">
						{{ link.label }}
					</NuxtLink>
				</li>
			</ul>
		</nav>
		<div class="menu">
			<Icon name="Menu" size="24px" />
		</div>
	</header>
</template>

<style lang="scss" >
header {
	width: 100%;
	height: 80px;
	box-shadow: 0px 5px 15px -10px rgba(80, 86, 89, 1);
	padding: 0 10%;

	display: flex;
	justify-content: space-between;
	align-items: center;

	.links ul {
		list-style: none;

		display: flex;
		gap: 50px;

		.link a {
			text-transform: capitalize;
			color: $primary;
			font-size: 1.25rem;
			font-weight: 700;
		}

	}

	.menu {
		display: none;
	}
}
</style>