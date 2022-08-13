const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) // undefined *errado*
console.log(tecnologias.get('react'))// certo
console.log(tecnologias.get('react').framework)// certo

const chavesVariadas = new Map([
  [function () {}, 'função'],
  [{}, 'Objeto'],
  [123, 'Número'],
])

chavesVariadas.forEach((valor, chave) =>{
  console.log(chave, valor)
})

console.log(chavesVariadas.has(123)) // está presente  -> "has" = have . "chavesVariadas.possui(123)?"
chavesVariadas.delete(123) // deletado 123 dentro de chavesVariadas
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // não podemos repetir o valor da Chave
chavesVariadas.set(456, 'b') // o Valor do atributo pode ser repetido
console.log(chavesVariadas)
console.log(chavesVariadas.size)