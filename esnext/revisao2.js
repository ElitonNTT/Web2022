// arrow function
const soma = (a, b) => a + b // quando tem apenas 1 parametro, não precisa de parenteses. 
console.log(soma(2,3)) // Se colocar um corpo { } precisará  de return

// Arrow function (this), this em uma arrow function está associada ao local que foi escrita. Neste caso no escopo global, no modulo, no arquivo revisão2.js
const lexico1 = () => console.log(this == exports) // this = module.exports
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametros default
function log( texto = 'Node'){
  console.log(texto)
}
log() // valor padrão
log(null)
log('Sou mais Forte') 

// operador REST (spread)
function total(...numeros){ // ... é o rest, array "infinito" chamdao numeros
  let total = 0
  numeros.forEach(n => total += n)
  return total
}
console.log(total(1,2,3,4,5))