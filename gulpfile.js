'use strict';

var gulp         = require('gulp'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    sass         = require('gulp-sass'),
    concat       = require('gulp-concat'),
    jshint       = require('gulp-jshint'),
    imagemin     = require('gulp-imagemin'),
    flatten      = require('gulp-flatten'),
    filter       = require('gulp-filter'),
    watch        = require('gulp-watch'),
    batch        = require('gulp-batch'),
    greact       = require('gulp-react'),
    rename       = require('gulp-rename'),
    browserify   = require('gulp-browserify');


gulp.task('stylesheets', function(){
  return gulp.src('lib/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .on('error', function handleError(err) {
          console.error(err.toString());
          this.emit('end');
        })
        .pipe(autoprefixer())
        .pipe(concat('application.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('jshint', function () {
  return gulp.src(['lib/**/*.js', 'app.js', 'config.js', 'middlewares.js'])
        .pipe(greact())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('browserify', function () {
  return gulp.src(['lib/Main.js'])
        .pipe(browserify({
          debug: true,
          transform: [ 'reactify' ]
        }))
        .pipe(rename('main.js'))
        .pipe(gulp.dest('public/vendors'));
});

gulp.task('images', function () {
  return gulp.src('lib/*/images/**/*')
        .pipe(imagemin({
          optimizationLevel: 3,
          progressive: true,
          interlaced: true
        }))
        .pipe(gulp.dest('public/images'));
});

// Optimize and copy fonts from bower components to public.
// gulp.task('fonts', function () {
//   return gulp.src($.mainBowerFiles())
//         .pipe(filter('**/*.{eot,svg,ttf,woff}'))
//         .pipe(flatten())
//         .pipe(gulp.dest('public/fonts'));
// });

gulp.task('build', ['stylesheets', 'jshint', 'browserify', 'images']);

gulp.task('default', function() {
  watch('lib/**/*.scss', batch(function(events, done){
    gulp.start('stylesheets', done);
  }));

  watch(['lib/**/*.js', 'app.js', 'config.js', 'middlewares.js'], batch(function(events, done){
    gulp.start(['jshint', 'browserify'], done);
  }));

  watch('lib/*/images/**/*', batch(function(events, done){
    gulp.start('images', done);
  }));
});
