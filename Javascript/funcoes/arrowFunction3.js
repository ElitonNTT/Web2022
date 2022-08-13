let comparaComThis = function(param){
  console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)  // THIS EM UMA FUNÇÃO ARROW NÃO MUDA O CONTEXTO, CONTINUA APONTANDO PARA O OBJETO EM QUE FOI ESCRITO , MESMO COM BIND NÃO MUDA.