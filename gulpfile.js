'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
const posthtml = require('gulp-posthtml');
const include = require('posthtml-include');
const del = require('del');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('css', function() {
  return gulp
    .src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});

gulp.task('server', function() {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series('css'));
  gulp.watch('source/img/icon-*.svg', gulp.series('sprite', 'html', 'refresh'));
  gulp.watch('source/*.html', gulp.series('html', 'refresh'));
  gulp.watch('source/js/*.js', gulp.series('js', 'refresh'));
});

gulp.task('refresh', function(done) {
  server.reload();
  done();
});

gulp.task('images', function() {
  return gulp
    .src('source/img/**/*.{png,jpg,svg}')
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.svgo()
      ])
    )

    .pipe(gulp.dest('source/img'));
});

gulp.task('webp', function() {
  return gulp
    .src('source/img/**/*.{png,jpg}')
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest('source/img'));
});

gulp.task('sprite', function() {
  return gulp
    .src('source/img/sprite/*.svg')
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'));
});

gulp.task('html', function() {
  return gulp
    .src('source/*.html')
    .pipe(posthtml([include()]))
    .pipe(gulp.dest('build'));
});

gulp.task('copy', function() {
  return gulp
    .src(['source/fonts/**/*.{woff,woff2}', 'source/img/**', 'source//*.ico'], {
      base: 'source'
    })
    .pipe(gulp.dest('build'));
});

gulp.task('js', function() {
  return gulp
    .src('source/js/*.js')
    .pipe(plumber())
    .pipe(concat('script.js'))
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(gulp.dest('build/js'))
    .pipe(uglify())
    .pipe(rename("script.min.js"))

    .pipe(gulp.dest('build/js'));
});

gulp.task('js-vendor', () => {
  return gulp
    .src(['source/js/vendor/jquery.min.js', 'source/js/vendor/*.js'])
    .pipe(plumber())
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('clean', function() {
  return del('build');
});

gulp.task(
  'build',
  gulp.series('clean', 'copy', 'js', 'js-vendor', 'css', 'sprite', 'html')
);
gulp.task('start', gulp.series('build', 'server'));
