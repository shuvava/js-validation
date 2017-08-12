'use strict';

const gulp = require('gulp');
const del = require('del');
const mainBowerFiles = require('main-bower-files');
const flatten = require('gulp-flatten');
// const minify = require('gulp-minify');
// const gutil = require('gulp-util');
// const fs = require('fs');

const LIBS_PATH = './libs';

// // set a variable telling us if we're building in release
// let isRelease = false;
// if (process.env.NODE_ENV && process.env.NODE_ENV === 'Release') {
//     isRelease = true;
// }


gulp.task('cleanup-libraries', () => del(LIBS_PATH));

gulp.task('copy-libraries', ['cleanup-libraries'], () => gulp.src(mainBowerFiles(/* options */), { base: './bower_components' })
    .pipe(flatten())
    // .pipe(isRelease ? minify({ ext: { src: '.js', min: '.js' }, noSource: true }) : gutil.noop())
    .pipe(gulp.dest(LIBS_PATH)));
