const notas = [6.7,7.4,9.8,8.1,7.7]

for( let indice in notas ){
  console.log(indice, notas[indice])
}

const pessoa = {
  nome: 'Ana',
  sobrenrome: 'Silva',
  idade: 29,
  peso: 64
}

for(let atributo in pessoa){
  console.log(`${atributo} =  ${pessoa[atributo]}`)
}