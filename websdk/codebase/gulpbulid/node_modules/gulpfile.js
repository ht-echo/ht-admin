var gulp = require("gulp");
var gulpJsmin = require('gulp-uglify');

gulp.task('jswebmin', function(){    //注意，js中可能有多个文件夹，比如说一些插件一些类库之类的,
    //所以看你需求而定路径写对就行
  return  gulp.src('../webVideoCtrl.js')
    .pipe(gulpJsmin())
    .pipe(gulp.dest('dist/webVideoCtrl.js'))

})
gulp.task('jspluginmin', function(){    //注意，js中可能有多个文件夹，比如说一些插件一些类库之类的,
    //所以看你需求而定路径写对就行
  return  gulp.src('../jsPlugin.js')
    .pipe(gulpJsmin())
    .pipe(gulp.dest('jsPlugin-1.2.0.min.js'))

})