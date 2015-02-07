var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var open = require('gulp-open');
var sass = require('gulp-sass');
var port = process.env.port || 3000;

gulp.task('sass', function() {
    gulp.src('./src/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/dist'));
});

gulp.task('browserify', function() {
    browserify('./src/app/app.js')
    .transform('reactify', { 'es6': true })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./src/dist'));
});

gulp.task('connect', function() {
    connect.server({
        root: 'src',
        port: port,
        livereload: true
    });
});

gulp.task('open', function(){
    var options = {
        url: 'http://localhost:' + port,
    };
    gulp.src('./src/index.html').pipe(open('', options));
});

gulp.task('html', function () {
    gulp.src('./src/*.html').pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src('./src/dist/**/*.js').pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src('./src/dist/**/*.css').pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('./src/index.html', ['html']);
    gulp.watch('./src/dist/**/*.js', ['js']);
    gulp.watch('./src/dist/**/*.css', ['css']);
    gulp.watch('./src/styles/**/*.scss', ['sass']);
    gulp.watch('./src/app/**/*.js', ['browserify']);
});

gulp.task('default', ['browserify', 'sass']);
gulp.task('serve', ['browserify', 'sass', 'connect', 'open', 'watch']);
