module.exports = {
    plugins: [
        // require('autoprefixer')({
        //     grid:false
        // }),
        require('postcss-cssnext')({
			features: {
				autoprefixer: {
					grid: false
				}
			}
		})
    ]
}