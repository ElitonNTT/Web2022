// Tagged Templates - processa o template String dentro de uma função
function tag(partes, ...valores){
  console.log(partes)
  console.log(valores)
  return 'Outra String'
}
const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)
// situação dificil de acontecer