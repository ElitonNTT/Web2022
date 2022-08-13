// Exemplo em Class Primeiro
class Pessoa {
  constructor(nome){
    this.nome = nome
  }
  falar(){
    console.log(`Meu nome é ${this.nome}`)
  }
}
const p1 = new Pessoa(`João`)
p1.falar()

// Exemplo em Function usando constructor ( equivale ao primeiro exemplo)
function Pessoa2(nome) {
    this.nome = nome
    this.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
  }
}
const p2 = new Pessoa2(`Netto Constructor`)
p2.falar()
