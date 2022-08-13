var numero = 1
{
  var numero = 2
  console.log('Dentro = ', numero)
}

console.log('Fora = ', numero)

// por ser um VAR a última escrita sobrescreve as outras. Não acontece se for declarado dentro de uma função.