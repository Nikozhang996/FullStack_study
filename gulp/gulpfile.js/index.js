/*
 * https://blog.csdn.net/qq_15096707/article/details/54293203
 * https://www.jianshu.com/p/cc1cb9a5650c
 * https://blog.csdn.net/qq_15096707/article/details/53582319
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
    src: SRC_DIR + 'css/**/*.css',           // CSS目录：./src/css/
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

/**
 * HTML处理
 */
gulp.task('html', function () {
  gulp.src(config.html.src)
    .pipe(gulp.dest(config.html.dist));
});

/**
 * assets文件夹下的所有文件处理
 */
gulp.task('assets', function () {
  gulp.src(config.assets.src)
    .pipe(gulp.dest(config.assets.dist));
});

/**
 * CSS样式处理
 */
gulp.task('css', function () {
  gulp.src(config.css.src)
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(config.css.dist))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano()) //执行压缩
    .pipe(gulp.dest(config.css.dist))
    .pipe(notify({message: 'css task complete'}));
});
/**
 * 监听CSS文件的变化，变化后将执行CSS任务
 */
gulp.task('css-watch', function () {
  gulp.watch(config.css.src, ['css']);
});

/**
 * SCSS样式处理
 */
gulp.task('sass', function () {
  return gulp.src(config.sass.src)
    .pipe(autoprefixer('last 2 version'))
    .pipe(sass())
    .pipe(gulp.dest(config.sass.dist))
    .pipe(rename({suffix: '.min'})) //rename压缩后的文件名
    .pipe(cssnano()) //执行压缩
    .pipe(gulp.dest(config.sass.dist))
    .pipe(notify({message: 'sass task complete'}));
});
/**
 * 监听SASS文件的变化，变化后将执行SASS任务
 */
gulp.task('sass-watch', function () {
  gulp.watch(config.sass.src, ['sass']);
});

/**
 * js处理
 */
gulp.task('js', function () {
  gulp.src(config.js.src)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest(config.js.dist))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dist))
    .pipe(notify({message: 'js task complete'}));
});
/**
 * 合并所有js文件并做压缩处理
 */
gulp.task('js-concat', function () {
  gulp.src(config.js.src)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat(config.js.build_name))
    .pipe(gulp.dest(config.js.dist))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dist))
    .pipe(notify({message: 'js-concat task complete'}));
});

/**
 * 图片处理
 */
gulp.task('images', function () {
  return gulp.src(config.img.src)
    .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
    .pipe(gulp.dest(config.img.dist))
    /*.pipe(notify({ message: 'images task complete' }))*/;
});

/**
 * 清空图片、样式、js
 */
gulp.task('clean', function () {
  return del([config.html.dist, config.css.dist, config.js.dist, config.img.dist]);
});
gulp.task('clean-all', function () {
  return del([config.html.dist, config.assets, config.css.dist, config.js.dist, config.img.dist]);
});

/**
 * 默认任务 清空图片、样式、js并重建 运行语句 gulp
 */
gulp.task('default', function () {
  // gulp.start('html', 'assets', 'css', 'images', 'js');
  console.log(process);
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

/*

//编译Sass
gulp.task("ruby-sass", function() {
  return sass("src/styles/main.scss", { style: "expanded" })
    .pipe(autoprefixer("last 2 version"))
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(notify({ message: "编译Sass完成" }));
});

//压缩CSS
gulp.task("cssnano", function() {
  return sass("src/styles/style.css", { style: "expanded" })
    .pipe(autoprefixer("last 2 version"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(cssnano())
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(notify({ message: "压缩CSS完成" }));
});

//编译和压缩Sass
gulp.task("styles", function() {
  return sass("src/styles/main.scss", { style: "expanded" })
    .pipe(autoprefixer("last 2 version"))
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(cssnano())
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(notify({ message: "编译和压缩Sass完成" }));
});

//JavaScript代码规范
gulp.task("jshint", function() {
  return gulp
    .src("src/scripts/!**!/!*.js")
    .pipe(jshint(".jshintrc"))
    .pipe(jshint.reporter("default"))
    .pipe(notify({ message: "JS代码规范完成" }));
});

//JavaScript合并
gulp.task("js-concat", function() {
  return gulp
    .src(["src/scripts/1.js", "src/scripts/2.js"])
    .pipe(concat("main.js"))
    .pipe(gulp.dest("dist/assets/js"))
    .pipe(notify({ message: "合并JavaScript完成" }));
});

//压缩JavaScript
gulp.task("js-uglify", function() {
  return gulp
    .src("src/scripts/main.js")
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify())
    .pipe(gulp.dest("dist/assets/js"))
    .pipe(notify({ message: "压缩JavaScript完成" }));
});

//代码规范+合并+压缩JavaScript
gulp.task("scripts", function() {
  return gulp
    .src("src/scripts/!**!/!*.js")
    .pipe(jshint(".jshintrc"))
    .pipe(jshint.reporter("default"))
    .pipe(concat("main.js"))
    .pipe(gulp.dest("dist/assets/js"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify())
    .pipe(gulp.dest("dist/assets/js"))
    .pipe(notify({ message: "Scripts任务完成" }));
});

//压缩图片
gulp.task("images", function() {
  return gulp
    .src("src/images/!**!/!*")
    .pipe(
      imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })
    )
    .pipe(gulp.dest("dist/assets/img"))
    .pipe(notify({ message: "Images任务完成" }));
});

//监测任务
gulp.task("watch", function() {
  // Watch .scss files
  gulp.watch("src/styles/!**!/!*.scss", ["styles"]);

  // Watch .js files
  gulp.watch("src/scripts/!**!/!*.js", ["scripts"]);

  // Watch image files
  gulp.watch("src/images/!**!/!*", ["images"]);
});

//压缩HTML
gulp.task("htmlmin", function() {
  var optionsSet = {
    removeComments: true, // 清除HTML注释
    collapseWhitespace: true, // 压缩HTML
    collapseBooleanAttributes: true, // 省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: false, // 删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: false, // 删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: false, // 删除<style>和<link>的type="text/css"
    minifyJS: true, // 压缩页面JS
    minifyCSS: true // 压缩页面CSS
  };

  return gulp
    .src([config.dev.html, "!*.tpl"], { base: config.rootDev })
    .pipe(plumber(onError))
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .pipe(gulpif(options.env === "production", htmlmin(optionsSet)))
    .pipe(gulp.dest(config.build.html))
    .pipe(reload({ stream: true }));
});
*/

module.exports = gulp;
