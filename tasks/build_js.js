const {
	src,
	dest
} = require('gulp'),
	uglify = require('gulp-uglify-es').default,
	concat = require('gulp-concat'),
	map = require('gulp-sourcemaps'),
	bs = require('browser-sync'),
	webpack = require('webpack'),
	webpackStream = require('webpack-stream'),
	babel = require('gulp-babel'),
	path = require("path"),
	rename = require("gulp-rename");

module.exports = function dev_js() {
	return src('src/js/*.js')
	.pipe(webpackStream({
		entry: {
			index:"./src/js/index.js",
			name:"./src/js/name.js"
		}
	}))
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest('build/js/'))
		.pipe(bs.stream())
}