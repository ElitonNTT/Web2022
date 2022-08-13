const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem usar callback
let notasBaixas1 = [] // cria uma array vazio para receber os valores
for(let i in notas){ // cria a um let i dentro de "notas" para ser percorrido
  if(notas[i] < 7){  // se nota menor que 7
    notasBaixas1.push(notas[i]) // push notas<7 para dentro de notas[i] 
  }
}
console.log(notasBaixas1)

// usando callback
const notasBaixas2 = notas.filter(function (nota){
  return nota < 7
})
console.log(notasBaixas2)

// usando callback com arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)