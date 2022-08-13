function falarDepoisDe(segundos, frase){
  return new Promise((resolve, reject) => { // resolve a ser cumprido, reject em caso de erro ou algo parecido. Pode ser qualquer nome, mas estes são os mais usuais
    setTimeout(() => {
      resolve(frase) // Promises, só aceitam um paramtro
      //reject(frase) 
    }, segundos * 1000) // setTimeOut funciona em milisegundos
  })
}
falarDepoisDe(3, 'Que legal') 
  .then(frase => frase.concat('?1?')) // then é uma função de Promise, 
  .then(outraFrase => console.log(outraFrase))
  //.catch(e => console.log(e)) ----> para tratar o erro do reject