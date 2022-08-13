const fabricante = ["Mercedez", "Audi", "BMW"]

function imprimir(nome, indice){
  console.log(`${indice+1}. ${nome}`)
}
fabricante.forEach(imprimir) // forEach é uma função que existe dentro de arrays

fabricante.forEach(fabricante=> console.log(fabricante))