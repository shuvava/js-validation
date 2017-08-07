const HttpSrv = require('dev-http-server');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const tasks = require('require-dir')('./tasks', { recurse: true });

const httpSrv = new HttpSrv();

// compiled javascripts
httpSrv.setStatic('/dist', '/dist', '');
// modules
httpSrv.setStatic('/libs', '/node_modules', '');
// html pages
httpSrv.setStatic('/', '/www', 'index.html');

gulp.run('watch:transpile:all');

HttpSrv.run({ httpSrv });
