function teste1 (num){
  if(num > 7)
    console.log(num) // apenas essa vai ser lida, pois não tem o bloco do IF definido
    console.log('Final') // vai ser executado independente do resultado do if, pois não tem o bloco e do IF, prática ruim.
}
teste1(6)
teste1(8)

// exemplo prático de como está acontecendo acima
function teste1 (num){
  if(num > 7)
      console.log(num) // essa linha está associada ao if
  console.log('Final') // não está associado ao if
}
teste1(6)
teste1(8)


function teste2(num){
  if(num > 7);  // if termina aqui
  // nova sentença de codigo
  {
    console.log(num)
  } // evitar uso de ; em estruturas de controle.
}
teste2(6)
teste2(8)