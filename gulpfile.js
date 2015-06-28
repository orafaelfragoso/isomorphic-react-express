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
    greact       = require('gulp-react'),
    rename       = require('gulp-rename'),
    source       = require('vinyl-source-stream'),
    browserify   = require('browserify'),
    babelify     = require('babelify'),
    watchify     = require('watchify'),
    path         = require('path');

var paths = {
  src: ['lib/**/*.jsx'],
  dist: 'public',
  sourceRoot: path.join(__dirname, '.'),
},
bundler = watchify(browserify({
  entries: './lib/Main.jsx',
  extensions: ['.jsx'],
  debug: true
}));

// Babel transform
bundler.transform(babelify);

// On updates recompile
bundler.on('update', bundle);

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
  return gulp.src(paths.src,  {base: '.'})
        .pipe(greact())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

function bundle() {
  console.log('\n Compiling Javascript...');

  return bundler.bundle()
      .on('error', function (err) {
        console.log(err.message);
        this.emit("end");
      })
      .pipe(source('main.js'))
      .pipe(gulp.dest('public/vendors'));
}

gulp.task('bundle', function () {
    return bundle();
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

gulp.task('default', ['bundle'], function() {
  watch('lib/**/*.scss', batch(function(events, done){
    gulp.start('stylesheets', done);
  }));

  watch(['app.js', 'config.js', 'middlewares.js'], batch(function(events,done) {
    gulp.start(['jshint'], done);
  }));

  watch('lib/*/images/**/*', batch(function(events, done){
    gulp.start('images', done);
  }));
});
