var gulp = require('gulp');
var runSequence = require('run-sequence');

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('run-ci', function(callback) {
  return runSequence(
    // 'test-ci',
    'e2e-ci',
    callback
  );
});
