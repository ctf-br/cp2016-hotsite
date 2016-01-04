var gulp = require('gulp');
var connect = require('gulp-connect');
var sftp = require('gulp-sftp');
var livereload = require('gulp-livereload');
var modified = require('gulp-modified');

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

gulp.task('deploy', function () {
	return gulp.src('src/**/*')
        .pipe(modified('sftp'))
		.pipe(sftp({
			host: 'george-ross.dreamhost.com',
			user: 'gamectfbr',
            remotePath: '/home/gamectfbr/cp2016.ctf-br.org/'
		}));
});
