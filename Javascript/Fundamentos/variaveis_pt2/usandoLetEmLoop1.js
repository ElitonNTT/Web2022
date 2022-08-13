for( let contador = 0; contador < 10; contador++){
  console.log('contador = ', contador)
}
// Let funciona apenas dentro de seu bloco.
console.log('A variável sai do loop com o valor após finalizar = ', contador) // deu erro pois o Let só funciona dentro do bloco. Erro Undefined. Variável não foi definida.