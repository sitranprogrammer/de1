module.exports = function (gulp, $, browserSync) {
	gulp.task('js-min', function () {
		return gulp.src([
				'./dist/js/*.js',
				'!./dist/js/thuvien.js',
			])
			.pipe($.uglify())
			.pipe($.rename({
                suffix: '.min'
            }))
			.pipe(gulp.dest('./dist/js'));
	});
};
