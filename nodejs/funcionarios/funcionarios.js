const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
// axios é um cliente http ( ler documentação, pode ser útil)

const chineses = f => f.pais === 'China' // Filter
const mulheres = f => f.genero === 'F' // Filter
const menorSalario = (func, funcAtual) => { // reduce recebe 2 parametros Primeiro = Acumulador Segundo = Elemento Atual
  return func.salario < funcAtual.salario ? func : funcAtual
} // Reduce

axios.get(url).then(response =>{
  const funcionarios = response.data
  console.log(funcionarios)

  // mulher chinesa com menor salário ->
  const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario) // filtro final
  console.log(func)
})

