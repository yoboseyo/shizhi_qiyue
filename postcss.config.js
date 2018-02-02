module.exports = {
    "plugins": [
      'postcss-flexbugs-fixes',
      {
        'autoprefixer' : {
          browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9', // React doesn't support IE8 anyway
          ],
          flexbox: 'no-2009',
        }
      },
      'postcss-aspect-ratio-mini',
      {
        'postcss-write-svg':
          {utf8: false}
      },
      'postcss-cssnext',
      {
        'postcss-px-to-viewport':
          {
            viewportWidth: 640,
            viewportHeight: 1136,
            unitPrecision: 3,
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore', '.hairlines'],
            minPixelValue: 1,
            mediaQuery: false
          }
      },
      'postcss-viewport-units',
      {
        'cssnano':
          {
            preset: "advanced",
            autoprefixer: false,
            "postcss-zindex": false
          }
      }
        require('postcss-flexbugs-fixes'),
        require("autoprefixer")({
            browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
        }),
        require("postcss-aspect-ratio-mini"),
        require("postcss-write-svg")({ utf8: false }),
        require("postcss-cssnext"),
        require("postcss-px-to-viewport")({
            viewportWidth: 640,
            viewportHeight: 1136,
            unitPrecision: 3,
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore', '.hairlines'],
            minPixelValue: 1,
            mediaQuery: false
        }),
        require("postcss-viewport-units"),
        require("cssnano")({
            preset: "advanced",
            autoprefixer: false,
            "postcss-zindex": false
        })

    ]
}
