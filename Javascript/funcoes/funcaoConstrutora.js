function Carro(velocidadeMaxima = 200, delta = 5){
  // atributo privado 
  let velocidadeAtual = 0 // pertecente apenas a função Carro
  // metodo publico
  this.acelerar = function(){
    if(velocidadeAtual + delta  <= velocidadeMaxima){
      velocidadeAtual += delta
    }else {
      velocidadeAtual = velocidadeMaxima
    }
  }
  // metodo publico
  this.getVelocidadeAtual = function (){
    return velocidadeAtual
  }
}
const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) // definindo velocidade máxima em 350 e aumenta de 20 em 20
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)