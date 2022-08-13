//let e const 
{
  var a = 2 // global
  let b = 3
  console.log(b)
}
console.log(a)
//console.log(b) // erro, pois está foro do bloco.

// TEMPLATE SRTING --> `    `    -> podemos quebrar texto.
const produto = 'iPad'
console.log(`${produto} é caro!`)
console.log(`${produto} é 
caro
!`)

// Destructuring
const [l, e, ...tras] = "Eliton" // -> l atribuido ao E, e atribuido ao l
console.log(l,e,tras)

const [x, ,y] = [1,2,3] // espaço entre x e y aqui conta
console.log(x,y)

const {idade : i, nome} = {nome:'Ana', idade: 9} // posso alterar o nome como foi feito em "idade"
console.log(i, nome)