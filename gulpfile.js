import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import browserSync from "browser-sync";
import minifyjs from "gulp-js-minify";
import cleanCSS from "gulp-clean-css";
import imagemin from "gulp-imagemin";

const BS = browserSync.create();
const sass = gulpSass(dartSass);

function cleanCss() {
  return gulp
    .src("./dist/css/*.css")
    .pipe(cleanCSS({ level: 2 }))
    .pipe(gulp.dest("./dist/css"));
}

function minifyJs() {
  return gulp
    .src("./src/scripts/**/*.js")
    .pipe(minifyjs())
    .pipe(gulp.dest("./dist/script"));
}

function images() {
  return gulp
    .src("./src/img/**/*")
    .pipe(
      imagemin([
        gifsicle({ interlaced: true }),
        mozjpeg({ quality: 75, progressive: true }),
        optipng({ optimizationLevel: 5 }),
        svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest("./dist/img"));
}

// ----

function buildStyles() {
  return gulp
    .src("./src/styles/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist/css"));
}

const moveImages = () =>
  gulp.src("./src/img/**/*").pipe(gulp.dest("./dist/img/"));

// const myStyles = () =>
//   gulp.src("./src/styles/**/*.scss").pipe(gulp.dest("./dist/styles"));

const myFonts = () =>
  gulp.src("./src/fonts/**/*").pipe(gulp.dest("./dist/fonts"));

export const dev = gulp.series(
  buildStyles,
  moveImages,
  // myStyles,
  myFonts,
  minifyJs,
  cleanCss,
  // images,
  () => {
    BS.init({
      server: {
        baseDir: "./",
      },
    });

    gulp.watch(
      "./src/**/*",
      gulp.series(buildStyles, (done) => {
        BS.reload();
        done();
      })
    );
  }
);
