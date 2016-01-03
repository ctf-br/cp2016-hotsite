var gulp = require('gulp');
var connect = require('gulp-connect');
var sftp = require('gulp-sftp');
var livereload = require('gulp-livereload');

gulp.task('connect', function() {
    connect.server({
        root: 'src',
        livereload: true
    });
});

gulp.task('reload', function() {
    livereload.reload();
})

gulp.task('watch', ['connect'], function() {
    livereload.listen({ basePath: '/src' });
    gulp.watch('src/**/*', ['reload']);
});
