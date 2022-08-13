// comprando this dentro do node
console.log(this === global) // this em node aponta para module.exports
console.log(this === module) // false

console.log(this === module.exports) // true
console.log(this === exports) // true

function logThis(){
  console.log('Dentro de uma função...')
  console.log(this === exports)
  console.log(this === module.exports)
  console.log(this === global)

  this.perigo = '...' // isso está dentro do objeto GLOBAL * CUIDADO *
}
logThis() // dentro de uma função This não aponta para exports e nem para module.exports
//this dentro de uma função aponta para global
this.perigo = '...' // isso está dentro do objeto MODULE.EXPORTS é o mesmo que global.perigo, criei perigo dentro de global


