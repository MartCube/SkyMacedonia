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
			{ "path": "~/components/App", "global": true },
		],
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			title: 'Sky Macedonia',
			link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
		}
	},
	modules: [
		'@nuxtjs/sanity',
		'@pinia/nuxt',
	],
	sanity: {
		projectId: 'byo8spf8',
		dataset: 'production',
		minimal: true,
		apiVersion: '2023-01-01',
		// token: process.env.SANITY_TOKEN,
		// useCdn: false,
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
	}
})