var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');



// plugins for sassing.
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sassdoc = require('sassdoc');




// Sassing WIP ----------------------------------------------------------------------------------------------------
var sassinput = './src/styles/*.scss';
var sassoutput = './src/styles/css';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function () {
  return gulp
    .src(sassinput)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    //.pipe(sourcemaps.write('/maps')) // we probably dont want to be doing both, this is just an illustration.
    .pipe(gulp.dest(sassoutput));
});

