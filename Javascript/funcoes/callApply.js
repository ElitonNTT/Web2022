function getPreco (imposto = 0, moeda = 'R$'){
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: `Notebook`,
  preco: 4500,
  desc: 0.15,
  getPreco // esse metodo é associado a linha 1, onde foi declarado
}
global.preco = 20 // preco declarado globalmente
global.desc = 0.1 // desconto declarado globalmente
console.log(getPreco()) // nesse contexto acessa o valor global de This. 
console.log(produto.getPreco()) // valodres do this declarados dentro de Produto

const carro = { preco: 49990, desc: 0.20} // exemplo para usar call
console.log(getPreco.call(carro)) // usando CALL  -> equivalente ao declarado na linha 5
console.log(getPreco.apply(carro)) // usando Apply  -> equivalente ao declarado na linha 5

console.log(getPreco.call(carro, 0.17, '$')) // call 
console.log(getPreco.apply(global, [0.17, '$'])) // apply pede como array -> global usa this global , reclarados na linha 11 e 12