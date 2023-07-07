
import { createClient } from '@sanity/client'
import { SitemapStream, streamToPromise } from 'sitemap'
import { SitemapQuery } from '~~/src/queries'
import { Sitemap } from '~~/src/types'

export default defineEventHandler(async event => {

	const client = createClient(useSanity().config)
	// fetch 
	const routes: Sitemap[] = await client.fetch(SitemapQuery)
	const sitemap = new SitemapStream({ hostname: 'https://skymacedonia.netlify.app' })
	routes.forEach(route => {
		sitemap.write({
			url: route.url,
			changefreq: route.changefreq,
			priority: route.priority,
			lastmod: route.lastmod,
		})
	})
	sitemap.end()

	setHeader(event, 'content-type', 'application/xml')
	return streamToPromise(sitemap)
})