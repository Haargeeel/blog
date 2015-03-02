var gulp = require('gulp'),
    uglify = require('gulp-uglify')

gulp.task('default', function() {
  console.log('start gulping')
})

gulp.task('scripts', function() {
  gulp.src('src/js/*js')
  .pipe(uglify())
  .pipe(gulp.dest('build/js'))
})
