const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withFonts = require('next-fonts')
//
module.exports = withSass(
	withImages(
		withFonts({
			exportPathMap: () => ({
				'/': { page: '/', query: { lang: 'es' } },
				'/es': { page: '/', query: { lang: 'es' } },
				'/en': { page: '/', query: { lang: 'en' } },
				'/ru': { page: '/', query: { lang: 'ru' } }
			})
		})
	)
)
