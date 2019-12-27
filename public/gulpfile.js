const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//Compiling the SCSS into CSS
function style() {
    // 1. Where is my scss file
    return gulp.src('./scss/**/*.scss')
    // 2. Pass that file through the sass compiler
    .pipe(sass().on('error', sass.logError))
    // 3. Where do I save the newly compiled CSS?
    .pipe(gulp.dest('./css'))
    // 4. Stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    //Calling and displaying changes automatically that pertain to css, html, and js files using browser-sync
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change',browserSync.reload);
}
exports.style = style;
exports.watch = watch;