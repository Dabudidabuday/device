let {gulp, src, dest, watch, series, parallel} = require('gulp');
let sass = require('gulp-sass');
let concat = require('gulp-concat');

function compile() {
    return src('app/scss/index.scss') 
    .pipe(sass())
    .pipe(concat('index.css'))
    .pipe(dest('dist'))
}

exports.compile = compile;

function watcher() {
    watch('app/scss/index.scss').on('change', compile);
}

exports.watcher = watcher;

    