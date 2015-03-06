var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    react = require('gulp-react'),
    stylus = require('gulp-stylus'),
    reactify = require('reactify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream')

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

gulp.task('js', function() {
  var b = browserify('./src/js/app.js')
    .transform(reactify);

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('build/js'))
})


//gulp.task('scripts', function() {
  //return gulp.src('src/js/*.js')
  //.pipe(uglify())
  //.pipe(gulp.dest('build/js'))
//})

gulp.task('css', function() {
  return gulp.src('src/style/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('build/style'))
})
