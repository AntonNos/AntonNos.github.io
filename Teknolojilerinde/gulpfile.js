"use strict";

const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const minifyCSS = require("gulp-csso");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");

sass.compiler = require("node-sass");

function css() {
  return src("./scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'ie 8', 'ie 9'))
    .pipe(minifyCSS({ sourceMap: true }))
    .pipe(sourcemaps.write())
    .pipe(dest("./css"))
}


exports.default = function() {
  watch(["./scss/*.scss", "./scss/**/*.scss"], css);
};
