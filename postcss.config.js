module.exports = {
    plugins: [
        // require('autoprefixer')({
        //     grid:false
        // }),
        require("postcss-import"),
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