<script setup lang="ts">
import { AppQuery } from "~~/src/queries"
import type { App, Link } from "~~/src/types"


const links: Link[] = [
	{
		value: "/",
		label: "Home",
	},
	{
		value: "/paragliding/",
		label: "Tandems & Tours",
	},
	{
		value: "/contact/",
		label: "Contact",
	},
]

// fetch data
const { data, pending } = await useSanityQuery<App>(AppQuery)
</script>

<template>
	<footer>
		<template v-if="data && !pending">
			<AppLogo />
			<nav class="contacts">
				<h3>Contacts</h3>
				<ul>
					<li class="link" v-for="contact in data.contacts">
						<NuxtLink :to="contact.link" target="_blank">
							<Icon :name="contact.icon" size="20px"/>
							{{ contact.value }}
						</NuxtLink>
					</li>
				</ul>
			</nav>
			<nav class="smedias">
				<h3>Social Medias</h3>
				<ul>
					<li class="link" v-for="media in data.smedias">
						<NuxtLink :to="media.link" target="_blank">
							<Icon :name="media.icon" size="20px"/>
							{{ media.name }}
						</NuxtLink>
					</li>
				</ul>
			</nav>
			<nav class="links" >
				<h3>Sitemap</h3>
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
	height: 100%;
	background: $secondary;
	padding: 4rem 10%;
	margin-top: 4rem;

	display: flex;
	justify-content: space-between;
	gap: 4rem;

	.logo {
		height: 6rem;

		path {
			fill: $white;

			&.secondary {
				fill: $white;
			}
		}
	}

	.contacts,
	.smedias,
	.links{
		display: flex;
		flex-direction: column;
		h3{
			color: $white;
			font-size: 1.5rem;
			line-height: 1.5rem;
			letter-spacing: 0.1rem;
			font-weight: 700;
			margin-bottom: 3rem;
		}
		ul{
			list-style: none;
			display: flex;
			flex-direction: column;
			gap: 2rem;

			.link a {
				color: $white;
				font-size: 1.25rem;
				line-height: 1.25rem;
				font-weight: 400;
				.icon{
					margin-right: 1rem;
				}
				transition: opacity 0.25s ease;
				&:hover{
					opacity: 0.75;
				}
			}
		}
	}

	@media (max-width: 1300px) {
		.logo{
			height: 4rem;
		}
		.contacts,
		.smedias,
		.links{
			h3{
				font-size: 1.25rem;
				line-height: 1.25rem;
			}
			ul .link a{
				font-size: 1rem;
				line-height: 1rem;
				.icon{
					width: 1rem;
					height: 1rem;
				}
			}
		}
	}

	@media (max-width: 1100px) {
		flex-direction: column;
		.logo{
			height: 6rem;
		}
	}
}
</style>