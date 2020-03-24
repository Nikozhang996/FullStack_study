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

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: DIST_DIR
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean assets
function clean() {
  return del(DIST_FILE);
}

// Optimize Images
function images() {
  return gulp
    .src(PATH_MAP.img.src)
    .pipe(newer(PATH_MAP.img.dist))
    .pipe(
      imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 80, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true
            }
          ]
        })
      ])
    )
    .pipe(gulp.dest(PATH_MAP.img.dist));
}

// CSS task
function css() {
  return gulp
    .src(PATH_MAP.css.src)
    .pipe(plumber())
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(gulp.dest(PATH_MAP.css.dist))
    .pipe(rename({suffix: ".min"}))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest(PATH_MAP.css.dist))
    .pipe(browsersync.stream());
}

// Lint scripts
function scriptsLint() {
  return gulp
    .src([PATH_MAP.js.src])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp
      .src(PATH_MAP.js.src)
      .pipe(plumber())
      // .pipe(webpackstream(webpackconfig, webpack))
      // folder only, filename is specified in webpack config
      .pipe(gulp.dest(PATH_MAP.js.dist))
      .pipe(browsersync.stream())
  );
}

// Jekyll
function jekyll() {
  return cp.spawn("bundle", ["exec", "jekyll", "build"], {stdio: "inherit"});
}

// Watch files
function watchFiles() {
  gulp.watch(PATH_MAP.css.src, css);
  gulp.watch(PATH_MAP.js.src, gulp.series(scriptsLint, scripts));
  gulp.watch(
    [
    //   "./_includes/**/*",
    //   "./_layouts/**/*",
    //   "./_pages/**/*",
    //   "./_posts/**/*",
    //   "./_projects/**/*"
      DIST_FILE
    ],
    // gulp.series(jekyll, browserSyncReload)
    browserSyncReload
  );
  gulp.watch(PATH_MAP.img.src, images);
}

// define complex tasks
const js = gulp.series(scriptsLint, scripts);
// const build = gulp.series(clean, gulp.parallel(css, images, jekyll, js));
const build = gulp.series(clean, gulp.parallel(css, images, js));
const watch = gulp.parallel(watchFiles, browserSync);
// export tasks
exports.images = images;
exports.css = css;
exports.js = js;
exports.script = scripts;
exports.jekyll = jekyll;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;
