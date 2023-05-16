const { src, dest } = require('gulp');
const pugGulp = require('gulp-pug');
const bs = require('browser-sync');

module.exports = function pug() {
    return src('src/pug/*.pug')
    .pipe(pugGulp({pretty: true}))
    .pipe(dest('build'))
    .pipe(bs.stream())
}
