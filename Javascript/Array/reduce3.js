// Criando reduce
Array.prototype.reduce2 = function(callback){
  let acumulador = this[0]
  for(let i = 1; i  < this.length; i++){ // iniciando array no indice 1
    acumulador = callback(acumulador, this[i], this) // acumulador, indice, array atual
  }
  return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma))

// versão mais completa
Array.prototype.reduce3 = function(callback2, valorInicial){  // feito com valor inicial (versão "mais" completa de reduce)
  const indiceInicial = valorInicial ? 0 : 1
  let acumulador2 = valorInicial || this[0]
  for(let i = indiceInicial; i < this.length; i++){
    acumulador2 = callback2(acumulador2, this[i], i, this)
  }
  return acumulador2
}

const soma2 = (total, valor) => total + valor
const nums2 = [1,2,3,4,5,6]
console.log(nums2.reduce3(soma2, 21))
