const escola = "Netto"

console.log(escola.charAt(4)) // charAt - aponta o caractere na posição desejada
console.log(escola.charAt(5)) // outras linguagens apontariam erro aqui. JavaScript é relativamente flexivel
console.log(escola.charCodeAt(3))// aponta o resultado do caractere na tabela asc alt + 116 = "t"
console.log(escola.indexOf('o')) // mostra a posição
console.log(escola.substring(1)) // vai ler apartir da posição 1
console.log(escola.substring(0, 3)) // vai lar as string apartir do 0 até o 3
console.log("Meu nome é ".concat(escola).concat("!")) // conc usado para concatenar 
console.log("Meu nome é " + "Eliton " +  escola + " !") // o operador + também é usado para concatenar
console.log("3" + 2) // ele não vai somar, ele vai concatenar, pois entende o 3 como uma string
console.log(escola.replace('N', 'B')) // substitui "N" por "B" - é possível usar "Regex" para manipular de maneira global
console.log(escola.replace('e', 'i')) // substitui "e" por "i"  - replace usado para manipular a variavel

// array 
console.log("Ana, Maria, Pedro".split(',')) // transformado em um array separando por virgulas - pois tem viruglas separando os nomes e por isso foi usado virgula no split