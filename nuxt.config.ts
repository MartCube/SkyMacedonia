export default defineNuxtConfig({
	devtools: { enabled: true },
	srcDir: 'src',
	css: ["@/assets/css/app.scss"],
	typescript: {
		strict: true,
		typeCheck: false,
		shim: false
	},
	components: {
		"dirs": [
			{ "path": "~/components/App", "global": true, pathPrefix: false, },
			{ "path": "~/components/Icons", "global": true, pathPrefix: false, },
			{ "path": "~/components/Blocks", "global": true, pathPrefix: false, },
			{ "path": "~/components/ServicePage", "global": true, pathPrefix: false, },
		],
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {	link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]}
	},
	modules: [
		'@nuxtjs/sanity',
		'@pinia/nuxt',
		'nuxt-icon',
	],
	sanity: {
		projectId: 'byo8spf8',
		dataset: 'production',
		minimal: true,
		apiVersion: '2023-01-01',

	},
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ['/sitemap.xml']
		}
	},
	vite: {
		logLevel: 'info',
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/css/colors.scss";',
				},
			},
		},
	},
	experimental: {
    payloadExtraction: false,
  }
})
