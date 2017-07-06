var gulp=require('gulp'),
	uglify=require('gulp-uglify'),
	minify=require('gulp-minify'),
	concat=require('gulp-concat'),
	rename=require('gulp-rename'),
	del=require('del');
gulp.task('minify',function(){
	return gulp.src('js/script.js')
	.pipe(concat('main.js'))
	.pipe(gulp.dest('minified/js'))
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('minified/js')); 
})