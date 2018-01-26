'use strict';

import  gulp            from 'gulp';
import  autoprefixer    from 'gulp-autoprefixer';
import  sass            from 'gulp-sass';
import  concat          from 'gulp-concat';
import  cssmin          from 'gulp-minify-css';
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
import  rimraf          from 'rimraf';

var path = {
    build: {
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/images/',
        fonts: 'dist/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/**/*.js',
        style: 'src/scss/**/*.scss',
        img: 'images/**/*.*',
        fonts: 'fonts/**/*.*'
    },
    clean: './dist'
};

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
    gulp.src(path.src.style)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(path.build.css));
});

gulp.task('css-minify', () => {
    gulp.src(path.build.css + '**/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(path.build.css));
});

gulp.task('fonts', () => {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('imgmin', () => {
    return gulp.src(path.src.img)
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
        .pipe(gulp.dest(path.build.img));
});

// Scripts
gulp.task('scripts', () => {
    return gulp.src(path.src.js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.build.js))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(notify({ message: 'Scripts task complete' }));
});

//inject html partials to index
gulp.task('html', () => {
    gulp.src([path.src.html])
        .pipe(htmlPartial({
            basePath: 'src/templates/'
        }))
        .pipe(rename({ basename: "index" }))
        .pipe(gulp.dest(path.build.html));
});

// Open one file with default application
gulp.task('open', () => {
    return gulp.src('./dist/index.html')
        .pipe(open());
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('css', ['sass', 'css-minify']);
gulp.task('images', ['imgmin']);
gulp.task('serv', ['server', 'livereload', 'watch']);
gulp.task('default', ['clean', 'html', 'css', 'imgmin', 'fonts', 'scripts', 'open', 'server', 'livereload', 'watch']);