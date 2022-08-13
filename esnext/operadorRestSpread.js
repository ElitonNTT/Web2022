// operador "...rest"(juntar)/spread(espalhar)
// usar rest com parametro de função (revisão2.js)

// usar spread com objeto

const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario} // pegando os atributos de funaionario na linha 6 e espalhando no objeto da linha 7 "clone"
console.log(clone)
console.log(funcionario)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA] // pegando dados do array da linha 12 (grupoA) e espalhando no array da linha 13 (grupoFinal)
console.log(grupoA) 
console.log(grupoFinal) 