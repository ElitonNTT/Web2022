function rand({min = 0, max = 1000}){
  const valor = Math.random() * (max - min) + min
  //return Math.floor(valor) // Math.floor -> floor arredonda para baixo.
  return Math.ceil(valor) // Math.ceil -> ceil arrendonda para cima.
  //return valor -> exemplo não arrendondado
}
console.log(rand({min: 0, max: 100})) // assim funciona, declarando o objeto dentro da função
// ou assim também
const objeto = { min: 0, max: 100} // criando uma nova variável usando destructuring, e inserindo na function
console.log(rand(objeto))

console.log(rand({min:500})) // definite o minimo, mas o máximo continua sendo o definido no funcion
console.log(rand({max:500})) // definite o minimo, mas o minimo continua sendo o definido no funcion
console.log(rand({}))
//console.log(rand()) assim gera erro, pois desestrutura algo undefined

// este exec gera um número aleatório.