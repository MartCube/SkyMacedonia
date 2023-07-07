<script setup lang="ts">
import { useToggle, onClickOutside } from '@vueuse/core'
import type { Link } from '~/types'

const [menuValue, menuToggle] = useToggle()

const links: Link[] = [
	{
		value: "/",
		label: "home",
	},
	{
		value: "/paragliding/",
		label: "tandems & tours",
	},
	{
		value: "/contact/",
		label: "contact",
	},
]

const linksRef = ref()
onClickOutside(linksRef, (event) => menuValue.value = false)
</script>

<template>
	<header>
		<AppLogo />
		<nav class="links" :class="{ show: menuValue }">
			<ul ref="linksRef"> 
				<li class="link" v-for="link in links" @click="menuValue = false" >
					<NuxtLink :to="link.value">
						{{ link.label }}
					</NuxtLink>
				</li>
			</ul>
		</nav>
		<div class="menu" @click="menuToggle()">
			<Icon name="Menu" size="32px" />
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

		.link{
			height: 80px;
			display: flex;
			align-items: center;

			a {
				padding: 2rem;
				text-transform: capitalize;
				color: $text;
				font-size: 1.25rem;
				letter-spacing: 0.1rem;
				font-weight: 700;
				transition: color 0.35s ease;
				&:hover{
					color: $secondary;
				}
				&.router-link-active{
					color: $secondary;

				}
			}
		} 
	}

	.menu {
		display: none;
		border: none;
		background: none;
	}

	@media (max-width: 1100px) {
		.links{
			display: none;
			z-index: 5;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: $white;

			&.show {
				display: flex;
			}
			justify-content: center;
			align-items: center;

			ul{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		}
		.menu{
			display: initial;

			&:hover {
				cursor: pointer;
			}
		}
	}
	@media (max-width: 1100px) {
		.links{
			display: none;
		}
		.menu{
			display: initial;

			&:hover {
				cursor: pointer;
			}
		}
	}
}


</style>