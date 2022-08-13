let valor // não inicializado
console.log(valor) // retorna undefined pois não tem valor definido ( não foi iniciado)
valor = null // ausencia de valor
console.log(valor) // retorna null pois não tem valor, foi iniciado, mas sem valor
//console.log(valor.toString()) // erro, pois null não referencia ao toString()

const produto = {} // uma contate Objeto, vazio.
console.log(produto.preco) // erro pois dentro de produto não existe a propriedade "preco"
console.log(produto) // retorna o objeto vazio. ( pois ainda está vazio)

produto.preco = 3.50 // definindo a propriedade preco ao objeto, agora tem valores dentro do objeto
console.log(produto)

produto.preco = undefined // jamais fazer isso, deixa o "undefined" ser gerado pela linguagem, não defina erros.
console.log(!!produto.preco)
//delete produto.preco              // se quiser zerar o objeto, use o Delete ou defina valor 0
console.log(produto) // array vazio após ser deletado

produto.preco = null // deixando Preço sem valor
console.log(!!produto) // verificando booleano
console.log(produto) // retornara null pois foi definido null

// cuidado ao usar null, na hora de acessar os valores de uma variável "null" retornará erro.
// evitar ao máximo usar undefined, a linguagem retornará os erros.