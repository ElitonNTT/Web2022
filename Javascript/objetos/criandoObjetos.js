// usando a notação literal, usnado {}
const obj1 = {}
console.log(obj1)

// Objecto em JS - operador new
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras - função minha 
function Produto(nome, preco, desc){
  this.nome = nome
  this.getPrecoComDesconto = () =>{
      return preco * (1 - desc)
  }
}
const produto1 = new Produto('Caneta', 7.99, 0.15)
const produto2 = new Produto('Notebook', 2998.99, 0.25)
console.log(produto1.getPrecoComDesconto(), produto2.getPrecoComDesconto())

// Função Factory para criar objetos
function criarFuncionario(nome, salarioBase, faltas){
  return {
    // abrindo um objeto literal, linha1
    nome,
    salarioBase,
    faltas,
    getSalario(){
      return (salarioBase/30) * (30 - faltas)
    }
  }
}
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)