// pessoa -> 123
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = {nome: 'Ana'}  -> erro 

Object.freeze(pessoa)  // congelei o objeto, não posso alterar apartir daqui.
// freeze tornei o objeto constante, nada pode ser alterado, deletado ou adicionado
pessoa.nome = 'Maria'
pessoa.endereci = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)