'use strict'
const gulp = require('gulp');
//css压缩及md5化
const less = require('gulp-less');
const lessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new lessAutoprefix({browsers: ['last 2 versions']});

// 同步浏览器
gulp.task('lessTocss',()=>{
    gulp.src(['./css/*.less'])
	.pipe(less({
		plugins: [autoprefix]
	}))
	.pipe(gulp.dest('./css/'))
    ;
});



gulp.task('default', ['lessTocss']);