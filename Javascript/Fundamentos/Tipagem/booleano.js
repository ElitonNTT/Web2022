let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // operador "!" significa "not", 2 "!!" significam "not-not" -> "true"

console.log("Os verdadeiros...") // numero verdadeiros, espaços vazios, arrays vazios
console.log(!!3)
console.log(!!-1)
console.log(!!"texto")
console.log(!!" ") // aqui tem um espaço, logo não está vazio
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 0))

console.log("Os falsos...") // strings vazias, null, undefined, 
console.log(!!0)
console.log(!!"") // aqui não tem espaço, ou seja, vazio. retorna falso.
console.log(!!null)
console.log(!!NaN) // not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Para finalizar ...")
console.log(!!("" || null || 0 || " ")) // só retorna o valor verdadeiro. O que espaço vazio.
console.log(("" || null || 0 || 'epa')) // se tirar o operador, ele vai retornar o priemiro valor verdadeiro da condição
console.log(("" || null || 0 || "123")) // se tirar o operador, ele vai retornar o priemiro valor verdadeiro da condição
console.log(("" || null || 0 || ""|| 123)) // se tirar o operador, ele vai retornar o priemiro valor verdadeiro da condição

let nome = "Netto"

console.log(nome || "Desconhecido") // se o Let for vazio, vai ler desconhecido pois a string vazio é null, logo falso e o desconhecido entra como condição de verdadeiro.
// caso nome vazio ler "Desconhecido", caso não, leia "Netto"