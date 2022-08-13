// hoisting é o "efeito" de "elevar" algo. Exemplo ->
// mesmo a variável sendo declarado abaixo, ela "sobe" 
// isso quando usamos VAR

console.log('a = ', a)
var a = 2
console.log('a = ', a)

console.log('b = ', b)
let b = 3
console.log('b = ', b)

// o mesmo não ocorre com let. Retorna erro.

// dicas de JAVASCRIPT no canal do youtube -> COD3R - video apenas sobre hoisting. 11 minutos.
