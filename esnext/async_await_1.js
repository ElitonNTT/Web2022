// Function do promise2.js, definido melhor usando arrowfunction
function esperarPor(tempo = 2000){
  return new Promise(function(resolve){
      setTimeout(() => resolve(), tempo)
  })
}

/* esperarPor(2000)
  .then(() => console.log('Executando Promise 1...'))
  .then(esperarPor)
  .then(() => console.log('Executando Promise 2...'))
  .then(esperarPor)
  .then(() => console.log('Executando Promise 3...')) */

function retornarValor(){
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000)
  })
}

// mesmo exemplo, usando asyn e await
async function executar (){

  let valor = await retornarValor()
  await esperarPor(1500)
  console.log(`Async/Await ${valor}...`)
  await esperarPor(1500)
  console.log(`Async/Await ${valor+1}...`)
  await esperarPor(1500)
  console.log(`Async/Await ${valor+2}...`)

  await esperarPor(1500)
  console.log('Async/Await 1...')
  await esperarPor(1500)
  console.log('Async/Await 2...')
  await esperarPor(1500)
  console.log('Async/Await 3...')

  return valor + 3 // linha 41
}
async function executarDeVerdade(){
  const resposta = await executar()
  console.log(valor)
}
executar().then(console.log)