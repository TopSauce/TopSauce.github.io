var gulp = require("gulp"),
	watch = require("gulp-watch"),
	postcss = require("gulp-postcss"),
	autoprefixer = require("autoprefixer"),
	cssvars = require("postcss-simple-vars"),
	nested = require("postcss-nested");

gulp.task("styles", function() {
	return gulp.src("./app/Styles/styles.css")
		.pipe(postcss([cssvars, nested, autoprefixer]))
		.pipe(gulp.dest("./dist/"));
})



gulp.task("watch", function() {
	watch("./app/Styles/*.css", function() {
		gulp.start("styles")
	})
});