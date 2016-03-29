var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

// plugins for sassing.
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sassdoc = require('sassdoc');

var del = require('del');

var Server = require('karma').Server;


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

// Sassing Watch task
gulp.task('sasswatch',function() {
    gulp.watch(sassinput,['sass']);
});

// Sassdocsing
var sassdocOptions = { dest: './docs/sassdoc'};

gulp.task('sassdoc', function () {
  return gulp
    .src(sassinput)
    .pipe(sassdoc(sassdocOptions))
    .resume();
});
// END Sassing WIP ------------------------------------------------------------------------------------------------


// Clean ----------------------------------------------------------------------------------------------------------
gulp.task("clean", function (cb) {
    console.log("// Gulp: Del Sassed Files");
    return del(["src/styles/css/**"]);
});

// Testing ----------------------------------------------------------------------------------------------------
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true //set to false to debug tests
    }, function (exitCode) {
        done();
    }).start();
    
});