var gulp = require('gulp');

var connect = require('gulp-connect-php');
var browserSync = require('browser-sync').create();

var stylus = require('gulp-stylus');
var rupture = require('rupture');

var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var lost = require('lost');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('stylus', function () {
  return gulp.src('css/app.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({ use: [ rupture() ] }))
    .pipe(postcss([
      lost(),
      autoprefixer()
    ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('javascript', function() {
  gulp.src('js/components/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'));

  gulp.src('js/vendor/*.js')
    .pipe(uglify())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('serve', ['stylus', 'javascript'], function() {

  connect.server({}, function() {
    browserSync.init({
      proxy: "127.0.0.1:8000",
      open: false
    });
  });

  gulp.watch("css/**/*.styl", ['stylus']).on('change', browserSync.reload);
  gulp.watch("js/**/*.js").on('change', browserSync.reload);
  gulp.watch("*.php").on('change', browserSync.reload);
});

gulp.task('default', ['stylus', 'javascript']);
