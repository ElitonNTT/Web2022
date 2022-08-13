const gulp = require('gulp')
const { series } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(callback){
  gulp.src('src/**/*.js')
    .pipe(babel({ // transforma o código no modo mais compátivel possível
      comments: false, // desativa os comentários
      presets: ["env"] // preset para pegar o JS mais novo possível
    }))
    .pipe(uglify())// transformar tudo em uma linha só, sem espaços.
    .on('error', err =>console.log(err))
    .pipe(concat('codigo.min.js')) // arquivo gerado no final "min" por convenção de minificado
    .pipe(gulp.dest('build'))
  return callback()
}

exports.default = series(padrao)