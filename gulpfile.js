var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');


 // Default Task
gulp.task('default', ['minifyJS', 'minifyCSS', 'minifyHTML', 'images', 'watch']);

 // Minify JS Files
gulp.task('minifyJS', function() {
    return gulp.src('src/**/*.js')
        .pipe(uglify().on('error', function(e){
            console.log(e);
         }))

        .pipe(gulp.dest('dist'));
});

 // Minify CSS Files
gulp.task('minifyCSS', function() {
    return gulp.src('src/**/*.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('dist'));
});

 // Minify HTML Files
gulp.task('minifyHTML', function() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true}))
        .pipe(gulp.dest('dist'));
});

 // Optimize images
gulp.task('images', function() {
    return gulp.src('src/**/*.+(png|jpg)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
    // Watch .js files
    gulp.watch('src/**/*.js', ['minifyJS']);
    // Watch .css files
    gulp.watch('src/**/*.css', ['minifyCSS']);
    // Watch image files
    gulp.watch('src/img/**/*', ['images']);
    gulp.watch('src/views/images/**/*', ['images']);
});



