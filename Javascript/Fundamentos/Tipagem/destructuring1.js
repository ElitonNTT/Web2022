// NOVO RECURSO ES2015 ( ECHMA SCRIPT 2015)

const pessoa = {
  nome: 'Eliton',
  idade: 21,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: variavel1, idade: variavel2} = pessoa
console.log(variavel1, variavel2)

const { endereco: {logradouro, numero, cep }} = pessoa    // se não existe dentro do bloco e é declarado aqui, retorna undefined
console.log(logradouro, numero, cep)

const { sobrenome, bemHumorada = true} = pessoa 
console.log(sobrenome, bemHumorada)

//const {naoexiste: {erro1, erro2}} = pessoa    // se tentar extrair de algo que não existe em "pessoa" e nem um atributo, retornará erro.
//console.log(naoExiste, erro1, erro2)
