const path = require('path')

module.exports = {

	output: {
		path: path.resolve(__dirname, 'dist/js'),
		publicPath: '/',
		filename: '[name]-[file]-[query]-[fragment]-[base]-[path].js',
		//chunkFilename: '[name]1.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	// externals: {
	// 	jquery: 'jQuery'
	// },
	// devtool: 'source-map'
}
