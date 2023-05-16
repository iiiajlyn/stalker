const {
  watch,
  parallel,
  series
} = require('gulp');

module.exports = function watching() {
  watch('src/**/*.woff2', parallel('copy'));
  watch('src/**/*.pug', parallel('pug'));
  watch('src/**/*.php', parallel('php'));
  watch('src/**/*.scss', parallel('style'));
  watch('src/**/*.js', parallel('dev_js'));
  watch('src/img/**/*.+(svg|ico)', parallel('rastr'));
  watch('src/img/**/*.+(png|jpg|jpeg|gif)', series('rastr', 'webp'));
  watch('src/fonts/**/*.ttf', series('ttf', 'ttf2', 'fonts'));
}