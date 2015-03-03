var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    react = require('gulp-react'),
    stylus = require('gulp-stylus')

gulp.task('default', function() {
  console.log('start gulping')
})

gulp.task('react', function() {
  return gulp.src('src/react/*.jsx')
  .pipe(react())
  .pipe(gulp.dest('build/react'))
})

gulp.task('copy', function() {
  return gulp.src('src/view/*.jade')
  .pipe(gulp.dest('build'))
})

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/js'))
})

gulp.task('css', function() {
  return gulp.src('src/css/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('build/css'))
})
