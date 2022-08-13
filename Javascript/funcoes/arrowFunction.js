let dobro = function(a){ // function padrão
  return 2 * a
}
console.log(dobro(2))

dobro = (a) =>{       // arrow function remove o function e coloca a arrow
  return 2 * a
}
console.log(dobro(3))

dobro = a => 2*a        // utitlizavel com 1 parametro e 1 linha, remove ( ) e o return implicito
console.log(dobro(5))

let ola = function(){ // convencional
  return 'ola'
} 
ola = () => 'Olá' // funções sem parametros, vazios
ola = _ =>'Olá '    // possui parametro, mas neste caso não é obrigatório
console.log(ola())
console.log(ola())