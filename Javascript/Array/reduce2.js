const alunos = [
  {nome: 'Joao', nota: 7.3, bolsista: true },
  {nome: 'Maria', nota: 9.2, bolsista: true },
  {nome: 'Pedro', nota: 9.8, bolsista: false },
  {nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os Alunos são Bolsistas
const todosBolsitas = ( resultado, bolsista) => resultado && bolsista  // isso aqui retorna um boolean (resultado = acumulador, bolsista = condição)
console.log(alunos.map(a => a.bolsista).reduce(todosBolsitas)) // confirma se todos os bolsistas são verdadeiros ou falsos, se tiver 1 falso, retorna false

// Desafio 2: Alum aluno é Bolsista ?
const algumBolsista = (resultado, bolsista) => resultado || bolsista // verifica se bolsista é true ou false, 
console.log(alunos.map(a => a.bolsista)) // mostra o array de verdadeiros e falsos
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)) //  retorna true ou false para 1 ou mais verdadeiros