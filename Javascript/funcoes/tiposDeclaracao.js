console.log(soma(2,3))
console.log(sub(2,3))
console.log(mult(2,3))

// function declaration ( tradicional )
function soma(x,y){ // neste metodo, antes de declarar é possível ler a função ( linha1)
  return x+y
}
console.log(soma(2,4))

// function expression
const sub = function(x,y){ // neste metodo, só funciona após ser declarada. ( linha2)
  return x-y
}
console.log(sub(5,2))

//named function expression  // pouco usado
const mult = function mult(x,y){ // neste metodo também não funciona, pois a const só foi declarada na linha 18
  return x*y
}
console.log(mult(2,5))