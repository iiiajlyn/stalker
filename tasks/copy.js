const {
	src,
	dest
} = require('gulp');
const bs = require('browser-sync');

module.exports = function copy() {
    return src('src/fonts/**/*.woff2')
    .pipe(dest('build/fonts/'))
    .pipe(bs.stream())
}