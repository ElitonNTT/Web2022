// função anonima é uma função sem nome declarado

const soma = function (x,y) {
  return x + y
}

const imprimirResultado = function (a,b, operacao = soma){ // função anonima
  console.log(operacao(a,b))
}
imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3,4, function(x,y){ // função anonima dentro do parametro da funcao imprimiResultado
  return x-y 
})
imprimirResultado(3,4, (x,y) => x*y) // função anonima arrow (funções arrow são sempre anonimas)

const pessoa = {
  falar: function(){  // função anonima dentro do objeto
    console.log('Olá')
  }
}
pessoa.falar()