module.exports = {
    plugins: [
        // require('autoprefixer')({
        //     grid:false
        // }),
        require('postcss-cssnext')({
			features: {
				autoprefixer: {
                    grid: false,
                    flexbox: false
                },           
            customProperties: false,
            calc: false,
            }
		})
    ]
}