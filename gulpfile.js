var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    tasks = require('require-dir')('./tasks', { recurse: true });

gulp.task('default', function(cb) {
    return runSequence('test', 'build', cb);
});

