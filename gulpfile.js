const { series, src, dest, watch } = require("gulp");
var sass = require("gulp-sass")(require("sass"));

//Funcion que compula SASS

function css() {
  return src("src/scss/app.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(dest("./build/css"));
}

function minificarcss() {
  return src("src/scss/app.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(dest("./build/css"));
}

function watcharchivos() {
  watch("src/scss/**/*.scss", css); // un * = a carpeta  actul **/* = todos los archivos con esa extension en todas las carpetas
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.watcharchivos = watcharchivos;
