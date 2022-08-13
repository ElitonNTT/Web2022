console.log( 7 / 0) // retorna infinito
console.log("10" + 2) // ele não vai somar, ele vai concatenar, pois o operador + adiciona à string  - neste caso vai ser 102
console.log("10" - 2) //ele vai subtrair pois não faz sentido subtrair 2 de uma string - neste caso vai ser 8
console.log("10"/2) //  neste caso não faz sentido dividir 2 de uma string - neste caso vai ser "5"
console.log("10,2"/2) //  não entende o resultado pois tem decimal
console.log("show!" * 2) // em algumas linguagens ele digita "show" duas vezes
console.log(0.1 + 0.7) // gera imprecisão " i3e"
//console.log(10.toString()) // não consegue passar o 10 para string
console.log((10.345).toFixed(2)) // toFixed limita as casas decimais