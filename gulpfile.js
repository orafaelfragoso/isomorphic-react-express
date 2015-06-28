'use strict';

var gulp         = require('gulp'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    sass         = require('gulp-sass'),
    concat       = require('gulp-concat'),
    jshint       = require('gulp-jshint'),
    imagemin     = require('gulp-imagemin'),
    watch        = require('gulp-watch'),
    batch        = require('gulp-batch'),
    source       = require('vinyl-source-stream'),
    browserify   = require('browserify'),
    babelify     = require('babelify'),
    path         = require('path');


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
  return gulp.src('*.js',  {base: '.'})
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('bundle', function () {
  console.log('Compiling Javascript...');

  var bundler = browserify({
    entries: './lib/Main.jsx',
    extensions: ['.jsx'],
    paths: ['.node_modules', './lib/'],
    debug: true,
  });

  bundler.transform(babelify);

  return bundler.bundle()
      .on('error', function (err) {
        console.log(err.message);
        this.emit('end');
      })
      .pipe(source('main.js'))
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

gulp.task('build', ['stylesheets', 'jshint', 'images', 'bundle']);

gulp.task('default', function() {
  watch('lib/**/*.scss', batch(function(events, done){
    gulp.start('stylesheets', done);
  }));

  watch(['lib/**/*.jsx'], batch(function(events, done) {
    gulp.start(['bundle'], done);
  }));

  watch(['app.js', 'config.js', 'middlewares.js'], batch(function(events, done) {
    gulp.start(['jshint'], done);
  }));

  watch('lib/*/images/**/*', batch(function(events, done){
    gulp.start('images', done);
  }));
});
