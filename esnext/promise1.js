let p = new Promise(function (resolve, reject){
  //resolve(3)
  // resolve({x: 3, y: 4}) -> objeto
   resolve(['Ana', 'Bia', 'Carlos', 'Daniel']) // array
})

p.then(function(valorResolve){ // bloco normal
  console.log(valorResolve)
})

p.then((valorResolve) => { // bloco com Arrow Function
  console.log(valorResolve)
})

p.then((valorResolve) =>  console.log(valorResolve)) // Em uma única linha

// Uma Promise retornar somente um valor, não recebe um outro valor dentro de "resolve" (linha 5)
// Se precisar retornar mais de um valor, criar um objeto dentro de Resolve(linha 5)
p
  .then(valorResolve =>  valorResolve[0]) // Recebi o Array inteiro, mas peguei o de indice 0 ( ana )
    //.then(valorResolve =>  console.log(valorResolve))
  .then(primeiro => primeiro[0])  // recebi a primeira letra de "Ana" = A
    //.then(primeiro => console.log(primeiro))
  .then(letra => letra.toLowerCase()) // transformei a letra A em a
    .then(letraminuscula => console.log(letraminuscula)) // imprimindo A em minusculo

    // O resultado do metodo Then é passado para o proximo Then


    // Exemplo usando funções externas no lugar de arrow function

let p2 = new Promise(function(resolve, reject){
  resolve(['Letra', 'Numero', 'Cidade', 'Pais'])
})

function primeiraPalavra(palavra){
    return palavra[0]
}
function primeiraLetra(letra){
  return letra[0]
}
const letraMin = letra => letra.toLowerCase()

p2
    .then(primeiraPalavra)
        // .then(console.log) // Primeira Palavra = Letra
    .then(primeiraLetra)
        // .then(console.log) // Primeira Letra = L
    .then(letraMin) // transforma o L em minusculo
    .then(console.log) // exibe o L minusculo