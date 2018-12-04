var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var wait = require('gulp-wait');


var connect = require("gulp-connect");
var uglify = require('gulp-uglify');
var pump = require('pump');

var del = require('del');
var watch = require('gulp-watch');

// Load all gulp plugins automatically
// and attach them to the `plugins` object
var plugins = require('gulp-load-plugins')();


// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
      .pipe(wait(100))
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer(['last 6 versions']))
      .pipe(gulp.dest('css'))
      .pipe(connect.reload());
});

// added ['sass'] so that sass fires at the beggining of watch in case
// that changes were made while gulp watch was turned off
gulp.task('watch', ['sass'], function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
