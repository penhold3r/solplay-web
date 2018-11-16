const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withFonts = require('next-fonts')
//
module.exports = withSass(
   withImages(
      withFonts({
         exportPathMap: () => ({
            '/': { page: '/' },
            '/es': { page: '/' },
            '/en': { page: '/' }
         })
      })
   )
)
