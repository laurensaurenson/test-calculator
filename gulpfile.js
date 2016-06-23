var gulp = require('gulp'); 
var jshint = require('gulp-jshint'); 
var watch = require('gulp-watch'); 

// default runs lint then watch
gulp.task('default', ['lint', 'watch']); 

// task named watch
// * -> wildcard
// look in all files in all folders in js with .js
// when there's a change in one of those files, run lint
gulp.task('watch', function() { 
  gulp.watch('./js/**/*.js', ['lint']); 
}); 

// task named lint
// look in all files in all folders in js with .js
// looks for ALL THE MISTAKES in your javascript (syntax errors)
gulp.task('lint', function() { 
  return gulp.src('./js/**/*.js') 
  .pipe(jshint()) 
  .pipe(jshint.reporter('jshint-stylish')); 
});