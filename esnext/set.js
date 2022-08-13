// Não aceita repetição  e não é indexada, não tem indice/posição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeira').add('Corinthian') // pode ser escrito em uma linha só ( encadeado)
times.add('Flamengo')
times.add('Vasco') // não aceita repetição

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) // Camel Case online, letra maiuscula faz diferença
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] // não aceita repetição ( Lucas 2x)
const nomesSet = new Set(nomes)
console.log(nomesSet)
console.log(nomes)