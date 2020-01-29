/*
 * https://blog.csdn.net/qq_15096707/article/details/54293203
 * https://www.jianshu.com/p/cc1cb9a5650c
 * https://blog.csdn.net/qq_15096707/article/details/53582319
 * https://gist.github.com/jeromecoupe/0b807b0c1050647eb340360902c3203a
 */
const gulp = require("gulp"),
  sass = require("gulp-ruby-sass"), //Sass编译
  cssnano = require("gulp-cssnano"), //css压缩
  autoprefixer = require("gulp-autoprefixer"), //自动修复程序
  jshint = require("gulp-jshint"), //JS代码规范
  uglify = require("gulp-uglify"), //文件压缩
  imagemin = require("gulp-imagemin"), //图片压缩
  rename = require("gulp-rename"), //重命名
  htmlmin = require("gulp-htmlmin"), // 压缩html
  concat = require("gulp-concat"), //合并
  notify = require("gulp-notify"), //监测文件变化
  livereload = require("gulp-livereload"), //实时刷新（需游览器插件支持）
  del = require("del"); //清理文件

// path
const SRC_DIR = './src/';
const DIST_DIR = './dist/';
const DIST_FILE = DIST_DIR + '**';
// config
const config = {
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

//编译和压缩Sass
gulp.task("styles", function () {
  return sass(config.css.src, {style: "expanded"})
    .pipe(autoprefixer("last 2 version"))
    .pipe(gulp.dest(config.css.dist))
    .pipe(rename({suffix: ".min"}))
    .pipe(cssnano())
    .pipe(gulp.dest(config.css.dist))
    .pipe(notify({message: "编译和压缩Sass完成"}));
});

//代码规范+合并+压缩JavaScript
gulp.task("scripts", function () {
  return gulp
    .src(config.js.src)
    .pipe(jshint(".jshintrc"))
    .pipe(jshint.reporter("default"))
    // .pipe(concat("main.js"))
    // .pipe(gulp.dest(config.js.dist))
    .pipe(rename({suffix: ".min"}))
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dist))
    .pipe(notify({message: "Scripts任务完成"}));
});

//压缩图片
gulp.task("images", function () {
  return gulp
    .src(config.img.src)
    .pipe(
      imagemin({optimizationLevel: 3, progressive: true, interlaced: true})
    )
    .pipe(gulp.dest(config.img.dist))
    .pipe(notify({message: "Images任务完成"}));
});

//压缩HTML
gulp.task("htmlmin", function () {
  return gulp
    .src(config.html.src, {base: config.rootDev})
    .pipe(plumber(onError))
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .pipe(gulpif(options.env === "production", htmlmin({
      removeComments: true, // 清除HTML注释
      collapseWhitespace: true, // 压缩HTML
      collapseBooleanAttributes: true, // 省略布尔属性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: false, // 删除所有空格作属性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: false, // 删除<script>的type="text/javascript"
      removeStyleLinkTypeAttributes: false, // 删除<style>和<link>的type="text/css"
      minifyJS: true, // 压缩页面JS
      minifyCSS: true // 压缩页面CSS
    })))
    .pipe(gulp.dest(config.html.dist))
    .pipe(reload({stream: true}));
});

/**
 * 清空图片、样式、js
 */
gulp.task('clean', function () {
  // return del([config.html.dist, config.css.dist, config.js.dist, config.img.dist]);
  return del(DIST_FILE);
});
gulp.task('clean-all', function () {
  return del([config.html.dist, config.assets, config.css.dist, config.js.dist, config.img.dist]);
});

/**
 * 默认任务 清空图片、样式、js并重建 运行语句 gulp
 */
gulp.task('default', function () {
  // gulp.start('html', 'assets', 'css', 'images', 'js');
  gulp.src(config.html.src).on('data', function (data) {
    // todo
  });
});

/**
 * 监听任务
 */
gulp.task('watch', function () {
  // Watch .html files
  gulp.watch(config.html.src, ['html']);

  // Watch .css files
  gulp.watch(config.css.src, ['css']);

  // Watch .scss files
  gulp.watch(config.sass.src, ['sass']);

  // Watch assets files
  gulp.watch(config.assets.src, ['assets']);

  // Watch .js files
  gulp.watch(config.js.src, ['js']);

  // Watch image files
  gulp.watch(config.img.src, ['images']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch([DIST_FILE]).on('change', livereload.changed);
});

function a() {
  console.log('a');
}

function c() {
  console.log('c');
}

function b() {
  return 'this is vladimir';
}

exports.build = gulp.series(b,a, c);
