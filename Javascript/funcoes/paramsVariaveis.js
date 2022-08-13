function soma(){
  let soma = 0;
  for( indice in arguments){
    soma += arguments[indice]
  }return soma
}
// arguments é um array vazio definido para todas as funções, com ele você acessar parametros que não "existem"
console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))

console.log(soma(1.1,2.2,'teste'))
console.log(soma('a','b','teste'))