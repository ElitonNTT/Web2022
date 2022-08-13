const { parallel } = require('gulp')
const gulp = require('gulp')
// const {series} = require('gulp')
const series = gulp.series // funciona como na linha 2

const antes1 = callback =>{
  console.log('tarefa antes1')
  return callback()
}
const antes2= callback =>{
  console.log('tarefa antes2')
  return callback()
}

function copiar(callback){
  //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
  gulp.src('pastaA/**/*.txt')
    // .pipe(imagePelaMetade())   --exemplos de PipeLine
    // .pipe(imageEmPretoEBranco())
    // .pipe(transformacaoA())
    // .pipe(transformacaoB())
    // .pipe(transformacaoC())
    .pipe(gulp.dest('pastaB'))
  console.log('Tarefa de Copiar')
  return callback()
}
const fim = callback =>{
  console.log('tarefa Fim')
  return callback()
}

module.exports.default = series(
  parallel(antes1, antes2),
  copiar,
  fim,)
//gulp expera um arquivo gulpfile como padrão para ser executado no terminal
// e também precisa ser exportado