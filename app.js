const HttpSrv = require('dev-http-server');
const gulp = require('gulp');
require('./gulpfile');

gulp.start('copy-libraries');

const traspile = require('js-transpiler');

traspile.run({
    config: {
        lint: {
            failAfterError: false,
        },
    },
});

const httpSrv = new HttpSrv();

// compiled javascripts
httpSrv.setStatic('/dist', '/dist', '');
// modules
httpSrv.setStatic('/libs', '/libs', '');
// html pages
httpSrv.setStatic('/', '/www', 'index.html');

HttpSrv.run({ httpSrv });
