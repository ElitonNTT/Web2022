const resultado = nota => nota >= 7 ?  'Aprovado' : 'Reprovado' // "? " interrogação é o operando ternario, verificando se verdario ou falso

console.log(resultado(7.1))
console.log(resultado(4))

//unário 1 operando
//binário 2 operandos
// ternário 3 operandos

//ternarios são formados por 3 partes, uma expressão " nota >= 7", segunda parte "?", terceira parte valores para expressão "Aprovado : Reprovado"

const resultado2 = nota2 =>{
  return nota2 >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(resultado2(7.1))
console.log(resultado2(4))

// desta maneira é equivalente a primeira maneira ^

function resultado3(nota3){
 return nota3 >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(resultado3(7.1))
console.log(resultado3(4))