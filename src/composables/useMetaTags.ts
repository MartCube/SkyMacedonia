import type { MetaTags } from "~~/src/types"
import imageUrlBuilder from '@sanity/image-url'

export default (data: MetaTags) => {
	
	const { fullPath } = useRoute()
	const domain = "https://skymacedonia.com"
	const url = domain + fullPath

	const builder = imageUrlBuilder({ projectId: useSanity().config.projectId, dataset: "production" })
	const ogImage = builder.image(data.image).auto('format').url()
	const twitterImage = builder.image(data.image)
		.auto('format')
		.width(600)
		.height(600)
		.fit('crop')
		.url()
	
	useHead({
		title: data.title,
		htmlAttrs: { lang: 'en' },
		meta: [
			{ "charset": "utf-8" },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: "author", content: "Mart Cube" },
			{ name: 'title', content: data.title },
			{ name: 'description', content: data.description },
			// { name: 'robots', content: 'all' },
			// og
			{ property: 'og:type', content: 'website', },
			{ property: 'og:title', content: data.title, },
			{ property: 'og:description', content: data.description, },
			{ property: 'og:image', content: ogImage, },
			{ property: 'og:image:alt', content: data.title, },
			{ property: 'og:url', content: url, },
			// twitter
			{ name: "twitter:title", content: data.title },
			{ name: "twitter:description", content: data.description },
			{ name: "twitter:image", content: twitterImage },
			{ name: "twitter:image:alt", content: data.title },
			{ property: 'twitter:url', content: url, },
		],
	})

	useSeoMeta({
		twitterCard: 'summary'
	})
}