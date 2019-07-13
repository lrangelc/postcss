module.exports = {
  plugins: [
    // require('autoprefixer')({
    //     grid:false
    // }),
    require('postcss-import')({
      plugins: [
        require("stylelint")({ /* your options */ })
      ]
    }),
    require('postcss-font-magician'),
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          grid: false,
          flexbox: false
        },
        customProperties: false,
        calc: false,
      }
    }),
    require('css-mqpacker'),
    require('cssnano')
  ]
}