// função sem retorno

function imprimirSoma(a, b){ // declarado duas variáveis que não são let, const ou var.
  console.log(a+b)
  //sem return
}
imprimirSoma(10,40) // resultado somando os parametros a + b
imprimirSoma(10) // retornará undefined pois não tem o parametro b definido
imprimirSoma(10,40,50,60,70,80) // somará apenas os parametros a e b, pois apenas os dois foram definidos como parametro
imprimirSoma() // retornar Not A Number não tem valor definido

// funcao com retorno
function soma(a, b = 0){ 
  return a + b //neste caso return da soma entre a + b
}

console.log(soma(5)) // somando o parametro a '5' + o parametro b '0'
console.log(soma(5,5))  // somando os dois valores, mesmo o b inicialmente sendo 0
console.log(soma()) // isso vai gerar not a number pq o primeiro parametro não foi declarado