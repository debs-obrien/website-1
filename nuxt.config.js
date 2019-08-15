module.exports = {
	head: {
		title: 'Vue Vixens - Workshops for Foxy People to Learn Vue.js',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'Vue Vixens - Workshops for Foxy People to Learn Vue.js',
			},
			{ name: 'msapplication-TileColor', content: '#2b5797' },
			{ name: 'msapplication-config', content: '/icons/browserconfig.xml' },
			{ name: 'theme-color', content: '#fff' },
		],
		link: [
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/icons/apple-touch-icon.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/icons/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/icons/favicon-16x16.png',
			},
			{ rel: 'icon', type: 'manifest', href: '/icons/site.webmanifest' },
			{
				rel: 'mask-icon',
				href: '/icons/safari-pinned-tab.svg',
				color: '#5bbad5',
			},
			{ rel: 'shortcut icon', href: '/icons/favicon.ico' },
			{ rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Lato',
			},
			{
				rel: 'stylesheet',
				href: 'https://use.fontawesome.com/releases/v5.0.10/css/all.css',
				integrity: 'sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg',
				crossorigin: 'anonymous',
			},
		],
	},
	generate: {
		// hardcoded temp fix so that dynamic pages for events are generated
		routes: [
			'/events/componentsconf2019',
			'/events/vue-vixens-web-zuerich',
			'/events/vue-london-2019',
			'/events/ato-2019',
			'/events/connect-tech-2019',
			'/events/scriptcon19',
			'/events/vue-toronto-2019'
		]
		// This should be dynamic - get slugs from storyblok and map over the response
		// and for each slug return an /events/ plus slug

		// routes: function () {
		// 	return axios.get('https://storyblok/story.slug')
		// 		.then((res) => {
		// 			return res.data.map((slug) => {
		// 				return '/events/' + slug
		// 			})
		// 		})
		// }
	},
	plugins: ['~/plugins/vuetify', '~/plugins/eventBus.js', '~/plugins/i18n.js', '~/plugins/vue-moment.js'],
	css: ['~/assets/css/app.styl', '~/assets/css/main.scss', 'flag-icon-css/css/flag-icon.min.css'],
	modules: [
		[
			'@nuxtjs/google-analytics',
			{
				id: 'UA-65309624-3',
			},
		],
		['storyblok-nuxt', { accessToken: 'plc0fBh2no8owEeTALSN2wtt', cacheProvider: 'memory' }],
		'@nuxtjs/axios',
		'@nuxtjs/proxy',
		'@bazzite/nuxt-netlify',
	],
	netlify: {},
	loading: { color: '#3B8070' },
	build: {
		vendor: ['vue-i18n'],
	},
	axios: {
		proxy: true,
	},
};
