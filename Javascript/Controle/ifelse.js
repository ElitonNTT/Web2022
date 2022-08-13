const imprimirResultado = function(nota){
  if (nota>=7){
    console.log('Aprovado!')
  }else {
    console.log('Reprovado')
  }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // aqui com string retorna falso, e passa para o reprovado. "Erro" da linguagem