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

const linksRef = ref<HTMLElement | null>(null)
onClickOutside(linksRef, () => menuValue.value = false)

useHead({
  bodyAttrs: {
    class: computed(() => {
			// lock scroll 
			return menuValue.value ? 'scroll-lock' : "scroll-unlock"
		}),
  },
})

</script>

<template>
	<header>
		<AppLogo id="logo"/>
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

<style lang="scss">
header {
	width: 100%;
	height: 80px;
	box-shadow: 0px 5px 15px -10px rgba(80, 86, 89, 1);
	padding: 0 10%;

	display: flex;
	justify-content: space-between;
	align-items: center;

	// #logo{
	// 	z-index: 5;
	// }
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
			z-index: 4;
			position: fixed;
			overflow: auto;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: $white;
			&.show {
				display: flex;
				@at-root {
					.page{
						overflow: hidden;
					}
				}
			}
			align-items: center;

			ul{
				display: flex;
				flex-direction: column;
				padding: 0 10%;
				.link a {
					padding: 0;
					font-size: 1.5rem;
					line-height: 1.5rem;
				}
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