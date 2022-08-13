function rand([min = 0, max = 1000]){
  if(min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min ) + min
  return Math.floor(valor)
}

console.log(rand([50,40]))  // aqui inverte os numeros, pois o minimo é maior que o maximo, logo ficara gerando números entre 40 ~ 50
console.log(rand([992]))  // aqui seta o minimo como 992
console.log(rand([, 50])) // aqui seta o maximo como 50
console.log(rand([])) // aqui usa o valores padrões
console.log(rand()) // assim gera erro pois destructura algo undefined.