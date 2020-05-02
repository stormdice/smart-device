const gulp = require('gulp');

const { src, dest, series, watch, parallel } = gulp;

const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const webp = require('gulp-webp');
const browserSync = require('browser-sync').create();
const del = require('del');
const webpack = require('webpack-stream');
const svgstore = require('gulp-svgstore');

const sprite = () =>
  src('src/img/sprite/*.svg')
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(dest('build/img'));

const styles = () =>
  src('src/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(dest('build/css'))
    .pipe(browserSync.stream());

const scripts = () =>
  src('src/js/*.js')
    .pipe(plumber())
    .pipe(
      webpack({
        mode: 'production',
        output: {
          filename: 'index.js',
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                },
              },
            },
          ],
        },
        externals: {
          jquery: 'jQuery',
        },
      })
    )
    .pipe(dest('build/js/'))
    .pipe(browserSync.stream());

const createWebp = () =>
  src('source/img/content/**/*.{png,jpg}')
    .pipe(webp({ quality: 90 }))
    .pipe(dest('build/img/content'));

const updateHtml = () =>
  src('src/*.html', {
    base: 'src',
  }).pipe(dest('build'));

const copyAssets = () =>
  src(
    ['src/*.html', 'src/img/**', 'src/fonts/**/*.{woff,woff2}', 'src//*.ico'],
    {
      base: 'src',
    }
  ).pipe(dest('build'));

const clean = () => del('build');

const reload = (done) => {
  browserSync.reload();
  done();
};

const browserSyncServer = () => {
  browserSync.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  watch('src/*.html', series(updateHtml, reload));
  watch('src/sass/**/*.{scss,sass}', styles);
  watch('src/img/sprite/*.svg', series(sprite, reload));
  watch('src/js/**', scripts);
};

const build = series(clean, parallel(copyAssets, sprite, styles, scripts));
const start = series(build, browserSyncServer);

exports.createWebp = createWebp;
exports.build = build;
exports.start = start;
