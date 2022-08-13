console.log(typeof console)

console.log(Math.ceil(6.1))   // objeto MATH  usando ponto para acessar o atributo "ceil" que é usado para arrendondar resultado para cima.

const objeto = {}
objeto.nome = 'Eliton'                      // exemplo de notacao "ponto"
//objeto['nome'] = 'Eliton'                 // desta maneira também funciona, é mais flexivel com nomenclatura porém não é tão prático
objeto.sobrenome = 'Netto'
//objeto['sobrenome']  = 'Netto'
console.log(objeto.nome, objeto.sobrenome)

function objeto2(nome){
  this.nome = nome          // tornando nome publicado usando THIS
  this.exec = function(){    // tornando exec publicando usando THIS, então a função se tornou exec() fora do escopo
    console.log('exec ...')
  }
}
const objeto3 = new objeto2('Celular')    // aqui acesasmos objeto2 transfromando objeto 3 em um 'novo' objeto2, porém com 'nome' celular
const objeto4 = new objeto2('Livro')
console.log(objeto3.nome)
console.log(objeto4.nome)
objeto4.exec()        // aqui acessamos a função usando objeto4 ( uma const) , porém usando exec(). Linha 14 exec se iguala a uma função.