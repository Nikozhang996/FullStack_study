/*
 * https://blog.csdn.net/qq_15096707/article/details/54293203
 * https://www.jianshu.com/p/cc1cb9a5650c
 * https://blog.csdn.net/qq_15096707/article/details/53582319
 * https://gist.github.com/jeromecoupe/0b807b0c1050647eb340360902c3203a
 */
const gulp = require("gulp");
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cp = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
const eslint = require("gulp-eslint");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");

// path
const SRC_DIR = './src/';
const DIST_DIR = './dist/';
const DIST_FILE = DIST_DIR + '**';
// config
const PATH_MAP = {
  html: {
    src: SRC_DIR + '*.html',
    dist: DIST_DIR
  },
  assets: {
    src: SRC_DIR + 'assets/**/*',            // assets目录：./src/assets
    dist: DIST_DIR + 'assets'                // assets文件build后存放的目录：./dist/assets
  },
  css: {
    src: SRC_DIR + 'css/**/*.scss',           // CSS目录：./src/css/
    dist: DIST_DIR + 'css'                   // CSS文件build后存放的目录：./dist/css
  },
  sass: {
    src: SRC_DIR + 'scss/**/*.scss',         // SCSS目录：./src/scss/
    dist: DIST_DIR + 'css'                   // SCSS文件生成CSS后存放的目录：./dist/css
  },
  js: {
    src: SRC_DIR + 'js/**/*.js',             // JS目录：./src/js/
    dist: DIST_DIR + 'js',                   // JS文件build后存放的目录：./dist/js
    build_name: 'build.js'                   // 合并后的js的文件名
  },
  img: {
    src: SRC_DIR + 'images/**/*',            // images目录：./src/images/
    dist: DIST_DIR + 'images'                // images文件build后存放的目录：./dist/images
  }
};

function watch() {
  const res = gulp.watch(PATH_MAP.html.src);
  res.on('change', function (path, stats) {
    console.log(path);
    console.log(stats);
  });
}

exports.watch = watch;
