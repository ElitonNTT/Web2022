// armazenando função em variavel

const imprimirSoma = function(a,b){
  console.log(a+b)
}

imprimirSoma(2,3)

// armazenando função em uma arrow 
const soma = (a,b) => {
  return a+b
}
console.log(soma(2,3))

// retorno implicito - funciona direto, uma função de uma linha apenas.
const subtracao = (a,b) => a - b          // função de uma linha já dá o retorno direto. Não preciso definir o Return ou abrir "bloco"
console.log(subtracao(5,2))