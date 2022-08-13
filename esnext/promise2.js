//Exemplo usando Callback
/* setTimeout(function () {
  console.log('Executando Callback ...')
    setTimeout(function(){
      console.log('Executando Callback...')
        setTimeout(function(){
          console.log('Executando Callback...')
        },2000)
    },2000)
}, 2000) */ /// função executava após 2000 milisegundos (editável)

// Mesmo exemplo acima, mas usando Promises
function esperarPor(tempo = 2000){
  return new Promise(function(resolve){
      setTimeout(function(){
        console.log('executando Promise')
        resolve()
      }, tempo)
  })
}
esperarPor()
  .then(() => esperarPor())
  .then(esperarPor)
