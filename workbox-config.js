module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,ico,html,webp,js,txt,xml}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	runtimeCaching: [{
		urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
		handler: 'StaleWhileRevalidate'
	}]
};