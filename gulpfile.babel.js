'use strict';

import  gulp            from 'gulp';
import  autoprefixer    from 'gulp-autoprefixer';
import  sass            from 'gulp-sass';
import  concat          from 'gulp-concat';
import  cssmin          from 'gulp-cssmin';
import  imagemin        from 'gulp-imagemin';
import  rename          from 'gulp-rename';
import  uglify          from 'gulp-uglify-es';
import  jpegoptim       from 'imagemin-jpegoptim';
import  optipng         from 'imagemin-optipng';
import  svgo            from 'imagemin-svgo';
import  livereload      from 'gulp-livereload';
import  connect         from 'gulp-connect';
import  open            from 'gulp-open';
import  htmlPartial     from 'gulp-html-partial';
import  notify          from 'gulp-notify';

//local-server
gulp.task('server', () => {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

//livereload
gulp.task('livereload', () => {
    gulp.src('./dist/**/*')
        .pipe(connect.reload());
});

//watch the file changes to trigger livereload
gulp.task('watch', () => {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./dist/**/*', ['livereload']);
});

gulp.task('sass', () => {
    gulp.src('./src/scss/style.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('css-minify', () => {
    gulp.src('./dist/css/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css/min'));
});

gulp.task('imgmin', () => {
    return gulp.src('./images/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [jpegoptim({
                progressive: true
            }), optipng({
                optimizationLevel: 3
            }), svgo()]
        }))
        .pipe(gulp.dest('./images'));
});

// Scripts
gulp.task('scripts', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

//inject html partials to index
gulp.task('html', () => {
    gulp.src(['src/templates/index.html'])
        .pipe(htmlPartial({
            basePath: 'src/templates/'
        }))
        .pipe(rename({ basename: "index" }))
        .pipe(gulp.dest('dist'));
});

// Open one file with default application
gulp.task('open', () => {
    return gulp.src('./dist/index.html')
        .pipe(open());
});

gulp.task('css', ['sass', 'css-minify']);
gulp.task('images', ['imgmin']);
gulp.task('serv', ['server', 'livereload', 'watch']);
gulp.task('default', ['css', 'imgmin', 'scripts', 'open', 'server', 'livereload', 'watch']);