// 导入模块
let gulp = require('gulp'),
    babel = require('gulp-babel'),
    cssnano = require('gulp-cssnano'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin');

// 发布任务将es6转为es5
gulp.task('babel', () => {
    gulp.src('./src/js/es6/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./src/js/es5'));
})
// 发布任务将es5压缩并改名为.min.js
gulp.task('uglify', () => {
    gulp.src('./src/js/es5/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/js'))
})

// 发布任务将scss文件转为css
gulp.task('sass', () => {
    gulp.src('./src/sass/*.scss')
        .pipe(sass({ outputStyle: "expanded" }))
        // .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css'))
})

// 发布任务将img压缩
gulp.task('img', () => {
    gulp.src('./src/img/*.*')
        .pipe(imagemin())
        .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/img'))
})

// 发布任务将register img压缩
gulp.task('register_img', () => {
    gulp.src('./src/img/register/img/*.*')
        .pipe(imagemin())
        .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/img/register/img'))
})

// 发布任务将particulars img压缩
gulp.task('particulars_img', () => {
    gulp.src('./src/img/particulars/img/*.*')
        .pipe(imagemin())
        .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/img/particulars/img'))
})

// 发布任务将cart img压缩
gulp.task('cart_img', () => {
    gulp.src('./src/img/cart/img/*.*')
        .pipe(imagemin())
        .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/img/cart/img'))
})

// 发布任务添加监听
gulp.task('default', () => { 
    // es6转es5
    // gulp.watch('./src/js/es6/*.js',['babel']);
    // es5压缩
    // gulp.watch('./src/js/es5/*.js',['uglify']);
    // css压缩
    gulp.watch('./src/sass/*.scss', [sass]);
    // gulp.watch('./src/img/*.*',['img']);
})
