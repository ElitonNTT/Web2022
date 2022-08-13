function gerarNumerosEntre(min, max, tempo){
  if(min > max)
   [max, min ] = [min, max] // invertendo valores minimo e máximo se o usuário digitar o maior numero no lugar do primeiro
  return new Promise(resolve => {
    setTimeout(function(){
      const fator = max - min + 1
      const aleatorio = parseInt(Math.random() * fator) + min
      resolve(aleatorio)
    }, tempo)
  })
}

function gerarVariosNumeros(){
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 3000),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 60, 1500),
  ])
} //Promise com Promise.all, só exibe resultado apos todos elas forem cumpridas
gerarVariosNumeros()
  .then(numeros => console.log(numeros))