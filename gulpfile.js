const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.fonts = tasks.fonts;
exports.style = tasks.style;
exports.dev_js = tasks.dev_js;
exports.php = tasks.php;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.ttf = tasks.ttf;
exports.ttf2 = tasks.ttf2;
exports.bs_html = tasks.bs_html;
exports.bs_php = tasks.bs_php;
exports.watch = tasks.watch;
exports.deploy = tasks.deploy;
exports.pug = tasks.pug;
exports.copy = tasks.copy;

exports.default = gulp.parallel(
  exports.ttf,
  exports.ttf2,
  exports.fonts,
  exports.style,
  exports.dev_js,
  exports.rastr,
  exports.webp,
  exports.pug,
  exports.bs_html,
  exports.watch,
  exports.copy
)
exports.dev_php = gulp.parallel(
  exports.ttf,
  exports.ttf2,
  exports.fonts,
  exports.style,
  exports.dev_js,
  exports.pug,
  exports.rastr,
  exports.webp,
  exports.php,
  exports.bs_php,
  exports.watch,
  exports.copy
)