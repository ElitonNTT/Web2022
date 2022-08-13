console.log('Exemplo 1')
var numero = 1
{
  let numero = 2
  console.log("Dentro", numero)
}
console.log("Fora", numero)

/// Let tem escopo de bloco e função. 
/// VAR tem escopo global
console.log('Exemplo 2')
var numero = 1
{
  let numero2 = 2
  console.log("Dentro", numero)
}
console.log("Fora", numero)