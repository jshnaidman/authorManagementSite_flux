"use strict";

var gulp = require('gulp');
var browserify = require('browserify'); //Bundles JS
var source = require('vinyl-source-stream'); //use conventional stream for browserify
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat'); //concat files
var lint = require('gulp-eslint'); //Lint js files, including JSX
var uglify = require('gulp-uglify');
var babelify = require('babelify');
var nodemon = require('gulp-nodemon');  
var sourcemaps = require('gulp-sourcemaps');
var bs = require('browser-sync').create();
var gutil = require('gulp-util');

const paths = {
	css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
			'node_modules/toastr/toastr.scss'
		],
	js: './client/src/**/*.js',
	main: './client/src/main.js',
	images: './client/src/images/*',
	dist: {
		js: './client/dist/scripts',
		css: './client/dist/css',
		images: './client/dist/images',
		base: './client/dist'
	},
	dists: './client/dist/**/*',
	'html': './client/src/index.html'
}

gulp.task('js', () => {
	var b = browserify({
    entries: paths.main,
    debug: true
  	})
	  	.transform('babelify', {presets: ["env", "react", "stage-2"]})
	  	.on('error', (err) => gutil.log(gutil.colors.red(err)));

	return b.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
//			.pipe(uglify())
			.on('error', (err) => gutil.log(gutil.colors.red(err)))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.dist.js));
})
	

gulp.task('serve', ['browser-sync'], () => {
	gulp.watch('./client/dist/**/*').on('change', (file) => {
		bs.reload(file.path)
	})
	gulp.watch('./client/dist/*').on('change', (file) => {
		bs.reload(file.path)
	})
	gulp.watch(paths.js, ['js', 'lint']).on('change', (file) => {
		gutil.log(gutil.colors.yellow('JS changed ' + '(' + file.path + ')'))
	})
	gulp.watch(paths.images, ['images'])
	gulp.watch(paths.html, ['html']).on('change', (file) => {
		gutil.log(gutil.colors.blue('HTML changed ' + '(' + file.path + ')'))
	})
})

gulp.task('browser-sync', ['js', 'nodemon'], () => {
		bs.init({
		proxy: "http://localhost:9005",
        online: true,
        open: 'local',
        browser: "default",
        port: 9006,
        ui: {
        	port: 9007
        }
	});
})

gulp.task('nodemon', [], function (done) {
	var running = false;

	return nodemon({
		script: './server/server.js',
		watch: ['server/**/*']
	})
	.on('start', () => {
		if (!running) {
			done(); //notify taskrunner that task is done
		}
		running = true
	})
	.on('restart', () => {
		setTimeout( () => {
			bs.reload()
		}, 500) //milliseconds
	})
})


gulp.task('images', () => {
	gulp.src(paths.images)
		.pipe(gulp.dest(paths.dist.images))

	gulp.src('./client/src/favicon.ico')
		.pipe(gulp.dest(paths.dist.base))
});

gulp.task('html', () => {
	gulp.src('./client/src/index.html')
		.pipe(gulp.dest(paths.dist.base))
})


gulp.task('css', () => {
	gulp.src(paths.css)
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.css'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.dist.css));
});

gulp.task('lint', () => {
	return gulp.src(paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});


gulp.task('default', [
	'lint',
	'css',
	'html',
	'images',
	'serve'
])