const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const concat = require("gulp-concat");
const autoprefix = require("gulp-autoprefixer");

// source directories
const sourceSass = "./sass/main.sass";
const distCSS = "./css/";

gulp.task('sass', () => {
    return gulp.src(sourceSass)
        .pipe(sass({
            // outputStyle: 'compressed'
        }))
        .pipe(concat('main.css'))
        .pipe(autoprefix({
            browsersList: ['last 20 versions'],
            cascade: true
        }))
        .pipe(gulp.dest(distCSS))
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: './'
    });

    gulp.watch("sass/*", gulp.series('sass'));
    gulp.watch("sass/blocks/*", gulp.series('sass'));
    gulp.watch("./*").on('change', () => {
        browserSync.reload();
        done();
    });
    // gulp.watch("sass/blocks/*").on('change', () => {
    //     browserSync.reload();
    //     done();
    // });
    done();
});

gulp.task('sass', gulp.series('sass'));
gulp.task('default', gulp.series('sass', 'serve'));