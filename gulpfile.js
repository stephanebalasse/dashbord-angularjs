var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    rimraf = require('gulp-rimraf'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    zip = require('gulp-zip'),
    compass = require('gulp-compass');

gulp.task('compass', function() {
    return gulp.src('scss/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            css: 'css',
            sass: 'scss'
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('css'));
});

gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(rimraf());
});

gulp.task('imagemin', ['clean'], function() {
    return gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('partials', ['imagemin'], function() {
    return gulp.src('partials/**/*')
        .pipe(gulp.dest('dist/partials'))
});

gulp.task('polices', ['partials'], function() {
    return gulp.src('polices/**/*')
        .pipe(gulp.dest('dist/polices'))
});

gulp.task('dist', ['compass', 'polices'], function() {
    var assets = useref.assets();

    return gulp.src('*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['dist'] ,function() {
    return gulp.src('dist/**/*')
        .pipe(zip('livrable.zip'))
        .pipe(gulp.dest('dist/livrable'));
});