// import { createClient } from '@sanity/client'
// import { SitemapStream, streamToPromise } from 'sitemap'
// import { Sitemap_Q } from '~~/src/queries'
// import { Sitemap } from '~~/src/types'

// export default defineEventHandler(async event => {

// 	const client = createClient(useSanity().config)
// 	// fetch 
// 	const routes: Sitemap[] = await client.fetch(Sitemap_Q)
// 	const sitemap = new SitemapStream({ hostname: 'https://fireon.netlify.app' })
// 	routes.forEach(route => {
// 		sitemap.write({
// 			url: route.url,
// 			changefreq: route.changefreq,
// 			priority: route.priority,
// 			lastmod: route.lastmod,
// 		})
// 	})
// 	sitemap.end()

// 	setHeader(event, 'content-type', 'application/xml')
// 	return streamToPromise(sitemap)
// })