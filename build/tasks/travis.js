var gulp = require('gulp');
var connect = require('gulp-connect');
var runSequence = require('run-sequence');

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('run-ci', function(callback) {
  return runSequence(
    // 'test-ci',
    'start-connect',
    'e2e-ci',
    'stop-connect',
    callback
  );
});

gulp.task('start-connect', function() {
  connect.server({
    port: 9000,
    root: '.'
  });
});

gulp.task('stop-connect', function() {
  connect.serverClose();
});
